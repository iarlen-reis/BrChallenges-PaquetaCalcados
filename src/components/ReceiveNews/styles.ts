import styled from 'styled-components'

export const ReciveNewStyled = styled.section`
  display: flex;
  width: 100%;
  height: 37rem;

  margin-top: 20rem;

  background: ${({ theme }) => theme.colors.Linear};
`

export const ReciveNewsContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  justify-content: space-between;
`
export const DescriptionStyled = styled.div`
  display: flex;
  align-items: center;

  p {
    width: 45.9rem;

    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 3.4rem;
    line-height: 4.76rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.TextWhite};
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 4.5rem;
  }
  img:nth-child(2) {
    position: absolute;
    right: -5rem;
    bottom: -3.5rem;
  }
`
