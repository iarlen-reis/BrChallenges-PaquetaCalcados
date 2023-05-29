/* eslint-disable import/no-absolute-path */
import React, { useEffect, useState } from 'react'
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
  ButtonSoldOutStyled,
  ProductAboutStyled,
  MoreShoeStyled,
  LiStyled,
} from './styles'

import Pinterest from '/Images/Footer/Pinterest.png'

import { MdFavoriteBorder } from 'react-icons/md' // MdOutlineFavorite

import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'

import { useFetchShoes } from '../../hooks/useFetchShoes'
import { useFetchShoe } from '../../hooks/useFetchShoe'
import { paceleWithDiscount } from '../../utils/formatePrice'
import GuildeShoes from '../../components/GuildeShoes/GuildeShoes'
import { useCartContext } from '../../context/CartContext'

import { toast } from 'react-toastify'

const Shoe = () => {
  const [shoeSize, setShoeSize] = useState<number>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { shoes } = useFetchShoes()
  const { shoe, getShoe } = useFetchShoe()
  const fourShoes = shoes?.slice(0, 4)

  const { addToCart } = useCartContext()

  const { id } = useParams()

  const randleSavePurchase = () => {
    if (!shoeSize) return toast.error('Selecione um tamanho por favor!')
    if (!shoe) return

    const purchase = {
      id: shoe.id,
      name: shoe.name,
      image: shoe.image,
      shoeSize,
      price: shoe.price.valueWithDiscount,
      amount: 1,
      productCode: shoe.productCode,
    }

    addToCart(purchase)
    toast.success('Produto adicionado ao carrinho com sucesso!')
  }

  useEffect(() => {
    if (!id) return
    window.scrollTo(0, 0)
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
                <small>Código do produto: {shoe.productCode}</small>
              </TitleStyled>
              <PriceStyled>
                <div>
                  {shoe.price.discount ? <p>R$ {shoe.price.value}</p> : ''}
                  {shoe.price.discount ? (
                    <span>{shoe.price.discount * 100}% DE DESCONTO</span>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <span>R$ {shoe.price.valueWithDiscount}</span>
                  <small>
                    ou 9x R$ {paceleWithDiscount(shoe.price.valueWithDiscount)}
                  </small>
                </div>
              </PriceStyled>
              <ShoeSizeStyled>
                <p>Escolha a numeração:</p>
                <ul>
                  <LiStyled selectedli={shoeSize === 0}>
                    34 <span></span>
                  </LiStyled>
                  <LiStyled
                    selectedli={shoeSize === 35}
                    onClick={() => setShoeSize(35)}
                  >
                    35
                  </LiStyled>
                  <LiStyled selectedli={shoeSize === 36}>
                    36 <span></span>
                  </LiStyled>
                  <LiStyled
                    selectedli={shoeSize === 37}
                    onClick={() => setShoeSize(37)}
                  >
                    37
                  </LiStyled>
                  <LiStyled
                    selectedli={shoeSize === 38}
                    onClick={() => setShoeSize(38)}
                  >
                    38
                  </LiStyled>
                  <LiStyled
                    selectedli={shoeSize === 39}
                    onClick={() => setShoeSize(39)}
                  >
                    39
                  </LiStyled>
                  <LiStyled
                    selectedli={shoeSize === 40}
                    onClick={() => setShoeSize(40)}
                  >
                    40
                  </LiStyled>
                </ul>
                <button onClick={() => setIsOpen(!isOpen)}>
                  Guia de tamanhos
                </button>
              </ShoeSizeStyled>
              {shoe.soldout ? (
                <ButtonSoldOutStyled>ESGOTADO</ButtonSoldOutStyled>
              ) : (
                <ButtonStyled onClick={randleSavePurchase}>
                  COMPRAR
                </ButtonStyled>
              )}
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
          <GuildeShoes isOpen={isOpen} setIsOpen={setIsOpen} />
        </ShoeStyled>
      )}
    </Container>
  )
}

export default Shoe
