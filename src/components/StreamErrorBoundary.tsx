'use client';

import React from 'react';

interface StreamErrorBoundaryProps {
  children: React.ReactNode;
}

interface StreamErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class StreamErrorBoundary extends React.Component<StreamErrorBoundaryProps, StreamErrorBoundaryState> {
  constructor(props: StreamErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): StreamErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Stream component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Stream Temporarily Unavailable</h3>
          <p className="text-gray-300 mb-4">
            We're experiencing technical difficulties with the live stream. Please try refreshing the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
