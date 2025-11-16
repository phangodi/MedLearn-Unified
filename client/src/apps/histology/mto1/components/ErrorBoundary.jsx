import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('ERROR CAUGHT:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border-4 border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ Error in {this.props.version} format</h2>
          <div className="bg-white p-4 rounded mb-4">
            <p className="font-mono text-sm text-red-800 mb-2">
              <strong>Error:</strong> {this.state.error?.toString()}
            </p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600">Show stack trace</summary>
              <pre className="text-xs overflow-auto max-h-64 mt-2 bg-gray-100 p-2 rounded">
                {this.state.error?.stack}
              </pre>
            </details>
          </div>
          <button 
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}


export default ErrorBoundary;
