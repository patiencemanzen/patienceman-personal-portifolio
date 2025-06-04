import Image from "next/image";
import Badges from "../../utils/badge.list.util";
import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  const experiences = [
    {
      company: "Jackal Tech Ltd",
      role: "Software Engineer Intern - Remote - Part-time",
      period: "APR 2025 - Present · 2 mos",
      location: "United States",
      description: (
        <>
          As a Software Engineer Intern, I work closely with cross-functional
          teams to design, build, and test software solutions that address
          real-world challenges.
          <br />
          <br />
          Key skills I’m building include:
          <br />
          • Backend development
          <br />
          • Debugging and performance optimization
          <br />
          • Team communication and project collaboration
          <br />
          <br />
          I’m passionate about technology and committed to learning as much as I
          can during this internship to lay a strong foundation for a career in
          software engineering.
        </>
      ),
      stack: jackalTechStack,
    },
    {
      company: "Health Master",
      role: "Full-Stack Developer - Remote - Part-time",
      period: "JAN 2025 - Present · 2 mos",
      location: "Gasabo, Kigali, Rwanda",
      description: (
        <>
          the intuitive solution designed to ensure you never miss a medication
          dose. With smart, personalized reminders and easy-to-use tracking
          tools, Health Master helps you manage your prescriptions and daily
          routines effortlessly. Whether you’re managing a chronic condition or
          simply staying proactive about your well-being, our app supports you
          every step of the way—empowering you to keep your health on track, one
          dose at a time.
        </>
      ),
      stack: healthmasterstacks,
    },
    {
      company: "Rwanda Build Program.",
      role: "Backend Developer - Onsite - Full-time",
      period: "JAN 2022 - JAN 2025 · 3 yrs",
      location: "Gasabo, Kigali, Rwanda",
      description: (
        <>
          The Rwanda Build Program (RWBuild) is a tech hub and startup studio
          that supports aspiring entrepreneurs in building software companies
          from the ground up. The program offers a range of resources and
          expertise to help founders and their teams throughout the ideation and
          launch process, with the goal of creating successful and sustainable
          startups that will be venture-ready.
        </>
      ),
      stack: rwbuildstack,
    },
    {
      company: "Vitaway E-clinic",
      role: "Co-Founder & Full-Stack Developer - Hybrid - Full-time",
      period: "JAN 2019 - JAN 2022 · 3 yrs 2 mons",
      location: "Gasabo, Kigali, Rwanda",
      description: (
        <>
          Rwandan digital healthcare platform that provides multi-disciplinary
          health practices, with a mission of equipping people, especially young
          one.
        </>
      ),
      stack: vitawaystack,
    },
  ];

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Always seeking a challenging role where I can leverage my expertise on impactful projects to drive technological advancements. My goal is to continuously innovate, learn, and improve system efficiency."
        />
        <section className={career.area}>
          {experiences.map((exp, idx) => (
            <article className={career.company} key={idx}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>{exp.company}</h3>
                  <h4>{exp.role}</h4>
                  <h4>{exp.period}</h4>
                  <h5>{exp.location}</h5>
                </span>
                <p>{exp.description}</p>
                <Badges
                  list={exp.stack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.companyAlt}></div>
            </article>
          ))}
        </section>
      </Container>
    </Section>
  );
}

const jackalTechStack = [
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "nestjs", name: "nestjs", type: "devicon" },
  { key: "express", name: "express", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "kubernetes", name: "Kubernetes", type: "devicon" },
  { key: "jest", name: "Jest", type: "devicon" },
];

const healthmasterstacks = [
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "reactnative", name: "React Native", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "kubernetes", name: "Kubernetes", type: "devicon" },
];

const rwbuildstack = [
  { key: "php", name: "PHP", type: "devicon" },
  { key: "laravel", name: "Laravel", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "vuejs", name: "VueJS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "kubernetes", name: "Kubernetes", type: "devicon" },
];

const vitawaystack = [
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "kubernetes", name: "Kubernetes", type: "devicon" },
  { key: "aws", name: "AWS", type: "devicon" },
];
