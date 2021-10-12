/* eslint-disable no-console */
import React, { useState } from "react";
import OCheckerIcon from "../../assets/o-checker";
import XCheckerIcon from "../../assets/x-chercker";
import useGame from "../../hooks/useGame";

import { Container, Item } from "./styles";

export interface CheckersProps {
	identifier: string;
	onClick: any;
	status?: boolean | string | null;
	value: any;
}

export default function Checker({
	value = "Item",
	status,
	onClick,
}: CheckersProps) {
	const [character, setCharacter] = useState(null);
	const { whoIsNext } = useGame();
	function handleClick() {
		setCharacter(whoIsNext);
		onClick();
	}

	return (
		<Container type="button" onClick={handleClick} showIsNext={character}>
			{value === "X" ? (
				<Item>
					<XCheckerIcon />
				</Item>
			) : null}

			{value === "O" ? (
				<Item>
					<OCheckerIcon />
				</Item>
			) : null}
		</Container>
	);
}
