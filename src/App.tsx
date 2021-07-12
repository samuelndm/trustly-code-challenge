import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from 'assets/styles'
import Routes from 'routes/routes'

const App = () => {
  return (
    <ThemeProvider theme={themes.mainTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
