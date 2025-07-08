export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Statement</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              KLAQ 95.5 FM is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Accessibility Features</h2>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>• Keyboard navigation support</li>
              <li>• Screen reader compatibility</li>
              <li>• High contrast color schemes</li>
              <li>• Descriptive alt text for images</li>
              <li>• Clear heading structure</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Feedback</h2>
            <p className="text-gray-700 mb-4">
              We welcome your feedback on the accessibility of our website. Please let us know if you 
              encounter accessibility barriers.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-blue-900 mb-2">Contact Us About Accessibility</h3>
              <p className="text-blue-800 text-sm">
                Email: <a href="mailto:accessibility@klaq.com" className="text-blue-600 hover:text-blue-700">accessibility@klaq.com</a><br/>
                Phone: (915) 544-KLAQ<br/>
                Mail: KLAQ 95.5 FM, Accessibility Coordinator, El Paso, TX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
