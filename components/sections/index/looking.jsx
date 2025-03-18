// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I&apos;m currently looking for employment.</h4>

				<h2 className={looking.json}>&#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Software Developer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>User-Centric Innovator</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>AI & Machine Learning</span></h2>
				<h2 className={looking.json}>&#125;</h2>

				<h4>I am especially interested in backend engineering roles where I can contribute to developing meaningful solutions.</h4>
				<h2>Full <span className={looking.highlight}>Stack Developer</span> </h2>
				<p className="subtitle">with a focus on Product Growth.</p>
			</Container>
		</Section>
	)
}