import styled from "styled-components";

export const ActionIcon = styled.img``;

export const ActionIconBox = styled.div``;

export const ActionBox = styled.div``;

const Action = ({ className }) => {
  return (
    <ActionBox className={className}>
      <ActionIconBox>
        <ActionIcon />
      </ActionIconBox>
    </ActionBox>
  );
};

export default Action;
