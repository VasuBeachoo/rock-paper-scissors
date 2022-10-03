import styled from "styled-components";

export const ActionIcon = styled.img``;

export const ActionIconBox = styled.div``;

export const ActionBox = styled.div``;

const Action = ({ className, icon }) => {
  return (
    <ActionBox className={className}>
      <ActionIconBox>
        <ActionIcon src={icon.src} alt={icon.alt} />
      </ActionIconBox>
    </ActionBox>
  );
};

export default Action;
