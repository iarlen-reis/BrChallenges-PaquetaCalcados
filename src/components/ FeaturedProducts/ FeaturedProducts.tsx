import React from 'react'
import { Container } from '../../styles/Global'

import { FeaturedStyled, HeaderFeatured } from './styles'
import { Link } from 'react-router-dom'

import Carrosel from '../Carrosel/Carrosel'

import { Fade } from 'react-awesome-reveal'

const FeaturedProducts = () => {
  return (
    <Fade direction="up" triggerOnce={true} delay={200}>
      <Container>
        <FeaturedStyled>
          <HeaderFeatured>
            <h2>DESTAQUES</h2>
            <Link to="/shoes">CONFIRA TUDO</Link>
          </HeaderFeatured>
          <Carrosel />
        </FeaturedStyled>
      </Container>
    </Fade>
  )
}

export default FeaturedProducts
