import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  width: 100vw;
  cursor: none;
`;

const ImageContainer = styled.div`
  background-image: url("src/assets/errorbackground.jpg");
  height: 100vh;
  width: auto;
  background-repeat: no-repeat;
  background-size: contain;
`;

const H1 = styled.div`
  text-decoration: none;
  color: red;
  font-size: 2em;
  padding-left: 1em;
`;

const NavGLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
`;

const NotFound = () => {
  return (
    <Container>
      <NavGLink to="/main">
        <ImageContainer>
          <H1>Haz click AQUI para volver a la pagina principal</H1>
        </ImageContainer>
      </NavGLink>
    </Container>
  );
};

export default NotFound;
