import styled from 'styled-components'

export const BenefitStyled = styled.div`
  width: 100%;
  padding: 6.2rem;
  background: ${({ theme }) => theme.colors.Linear};
`

export const BenefitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 4.5rem;
    height: 4rem;
  }

  p {
    color: ${({ theme }) => theme.colors.TextWhite};
    font-size: 1.4rem;
    line-height: 1.96rem;

    span {
      font-weight: 600;
    }
  }

  :nth-child(1) {
    p {
      width: 12.2rem;
    }
  }

  :nth-child(2) {
    span {
      display: block;
    }
  }

  :nth-child(3) {
    p {
      width: 11.5rem;
    }
  }

  :nth-child(4) {
    p {
      width: 17.9rem;
    }
  }
`
