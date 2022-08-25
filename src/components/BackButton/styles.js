import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: .8rem;

  border: none;
  background: transparent;

  color: ${({ theme }) => theme.COLORS.SALMON};
`
