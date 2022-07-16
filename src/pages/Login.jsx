import styled from "styled-components";
import { useState, useEffect } from "react";
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

const H2 = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usuarioValidado, setUsuarioValidado] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [userName, password]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setUsuarioValidado(true);
    } else {
      setUsuarioValidado(false);
    }

    if (password === "" && userName === "") {
      setError("Debes completar ambos campos");
      return;
    }

    if (userName.length <= 3 || userName.length >= 15) {
      setError("El usuario no es valido.");
      return;
    }

    if (password.length <= 5 || password.length >= 16) {
      setError("La contraseña no es valida");
      return;
    }
  };

  return (
    <Container>
      <Title>Agenda Clínica</Title>
      <Form>
        <Field>
          <Label htmlFor="userName">Usuario</Label>
          <Input
            autoComplete="off"
            id="userName"
            type="text"
            placeholder="Ingrese su usuario"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Ingrese su password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <H2>
          {usuarioValidado ? (
            <Link style={{ backgroundColor: "yellow" }} to="/main">
              Haz click aqui para ingresar
            </Link>
          ) : (
            <p style={{ backgroundColor: "red" }}>{error}</p>
          )}
        </H2>
        <Button onClick={handleLogin} type="submit">
          Comprobar usuario
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
