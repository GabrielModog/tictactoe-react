import getWinner from "../../utils/getWinner";

describe("Good case to get a winner", () => {
	const firstPatternOwins = ["X", null, "O", null, "O", null, "O", "X", "X"];
	const secondPatternXwins = ["X", null, null, "X", "O", null, "X", "O", null];

	test("Should return 'O' winner in this first pattern", () => {
		expect(getWinner(firstPatternOwins)).toBe("O");
	});

	test("Should return 'X' winner in this second pattern", () => {
		expect(getWinner(secondPatternXwins)).toBe("X");
	});
});

describe("Bad case to get a winner", () => {
	const firstToNotWin = ["X", null, "O", null, "O", null, null, "X", "X"];

	test("Should return empty when get a winner in this first pattern", () => {
		expect(getWinner(firstToNotWin)).toBe("");
	});
});
