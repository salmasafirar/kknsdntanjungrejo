import { useState } from 'react';
import { EnumType } from '@components/_shared/AlertHandler';

export interface LayoutStoreType {
	AlertValue: AlertType | null;
	Alert(arg0: string, arg1?: EnumType): void;
	resetAlert(): void;
}

export interface AlertType {
	message: string;
	type?: EnumType;
}

const LayoutStore = (): LayoutStoreType => {
	const [AlertValue, setAlertValue] = useState<AlertType | null>(null);

	const resetAlert = () => setAlertValue(null);

	const Alert = (message: string, type?: EnumType) => {
		setAlertValue({ message, type });
	};

	return {
		AlertValue,
		Alert,
		resetAlert
	};
};

export default LayoutStore;

