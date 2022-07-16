import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-color: #0387f3;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1em;
  &:hover {
  }
`;

const NavgLink = styled(NavLink)`
  background-color: red;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #064d88;
    color: red;
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
