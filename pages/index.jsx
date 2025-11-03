import dynamic from 'next/dynamic';
import Hero from "../components/sections/index/hero";
import Color from "../components/utils/page.colors.util";
import SEO from "../components/utils/seo.util";
import colors from "../content/index/_colors.json";

// Lazy load components that are below the fold
const About = dynamic(() => import("../components/sections/index/about"), {
  loading: () => <div style={{ height: '400px' }}>Loading...</div>
});

const Looking = dynamic(() => import("../components/sections/index/looking"), {
  loading: () => <div style={{ height: '300px' }}>Loading...</div>
});

const Technical = dynamic(() => import("../components/sections/index/technical"), {
  loading: () => <div style={{ height: '500px' }}>Loading...</div>
});

const Career = dynamic(() => import("../components/sections/index/career"), {
  loading: () => <div style={{ height: '400px' }}>Loading...</div>
});

const FeaturedProjects = dynamic(() => import("../components/sections/projects/featured"), {
  loading: () => <div style={{ height: '600px' }}>Loading...</div>
});

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Manirabona Patience - Software Engineer & Full-Stack Developer"
        description="Software Engineer specializing in full-stack development, automation, and creating innovative tools. Building extraordinary solutions with creativity and code."
        keywords="software engineer, full-stack developer, web development, automation, portfolio, React, Next.js, JavaScript, Rwanda developer"
        url="https://patiencemanzen.vercel.app"
      />
      <Color colors={colors} />
      <Hero />
      <About />
      <Looking />
      <Technical />
      <Career />
      <FeaturedProjects />
    </>
  );
}
