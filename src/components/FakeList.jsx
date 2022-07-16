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
      <h1>
        {fakePatients.map((item) => (
          <h4 key={item.id}>
            <P>
              {item.id} - {item.name}
            </P>
          </h4>
        ))}
      </h1>
    </div>
  );
};

export default FakeList;
