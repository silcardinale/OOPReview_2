"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setName = function (newName) {
        return this.name = newName;
    };
    MobileLibrary.prototype.setLocation = function (newLocation) {
        return this.location = newLocation;
    };
    MobileLibrary.prototype.setMobiles = function (newMobiles) {
        return this.mobiles = newMobiles;
    };
    MobileLibrary.prototype.TotalPriceCalculation = function () {
        var result = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            result += this.mobiles[i].getPrice();
        }
        return result;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
