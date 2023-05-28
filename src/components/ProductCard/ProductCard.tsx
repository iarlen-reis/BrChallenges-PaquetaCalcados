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
import { formartePrice } from '../../utils/formatePrice'

import { Link, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const randleSeeProdcut = (id: string) => {
    navigate(`/shoe/${id}`)
  }

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
        <Link to={`/shoe/${shoes.id}`}>{shoes.name}</Link>
        <span>R$ {formartePrice(shoes.price.value)}</span>
        <small>OU 9X R$ {formartePrice(shoes.price.value / 9)}</small>
      </DescriptionStyled>
      <ButtonStyled
        soldOut={shoes.soldout}
        onClick={() => randleSeeProdcut(shoes.id)}
      >
        {shoes.soldout ? 'ME AVISE QUANDO CHEGAR' : 'DETALHES'}
      </ButtonStyled>
    </CardStyled>
  )
}

export default ProductCard
