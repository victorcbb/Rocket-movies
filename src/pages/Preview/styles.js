import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;

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
  height: calc(100vh - 23rem);

  grid-area: content;

  overflow-y: auto;

  margin: 4rem auto 0;

  > .title {
    margin-block: 2.4rem;

    display: flex;
    align-items: center;
    gap: 1.9rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  > .infos {
    display: flex;
    align-items: center;
    gap: .8rem;

    img {
      width: 1.6rem;
      height: 1.6rem;

      border: .1rem solid ${({ theme }) => theme.COLORS.GRAY_200};
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      font-family: "Roboto", sans-serif;
      margin-right: .8rem;
    }
  }

  > .tags {
    display: flex;
    align-items: center;
    gap: .8rem;
    flex-wrap: wrap;

    margin-block: 4rem;
  }

  > p {
    text-align: justify;
  }

  .DeleteNote {
    margin-top: 3rem;
  }
`
