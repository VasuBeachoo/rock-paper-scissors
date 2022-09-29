import styled from "styled-components";
import ScoreBoard from "./components/ScoreBoard";
import ActionSelector from "./components/ActionSelector";
import ResultsDisplay from "./components/ResultsDisplay";
import { WhiteOutlineBtn } from "./Buttons";

const GameBox = styled.div``;

const AppBox = styled.div``;

const App = () => {
  return (
    <AppBox>
      <ScoreBoard />
      <GameBox>
        <ActionSelector />
      </GameBox>
      <WhiteOutlineBtn>RULES</WhiteOutlineBtn>
    </AppBox>
  );
};

export default App;
