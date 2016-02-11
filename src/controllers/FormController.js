module.exports = function (app) {
    app.controller('FormController', function ($scope, api) {
        $scope.email = 'task@test.api';
        $scope.password = 'qwerty';
        $scope.token = '123456789';

        $scope.submit = () => {
            api.user.login($scope.email, $scope.password, $scope.token)
        };
    });
};
