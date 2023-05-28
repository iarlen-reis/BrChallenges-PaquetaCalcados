/* eslint-disable import/no-absolute-path */
import React from 'react'

import { Container } from '../../styles/Global'

import Adidas from '/Images/Adidas.png'
import ViaMarte from '/Images/ViaMarte.png'
import Bebece from '/Images/Bebece.png'
import Dumond from '/Images/Dumond.png'

import { Advertiserstyled } from './styles'

import { Fade } from 'react-awesome-reveal'

const Advertisers = () => {
  return (
    <Fade direction="up" triggerOnce={true} delay={200}>
      <Container>
        <Advertiserstyled>
          <h2>AS MELHORES MARCAS ESTÃO AQUI!</h2>
          <ul>
            <li>
              <img src={Adidas} alt="Logo da marca Adidas" />
            </li>
            <li>
              <img src={ViaMarte} alt="Logo da marca ViaMarte" />
            </li>
            <li>
              <img src={Bebece} alt="Logo da marca Bebecê" />
            </li>
            <li>
              <img src={Dumond} alt="Logo da marca Dumond" />
            </li>
          </ul>
        </Advertiserstyled>
      </Container>
    </Fade>
  )
}

export default Advertisers
