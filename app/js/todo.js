'use strict';

/** 
 * For demonstration we create a global function, however
 * for actual development we would properly modularize our
 * code.
 */
function TodoCtrl($scope, $filter) {
  // Define our todo container
  $scope.todoList = [];
  $scope.todoError = '';
  
  // Define logic to add items into our container.
  $scope.add = function() {
    // Provided we have something typed in our todo text add it to our list.
    if (angular.isDefined($scope.todo) && $scope.todo.text.length) {
      // Create a new todo item
      var newTodo = {
        text: $scope.todo.text,
        isCompleted: false
      }
    
      // Add the item into our array list.    
      $scope.todoList.push(newTodo);
    
      // Reset our input text so we can easily add more entries
      $scope.todo.text = '';
      
      if ($scope.todoError.length) {
        $scope.todoError = '';
      }
    } else {
      // Set our error
      $scope.todoError = 'No todo detected';      
    }
  }
  
  // Define how to remove completed items from our list.
  $scope.deleteCompleted = function() {
    // Use our $filter helper to limit our list to only those that are not completed.
    $scope.todoList = $filter('filter')($scope.todoList, {isCompleted: false});    
  }
}