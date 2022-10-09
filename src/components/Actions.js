import styled from "styled-components";
import Action from "./Action";
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";

export const ActionNone = styled(Action)`
  width: 13.2rem;
  height: 13.2rem;
  background-color: var(--Bg-blue);
  border-color: transparent;
  filter: brightness(0.5);
  opacity: 0.35;
`;

export const ActionRock = styled(Action).attrs({
  icon: { src: iconRock, alt: "icon-rock" },
})`
  background-color: var(--Rock-light);
  border-color: var(--Rock-dark);
`;

export const ActionPaper = styled(Action).attrs({
  icon: { src: iconPaper, alt: "icon-paper" },
})`
  background-color: var(--Paper-light);
  border-color: var(--Paper-dark);
`;

export const ActionScissors = styled(Action).attrs({
  icon: { src: iconScissors, alt: "icon-scissors" },
})`
  background-color: var(--Scissors-light);
  border-color: var(--Scissors-dark);
`;
