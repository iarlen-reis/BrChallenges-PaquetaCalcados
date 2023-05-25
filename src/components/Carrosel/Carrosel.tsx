import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CassoselStyled, CustomDots } from './styles'
import ProductCard from '../ProductCard/ProductCard'
import { useFetchShoes } from '../../hooks/useFetchShoes'
import styled from 'styled-components'

const CustomSlider = styled(Slider)`
  .slick-slide > div {
    margin: 1rem 0;
  }
`

const Carrosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,

    appendDots: (dots: any[]) => (
      <CustomDots>
        {dots &&
          dots.map((dot, index) => (
            <li key={index} className={dot.props.className}>
              &nbsp;
            </li>
          ))}
      </CustomDots>
    ),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const { shoes } = useFetchShoes()

  const onlyTheFirstEight = shoes?.slice(0, 8)
  return (
    <CassoselStyled>
      <CustomSlider {...settings}>
        {onlyTheFirstEight &&
          onlyTheFirstEight.map((shoe) => (
            <ProductCard shoes={shoe} key={shoe.id} />
          ))}
      </CustomSlider>
    </CassoselStyled>
  )
}

export default Carrosel
