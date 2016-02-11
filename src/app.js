import angular from 'angular';

var app = angular.module('app', []);

require('./controllers/AppController')(app);
require('./controllers/FormController')(app);
require('./directives/taskList')(app);
require('./directives/checkboxList')(app);
require('./directives/filterForm')(app);
require('./api/api')(app);