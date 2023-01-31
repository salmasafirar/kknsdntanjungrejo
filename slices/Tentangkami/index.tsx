import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.TentangkamiSlice} TentangkamiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TentangkamiSlice>} TentangkamiProps
 * @param { TentangkamiProps }
 */
const Tentangkami = ({ slice, context }: any) => (
	<section className="w-full px-6 last:pb-20 pt-10 md:pt-16 sm:px-6 lg:px-6">
		<div className="sm:max-w-7xl -sm:px-4 -sm:py-4 sm:container bg-white py-8 shadow-lg shadow-gray-400/10">
			<div className="flex justify-between items-center">
				<div className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800">
					{slice.primary.title ? (
						<PrismicRichText field={slice.primary.title} />
					) : (
						<h2>Not Found</h2>
					)}
				</div>
			</div>
			<div className="mt-4 text-gray-600 text-justify -md:text-sm -sm:leading-loose leading-relaxed">
				<hr className="h-px my-6 bg-gray-200 border-0"></hr>
				<div>
					{slice.primary.description && (
						<PrismicRichText
							field={slice.primary.description}
							components={{
								listItem: ({ children }) => (
									<li className="text-base text-gray-800 mb-2 -md:leading-normal leading-relaxed flex items-center space-x-3">
										<span className="w-2 h-2 bg-green-500"></span>
										<div>{children}</div>
									</li>
								),
								strong: ({ children }) => (
									<span className="px-0.5 bg-green-500 text-white w-max mb-2">{children}</span>
								)
							}}
						/>
					)}
				</div>
			</div>
		</div>
	</section>
);

export default Tentangkami;
