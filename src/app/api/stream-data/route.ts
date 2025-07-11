import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

// CORS-friendly API route to fetch streaming data
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    if (type === 'nowplaying') {
      // Try multiple endpoints for now playing data
      const endpoints = [
        'https://np.tritondigital.com/public/nowplaying?mountName=KLAQ&numberToFetch=1&eventType=track',
        'https://nowplaying.amperwave.net/prt/nowplaying/2/10/3584/nowplaying.json',
        'https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQFMAAC/nowplaying'
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            headers: {
              'User-Agent': 'KLAQ-Website/1.0',
              'Accept': 'application/json',
            },
            cache: 'no-cache',
          });

          if (response.ok) {
            const data = await response.json();
            
            // Try to extract track info from different API formats
            let trackInfo = null;
            
            if (data.nowplaying && data.nowplaying.length > 0) {
              const track = data.nowplaying[0];
              trackInfo = {
                title: track.title || track.songTitle || 'Rock Music',
                artist: track.artistName || track.artist || 'KLAQ Artist',
                album: track.albumName || track.album || 'Live Album',
                year: track.releaseDate ? new Date(track.releaseDate).getFullYear().toString() : '2020'
              };
            } else if (data.now_playing) {
              const track = data.now_playing;
              trackInfo = {
                title: track.song || track.title || 'Rock Music',
                artist: track.artist || 'KLAQ Artist',
                album: track.album || 'Live Album',
                year: track.year || '2020'
              };
            }
            
            if (trackInfo) {
              return NextResponse.json({
                success: true,
                data: trackInfo,
                source: endpoint
              });
            }
          }
        } catch (endpointError) {
          continue;
        }
      }
    } else if (type === 'listeners') {
      // Try multiple endpoints for listener count
      const endpoints = [
        'https://nowplaying.amperwave.net/prt/listeners/3584',
        'https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQFMAAC',
        'https://streaming.townsquaremedia.com/stats/klaq'
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            headers: {
              'User-Agent': 'KLAQ-Website/1.0',
              'Accept': 'application/json',
            },
            cache: 'no-cache',
          });

          if (response.ok) {
            const data = await response.json();
            
            let listenerCount = null;
            if (data.listeners && typeof data.listeners === 'number') {
              listenerCount = data.listeners;
            } else if (data.current_listeners && typeof data.current_listeners === 'number') {
              listenerCount = data.current_listeners;
            } else if (data.listener_count && typeof data.listener_count === 'number') {
              listenerCount = data.listener_count;
            }
            
            if (listenerCount !== null) {
              return NextResponse.json({
                success: true,
                data: { listeners: Math.max(listenerCount, 500) },
                source: endpoint
              });
            }
          }
        } catch (endpointError) {
          continue;
        }
      }
    }

    // If all endpoints fail, return fallback data
    return NextResponse.json({
      success: false,
      error: 'All endpoints failed',
      fallback: true
    }, { status: 503 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      fallback: true
    }, { status: 500 });
  }
}
