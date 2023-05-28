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
import Shoe from './pages/Shoe/Shoe'
import Cart from './pages/Cart/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CartProvider>
          <GlboalStyled />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shoe/:id" element={<Shoe />} />
          </Routes>
          <Footer />
          <SubFooter />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
