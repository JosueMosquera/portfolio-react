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
        Hi Everyone My name is Josue Aaron Mosquera and I'm a web developer  I Love to Develop and Learn, I'm sure if you want do something if you have the wish all its possible.
      </SectionText>
      <Button onClick={()=>window.location='https://wa.link/meag7v'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;