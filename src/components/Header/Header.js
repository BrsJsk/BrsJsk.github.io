import React from "react";
import { Description, Image, Wrapper } from "./Header.styled";

export const Header = () => {
  return (
    <Wrapper>
      <Image src="images/1579105674802.jfif" />

      <Description>
        <h4>Boris Joskic</h4>
        <span>Software Engineer</span>
      </Description>
    </Wrapper>
  );
};
