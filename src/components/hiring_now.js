import React from "react";
import { StyledCard } from "./styles/card.styled";

export default function HireCard() {
  return (
    <StyledCard layout="column">
      <div>
        <img src="./images/hireBig.png" alt="Hiring now" />
      </div>
      <div>
        <h2>Interested?</h2>
        <p>
          If this sounds like the type of position you would be intereted in,
          then Fork this pen and style it up.
        </p>
        <a href="https://codepen.io/pantherafinance/pen/bGqPzwM">
          Link to codepen
        </a>
        <p>
          There are no rules – we just want to see your creative design ability
          and basic React skills. Once you are happy with it, please send it to
          <b> amcarthur@pantherafinance.com.au</b> with your CV attached.
        </p>
      </div>
    </StyledCard>
  );
}
