import { Metadata } from 'next';
import LiveStreamInfo from '@/components/LiveStreamInfo';

export const metadata: Metadata = {
  title: 'Live Stream Info | 95.5 KLAQ',
  description: 'Current show information, now playing, and live stream for KLAQ 95.5 FM El Paso.',
  keywords: 'KLAQ, live stream, now playing, current show, radio, El Paso',
};

export default function LiveStreamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">Live Stream</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Information
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Stay connected with KLAQ 95.5 FM's live stream. See what's playing now, 
              current show information, and listener count in real-time.
            </p>
          </div>

          {/* Live Stream Widget */}
          <div className="max-w-2xl mx-auto">
            <LiveStreamInfo compact={false} showControls={true} />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Now Playing</h3>
              <p className="text-gray-400">
                Real-time track information including song, artist, album, and year
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📻</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Live Shows</h3>
              <p className="text-gray-400">
                Current show information with host details and schedule times
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Live Listeners</h3>
              <p className="text-gray-400">
                See how many people are tuned in to El Paso's Best Rock
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ad-Free Stream Information
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                Our live stream info widget provides real-time updates without any advertisements. 
                Get pure information about what's playing on KLAQ 95.5 FM, current show details, 
                and live listener counts - all in a clean, professional interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
