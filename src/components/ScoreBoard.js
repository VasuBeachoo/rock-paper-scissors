import styled from "styled-components";

export const ScoreValue = styled.h1``;

export const ScoreLabel = styled.h3``;

export const ScoreBox = styled.div``;

export const GameTitle = styled.h1``;

export const GameTitleBox = styled.div``;

export const ScoreBoardBox = styled.div``;

const ScoreBoard = ({ className }) => {
  return (
    <ScoreBoardBox className={className}>
      <GameTitleBox>
        <GameTitle>ROCK PAPER SCISSORS</GameTitle>
      </GameTitleBox>
      <ScoreBox>
        <ScoreLabel>SCORE</ScoreLabel>
        <ScoreValue>12</ScoreValue>
      </ScoreBox>
    </ScoreBoardBox>
  );
};

export default ScoreBoard;
