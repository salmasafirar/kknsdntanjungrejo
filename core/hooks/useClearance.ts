import { useEffect, useRef, useState } from 'react';

type ReturnTuple = [string, React.RefObject<HTMLElement>, React.RefObject<HTMLElement>];

const useClearance = (): ReturnTuple => {
	const [clearance, setClearance] = useState<string>('calc(100vh - 0px)');

	const upper = useRef<HTMLElement>(null);
	const lower = useRef<HTMLElement>(null);

	useEffect(() => {
		if (upper.current && lower.current) {
			const offset = upper.current.offsetHeight + lower.current.offsetHeight;
			setClearance(`calc(100vh - ${offset}px)`);
		}
	}, [upper, lower]);

	return [clearance, upper, lower];
};

export default useClearance;

