import styled from "styled-components";

const Button = styled.button`
	padding: 0 1.5rem;
	height: 45px;
	font-size: 18px;
	color: ${(props) => props.theme.fourth};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	background: white;
	box-shadow: 0px 2px 14px -2px rgba(109, 109, 109, 0.14);
	font-family: "Righteous", sans-serif;
	font-weight: 400;
	transition: 450ms;

	&:hover {
		color: #f6ce8f;
	}

	&:disabled {
		color: #9d9791;
		cursor: not-allowed;
	}

	&:focus,
	&:active,
	&:target {
		outline: 2px solid ${(props) => props.theme.fourth};
	}
`;

export default Button;
