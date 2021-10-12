import React from "react";
import useTheme from "../../hooks/useTheme";
import Button from "./button";

export default function ThemeToggleButton() {
	const [theme, themeToggler] = useTheme();
	return (
		<Button type="button" onClick={() => themeToggler()}>
			{theme === "light" ? "Light Mode" : "Dark Mode"}
		</Button>
	);
}
