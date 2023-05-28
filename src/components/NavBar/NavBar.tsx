import { Container } from '../../styles/Global'

import { NavStyled, UlStyled } from './styles'

import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <NavStyled>
      <Container>
        <UlStyled>
          <li>
            <Link to="bannerHero" smooth={true} duration={500} offset={-70}>
              Novidades
            </Link>
          </li>
          <li>
            <Link to="femaleSection" smooth={true} duration={500} offset={-0}>
              Feminino
            </Link>
          </li>
          <li>
            <Link to="maleSection" smooth={true} duration={500} offset={-70}>
              Masculino
            </Link>
          </li>
          <li>
            <Link
              to="featuredProdcuts"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Paquetá Esportes
            </Link>
          </li>
          <li>
            <Link to="outlets" smooth={true} duration={500} offset={-70}>
              Outlet
            </Link>
          </li>
          <li>
            <Link to="advertisers" smooth={true} duration={500} offset={-70}>
              Cashback
            </Link>
          </li>
        </UlStyled>
      </Container>
    </NavStyled>
  )
}

export default NavBar
