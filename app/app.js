/**
 * Created by e1009811 on 5/1/2014.
 */
/*
import './shared/index';
import BaseController from './shared/base-controller';
import './shared/test-controller';
import './shared/resource-service-couchdb';
import './shared/autofocus-directive';
import './shared/resource-service-web-api';
import './todo/index';
import './todo/todo-list-controller';
import './todo/todo-new-controller';
import './todo/todo-show-controller';
import './todo/todo-edit-controller';
*/

angular.module('todoApp',['ngRoute', 'ngGrid', 'app.shared', 'app.todo'])
    .config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when('/todos/:id/edit', {
                    templateUrl: 'app/todo/todo-edit.html',
                    controller: 'TodoEditController',
                    controllerAs: "dc"
                })
                .when('/todos/new', {
                    templateUrl: 'app/todo/todo-new.html',
                    controller: 'TodoNewController',
                    controllerAs: "dc"
                })
                .when('/todos/:id', {
                    templateUrl: 'app/todo/todo-show.html',
                    controller: 'TodoShowController',
                    controllerAs: "dc"
                })
                .when('/todos', {
                    templateUrl: 'app/todo/todo-list.html',
                    controller: 'TodoListController',
                    controllerAs: "dc"
                })
        }]);