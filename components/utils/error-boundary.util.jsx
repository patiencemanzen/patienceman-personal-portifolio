import React from 'react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Example: Send to Sentry, LogRocket, etc.
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.toString(),
          fatal: false
        });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--primary)',
          backgroundColor: 'var(--background)',
          border: '1px solid var(--primary-dim)',
          borderRadius: '8px',
          margin: '1rem'
        }}>
          <h2>Something went wrong</h2>
          <p>We apologize for the inconvenience. Please try refreshing the page.</p>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '1rem', textAlign: 'left' }}>
              <summary>Error Details (Development Only)</summary>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontSize: '0.8rem',
                backgroundColor: 'var(--background-dim)',
                padding: '1rem',
                borderRadius: '4px',
                marginTop: '0.5rem'
              }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--secondary)',
              color: 'var(--background)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;