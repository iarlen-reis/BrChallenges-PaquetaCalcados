import styled from 'styled-components'

export const ImageBanner = styled.section`
  width: 100%;
  height: 62.2rem;
  background-image: url('/Images/BannerHero.png');
  background-position: center center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  object-fit: cover;

  margin-top: 1.8rem;
`

export const BannerContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  margin: 0 auto;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 2rem;
`
export const DescriptionStyled = styled.div`
  h1 {
    height: 9rem;
    font-size: 8rem;
    font-weight: 600;
    line-height: 120px;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span {
    font-size: 5rem;
    font-weight: 400;
    line-height: 90px;

    opacity: 0.8;
    color: ${({ theme }) => theme.colors.PrimaryColorOver};
  }
`
export const PriceStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;

    opacity: 0.6;
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  span {
    font-size: 5rem;
    font-weight: 700;
    line-height: 7.5rem;

    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }
`
export const ButtonStyled = styled.button`
  width: 25.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: self-start;

  font-size: 1.8rem;

  padding: 1.2rem;

  border: none;
  border-radius: 3px;

  transition: 0.5s;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.TextWhite};
  background: ${({ theme }) => theme.colors.LinearTwo};

  :hover {
    opacity: 0.8;
  }
`
