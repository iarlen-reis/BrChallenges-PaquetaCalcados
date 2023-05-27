import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  height: 34.9rem;
`

export const FooterContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;

  align-items: start;
  justify-content: space-between;

  margin-top: 5.8rem;
`

export const ColumnFooterStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  text-align: left;
  list-style: none;

  h3 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  a {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.4rem;
    line-height: 2.24rem;

    text-decoration: none;

    opacity: 0.6;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      opacity: 1;
    }
  }
`

export const SpecialColumnFooterStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.8rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 1.2rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  a {
    width: 28.2rem;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.4rem;
    line-height: 2.2rem;

    text-decoration: none;

    opacity: 0.6;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      opacity: 1;
    }
  }
`

export const PaymentColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  ul {
    display: flex;
    gap: 2rem;

    list-style: none;
  }

  svg {
    font-size: 2.4rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`
export const SocialColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  list-style: none;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    cursor: pointer;
    transition: 0.5s;

    :hover {
      opacity: 0.5;
    }
  }
`

export const LastColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  text-align: left;

  gap: 7rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  div:nth-child(1) {
    img {
      width: 70px;
      height: 95px;
    }
  }

  div:nth-child(2) {
    img {
      width: 115px;
      height: 32px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`
