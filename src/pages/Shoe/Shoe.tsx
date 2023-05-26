/* eslint-disable import/no-absolute-path */
import React, { useEffect } from 'react'
import { Container } from '../../styles/Global'

import {
  ShoeStyled,
  ShoeNavegation,
  ProductDetails,
  ImageStyled,
  DescriptionStyled,
  FavoriteStyled,
  TitleStyled,
  PriceStyled,
  ShoeSizeStyled,
  ButtonStyled,
  ProductAboutStyled,
  MoreShoeStyled,
} from './styles'

import Pinterest from '/Images/Footer/Pinterest.png'

import { MdFavoriteBorder } from 'react-icons/md' // MdOutlineFavorite

import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'

import { useFetchShoes } from '../../hooks/useFetchShoes'
import { useFetchShoe } from '../../hooks/useFetchShoe'
import {
  formartePrice,
  formateDiscount,
  formateWithDiscount,
  paceleWithDiscount,
} from '../../utils/formatePrice'

const Shoe = () => {
  const { shoes } = useFetchShoes()
  const { shoe, getShoe } = useFetchShoe()
  const fourShoes = shoes?.slice(0, 4)

  const { id } = useParams()

  window.scrollTo(0, 0)

  useEffect(() => {
    if (!id) return
    getShoe(id!)
  }, [id])

  return (
    <Container>
      {shoe && (
        <ShoeStyled>
          <ShoeNavegation>
            <Link to="/">Paquetá</Link> <small>{'>'}</small>
            <span>{shoe.name.split(' ')[0]}</span>
          </ShoeNavegation>
          <ProductDetails>
            <ImageStyled>
              <img src={shoe.image} alt={shoe?.name} />
              <div>
                <p>Compartilhe</p>
                <ul>
                  <li>
                    <FiInstagram />
                  </li>
                  <li>
                    <FiFacebook />
                  </li>
                  <li>
                    <FiTwitter />
                  </li>
                  <li>
                    <FiYoutube />
                  </li>
                  <li>
                    <img src={Pinterest} alt="logo da pinterest" />
                  </li>
                </ul>
              </div>
            </ImageStyled>
            <DescriptionStyled>
              <FavoriteStyled>
                <MdFavoriteBorder />
              </FavoriteStyled>
              <TitleStyled>
                <h1>{shoe?.name}</h1>
                <small>Código do produto: 365087-2001152093</small>
              </TitleStyled>
              <PriceStyled>
                <div>
                  <p>R$ {formartePrice(shoe.price.value)}</p>
                  {shoe.price.discount && (
                    <span>
                      {formateDiscount(shoe.price.discount)}% DE DESCONTO
                    </span>
                  )}
                </div>
                <div>
                  <span>
                    R${' '}
                    {formateWithDiscount(shoe.price.discount, shoe.price.value)}
                  </span>
                  <small>
                    ou 9x R${' '}
                    {paceleWithDiscount(shoe.price.discount, shoe.price.value)}
                  </small>
                </div>
              </PriceStyled>
              <ShoeSizeStyled>
                <p>Escolha a numeração:</p>
                <ul>
                  <li>34</li>
                  <li>35</li>
                  <li>36</li>
                  <li>37</li>
                  <li>38</li>
                  <li>39</li>
                  <li>40</li>
                </ul>
                <button>Guia de tamanhos</button>
              </ShoeSizeStyled>
              <ButtonStyled>COMPRAR</ButtonStyled>
            </DescriptionStyled>
          </ProductDetails>
          <ProductAboutStyled>
            <h2>DESCRIÇÃO DO PRODUTO</h2>
            <p>{shoe.description}</p>
          </ProductAboutStyled>
          <MoreShoeStyled>
            <h2>TALVEZ POSSA LHE INTERESSAR</h2>
            <ul>
              {fourShoes &&
                fourShoes.map((shoe) => (
                  <ProductCard shoes={shoe} key={shoe.id} />
                ))}
            </ul>
          </MoreShoeStyled>
        </ShoeStyled>
      )}
    </Container>
  )
}

export default Shoe
