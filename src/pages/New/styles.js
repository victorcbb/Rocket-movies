import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content";

  > div::-webkit-scrollbar {
      width: 1.6rem;
    }

  > div::-webkit-scrollbar-thumb {
      border: .4rem solid transparent;
      background-clip: padding-box;
      background-color: ${({ theme }) => theme.COLORS.SALMON};
      border-radius: 1.2rem;
  }
`

export const Content = styled.div`
  width: 113.7rem;
  height: calc(100vh - 16rem);

  grid-area: content;
  margin: 4rem auto 0;

  overflow-y: auto;

  h1 {
    margin: 2.4rem 0 4rem; 
  }
`

export const Form = styled.form`
  > div {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 3.2rem 0 4rem;
    padding: 1.9rem 1.6rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 1rem;

    resize: none;
  }

  > textarea::-webkit-scrollbar {
      width: 1.6rem;
    }

  > textarea::-webkit-scrollbar-thumb {
      border: .4rem solid transparent;
      background-clip: padding-box;
      background-color: ${({ theme }) => theme.COLORS.SALMON};
      border-radius: 1.2rem;
  }

  > h3 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > .tags {
    width: 100%;
    height: 8.8rem;

    display: flex; 
    align-items: center;
    gap: 2.4rem;
    flex-wrap: wrap;

    padding: 1.6rem;
    margin-block: 2.4rem;

    border-radius: .8rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  > .buttons {
    display: flex;
  }
`
