(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


        ToBuyController.$inject = ['ShoppingListCheckOffService'];

        function ToBuyController(ShoppingListCheckOffService) {
            var buyCtrl = this;

            buyCtrl.itemsBuy = ShoppingListCheckOffService.getItems();

            buyCtrl.removeItem = function (itemIndex) {
                try {
                    ShoppingListCheckOffService.removeItem(itemIndex);
                } catch (error) {
                    buyCtrl.errorMessage = error.message;
                }
            };
        }


        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var alreadyBuyCtrl = this;

            alreadyBuyCtrl.errorMessage = true;

            alreadyBuyCtrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
            //console.log(alreadyBuyCtrl.itemsBought.length);
            if(alreadyBuyCtrl.itemsBought.length > 0){
                alreadyBuyCtrl.errorMessage = false;
            }
        }

        function ShoppingListCheckOffService() {

            var service = this;

            var itemsBuy = [
                {
                    name: "cookies",
                    quantity: 10
                },
                {
                    name: "apple",
                    quantity: 5
                },
                {
                    name: "pear",
                    quantity: 7
                },
                {
                    name: "melon",
                    quantity: 2
                },
                {
                    name: "orange",
                    quantity: 10
                }
            ];

            var itemsBought = [];

            service.removeItem = function (itemIndex) {

                itemsBought.push(itemsBuy[itemIndex]);
                
                itemsBuy.splice(itemIndex, 1);

                if(itemsBuy.length == 0){
                    throw new Error('error');
                }
            };

            service.getItems = function () {
                return itemsBuy;
            };

            service.getItemsBought = function () {
                if (itemsBought.length !== 0) {
                    throw new Error('error');
                }
                console.log(itemsBought.length);
                return itemsBought;

            };
        }

})();

