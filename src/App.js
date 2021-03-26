
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme/customTheme';
import CustomRoutes from 'routes/CustomRoutes';
import { Provider } from 'react-redux';
import { StrictMode } from 'react'
const App = () => {
  return (
    <StrictMode>
      <Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* ROUTES */}
          <CustomRoutes />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}

export default App;
