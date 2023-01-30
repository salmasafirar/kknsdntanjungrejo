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
		<section className="w-full py-10 md:py-16">
			<div className="container max-w-7xl">
				<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
					{asText(title)}
				</h1>
				<div className="mt-10 flex flex-col gap-10">
					{slice.items.map((data, idx) => (
						<Ekstra reverse={idx % 2 === 0} data={data} />
					))}
				</div>
			</div>
		</section>
	);
};

const Ekstra = ({ reverse, data }: { reverse: boolean; data: any }) => (
	<div className={`${!reverse ? 'flex-row-reverse' : ''} flex justify-between gap-10`}>
		<div className="w-1/3 aspect-square">
			<img src={data.image.url} alt="" className="w-full h-full object-cover" />
		</div>
		<div
			style={{
				textAlign: reverse ? 'left' : 'right'
			}}
			className="w-2/3 flex flex-col justify-center"
		>
			<div className="text-3xl font-bold mb-6">
				<PrismicRichText field={data.nama} />
			</div>
			<div
				style={{
					textAlign: reverse ? 'left' : 'right'
				}}
			>
				<PrismicRichText field={data.description} />
			</div>
		</div>
	</div>
);

export default EkstraOverview;

