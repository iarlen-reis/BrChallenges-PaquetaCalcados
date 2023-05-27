import styled from 'styled-components'

export const Advertiserstyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 8rem;

  margin-top: 16.8rem;

  h2 {
    text-align: left;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 3.4rem;
    line-height: 4.76rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  ul {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    list-style: none;
  }

  img {
    transition: 0.5s;

    :hover {
      transform: scale(1.1);
    }
  }
`
