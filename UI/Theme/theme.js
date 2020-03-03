import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#82DEE6',
    },
    secondary: {
      main: '#e68b82',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
})

export default theme
