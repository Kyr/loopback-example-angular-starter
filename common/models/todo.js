module.exports = function(Todo) {
	Todo.disableRemoteMethod('__delete__tags', false);
};
