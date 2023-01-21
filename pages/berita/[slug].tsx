import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { LayoutContentType, PageProps, queryByRoute, queryByUID } from '@core/prismic/client';
import { createClient } from '@core/prismic/client';
import DynamicLayout from '@components/_layouts/DynamicLayout';
import { SliceZone } from '@prismicio/react';
import { components } from '@slices/index';
import { isFilled } from '@prismicio/helpers';
import { isLayoutData, notEmpty } from '@core/utils/check';

const CustomPage = ({ content, layout_content }: any): JSX.Element => {
	const router = useRouter();

	return (
		<DynamicLayout content={layout_content} title={content.title} key={router.asPath}>
			{content.title}
			{/* <SliceZone slices={content.slices} components={components} /> */}
		</DynamicLayout>
	);
};

export const getStaticProps = async ({ params, previewData }: any) => {
	try {
		if (!params) throw new Error('Missing parameter');
		const { slug } = params;
		const client = createClient({ previewData: previewData });
		const PageDoc = await queryByUID(client, 'berita', slug);
		const content = PageDoc.data;

		if (!isFilled.contentRelationship(content.layout) || !isLayoutData(content.layout.data))
			throw new Error('Mising layout');

		const layout_content: LayoutContentType = content.layout.data;

		if (previewData) layout_content.isPreview = true;

		return {
			props: {
				content,
				layout_content
			}
		};
	} catch (error) {
		console.log(error);

		return {
			notFound: true
		};
	}
};

export const getStaticPaths: GetStaticPaths<{
	slug: string;
}> = async () => {
	const client = createClient();
	const docs = await client.getAllByType('berita').then((res) => res);

	const paths = docs
		.filter((doc) => doc.uid !== '/')
		.map((doc) => {
			return {
				params: {
					slug: doc.uid
				}
			};
		})
		.filter(notEmpty);

	return {
		paths: paths,
		fallback: false
	};
};

export default CustomPage;
