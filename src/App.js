import styled from "styled-components";
import ScoreBoard from "./components/ScoreBoard";
import ActionSelector from "./components/ActionSelector";
import ResultsDisplay from "./components/ResultsDisplay";
import { WhiteOutlineBtn } from "./Buttons";

const RulesBtn = styled(WhiteOutlineBtn)`
  align-self: flex-end;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppBox>
      <ScoreBoard />
      <ActionSelector />
      <RulesBtn>RULES</RulesBtn>
    </AppBox>
  );
};

export default App;
