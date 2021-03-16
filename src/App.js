import Navbar from 'layouts/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import theme from 'theme/customTheme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Card raised>
        <CardHeader title="Vincent" />
        <CardContent>
          Hi
       </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default App;
