/* eslint-disable import/no-absolute-path */
import React from 'react'
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md' // MdOutlineFavorite

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

import { useFavoriteContext } from '../../context/FavoriteContext'

import { v4 as uuidv4 } from 'uuid'

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

  const { addToFavorite, favorites } = useFavoriteContext()

  const randleSeeProdcut = (id: string) => {
    navigate(`/shoe/${id}`)
  }

  const randleAddToFavorite = () => {
    const favorite = {
      id: shoes.id,
      name: shoes.name,
      price: String(shoes.price.value.toFixed(2)),
      image: shoes.image,
      productCode: `${uuidv4().split('-')[0]}-${uuidv4().split('-')[1]}`,
    }

    addToFavorite(favorite)
  }

  const favoriteExists = favorites.find((item) => item.id === shoes.id)

  return (
    <CardStyled>
      {shoes.soldout ? (
        <SoldOutStyled>PRODUTO ESGOTADO</SoldOutStyled>
      ) : (
        <NoSoldOut />
      )}
      <FavoriteStyled soldOut={shoes.soldout}>
        {favoriteExists ? (
          <MdOutlineFavorite onClick={randleAddToFavorite} />
        ) : (
          <MdFavoriteBorder onClick={randleAddToFavorite} />
        )}
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
        {shoes.soldout ? 'ME AVISE QUANDO CHEGAR' : 'COMPRAR'}
      </ButtonStyled>
    </CardStyled>
  )
}

export default ProductCard
