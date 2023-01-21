import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { queryByUID, queryLayout } from '@core/prismic/client';
import { createClient } from '@core/prismic/client';
import DynamicLayout from '@components/_layouts/DynamicLayout';
import { asText, isFilled } from '@prismicio/helpers';
import { isLayoutData, notEmpty } from '@core/utils/check';
import Image from 'next/image';
import { format as formatDate } from 'date-fns';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { components } from '@slices/index';

const CustomPage = ({ content, layout_content }: any): JSX.Element => {
	const router = useRouter();

	const title = asText(content.title);

	const date = new Date(content.date);

	return (
		<DynamicLayout content={layout_content} title={title} key={router.asPath}>
			<section className="w-full pt-28 md:pt-32 lg:pt-36">
				<div className="max-w-3xl container mx-auto mb-8 md:mb-10">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
					<p className="mt-4 text-xs md:text-sm py-1 px-2 text-white bg-green-500 w-max">
						{formatDate(date, 'dd MMMM yyyy')}
					</p>
					<div className="-md:text-sm mt-4">
						<PrismicRichText field={content.description} />
					</div>
				</div>
				<div className="max-w-4xl mx-auto">
					<div className="w-full h-[200px] md:h-[300px] lg:h-[450px] relative mx-auto">
						<Image
							src={content.image.url}
							alt={content.image.alt || 'cover'}
							objectFit="cover"
							layout="fill"
						/>
					</div>
				</div>
				<div className="max-w-3xl container mx-auto mt-10 pb-10">
					<SliceZone slices={content.slices} components={components} />
				</div>
			</section>
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

		const layoutId = content.layout.uid;

		const layoutDoc = await queryLayout(client, layoutId);

		return {
			props: {
				content,
				layout_content: layoutDoc
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
