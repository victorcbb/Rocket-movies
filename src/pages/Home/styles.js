import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  height: 100vh;

  overflow-y: hidden;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content";
  `
export const Content = styled.div`
  grid-area: content;
  width: 100%;
  max-width: 113.7rem;
  
  margin-inline: auto;
  
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 5rem 0 3.6rem;

      a {
        display: flex;
        gap: .8rem;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        padding: 1.6rem 3.2rem;

        background: ${({ theme }) => theme.COLORS.SALMON};
        border-radius: .8rem;
      }
    }

    > section {
      height: 65vh;

      overflow-y: auto;
    }

    > section::-webkit-scrollbar {
      width: 1.6rem;
    }

    > section::-webkit-scrollbar-thumb {
        border: .4rem solid transparent;
        background-clip: padding-box;
        background-color: ${({ theme }) => theme.COLORS.SALMON};
        border-radius: 1.2rem;
    }
  `

export const Section = styled.a`
  width: 100%;
`
