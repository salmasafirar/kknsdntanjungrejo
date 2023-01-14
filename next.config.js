/* eslint-disable @typescript-eslint/no-var-requires */
const withPrismicSitemap = require('@reecem/prismic-sitemap');
// The Prismic API endpoint
const { apiEndpoint: API_ENDPOINT } = require('./sm.json');

// The hostname of the website, for example it would be https://example.com
const SITE_URL = process.env.VERCEL_URL;
const BASE_URL = `https://${SITE_URL}`;

const linkResolver = (link) => {
	switch (link.link_type) {
		case 'Web':
		case 'Media':
			return link.url;
		default:
			switch (link.type) {
				case 'pages':
					return `${link.data.route}`;
				default:
					return `/${link.uid}`;
			}
	}
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// the sitemap object is picked up by the package.
	sitemap: {
		linkResolver: linkResolver,
		apiEndpoint: API_ENDPOINT,
		hostname: BASE_URL,
		optionsMapPerDocumentType: {
			// setting the update date of the article.
			// post: (document) => {
			// 	return {
			// 		// get the last time the document was published in Prismic
			// 		lastmod: document.last_publication_date,
			// 		changefreq: 'weekly',
			// 		priority: 0.8
			// 	};
			// },
			pages: { changefreq: 'monthly', priority: 1 }
		},
		documentTypes: ['pages']
	}
};

module.exports = withPrismicSitemap(nextConfig);

