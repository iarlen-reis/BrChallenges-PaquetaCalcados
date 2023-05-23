import React from 'react'
import Header from '../../components/Header/Header'
import BannerHero from '../../components/BannerHero/BannerHero'
import Benefits from '../../components/Benefits/Benefits'
import FemaleSection from '../../components/FemaleSection/FemaleSection'
import MaleSection from '../../components/MaleSection/MaleSection'
import Outlets from '../../components/Outlets/Outlets'

const Home = () => {
  return (
    <>
      <Header />
      <BannerHero />
      <Benefits />
      <FemaleSection />
      <MaleSection />
      <Outlets />
    </>
  )
}

export default Home
