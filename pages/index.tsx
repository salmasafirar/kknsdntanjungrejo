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

		const newsPromises = client
			.getAllByType('berita', {
				orderings: {
					field: 'my.berita.date',
					direction: 'desc'
				}
			})
			.then((res) => res);

		const agendaPromises = client
			.getAllByType('agenda', {
				orderings: {
					field: 'my.agenda.date',
					direction: 'desc'
				}
			})
			.then((res) => res);

		const pengumumanPromises = client
			.getAllByType('pengumuman', {
				orderings: {
					field: 'my.pengumuman.date',
					direction: 'desc'
				}
			})
			.then((res) => res);

		const galleryPromises = client
			.getAllByType('gallery', {
				orderings: {
					field: 'my.gallery.date',
					direction: 'desc'
				}
			})
			.then((res) => res);

		const [news, agenda, gallery, pengumuman] = await Promise.all([
			newsPromises,
			agendaPromises,
			galleryPromises,
			pengumumanPromises
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
					agenda: agenda
						.filter((item: any) => new Date(item.data.date).getTime() >= new Date().getTime())
						.sort(
							(a: any, b: any) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime()
						),
					gallery,
					pengumuman: pengumuman
						.filter((item: any) => new Date(item.data.date).getTime() >= new Date().getTime())
						.sort(
							(a: any, b: any) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime()
						)
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
