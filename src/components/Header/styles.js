import styled from  'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > .content {
    width: 113.7rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.4rem;
  }

  /* padding: 0 35rem; */

  border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  grid-area: header;

  span {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;

  > div {
    width: max-content;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    button {
      background: transparent;
      border: none;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;

    border-radius: 50%;
    border: .1rem solid ${({ theme }) => theme.COLORS.GRAY_200};
  }

  a{
    div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 6.4rem;
      height: 6.4rem;
      
      border-radius: 9999px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }


`
