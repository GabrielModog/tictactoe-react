import styled from "styled-components";

const Button = styled.button`
	padding: 0 1.5rem;
	height: 45px;
	font-size: 24px;
	color: ${(props) => props.theme.text};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	background: ${(props) => props.theme.background};
	box-shadow: 0px 2px 14px -2px rgba(109, 109, 109, 0.14);
	font-family: "Roboto", sans-serif;
	font-weight: 400;
`;

export default Button;
