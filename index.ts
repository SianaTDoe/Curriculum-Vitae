///<reference path="scripts/angularjs/jquery.d.ts"/>
///<reference path="scripts/angularjs/angular-animate.d.ts" />
///<reference path="scripts/angularjs/angular.d.ts" />

module Index {

    export interface IDefaultPageScope extends ng.IScope {
        events: DefaultPage;
        detailsCreo: boolean; 
        detailsComdata: boolean;
        detailsCNRS: boolean;
    }

    export class DefaultPage {
        scope: IDefaultPageScope;
        static $inject = ["$scope"];
        constructor($scope: IDefaultPageScope) {
            this.scope = $scope;
            var self = this;
            self.scope.events = self;
            self.init();
        }

        private init() {
            var self = this.scope;
            var method = this; 
            self.detailsCreo = false;
            self.detailsComdata = false;
            self.detailsCNRS = false;
        }
    }
}


var IndexApp = angular.module('IndexApp', ['ngAnimate', 'ngSanitize']);
IndexApp.controller('IndexController', Index.DefaultPage);