export default function ContestRules() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contest Rules</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Official contest rules for KLAQ 95.5 FM promotions and giveaways.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-red-900 mb-2">⚠️ Important Notice</h3>
              <p className="text-red-800 text-sm">
                You must be 18+ years old and a resident of the El Paso area to participate in most contests. 
                Specific rules may vary by contest.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">General Eligibility</h2>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>• Must be 18 years of age or older</li>
              <li>• Must be a legal resident of Texas, New Mexico, or Mexico within our listening area</li>
              <li>• Employees of Townsquare Media and their families are not eligible</li>
              <li>• Winners are limited to one major prize per 30-day period</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How to Enter</h2>
            <p className="text-gray-700 mb-4">
              Contest entry methods vary by promotion. Common entry methods include:
            </p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>• Calling our request line: (915) 544-KLAQ</li>
              <li>• Text messaging to designated numbers</li>
              <li>• Online entry forms on our website</li>
              <li>• Social media interactions</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Prize Claims</h2>
            <p className="text-gray-700 mb-4">
              Winners must claim prizes within 30 days of notification. Valid photo ID required for pickup. 
              Prizes cannot be transferred or exchanged for cash value.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For specific contest questions, contact us at{' '}
              <a href="mailto:contests@klaq.com" className="text-red-600 hover:text-red-700">
                contests@klaq.com
              </a>{' '}
              or call (915) 544-KLAQ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
