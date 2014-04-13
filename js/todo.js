'use strict';

/** 
 * For demonstration we create a global function, however
 * for actual development we would properly modularize our
 * code.
 */
function TodoCtrl($scope) {
  // Define our todo container
  $scope.todoList = [];
  
  // Define logic to add items into our container.
  $scope.add = function() {
    // Create a new todo item
    var todo = {
      text: $scope.todo.text,
      isCompleted: false
    }
    // Add the item into our array list.    
    $scope.todoList.push(todo);
    
    // Reset our input text so we can easily add more entries
    $scope.todo.text = '';
  }
}