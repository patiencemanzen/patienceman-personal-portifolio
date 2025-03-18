// Core packages
import Image from "next/image";
import Badges from "../../utils/badge.list.util";
// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";
// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";
// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Always seeking a challenging role where I can leverage my expertise on impactful projects to drive technological advancements. My goal is to continuously innovate, learn, and improve system efficiency."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Health Master</h3>
                <h4>Full-Stack Developer - Remote - Part-time</h4>
                <h4>JAN 2025 - Present · 2 mos</h4>
                <h5>Gasabo, Kigali, Rwanda</h5>
              </span>

              <p>
                the intuitive solution designed to ensure you never miss a
                medication dose. With smart, personalized reminders and
                easy-to-use tracking tools, Health Master helps you manage your
                prescriptions and daily routines effortlessly. Whether you’re
                managing a chronic condition or simply staying proactive about
                your well-being, our app supports you every step of the
                way—empowering you to keep your health on track, one dose at a
                time.
              </p>
              <Badges
                list={healthmasterstacks}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Rwanda Build Program.</h3>
                <h4>Backend Developer - Onsite - Full-time</h4>
                <h4>JAN 2022 - JAN 2025 · 3 yrs</h4>
                <h5>Gasabo, Kigali, Rwanda</h5>
              </span>
              <p>
                The Rwanda Build Program (RWBuild) is a tech hub and startup
                studio that supports aspiring entrepreneurs in building software
                companies from the ground up. The program offers a range of
                resources and expertise to help founders and their teams
                throughout the ideation and launch process, with the goal of
                creating successful and sustainable startups that will be
                venture-ready.
              </p>
              <Badges
                list={rwbuildstack}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Vitaway E-clinic</h3>
                <h4>Co-Founder & Full-Stack Developer - Hybrid - Full-time</h4>
                <h4>JAN 2019 - JAN 2022 · 3 yrs 2 mons</h4>
                <h5>Gasabo, Kigali, Rwanda</h5>
              </span>
              <p>
                Rwandan digital healthcare platform that provides
                multi-disciplinary health practices, with a mission of equipping
                people, especially young one.
              </p>
              <Badges
                list={vitawaystack}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

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
