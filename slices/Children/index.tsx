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
			<div className="w-full bg-green-400 py-3">
				<div className="container max-w-7xl mx-auto">
					<div className="flex justify-between items-center marquee">
						<p className="text-white text-sm md:text-base -md:hidden">sdntanjungrejo01@gmail.com</p>
						<div className="text-white text-sm md:text-base">
							Selamat datang di website SDN Tanjungrejo 01
						</div>
					</div>
				</div>
			</div>
			{children}
		</main>
	);
};

export default Children;
