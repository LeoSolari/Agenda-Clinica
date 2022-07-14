import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #379cf1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 700;
  color: #f6fafc;
  margin: 40px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.label`
  color: #f6fafc;
  font-size: 24px;
  text-transform: uppercase;
  margin-right: 15px;
  text-align: center;
`;

const Input = styled.input`
  color: black;
  font-size: 24px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  &::placeholder {
    opacity: 0.4;
  }
`;

const Button = styled.button`
  background-color: #182b80;
  text-align: center;
  text-decoration: none;
  border: none;
  height: 50px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  color: #f6fafc;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setMensaje(`Bienvenido ${userName}`);
    } else {
      setMensaje("Usuario Incorrecto");
    }
  };

  return (
    <Container>
      <Title>Agenda Clínica</Title>
      <Form>
        <Field>
          <Label htmlFor="userName">Usuario</Label>
          <Input
            type="text"
            value={userName}
            placeholder="Ingrese su usuario"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </Field>
        <h2>{mensaje}</h2>
        <Button onClick={handleLogin} type="submit">
          Comprobar usuario
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
