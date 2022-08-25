import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { AuthProvider } from './hook/useAuth'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
