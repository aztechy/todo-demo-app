'use strict';

/** 
 * For demonstration we create a global function, however
 * for actual development we would properly modularize our
 * code.
 */
function TodoCtrl($scope) {
  // Illustrate how defining a scope attribute within the controller
  // makes aware to the view that attribute.
  $scope.name = 'Neon';
}