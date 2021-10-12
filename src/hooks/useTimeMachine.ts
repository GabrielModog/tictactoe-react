import { useReducer } from "react";

type TimeMachineActions =
	| { type: "ADD_TO_BOARD"; payload: Array<any> }
	| { type: "RESET" }
	| { type: "UNDO" }
	| { type: "REDO" };

export default function useTimeMachine(initialState: any) {
	const defaultState: any = {
		past: [],
		present: initialState,
		future: [],
	};

	function reducer(state = defaultState, action: TimeMachineActions) {
		switch (action.type) {
			case "ADD_TO_BOARD":
				return {
					past: [state.present, ...state.past],
					present: action.payload,
					future: [],
				};
			case "RESET":
				return {
					past: [],
					present: initialState,
					future: [],
				};
			case "UNDO": {
				const [currentPresent, ...newPast] = state.past;

				return {
					past: newPast,
					present: currentPresent,
					future: [state.present, ...state.future],
				};
			}
			case "REDO": {
				const [currentPresent, ...newFuture] = state.future;

				return {
					past: [state.present, ...state.past],
					present: currentPresent,
					future: newFuture,
				};
			}
			default:
				return state;
		}
	}

	const [history, sendTo] = useReducer(reducer, defaultState);

	const hasPast = !!history.past.length;
	const hasFuture = !!history.future.length;

	return [history, sendTo, hasPast, hasFuture];
}
