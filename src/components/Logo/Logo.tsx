import React from 'react'
import LogoImage from '../Icons/LogoImage'

import { LogoContainer, LogoStyled, OptionStyled } from './styles'
import { Container } from '../../styles/Global'
import { Link } from 'react-router-dom'

import { FiShoppingBag, FiUser } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'

import { useSetLocalStorage } from '../../hooks/useLocalStorage'

const Logo = () => {
  const { cartSaved } = useSetLocalStorage()
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
          <Link to="/cart">
            <FiShoppingBag />
            Sacola
            {cartSaved && <span>{cartSaved.length}</span>}
          </Link>
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
