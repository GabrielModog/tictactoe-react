import styled from "styled-components";

export const Container = styled.button`
	max-width: 128px;
	max-height: 128px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.4rem;
	box-shadow: 0px 2px 14px -2px rgba(92, 158, 237, 0.4);
	cursor: pointer;
	border: none;
	background-color: white;
	color: ${(props) => props.theme.text};
`;

export const Item = styled.div``;
