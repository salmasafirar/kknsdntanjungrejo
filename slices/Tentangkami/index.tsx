import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { isFilled } from '@prismicio/helpers';
import Image from '@components/_shared/Image';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.TentangkamiSlice} TentangkamiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TentangkamiSlice>} TentangkamiProps
 * @param { TentangkamiProps }
 */
const Tentangkami = ({ slice, context }: any) => (
	<section
		className={`w-full px-6 last:pb-20 sm:px-6 lg:px-6 ${
			isFilled.image(slice.primary.image) ? 'pt-10 sm:pt-32 sm:pb-10' : 'pt-10 md:pt-16'
		}`}
	>
		<div className="sm:max-w-7xl -sm:px-4 -sm:py-4 sm:container border border-gray-100 bg-white py-8 shadow-lg shadow-gray-400/10 sm:flex">
			{isFilled.image(slice.primary.image) && (
				<div className="w-full sm:w-1/3 sm:mr-10 relative">
					<div className="w-full h-[200px] sm:h-[350px] overflow-hidden sm:absolute sm:-top-24 shadow-sm">
						<PrismicNextImage field={slice.primary.image} objectFit="cover" layout="fill" />
					</div>
				</div>
			)}
			<div className={`flex-1 -sm:mt-6 ${isFilled.image(slice.primary.image) ? 'pb-20' : 'pb-0'}`}>
				<div className="flex justify-between items-center">
					<div className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800">
						{slice.primary.title ? (
							<PrismicRichText field={slice.primary.title} />
						) : (
							<h2>Not Found</h2>
						)}
					</div>
				</div>
				<div className="mt-4 text-gray-800 text-justify -md:text-sm -sm:leading-loose leading-relaxed">
					<hr className="h-px my-6 bg-gray-200 border-0"></hr>
					<div>
						{slice.primary.description && (
							<PrismicRichText
								field={slice.primary.description}
								components={{
									heading1: ({ children }) => (
										<h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2 mt-4">
											{children}
										</h1>
									),
									heading2: ({ children }) => (
										<h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 mt-4">
											{children}
										</h2>
									),
									heading3: ({ children }) => (
										<h3 className="text-md md:text-xl font-bold text-gray-800 mb-2 mt-4">
											{children}
										</h3>
									),
									heading4: ({ children }) => (
										<h4 className="text-md md:text-lg font-bold text-gray-800 mb-2 mt-4">
											{children}
										</h4>
									),
									listItem: ({ children }) => (
										<li className="text-sm sm:text-base text-gray-800 mb-2 -md:leading-normal leading-relaxed flex items-center space-x-3">
											<span className="w-2 h-2 bg-green-500"></span>
											<div className="flex-1">{children}</div>
										</li>
									),
									paragraph: ({ children }) => (
										<p className="text-sm sm:text-base text-gray-800 mb-2 -md:leading-normal leading-relaxed">
											{children}
										</p>
									),
									strong: ({ children }) => <span className="font-bold">{children}</span>
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Tentangkami;
