(function(){
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
<<<<<<< HEAD

        $scope.dishes = "";
        $scope.message = "";
        $scope.checking = function () {
            var list = $scope.dishes.split(',');

            list.forEach(function(item, i){
                console.log(list[i].length);
            });

            if (list== ''){
                $scope.message = "Please enter data first";

            }
            else if (list.length <= 3){
                $scope.message = "Enjoy!";
            } else{
                $scope.message = "Too much!";
            }
        };

    }

})();

=======
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
>>>>>>> 579aba6925e29ef6613cb59ce2537f88b483405d
