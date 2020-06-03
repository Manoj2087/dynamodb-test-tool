const debug = require('debug')('ddb:createDDBTable');
const AWS = require('aws-sdk');

const awsRegion = process.env.MYAPP_AWS_REGION;
const ddbRobotTable = process.env.MYAPP_TABLE;
const ddbRobotTableTypeIndex = process.env.MYAPP_T_TYPE_INDEX;

AWS.config.update({
  region: awsRegion,
});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });


async function createDDBTable() {
  const params = {
    TableName: ddbRobotTable,
    AttributeDefinitions: [
      {
        AttributeName: 'R_NAME',
        AttributeType: 'S',
      },
      {
        AttributeName: 'R_TYPE',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'R_NAME',
        KeyType: 'HASH',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
    StreamSpecification: {
      StreamEnabled: false,
    },
    GlobalSecondaryIndexes: [
      {
        IndexName: ddbRobotTableTypeIndex,
        KeySchema: [
          {
            AttributeName: 'R_TYPE',
            KeyType: 'HASH',
          },
        ],
        Projection: {
          NonKeyAttributes: [
            'R_NAME',
            'R_IMG_URL',
          ],
          ProjectionType: 'INCLUDE',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: '1',
          WriteCapacityUnits: '1',
        },
      },
    ],
  };

  try {
    const data = await ddb.createTable(params).promise();
    // eslint-disable-next-line no-console
    debug(`Succesfully created dynamodb table: ${JSON.stringify(data)}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    debug(`Failure creating dynamodb table: :${error.message}`);
  }
}

module.exports = createDDBTable;
