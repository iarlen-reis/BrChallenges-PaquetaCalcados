import React from 'react'
import { Container } from '../../styles/Global'

import { FeaturedStyled, HeaderFeatured } from './styles'
import Carrosel from '../Carrosel/Carrosel'

const FeaturedProducts = () => {
  return (
    <Container>
      <FeaturedStyled>
        <HeaderFeatured>
          <h2>DESTAQUES</h2>
          <button>CONFIRA TUDO</button>
        </HeaderFeatured>
        <Carrosel />
      </FeaturedStyled>
    </Container>
  )
}

export default FeaturedProducts
