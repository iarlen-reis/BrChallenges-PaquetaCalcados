import React from 'react'

import {
  FormContainer,
  DescriptionStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  CategoryStyled,
  ButtonStyled,
} from './styles'

import { MdOutlineMail } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'

const ReceiveForm = () => {
  return (
    <FormContainer>
      <DescriptionStyled>
        Nos informe o seu e-mail e nome para o melhor atendimento!
      </DescriptionStyled>
      <FormStyled>
        <InputStyled>
          <LabelStyled>
            <MdOutlineMail />
            <input type="text" placeholder="maria@seuemail.com" />
          </LabelStyled>
          <LabelStyled>
            <BiUser />
            <input type="text" placeholder="Maria da Silva" />
          </LabelStyled>
        </InputStyled>
        <CategoryStyled>
          <p>Tenho interesse na categoria:</p>
          <div>
            <label>
              <input type="checkbox" name="masculino" id="masculino" />
              <span>Masculina</span>
            </label>
            <label>
              <input type="checkbox" name="feminina" id="feminina" />
              <span>Feminina</span>
            </label>
          </div>
        </CategoryStyled>
        <ButtonStyled>QUERO RECEBER</ButtonStyled>
      </FormStyled>
    </FormContainer>
  )
}

export default ReceiveForm
