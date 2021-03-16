import Navbar from 'layouts/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme/customTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
