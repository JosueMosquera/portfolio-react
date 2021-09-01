import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiFirebase,
  DiFsharp,
  DiHtml5,
  DiJavascript,
  DiJavascript1,
  DiNodejs,
  DiPhp,
  DiPython,
  DiReact,
  DiSqllite,
  DiZend,
} from "react-icons/di";
import {
  SiCsharp
} from "react-icons/si";
import {
  FaNodeJs
} from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I' ve worked with a range of  technologies in the web development world, Front and Backend.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer style={{display:'flex',flexDirection:'row',margin:10}}>
        <DiReact size="3rem" />
        <DiHtml5 size="3rem" />
        <DiCss3 size="3rem" />
        <DiBootstrap size="3rem" />
        </ListContainer>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
      <ListContainer style={{display:'flex',flexDirection:'row',margin:10}}>
        <FaNodeJs size='3rem' />
        <DiPhp size="3rem" />
        <DiPython size="3rem" />
        <SiCsharp size="3rem" />
        </ListContainer>
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
