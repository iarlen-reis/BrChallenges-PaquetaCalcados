import styled from 'styled-components'

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  width: 29.7rem;
  height: 8.6rem;

  svg {
    width: 100%;
  }
`

export const OptionStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;

  list-style: none;

  li,
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.font.poppins};
    font-size: 1.4rem;
    line-height: 2rem;

    gap: 1.2rem;

    text-decoration: none;

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      color: ${({ theme }) => theme.colors.PrimaryColor};
    }

    svg {
      font-size: 3.5rem;
    }
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -1.4rem;
    left: 1.9rem;

    height: 1rem;
    width: 1rem;
    padding: 1.3rem;
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.TextWhite};
    background: ${({ theme }) => theme.colors.LinearTwo};
  }
`
