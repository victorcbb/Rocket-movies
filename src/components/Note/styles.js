import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  max-height: 22.2rem;

  text-align: left;
  
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};
  border-radius: 1.6rem;
  border: none;

  > h2 {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    gap: .6rem;

    svg {
      font-size: 1.2rem;
    }
  }

  > p {
    margin-block: 1.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  > footer {
    display: flex;
  }
`
