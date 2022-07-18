import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-color: #0387f3;
  display: flex;
  justify-content: space-around;
  font-size: 2.5em;
  margin-bottom: 1em;
  width: 100%;
`;

const NavgLink = styled(NavLink)`
  background-color: #064d88;
  color: wheat;
  text-decoration: none;
  width: 100%;
  text-align: center;
  border: 1px solid black;
  &:hover {
    background-color: red;
  }
`;

const Navegacion = () => {
  return (
    <Container>
      <NavgLink to="/main">Pagina Principal</NavgLink>
      <NavgLink to="/new-user">Nuevo Usuario</NavgLink>
      <NavgLink to="/pacientes">Listado de Usuarios</NavgLink>
    </Container>
  );
};

export default Navegacion;
