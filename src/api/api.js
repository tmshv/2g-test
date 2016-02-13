import APITasks from './APITasks';
import APIUser from './APIUser';
import config from '../config';

export default function (app) {
    app.factory('api', function ($rootScope, $http) {
        const baseUrl = config.baseUrl;
        const broadcast = (event, data) => {
            $rootScope.$broadcast(event, data);
        };

        const api = {};
        api.tasks = new APITasks($http, broadcast, baseUrl);
        api.user = new APIUser($http, broadcast, baseUrl);

        return api;
    });
};