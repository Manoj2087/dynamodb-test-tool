# dynamodb-test-tool
Get started
```
npm install
```


Create DDB Table
```
DEBUG=ddb* \
MYAPP_AWS_REGION="ap-southeast-2" \
MYAPP_TABLE="test-ddb-table" \
MYAPP_T_TYPE_INDEX="table-index" \
npm run createDDB
```

Load DDB Table
```
DEBUG=ddb* \
MYAPP_AWS_REGION="ap-southeast-2" \
MYAPP_TABLE="test-ddb-table" \
npm run loadDDB
```

Delete DDB Table
```
DEBUG=ddb* \
MYAPP_AWS_REGION="ap-southeast-2" \
MYAPP_TABLE="test-ddb-table" \
npm run deleteDDB
```