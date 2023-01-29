import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { GalleryOverviewSlice } from '@slicemachine/prismicio';
import { asText } from '@prismicio/helpers';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Link from '@components/_shared/Link';

/**
 * @typedef {import("@prismicio/client").Content.GalleryOverviewSlice} GalleryOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryOverviewSlice>} GalleryOverviewProps
 * @param { GalleryOverviewProps }
 */
const GalleryOverview = ({ slice, context }: SliceComponentProps<GalleryOverviewSlice, any>) => {
	const { title, description } = slice.primary;
	const { gallery } = context;

	const onInit = () => {
		console.log('lightGallery has been initialized');
	};

	return (
		<section className="py-14 md:py-20 w-full">
			<div className="container max-w-7xl">
				<div className="flex items-center justify-between">
					<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
						{asText(title)}
					</h1>
					<Link href="/gallery" className="-sm:text-sm text-green-500">
						Lihat semua
					</Link>
				</div>
				<p className="mt-4 lg:w-1/3 md:w-1/2 text-sm md:text-base">{asText(description)}</p>
				<div className="mt-8 md:mt-10">
					{gallery.length > 0 && (
						<LightGallery
							onInit={onInit}
							speed={500}
							elementClassNames="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-3 gap-y-4"
							plugins={[lgThumbnail]}
						>
							{gallery.map((item: any, index: any) => (
								<img
									key={index}
									alt={item.data.image.alt}
									className="aspect-square object-cover cursor-pointer hover:brightness-90 duration-200"
									src={item.data.image.url}
									data-src={item.data.image.url}
									data-title={asText(item.data.title)}
									data-sub-html={asText(item.data.description)}
								/>
							))}
						</LightGallery>
					)}
					{!gallery.length && (
						<div className="col-span-full py-10 text-gray-500 text-center">
							No gallery data found
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default GalleryOverview;
