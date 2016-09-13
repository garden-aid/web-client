import config from '../../config.json';

const auth0 = config.AUTH0;

export const APIGW_URL = config.API_GATEWAY[process.env.NODE_ENV];

if (!APIGW_URL) {
  throw new Error('API GATEWAY not implemented');
}

export const GRAPHQL_URL = `${APIGW_URL}/graphql`;


export const AUTH0_DOMAIN = auth0.domain;
export const AUTH0_CLIENT_ID = auth0.clientId;
