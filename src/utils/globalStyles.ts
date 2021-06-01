import { createGlobalStyle } from "styled-components";
import { lightTheme } from "./theme";

export type GlobalStyleProps = {
	theme: typeof lightTheme;
};

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Arial, Helvetica, sans-serif, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
				display: flex;
				height: 100vh;
				justify-content: center;
				align-items: center;
    }
`;
