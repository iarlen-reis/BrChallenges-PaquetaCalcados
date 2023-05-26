/* eslint-disable import/no-absolute-path */
import React from 'react'
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
import Sapatilha from '/Images/Sapatilha.png'

import { MdFavoriteBorder } from 'react-icons/md' // MdOutlineFavorite

import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'

import { useFetchShoes } from '../../hooks/useFetchShoes'

const Shoe = () => {
  const { shoes } = useFetchShoes()

  const fourShoes = shoes?.slice(0, 4)
  return (
    <Container>
      <ShoeStyled>
        <ShoeNavegation>
          <Link to="/">Paquetá</Link> <small>{'>'}</small> <span>Scarpin</span>
        </ShoeNavegation>
        <ProductDetails>
          <ImageStyled>
            <img src={Sapatilha} alt="" />
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
              <h1>SCARPIN VIZZANO VERDE SALTO ALTO</h1>
              <small>Código do produto: 365087-2001152093</small>
            </TitleStyled>
            <PriceStyled>
              <div>
                <p>R$ 189,99</p>
                <span>21% DE DESCONTO</span>
              </div>
              <div>
                <span>R$ 149,99</span>
                <small>ou 9x R$ 16,66</small>
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
          <p>
            O sapato SCARPIN VIZZANO VERDE SALTO ALTO é um calçado elegante e
            sofisticado que combina com diversos looks, desde os mais formais
            até os mais descontraídos. Ele apresenta um salto alto que
            proporciona mais elegância e postura, além de ser confortável para
            usar durante todo o dia. Seu design em verde acrescenta um toque de
            cor e modernidade ao visual, e seu acabamento em verniz confere um
            brilho discreto e charmoso. O SCARPIN VIZZANO VERDE SALTO ALTO é um
            item indispensável para quem busca um calçado versátil e estiloso.
          </p>
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
    </Container>
  )
}

export default Shoe
