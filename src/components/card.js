import React from "react";
import { StyledCard } from "./styles/card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <ul>
          {body.map((item, key) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
