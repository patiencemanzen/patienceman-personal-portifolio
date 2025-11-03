/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	
	// Performance optimizations
	experimental: {
		optimizeCss: true,
	},
	
	// Compression
	compress: true,
	
	env: {
		dir: '/',
	},
	
	// Image optimization
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
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
			{
				protocol: 'https',
				hostname: 'drive.google.com',
				pathname: '/**'
			},
		],
	},
	
	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;