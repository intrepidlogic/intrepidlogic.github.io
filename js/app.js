var intrepidApp = angular.module("intrepidApp", [
    "ngRoute",
    "rowFilters",
    "intrepidControllers",
    "mgcrea.ngStrap.navbar"
]);

intrepidApp.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider.when("/app-list", {
            title: "All Applications",
            templateUrl: "partials/app-list.html",
            controller: "AppListCtrl"
        }).when("/faq/:app", {
            title: "FAQ",
            templateUrl: "partials/faq.html",
            controller: "FAQCtrl"
        }).otherwise({
            redirectTo: "/app-list"
        });
    }
]);

intrepidApp.run(["$location", "$rootScope", function($location, $rootScope) {
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        ga('send', 'pageview', { page: "#" + $location.path() });
    });
}]);
