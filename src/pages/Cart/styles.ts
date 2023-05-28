import styled from 'styled-components'

export const CartStyled = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 10rem;
`

export const NavigationStyled = styled.p`
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 500;

  margin: 6.5rem 0;

  color: ${({ theme }) => theme.colors.SecundaryColorUnder};

  a {
    text-decoration: none;
    opacity: 0.6;

    transition: 0.5s;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      opacity: 1;
    }
  }

  span {
    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColor};
  }
`

export const TitleCartStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 4rem;

  font-family: ${({ theme }) => theme.font.montserrat};
  color: ${({ theme }) => theme.colors.SecundaryColor};

  h1 {
    font-size: 3.4rem;
    line-height: 4.8rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;
    width: fit-content;
    height: fit-content;

    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColor};
  }
`

export const UlStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 3.8rem 4.6rem;

  list-style: none;

  border-radius: 1rem;

  background: rgba(56, 56, 56, 0.03);

  h2 {
    width: 11.2rem;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2.6rem;
    line-height: 3.6rem;
    font-weight: 600;

    text-align: right;

    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColor};

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  li {
    display: flex;
    gap: 6rem;

    margin-left: 12rem;
  }

  li:not(:last-child) {
    padding-bottom: 6rem;
    border-bottom: 1px solid rgba(207, 93, 0, 0.5);
  }

  li + li {
    margin-top: 8rem;
  }

  img {
    width: 21.9rem;
    height: 25.8rem;
  }
`

export const ContentStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.montserrat};

  a {
    font-size: 3rem;
    line-height: 4.2rem;
    font-weight: 700;

    text-decoration: none;

    transition: 0.5s;
    color: ${({ theme }) => theme.colors.SecundaryColor};

    :hover {
      opacity: 0.7;
    }
  }

  span {
    font-size: 1.8rem;
    line-height: 2.5rem;

    opacity: 0.8;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`

export const DetailStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  p {
    display: flex;
    gap: 1rem;

    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span {
    font-weight: 700;
  }
`

export const RemoveStyled = styled.button`
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

export const NoCartItems = styled.div`
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
