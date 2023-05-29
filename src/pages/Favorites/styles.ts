import styled from 'styled-components'

export const FavoriteStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.font.montserrat};
`

export const FavoriteNavegation = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.8rem;
  line-height: 2.52rem;

  margin: 6.5rem 0;

  color: ${({ theme }) => theme.colors.SecundaryColorUnder};

  a {
    text-decoration: none;
    transition: 0.5s;
    opacity: 0.7;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      opacity: 1;
    }
  }

  span {
    font-weight: 500;

    padding-bottom: 0.1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColor};
  }
`

export const TitleStyled = styled.h1`
  font-size: 3.4rem;
  line-height: 4.76rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.SecundaryColor};

  margin-bottom: 4rem;
`

export const UlStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  list-style: none;

  padding: 3.8rem 4.6rem;
  border-radius: 1rem;

  background: rgba(56, 56, 56, 0.03);

  h2 {
    width: 11.2rem;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2.6rem;
    line-height: 3.6rem;
    font-weight: 600;

    text-align: left;

    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColor};

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  li {
    display: flex;
    gap: 6rem;

    margin-left: 12rem;
  }

  li:not(:last-child) {
    border-bottom: 1px solid rgba(207, 93, 0, 0.5);
  }

  li + li {
    margin-top: 4rem;
  }

  img {
    width: 25.9rem;
    height: 25.8rem;
  }
`

export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    width: 100%;
    font-size: 3rem;
    line-height: 4.2rem;
    font-weight: 700;

    border: none;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  p {
    font-size: 1.8rem;
    line-height: 2.5rem;

    opacity: 0.8;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  p:nth-child(2) {
    font-size: 2rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span {
    font-weight: 700;
  }
`

export const ButtonRemoveStyled = styled.button`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;

  font-size: 2rem;

  cursor: pointer;
  border: none;

  transition: 0.5s;
  color: ${({ theme }) => theme.colors.SecundaryColor};
  background: transparent;

  :hover {
    color: ${({ theme }) => theme.colors.TextError};
  }
`

export const NoFavorite = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.font.montserrat};

  align-items: center;
  justify-content: center;
  align-self: center;

  gap: 2rem;

  p {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  a {
    width: 30rem;
    font-size: 2rem;
    padding: 2rem 1rem;

    text-align: center;
    text-decoration: none;

    font-weight: 600;

    border-radius: 1rem;

    transition: 0.5s;

    color: ${({ theme }) => theme.colors.TextWhite};
    background: ${({ theme }) => theme.colors.LinearTwo};

    :hover {
      opacity: 0.8;
    }
  }
`
