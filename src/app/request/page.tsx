export default function RequestPage() {
  return (
    <div className="page-container bg-gray-50">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Request Your Favorite Rock Songs</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Want to hear your favorite song on KLAQ 95.5 FM? Send us your request and help shape the sound of El Paso's Best Rock!
            </p>
            
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-2">Request Line</h2>
              <p className="text-lg">(915) 544-KLAQ</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="song" className="block text-sm font-medium text-gray-700 mb-2">
                  Song Title *
                </label>
                <input
                  type="text"
                  id="song"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter song title"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-2">
                  Artist *
                </label>
                <input
                  type="text"
                  id="artist"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter artist name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label htmlFor="dedication" className="block text-sm font-medium text-gray-700 mb-2">
                  Dedication (Optional)
                </label>
                <textarea
                  id="dedication"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Want to dedicate this song to someone special? Let us know!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors"
              >
                Submit Request
              </button>
            </form>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Ways to Request</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-600">(915) 544-KLAQ</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">requests@klaq.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
