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
  NoFavorite,
} from './styles'

import { FiTrash2 } from 'react-icons/fi'

import { Slide } from 'react-awesome-reveal'

import { useFavoriteContext } from '../../context/FavoriteContext'

const Favorites = () => {
  const { favorites, removeToFavorite } = useFavoriteContext()

  const randleRemoveToFavorite = (id: string) => {
    removeToFavorite(id)
  }

  return (
    <Container>
      <FavoriteStyled>
        <FavoriteNavegation>
          <Link to="/">Paquetá</Link> {'>'} <span>Favoritos</span>
        </FavoriteNavegation>
        <TitleStyled>Seus favoritos</TitleStyled>
        <UlStyled>
          <h2>Favoritos</h2>
          {favorites.length > 0 ? (
            favorites.map((item) => (
              <Slide key={item.id} direction="right" triggerOnce={true}>
                <li>
                  <img src={item.image} alt={item.name} />
                  <DescriptionStyled>
                    <div>
                      <h2>{item.name}</h2>
                      <p>Código do produto: {item.productCode}</p>
                    </div>
                    <p>
                      <span>Preço:</span> R$ {item.price}
                    </p>
                  </DescriptionStyled>
                  <ButtonRemoveStyled
                    onClick={() => randleRemoveToFavorite(item.id)}
                  >
                    <FiTrash2 />
                    Remover
                  </ButtonRemoveStyled>
                </li>
              </Slide>
            ))
          ) : (
            <NoFavorite>
              <p>Nenhum item encontrado!</p>
              <Link to="/shoes">Comprar itens</Link>
            </NoFavorite>
          )}
        </UlStyled>
      </FavoriteStyled>
    </Container>
  )
}

export default Favorites
