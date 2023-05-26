import styled from 'styled-components'

export const CardStyled = styled.div`
  width: 30.7rem;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  gap: 1rem;

  padding: 2.4rem;

  border-radius: 3px;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.1);
`
interface ISoldOut {
  soldOut: boolean
}
export const FavoriteStyled = styled.div<ISoldOut>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: ${(props) => (props.soldOut ? '2rem' : '0rem')};

  svg {
    font-size: 2.5rem;

    color: ${({ theme }) => theme.colors.PrimaryColorOver};

    cursor: pointer;
  }
`
export const ImageStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 19.8rem;
    height: 15.9rem;
  }
`

export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  text-align: left;
  font-family: ${({ theme }) => theme.font.montserrat};

  a {
    font-size: 1.4rem;
    line-height: 1.96rem;
    font-weight: 500;

    text-decoration: none;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  span {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  small {
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 400;

    opacity: 0.6;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`

export const ButtonStyled = styled.button<ISoldOut>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.font.poppins};
  font-size: ${(props) => (props.soldOut ? '1.6rem' : '1.8rem')};
  line-height: 110%;
  font-weight: 700;

  padding: 1.2rem;

  border: none;
  border-radius: 3px;

  cursor: pointer;
  transition: 0.5s;

  color: ${({ theme }) => theme.colors.TextWhite};
  background: ${(props) =>
    props.soldOut
      ? 'rgba(207, 93, 0, 1)'
      : 'linear-gradient(122.71deg, #F99500 53.34%, #FFCD29 133.06%)'};

  :hover {
    opacity: 0.8;
  }
`

export const SoldOutStyled = styled.p`
  text-align: center;
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 1.4rem;
  line-height: 1.96rem;
  font-weight: 700;

  padding: 0.5rem;

  border-radius: 3px 3px 0px 0px;

  color: ${({ theme }) => theme.colors.TextWhite};
  background: ${({ theme }) => theme.colors.PrimaryColorOver};
`
export const NoSoldOut = styled.div`
  width: 100%;
  padding: 0.4rem;
`
