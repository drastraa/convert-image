import {
  Container,
  Paper,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./style/style.scss";
import Main from "./components/Main";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const THEME = createTheme({
    palette: { mode: prefersDarkMode ? "dark" : "light" },
  });

  return (
    <ThemeProvider theme={THEME}>
      <Paper id="main-container" square>
        <header id="main-header">
          <Container>
            <Typography variant="h4" className="logo">
              Convert Image
            </Typography>
          </Container>
        </header>
        <Container>
          <Main />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
