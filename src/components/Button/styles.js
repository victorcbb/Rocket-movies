import styled from "styled-components"

export const Container = styled.button`
  width: 100%;

  border: none;
  border-radius: 1rem;

  padding-block: 1.6rem;
  margin-top: 1.6rem;

  background: ${({ theme, isBlack }) => isBlack ? theme.COLORS.BACKGROUND_900 : theme.COLORS.SALMON};

  font-weight: 500;
  color: ${({ theme, isBlack }) => isBlack ? theme.COLORS.SALMON : theme.COLORS.BACKGROUND_800};
`
