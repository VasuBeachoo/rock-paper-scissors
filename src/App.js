import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ScoreBoard, { ScoreBoardBox } from "./components/ScoreBoard";
import ActionSelector from "./components/ActionSelector";
import ResultsDisplay from "./components/ResultsDisplay";
import { WhiteOutlineBtn } from "./components/Buttons";
import RulesPopup from "./components/RulesPopup";
import { setPopup, changeMode } from "./gameSlice";

const PopupBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(calc(50vw - 50%), calc(50vh - 50%));
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 76.5%;
  max-width: 30rem;
  background-color: var(--White);
  border-radius: 0.75rem;
  padding: 2.5rem;
  z-index: 5;
`;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #000000;
  opacity: 0.5;
  z-index: 4;
`;

const BtnsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  z-index: 3;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
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
  const dispatch = useDispatch();

  const popupOpen = useSelector((state) => state.game.popupOpen);
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
        <BtnsBox>
          <WhiteOutlineBtn onClick={() => dispatch(changeMode())}>
            CHANGE MODE
          </WhiteOutlineBtn>
          <WhiteOutlineBtn onClick={() => dispatch(setPopup(true))}>
            RULES
          </WhiteOutlineBtn>
        </BtnsBox>
      </GameBox>
      {popupOpen && (
        <>
          <DarkOverlay />
          <PopupBox>
            <RulesPopup />
          </PopupBox>
        </>
      )}
    </AppBox>
  );
};

export default App;
