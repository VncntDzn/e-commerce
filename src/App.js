
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme/customTheme';
import CustomRoutes from 'routes/CustomRoutes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ROUTES */}
      <CustomRoutes />
    </ThemeProvider>
  );
}

export default App;
