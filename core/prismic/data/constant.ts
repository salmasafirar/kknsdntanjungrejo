import * as prismic from '@prismicio/client';
import sm from '@root/sm.json';

const endpoint = sm.apiEndpoint;
const repositoryName = prismic.getRepositoryName(endpoint);

export { endpoint, repositoryName };

