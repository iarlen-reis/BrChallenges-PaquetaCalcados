import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home/Home'
import { Theme } from './styles/theme/theme'
import GlboalStyled from './styles/Global'
import Shoes from './pages/Shoes/Shoes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SubFooter from './components/SubFooter/SubFooter'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlboalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Shoes />} />
        </Routes>
        <Footer />
        <SubFooter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
