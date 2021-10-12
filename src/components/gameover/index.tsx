import React from "react";
import OCheckerIcon from "../../assets/o-checker";
import XCheckerIcon from "../../assets/x-chercker";
import Button from "../shared/button";
import { Container, Title, WinnerContainer } from "./styles";

export interface GameOverProps {
	winner: any;
}

export default function GameOver({ winner }: GameOverProps) {
	return (
		<Container>
			<WinnerContainer>
				{winner === "X" ? <XCheckerIcon /> : null}
				{winner === "O" ? <OCheckerIcon /> : null}
				<Title>Wins</Title>
			</WinnerContainer>
			<Button>Play Again</Button>
		</Container>
	);
}
