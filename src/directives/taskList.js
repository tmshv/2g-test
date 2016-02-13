export default function (app) {
    app.directive('taskList', function () {
        return {
            restrict: 'E',
            templateUrl: '/views/task-list.html',
            scope: {
                tasks: '='
            },
            link: function(scope, element){

            }
        }
    });
};