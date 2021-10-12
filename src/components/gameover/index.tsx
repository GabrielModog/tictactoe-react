import React from "react";
import OCheckerIcon from "../../assets/o-checker";
import XCheckerIcon from "../../assets/x-chercker";
import useGame from "../../hooks/useGame";
import Button from "../shared/button";
import { Container, Title, WinnerContainer } from "./styles";

export interface GameOverProps {
	winner: any;
}

export default function GameOver({ winner }: GameOverProps) {
	const { resetGame } = useGame();
	return (
		<Container>
			<WinnerContainer>
				{winner === "X" ? <XCheckerIcon /> : null}
				{winner === "O" ? <OCheckerIcon /> : null}
				<Title>Wins</Title>
			</WinnerContainer>
			<Button type="button" onClick={resetGame}>
				Play Again
			</Button>
		</Container>
	);
}
