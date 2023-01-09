import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './Home'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <Home />
    // <ThemeProvider theme={defaultTheme}>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    //   <GlobalStyle />
    // </ThemeProvider>
  )
}
