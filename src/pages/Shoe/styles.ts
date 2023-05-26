import styled from 'styled-components'

export const ShoeStyled = styled.section`
  display: flex;
  flex-direction: column;

  gap: 6.7rem;

  margin-top: 6rem;
`

export const ShoeNavegation = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.52rem;

    opacity: 0.6;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    :hover {
      opacity: 0.4;
    }
  }

  small {
    font-size: 1.8rem;

    opacity: 0.6;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 500;

    padding-bottom: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColorOver};

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`

export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 5rem;
`

export const ImageStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8.1rem;

  img {
    width: 70.3rem;
    height: 52.1rem;

    align-self: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
  }

  p {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.52rem;

    opacity: 0.8;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    list-style: none;

    svg {
      font-size: 3rem;

      cursor: pointer;

      color: ${({ theme }) => theme.colors.SecundaryColorUnder};
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-start;
`

export const FavoriteStyled = styled.p`
  svg {
    font-size: 3.5rem;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.PrimaryColorOver};
  }
`

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 6.3rem;

  gap: 1rem;

  h1 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  small {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;

    opacity: 0.8;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`

export const PriceStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.7rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;

    gap: 2rem;

    font-family: ${({ theme }) => theme.font.montserrat};

    p {
      font-size: 2.2rem;
      line-height: 3.8rem;

      text-decoration: line-through;

      opacity: 0.8;
      color: ${({ theme }) => theme.colors.SecundaryColorUnder};
    }

    span {
      font-size: 1.4rem;
      line-height: 2.24rem;

      padding: 0rem 2rem;

      border-radius: 3px;

      color: ${({ theme }) => theme.colors.TextWhite};
      background: ${({ theme }) => theme.colors.textSuccess};
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;

    margin-bottom: 4.8rem;

    span {
      font-size: 4rem;
      line-height: 5.6rem;
      font-weight: 700;

      color: ${({ theme }) => theme.colors.SecundaryColor};
    }

    small {
      font-size: 2rem;
      line-height: 2.8rem;
      font-weight: 500;

      opacity: 0.6;
      color: ${({ theme }) => theme.colors.SecundaryColorUnder};
    }
  }
`

export const ShoeSizeStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 9rem;

  font-family: ${({ theme }) => theme.font.montserrat};

  gap: 2rem;

  p {
    font-size: 1.8rem;
    line-height: 2.52rem;

    opacity: 0.8;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.5rem;

    list-style: none;
  }

  button {
    align-self: flex-start;

    font-size: 1.6rem;
    line-height: 2.24rem;
    font-weight: 700;

    cursor: pointer;

    border: none;

    opacity: 0.6;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
    background: transparent;
  }
`

interface ILiProps {
  selectedli: boolean
}

export const LiStyled = styled.li<ILiProps>`
  width: 4.7rem;
  height: 4.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.2rem;
  line-height: 3.1rem;
  font-weight: 500;
  text-align: center;

  cursor: pointer;

  border: 1px solid
    ${(props) => (props.selectedli ? '#FF8A29' : 'rgba(0, 0, 0, 0.1)')};

  opacity: 0.7;

  color: ${(props) => (props.selectedli ? '#FF8A29' : '#383838')};

  :nth-child(1),
  :nth-child(3) {
    position: relative;

    cursor: not-allowed;
    overflow: hidden;

    span {
      position: absolute;
      width: 140%;
      height: 1px;

      transform: rotate(45deg);
      background: ${({ theme }) => theme.colors.SecundaryColorUnder};
    }
  }
`

interface ISoldOut {
  soldout: boolean
}
export const ButtonStyled = styled.button<ISoldOut>`
  width: 53.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem;

  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 3.36rem;
  line-height: 3.7rem;

  border: none;
  border-radius: 5.6px;

  transition: 0.5s;

  color: ${({ theme }) => theme.colors.TextWhite};
  background: ${(props) =>
    props.soldout
      ? 'rgba(207, 93, 0, 1)'
      : 'linear-gradient(122.71deg, #F99500 53.34%, #FFCD29 133.06%)'};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ProductAboutStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  margin-bottom: 15rem;

  font-family: ${({ theme }) => theme.font.montserrat};

  h2 {
    font-size: 4rem;
    line-height: 5.6rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  p {
    font-size: 2.2rem;
    line-height: 4rem;
    font-weight: 300;

    opacity: 0.8;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`

export const MoreShoeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-bottom: 11rem;

  h2 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 3.4rem;
    line-height: 4.76rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
