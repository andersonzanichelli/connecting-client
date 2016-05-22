angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.linkedin = function() {

    var promisse = $http({
        method: 'GET',
        url: 'https://connecting-server.herokuapp.com/auth/linkedin',
        dataType : 'jsonp',   //you may use jsonp for cross origin request
        crossDomain:true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      promisse.success(function (data) {
        console.log(data);
      }).error(function (error) {
        console.log(error);
      });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
