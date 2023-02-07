import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello <br />
        I'm Maryam (Bita) Mohsenpour <br />a fullstack developer.
      </SectionTitle>
      <SectionText>
        We use JavaScript for both frontend and backend!!!
      </SectionText>
      <Button onClick={() => (window.location = "https//google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
