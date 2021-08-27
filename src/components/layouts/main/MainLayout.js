import React from "react";
import Header from "../../Header";
import { Container, Wrapper } from "./MainLayout.styled";

export const MainLayout = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Header />

        {children}
      </Wrapper>
    </Container>
  );
};
