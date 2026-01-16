import React from 'react';
import css from '../../styles/blocks/project-placeholder.module.scss';

/**
 * ProjectPlaceholder Component
 * Generates professional SVG placeholders for projects without images
 * 
 * @param {string} projectName - Name of the project
 * @param {string} category - Category/type of project
 * @param {array} stack - Technology stack used
 * @param {string} variant - Visual variant (default, gradient, pattern)
 */
export default function ProjectPlaceholder({ 
	projectName = "Project", 
	category = "Full Stack",
	stack = [],
	variant = "gradient"
}) {
	
	// Generate a consistent color based on project name
	const getProjectColor = (name) => {
		const colors = [
			'#667eea', // Purple
			'#f093fb', // Pink
			'#4facfe', // Blue
			'#00f2fe', // Cyan
			'#43e97b', // Green
			'#fa709a', // Rose
			'#fee140', // Yellow
			'#f78ca0', // Coral
		];
		const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
		return colors[index % colors.length];
	};

	const primaryColor = getProjectColor(projectName);
	const gradientId = `gradient-${projectName.replace(/\s+/g, '-').toLowerCase()}`;
	
	// Get first 3 tech stack icons
	const displayStack = stack.slice(0, 3);

	if (variant === "gradient") {
		return (
			<div className={css.placeholder} style={{ background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}40 100%)` }}>
				<svg viewBox="0 0 800 600" className={css.svg}>
					<defs>
						<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style={{ stopColor: primaryColor, stopOpacity: 0.2 }} />
							<stop offset="100%" style={{ stopColor: primaryColor, stopOpacity: 0.6 }} />
						</linearGradient>
					</defs>
					
					{/* Main content */}
					<g transform="translate(400, 220)">
						{/* Code symbol */}
						<path 
							d="M -40 -20 L -60 0 L -40 20" 
							stroke={primaryColor} 
							strokeWidth="3" 
							fill="none" 
							strokeLinecap="round"
							strokeLinejoin="round"
							opacity="0.8"
						/>
						<path 
							d="M 40 -20 L 60 0 L 40 20" 
							stroke={primaryColor} 
							strokeWidth="3" 
							fill="none" 
							strokeLinecap="round"
							strokeLinejoin="round"
							opacity="0.8"
						/>
						<line 
							x1="-10" y1="-25" x2="10" y2="25" 
							stroke={primaryColor} 
							strokeWidth="3" 
							strokeLinecap="round"
							opacity="0.8"
						/>
					</g>
					
					{/* Project name */}
					<text 
						x="400" 
						y="340" 
						textAnchor="middle" 
						className={css.projectName}
						fill={primaryColor}
						fontWeight="700"
						fontSize="36"
					>
						{projectName}
					</text>
					
					{/* Category */}
					<text 
						x="400" 
						y="380" 
						textAnchor="middle" 
						className={css.category}
						fill={primaryColor}
						opacity="0.7"
						fontSize="18"
						fontWeight="500"
					>
						{category}
					</text>
					
					{/* Tech stack indicators */}
					{displayStack.length > 0 && (
						<g transform="translate(400, 420)">
							{displayStack.map((tech, idx) => (
								<circle 
									key={idx}
									cx={(idx - 1) * 40} 
									cy="0" 
									r="15" 
									fill={primaryColor} 
									opacity="0.3"
								/>
							))}
						</g>
					)}
				</svg>
			</div>
		);
	}

	if (variant === "pattern") {
		return (
			<div className={css.placeholder} style={{ background: '#f8f9fa' }}>
				<svg viewBox="0 0 800 600" className={css.svg}>
					<defs>
						<pattern id={`pattern-${gradientId}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
							<circle cx="5" cy="5" r="2" fill={primaryColor} opacity="0.1" />
						</pattern>
					</defs>
					
					{/* Pattern background */}
					<rect x="0" y="0" width="800" height="600" fill={`url(#pattern-${gradientId})`} />
					
					{/* Centered icon */}
					<g transform="translate(400, 250)">
						<circle r="80" fill={primaryColor} opacity="0.1" />
						<circle r="60" fill={primaryColor} opacity="0.15" />
						<path 
							d="M -30 -15 L -50 0 L -30 15 M 30 -15 L 50 0 L 30 15 M -8 -20 L 8 20" 
							stroke={primaryColor} 
							strokeWidth="4" 
							fill="none" 
							strokeLinecap="round"
							strokeLinejoin="round"
							opacity="0.6"
						/>
					</g>
					
					{/* Project name */}
					<text 
						x="400" 
						y="380" 
						textAnchor="middle" 
						fill={primaryColor}
						fontWeight="700"
						fontSize="32"
					>
						{projectName}
					</text>
					
					{/* Category */}
					<text 
						x="400" 
						y="415" 
						textAnchor="middle" 
						fill={primaryColor}
						opacity="0.6"
						fontSize="16"
						fontWeight="500"
					>
						{category}
					</text>
				</svg>
			</div>
		);
	}

	// Default minimal variant
	return (
		<div className={css.placeholder} style={{ background: `${primaryColor}10` }}>
			<svg viewBox="0 0 800 600" className={css.svg}>
				{/* Simple centered design */}
				<g transform="translate(400, 280)">
					<rect 
						x="-120" 
						y="-100" 
						width="240" 
						height="160" 
						rx="12" 
						fill="none" 
						stroke={primaryColor} 
						strokeWidth="3"
						opacity="0.4"
					/>
					<text 
						y="10" 
						textAnchor="middle" 
						fill={primaryColor}
						fontWeight="600"
						fontSize="28"
					>
						{projectName}
					</text>
					<text 
						y="40" 
						textAnchor="middle" 
						fill={primaryColor}
						opacity="0.6"
						fontSize="14"
						fontWeight="500"
					>
						{category}
					</text>
				</g>
			</svg>
		</div>
	);
}
