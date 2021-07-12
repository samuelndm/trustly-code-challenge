import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from 'assets/styles'

const App = () => {
  return (
    <ThemeProvider theme={themes.mainTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
