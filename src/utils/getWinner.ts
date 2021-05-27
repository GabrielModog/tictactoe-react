const goals: Array<Array<number>> = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	[0, 4, 8],
	[2, 4, 6],
];

export default function getWinner(squares: Array<any>): string {
	const winner = goals.reduce(
		(accum: any, curr: any, index, array: typeof goals) => {
			const [a, b, c] = array[index];

			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
				return accum + squares[a];

			return accum;
		},
		"",
	);

	return winner !== "" ? winner : "";
}
