import {
  BannerContainer,
  ImageBanner,
  InformationContainer,
  DescriptionStyled,
  PriceStyled,
  ButtonStyled,
} from './styles'

import { useNavigate } from 'react-router-dom'

import { Slide } from 'react-awesome-reveal'

const BannerHero = () => {
  const navigate = useNavigate()

  const randleToShoes = () => {
    navigate('/shoes')
  }

  return (
    <ImageBanner>
      <BannerContainer id="bannerHero">
        <InformationContainer>
          <DescriptionStyled>
            <Slide direction="right" delay={100}>
              <h1>Tênis Casual</h1>
              <span>Masculino</span>
            </Slide>
          </DescriptionStyled>
          <PriceStyled>
            <Slide direction="right">
              <p>A partir de </p>
              <span>R$ 79,99</span>
            </Slide>
          </PriceStyled>
          <Slide direction="right" style={{ alignSelf: 'flex-start' }}>
            <ButtonStyled onClick={randleToShoes}>APROVEITE</ButtonStyled>
          </Slide>
        </InformationContainer>
      </BannerContainer>
    </ImageBanner>
  )
}

export default BannerHero
