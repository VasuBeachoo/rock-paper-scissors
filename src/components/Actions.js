import styled from "styled-components";
import Action from "./Action";
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";
import iconLizard from "../assets/icon-lizard.svg";
import iconSpock from "../assets/icon-spock.svg";

export const ActionPlaceholder = styled(Action)`
  width: 13.25rem;
  height: 13.25rem;
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

export const ActionLizard = styled(Action).attrs({
  icon: { src: iconLizard, alt: "icon-lizard" },
})`
  background-color: var(--Lizard-light);
  border-color: var(--Lizard-dark);
`;

export const ActionSpock = styled(Action).attrs({
  icon: { src: iconSpock, alt: "icon-spock" },
})`
  background-color: var(--Spock-light);
  border-color: var(--Spock-dark);
`;
