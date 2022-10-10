import { useSelector } from "react-redux";
import styled from "styled-components";
import logoNormal from "../assets/logo.svg";

export const ScoreValue = styled.h1`
  color: var(--Dark-text);
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.05ch;
  margin: 0;
`;

export const ScoreLabel = styled.h3`
  color: var(--Score-text);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.35ch;
  margin: 0;
`;

export const ScoreBox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--White);
  border-radius: 0.75rem;
  padding: 1.3rem 2.5rem;
`;

export const GameLogo = styled.img`
  width: 100%;
  pointer-events: none;
`;

export const GameLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ScoreBoardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  max-width: 50rem;
  user-select: none;
  border: 0.25rem solid var(--Header-outline);
  border-radius: 0.75rem;
  padding: 1.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScoreBoard = ({ className }) => {
  const score = useSelector((state) => state.game.score);

  return (
    <ScoreBoardBox className={className}>
      <GameLogoBox>
        <GameLogo src={logoNormal} alt="normal-logo" />
      </GameLogoBox>
      <ScoreBox>
        <ScoreLabel>SCORE</ScoreLabel>
        <ScoreValue>{score}</ScoreValue>
      </ScoreBox>
    </ScoreBoardBox>
  );
};

export default ScoreBoard;
