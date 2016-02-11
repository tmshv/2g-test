module.exports = function (app) {
    app.directive('filterForm', function () {
        return {
            restrict: 'E',
            templateUrl: '/views/filter-form.html',
            scope: {
                update: '='
            },
            link: function(scope, element, attrs){
                scope.statusEnum = ['new', 'progress', 'done', 'check', 'date'];
                scope.sortEnum = ['id', 'date', 'updatedAt', 'status'];

                scope.options = {
                    author: '',
                    noDate: false,
                    sort: 'date',
                    ascSort: true,
                    status: [],
                    dateTo: '',
                    dateFrom: ''
                };

                scope.$watch('options', (value) => {
                    scope.update(value);
                }, true);

                scope.update(scope.options);
            }
        }
    });
};
