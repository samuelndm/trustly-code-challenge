import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from 'assets/styles'
import Notifications from 'react-notifications-component'
import Providers from 'contexts/Providers'
import Routes from 'routes/routes'
import * as C from 'components'

const App = () => {
  return (
    <HashRouter basename="/">
      <ThemeProvider theme={themes.mainTheme}>
        <GlobalStyles />

        <Providers>
          <Notifications />

          <C.Navbar />
          <Routes />
        </Providers>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
