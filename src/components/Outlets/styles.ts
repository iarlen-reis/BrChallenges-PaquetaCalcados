import styled from 'styled-components'

export const OutletStyled = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 10.5rem;

  gap: 7.4rem;
`
export const OutletLogo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    width: 58.8rem;

    text-align: right;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2.2rem;

    line-height: 3.6rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  li {
    width: 6.5rem;
    height: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.2rem;
    font-weight: 500;
    line-height: 3.1rem;

    opacity: 0.7;

    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }
`
