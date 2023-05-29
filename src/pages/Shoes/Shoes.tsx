import React from 'react'
import { Container } from '../../styles/Global'

import { ShoeStyled } from './styles'
import ProductCard from '../../components/ProductCard/ProductCard'

import { useFetchShoes } from '../../hooks/useFetchShoes'

import { Fade } from 'react-awesome-reveal'
import Loading from '../../components/Loading/Loading'

const Shoes = () => {
  const { shoes, loading } = useFetchShoes()

  window.scrollTo(0, 0)

  if (loading) return <Loading />

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
