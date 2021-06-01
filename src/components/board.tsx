import styled from "styled-components";
import { ICheckers } from "./checker";

export interface IBoard {
	status: string | boolean | null;
	checkers: Array<ICheckers>;
	whenClick: (currentIndex: number) => void;
}

const Container = styled.div`
	width: 512px;
	height: 512px;
	background: ${(props) => props.theme.background};
	box-shadow: 0px 2px 14px -2px rgba(109, 109, 109, 0.14);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
`;

export default function Board() {
	return <Container></Container>;
}
