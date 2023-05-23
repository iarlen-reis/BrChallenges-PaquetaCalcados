import React from 'react'

import {
  MaleSectionStyled,
  DescriptionImage,
  DescriptionSection,
  MaleImage,
} from './styles'

import { Container } from '../../styles/Global'

const MaleSection = () => {
  return (
    <Container>
      <MaleSectionStyled>
        <DescriptionSection>
          <p>
            Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para
            o dia a dia, trabalho e até mesmo para praticar esportes!
          </p>
          <button>CONFERIR</button>
        </DescriptionSection>
        <MaleImage>
          <div></div>
          <DescriptionImage>
            <span>CALÇADOS</span>
            <span>MASCULINO</span>
          </DescriptionImage>
        </MaleImage>
      </MaleSectionStyled>
    </Container>
  )
}

export default MaleSection
