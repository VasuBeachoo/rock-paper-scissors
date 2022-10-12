import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import {
  ActionLizard,
  ActionPaper,
  ActionRock,
  ActionScissors,
  ActionSpock,
} from "./Actions";
import bgTriangle from "../assets/bg-triangle.svg";
import bgPentagon from "../assets/bg-pentagon.svg";
import { ActionBox } from "./Action";
import { decideWinner } from "../gameSlice";

export const ActionSelectorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  justify-items: center;
  column-gap: 6rem;
  row-gap: 2.5rem;
  ${(props) =>
    props.bonusActive
      ? css`
          background: url(${bgPentagon});
          background-size: contain;

          ${ActionScissors} {
            grid-area: 1 / 1 / span 1 / span 2;
          }

          ${ActionSpock} {
            grid-area: 2 / 1 / span 1 / span 1;
            transform: translate(-6rem, -2.5rem);
          }

          ${ActionPaper} {
            grid-area: 2 / 2 / span 1 / span 1;
            transform: translate(6rem, -2.5rem);
          }

          ${ActionRock} {
            grid-area: 3 / 2 / span 1 / span 1;
          }

          @media (max-width: 1200px) {
            transform: scale(0.8);
          }

          @media (max-width: 1000px) {
            transform: scale(0.7);
            margin-block: -5rem;
          }

          @media (max-width: 800px) {
            transform: scale(0.6);
            margin-block: -7rem;
          }

          @media (max-width: 600px) {
            transform: scale(0.5);
            margin-block: -9rem;
          }

          @media (max-width: 400px) {
            transform: scale(0.4);
            margin-block: -11rem;
          }

          @media (max-width: 300px) {
            transform: scale(0.35);
            margin-block: -13rem;
          }
        `
      : css`
          background: url(${bgTriangle});

          ${ActionRock} {
            grid-area: 2 / 1 / span 1 / span 2;
          }

          @media (max-width: 800px) {
            transform: scale(0.8);
          }

          @media (max-width: 600px) {
            transform: scale(0.7);
          }

          @media (max-width: 400px) {
            transform: scale(0.6);
          }

          @media (max-width: 300px) {
            transform: scale(0.55);
          }
        `};

  background-position: center;
  background-repeat: no-repeat;

  ${ActionBox} {
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;

const ActionSelector = ({ className }) => {
  const dispatch = useDispatch();

  const gameMode = useSelector((state) => state.game.mode);
  const bonusActive = gameMode === "Rock Paper Scissors Lizard Spock";

  return (
    <ActionSelectorBox className={className} bonusActive={bonusActive}>
      <ActionRock onClick={() => dispatch(decideWinner("Rock"))} />
      <ActionPaper onClick={() => dispatch(decideWinner("Paper"))} />
      <ActionScissors onClick={() => dispatch(decideWinner("Scissors"))} />
      {bonusActive && (
        <ActionLizard onClick={() => dispatch(decideWinner("Lizard"))} />
      )}
      {bonusActive && (
        <ActionSpock onClick={() => dispatch(decideWinner("Spock"))} />
      )}
    </ActionSelectorBox>
  );
};

export default ActionSelector;
