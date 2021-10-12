import styled from "styled-components";

interface CheckerContainerStyle {
	showIsNext: any;
}

export const Container = styled.button<CheckerContainerStyle>`
	max-width: 128px;
	max-height: 128px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.4rem;
	box-shadow: ${(props: any) => {
		if (props?.showIsNext === null) {
			return "0px 2px 14px -2px rgba(109, 109, 109, 0.08);";
		}
		return props?.showIsNext
			? "0px 2px 14px -2px rgba(92, 158, 237, 0.4)"
			: "0px 2px 14px -2px rgba(232, 81, 71, 0.35);";
	}};
	cursor: pointer;
	border: none;
	background-color: white;
`;

export const Item = styled.div``;
