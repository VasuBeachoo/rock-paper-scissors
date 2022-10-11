import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import Choice, { ChoiceBox } from "./Choice";
import WinnerBg from "./WinnerBg";
import { WhiteOutlineBtn } from "./Buttons";
import { resetGame } from "../gameSlice";

export const WinnerBgBox = styled.div`
  position: absolute;

  ${(props) =>
    props.winner === "User" &&
    css`
      top: -6.5rem;
      left: -13.25rem;

      @media (max-width: 1000px) {
        top: -7.95rem;
        left: -12.95rem;
      }
    `}

  ${(props) =>
    props.winner === "House" &&
    css`
      top: -6rem;
      right: -12.75rem;

      @media (max-width: 1000px) {
        top: 30.65rem;
        left: -12.95rem;
      }
    `}

    ${(props) =>
    props.winner === "Draw" &&
    css`
      display: none;
    `}
`;

export const Result = styled.h1`
  text-align: center;
  user-select: none;
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

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const ResultsDisplay = ({ className }) => {
  const dispatch = useDispatch();

  const userChoice = useSelector((state) => state.game.userChoice);
  const houseChoice = useSelector((state) => state.game.houseChoice);
  const winner = useSelector((state) => state.game.winner);

  const renderResult = (winner) => {
    switch (winner) {
      case "User":
        return "YOU WIN";
      case "House":
        return "YOU LOSE";
      case "Draw":
        return "DRAW";
      default:
        return "";
    }
  };

  return (
    <ResultsDisplayBox className={className}>
      <Choice label="YOU PICKED" actionChoice={userChoice} />
      <ResultBox>
        <Result>{renderResult(winner)}</Result>
        <WhiteOutlineBtn onClick={() => dispatch(resetGame())}>
          PLAY AGAIN
        </WhiteOutlineBtn>
      </ResultBox>
      <Choice label="THE HOUSE PICKED" actionChoice={houseChoice} />
      <WinnerBgBox winner={winner}>
        <WinnerBg />
      </WinnerBgBox>
    </ResultsDisplayBox>
  );
};

export default ResultsDisplay;
