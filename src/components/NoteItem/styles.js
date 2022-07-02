import styled from "styled-components"

export const Container = styled.div`
  width: fit-content;
  height: 5.6rem;

  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border: ${({ theme, isNew }) => isNew ? `.1rem dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 1rem;

  padding: 1.6rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > input {
    width: max-content;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`
