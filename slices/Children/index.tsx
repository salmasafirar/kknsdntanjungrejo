import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';
import { ContextType } from '@core/prismic/types';

const Children = ({ context }: SliceComponentProps<Content.ChildrenSlice, ContextType>) => {
	const { children, minHeight, className = 'w-full flex-sc col', style } = context.children ?? {};
	return (
		<main style={{ minHeight, ...style }} className={className}>
			<div className="w-full bg-green-400 py-3">
				<div className="container max-w-7xl mx-auto">
					<div className="flex justify-between items-center marquee">
						<p className="text-white text-xs md:text-sm flex items-center space-x-2">
							<span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</span>
							<span>sdntanjungrejo01@gmail.com</span>
						</p>
						<div className="text-white text-xs md:text-sm -md:hidden ">
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
