import { ThemeProvider } from "styled-components";

import useTheme from "./hooks/useTheme";
import { GlobalStyles } from "./utils/globalStyles";
import { darkTheme, lightTheme } from "./utils/theme";

import Game from "./components/game";
import { GameProvider } from "./context/game-context";
import ThemeToggleButton from "./components/shared/theme-button";

function App() {
	const [theme] = useTheme();

	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<GameProvider>
				<GlobalStyles />
				<Game />
			</GameProvider>
		</ThemeProvider>
	);
}

export default App;
