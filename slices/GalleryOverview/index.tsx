import React, { useMemo } from 'react';
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
import Image from '@components/_shared/Image';

/**
 * @typedef {import("@prismicio/client").Content.GalleryOverviewSlice} GalleryOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryOverviewSlice>} GalleryOverviewProps
 * @param { GalleryOverviewProps }
 */
const GalleryOverview = ({ slice, context }: SliceComponentProps<GalleryOverviewSlice, any>) => {
	const { title, description, tampilkanSemua } = slice.primary;
	const { gallery } = context;

	const galleryLimited = useMemo(() => {
		if (!gallery) return [];
		return gallery.slice(0, 6);
	}, [gallery]);

	const galleryList = tampilkanSemua ? gallery : galleryLimited;

	const onInit = () => {
		console.log('lightGallery has been initialized');
	};

	return (
		<section className="py-14 md:py-16 w-full">
			<div className="container max-w-7xl">
				<div className="flex items-center justify-between">
					<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
						{asText(title)}
					</h1>
					{!tampilkanSemua && (
						<Link href="/gallery" className="-sm:text-sm text-green-500">
							Lihat semua
						</Link>
					)}
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
							{galleryList.map((item: any, index: any) => (
								<div
									className="aspect-square relative cursor-pointer duration-200 group/gal"
									key={index}
									data-src={item.data.image.url}
									data-title={asText(item.data.title)}
									data-sub-html={asText(item.data.title) + ' - ' + asText(item.data.description)}
								>
									<div className="absolute z-10 inset-0 bg-gray-800/0 duration-200 group-hover/gal:bg-gray-900/40 flex justify-center items-center text-white text-sm md:text-base opacity-0 group-hover/gal:opacity-100 font-medium">
										Lihat
									</div>
									<Image
										alt={item.data.image.alt}
										className="w-full h-full object-cover"
										src={item.data.image.url}
									/>
								</div>
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
