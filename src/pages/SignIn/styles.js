import backgroundImg from "../../assets/movie-theater.png"

import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 14.8rem;

  margin-block: auto;

  > h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.2rem;

    margin-block: 4.8rem;
  }

  > a {
    display: block;
    margin-top: 4.2rem;
    text-align: center;

    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`

export const Background = styled.div`
  flex: 1;
  
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
