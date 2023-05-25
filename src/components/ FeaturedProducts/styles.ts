import styled from 'styled-components'

export const FeaturedStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 4rem;

  margin-top: 16.8rem;
`

export const HeaderFeatured = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 3.4rem;
    font-weight: 600;
    line-height: 4.76rem;

    color: ${({ theme }) => theme.colors.SecundaryColor};
  }

  a {
    align-self: flex-end;
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 1.8rem;
    line-height: 2.5rem;

    text-decoration: none;

    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.PrimaryColorOver};

    cursor: pointer;
    transition: 0.5s;

    color: ${({ theme }) => theme.colors.SecundaryColor};
    background: transparent;

    :hover {
      opacity: 0.8;
    }
  }
`
