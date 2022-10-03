import styled from "styled-components";
import Action from "./Action";
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";

export const ActionRock = styled(Action).attrs({
  icon: { src: iconRock, alt: "icon-rock" },
})``;

export const ActionPaper = styled(Action).attrs({
  icon: { src: iconPaper, alt: "icon-paper" },
})``;

export const ActionScissors = styled(Action).attrs({
  icon: { src: iconScissors, alt: "icon-scissors" },
})``;
