import styled from "styled-components";
import { ActionPaper, ActionRock, ActionScissors } from "./Actions";

export const ActionSelectorBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  ${ActionRock} {
    grid-column: auto / span 2;
  }
`;

const ActionSelector = ({ className }) => {
  return (
    <ActionSelectorBox className={className}>
      <ActionPaper />
      <ActionScissors />
      <ActionRock />
    </ActionSelectorBox>
  );
};

export default ActionSelector;
