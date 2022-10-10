import styled, { css } from "styled-components";

const CircleBox = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const WinnerBgBoxInner = styled.div`
  ${CircleBox}
  width: 20rem;
  height: 20rem;
  background-color: var(--Winner-bg-inner);
`;

export const WinnerBgBoxMiddle = styled.div`
  ${CircleBox}
  width: 30rem;
  height: 30rem;
  background-color: var(--Winner-bg-middle);
`;

export const WinnerBgBoxOuter = styled.div`
  ${CircleBox}
  width: 40rem;
  height: 40rem;
  background-color: var(--Winner-bg-outer);
  filter: brightness(1.1);
  opacity: 0.5;
`;

const WinnerBg = ({ className }) => {
  return (
    <WinnerBgBoxOuter className={className}>
      <WinnerBgBoxMiddle>
        <WinnerBgBoxInner></WinnerBgBoxInner>
      </WinnerBgBoxMiddle>
    </WinnerBgBoxOuter>
  );
};

export default WinnerBg;
