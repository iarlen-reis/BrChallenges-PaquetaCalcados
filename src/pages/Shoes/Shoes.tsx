import React from 'react'
import { Container } from '../../styles/Global'

import { ShoeStyled } from './styles'
import ProductCard from '../../components/ProductCard/ProductCard'

import { useFetchShoes } from '../../hooks/useFetchShoes'

import { Fade } from 'react-awesome-reveal'

const Shoes = () => {
  const { shoes } = useFetchShoes()

  return (
    <Container>
      <ShoeStyled>
        {shoes &&
          shoes.map((shoe) => (
            <Fade direction="up" triggerOnce={true} delay={100} key={shoe.id}>
              <ProductCard shoes={shoe} key={shoe.id} />
            </Fade>
          ))}
      </ShoeStyled>
    </Container>
  )
}

export default Shoes
