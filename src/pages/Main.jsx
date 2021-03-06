import styled from "styled-components";
import Navegacion from "../components/Navegacion";

const Container = styled.div`
  background-color: #379cf1;
`;

const Year = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0 40px 0;
  font-size: 36px;
  font-weight: 700;
`;

const ArrowButton = styled.button`
  color: #2d2e2f;
  background-color: #064d88;
  border: 1px solid black;
  padding: 0.2em;
  font-size: 100%;

  &:hover {
    cursor: pointer;
    background-color: lightgreen;
  }
  &:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:nth-last-child(1) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const YearContainer = styled.div`
  color: #2d2e2f;
  background-color: #064d88;
  padding: 0.2em 70px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
  height: 80vh;
  width: 95%;
  margin: auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 2fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    height: 160vh;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media (max-width: 492px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    height: 320vh;
  }
`;

const Months = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 2.2em;
  &:nth-child(1) {
    background-color: #c51c1c;
    color: white;
  }
  &:nth-child(2) {
    background-color: purple;
    color: white;
  }
  &:nth-child(3) {
    background-color: lightblue;
  }
  &:nth-child(4) {
    background-color: lightgray;
  }
  &:nth-child(5) {
    background-color: green;
    color: white;
  }
  &:nth-child(6) {
    background-color: #aa6baa;
  }
  &:nth-child(7) {
    background-color: red;
    color: white;
  }
  &:nth-child(8) {
    background-color: lightgreen;
  }
  &:nth-child(9) {
    background-color: darkblue;
    color: white;
  }
  &:nth-child(10) {
    background-color: pink;
  }
  &:nth-child(11) {
    background-color: yellow;
  }
  &:nth-child(12) {
    background-color: blue;
    color: white;
  }
  &:hover {
    cursor: pointer;
    justify-content: space-around;
  }
  &:hover span {
    font-size: 1rem;
    opacity: 1;
    transition: all 0.7s;
  }
`;

const HiddenText = styled.span`
  opacity: 0;
  font-size: 0px;
  text-align: center;
`;

const Main = () => {
  const year = new Date().getFullYear();

  console.log(year);

  const eachMonth = [
    { nombre: "Enero", id: 1, url: `/meses` },
    { nombre: "Febrero", id: 2 },
    { nombre: "Marzo", id: 3 },
    { nombre: "Abril", id: 4 },
    { nombre: "Mayo", id: 5 },
    { nombre: "Junio", id: 6 },
    { nombre: "Julio", id: 7 },
    { nombre: "Agosto", id: 8 },
    { nombre: "Septiembre", id: 9 },
    { nombre: "Octubre", id: 10 },
    { nombre: "Noviembre", id: 11 },
    { nombre: "Diciembre", id: 12 },
  ];

  return (
    <Container>
      <Navegacion />
      <Year>
        <ArrowButton>
          <i className="fa-solid fa-circle-left"></i>
        </ArrowButton>
        <YearContainer>
          A??o <span>{year}</span>
        </YearContainer>
        <ArrowButton>
          <i className="fa-solid fa-circle-right"></i>
        </ArrowButton>
      </Year>
      <Grid>
        {eachMonth.map((mes) => (
          <Months key={mes.id}>
            {mes.nombre}
            <HiddenText>Haz click para ver tus citas</HiddenText>
          </Months>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
