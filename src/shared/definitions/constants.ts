/* eslint-disable @typescript-eslint/naming-convention */
export const HEADERS = Object.freeze({
  CONTENT_TYPE: { KEY: 'Content-Type', APP_JSON: 'application/json' },
  ACCESS_CONTROL: {
    KEY: 'Access-Control-Allow-Origin',
    ALL: '*'
  }
});

export const HTTP_STATUS_CODES = Object.freeze({
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500
});
