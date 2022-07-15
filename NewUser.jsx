import styled from "styled-components";

const Container = styled.div`
  background-color: #379cf1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h2`
  color: #f6fafc;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
`;

const InputsContainer = styled.div`
  color: #f6fafc;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
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
    color: red;
  }
`;

const Inputs = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 2rem;
  color:white;
  background-color: #182b80;
  width: 100%;
  border:none;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 7px;
  opacity: 0.8;
  &:hover{
    cursor: pointer;
    opacity: 1;

  }
`

const NewUser = () => {
  return (
    <Container>
      <Title> Nuevo Usuario</Title>
      <div>
        <InputsContainer>
          <Labels htmlFor="name">Nombre de Usuario</Labels>
          <Inputs type="text" id="name" />
        </InputsContainer>
        <InputsContainer>
          <Labels htmlFor="password">Contraseña</Labels>
          <Inputs type="password" id="password" />
        </InputsContainer>
        <InputsContainer>
          <Labels htmlFor="repeat-password">Repita contraseña</Labels>
          <Inputs type="password" id="repeat-password" />
        </InputsContainer>
        <InputsContainer>
          <Labels htmlFor="email">Email</Labels>
          <Inputs type="email" id="email" />
        </InputsContainer>
        <Button type="submit">Crear Usuario</Button>
      </div>
    </Container>
  );
};

export default NewUser;
