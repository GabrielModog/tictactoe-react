import React, { useMemo, useState } from "react";

import Board from "../board";
import getWinner from "../../utils/getWinner";

export default function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [whoIsNext, setWhoIsNext] = useState<boolean>(true);

	const winner = useMemo(() => getWinner(board), [board]);

	function handleCheckerOnClick(currentIndex: number) {
		const copyOfBoard = [...board];

		if (winner || copyOfBoard[currentIndex]) return;

		copyOfBoard[currentIndex] = whoIsNext ? "X" : "O";
		setBoard(copyOfBoard);
		setWhoIsNext((isNext) => !isNext);
	}

	return (
		<Board status={winner} checkers={board} whenClick={handleCheckerOnClick} />
	);
}
