/**
 * Created by Bob on 5/6/2014.
 */
var BaseController = $traceurRuntime.assertObject(System.get("../../../app/shared/base-controller")).default;

class BaseListController extends BaseController {

    constructor(resource, $routeParams, $location, ResourceService) {
        "use strict";
        super(resource, $routeParams, $location, ResourceService);
        this.getList();
    }
}

export default BaseListController;