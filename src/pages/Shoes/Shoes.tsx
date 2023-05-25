import React from 'react'
import { Container } from '../../styles/Global'

import { ShoeStyled } from './styles'
import ProductCard from '../../components/ProductCard/ProductCard'

import { useFetchShoes } from '../../hooks/useFetchShoes'

const Shoes = () => {
  const { shoes } = useFetchShoes()

  return (
    <Container>
      <ShoeStyled>
        {shoes &&
          shoes.map((shoe) => <ProductCard shoes={shoe} key={shoe.id} />)}
      </ShoeStyled>
    </Container>
  )
}

export default Shoes
