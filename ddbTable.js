const debug = require('debug')('ddb');
const createDDBTable = require('./createDDBTable');
const loadDDBTable = require('./loadDDBTable');
const deleteDDBTable = require('./deleteDDBTable');

debug('DEBUG Dynamobd');
debug(`env DEBUG: ${process.env.DEBUG}`);
debug(`env MYAPP_AWS_REGION:${process.env.MYAPP_AWS_REGION}`);
debug(`env MYAPP_TABLE:${process.env.MYAPP_TABLE}`);
debug(`env MYAPP_T_TYPE_INDEX:${process.env.MYAPP_T_TYPE_INDEX}`);

// fetch the first passe argument
const option = process.argv[2];

switch (option) {
  case 'create':
    debug('Create Dynamobd Table....');
    createDDBTable();
    break;
  case 'load':
    debug('Load Dummy data to Dynamobd Table....');
    loadDDBTable();
    break;
  case 'delete':
    debug('Delete Dynamobd Table....');
    deleteDDBTable();
    break;
  default:
    // eslint-disable-next-line no-console
    console.log('Invalid argument passed');
    break;
}
