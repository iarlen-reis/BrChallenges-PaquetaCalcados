import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home/Home'
import { Theme } from './styles/theme/theme'
import GlboalStyled from './styles/Global'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlboalStyled />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
