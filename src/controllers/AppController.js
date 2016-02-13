import config from '../config';

export default function (app) {
    app.controller('AppController', function ($rootScope, $scope, $filter, api) {
        $scope.authorized = false;
        $scope.userName = null;
        $scope.userId = null;

        const dateFormat = $filter('date');
        const datePattern = 'yyyy-MM-dd';

        function getTasks(filter){
            const status = filter.status.join(',') || null;
            const noDate = filter.noDate ? 1 : null;
            const sortType = filter.ascSort ? 'ASC' : 'DESC';
            const sort = filter.sort;
            const author = filter.author ? filter.author : null;
            const dateFrom = filter.dateFrom ? dateFormat(filter.dateFrom, datePattern) : null;
            const dateTo = filter.dateTo ? dateFormat(filter.dateTo, datePattern) : null;

            const options = {
                sort: sort,
                sortType: sortType,
                author: author,
                no_date:noDate,
                status: status,
                dateFrom: dateFrom,
                dateTo: dateTo
                //limit: config.pages,
                //skip: 0
            };

            $scope.tasksUrl = api.tasks.buildUrl(options);
            api.tasks.getTasks(options)
                .then(tasks => {
                    $scope.tasks = tasks.data;
                    console.log(tasks);
                });
        }

        $scope.logout = () => {
            $scope.authorized = false;
            $scope.userId = null;
            $scope.userName = null;

            localStorage.removeItem('user');
        };

        $scope.login = () => {
            $scope.userId = api.user.profile.id;
            $scope.userName = api.user.profile.name;
            $scope.authorized = true;
        };

        $scope.filterUpdate = (filter) => {
            if($scope.userId) {
                getTasks(filter);
            }
        };

        $scope.$on('user', $scope.login);
        if(api.user.profile) $scope.login();
    });
};
