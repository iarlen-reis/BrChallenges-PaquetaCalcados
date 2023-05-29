import React from 'react'
import { Container } from '../../styles/Global'
import { Link } from 'react-router-dom'

import {
  FavoriteStyled,
  FavoriteNavegation,
  TitleStyled,
  UlStyled,
  DescriptionStyled,
  ButtonRemoveStyled,
} from './styles'

import { FiTrash2 } from 'react-icons/fi'

import { useFavoriteContext } from '../../context/FavoriteContext'

const Favorites = () => {
  const { favorites } = useFavoriteContext()

  return (
    <Container>
      <FavoriteStyled>
        <FavoriteNavegation>
          <Link to="/">Paquetá</Link> {'>'} <span>Favoritos</span>
        </FavoriteNavegation>
        <TitleStyled>Seus favoritos</TitleStyled>
        <UlStyled>
          <h2>Favoritos</h2>
          {favorites.length > 0
            ? favorites.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <DescriptionStyled>
                    <div>
                      <h2>{item.name}</h2>
                      <p>codigo do produto</p>
                    </div>
                    <p>
                      <span>Preço:</span> R$ {item.price}
                    </p>
                  </DescriptionStyled>
                  <ButtonRemoveStyled>
                    <FiTrash2 />
                    Remover
                  </ButtonRemoveStyled>
                </li>
              ))
            : ''}
        </UlStyled>
      </FavoriteStyled>
    </Container>
  )
}

export default Favorites
