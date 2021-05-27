import getWinner from "../../utils/getWinner";

describe("Good case to get a winner", () => {
	const patternToOWins = ["X", null, "O", null, "O", null, "O", "X", "X"];

	test("Should return 'O' like winner in this first pattern", () => {
		expect(getWinner(patternToOWins)).toBe("O");
	});
});
