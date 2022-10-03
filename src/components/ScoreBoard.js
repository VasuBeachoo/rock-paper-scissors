import styled from "styled-components";

export const ScoreValue = styled.h1``;

export const ScoreLabel = styled.h3``;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameTitle = styled.h1``;

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
  align-items: center;
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
