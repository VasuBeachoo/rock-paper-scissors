import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ScoreBoard, { ScoreBoardBox } from "./components/ScoreBoard";
import ActionSelector from "./components/ActionSelector";
import ResultsDisplay from "./components/ResultsDisplay";
import { WhiteOutlineBtn } from "./Buttons";

const RulesBtn = styled(WhiteOutlineBtn)`
  align-self: flex-end;
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
  padding: clamp(1rem, 7vw, 10rem);
  overflow: hidden;
`;

const App = () => {
  return (
    <AppBox>
      <GlobalStyle />
      <GameBox>
        <ScoreBoard />
        <ResultsDisplay />
        <RulesBtn>RULES</RulesBtn>
      </GameBox>
    </AppBox>
  );
};

export default App;
