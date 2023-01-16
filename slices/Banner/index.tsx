import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { ImageSlice } from '@slicemachine/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { ContextType } from '@core/prismic/types';
import Link from '@components/_shared/Link';

const Image = ({ slice }: SliceComponentProps<any, ContextType>) => {
	return (
		<section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat w-full">
			<div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="max-w-xl text-center sm:text-left">
					<PrismicNextImage field={slice.primary.image} />;
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						<strong className="block font-extrabold text-rose-700">
							<PrismicRichText field={slice.primary.title} />
						</strong>
					</h1>
					<p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
						ducimus numquam ea!
					</p>
					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<Link
							href="/berita"
							className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
						>
							Berita
						</Link>

						<a
							href="#"
							className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Image;
