/* eslint-disable import/no-absolute-path */
import React from 'react'

import { BenefitStyled, BenefitContainer, Benefit } from './styles'

import CreditCard from '/Images/CreditCard.png'
import Localization from '/Images/Localization.png'
import Discount from '/Images/Discount.png'
import Pack from '/Images/Pack.png'
import ReFound from '/Images/ReFound.png'
import { Container } from '../../styles/Global'

const Benefits = () => {
  return (
    <BenefitStyled>
      <Container>
        <BenefitContainer>
          <Benefit>
            <img
              src={CreditCard}
              alt="pague com cartão de credito 10 vezes sem juros"
            />
            <p>
              PAGUE EM ATÉ 10X <span>SEM JUROS*</span>
            </p>
          </Benefit>
          <Benefit>
            <img
              src={Localization}
              alt="Retire grátis em uma das nossas loja"
            />
            <p>
              <span>RETIRE GRÁTIS</span>
              EM NOSSAS LOJAS
            </p>
          </Benefit>
          <Benefit>
            <img src={Discount} alt="Ganhe 20 porcento de desconto" />
            <p>
              <span>GANHE 20% DE DESCONTO*</span>
            </p>
          </Benefit>
          <Benefit>
            <img
              src={Pack}
              alt="Frete grátis para as regiões do Sul e Sudeste"
            />
            <p>
              <span>FRETE GRÁTIS</span> PARA REGIÕES SUL E SUDESTE*
            </p>
          </Benefit>
          <Benefit>
            <img src={ReFound} alt="Primeira troca grátis" />
            <p>PRIMEIRA TROCA GRÁTIS</p>
          </Benefit>
        </BenefitContainer>
      </Container>
    </BenefitStyled>
  )
}

export default Benefits
