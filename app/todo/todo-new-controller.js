/**
 * Created by e1009811 on 5/1/2014.
 */
var BaseNewController = $traceurRuntime.assertObject(System.get("../../../app/shared/base-new-controller")).default;

class TodoNewController extends BaseNewController {
}

angular.module('app.todo')
    .controller('TodoNewController', ['$routeParams', '$location', 'ResourceService',
        ($routeParams, $location, ResourceService) => new TodoNewController("todos", $routeParams, $location, ResourceService)]);
