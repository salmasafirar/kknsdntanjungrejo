import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { ImageSlice } from '@slicemachine/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { ContextType } from '@core/prismic/types';
import * as PrismicT from '@prismicio/types';

/**
 * @typedef {import("@prismicio/client").Content.ProfilSlice} ProfilSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProfilSlice>} ProfilProps
 * @param { ProfilProps }
 */

type Item = {
	image: PrismicT.ImageField;
	text: PrismicT.RichTextField;
	button: PrismicT.KeyTextField;
	href: PrismicT.KeyTextField;
};

type BannerProfilSliceType = PrismicT.Slice<'BannerProfil', Record<any, any>, Item>;

const Profil = ({ slice, context }: any) => {
	return (
		// <section className="mt-10 py-5 md:py-8 w-full">
		<section className="relative w-full bg-[url(https://images.prismic.io/sdntanjungrejo01/5bb94208-317f-4194-8952-69f7f100d30b_20230118_111933%281%29.jpg?auto=compress,format)] bg-cover bg-center bg-no-repeat mt-10 py-5 md:py-8">
			<div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
				<div className="max-w-xl text-center sm:text-left">
					<div className="text-3xl font-extrabold sm:text-5xl">
						{slice.primary.title && (
							<PrismicRichText
								field={slice.primary.title}
								components={{
									strong: ({ children }) => (
										<div className="py-1 px-2 bg-green-500 text-white w-max mb-2">{children}</div>
									)
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
		// </section>
	);
};

export default Profil;

