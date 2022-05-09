import { Router } from "./routes";
import { GlobalStyles } from "./styles/stylesGlobal";

import { ThemeProvider } from 'styled-components';

import { dark } from './styles/theme/dark';
import { light } from './styles/theme/light';
import { useTheme } from "./hooks/useTheme";

export function App() {
  const { themeIsActive } = useTheme();
  return (
    <ThemeProvider theme={themeIsActive ? dark : light}>
      <Router/>
      <GlobalStyles/>
    </ThemeProvider>
  );
}
