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
		<section className="w-full py-14 md:py-20">
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
				<div className="absolute top-0 right-0 md:m-2 p-1 z-10 bg-green-500 flex items-center space-x-1">
					<svg
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-white"
					>
						<path
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p className="text-xs font-medium text-white">1 September 2021</p>
				</div>
			</div>
			<div className="px-2 md:px-4 py-4 md:py-5 duration-300">
				<div className="relative">
					<h1 className="text-xl -sm:text-lg font-semibold w-full line-clamp-2 group-hover/card:text-green-500">
						Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum
					</h1>
				</div>
				<p className="text-gray-500 mt-4 line-clamp-2 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. dolor sit amet
					consectetur adipisicing elit
				</p>
			</div>
		</div>
	);
};

export default BeritaOverview;
