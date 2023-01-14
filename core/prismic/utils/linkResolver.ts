import * as prismicT from '@prismicio/types';
import { LinkResolverFunction } from '@prismicio/helpers';
import { Content } from '@prismicio/client';

const isPageDocument = (
	doc: prismicT.FilledLinkToDocumentField | Content.AllDocumentTypes
): doc is Content.PagesDocument => {
	return doc.type === 'pages';
};
const isRedirectDocument = (
	doc: prismicT.FilledLinkToDocumentField | Content.AllDocumentTypes
): doc is Content.RedirectLinkDocument => {
	return doc.type === 'redirect_link';
};
const linkResolver: LinkResolverFunction = (
	doc: prismicT.FilledLinkToDocumentField | Content.AllDocumentTypes
): string => {
	if ((isPageDocument(doc) || isRedirectDocument(doc)) && doc.data) {
		return doc.data.route ?? '/';
	}
	return '/';
};

export { linkResolver };

