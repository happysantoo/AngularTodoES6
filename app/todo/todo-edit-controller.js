/**
 * Created by e1009811 on 5/1/2014.
 */
var BaseEditController = $traceurRuntime.assertObject(System.get("../../../app/shared/base-edit-controller")).default;

class TodoEditController extends BaseEditController {
}

angular.module('app.todo')
    .controller('TodoEditController', ['$routeParams', '$location', 'ResourceService',
        ($routeParams, $location, ResourceService) => new TodoEditController("todos", $routeParams, $location, ResourceService)]);
