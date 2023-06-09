import styled from 'styled-components'

export const FemaleSectionStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10rem 0;
`
export const FemaleImage = styled.div`
  position: relative;
  width: 62.2rem;
  height: 66.7rem;

  background-image: linear-gradient(
      to right,
      #f57002 3.3%,
      rgba(245, 112, 2, 0) 56.06%
    ),
    url('/Images/FemaleImage.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const DescriptionImage = styled.div`
  position: absolute;
  z-index: 2;
  left: 5rem;
  bottom: 7.7rem;

  display: flex;
  flex-direction: column;

  span {
    font-size: 4.8rem;
    line-height: 6.7rem;

    color: ${({ theme }) => theme.colors.TextWhite};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
export const DescriptionSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 16rem;
  gap: 5.4rem;

  p {
    width: 60.28rem;
    font-size: 2.2rem;
    line-height: 3.6rem;

    text-indent: 5.8rem;

    text-align: right;
    font-family: ${({ theme }) => theme.font.montserrat};
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};

    span {
      font-weight: 600;
    }
  }

  button {
    width: 25.7rem;
    align-self: flex-end;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 110%;

    padding: 1.5rem;

    border: none;
    border-radius: 3px;

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.TextWhite};
    background: ${({ theme }) => theme.colors.LinearTwo};

    :hover {
      opacity: 0.8;
    }
  }
`
