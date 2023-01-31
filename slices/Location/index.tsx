import React from 'react';
import { PrismicLink, PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Map, Marker, NavigationControl } from 'react-map-gl';
import useResize from '@core/hooks/useResize';
import { LocationSlice } from '@slicemachine/prismicio';

/**
 * @typedef {import("@prismicio/client").Content.LocationSlice} LocationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationSlice>} LocationProps
 * @param { LocationProps }
 */
const Location = ({ slice }: SliceComponentProps<LocationSlice>) => {
	const { sm } = useResize();

	const { title, alamat, googleMap, latitude, longitude } = slice.primary;

	return (
		<section className="w-full py-10 md:py-16">
			<div className="max-w-7xl container overflow-hidden">
				<div className="-md:flex-col-reverse flex">
					<Map
						mapboxAccessToken="pk.eyJ1IjoibXVkemlrYWwiLCJhIjoiY2xkNGhvYWI5MHNydTN2bDBwcXB5bnQwNSJ9.3Ii_7bwP2P8jQJdP7zGDhQ"
						initialViewState={{
							longitude: longitude || 110.926966,
							latitude: latitude || -7.764888,
							zoom: 16
						}}
						style={{
							width: sm ? '50%' : '100%',
							height: 400
						}}
						mapStyle="mapbox://styles/mapbox/streets-v9"
						scrollZoom={false}
					>
						<NavigationControl />
						<Marker longitude={110.926966} latitude={-7.764888} anchor="bottom">
							<svg
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="w-12 h-12"
							>
								<path
									clipRule="evenodd"
									d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
									fillRule="evenodd"
								></path>
							</svg>
						</Marker>
					</Map>
					<div className="-md:mb-8 md:pl-10 flex-1">
						<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
							{title}
						</h1>
						<PrismicRichText
							field={alamat}
							components={{
								paragraph: ({ children }) => <p className="mt-6 leading-loose">{children}</p>
							}}
						/>
						<PrismicLink
							field={googleMap}
							className="mt-8 flex items-center btn-secondary w-max space-x-2"
						>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
							>
								<path
									d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p>Google maps</p>
						</PrismicLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Location;
