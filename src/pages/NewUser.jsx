import { useEffect, useState } from "react";
import styled from "styled-components";
import Navegacion from "../components/Navegacion";
import fakeUsers from "../json/fakeUsers";

const Container = styled.div`
  background-color: #379cf1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Title = styled.h2`
  color: #f6fafc;
  font-size: 50px;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
`;

const InputsContainer = styled.div`
  color: #f6fafc;
  font-size: 24px;
  margin-bottom: 25px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

const Labels = styled.label`
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-bottom: 5px;
    margin-right: 0px;
    color: #f6fafc;
  }
`;

const Inputs = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 300px;
`;

const P = styled.p`
  background-color: red;
  font-size: 1em;
  text-align: center;
  padding: 0.5em;
  margin: 0.5em;
  font-weight: 700;
  text-transform: uppercase;
`;

const SuccessUser = styled.p`
  background-color: green;
  text-transform: uppercase;
  font-size: 1.2em;
  margin: 0.5em;
  text-align: center;
  font-weight: 700;
  line-height: 1.4em;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 2rem;
  color: white;
  background-color: #182b80;
  width: 100%;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 7px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media (max-width: 768px) {
    margin-bottom: 0.3em;
  }
`;

const NewUser = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [mail, setMail] = useState("");

  const [camposVacios, setCamposVacios] = useState(false);
  const [Datos, setDatos] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [nameLength, setNameLength] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  let userArray = [];

  const handleUser = (e) => {
    e.preventDefault();

    if (
      user.trim() === "" ||
      password.trim() === "" ||
      repPassword.trim() === "" ||
      mail.trim() === ""
    ) {
      setCamposVacios(true);
    } else {
      setCamposVacios(false);
    }

    if (user.length < 5 || user.length > 18) {
      setNameLength(true);
    } else {
      setNameLength(false);
    }

    if (password.length <= 6 || password.length > 22) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }

    if (password !== repPassword) {
      setMatchPassword(true);
    } else {
      setMatchPassword(false);
    }

    if (
      user.trim() !== "" &&
      password.trim() !== "" &&
      repPassword.trim() !== "" &&
      mail.trim() !== "" &&
      matchPassword === false &&
      passwordLength === false &&
      nameLength === false &&
      camposVacios === false
    ) {
      setDatos(true);
    }

    if (camposVacios === false && matchPassword === false) {
      userArray.push({
        id: Math.random().toString(36).substr(2, 9),
        name: user,
        password: password,
        email: mail,
      });
    }

    userArray.map((el) => {
      console.log(el);
    });
  };

  return (
    <Container>
      <Navegacion />
      <Title> Crear usuario</Title>
      {camposVacios ? <P>Todos los campos tienen que estar completos</P> : ""}
      {matchPassword ? <P>Las contraseñas deben ser iguales!</P> : ""}
      {nameLength ? (
        <P>
          El nombre de usuario debe tener: <br></br>
          mas de 5 caracteres y menos de 18
        </P>
      ) : (
        ""
      )}
      {passwordLength ? (
        <P>
          La contraseña debe tener: <br></br>
          mas de 6 caracteres y menos de 22
        </P>
      ) : (
        ""
      )}

      {Datos ? (
        <>
          <SuccessUser>
            Nuevo Usuario creado: <br></br>
            Nombre: {user}
            <br></br>
            E-mail: {mail} <br></br>
            Ingresa el codigo para confirmar tu cuenta!
          </SuccessUser>
          <form>
            <InputsContainer>
              <Labels htmlFor="code">Ingresa el codigo</Labels>

              <Inputs
                type="text"
                name="code"
                onChange={(e) => setCode(e.target.value)}
              />
            </InputsContainer>
            <P>Codigo: {}</P>
            <Button type="submit">Confirmar usuario</Button>
          </form>
        </>
      ) : (
        <form onSubmit={handleUser}>
          <InputsContainer>
            <Labels htmlFor="name">Nombre de Usuario</Labels>
            <Inputs
              type="text"
              name="name"
              onChange={(e) => setUser(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <Labels htmlFor="newPassword">Contraseña</Labels>
            <Inputs
              type="password"
              name="newPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <Labels htmlFor="repeatPassword">Repita contraseña</Labels>
            <Inputs
              type="password"
              name="repeatPassword"
              onChange={(e) => setRepPassword(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <Labels htmlFor="email">Email</Labels>
            <Inputs
              type="email"
              name="email"
              onChange={(e) => setMail(e.target.value)}
            />
          </InputsContainer>
          <Button type="submit">Crear Usuario</Button>
        </form>
      )}
    </Container>
  );
};

export default NewUser;
