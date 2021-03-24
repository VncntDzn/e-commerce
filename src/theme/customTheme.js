import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '',
            main: '#FAFAFA',
            dark: ''
        },
        secondary: {
            light: '#ffe8b9',
            main: '#FCAF18',
            dark: '#eba417'
        },
        tertiary: {
            light: '#f1f1f1',
            main: '#4C4B4D',
            dark: '#5a5a5a'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,

        },
    },
});

export default theme;