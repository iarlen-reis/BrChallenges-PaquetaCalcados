import React from 'react'

import {
  MaleSectionStyled,
  DescriptionImage,
  DescriptionSection,
  MaleImage,
} from './styles'

import { Container } from '../../styles/Global'

import { Fade } from 'react-awesome-reveal'

const MaleSection = () => {
  return (
    <Fade direction="up" triggerOnce={true} delay={200}>
      <Container>
        <MaleSectionStyled>
          <DescriptionSection>
            <p>
              Tenha em seu guarda roupa sapatos de qualidade e confortáveis,
              para o dia a dia, trabalho e até mesmo para praticar esportes!
            </p>
            <button>CONFERIR</button>
          </DescriptionSection>
          <MaleImage>
            <DescriptionImage>
              <span>CALÇADOS</span>
              <span>MASCULINO</span>
            </DescriptionImage>
          </MaleImage>
        </MaleSectionStyled>
      </Container>
    </Fade>
  )
}

export default MaleSection
