const exampleHandler = async (event, context) => {
  try {
    const { exampleFn } = context;
    const { pathParameters, queryStringParameters } = event;
    console.log(context);
    console.log(event);
    const greeting = await exampleFn();
    return {
      statusCode: 200,
      body: JSON.stringify({ greeting, pathParameters, queryStringParameters })
    };
  } catch (error) {
    throw new Error('Ups, some mistake');
  }
};

export default exampleHandler;
