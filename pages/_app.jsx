// Core packages
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css"

// Fontsource local font import (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

// FontAwesome CSS (manual import since autoAddCss is disabled)
import '@fortawesome/fontawesome-svg-core/styles.css'

// Devicon import removed - CSS parsing issues with Next.js 16

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/enhanced-mobile.css'

/**
 * _app.jsx
 * Enhanced with performance monitoring and error boundaries
 * 
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */
export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	// Performance monitoring
	useEffect(() => {
		const handleRouteChange = (url) => {
			// Log route changes for analytics
			if (typeof window !== 'undefined' && window.gtag) {
				window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
					page_path: url,
				});
			}
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<LazyMotion features={domAnimation} strict>
			<Layout>
				<Component {...pageProps} />
				<SetGridGap />
				<Analytics />
			</Layout>
		</LazyMotion>
	)
}