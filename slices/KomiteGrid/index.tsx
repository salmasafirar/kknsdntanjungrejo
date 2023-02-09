import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { KomiteGridSlice } from '@slicemachine/prismicio';
import { asText, isFilled } from '@prismicio/helpers';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.KomiteGridSlice} KomiteGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<KomiteGridSlice>} KomiteGridProps
 * @param { KomiteGridProps }
 */

const KomiteGrid = ({ slice }: SliceComponentProps<KomiteGridSlice>) => {
	const { description, title } = slice.primary;
	return (
		<section className="w-full pt-14 md:pt-20 last:pb-20">
			<div className="container mx-auto max-w-7xl">
				<div className="mb-6 md:mb-8">
					<h3 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
						{asText(title)}
					</h3>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
					{slice.items.map((item, index) => {
						const { nama, posisi, foto, moreInfo, email, nohp } = item;

						const isFotoFilled = isFilled.image(foto);
						return (
							<div className="bg-white shadow-sm border" key={index}>
								<div
									className="flex p-4"
									style={{
										alignItems: email || nohp ? 'flex-start' : 'center'
									}}
								>
									{isFilled.image(foto) && (
										<div className="w-1/4 aspect-3/4 h-full overflow-hidden">
											<PrismicNextImage field={foto} objectFit="cover" />
										</div>
									)}
									<div className={`${isFotoFilled ? 'w-3/4 pl-4' : 'w-full pl-0'}`}>
										<h4 className="text-lg md:text-xl font-semibold">{nama}</h4>
										<p className="text-sm text-gray-500">{posisi}</p>
										<p className="text-xs mt-1.5">{moreInfo}</p>
										{(email || nohp) && (
											<div className="border-t mt-2 text-xs md:text-sm flex flex-col gap-2 pt-2">
												{email && (
													<div className="flex items-center space-x-1.5 text-gray-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 shrink-0 text-gray-500"
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
														<p>{email}</p>
													</div>
												)}

												{nohp && (
													<div className="flex items-center space-x-1.5 text-gray-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 shrink-0 text-gray-500"
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
														<p>{nohp}</p>
													</div>
												)}
											</div>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default KomiteGrid;
