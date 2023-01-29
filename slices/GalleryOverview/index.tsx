import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { GalleryOverviewSlice } from '@slicemachine/prismicio';
import { asText } from '@prismicio/helpers';

/**
 * @typedef {import("@prismicio/client").Content.GalleryOverviewSlice} GalleryOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryOverviewSlice>} GalleryOverviewProps
 * @param { GalleryOverviewProps }
 */
const GalleryOverview = ({ slice, context }: SliceComponentProps<GalleryOverviewSlice, any>) => {
	const { title, description } = slice.primary;
	return (
		<section className="py-10 md:py-16 w-full">
			<div className="container max-w-7xl">
				<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
					{asText(title)}
				</h1>
				<p className="mt-4 lg:w-1/3 md:w-1/2">{asText(description)}</p>
			</div>
		</section>
	);
};

export default GalleryOverview;
