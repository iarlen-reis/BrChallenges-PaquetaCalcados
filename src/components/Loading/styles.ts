import styled from 'styled-components'

export const LoadingStyled = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.Linear};
`
