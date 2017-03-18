ngDirectives['auth'] = function () {

    return {
        restrict: "EA",
        replace: false,
        controller: function ($rootScope, $scope, $location, $cookies, httpSvc, authService) {
            var _self = this;

            $scope.ctor = function () {
                this.auth();
            };

            $scope.toggle = function (show, parent) {
                $scope.show = !show;
            };

            $scope.login = function () {
                if (!this.credentials && !this.credentials.username && !this.credentials.password) {
                    return;
                }

                httpSvc.login(this.credentials).then(function (response) {
                    $rootScope.profile = authService.createProfile(response);
                    $scope.profile = $rootScope.profile;

                    if ($rootScope.profile && $rootScope.profile.id) {
                        $scope.toggle($scope.show);

                        if (authService.cameFrom) {
                            $location.path(httpSvc.cameFrom);
                        }

                        $location.path($scope.target);
                    }
                    return;

                });
            };

            $scope.logout = function () {
            }

            $scope.auth = function () {
                authService.getProfile().then(function (response) {
                    if (!response || !response.id) {
                        return;
                    }

                    $rootScope.profile = response;
                    $scope.profile = $rootScope.profile;

                    if (authService.cameFrom) {
                        $location.path(authService.cameFrom);
                    } else {
                        $location.path("/area");
                    }
                });
            }

            $scope.ctor();


            $rootScope.$on('closeModal', function (event, args) {
                $scope.toggle(_self.show);
            });

            $rootScope.$on('unauthorized', function (even, args) {
                $scope.toggle(_self.show);
                $location.path("/");
                return;
            });

        },
        scope: {
            target: "="
        },
        templateUrl: 'app/auth/auth.htm'
    };
};