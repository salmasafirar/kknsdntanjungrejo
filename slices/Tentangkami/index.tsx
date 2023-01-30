import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.TentangkamiSlice} TentangkamiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TentangkamiSlice>} TentangkamiProps
 * @param { TentangkamiProps }
 */
const Tentangkami = ({ slice, context }: any) => (
	<section className="mx-auto max-w-7xl px-6 pb-10 pt-10 md:pt-20 md:py-14 sm:px-6 lg:px-6">
		<div className="sm:max-w-7xl -sm:mx-4 -sm:px-4 -sm:py-4 sm:container bg-white py-8 shadow-xl">
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
				<hr className="h-px my-6 bg-gray-200 border-0 dark:bg-green-700"></hr>
				<div className="indent-16">
					{slice.primary.description && <PrismicRichText field={slice.primary.description} />}
				</div>
			</div>
		</div>
	</section>
);

export default Tentangkami;

