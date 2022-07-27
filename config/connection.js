const { connect, connection } = require('mongoose');

const connectionString =
'mongodb://localhost:27017/social-network-DB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
