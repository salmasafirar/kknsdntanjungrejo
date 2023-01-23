import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { TopBannerSlice } from '@slicemachine/prismicio';

/**
 * @typedef {import("@prismicio/client").Content.TopBannerSlice} TopBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopBannerSlice>} TopBannerProps
 * @param { TopBannerProps }
 */
const TopBanner = ({ slice }: SliceComponentProps<TopBannerSlice>) => (
	<div className="w-full bg-green-400 py-3">
		<div className="container max-w-7xl mx-auto">
			<div className="flex justify-between items-center marquee">
				<p className="text-white text-xs md:text-sm flex items-center space-x-2">
					<span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</span>
					<span>{slice.primary.email || ''}</span>
				</p>
				<p className="text-white text-xs md:text-sm flex items-center space-x-2">
					<span>
						<svg
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
					<span>{slice.primary.phone || ''}</span>
				</p>

				<div className="text-white text-xs md:text-sm -md:hidden ">{slice.primary.text || ''}</div>
			</div>
		</div>
	</div>
);

export default TopBanner;
