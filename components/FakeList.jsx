import React from "react";
import fakePatients from "../json/fakePatients";
import styled from "styled-components";

const P = styled.p`
  text-align: center;
  padding-top: 0.2em;
`;

const FakeList = () => {
  return (
    <div>
      {fakePatients.map((item) => (
        <h2 key={item.id}>
          <P>
            {item.id} - {item.name}
          </P>
        </h2>
      ))}
    </div>
  );
};

export default FakeList;
