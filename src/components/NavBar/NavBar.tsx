import React from 'react'
import { Container } from '../../styles/Global'

import { NavStyled, UlStyled } from './styles'

const NavBar = () => {
  return (
    <NavStyled>
      <Container>
        <UlStyled>
          <li>
            <button>Novidades</button>
          </li>
          <li>
            <button>Feminino</button>
          </li>
          <li>
            <button>Masculino</button>
          </li>
          <li>
            <button>Paquetá Esportes</button>
          </li>
          <li>
            <button>Outlet</button>
          </li>
          <li>
            <button>Cashback</button>
          </li>
        </UlStyled>
      </Container>
    </NavStyled>
  )
}

export default NavBar
