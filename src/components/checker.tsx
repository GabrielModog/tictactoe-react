export interface ICheckers {
	onClick: void;
	status: boolean | string | null;
	value: any;
}

export default function Checker({ value, status, onClick }: ICheckers) {}
