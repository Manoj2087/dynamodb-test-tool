const debug = require('debug')('ddb:deleteDDBTable');
const AWS = require('aws-sdk');

const awsRegion = process.env.MYAPP_AWS_REGION;
const ddbRobotTable = process.env.MYAPP_TABLE;

AWS.config.update({
  region: awsRegion,
});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

async function deleteDDBTable() {
  const params = {
    TableName: ddbRobotTable,
  };

  try {
    const data = await ddb.deleteTable(params).promise();
    // eslint-disable-next-line no-console
    debug(`Succesfully deleted dynamodb table: ${JSON.stringify(data)}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    debug(`Failure deleting dynamodb table: :${error.message}`);
  }
}

module.exports = deleteDDBTable;
