import LogoImage from '../Icons/LogoImage'

import { LogoContainer, LogoStyled, OptionStyled } from './styles'
import { Container } from '../../styles/Global'
import { Link } from 'react-router-dom'

import { FiShoppingBag, FiUser } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'

import { useCartContext } from '../../context/CartContext'

const Logo = () => {
  const { cart } = useCartContext()
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
            <span>{cart.length}</span>
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
