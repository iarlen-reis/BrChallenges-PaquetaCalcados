import styled from 'styled-components'

export const MaleSectionStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 10rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.SecundaryColorUnder};
`

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5.4rem;

  p {
    align-items: center;
    width: 50.17rem;
    font-size: 2.2rem;
    line-height: 3.6rem;

    margin-top: 17rem;

    text-align: left;
    font-family: ${({ theme }) => theme.font.montserrat};
    color: ${({ theme }) => theme.colors.SecundaryColorUnder};
  }

  button {
    width: 25.7rem;
    align-self: flex-start;
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
export const MaleImage = styled.div`
  position: relative;
  height: 66.7rem;

  background-image: linear-gradient(
      to left,
      #f57002 3.3%,
      rgba(245, 112, 2, 0) 56.06%
    ),
    url('/Images/MaleImage.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const DescriptionImage = styled.div`
  position: absolute;
  z-index: 2;
  right: 4rem;
  bottom: 7rem;
  width: 30.5rem;

  text-align: right;

  display: flex;
  flex-direction: column;

  span {
    font-size: 4.8rem;
    line-height: 6.7rem;

    color: ${({ theme }) => theme.colors.TextWhite};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
