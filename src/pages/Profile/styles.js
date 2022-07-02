import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_SALMON};

    padding: 6.4rem 14.4rem 0;
  }
`

export const Form = styled.form`
  width: 33.6rem;

  margin: -9rem auto 0;

  >div:nth-child(4) {
    margin-top: 1.6rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  width: 18.6rem;
  height: 18.6rem;

  margin: 0 auto 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 1rem;
    bottom: .4rem;

    cursor: pointer;
    
    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

`
