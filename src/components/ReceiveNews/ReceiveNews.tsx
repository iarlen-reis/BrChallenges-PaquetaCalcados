/* eslint-disable import/no-absolute-path */
import React from 'react'

import {
  ReciveNewStyled,
  ReciveNewsContainer,
  DescriptionStyled,
} from './styles'

import Line from '/Images/Line.png'
import Arrow from '/Images/Arrow.png'
import ReceiveForm from '../ReceiveForm/ReceiveForm'

const ReceiveNews = () => {
  return (
    <ReciveNewStyled>
      <ReciveNewsContainer>
        <DescriptionStyled>
          <p>
            SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
          </p>
          <div>
            <img src={Line} alt="" />
            <img src={Arrow} alt="" />
          </div>
        </DescriptionStyled>
        <ReceiveForm />
      </ReciveNewsContainer>
    </ReciveNewStyled>
  )
}

export default ReceiveNews
