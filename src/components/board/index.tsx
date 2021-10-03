import styled from "styled-components";
import Checker from "../checker";

export interface BoardProps {
	status?: string | boolean | null;
	checkers: Array<any>;
	whenClick: (currentIndex: number) => void;
}

const Container = styled.div`
	width: 512px;
	height: 512px;
	background: ${(props) => props.theme.background ?? "transparent"};
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	padding: 2rem;
`;

export default function Board({
	checkers = [],
	whenClick,
	status,
}: BoardProps) {
	return (
		<Container>
			{checkers.map((checker: any, index: number) => (
				<Checker
					key={index}
					identifier={index.toString()}
					value={checker}
					status={status}
					onClick={() => whenClick(index)}
				/>
			))}
		</Container>
	);
}
