import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#296291',
    },
    secondary: {
      main: '#f27639',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#fdfdfe',
      hint: '#7e8890',
    },
  },
  overrides: {
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        color: '#296291',
        '&$focused': {
          // increase the specificity for the pseudo class
          color: '#f27639',
        },
      },
    },
  },
})

export default theme
