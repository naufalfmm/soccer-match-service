import { FC } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import GlobalStyle from './components/GlobalStyle';
import View from './pages/versus/View';

const App: FC = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className='App'>
          <View />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
