

var Deepstream = require( 'deepstream.io' ),
    MongoDBStorageConnector = require( 'deepstream.io-storage-mongodb' ),
    server = new Deepstream();

server.set( 'storage', new MongoDBStorageConnector( {
  connectionString: 'mongodb://localhost:27017/newdeep',
}));

console.log('hello from deepstream')
server.start();