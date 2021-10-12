import React from "react";

import Board from "../board";
import useGame from "../../hooks/useGame";
import Button from "../shared/button";
import GameOver from "../gameover";

import { ToolContainer } from "./styles";

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

	return (
		<React.Fragment>
			{winner ? <GameOver winner={winner} /> : null}
			<Board
				status={winner}
				checkers={board}
				whenClick={handleCheckerOnClick}
			/>
			<ToolContainer>
				<Button onClick={handleUndo} disabled={!hasPast}>
					Undo
				</Button>
				<Button onClick={handleRedo} disabled={!hasFuture}>
					Redo
				</Button>
			</ToolContainer>
		</React.Fragment>
	);
}
