import { ThemeProvider } from "styled-components";
import Board from "./components/board";
import Button from "./components/shared/button";

import useTheme from "./hooks/useTheme";
import { GlobalStyles } from "./utils/globalStyles";
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
	const [theme, themeToggler] = useTheme();

	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className="App">
				<Button type="button" onClick={() => themeToggler()}>
					{theme === "light" ? "Light Mode" : "Dark Mode"}
				</Button>
				<Board />
			</div>
		</ThemeProvider>
	);
}

export default App;
