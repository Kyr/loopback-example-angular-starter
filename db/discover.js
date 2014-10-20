var app = require('../server/server.js');
var dataSource = app.dataSources.mysql;
dataSource.connector.query(
	'insert into book set name="asd"', 
	function(){dataSource.disconnect();}
);
