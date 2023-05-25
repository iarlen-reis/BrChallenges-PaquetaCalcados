import styled from 'styled-components'

export const CassoselStyled = styled.div`
  width: 100%;
`

export const CustomDots = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin: 0 5px;
    width: 20px;
    height: 2px;
    background-color: #000;
    opacity: 0.5;
    transition: opacity 0.3s;

    &.slick-active {
      opacity: 1;
    }
  }

  margin-bottom: -2rem;
`
