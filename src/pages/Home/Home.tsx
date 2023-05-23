import React from 'react'
import Header from '../../components/Header/Header'
import BannerHero from '../../components/BannerHero/BannerHero'
import Benefits from '../../components/Benefits/Benefits'
import FemaleSection from '../../components/FemaleSection/FemaleSection'
import MaleSection from '../../components/MaleSection/MaleSection'

const Home = () => {
  return (
    <>
      <Header />
      <BannerHero />
      <Benefits />
      <FemaleSection />
      <MaleSection />
    </>
  )
}

export default Home
