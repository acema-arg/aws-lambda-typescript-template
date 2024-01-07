import { compose } from 'ramda';
import { lambdaFunctionContextInjector, lambdaTryCatch, lambdaYupValidation } from '@core/lambda';
import exampleFn from './example-function';
import exampleHandler from './handler';
import { bodySchema, pathSchema, querySchema } from './schema';
import { config } from '../../config';

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const httpCreateEventHandler = config => {
  return compose(
    lambdaTryCatch,
    lambdaFunctionContextInjector({ exampleFn, config }),
    lambdaYupValidation({ bodySchema, pathSchema, querySchema })
  )(exampleHandler);
};

export default httpCreateEventHandler(config);
