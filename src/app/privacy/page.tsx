export default function PrivacyPolicy() {
  return (
    <div className="page-container bg-gray-50">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              At KLAQ 95.5 FM, we are committed to protecting your privacy and maintaining your trust. This policy explains how we collect, 
              use, and protect your personal information when you visit our website or interact with our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              We use the information we collect to provide and improve our services, communicate with you about 
              contests and promotions, and ensure the best possible experience on our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@klaq.com" className="text-red-600 hover:text-red-700">
                privacy@klaq.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
