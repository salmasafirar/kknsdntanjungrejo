import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { isFilled } from '@prismicio/helpers';

/**
 * @typedef {import("@prismicio/client").Content.TentangSlice} TentangSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TentangSlice>} TentangProps
 * @param { TentangProps }
 */
const Tentang = ({ slice }: any) => {
	console.log(slice);

	return (
		<section>
			<div className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:pt-20 md:py-14 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:h-[500px] lg:grid-cols-2">
					<div className="relative z-10">
						<div className="relative h-64 sm:h-80 lg:h-full">
							<img
								className="absolute inset-0 h-full w-full object-cover"
								src={slice.primary.image.url}
							/>
						</div>
					</div>

					<div className="relative flex items-center bg-gray-100">
						<span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

						<div className="p-8 sm:p-16 lg:p-26">
							<div className="flex items-center space-x-2 md-0 md:mb-4">
								{slice.primary.title && (
									<PrismicRichText
										field={slice.primary.title}
										components={{
											heading1: ({ children }) => (
												<h1 className="text-2xl font-bold sm:text-3xl">{children}</h1>
											),
											strong: ({ children }) => (
												<div className="py-1 px-2 bg-green-500 text-white w-max mb-2">
													{children}
												</div>
											)
										}}
									/>
								)}
							</div>

							<div className="mt-4 text-gray-600 text-justify -md:text-sm">
								{slice.primary.description ? (
									<PrismicRichText field={slice.primary.description} />
								) : (
									<p>start by editing this slice from inside Slice Machine!</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tentang;
