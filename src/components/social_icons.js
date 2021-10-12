import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledIcons } from "./styles/social_icons.styled";

export default function SocialIcons() {
  return (
    <StyledIcons>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </li>
    </StyledIcons>
  );
}
