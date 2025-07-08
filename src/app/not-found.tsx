import Link from 'next/link';
import { Radio, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl shadow-red-500/40">
            <Radio className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-6xl font-black text-white mb-4">404</h1>
          <h2 className="text-2xl font-bold text-red-400 mb-4">Signal Lost</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            This page has gone off the air!
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
