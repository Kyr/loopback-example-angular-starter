var app = require('../server/server.js');
var dataSource = app.dataSources.mysql;

/*dataSource.discoverSchema('users', {owner: 'inf'}, function (err, schema) {
    console.log(JSON.stringify(schema, null, '  '));
});
*/
var ds = app.dataSources.mysql;
//var book = app.models.book;
var book = app.models.user;
//ds.createModel(, schema_v1.properties, schema_v1.options);
  
/*ds.automigrate(function () {
  ds.discoverModelProperties('CUSTOMER_TEST', function (err, props) {
    console.log(props);
  });
});
*/
var books = [ 
    { name: "n1",
      id: "1"
    }
];

var count = books.length;
dataSource.automigrate('user', function (err) {dataSource.disconnect();});
/*dataSource.automigrate('book', function (err) {
  books.forEach(function(act) {
    book.create(act, function(err, result) {
      if(!err) {
        console.log('Record created:', result);
        count--;
        if(count === 0) {
          console.log('done');
          dataSource.disconnect();
        }
      }
    });
  });
});*/
//dataSource.createModel("Todo",)
/*dataSource.discoverAndBuildModels('users', {owner: 'inf'}, function (err, models) {
    models.DBUser.find(function (err, act) {
        if (err) {
            console.error(err);
        } else {
            console.log(act);
        }
        dataSource.disconnect();
    });
});
*/