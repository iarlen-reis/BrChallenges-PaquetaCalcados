import {
  BannerContainer,
  ImageBanner,
  InformationContainer,
  DescriptionStyled,
  PriceStyled,
  ButtonStyled,
} from './styles'

const BannerHero = () => {
  return (
    <ImageBanner>
      <BannerContainer>
        <InformationContainer>
          <DescriptionStyled>
            <h1>Tênis Casual</h1>
            <span>Masculino</span>
          </DescriptionStyled>
          <PriceStyled>
            <p>A partir de </p>
            <span>R$ 79,99</span>
          </PriceStyled>
          <ButtonStyled>APROVEITE</ButtonStyled>
        </InformationContainer>
      </BannerContainer>
    </ImageBanner>
  )
}

export default BannerHero
