/* eslint-disable import/no-absolute-path */
import React from 'react'

import LogoFooter from '/Images/Footer/LogoFooter.png'

import { SubFooterStyled } from './styles'

const SubFooter = () => {
  return (
    <SubFooterStyled>
      <div>
        <p>UMA EMPRESA DO GRUPO </p>
        <img src={LogoFooter} alt="logo paquetá do footer" />
      </div>
    </SubFooterStyled>
  )
}

export default SubFooter
