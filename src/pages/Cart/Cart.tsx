/* eslint-disable import/no-absolute-path */
import React from 'react'
import { Container } from '../../styles/Global'
import { Link } from 'react-router-dom'

import {
  CartStyled,
  NavigationStyled,
  UlStyled,
  ContentStyled,
  DescriptionStyled,
  TitleStyled,
  DetailStyled,
  RemoveStyled,
} from './styles'

import { FiTrash2 } from 'react-icons/fi'

import { useSetLocalStorage } from '../../hooks/useLocalStorage'

const Cart = () => {
  const { cartSaved } = useSetLocalStorage()
  return (
    <Container>
      <CartStyled>
        <NavigationStyled>
          <Link to="/">Paquetá</Link> {'>'} <span>Sacola</span>
        </NavigationStyled>
        <h1>Sacola de compras</h1>
        <UlStyled>
          <h2>Itens</h2>
          {cartSaved ? (
            cartSaved.map((cart) => (
              <li key={cart.id}>
                <img src={cart.image} alt="" />
                <ContentStyled>
                  <DescriptionStyled>
                    <TitleStyled>
                      <Link to={`/shoe/${cart.id}`}>{cart.name}</Link>
                      <span>Código do produto: 365087-2001102972</span>
                    </TitleStyled>
                    <DetailStyled>
                      <p>
                        <span>Numeração:</span> {cart.shoeSize}
                      </p>
                      <p>
                        <span>Cor:</span> Preto
                      </p>
                      <p>
                        <span>Quantidade:</span> 1
                      </p>
                      <p>
                        <span>Preço:</span> R$ {cart.price}
                      </p>
                    </DetailStyled>
                  </DescriptionStyled>
                  <RemoveStyled>
                    <FiTrash2 />
                    Remover
                  </RemoveStyled>
                </ContentStyled>
              </li>
            ))
          ) : (
            <p>Sem produtos</p>
          )}
        </UlStyled>
      </CartStyled>
    </Container>
  )
}

export default Cart
