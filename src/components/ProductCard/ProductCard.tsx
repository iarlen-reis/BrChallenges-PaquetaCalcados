/* eslint-disable import/no-absolute-path */
import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md' // MdOutlineFavorite

import {
  CardStyled,
  FavoriteStyled,
  ImageStyled,
  DescriptionStyled,
  ButtonStyled,
  SoldOutStyled,
  NoSoldOut,
} from './styles'

interface IShoes {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
}

interface IProductCard {
  shoes: IShoes
}

const ProductCard = ({ shoes }: IProductCard) => {
  return (
    <CardStyled>
      {shoes.soldout ? (
        <SoldOutStyled>PRODUTO ESGOTADO</SoldOutStyled>
      ) : (
        <NoSoldOut />
      )}
      <FavoriteStyled soldOut={shoes.soldout}>
        <MdFavoriteBorder />
      </FavoriteStyled>
      <ImageStyled>
        <img src={shoes.image} alt={`${shoes.name}`} />
      </ImageStyled>
      <DescriptionStyled>
        <p>{shoes.name}</p>
        <span>{shoes.price.value}</span>
        <small>OU 9X R$ 16,66</small>
      </DescriptionStyled>
      <ButtonStyled soldOut={shoes.soldout}>
        {shoes.soldout ? 'ME AVISE QUANDO CHEGAR' : 'COMPRAR'}
      </ButtonStyled>
    </CardStyled>
  )
}

export default ProductCard
