//angular.module('starter.controllers', [])

//app.controller('ActiveCtrl', function($scope) {});

app.controller('HouseCtrl', function($scope, House) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.houses = House.all();
  $scope.remove = function(house) {
    House.remove(house);
  };
               });

app.controller('HouseDetailCtrl', function($scope, $stateParams, House) {
  $scope.house = House.get($stateParams.houseId);
                })

app.controller('AgentCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
               });

app.controller('MeCtrl', function($scope) {
            $scope.settings = {
            enableFriends: true
            };
            });
