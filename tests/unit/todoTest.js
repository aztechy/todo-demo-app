describe('Todo Control Unit Tests', function() {
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $scope.todo = {};
    
    ctrl = $controller('TodoCtrl', {$scope: $scope});
  }));
  
  it('should start with an empty list', function() {
    expect($scope.todoList.length).toBe(0);
  });
  
  it('should be able to add new todos', function() {
    $scope.todo.text = 'A new todo';
    $scope.add();
    
    expect($scope.todoList.length).toBe(1);
    expect($scope.todoList[0].text).toBe('A new todo');
    expect($scope.todoList[0].isCompleted).toBe(false);
    expect($scope.todo.text).toBe('');
  });
  
  it('should not allow empty todo items to be added', function() {
    $scope.todo.text = '';
    $scope.add();
    
    expect($scope.todoList.length).toBe(0);
    expect($scope.todoError).toBe('No todo detected');
  });
  
  it('should allow users to clean up completed tasks', function() {
    // Add three todo items
    $scope.todo.text = "todo 1";
    $scope.add();
    
    $scope.todo.text = 'todo 2';
    $scope.add();
    
    $scope.todo.text = 'todo 3';
    $scope.add();
    
    expect($scope.todoList.length).toBe(3);
    
    // Complete on of our todos
    $scope.todoList[1].isCompleted = true;
    
    $scope.deleteCompleted();
    
    expect($scope.todoList.length).toBe(2);
    expect($scope.todoList[0].text).toBe('todo 1');
    expect($scope.todoList[1].text).toBe('todo 3');
  });
});
