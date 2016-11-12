(function(){
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = ' ';

        $scope.message = ' ';

        $scope.checkDishes = function(){
            var message = $scope.dishes;

            var arrDishes = message.split(',');
            var number = arrDishes.length;

            var emptyInput = +document.getElementById('lunch-menu').value;

            showAppropriateMessage(number);

            function showAppropriateMessage(number) {

             if(emptyInput ==0){
                 $scope.message = 'Please enter data first!';
                 return
             }

             if (number <= 3) {
                    $scope.message = 'Enjoy!!!'
                } else {
                    $scope.message = 'Too much!'
                }
            }
        };
    }

})();
