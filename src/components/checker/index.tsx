import React from "react";

import { Container, Item } from "./styles";

export interface CheckersProps {
	identifier: string;
	onClick: any;
	status?: boolean | string | null;
	value: any;
}

export default function Checker({
	value = "Item",
	status,
	onClick,
}: CheckersProps) {
	return (
		<Container type="button" onClick={onClick}>
			<Item>{value}</Item>
		</Container>
	);
}
