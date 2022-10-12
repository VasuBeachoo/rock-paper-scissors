import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import iconClose from "../assets/icon-close.svg";
import imgRules from "../assets/image-rules.svg";
import imgRulesBonus from "../assets/image-rules-bonus.svg";
import { setPopup } from "../gameSlice";

export const RulesImg = styled.img`
  grid-area: auto / auto / span 1 / span 2;
  width: 100%;
`;

export const CloseIcon = styled.img.attrs({
  src: iconClose,
  alt: "close-icon",
})`
  justify-self: flex-end;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    filter: brightness(0);
  }
`;

export const RulesLabel = styled.h2`
  color: var(--Dark-text);
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

export const RulesPopupBox = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, auto);
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const RulesPopup = ({ className }) => {
  const dispatch = useDispatch();

  const gameMode = useSelector((state) => state.game.mode);

  const renderRulesImg = (gameMode) => {
    switch (gameMode) {
      case "Rock Paper Scissors":
        return <RulesImg src={imgRules} alt="rock-paper-scissors-rules" />;
      case "Rock Paper Scissors Lizard Spock":
        return (
          <RulesImg
            src={imgRulesBonus}
            alt="rock-paper-scissors-lizard-spock-rules"
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <RulesPopupBox className={className}>
      <RulesLabel>RULES</RulesLabel>
      <CloseIcon onClick={() => dispatch(setPopup(false))} />
      {renderRulesImg(gameMode)}
    </RulesPopupBox>
  );
};

export default RulesPopup;
