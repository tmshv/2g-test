export default function (app) {
    app.directive('checkboxList', function ($parse) {
        return {
            restrict: 'E',
            templateUrl: '/views/checkbox-list.html',
            scope: {
                values: '=',
                model: '=ngModel'
            },
            compile: function(element, attrs){
                return function(scope) {
                    scope.toggle = (i) => {
                        var index = scope.selection.indexOf(i);
                        if (index > -1) scope.selection.splice(index, 1);
                        else scope.selection.push(i);
                    };

                    scope.selection = scope.model;
                };
            }
        };
    });
};
