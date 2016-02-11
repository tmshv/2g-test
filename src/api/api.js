import APITasks from './APITasks';
import APIUser from './APIUser';

module.exports = function (app) {
    app.factory('api', function ($rootScope, $http) {

        const broadcast = (event, data) => {
            $rootScope.$broadcast(event, data);
        };

        const api = {};
        api.tasks = new APITasks($http, broadcast);
        api.user = new APIUser($http, broadcast);

        return api;
    });
};