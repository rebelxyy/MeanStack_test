/**
 * Created by mazouzi on 04/02/2017.
 */

var app = angular.module("myShoppingList",[]);
    app.controller("myCtrl",function($scope){
        $scope.products = ["Milk","Bread","Cheese"];
        $scope.addItem = function(){
            $scope.message = '';
            $scope.status = '';
            if(!$scope.addMe){
                $scope.message = '';
                $scope.status = '';
                return ;}
            if($scope.products.indexOf($scope.addMe)== -1){
                $scope.products.push($scope.addMe);
                $scope.status = "alert alert-success alert-dismissable fade in";
                $scope.message = " Item added sucessfully ! ";

            }
            else{
                $scope.status = "alert alert-danger alert-dismissable fade in" ;

                $scope.message = "The Item is already in your shopping list ";

            }
        }
        $scope.removeItem = function(x){
            $scope.products.splice(x,1);
        }
    })