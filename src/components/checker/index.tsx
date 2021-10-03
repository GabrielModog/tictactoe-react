import React from "react";

import { Container, Item } from "./style";

export interface ICheckers {
	onClick: void;
	status: boolean | string | null;
	value: any;
}

export default function Checker({ value, status, onClick }: ICheckers) {
	return (
		<Container>
			<Item>{value}</Item>
		</Container>
	);
}
