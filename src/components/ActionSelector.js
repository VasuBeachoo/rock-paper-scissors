import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionPaper, ActionRock, ActionScissors } from "./Actions";
import bgTriangle from "../assets/bg-triangle.svg";
import { ActionBox } from "./Action";
import { decideWinner } from "../gameSlice";

export const ActionSelectorBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  column-gap: 6rem;
  row-gap: 2.5rem;
  background: url(${bgTriangle});
  background-position: center;
  background-repeat: no-repeat;

  ${ActionRock} {
    grid-column: auto / span 2;
  }

  ${ActionBox} {
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
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
`;

const ActionSelector = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <ActionSelectorBox className={className}>
      <ActionPaper onClick={() => dispatch(decideWinner("Paper"))} />
      <ActionScissors onClick={() => dispatch(decideWinner("Scissors"))} />
      <ActionRock onClick={() => dispatch(decideWinner("Rock"))} />
    </ActionSelectorBox>
  );
};

export default ActionSelector;
