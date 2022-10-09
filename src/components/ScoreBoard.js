import styled from "styled-components";

export const ScoreValue = styled.h1`
  color: var(--Dark-text);
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.05ch;
  margin: 0;
`;

export const ScoreLabel = styled.h3`
  color: var(--Score-text);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.35ch;
  margin: 0;
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--White);
  border-radius: 0.75rem;
  padding: 1.3rem 2.5rem;
`;

export const GameTitle = styled.h1`
  color: var(--White);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.7ch;
  margin: 0;
`;

export const GameTitleBox = styled.div`
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
  border: 0.25rem solid var(--Header-outline);
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

const ScoreBoard = ({ className }) => {
  return (
    <ScoreBoardBox className={className}>
      <GameTitleBox>
        <GameTitle>
          ROCK <br /> PAPER <br /> SCISSORS
        </GameTitle>
      </GameTitleBox>
      <ScoreBox>
        <ScoreLabel>SCORE</ScoreLabel>
        <ScoreValue>12</ScoreValue>
      </ScoreBox>
    </ScoreBoardBox>
  );
};

export default ScoreBoard;
