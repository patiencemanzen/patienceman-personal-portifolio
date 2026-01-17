module.exports = {
	reactStrictMode: true,
	env: {
		dir: '/',
	},
	// Performance optimizations
	compress: true,
	poweredByHeader: false,
	
	// Image optimization
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**'
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '?app=portfolio-theme-jqe0jhmif-atlamors.vercel.app'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**'
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
				pathname: '/**'
			},
		],
	},
	
	// Headers for security and performance
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin'
					},
				],
			},
		];
	},

	// Rewrites to make sitemap accessible at /sitemap.xml
	async rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: '/api/sitemap',
			},
		];
	},
}