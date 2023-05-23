import React from 'react'

import { ParagraphStyled, ContactStyled, SacStyled } from './styles'
import { Container } from '../../styles/Global'

import { TbHeadphones } from 'react-icons/tb'
import { MdLocationPin } from 'react-icons/md'

const Sac = () => {
  return (
    <>
      <SacStyled>
        <Container>
          <ParagraphStyled>Loja de Calçados e Moda Online</ParagraphStyled>
          <ContactStyled>
            <ContactStyled>
              <li>
                <TbHeadphones />
                Fale conosco
              </li>
              <li>
                <MdLocationPin />
                Encontrar uma loja física
              </li>
            </ContactStyled>
          </ContactStyled>
        </Container>
      </SacStyled>
    </>
  )
}

export default Sac
