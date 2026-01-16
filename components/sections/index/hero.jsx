import { useState, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import Section from "../../structure/section";
import Container from "../../structure/container";
import space from "../../utils/spacing.util";
import HeroBg from "../../blocks/hero.bg/bg-color-1";
import hero from "../../../styles/sections/index/hero.module.scss";
import button from "../../../styles/blocks/button.module.scss";
import content from "../../../content/index/hero.json";

export default function Hero() {
  const [typingStatus, setTypingStatus] = useState("Initializing");

  // Memoized click handlers for performance
  const handleEmailClick = useCallback(() => {
    window.location.href = "mailto:hseal419@gmail.com";
  }, []);

  const handleLinkedInClick = useCallback(() => {
    window.open(content.buttons.secondary.url, "_blank", "noopener,noreferrer");
  }, []);

  const handleResumeClick = useCallback(() => {
    window.open(content.buttons.download.url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <Section classProp={`${hero.section}`}>
      <Container spacing={"VerticalXXXL"} classProp={``}>
        <TypeAnimation
          className={`${hero.preHeader}`}
          sequence={[
            content.intro.startDelay,
            () => {
              setTypingStatus("typing");
            },
            content.intro.start,
            () => {
              setTypingStatus("typed");
            },
            content.intro.deleteDelay,
            () => {
              setTypingStatus("deleting");
            },
            content.intro.end,
            () => {
              setTypingStatus("deleted");
            },
            content.intro.restartDelay,
          ]}
          speed={content.intro.speed}
          deletionSpeed={content.intro.deletionSpeed}
          wrapper={content.intro.wrapper}
          repeat={Infinity}
        />
        <header>
          <h1 className={hero.header}>{content.header.name}</h1>
          <h2 className={`${hero.header} ${hero.primaryDim}`}>
            {content.header.usp}
          </h2>
        </header>
        <section>
          <p
            className={`${hero.primaryBright} subtitle ${space([
              "verticalLrg",
            ])}`}
          >
            {content.paragraph}
          </p>
        </section>
        <section className={hero.buttonGroup}>
          <button
            type="button"
            className={`button ${button.primary}`}
            onClick={handleEmailClick}
            aria-label="Send email to Manirabona Patience"
          >
            {content.buttons.primary.title}
          </button>
          <button
            type="button"
            className={`button ${button.secondary} leaveSite`}
            onClick={handleLinkedInClick}
            aria-label="Visit LinkedIn profile"
          >
            {content.buttons.secondary.title}
          </button>
          <button
            type="button"
            className={`button ${button.secondary} leaveSite`}
            onClick={handleResumeClick}
            aria-label="Download resume PDF"
          >
            {content.buttons.download.title}
          </button>
        </section>
      </Container>

      <HeroBg theme="bg-color-1" />
    </Section>
  );
}
