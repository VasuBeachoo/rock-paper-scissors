import styled from "styled-components";
import { ActionPaper, ActionRock, ActionScissors } from "./Actions";

export const ActionSelectorBox = styled.div``;

const ActionSelector = ({ className }) => {
  return (
    <ActionSelectorBox className={className}>
      <ActionRock />
      <ActionPaper />
      <ActionScissors />
    </ActionSelectorBox>
  );
};

export default ActionSelector;
