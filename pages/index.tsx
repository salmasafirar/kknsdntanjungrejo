import CustomPage from './[...customs]';
import { GetStaticProps } from 'next';
import {
	createClient,
	LayoutContentType,
	PageParams,
	PageProps,
	queryByRoute
} from '@core/prismic/client';
import { isFilled } from '@prismicio/helpers';
import { isLayoutData } from '@core/utils/check';

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({ previewData }) => {
	try {
		const client = createClient({ previewData });
		const PageDoc = await queryByRoute(client, '/');
		const content = PageDoc.data;

		const newsPromises = client.getAllByType('berita').then((res) => res);

		const agendaPromises = client.getAllByType('agenda').then((res) => res);

		const galleryPromises = client.getAllByType('gallery').then((res) => res);

		const [news, agenda, gallery] = await Promise.all([
			newsPromises,
			agendaPromises,
			galleryPromises
		]);

		if (!isFilled.contentRelationship(content.layout) || !isLayoutData(content.layout.data))
			throw new Error('Mising layout');
		const layout_content: LayoutContentType = content.layout.data;

		if (previewData) layout_content.isPreview = true;
		return {
			props: {
				content,
				layout_content,
				context: {
					news,
					agenda,
					gallery
				}
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
};

export default CustomPage;
