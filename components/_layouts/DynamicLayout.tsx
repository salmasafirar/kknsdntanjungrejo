import React from 'react';
import useClearance from '@core/hooks/useClearance';
import SEOTags from '@components/_shared/SEOTags';
import { components } from '@slices/index';
import { SliceZone } from '@prismicio/react';
import Link from '@components/_shared/Link';
import { AiOutlineClose } from 'react-icons/ai';
import { LayoutContentType } from '@core/prismic/types';
interface Props {
	children: React.ReactNode;
	content: LayoutContentType;
	title?: string | null;
}

const DynamicLayout = ({ children, content, title }: Props): JSX.Element => {
	const [minHeight, upperRef, lowerRef] = useClearance();

	return (
		<>
			<SEOTags title={title ?? undefined} />
			{content.isPreview && (
				<p className="fixed px-2 py-3 text-center text-white bg-indigo-600 rounded-md right-4 top-4">
					<Link
						className="absolute p-1 text-white bg-blue-400 bg-opacity-50 rounded-full -top-2 -right-2"
						href={'/api/exit-preview'}
					>
						<AiOutlineClose />
					</Link>
					Preview
				</p>
			)}
			<SliceZone
				context={
					{
						minHeight,
						upperRef,
						lowerRef,
						children: {
							children,
							minHeight
						}
					} as any
				}
				slices={content.slices}
				components={components}
			/>
		</>
	);
};

export default DynamicLayout;
