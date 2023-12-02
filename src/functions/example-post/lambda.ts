import { compose, tryCatch } from "ramda";
import { querySchema, pathSchema, bodySchema } from "./yup/validation";
import dummyFunction from "./dummy/dummy-function";
import exampleHandler from "./handler";
import config from "../../config/config";

const injectToContext = (handler) => (event, context) => {
  return handler(event, { ...context, dummyFunction });
};

const yupValidation = (handler) => async (event, context) => {
  // Validate de data with yup
  const { pathParameters, queryStringParameters, body } = event;
  const payload = JSON.parse(body);

  try {
    await querySchema.validate(queryStringParameters);
    await pathSchema.validate(pathParameters);
    await bodySchema.validate(payload);
    return handler(event, context);
  } catch (error) {
    // (TODO) make better yup validation errors
    return error;
  }
};

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const httpCreateEventHandler = (config) => {
  return compose(injectToContext, yupValidation)(exampleHandler);
};

export default httpCreateEventHandler(config);
