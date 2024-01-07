import eventHandler from './handler';

const event = {
  body: null,
  headers: {},
  multiValueHeaders: {},
  httpMethod: '',
  path: '/greeting',
  pathParameters: { greeting: 'hello-from-lambda' },
  isBase64Encoded: false,
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  stageVariables: {},
  resource: ''
};

const context = {
  exampleFn: jest.fn().mockReturnValue('hello')
};
describe('`eventHandler` function', () => {
  test('should test `exampleFn` successfully', async () => {
    const result = await eventHandler(event, context);
    expect(JSON.parse(result.body)).toEqual({
      greeting: 'hello',
      pathParameters: { greeting: 'hello-from-lambda' },
      queryStringParameters: {}
    });
  });
  test('should handle errors in `exampleHandler`', async () => {
    const mockContext = {
      dummyFunction: async () => {
        throw new Error();
      }
    };

    const mockEvent = {
      body: '{"key": "value"}'
    };

    await eventHandler(mockEvent, mockContext).catch(error =>
      expect(error.message).toEqual('Ups, some mistake')
    );
  });
});
