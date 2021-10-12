import React, { useMemo, useState } from "react";

import getWinner from "../utils/getWinner";

export const GameContext = React.createContext<any | null>(null);

export function GameProvider({ children }: any) {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [whoIsNext, setWhoIsNext] = useState<boolean>(true);
	const [configPlayers, setConfigPlayers] = useState<Array<React.ReactNode>>([
		"X",
		"O",
	]);

	const winner = useMemo(() => getWinner(board), [board]);

	function handleCheckerOnClick(currentIndex: number) {
		const copyOfBoard = [...board];

		if (winner || copyOfBoard[currentIndex]) return;

		copyOfBoard[currentIndex] = whoIsNext ? configPlayers[0] : configPlayers[1];
		setBoard(copyOfBoard);
		setWhoIsNext((isNext) => !isNext);
	}

	function resetGame() {
		setBoard(Array(9).fill(null));
		setWhoIsNext(true);
	}

	const settings: any = {
		board,
		whoIsNext,
		configPlayers,
		winner,
		handleCheckerOnClick,
		resetGame,
	};

	return (
		<GameContext.Provider value={settings}>{children}</GameContext.Provider>
	);
}
