/* eslint-disable import/no-absolute-path */
import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md' // MdOutlineFavorite

import Sapatilha from '/Images/Sapatilha.png'

import {
  CardStyled,
  FavoriteStyled,
  ImageStyled,
  DescriptionStyled,
  ButtonStyled,
  SoldOutStyled,
  NoSoldOut,
} from './styles'

interface IProductCard {
  soldOut: boolean
}

const ProductCard = ({ soldOut }: IProductCard) => {
  return (
    <CardStyled>
      {soldOut ? (
        <SoldOutStyled>PRODUTO ESGOTADO</SoldOutStyled>
      ) : (
        <NoSoldOut />
      )}
      <FavoriteStyled soldOut={soldOut}>
        <MdFavoriteBorder />
      </FavoriteStyled>
      <ImageStyled>
        <img src={Sapatilha} alt="sapatilha apenas" />
      </ImageStyled>
      <DescriptionStyled>
        <p>SCARPIN VIZZANO VERDE SALTO ALTO</p>
        <span>R$ 149,99</span>
        <small>OU 9X R$ 16,66</small>
      </DescriptionStyled>
      <ButtonStyled>COMPRAR</ButtonStyled>
    </CardStyled>
  )
}

export default ProductCard
