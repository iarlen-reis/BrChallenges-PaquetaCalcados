import styled from 'styled-components'

export const SacStyled = styled.div`
  width: 100%;

  padding: 1.5rem 0;
  background: ${({ theme }) => theme.colors.Linear};
`

export const ParagraphStyled = styled.p`
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 1.4rem;
  line-height: 1.96rem;

  color: ${({ theme }) => theme.colors.TextWhite};
`

export const ContactStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 6.5rem;

  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.font.poppins};

    cursor: pointer;

    color: ${({ theme }) => theme.colors.TextWhite};

    svg {
      font-size: 2rem;
    }
  }
`
