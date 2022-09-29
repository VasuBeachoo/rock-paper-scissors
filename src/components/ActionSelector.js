import styled from "styled-components";
import Action from "./Action";

export const ActionSelectorBox = styled.div``;

const ActionSelector = ({ className }) => {
  return (
    <ActionSelectorBox className={className}>
      <Action />
      <Action />
      <Action />
    </ActionSelectorBox>
  );
};

export default ActionSelector;
