(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    /**
     * Controller1
     * @type {string[]}
     */
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buyCtrl = this;

        buyCtrl.itemsBuy = ShoppingListCheckOffService.getItems();

        buyCtrl.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    /**
     * Controller 2
     * @type {string[]}
     */

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBuyCtrl = this;
        alreadyBuyCtrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
    }

    /**
     * Service
     * @constructor
     */

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

        service.getItems = function () {
            return itemsBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

        service.removeItem = function (itemIndex) {

            itemsBought.push(itemsBuy[itemIndex]);

            itemsBuy.splice(itemIndex, 1);

        };
    }

})();


