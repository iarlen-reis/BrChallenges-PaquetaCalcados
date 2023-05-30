import React from 'react'

import { AiOutlineArrowUp } from 'react-icons/ai'

import { BackToTopStyled } from './styles'

const BackToTop = () => {
  const randleToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <BackToTopStyled onClick={randleToTop}>
      <AiOutlineArrowUp />
    </BackToTopStyled>
  )
}

export default BackToTop
