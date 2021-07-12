import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from 'assets/styles/themes'
import GlobalStyles from 'assets/styles/globalStyles'

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
