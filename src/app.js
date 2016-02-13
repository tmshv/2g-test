import api from './api/api';
import AppController from './controllers/AppController';
import FormController from './controllers/FormController';
import taskList from './directives/taskList';
import checkboxList from './directives/checkboxList';
import filterForm from './directives/filterForm';

const app = angular.module('app', []);
[AppController, FormController, taskList, checkboxList, filterForm, api].forEach(i => i(app));
