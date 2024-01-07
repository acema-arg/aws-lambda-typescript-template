import { HTTP_STATUS_CODES } from '@shared/definitions/constants';

export const lambdaYupErrorFormatter = error => {
  error.statusCode = HTTP_STATUS_CODES.BAD_REQUEST;
  error.data = { input: error.value };
  return error;
};
