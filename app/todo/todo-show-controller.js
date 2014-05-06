/**
 * Created by e1009811 on 5/1/2014.
 */
var BaseShowController = $traceurRuntime.assertObject(System.get("../../../app/shared/base-show-controller")).default;

class TodoShowController extends BaseShowController {
}

angular.module('app.todo')
    .controller('TodoShowController', ['$routeParams', '$location', 'ResourceService',
        ($routeParams, $location, ResourceService) => new TodoShowController("todos", $routeParams, $location, ResourceService)]);
