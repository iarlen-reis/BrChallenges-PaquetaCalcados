import styled from 'styled-components'

export const BackToTopStyled = styled.div`
  width: 5rem;
  height: 5rem;

  position: fixed;

  bottom: 4rem;
  right: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  transition: 0.5s;

  cursor: pointer;

  background: ${({ theme }) => theme.colors.LinearTwo};

  :hover {
    opacity: 0.8;
  }

  svg {
    transition: 0.5s;
    font-size: 2rem;

    color: ${({ theme }) => theme.colors.TextWhite};

    :hover {
      opacity: 0.8;
    }
  }
`
