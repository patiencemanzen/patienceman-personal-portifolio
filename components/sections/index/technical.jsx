// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a creative technologist, I design user-friendly digital experiences using various tools and programming languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Polymath foundations"
              icon={["fat", "chart-network"]}
              copy="With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="With over 5+ years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "androidstudio", name: "Android Studio", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "xcode", name: "X-code", type: "devicon" },
  { key: "docker", name: "Docker Engine", type: "devicon" },
  { key: "notion", name: "Notion", type: "devicon" },
  { key: "slack", name: "Slack", type: "devicon" },
  { key: "trello", name: "Trello", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "tableplus", name: "TablePlus", type: "devicon" },
  { key: "aftereffects", name: "After Effects", type: "devicon" },
  { key: "premiere", name: "Premiere Pro", type: "devicon" },
  { key: "intellij", name: "IntelliJ", type: "devicon" },
  { key: "pycharm", name: "PyCharm", type: "devicon" },
];

const tech = [
  // programming languages
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },

  // frameworks
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "nestjs", name: "NestJS", type: "devicon" },
  { key: "django", name: "django", type: "devicon" },
  { key: "laravel", name: "Laravel", type: "devicon" },
  { key: "spring", name: "Spring", type: "devicon" },
  { key: "express", name: "Express", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "vue", name: "Vue", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },

  // databases
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },

  // cloud
  { key: "aws", name: "AWS", type: "devicon" },
  { key: "gcp", name: "Google Cloud", type: "devicon" },

  // devops
  { key: "docker", name: "docker", type: "devicon" },
  { key: "jenkins", name: "Jenkins", type: "devicon" },
  { key: "kubernetes", name: "Kubernetes", type: "devicon" },
  { key: "ansible", name: "Ansible", type: "devicon" },

  // version control
  { key: "git", name: "Git", type: "devicon" },
  { key: "github", name: "GitHub", type: "devicon" },
  { key: "gitlab", name: "GitLab", type: "devicon" },

  // mobile development
  { key: "flutter", name: "flutter", type: "devicon" },
  { key: "reactnative", name: "React Native", type: "devicon" },

  // other
  { key: "graphql", name: "GraphQL", type: "devicon" },
  { key: "openai", name: "OpenAI", type: "devicon" },
];
