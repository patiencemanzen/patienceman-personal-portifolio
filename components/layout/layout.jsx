import Navbar from './navbar'
import Footer from './footer'
import ErrorBoundary from '../utils/error-boundary.util'
import { usePerformanceMonitoring } from '../utils/performance.util'

export default function Layout({ children }) {
	// Initialize performance monitoring
	usePerformanceMonitoring();

	return (
		<ErrorBoundary>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</ErrorBoundary>
	)
}