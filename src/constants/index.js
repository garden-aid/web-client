import config from '../../config.json';

const auth0 = config.AUTH0;

const stage = __STAGE__;

console.log('Getting config for stage ', stage);

export const APIGW_URL = config.API_GATEWAY[stage];

if (!APIGW_URL) {
  throw new Error('API GATEWAY not implemented');
}

export const GRAPHQL_URL = `${APIGW_URL}/graphql`;
export const AUTH0_DOMAIN = auth0.domain;
export const AUTH0_CLIENT_ID = auth0.clientId;
