import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { ParagraphSlice } from '@slicemachine/prismicio';
import { ContextType } from '@core/prismic/types';

const Paragraph = ({ slice }: SliceComponentProps<ParagraphSlice, ContextType>) => {
	return (
		<PrismicRichText
			field={slice.primary.text}
			components={{
				heading1: ({ children }) => (
					<h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">{children}</h1>
				),
				heading2: ({ children }) => (
					<h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">{children}</h2>
				),
				heading3: ({ children }) => (
					<h3 className="text-md md:text-xl font-bold text-gray-800 mb-4 md:mb-6">{children}</h3>
				),
				heading4: ({ children }) => (
					<h4 className="text-md md:text-lg font-bold text-gray-800 mb-4 md:mb-6">{children}</h4>
				),
				paragraph: ({ children }) => (
					<p className="-md:text-sm text-base text-gray-800 mb-10 text-justify -sm:leading-relaxed -lg:leading-relaxed -md:leading-relaxed leading-loose">
						{children}
					</p>
				),
				strong: ({ children }) => (
					<span className="px-0.5 bg-green-500 text-white w-max mb-2">{children}</span>
				)
			}}
		/>
	);
};

export default Paragraph;
