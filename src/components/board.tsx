import { ICheckers } from "./checker";

export interface IBoard {
	status: string | boolean | null;
	checkers: Array<ICheckers>;
	whenClick: (currentIndex: number) => void;
}

export default function Board() {}
