import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Mail Me</LinkTitle>
            <LinkItem href="mailto:mcsubmithd@gmail.com">
              mcsubmithd@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com/JosueMosquera">
            <AiFillGithub size="3.3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/josuesatoru_dicealo/">
            <AiFillInstagram size="3.5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/josue.mosquera1/">
            <AiFillFacebook size="3.5rem" />
          </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
