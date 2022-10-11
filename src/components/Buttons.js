import styled from "styled-components";

export const WhiteOutlineBtn = styled.button`
  all: unset;
  text-align: center;
  user-select: none;
  background: transparent;
  color: var(--White);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5ch;
  line-height: 2.75ch;
  border: 0.1rem solid var(--White);
  border-radius: 0.5rem;
  padding: 1rem 1.75rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: var(--White);
    color: var(--Score-text);
  }
`;
