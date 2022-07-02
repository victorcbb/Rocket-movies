import styled from "styled-components"

export const Container = styled.div`
  width: fit-content;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  padding: 0.5em 1.6rem;
  margin-right: .8rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: .8rem;
`
