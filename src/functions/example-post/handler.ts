const exampleHandler = async (event, context) => {
  const body = JSON.parse(event.body);
  const { config, exampleFn } = context;

  const greeting = await exampleFn();
  return {
    statusCode: 200,
    body: JSON.stringify({ greeting, body, config })
  };
};

export default exampleHandler;
