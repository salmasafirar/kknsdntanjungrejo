import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { FooterMainSlice } from '@slicemachine/prismicio';
import { ContextType } from '@core/prismic/types';
import { isFilled } from '@prismicio/helpers';
import * as PrismicT from '@prismicio/types';
import Link from '@components/_shared/Link';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from 'react-map-gl';

const FooterMain = ({
	slice,
	context: { lowerRef }
}: SliceComponentProps<FooterMainSlice, ContextType>) => {
	const { logo, address, email, nohp } = slice.primary;
	return (
		<footer aria-label="Site Footer" className="bg-white" ref={lowerRef}>
			<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-16">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="flex justify-center text-teal-600 sm:justify-start">
							<div style={{ height: '80px' }} className="relative overflow-hidden duration-200">
								{isFilled.image(logo) && (
									<>
										<img
											src={logo.url}
											alt={logo.alt || ''}
											className="w-full h-full object-contain"
										/>
									</>
								)}
							</div>
						</div>
						<p>{logo.alt}</p>
					</div>
					<div className="mx-auto max-w-md text-center leading-relaxed text-gray-500 sm:mx-0 sm:max-w-xs sm:text-left">
						<PrismicRichText field={address} />
					</div>

					<div className="text-center sm:text-left">
						<ul className="space-y-4 text-sm">
							{email && (
								<li>
									<a className="flex items-center justify-center gap-1.5 sm:justify-start" href="/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 shrink-0 text-gray-900"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>

										<span className="text-gray-700">{email}</span>
									</a>
								</li>
							)}

							{nohp && (
								<li>
									<a className="flex items-center justify-center gap-1.5 sm:justify-start" href="/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 shrink-0 text-gray-900"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>

										<span className="text-gray-700">{nohp}</span>
									</a>
								</li>
							)}

							{/* <li className="flex items-start justify-center gap-1.5 sm:justify-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 shrink-0 text-gray-900"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>

								<address className="-mt-0.5 not-italic text-gray-700">
									Dusun Melikan, Desa Tanjungrejo, Sukoharjo, Jawa Tengah
								</address>
							</li> */}
						</ul>
					</div>
					{/* </div> */}

					{/* <div className="">
						<Map
							mapboxAccessToken="pk.eyJ1IjoibXVkemlrYWwiLCJhIjoiY2xkNGhvYWI5MHNydTN2bDBwcXB5bnQwNSJ9.3Ii_7bwP2P8jQJdP7zGDhQ"
							initialViewState={{
								longitude: 110.926966,
								latitude: -7.764888,
								zoom: 14
							}}
							style={{ width: 350, height: 250 }}
							mapStyle="mapbox://styles/mapbox/streets-v9"
						>
							<Marker longitude={110.926966} latitude={-7.764888}>
								<svg
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
								>
									<path
										clipRule="evenodd"
										d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
										fillRule="evenodd"
									></path>
								</svg>
							</Marker>
						</Map>
					</div> */}
				</div>

				<div className="mt-12 border-t border-gray-100 pt-6">
					<div className="text-center sm:flex sm:justify-between sm:text-left">
						<p className="text-sm text-gray-500">
							<span className="block sm:inline">Created with ?????? by KKN UNDIP 2023</span>
						</p>

						<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
							&copy; 2023 SDN Tanjungrejo 01
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterMain;
