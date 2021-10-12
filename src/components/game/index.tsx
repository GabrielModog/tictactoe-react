/* eslint-disable no-console */
import React, { useMemo, useState } from "react";

import Board from "../board";
import getWinner from "../../utils/getWinner";
import useGame from "../../hooks/useGame";
import Button from "../shared/button";
import GameOver from "../gameover";

export default function Game() {
	const {
		winner,
		board,
		hasPast,
		hasFuture,
		handleUndo,
		handleRedo,
		handleCheckerOnClick,
	} = useGame();

	if (winner) {
		return <GameOver winner={winner} />;
	}

	return (
		<React.Fragment>
			<Board
				status={winner}
				checkers={board}
				whenClick={handleCheckerOnClick}
			/>
			<Button onClick={handleUndo} disabled={!hasPast}>
				Undo
			</Button>
			<Button onClick={handleRedo} disabled={!hasFuture}>
				Redo
			</Button>
		</React.Fragment>
	);
}
