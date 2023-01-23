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
import Link from '@components/_shared/Link';

const CustomPage = ({ content, layout_content, context }: any): JSX.Element => {
	const router = useRouter();

	const title = asText(content.title);

	const date = new Date(content.date);

	const { news } = context;

	return (
		<DynamicLayout content={layout_content} title={title} key={router.asPath}>
			<section className="container max-w-7xl mx-auto pt-28 md:pt-32 lg:pt-36 grid grid-cols-1 md:grid-cols-10 md:gap-4">
				<div className="md:col-span-7">
					<div className="w-full mx-auto mb-8 md:mb-10">
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
						<p className="mt-4 text-xs md:text-sm py-1 px-2 text-white bg-green-500 w-max">
							{formatDate(date, 'dd MMMM yyyy')}
						</p>
						<div className="-md:text-sm mt-4">
							<PrismicRichText field={content.description} />
						</div>
					</div>
					<div className="w-full mx-auto">
						<div className="w-full h-[200px] md:h-[300px] lg:h-[450px] relative mx-auto">
							<Image
								src={content.image.url}
								alt={content.image.alt || 'cover'}
								objectFit="cover"
								layout="fill"
							/>
						</div>
					</div>
					<div className="w-full mx-auto mt-10 md:pb-10">
						<SliceZone slices={content.slices} components={components} />
					</div>
				</div>
				<div className="md:col-span-3 md:pl-8 -md:pt-4">
					<div className="sticky top-28 right-0 pb-10 md:pb-20">
						<h1 className="text-xl pl-3 border-l-4 border-green-500 font-medium">Berita Lainnya</h1>
						<div className="mt-6">
							{news &&
								news.map((item: any) => {
									const { title = '', description = '', date = '' } = item.data;
									return (
										<Link href={`/berita/${item.uid}`} key={item.uid}>
											<div
												key={item.uid}
												className="py-3 px-4 shadow-sm bg-white mb-3 cursor-pointer hover:bg-gray-50"
											>
												<p className="text-xs text-green-500">
													{formatDate(new Date(date), 'dd MMMM yyyy')}
												</p>
												<h3 className="mt-2">{asText(title)}</h3>
												<p className="text-xs mt-1 line-clamp-1 text-gray-600">
													{asText(description)}
												</p>
											</div>
										</Link>
									);
								})}
						</div>
					</div>
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

		const news = await client
			.getAllByType('berita', {
				orderings: {
					field: 'my.berita.date',
					direction: 'desc'
				}
			})
			.then((res) => res);

		const layoutId = content.layout.uid;

		const layoutDoc = await queryLayout(client, layoutId);

		return {
			props: {
				content,
				layout_content: layoutDoc,
				context: {
					news: news.filter((item: any) => item.uid !== slug)
				}
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
