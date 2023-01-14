import React, { useContext } from 'react';
import LayoutStore from './layout';

type LayoutStoreType = ReturnType<typeof LayoutStore>;
interface valueProps {
	layout: LayoutStoreType;
}

const AppContext = React.createContext<valueProps | null>(null);

interface Props {
	children: React.ReactNode;
}

const AppProvider = ({ children }: Props): JSX.Element => (
	<AppContext.Provider
		value={{
			layout: LayoutStore()
		}}
	>
		{children}
	</AppContext.Provider>
);

export default AppProvider;

export const useLayout = (): LayoutStoreType => {
	const context = useContext(AppContext);
	if (context) return context.layout;
	return { AlertValue: null, resetAlert: () => {}, Alert: () => {} };
};

