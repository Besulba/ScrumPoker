"use strict";
var core_1 = require('@angular/core');
var card_service_1 = require('./card.service');
var CardComponent = (function () {
    function CardComponent(cardService) {
        this.cardService = cardService;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardService.getCards("default").then(function (cards) {
            _this.cards = cards;
        });
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: 'card-app',
            templateUrl: './card/card.component.html',
            styleUrls: ["/card.component.css"]
        }), 
        __metadata('design:paramtypes', [card_service_1.CardService])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map