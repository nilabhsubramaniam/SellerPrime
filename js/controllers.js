// https://angular-ui.github.io/

// setup app and pass ui.bootstrap as dep
var sellerPrime = angular.module("sellerPrime", ["ui.bootstrap"]);

// define factory for data source
sellerPrime.factory("States", function(){
    var states = ["BBA", "BCA", "MBA", "IT", "ComputerScience", "Electrical Enginnering", "Computer Enginerring", "Information technology", "Mechanical Enginnering"];

    return states;

});

// setup controller and pass data source
sellerPrime.controller("TypeaheadCtrl", function($scope, States) {

    $scope.selected = undefined;
    $scope.states = States;

});