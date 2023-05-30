import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${({ theme }) => theme.font.poppins};
    }

`
export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;

  align-items: center;
  justify-content: space-between;
`
