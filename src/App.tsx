import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from 'assets/styles'
import Providers from 'contexts/Providers'
import Routes from 'routes/routes'
import * as C from 'components'

const App = () => {
  return (
    <HashRouter basename="/">
      <ThemeProvider theme={themes.mainTheme}>
        <GlobalStyles />

        <Providers>
          <C.Navbar />
          <Routes />
        </Providers>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
