import styled from "styled-components";
import { WhiteOutlineBtn } from "../Buttons";
import { ActionPaper, ActionRock } from "./Actions";

export const Result = styled.h1``;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChoiceLabel = styled.h3``;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultsDisplayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
