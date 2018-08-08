const amazing = (event, context, callback) => {
    const { requestContext: { authorizer } } = event;
    const body = {
      hello: 'world',
      authContext: authorizer,
    };
    const response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    return callback(null, response);
  };
  
  module.exports = { amazing };