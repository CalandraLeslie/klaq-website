import Link from 'next/link';

// Generate static params for build time
export async function generateStaticParams() {
  // Generate some sample news articles for static export
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  // Sample news articles data
  const articles: Record<string, { title: string; content: string; date: string; author: string }> = {
    '1': {
      title: 'KLAQ Welcomes New Morning Show Host',
      content: 'We are excited to announce the addition of our new morning show host who brings years of experience in rock radio to El Paso...',
      date: 'July 8, 2025',
      author: 'KLAQ News Team'
    },
    '2': {
      title: 'Local Band Spotlight: Desert Rockers',
      content: 'This week we are featuring local El Paso band Desert Rockers, who have been making waves in the regional music scene...',
      date: 'July 7, 2025',
      author: 'Music Director'
    },
    '3': {
      title: 'KLAQ Summer Concert Series Announced',
      content: 'Get ready for an amazing lineup of concerts this summer! KLAQ is proud to present our annual Summer Concert Series...',
      date: 'July 6, 2025',
      author: 'Events Team'
    },
    '4': {
      title: 'Classic Rock Hour Extended to Two Hours',
      content: 'Due to popular demand, we are expanding our Classic Rock Hour to a full two-hour block every weekday...',
      date: 'July 5, 2025',
      author: 'Programming Director'
    },
    '5': {
      title: 'KLAQ Charity Drive Raises $50,000',
      content: 'Thanks to our amazing listeners, KLAQ has successfully raised $50,000 for local charities during our recent drive...',
      date: 'July 4, 2025',
      author: 'Community Outreach'
    }
  }

  const article = articles[id] || {
    title: 'Article Not Found',
    content: 'The requested article could not be found.',
    date: '',
    author: ''
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link href="/news" className="text-red-600 hover:text-red-800 font-medium">
              ← Back to News
            </Link>
          </nav>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <span>By {article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </header>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {article.content}
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
