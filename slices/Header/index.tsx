import React from 'react';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
const Header = ({ slice }: any) => (
	<section>
		{/* <div className="align-right">
			<img className="" src={slice.primary.image.url} />
		</div>
		<span className="title">
			{slice.primary.title ? (
				<PrismicRichText field={slice.primary.title} />
			) : (
				<h2>Template slice, update me!</h2>
			)}
		</span>
		{slice.primary.description ? (
			<PrismicRichText field={slice.primary.description} />
		) : (
			<p>start by editing this slice from inside Slice Machine!</p>
		)}
		<style jsx>{`
			section {
				max-width: 600px;
				margin: 4em auto;
				text-align: center;
			}
			.title {
				color: #8592e0;
			}
		`}</style> */}
		{/* <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:pt-20 md:py-14 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 lg:h-[500px] lg:grid-cols-2">
				<div className="relative z-10">
					<div className="">
						<img
							className="absolute inset-0 h-full w-full object-cover"
							src={slice.primary.image.url}
						/>
					</div>
				</div>

				<div className="relative flex items-center bg-gray-100">
					<span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

					<div className="p-8 sm:p-16 lg:p-26">
						<div className="flex items-center space-x-2 md-0 md:mb-4">
							{slice.primary.title && (
								<PrismicRichText
									field={slice.primary.title}
									components={{
										heading1: ({ children }) => (
											<h1 className="text-2xl font-bold sm:text-3xl">{children}</h1>
										),
										strong: ({ children }) => (
											<div className="py-1 px-2 bg-green-500 text-white w-max mb-2">{children}</div>
										)
									}}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div> */}

		<header aria-label="Page Header">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="text-center sm:text-left">
						<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl"></h1>

						<div className="mt-1.5 text-sm text-gray-500">
							{slice.primary.title && (
								<PrismicRichText
									field={slice.primary.title}
									components={{
										heading1: ({ children }) => (
											<h1 className="text-2xl font-bold sm:text-3xl">{children}</h1>
										),
										strong: ({ children }) => (
											<div className="py-1 px-2 bg-green-500 text-white w-max mb-2">{children}</div>
										)
									}}
								/>
							)}
						</div>
					</div>

					<div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
						<div className="align-right">
							<img className="" src={slice.primary.image.url} />
						</div>
					</div>
				</div>
			</div>
		</header>
	</section>
);

export default Header;

