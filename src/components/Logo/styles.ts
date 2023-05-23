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

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.font.poppins};
    font-size: 1.4rem;
    line-height: 2rem;

    gap: 0.5rem;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    svg {
      font-size: 3rem;
    }
  }
`
