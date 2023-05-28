import styled from 'styled-components'

export const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  margin-top: 3.3rem;
`

export const UlStyled = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  a {
    font-family: ${({ theme }) => theme.font.poppins};
    font-weight: 500;

    font-size: 1.8rem;
    line-height: 2.52rem;

    border: none;
    cursor: pointer;

    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
    background: transparent;

    :hover {
      color: ${({ theme }) => theme.colors.PrimaryColor};
    }
  }
`
