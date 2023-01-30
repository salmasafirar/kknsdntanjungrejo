import React, { useMemo, useEffect } from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { BeritaOverviewSlice } from '@slicemachine/prismicio';
import { ContextType } from '@core/prismic/types';
import Link from '@components/_shared/Link';
import Image from 'next/image';
import { isFilled } from '@prismicio/helpers';
import Pagination from '@components/_shared/pagination/Pagination';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import useEmblaCarousel from 'embla-carousel-react';

/**
 * @typedef {import("@prismicio/client").Content.BeritaOverviewSlice} BeritaOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeritaOverviewSlice>} BeritaOverviewProps
 * @param { BeritaOverviewProps }
 */
const BeritaOverview = ({
	slice,
	context
}: SliceComponentProps<BeritaOverviewSlice, ContextType>) => {
	const { news } = context;
	const { tampilkanSemua } = slice.primary;

	const [emblaRef, emblaApi] = useEmblaCarousel({
		speed: 10,
		slidesToScroll: 1,
		containScroll: 'trimSnaps'
	});

	const scrollNext = () => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	};

	const scrollPrev = () => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	};

	const { page } = useRouter().query;

	const limitedNews = useMemo(() => news.slice(0, 5), [news]);

	const paginatedNews = useMemo(() => {
		if (page) {
			const pageInt = parseInt(page as string);
			const start = (pageInt - 1) * 6;
			const end = start + 6;
			return news.slice(start, end);
		}
		return news.slice(0, 6);
	}, [news, page]);

	const newsList = tampilkanSemua ? paginatedNews : limitedNews;

	return (
		<section className="w-full py-10 md:py-14 overflow-hidden">
			<div className="max-w-7xl container mx-auto pt-4">
				<div className="flex justify-between items-center">
					<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800">
						Berita terkini
					</h1>
					{!tampilkanSemua && (
						<Link href="/berita" className="-sm:text-sm text-green-500">
							Lihat semua
						</Link>
					)}
				</div>
				{tampilkanSemua && (
					<div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{newsList.map((item, index) => {
							const data = item.data;
							return <NewsCard key={index} data={data} uid={item.uid} />;
						})}
					</div>
				)}

				{!tampilkanSemua && (
					<div className="embla mt-8">
						<div className="embla__viewport" ref={emblaRef}>
							<div className="embla__container">
								{newsList.map((item, index) => {
									const data = item.data;
									return (
										<div key={index} className="embla__slide">
											<NewsCard data={data} uid={item.uid} />
										</div>
									);
								})}
							</div>
						</div>
						<div className="flex justify-end mt-8">
							<div className="flex items-center shadow-sm space-x-2">
								<div
									onClick={scrollPrev}
									className="py-3 bg-white border border-gray-100 px-4 hover:bg-gray-100 duration-200 active:bg-gray-50 cursor-pointer"
								>
									<svg
										aria-hidden="true"
										className="text-gray-500 w-4 md:w-5 h-4 md:h-5"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.75 19.5L8.25 12l7.5-7.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>

								<div
									onClick={scrollNext}
									className="py-3 bg-white border border-gray-100 px-4 hover:bg-gray-100 duration-200 active:bg-gray-50 cursor-pointer"
								>
									<svg
										aria-hidden="true"
										fill="none"
										stroke="currentColor"
										strokeWidth={1.5}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										className="text-gray-500 w-4 md:w-5 h-4 md:h-5"
									>
										<path
											d="M8.25 4.5l7.5 7.5-7.5 7.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				)}
				{tampilkanSemua && (
					<div className="mt-10">
						<Pagination totalPageCount={news.length / 6} />
					</div>
				)}
			</div>
			<style jsx>
				{`
					.embla__container {
						display: flex;
						flex-direction: row;
						height: auto;
						margin-left: calc(1rem * -1);
					}
					.embla__slide {
						flex: 0 0 33%;
						min-width: 0;
						padding-left: 1rem;
						position: relative;
					}

					@media (max-width: 768px) {
						.embla__slide {
							flex: 0 0 50%;
						}
					}

					@media (max-width: 640px) {
						.embla__slide {
							flex: 0 0 100%;
						}
					}
				`}
			</style>
		</section>
	);
};

const NewsCard = ({ data, uid }: any) => {
	const date = new Date(data.date);

	const formatted = format(date, 'dd MMMM yyyy');
	return (
		<Link href={`/berita/${uid}`} className="group">
			<div className="bg-white px-3 md:px-4 py-4 md:py-5 shadow-sm group/card cursor-pointer overflow-hidden duration-300">
				<div className="w-full mb-4 h-[200px] md:h-[230px] lg:h-[260px] relative duration-300 overflow-hidden">
					{data.image && (
						<Image
							src={data.image.url}
							layout="fill"
							objectFit="cover"
							className="duration-300 brightness-90 group-hover/card:brightness-75"
						/>
					)}

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
						<p className="text-xs font-medium text-white">{formatted}</p>
					</div>
				</div>
				<div className="duration-300">
					<div className="relative">
						<div className="text-xl -sm:text-lg font-semibold w-full line-clamp-2 group-hover/card:text-green-500">
							<PrismicRichText field={data.title} />
						</div>
					</div>
					<div className="text-gray-500 mt-2 md:mt-3 line-clamp-2 text-sm">
						<PrismicRichText field={data.description} />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BeritaOverview;
