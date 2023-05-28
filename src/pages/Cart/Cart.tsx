/* eslint-disable import/no-absolute-path */
import React from 'react'
import { Container } from '../../styles/Global'
import { Link } from 'react-router-dom'

import {
  CartStyled,
  NavigationStyled,
  TitleCartStyled,
  UlStyled,
  ContentStyled,
  DescriptionStyled,
  TitleStyled,
  DetailStyled,
  RemoveStyled,
  NoCartItems,
} from './styles'

import { FiTrash2 } from 'react-icons/fi'

import { useCartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeItemCart } = useCartContext()

  const total = cart.reduce((acumulador, current) => {
    return acumulador + Number(current.price) * current.amount
  }, 0)

  return (
    <Container>
      <CartStyled>
        <NavigationStyled>
          <Link to="/">Paquetá</Link> {'>'} <span>Sacola</span>
        </NavigationStyled>
        <TitleCartStyled>
          <h1>Sacola de compras</h1>
          <h2>Valor total: R$: {total.toFixed(2)}</h2>
        </TitleCartStyled>
        <UlStyled>
          <h2>Itens</h2>
          {cart.length > 0 ? (
            cart.map((cart, index) => (
              <li key={index}>
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
                        <span>Quantidade:</span> {cart.amount}
                      </p>
                      <p>
                        <span>Preço:</span> R${' '}
                        {(Number(cart.price) * cart.amount).toFixed(2)}
                      </p>
                    </DetailStyled>
                  </DescriptionStyled>
                  <RemoveStyled
                    onClick={() => removeItemCart(cart.id, cart.shoeSize)}
                  >
                    <FiTrash2 />
                    Remover
                  </RemoveStyled>
                </ContentStyled>
              </li>
            ))
          ) : (
            <NoCartItems>
              <p>Nenhum item encontrado!</p>
              <Link to="/shoes">Comprar agora</Link>
            </NoCartItems>
          )}
        </UlStyled>
      </CartStyled>
    </Container>
  )
}

export default Cart
