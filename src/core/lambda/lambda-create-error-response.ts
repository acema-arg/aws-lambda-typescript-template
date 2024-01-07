import { HEADERS, HTTP_STATUS_CODES } from '@shared/definitions/constants';

export const lambdaCreateErrorResponse = error => {
  const statusCode = error?.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;

  const body = JSON.stringify({
    error
  });

  const headers = {
    [HEADERS.CONTENT_TYPE.KEY]: HEADERS.CONTENT_TYPE.APP_JSON,
    [HEADERS.ACCESS_CONTROL.KEY]: HEADERS.ACCESS_CONTROL.ALL
  };

  return {
    statusCode,
    headers,
    body
  };
};
