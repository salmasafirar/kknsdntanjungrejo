import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';
import { ContextType } from '@core/prismic/types';

const Children = ({ context }: SliceComponentProps<Content.ChildrenSlice, ContextType>) => {
	const {
		children,
		minHeight,
		className = 'w-full overflow-hidden flex-sc col',
		style
	} = context.children ?? {};
	return (
		<main style={{ minHeight, ...style }} className={className}>
			{children}
		</main>
	);
};

export default Children;

