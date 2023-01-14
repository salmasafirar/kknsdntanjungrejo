import * as prismic from '@prismicio/client';
import * as prismicT from '@prismicio/types';
import * as prismicNext from '@prismicio/next';
import { PreviewData } from 'next';
import { endpoint } from '@core/prismic/data/constant';

export const createClient = (
	config: {
		previewData?: PreviewData;
		req?: prismic.HttpRequestLike;
	} = {}
) => {
	const client = prismic.createClient(endpoint);
	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req
	});

	return client;
};

export const queryByRoute = async (
	client: prismic.Client,
	route: string,
	params: Partial<prismic.BuildQueryURLArgs> = {}
): Promise<prismic.Content.PagesDocument> => {
	return client.getSingle('pages', {
		...params,
		predicates: [prismic.predicate.at('my.pages.route', route)],
		fetchLinks: ['layouts.slices', 'pages.route']
	});
};

export const queryByUID = async <
	TDocuments extends prismicT.PrismicDocument = prismicT.PrismicDocument
>(
	client: prismic.Client,
	type: string,
	uid: string,
	params: Partial<prismic.BuildQueryURLArgs> = {}
): Promise<TDocuments> => {
	return client.getByUID<TDocuments>(type, uid, params);
};

export const queryLayout = async (
	client: prismic.Client,
	uid: string,
	params: Partial<prismic.BuildQueryURLArgs> = {}
): Promise<prismic.Content.LayoutsDocument['data']> => {
	const defaultFetchLinks: string[] = [];
	return client
		.getByUID<prismic.Content.LayoutsDocument>('layouts', uid, {
			fetchLinks: defaultFetchLinks,
			...params
		})
		.then((res) => res.data);
};

