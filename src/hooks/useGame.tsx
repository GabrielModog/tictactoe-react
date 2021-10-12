import React, { useContext } from "react";
import { GameContext } from "../context/game-context";

export default function useGame() {
	return useContext(GameContext);
}
