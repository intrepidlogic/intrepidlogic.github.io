var intrepidControllers = angular.module("intrepidControllers", []);

intrepidControllers.controller("NavigationCtrl", ["$scope", "$location", function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);

intrepidControllers.controller("AppListCtrl", ["$scope", "$http", function ($scope, $http) {
    $http.get("../json/apps.json").success(function (data) {
        $scope.title = "test";
        $scope.apps = data;
    });
}]);

intrepidControllers.controller("FAQCtrl", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
    $http.get("../json/faq/" + $routeParams.app + ".json").success(function (data) {
        $scope.data = data;
    });
}]);