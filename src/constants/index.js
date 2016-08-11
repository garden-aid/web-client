import config from '../../config.json';

export const APIGW_URL = config.API_GATEWAY[process.env.NODE_ENV];

if (!APIGW_URL) {
  throw new Error('API GATEWAY not implemented');
}

export const GRAPHQL_URL = `${APIGW_URL}/graphql`;
