export default function TermsOfService() {
  return (
    <div className="page-container bg-gray-50">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              By accessing and using the KLAQ 95.5 FM website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Use License</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on KLAQ's website for 
              personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contest Participation</h2>
            <p className="text-gray-700 mb-4">
              All contest participants must be 18+ years old and residents of the El Paso area unless 
              otherwise specified. Contest rules are subject to change without notice.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              Questions about the Terms of Service should be sent to us at{' '}
              <a href="mailto:legal@klaq.com" className="text-red-600 hover:text-red-700">
                legal@klaq.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
