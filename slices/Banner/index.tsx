import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { ImageSlice } from '@slicemachine/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { ContextType } from '@core/prismic/types';
import Link from '@components/_shared/Link';
import * as PrismicT from '@prismicio/types';
import { isFilled } from '@prismicio/helpers';
import useEmblaCarousel from 'embla-carousel-react';

type BannerSlice = {
	title: PrismicT.RichTextField;
	description: PrismicT.RichTextField;
};

type Item = {
	image: PrismicT.ImageField;
	title: PrismicT.RichTextField;
	description: PrismicT.RichTextField;
};

type BannerSliceType = PrismicT.Slice<'Banner', BannerSlice, Item>;

const Banner = ({ slice }: SliceComponentProps<BannerSliceType, ContextType>) => {
	const { description, title } = slice.primary;
	const [emblaRef] = useEmblaCarousel();

	return (
		<section className="relative w-full">
			{slice.items.map((item, idx) => {
				const { image, title, description } = item;

				return (
					<div
						className="flex flex-col items-center justify-center w-full h-[600px] relative"
						key={idx}
					>
						{isFilled.image(image) && (
							<img className="object-cover w-full h-full" src={image.url} />
						)}
						<div className="absolute inset-0 w-full">
							<div className="container max-w-7xl mx-auto h-full flex items-center">
								<div className="">
									<div className="text-5xl font-semibold py-1 px-2 text-white bg-emerald-600 w-max">
										<PrismicRichText field={title} />
									</div>
									<div className="text-xl text-white w-max mt-2">
										<PrismicRichText field={description} />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Banner;
