import { ThemeProvider, createTheme } from "@mui/material"
import App from "./App/App"
const theme = createTheme({
    palette:{
        mode:'light'
    },
    typography:{
      body1:{
        fontSize:'14px',
        fontFamily:'Roboto'
      }, 
      body2:{
        fontSize:'12px',
        fontFamily:'Roboto'

      }
    }
})

import '../utils/@fontface'
const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  )
}

export default AppContainer