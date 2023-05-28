import React from 'react'

import {
  FemaleSectionStyled,
  FemaleImage,
  DescriptionImage,
  DescriptionSection,
} from './styles'
import { Container } from '../../styles/Global'

import { Fade } from 'react-awesome-reveal'

const FemaleSection = () => {
  return (
    <Fade direction="up" triggerOnce={true} delay={200}>
      <Container>
        <FemaleSectionStyled>
          <FemaleImage>
            <DescriptionImage>
              <span>CALÇADOS</span>
              <span>FEMININOS</span>
            </DescriptionImage>
          </FemaleImage>
          <DescriptionSection>
            <p>
              Escolher o seu sapato favorito entre nossa{' '}
              <span>variedade de modelos e cores</span> não será uma tarefa
              fácil, mas o que uma mulher não consegue fazer?
            </p>
            <button>CONFERIR</button>
          </DescriptionSection>
        </FemaleSectionStyled>
      </Container>
    </Fade>
  )
}

export default FemaleSection
