import { Router } from "./routes";
import { GlobalStyles } from "./styles/stylesGlobal";
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from 'styled-components';

import { dark } from './styles/theme/dark';
import { light } from './styles/theme/light';
import { useTheme } from "./hooks/useTheme";
import { AuthenticationProvider } from "./hooks/useAutenticacao";

export function App() {
  const { themeIsActive } = useTheme();
  return (
    <ThemeProvider theme={themeIsActive ? dark : light}>
      <AuthenticationProvider>
        <Router/>
        <GlobalStyles/>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{duration: '400'}}
        />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
