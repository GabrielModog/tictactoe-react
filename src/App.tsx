import { ThemeProvider } from "styled-components";

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
				<button type="button" onClick={() => themeToggler()}>
					{theme === "light" ? "Light Mode" : "Dark Mode"}
				</button>
			</div>
		</ThemeProvider>
	);
}

export default App;