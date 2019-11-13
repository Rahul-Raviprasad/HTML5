(function(angular) {
  'use strict';
angular.module('test', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name = 'hello 2048';



    function generateNextNumber() {
      var numArray = [2,4,2,2,4,2,2,8,2,2];
      var index = Math.floor((Math.random() * 10) + 1);
      return numArray[index];
    }

    $scope.gameState = [
    [0,0,0,0],
    [0,2,2,0],
    [0,0,0,0],
    [0,0,0,0],
    ];

    function moveLeft() {
      var newState = JSON.parse(JSON.stringify($scope.gameState));

      newState[0] = combineLeft(shiftLeft(newState[0]));
      newState[1] = combineLeft(shiftLeft(newState[1]));
      newState[2] = combineLeft(shiftLeft(newState[2]));
      newState[3] = combineLeft(shiftLeft(newState[3]));

      $scope.gameState = JSON.parse(JSON.stringify(newState));
    }


    function combineLeft(arr) {
      // traverse right to left and join last 2 items
      for(var j = arr.length; j >0 ; j--) {
        if(arr[j] == arr[j-1]) {
          arr[j-1] = 2*arr[j-1];
          arr[j] = 0;
        }
      }
      return arr;
    }


    function shiftLeft(arr) {
      var newArr = [];
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
          newArr.push(arr[i]);
        }
      }
      var x= 4 - newArr.length;
      for(var j = 0; j < x; j++) {
        newArr.push(0);
      }
      return newArr;
    }

    function shiftRight(arr) {
      var newArr = [];
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
          newArr.push(arr[i]);
        }
      }
      var x= 4 - newArr.length;
      var temp = [];
      for(var j = 0; j < x; j++) {
        temp.push(0);
      }
      newArr = temp.concat(newArr);
      return newArr;
    }

    function placeNewNuminEmpty() {
      var num = generateNextNumber();
      dance:
      for( var i = 0; i < $scope.gameState.length ; i++) {
        for( var j = 0; j < $scope.gameState[i].length ; j++) {
          if($scope.gameState[i][j] == 0) {
            $scope.gameState[i][j] = num;
            break dance;
          }
        }

      }
    }


    document.addEventListener('keyup', (e) => {
      console.log(`keyup event. key property value is "${e.key}"`);
      if(e.key == "ArrowLeft") {
        moveLeft();
        placeNewNuminEmpty();
        $scope.$apply();
      }

    });





  }]);
})(window.angular);
