(function(){
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

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

