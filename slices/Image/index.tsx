import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { ImageSlice } from '@slicemachine/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { ContextType } from '@core/prismic/types';

const Image = ({ slice }: SliceComponentProps<ImageSlice, ContextType>) => {
	return <PrismicNextImage field={slice.primary.image} />;
};

export default Image;

