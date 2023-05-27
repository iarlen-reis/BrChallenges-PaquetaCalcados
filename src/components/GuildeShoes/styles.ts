import styled from 'styled-components'

interface IGuildeShoe {
  isOpen: boolean
}

export const GuildeShoeStyled = styled.div<IGuildeShoe>`
  position: absolute;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 2;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.1);
`

export const GuildeContainer = styled.div`
  position: relative;
  width: 99rem;
  height: 81.4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 6.4rem;

  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;

  background: ${({ theme }) => theme.colors.TextWhite};
`

export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 34rem;

  gap: 4.4rem;

  h1 {
    font-size: 3rem;
    line-height: 4.2rem;
    font-weight: 750;

    color: ${({ theme }) => theme.colors.PrimaryColorOver};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  p {
    display: flex;
    gap: 1.6rem;

    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    padding: 1.2rem;

    border-radius: 50%;

    color: ${({ theme }) => theme.colors.TextWhite};
    background: ${({ theme }) => theme.colors.PrimaryColorUnder};
  }

  img {
    width: 17rem;
    height: 30.5rem;

    margin-top: 5rem;
  }
`

export const SizeShoeStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.3rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  span {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 2.2rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span:nth-child(1) {
    font-weight: 750;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 2rem;
  right: 2rem;

  background: transparent;
  border: none;

  svg {
    font-size: 2.5rem;

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      color: ${({ theme }) => theme.colors.TextError};
    }
  }
`
