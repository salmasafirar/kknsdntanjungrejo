import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';
import { ContextType } from '@core/prismic/types';
import { useRouter } from 'next/router';

const Children = ({ slice, context }: SliceComponentProps<Content.ChildrenSlice, ContextType>) => {
	const { children, minHeight, className = 'w-full flex-sc col', style } = context.children ?? {};
	const { email, nohp } = slice.primary;
	const router = useRouter();
	return (
		<main style={{ minHeight, ...style }} className={className}>
			<div
				className="w-full bg-green-400 py-3"
				style={{
					marginBottom: router.asPath === '/' ? '0' : '64px'
				}}
			>
				<div className="container max-w-7xl mx-auto h-6">
					<div className="flex justify-between items-center marquee">
						<div className="flex items-center space-x-4 flex-1 overflow-x-auto">
							{email && (
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
									<span>{email}</span>
								</p>
							)}
							{nohp && (
								<p className="text-white text-xs md:text-sm flex items-center space-x-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 shrink-0 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span>{nohp}</span>
								</p>
							)}
						</div>
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
