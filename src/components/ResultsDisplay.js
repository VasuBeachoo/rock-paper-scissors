import styled from "styled-components";
import Action from "./Action";
import { WhiteOutlineBtn } from "../Buttons";

export const Result = styled.h1``;

export const ResultBox = styled.div``;

export const ChoiceLabel = styled.h3``;

export const ResultsDisplayBox = styled.div``;

const ResultsDisplay = ({ className }) => {
  return (
    <ResultsDisplayBox className={className}>
      <ChoiceLabel>YOU PICKED</ChoiceLabel>
      <Action />
      <ResultBox>
        <Result>YOU WIN</Result>
        <WhiteOutlineBtn>PLAY AGAIN</WhiteOutlineBtn>
      </ResultBox>
      <ChoiceLabel>THE HOUSE PICKED</ChoiceLabel>
      <Action />
    </ResultsDisplayBox>
  );
};

export default ResultsDisplay;
