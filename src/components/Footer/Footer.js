import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Emaile</LinkTitle>
          <LinkItem href="mailto:mohsmaryam@gmail.com">
            mohsmaryam@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <SocialIcons href="https://github.com/bita2019">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/maryam-mohsenpour-07632a16b">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
