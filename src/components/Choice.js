import styled from "styled-components";
import {
  ActionPlaceholder,
  ActionRock,
  ActionPaper,
  ActionScissors,
} from "./Actions";

export const ChoiceLabel = styled.h3`
  text-align: center;
  user-select: none;
  color: var(--White);
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.1ch;
  margin: 0;
  margin-bottom: auto;
`;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
`;

const Choice = ({ className, label, actionChoice }) => {
  const displayActionChoice = (actionChoice) => {
    switch (actionChoice) {
      case "Rock":
        return <ActionRock />;
      case "Paper":
        return <ActionPaper />;
      case "Scissors":
        return <ActionScissors />;
      case "Placeholder":
        return <ActionPlaceholder />;
      default:
        return <></>;
    }
  };

  return (
    <ChoiceBox className={className}>
      <ChoiceLabel>{label}</ChoiceLabel>
      {displayActionChoice(actionChoice)}
    </ChoiceBox>
  );
};

export default Choice;
