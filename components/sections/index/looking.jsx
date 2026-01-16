// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Icon 		from '../../utils/icon.util';

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

// Import content
import content from '../../../content/index/looking.json';

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXLrg']}>
				<section className={section.preTitle}>
					<h4>{content.preTitle}</h4>
				</section>
				<h1 className={section.heading}>{content.title}</h1>
				<p className={`${section.subTitle}`}>{content.subTitle}</p>

				{/* Interests Grid */}
				<div className={looking.interestsGrid}>
					{content.interests.map((interest, index) => (
						<div key={index} className={looking.interestCard}>
							<div className={looking.iconWrapper}>
								<Icon icon={interest.icon} />
							</div>
							<h3>{interest.title}</h3>
							<p>{interest.description}</p>
						</div>
					))}
				</div>

				{/* Work Preferences */}
				<div className={looking.preferences}>
					<div className={looking.preferenceItem}>
						<h4>Work Type</h4>
						<p>{content.workPreferences.type.join(', ')}</p>
					</div>
					<div className={looking.preferenceItem}>
						<h4>Location</h4>
						<p>{content.workPreferences.location.join(', ')}</p>
					</div>
					<div className={looking.preferenceItem}>
						<h4>Availability</h4>
						<p>{content.availability.status} - {content.availability.notice} notice</p>
					</div>
				</div>

				{/* Call to Action */}
				<div className={looking.cta}>
					<h2>{content.callToAction.title}</h2>
					<p>{content.callToAction.description}</p>
					<div className={looking.buttons}>
						{content.callToAction.buttons.map((button, index) => (
							<a 
								key={index}
								href={button.url} 
								className={`button ${button.type === 'primary' ? 'primary' : 'secondary'}`}
								target={button.external ? '_blank' : '_self'}
								rel={button.external ? 'noopener noreferrer' : ''}
							>
								{button.text}
							</a>
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}