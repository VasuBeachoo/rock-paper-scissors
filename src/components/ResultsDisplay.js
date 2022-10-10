import styled from "styled-components";
import Choice, { ChoiceBox } from "./Choice";
import WinnerBg, { WinnerBgBoxOuter } from "./WinnerBg";
import { WhiteOutlineBtn } from "../Buttons";

export const Result = styled.h1`
  text-align: center;
  color: var(--White);
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 0.02ch;
  margin: 0;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1.25rem;
  z-index: 3;
`;

export const ResultsDisplayBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 5rem;

  ${ChoiceBox} {
    z-index: 2;
  }

  ${WinnerBgBoxOuter} {
    position: absolute;
    top: -8.35rem;
    left: -13.35rem;
  }
`;

const ResultsDisplay = ({ className }) => {
  return (
    <ResultsDisplayBox className={className}>
      <Choice actionChoice="rock" />
      <ResultBox>
        <Result>YOU WIN</Result>
        <WhiteOutlineBtn>PLAY AGAIN</WhiteOutlineBtn>
      </ResultBox>
      <Choice actionChoice="placeholder" />
      <WinnerBg />
    </ResultsDisplayBox>
  );
};

export default ResultsDisplay;
