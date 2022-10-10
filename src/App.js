import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ScoreBoard, { ScoreBoardBox } from "./components/ScoreBoard";
import ActionSelector from "./components/ActionSelector";
import ResultsDisplay from "./components/ResultsDisplay";
import { WhiteOutlineBtn } from "./Buttons";

const RulesBtn = styled(WhiteOutlineBtn)`
  align-self: flex-end;

  @media (max-width: 1000px) {
    align-self: center;
  }
`;

const GameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 90%;

  ${ScoreBoardBox} {
    z-index: 3;
  }
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-width: 100vw;
  min-height: 100vh;
  padding-block: 5rem;
  padding-inline: clamp(1rem, 7vw, 10rem);
  overflow: hidden;
`;

const App = () => {
  const gameStage = useSelector((state) => state.game.stage);

  const renderGameStage = (gameStage) => {
    if (gameStage === "Selection") return <ActionSelector />;
    else if (gameStage === "Results") return <ResultsDisplay />;
  };

  return (
    <AppBox>
      <GlobalStyle />
      <GameBox>
        <ScoreBoard />
        {renderGameStage(gameStage)}
        <RulesBtn>RULES</RulesBtn>
      </GameBox>
    </AppBox>
  );
};

export default App;
