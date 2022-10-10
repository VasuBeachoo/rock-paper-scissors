import styled from "styled-components";

export const ActionIcon = styled.img`
  width: 4.5rem;
  user-select: none;
  pointer-events: none;
`;

export const ActionIconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--Light-gray);
  border-top: 0.7rem solid var(--Gray);
  border-radius: 100%;
  padding: 2.2rem 3.15rem 2.6rem;
`;

export const ActionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.7rem solid;
  border-radius: 100%;
  padding: 1.65rem;
  transition: 0.25s;
`;

const Action = ({ className, icon, onClick }) => {
  return (
    <ActionBox className={className} onClick={onClick}>
      {icon && (
        <ActionIconBox>
          <ActionIcon src={icon.src} alt={icon.alt} />
        </ActionIconBox>
      )}
    </ActionBox>
  );
};

export default Action;
