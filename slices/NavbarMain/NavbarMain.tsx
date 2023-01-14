import { ContextType } from '@core/prismic/types';
import { SliceComponentProps } from '@prismicio/react';
import { NavbarMainSlice } from '@slicemachine/prismicio';
import React from 'react';

const NavbarMain = ({
	context: { upperRef }
}: SliceComponentProps<NavbarMainSlice, ContextType>) => {
	return (
		<header className="" ref={upperRef}>
			<div className="fixed top-0 z-50 w-full md:relative">Nabar</div>;
		</header>
	);
};

export default NavbarMain;

