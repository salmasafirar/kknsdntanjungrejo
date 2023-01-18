import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { BeritaOverviewSlice } from '@slicemachine/prismicio';
import { ContextType } from '@core/prismic/types';
import Link from '@components/_shared/Link';
import Image from 'next/image';

/**
 * @typedef {import("@prismicio/client").Content.BeritaOverviewSlice} BeritaOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeritaOverviewSlice>} BeritaOverviewProps
 * @param { BeritaOverviewProps }
 */
const BeritaOverview = ({ slice }: SliceComponentProps<BeritaOverviewSlice, ContextType>) => {
	console.log('test');
	return (
		<section className="w-full py-20">
			<div className="max-w-7xl container mx-auto">
				<div className="flex justify-between items-center">
					<h1 className="text-lg sm:text-xl lg:text-3xl font-semibold">Berita terkini</h1>
					<Link href="/berita" className="-sm:text-sm text-green-500">
						Lihat semua
					</Link>
				</div>
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</section>
	);
};

const NewsCard = () => {
	return (
		<div className="bg-white shadow-sm group/card cursor-pointer overflow-hidden duration-300">
			<div className="w-full h-[200px] md:h-[240px] lg:h-[280px] relative duration-300 overflow-hidden">
				<Image
					src="https://images.prismic.io/sdntanjungrejo01/5bb94208-317f-4194-8952-69f7f100d30b_20230118_111933%281%29.jpg?auto=compress,format&w=900"
					layout="fill"
					objectFit="cover"
					className="group-hover/card:scale-110 duration-300 brightness-90 group-hover/card:brightness-100"
				/>
			</div>
			<div className="px-2 md:px-4 py-4 md:py-6 duration-300">
				<div className="relative">
					<h1 className="text-xl -sm:text-lg font-semibold px-3 duration-300 w-full line-clamp-1">
						Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum
					</h1>
					<div className="absolute left-0 top-0 w-1 h-full bg-green-500 duration-300"></div>
				</div>
				<div className="mt-4 text-sm font-semibold -sm:text-xs">3 hari yang lalu</div>
				<p className="text-gray-500 mt-2 line-clamp-2 -sm:text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. dolor sit amet
					consectetur adipisicing elit
				</p>
			</div>
		</div>
	);
};

export default BeritaOverview;
