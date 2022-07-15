import styled from "styled-components";

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
  background-color: #f1f4f8;
  border: none;
  padding: 0.2em;
  font-size: 100%;
  &:hover {
    cursor: pointer;
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
  background-color: #f1f4f8;
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

  return (
    <>
      <Year>
        <ArrowButton>
          <i className="fa-solid fa-circle-left"></i>
        </ArrowButton>
        <YearContainer>
          Año <span>{year}</span>
        </YearContainer>
        <ArrowButton>
          <i className="fa-solid fa-circle-right"></i>
        </ArrowButton>
      </Year>
      <Grid>
        <Months>
          Enero
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Febrero
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Marzo
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Abril
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Mayo
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Junio
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Julio
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Agosto
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Septiembre
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Octubre
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Noviembre
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
        <Months>
          Diciembre
          <HiddenText>Haz click para ver tus citas</HiddenText>
        </Months>
      </Grid>
    </>
  );
};

export default Main;
