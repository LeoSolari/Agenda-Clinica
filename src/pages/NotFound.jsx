import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-image: url("src/assets/bgrndError.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: auto;
  @media (max-width: 768px) {
    background-image: url("src/assets/Error404.jpg");
    background-size: cover;
    height: 100vh;
    background-position: center;
  }
`;

const H1 = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 55vh;
  @media (max-width: 768px) {
    margin-bottom: 41vh;
  }
`;

const P = styled.p`
  font-size: 2em;
  text-align: center;
`;

const H2 = styled.h2`
  margin-top: 5vh;
  text-align: center;
  color: #deb887;
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <Container>
      <H1>¡La pagina que estas buscando no se puedo encontrar!</H1>
      <P>Por favor, prueba volviendo al inicio:</P>
      <NavLink to="/">
        <H2>VOLVER AL INICIO</H2>
      </NavLink>
    </Container>
  );
};

export default NotFound;
