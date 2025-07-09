import Link from 'next/link';
import Image from 'next/image';

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  category: 'Rock News' | 'Local' | 'Station' | 'Music Industry' | 'Concert'
  image?: string
  tags: string[]
  readTime: string
}

// News articles data that matches our main news page
const newsArticles: Record<string, NewsArticle> = {
  '1': {
    id: '1',
    title: 'Metallica Announces Summer Tour with Stop in El Paso',
    excerpt: 'The metal legends will bring their M72 World Tour to the Don Haskins Center this August.',
    content: `Metallica has officially announced their highly anticipated summer tour dates, with El Paso making the cut! The legendary metal band will perform at the Don Haskins Center on August 15th as part of their M72 World Tour. This marks their first appearance in El Paso since 2019.

The M72 World Tour features a unique "No Repeat Weekend" format, where no songs are repeated between the two nights in each city. El Paso fans will be treated to what promises to be an unforgettable night of metal mayhem.

"We're beyond excited to bring the M72 tour to El Paso," said Lars Ulrich, Metallica's drummer. "The energy from Southwest audiences is incredible, and we can't wait to rock the Don Haskins Center."

Tickets go on sale this Friday, July 12th at 10:00 AM through Ticketmaster. KLAQ listeners can get early access starting Thursday at 10:00 AM with the code word "SEEK". Prices range from $75 to $350, with VIP packages available.

The show will feature special guests Pantera and Mammoth WVH, making this a triple-threat of metal excellence. Gates open at 6:00 PM, with the show starting at 7:30 PM.

For KLAQ, this represents a major coup in bringing world-class rock and metal acts to the El Paso market. "We've been working for months to help make this happen," said Buzz Adams. "Our listeners deserve the best, and it doesn't get much better than Metallica."

The Don Haskins Center is expected to sell out quickly, so fans are encouraged to be ready when tickets go on sale. This is likely to be one of the biggest concerts in El Paso this year.`,
    author: 'Buzz Adams',
    publishDate: '2025-07-08',
    category: 'Concert',
    image: '/images/news/metallica-tour.jpg',
    tags: ['Metallica', 'Concert', 'El Paso', 'Metal'],
    readTime: '3 min read'
  },
  '2': {
    id: '2',
    title: 'KLAQ\'s Summer Rock Festival Lineup Revealed',
    excerpt: 'Get ready for the biggest rock festival in the Southwest this September.',
    content: `KLAQ is proud to announce the complete lineup for our annual Summer Rock Festival! This year's event promises to be our biggest and best yet, featuring headliners Foo Fighters, Green Day, and an incredible supporting cast of rock legends and rising stars.

The festival will take place at Ascarate Park on September 21-22, transforming the lakeside venue into the Southwest's premier rock destination. Two stages will feature continuous music from noon to midnight each day.

Saturday's headliners include:
• Foo Fighters (Main Stage, 9:00 PM)
• Alice in Chains (Main Stage, 7:00 PM)  
• The Black Keys (Second Stage, 8:00 PM)
• Local heroes Desert Kings (Second Stage, 6:00 PM)

Sunday's lineup features:
• Green Day (Main Stage, 9:00 PM)
• Pearl Jam (Main Stage, 7:00 PM)
• Queens of the Stone Age (Second Stage, 8:00 PM)
• El Paso's own Sonic Riot (Second Stage, 6:00 PM)

"This lineup represents everything we love about rock music," said KLAQ Program Director Mike Rodriguez. "From established legends to breakthrough artists, and especially our incredible local talent."

Two-day festival passes start at $199, with single-day tickets available for $125. VIP packages include backstage access, premium viewing areas, and exclusive merchandise.

The festival will also feature local food vendors, craft beer gardens, and interactive experiences. Camping options are available at nearby Franklin Mountains Ranch for the full festival experience.

Tickets go on sale Monday, July 15th at www.klaqrockfest.com. KLAQ listeners can access a special pre-sale starting this Saturday with code "ROCK95".`,
    author: 'Kat',
    publishDate: '2025-07-07',
    category: 'Station',
    image: '/images/news/rock-festival.jpg',
    tags: ['KLAQ', 'Festival', 'Foo Fighters', 'Green Day'],
    readTime: '4 min read'
  },
  '3': {
    id: '3',
    title: 'Pearl Jam\'s New Album "Dark Matter" Rocks the Charts',
    excerpt: 'The Seattle legends return with their most powerful album in years.',
    content: `Pearl Jam's latest release "Dark Matter" has shot straight to #1 on the rock charts, proving that the grunge pioneers still have what it takes after more than three decades in the business. The album features 11 tracks of pure rock energy that longtime fans will absolutely love.

The album marks Pearl Jam's return to their heavier, more experimental sound that made them legends in the '90s grunge scene. Produced by Andrew Watt (known for his work with Ozzy Osbourne and Post Malone), "Dark Matter" showcases the band's evolution while staying true to their roots.

Standout tracks include the driving opener "Scared of Fear," the anthemic "Running," and the emotionally charged "Upper Hand." Eddie Vedder's vocals are as powerful as ever, while the rhythm section of Jeff Ament and Matt Cameron provides the thunderous backbone fans expect.

"This album feels like a rebirth for us," Vedder said in a recent interview. "We wanted to capture that raw energy we had in our early days while incorporating everything we've learned over the years."

The album debuted at #5 on the Billboard 200 and #1 on the Rock Albums chart, marking their highest chart position in over a decade. Critics have praised the album's cohesive sound and the band's renewed energy.

KLAQ has been featuring tracks from "Dark Matter" in heavy rotation since its release. "Our listeners can't get enough of it," said afternoon host Kat. "It's exactly what rock fans have been waiting for."

Pearl Jam will be supporting the album with a massive world tour, with rumors of a Southwest date that could include El Paso. The band hasn't played the Sun City since their memorable 2018 show at the Don Haskins Center.`,
    author: 'Chuck Armstrong',
    publishDate: '2025-07-06',
    category: 'Rock News',
    image: '/images/news/pearl-jam.jpg',
    tags: ['Pearl Jam', 'New Album', 'Grunge', 'Chart'],
    readTime: '3 min read'
  },
  '4': {
    id: '4',
    title: 'El Paso Music Scene Spotlight: Local Band "Desert Kings" Signs Record Deal',
    excerpt: 'Homegrown talent gets picked up by major label after years of grinding.',
    content: `El Paso's own Desert Kings have officially signed with Atlantic Records, marking a major milestone for the local music scene! The four-piece rock band has been a staple of the Borderland music community for over five years, and their hard work has finally paid off in a big way.

Formed in 2019, Desert Kings consists of vocalist/guitarist Miguel Santos, lead guitarist Sofia Rodriguez, bassist Carlos Mendez, and drummer Alex Chen. The band's unique blend of alternative rock, desert blues, and Latin influences has made them favorites at local venues like Lowbrow Palace, The Depot, and Tricky Falls.

"We never gave up on the dream," said Santos. "Playing shows across El Paso and building our fanbase here has been incredible. This city has so much musical talent."

The signing came after their self-released EP "Borderland Blues" gained traction on streaming platforms and caught the attention of A&R scouts. The EP has accumulated over 2 million streams since its release last year.

Atlantic Records A&R representative Jennifer Walsh flew to El Paso specifically to see the band perform at Lowbrow Palace. "Their energy is infectious, and their songwriting is sophisticated beyond their years," Walsh commented.

The band will be recording their debut full-length album in Los Angeles this fall, working with producer Nick Raskulinecz (known for his work with Alice in Chains and Mastodon). They plan to maintain their El Paso roots while expanding their reach nationally.

"El Paso will always be home," Rodriguez emphasized. "We want to put this city on the map for rock music."

Desert Kings will perform what might be their last local show before heading to LA this Saturday night at Lowbrow Palace. The all-ages show starts at 8:00 PM, with tickets available at the door.

KLAQ has been supporting Desert Kings since their early days, regularly featuring their music and hosting them for acoustic sessions. "It's incredible to see local talent reach this level," said morning host Buzz Adams.`,
    author: 'Glenn Garza',
    publishDate: '2025-07-05',
    category: 'Local',
    image: '/images/news/desert-kings.jpg',
    tags: ['El Paso', 'Local Music', 'Record Deal', 'Desert Kings'],
    readTime: '4 min read'
  },
  '5': {
    id: '5',
    title: 'Rock and Roll Hall of Fame Announces 2025 Inductees',
    excerpt: 'Several classic rock icons finally get their due recognition.',
    content: `The Rock and Roll Hall of Fame has announced its 2025 class of inductees, including long-overdue recognition for several classic rock legends. The ceremony will take place in Cleveland this October, and KLAQ will be providing exclusive coverage of the historic event.

This year's inductees represent a diverse cross-section of rock music spanning five decades:

**Performer Category:**
• Foreigner - The arena rock legends finally get their due after years of eligibility
• Sheryl Crow - Solo career spanning alternative rock, country, and pop
• The Dave Matthews Band - Jam rock pioneers with a devoted fanbase
• Peter Frampton - Guitar virtuoso and live performance legend
• Big Brother and the Holding Company - Janis Joplin's backing band

**Musical Influence Award:**
• Dionne Warwick - Soul and pop influence on countless rock artists
• Link Wray - Guitar innovator who influenced generations of rock musicians

The inclusion of Foreigner has been particularly celebrated by classic rock fans who felt the band was long overdue for recognition. With hits like "Cold as Ice," "Hot Blooded," and "I Want to Know What Love Is," Foreigner dominated rock radio throughout the late '70s and '80s.

"It's about time!" said KLAQ's classic rock specialist Glenn Garza. "Foreigner's influence on arena rock cannot be overstated. They deserve this recognition."

Peter Frampton's induction acknowledges both his solo career and his groundbreaking live album "Frampton Comes Alive!" which became one of the best-selling live albums in rock history.

The ceremony will take place on October 19th at the Rocket Mortgage FieldHouse in Cleveland. HBO will broadcast the event in November, with KLAQ planning special coverage and contests leading up to the ceremony.

Fan voting played a significant role in the selection process, with over 1 million votes cast through the Rock Hall's website. KLAQ encouraged listener participation throughout the voting period.

"The Rock and Roll Hall of Fame represents the history and evolution of our beloved genre," said KLAQ Program Director Mike Rodriguez. "We're thrilled to see these deserving artists finally get their recognition."`,
    author: 'Nico Adjemian',
    publishDate: '2025-07-04',
    category: 'Rock News',
    image: '/images/news/hall-of-fame.jpg',
    tags: ['Hall of Fame', 'Classic Rock', 'Induction', 'Awards'],
    readTime: '3 min read'
  },
  '6': {
    id: '6',
    title: 'KLAQ Listener Appreciation Night - Thank You El Paso!',
    excerpt: 'Over 2,000 fans joined us for an unforgettable night of rock at The Plaza Theatre.',
    content: `What an incredible night! Our annual Listener Appreciation event at The Plaza Theatre was a massive success, with over 2,000 of our amazing listeners joining us for live music, prizes, and great company. Thank you to everyone who came out and made it special!

The historic Plaza Theatre downtown was the perfect venue for celebrating our rock community. From 7:00 PM to midnight, the venue was packed with energy as local bands took the stage and prizes were given away throughout the night.

The evening kicked off with acoustic sets from KLAQ DJs, including Buzz Adams performing classic rock covers and Kat showcasing her hidden vocal talents. "Seeing our listeners up close reminds us why we love what we do," said Buzz.

Local bands Sonic Riot, Electric Desert, and headliners Cactus Groove provided the night's main entertainment. Each band brought their unique style to the historic stage, with Cactus Groove closing out the night with an extended set that had the entire crowd on their feet.

Throughout the evening, we gave away over $10,000 in prizes, including:
• Two Metallica concert tickets (the night's biggest prize)
• KLAQ Summer Rock Festival VIP passes
• Signed guitars from various artists
• KLAQ merchandise packages
• Gift certificates to local businesses

"The energy was absolutely electric," said evening host Chuck Armstrong, who served as MC for the event. "You could feel the love for rock music and our community."

The event also featured food trucks from local favorites like L&J Cafe and Cattleman's Steakhouse, along with a beer garden sponsored by local breweries. The Plaza Theatre's vintage atmosphere provided the perfect backdrop for celebrating El Paso's rock community.

Special thanks to our sponsors who made the night possible: Viva Toyota, Casa Ford, Southwest University, and El Paso Electric. Their support allows us to give back to the community that supports us every day.

"Events like this remind us that radio is about community," said Station Manager Laura Martinez. "We're not just playing music; we're bringing people together."

Planning for next year's event is already underway, with discussions about potentially expanding to multiple venues. Stay tuned to KLAQ for updates on future listener events!`,
    author: 'Joanna Barba',
    publishDate: '2025-07-03',
    category: 'Station',
    image: '/images/news/appreciation-night.jpg',
    tags: ['KLAQ', 'Fans', 'Event', 'Plaza Theatre'],
    readTime: '4 min read'
  }
}

// Generate static params for build time
export async function generateStaticParams() {
  return Object.keys(newsArticles).map(id => ({ id }))
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = newsArticles[id]
  
  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/news" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            Back to News
          </Link>
        </div>
      </main>
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Rock News': return 'bg-purple-100 text-purple-800'
      case 'Local': return 'bg-green-100 text-green-800'
      case 'Station': return 'bg-red-100 text-red-800'
      case 'Music Industry': return 'bg-blue-100 text-blue-800'
      case 'Concert': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/news" className="text-gray-500 hover:text-red-600">News</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-gray-500 text-sm ml-4">{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center text-gray-500 mb-8">
              <span>By {article.author}</span>
              <span className="mx-4">•</span>
              <span>{formatDate(article.publishDate)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      {article.image && (
        <section className="mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Article Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span className="text-gray-600 font-medium mr-4">Tags:</span>
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(newsArticles)
                .filter(relatedArticle => relatedArticle.id !== id && relatedArticle.category === article.category)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`} className="group">
                    <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 bg-gray-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Related Image</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(relatedArticle.category)}`}>
                          {relatedArticle.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-red-600 transition-colors duration-300">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">{relatedArticle.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            ← Back to All News
          </Link>
        </div>
          </section>
        </main>
      )
    }

