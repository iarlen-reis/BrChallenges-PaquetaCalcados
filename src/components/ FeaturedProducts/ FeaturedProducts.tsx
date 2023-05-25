import React from 'react'
import { Container } from '../../styles/Global'

import { FeaturedStyled, HeaderFeatured } from './styles'
import { Link } from 'react-router-dom'

import Carrosel from '../Carrosel/Carrosel'

const FeaturedProducts = () => {
  return (
    <Container>
      <FeaturedStyled>
        <HeaderFeatured>
          <h2>DESTAQUES</h2>
          <Link to="/shoes">CONFIRA TUDO</Link>
        </HeaderFeatured>
        <Carrosel />
      </FeaturedStyled>
    </Container>
  )
}

export default FeaturedProducts
