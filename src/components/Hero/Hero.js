import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi, I am Josue Mosquera and I'm a Web Developer. I love to develop and learn. I'm sure that if you want do something with desire all is possible.
      </SectionText>
      <Button onClick={()=>window.location='https://wa.link/meag7v'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;