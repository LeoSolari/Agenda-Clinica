import React, { useState } from "react";
import fakePatients from "../json/fakePatients";

import styled from "styled-components";
import Modal from "react-modal";

const Container = styled.div`
  background-color: #379cf1;
  align-items: center;
`;

const ContainerPaciente = styled.div`
  background-color: #379cf1;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const DivArray = styled.div`
  display: flex;
  justify-content: center;
`;

const DivPatients = styled.div`
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  border: 1px solid #f72fbb;
  width: 100%;
  height: 100%;
  padding: 0px 12px 0px 16px;
  font-size: 16px;
  outline: none;
  text-align: center;
`;

const H1 = styled.h2`
  font-weight: 400;
  color: #4caf50;
  font-size: 25px;
  text-align: center;
  margin-bottom: 1em;
`;

const H2 = styled.h2`
  font-weight: 400;
  color: #4caf50;
  font-size: 20px;
  text-align: center;
  margin-top: 0.3em;
  margin-bottom: 0.2em;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ButtonOutside = styled.button`
  background-color: #4caf50;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  border: none;
  height: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: #f6fafc;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  border: none;
  height: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: #f6fafc;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const Pacientes = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();

    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();

    setModalOpen(false);
  };

  const addToList = (e) => {
    e.preventDefault();

    console.log("hola mundo");
  };

  return (
    <Container>
      <DivArray>Falso Array de pacientes</DivArray>
      <DivPatients>Aqui va el falso array</DivPatients>

      <ContainerPaciente>
        <ButtonOutside onClick={openModal} type="submit">
          Agregar usuario
        </ButtonOutside>
        <div></div>
        <Modal
          isOpen={modalOpen}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <H1>AGREGAR PACIENTE</H1>
          <Form action="">
            <H2>Nombre y apellido del paciente</H2>
            <Input type="text" />
            <H2>Numero de telefono</H2>
            <Input type="number" />
            <H2>Otro medio de contacto</H2>
            <Input type="text" />
            <H2>Fecha de la consulta</H2>
            <Input type="date" />
            <H2>Motivos de la consulta</H2>
            <Input type="text" />
            <Button onClick={addToList}>Ingresar paciente</Button>
            <Button onClick={closeModal}>CERRAR VENTANA</Button>
          </Form>
        </Modal>
      </ContainerPaciente>
    </Container>
  );
};

export default Pacientes;
