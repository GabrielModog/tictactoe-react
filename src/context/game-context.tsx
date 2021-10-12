import React, { useMemo, useState } from "react";
import useTimeMachine from "../hooks/useTimeMachine";

import getWinner from "../utils/getWinner";

const INTITIAL_BOARD_STATE = Array(9).fill(null);

export const GameContext = React.createContext<any | null>(null);

export function GameProvider({ children }: any) {
	const [board, sendTo, hasPast, hasFuture] =
		useTimeMachine(INTITIAL_BOARD_STATE);
	const [whoIsNext, setWhoIsNext] = useState<boolean>(true);
	const [configPlayers, setConfigPlayers] = useState<Array<React.ReactNode>>([
		"X",
		"O",
	]);

	const winner = useMemo(() => getWinner(board.present), [board.present]);

	function handleCheckerOnClick(currentIndex: number) {
		const copyOfBoard = [...board.present];

		if (winner || copyOfBoard[currentIndex]) return;

		copyOfBoard[currentIndex] = whoIsNext ? configPlayers[0] : configPlayers[1];
		sendTo({
			type: "ADD_TO_BOARD",
			payload: copyOfBoard,
		});
		setWhoIsNext((isNext) => !isNext);
	}

	function handleUndo() {
		sendTo({
			type: "UNDO",
		});
	}

	function handleRedo() {
		sendTo({
			type: "REDO",
		});
	}

	function resetGame() {
		sendTo({ type: "RESET" });
		setWhoIsNext(true);
	}

	const settings: any = {
		hasPast,
		hasFuture,
		board: board.present,
		whoIsNext,
		configPlayers,
		winner,
		handleUndo,
		handleRedo,
		handleCheckerOnClick,
		resetGame,
	};

	return (
		<GameContext.Provider value={settings}>{children}</GameContext.Provider>
	);
}
