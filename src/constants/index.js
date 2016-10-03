import config from '../../config.json';

const stage = __STAGE__ || 'dev';

const auth0 = config.AUTH0;

console.log('Getting config for stage ', stage);

export const APIGW_URL = config.API_GATEWAY[stage];

if (!APIGW_URL) {
  throw new Error('API GATEWAY not implemented');
}

export const STAGE = stage;
export const GRAPHQL_URL = `${APIGW_URL}/graphql`;
export const AUTH0_DOMAIN = auth0.domain;
export const AUTH0_CLIENT_ID = auth0.clientId;
