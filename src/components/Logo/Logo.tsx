import React from 'react'
import LogoImage from '../Icons/LogoImage'

import { LogoContainer, LogoStyled, OptionStyled } from './styles'
import { Container } from '../../styles/Global'
import { Link } from 'react-router-dom'

import { FiShoppingBag, FiUser } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'

const Logo = () => {
  return (
    <LogoStyled>
      <Container>
        <LogoContainer>
          <Link to={'/'}>
            <LogoImage />
          </Link>
        </LogoContainer>
        <OptionStyled>
          <li>
            <MdFavoriteBorder /> Lista de desejos
          </li>
          <li>
            <FiShoppingBag />
            Sacola
          </li>
          <li>
            <FiUser />
            Entrar
          </li>
        </OptionStyled>
      </Container>
    </LogoStyled>
  )
}

export default Logo
