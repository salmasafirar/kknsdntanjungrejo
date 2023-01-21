import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { isFilled } from '@prismicio/helpers';

/**
 * @typedef {import("@prismicio/client").Content.TentangSlice} TentangSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TentangSlice>} TentangProps
 * @param { TentangProps }
 */
const Tentang = ({ slice }: any) => {
	console.log(slice);

	return (
		<section>
			<div>
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
			`}</style>
		</section>
	);
};

export default Tentang;
