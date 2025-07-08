export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          News Article {id}
        </h1>
        <p className="text-xl text-gray-600">
          This is a placeholder for news article {id}.
        </p>
      </div>
    </main>
  )
}
