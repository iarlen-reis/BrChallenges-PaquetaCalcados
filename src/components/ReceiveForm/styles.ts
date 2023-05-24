import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 65rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 4rem;
`

export const DescriptionStyled = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 500;

  text-align: center;

  color: ${({ theme }) => theme.colors.TextWhite};
`

export const FormStyled = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2.4rem;
`

export const InputStyled = styled.div`
  width: 100%;
  display: flex;

  gap: 2.8rem;
`

export const LabelStyled = styled.label`
  width: 100%;
  position: relative;
  display: flex;

  svg {
    position: absolute;
    left: 0;
    bottom: 0.8rem;

    font-size: 2rem;
    color: ${({ theme }) => theme.colors.TextWhite};
  }

  input {
    width: 100%;
    font-size: 1.8rem;
    line-height: 2.52rem;

    padding-bottom: 0.5rem;
    padding-left: 3.5rem;

    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.TextWhite};

    background: transparent;
    color: ${({ theme }) => theme.colors.TextWhite};

    ::placeholder {
      font-size: 1.8rem;
      line-height: 2.52rem;
      color: ${({ theme }) => theme.colors.TextWhite};

      opacity: 0.6;
    }
  }
`

export const CategoryStyled = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  p {
    width: 100%;
    font-size: 1.8rem;
    line-height: 2.52rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.TextWhite};
  }

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    align-items: center;
    gap: 1.3rem;

    cursor: pointer;
  }

  input {
    width: 2.1rem;
    height: 2.1rem;

    border: none;
    border-radius: 3px;

    cursor: pointer;

    color: transparent;
    background: ${({ theme }) => theme.colors.TextWhite};
  }

  span {
    font-size: 1.8rem;
    line-height: 2.52rem;

    color: ${({ theme }) => theme.colors.TextWhite};
  }
`

export const ButtonStyled = styled.button`
  width: 25.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  font-size: 1.8rem;
  line-height: 1.98rem;

  padding: 1.2rem;

  border: none;
  border-radius: 3px;

  cursor: pointer;
  transition: 0.5s;

  color: ${({ theme }) => theme.colors.TextWhite};
  background: ${({ theme }) => theme.colors.LinearTwo};

  :hover {
    opacity: 0.8;
  }
`
