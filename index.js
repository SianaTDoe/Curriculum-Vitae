///<reference path="scripts/angularjs/jquery.d.ts"/>
///<reference path="scripts/angularjs/angular-animate.d.ts" />
///<reference path="scripts/angularjs/angular.d.ts" />
var Index;
(function (Index) {
    var DefaultPage = /** @class */ (function () {
        function DefaultPage($scope) {
            this.scope = $scope;
            var self = this;
            self.scope.events = self;
            self.init();
        }
        DefaultPage.prototype.init = function () {
            var self = this.scope;
            var method = this;
            self.detailsCreo = false;
            self.detailsComdata = false;
            self.detailsCNRS = false;
        };
        DefaultPage.$inject = ["$scope"];
        return DefaultPage;
    }());
    Index.DefaultPage = DefaultPage;
})(Index || (Index = {}));
var IndexApp = angular.module('IndexApp', ['ngAnimate', 'ngSanitize']);
IndexApp.controller('IndexController', Index.DefaultPage);
