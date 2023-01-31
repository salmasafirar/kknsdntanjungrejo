import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { EkstraOverviewSlice } from '@slicemachine/prismicio';
import { ContextType } from '@core/prismic/types';
import { asText } from '@prismicio/helpers';

/**
 * @typedef {import("@prismicio/client").Content.EkstraOverviewSlice} EkstraOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EkstraOverviewSlice>} EkstraOverviewProps
 * @param { EkstraOverviewProps }
 */
const EkstraOverview = ({
	slice,
	context
}: SliceComponentProps<EkstraOverviewSlice, ContextType>) => {
	const { description, title } = slice.primary;

	return (
		<section className="w-full pt-16 md:pt-24 last:pb-20">
			<div className="container max-w-7xl">
				<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
					{asText(title)}
				</h1>
				<div className="text-sm mt-3 text-gray-500">
					<PrismicRichText field={description} />
				</div>
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-4 md:gap-10">
					{slice.items.map((data, idx) => (
						<Ekstra data={data} key={idx} />
					))}
				</div>
			</div>
		</section>
	);
};

const Ekstra = ({ data }: { data: any }) => (
	<div>
		<div className="aspect-4/3">
			<img src={data.image.url} alt="" className="w-full h-full object-cover" />
		</div>
		<div className="flex flex-col justify-center text-center">
			<div className="md:text-lg font-semibold mt-2">
				<PrismicRichText field={data.nama} />
			</div>
			<div className="text-xs sm:text-sm mt-1 text-gray-500">
				<PrismicRichText field={data.description} />
			</div>
		</div>
	</div>
);

export default EkstraOverview;
