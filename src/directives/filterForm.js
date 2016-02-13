import {parseDate} from '../utils/date';

export default function (app) {
    app.directive('filterForm', function () {
        return {
            restrict: 'E',
            templateUrl: '/views/filter-form.html',
            scope: {
                update: '='
            },
            link: function (scope, element, attrs) {
                scope.statusEnum = ['new', 'progress', 'done', 'check', 'date'];
                scope.sortEnum = ['id', 'date', 'updatedAt', 'status'];

                scope.dateFrom = '';
                scope.dateTo = '';

                scope.options = {
                    author: '',
                    noDate: false,
                    sort: 'date',
                    ascSort: true,
                    status: [],
                    dateTo: null,
                    dateFrom: null
                };

                scope.$watch('options', (value) => {
                    scope.update(value);
                }, true);

                scope.$watch('dateFrom', (value) => {
                    scope.options.dateFrom = parseDate(value);
                });

                scope.$watch('dateTo', (value) => {
                    scope.options.dateTo = parseDate(value);
                });

                scope.update(scope.options);
            }
        }
    });
};
