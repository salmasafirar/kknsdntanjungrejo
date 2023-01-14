import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { FooterMainSlice } from '@slicemachine/prismicio';
import { ContextType } from '@core/prismic/types';

const FooterMain = ({
	context: { lowerRef }
}: SliceComponentProps<FooterMainSlice, ContextType>) => {
	return (
		<footer ref={lowerRef}>
			<div>Footer</div>;
		</footer>
	);
};

export default FooterMain;

