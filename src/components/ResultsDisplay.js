import styled from "styled-components";
import { WhiteOutlineBtn } from "../Buttons";
import { ActionPaper, ActionRock } from "./Actions";

export const Result = styled.h1`
  text-align: center;
  color: var(--White);
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
`;

export const ChoiceLabel = styled.h3`
  text-align: center;
  color: var(--White);
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

export const ResultsDisplayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 3.5rem;
`;

const ResultsDisplay = ({ className }) => {
  return (
    <ResultsDisplayBox className={className}>
      <ChoiceBox>
        <ChoiceLabel>YOU PICKED</ChoiceLabel>
        <ActionRock />
      </ChoiceBox>
      <ResultBox>
        <Result>YOU WIN</Result>
        <WhiteOutlineBtn>PLAY AGAIN</WhiteOutlineBtn>
      </ResultBox>
      <ChoiceBox>
        <ChoiceLabel>THE HOUSE PICKED</ChoiceLabel>
        <ActionPaper />
      </ChoiceBox>
    </ResultsDisplayBox>
  );
};

export default ResultsDisplay;
