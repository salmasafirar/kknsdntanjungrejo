import { createClient } from '@core/prismic/client';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { linkResolver } from '@core/prismic/utils/linkResolver';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const client = createClient({ req });
	setPreviewData({ req, res });
	await redirectToPreviewURL({ req, res, client, linkResolver });
};

