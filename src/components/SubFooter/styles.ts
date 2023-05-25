import styled from 'styled-components'

export const SubFooterStyled = styled.div`
  width: 100%;
  height: 9.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.SecundaryColorUnder};

  > div {
    display: flex;
    align-items: center;
    gap: 2.8rem;
  }

  p {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.TextWhite};
  }

  img {
    width: 26.5rem;
    height: 5.9rem;
  }
`
