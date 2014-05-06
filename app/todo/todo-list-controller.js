/**
 * Created by e1009811 on 5/1/2014.
 */
var BaseListController = $traceurRuntime.assertObject(System.get("../../../app/shared/base-list-controller")).default;

class TodoListController extends BaseListController {

    constructor(resource, $routeParams, $location, ResourceService) {
        "use strict";
        super(resource, $routeParams, $location, ResourceService);
        this.orderProp = 'id';
    }
}

export default TodoListController;

angular.module('app.todo')
    .controller('TodoListController', ['$routeParams', '$location', 'ResourceService',
        ($routeParams, $location, ResourceService) => new TodoListController("todos", $routeParams, $location, ResourceService)]);