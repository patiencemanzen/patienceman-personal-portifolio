// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Load custom scripts in <Head>
 * Enhanced with SEO and mobile optimization meta tags
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Primary Meta Tags */}
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="Manirabona Patience - Full Stack Software Engineer specializing in MERN stack, TypeScript, React.js, Node.js, and cloud technologies. Building scalable, user-centric applications." />
				<meta name="keywords" content="Full Stack Developer, Software Engineer, React Developer, Node.js, TypeScript, MERN Stack, Web Development, Manirabona Patience, Rwanda Developer" />
				<meta name="author" content="Manirabona Patience" />
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				
				{/* Mobile Optimization */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="format-detection" content="telephone=no" />
				
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://patienceman.com/" />
				<meta property="og:title" content="Manirabona Patience - Full Stack Software Engineer" />
				<meta property="og:description" content="Full Stack Software Engineer specializing in building scalable, user-centric applications with React.js, Node.js, TypeScript, and modern web technologies." />
				<meta property="og:image" content="https://patienceman.com/img/og-image.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Manirabona Patience Portfolio" />
				<meta property="og:locale" content="en_US" />
				
				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://patienceman.com/" />
				<meta name="twitter:title" content="Manirabona Patience - Full Stack Software Engineer" />
				<meta name="twitter:description" content="Full Stack Software Engineer specializing in building scalable, user-centric applications with React.js, Node.js, TypeScript, and modern web technologies." />
				<meta name="twitter:image" content="https://patienceman.com/img/og-image.jpg" />
				<meta name="twitter:creator" content="@patiencemanzen" />
				
				{/* Favicons */}
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://patienceman.com/" />
				
				{/* Preconnect for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
				
				{/* Structured Data - JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							"name": "Manirabona Patience",
							"jobTitle": "Full Stack Software Engineer",
							"url": "https://patienceman.com",
							"sameAs": [
								"https://www.linkedin.com/in/manirabona-patience/",
								"https://github.com/patiencemanzen"
							],
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Kigali",
								"addressCountry": "Rwanda"
							},
							"alumniOf": {
								"@type": "Organization",
								"name": "University of Rwanda"
							},
							"knowsAbout": [
								"JavaScript",
								"TypeScript",
								"React.js",
								"Node.js",
								"MongoDB",
								"Full Stack Development",
								"Web Development",
								"Software Engineering"
							],
							"description": "Full Stack Software Engineer with 4+ years of experience building scalable, user-centric applications. Specializing in MERN stack, TypeScript, and cloud technologies."
						})
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}