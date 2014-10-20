'use strict';

angular
  .module('app')
  .controller('TodoCtrl', ['$scope', '$state', 'Todo', function($scope, $state,
      Todo) {

		var emptyTodo = {
			content: '',
			createdAt: (function(){ return new Date(); })(),
			complete: false
		};

//		$scope.newTodo = emptyTodo;

    $scope.todos = [];

    function getTodos() {
      Todo
        .find()
        .$promise
        .then(function(results) {
          $scope.todos = results;
        });
    }
    getTodos();

    $scope.addTodo = function() {

			$scope.newTodo.createdAt = new Date();
			$scope.newTodo.complete = false;

      Todo
        .create($scope.newTodo)
        .$promise
        .then(function(todo) {
          $scope.newTodo.content = '';
//          $scope.todoForm.content.$setPristine();
          $scope.todoForm.$setPristine();
          $('.focus').focus();
          getTodos();
        });
    };

    $scope.removeTodo = function(item) {
      Todo
        .deleteById(item)
        .$promise
        .then(function() {
          getTodos();
        });
    };

		$scope.setComplete = function(item){

			Todo.upsert(item)
				.$promise
				.then(function(){
					console.log('updated');
				});

		}
  }]);
