/**
 * Created by Bob on 5/5/2014.
 */
class BaseController {

    //just a comment now one more add to display gulp watch and more and more and more

    constructor(resource, $routeParams, $location, ResourceService) {
        "use strict";
        this.resource = resource;
        this.routeParams = $routeParams;
        this.location = $location;
        this.service = ResourceService;
        this.resetFocus = true;
        this.viewModel = {};
    }

    getList() {
        "use strict";
        this.resetFocus = false;
        this.service.resource
            .query({resource: this.resource})
            .$promise.then(
            //success
            (result) => this.onGetListSuccess(result),
            //error
            (result) => this.onGetListError(result)
        );
    }

    onGetListSuccess(result) {
        "use strict";
        this.messages = 'Success'
        this.viewModel = result;
        this.resetFocus = true;
    }

    onGetListError(result) {
        "use strict";
        this.messages = 'Error'
    }

    create(item) {
        "use strict";
        this.resetFocus = false;
        this.service.resource
            .create({resource: this.resource}, item)
            .$promise.then(
            //success
            (item) => this.onCreateSuccess(item),
            //error
            (item) => this.onCreateError(item)
        );
    }

    onCreateSuccess(item) {
        "use strict";
        this.messages = 'Success'
        this.location.path(this.resource);
    }

    onCreateError(item) {
        "use strict";
        this.messages = 'Error'
        this.resetFocus = true;
    }

    getItem(id) {
        "use strict";
        this.resetFocus = false;
        this.service.resource
            .get({resource: this.resource}, { id: id })
            .$promise.then(
            //success
            (result) => this.onGetItemSuccess(result),
            //error
            (result) => this.onGetItemError(result)
        );
    }

    onGetItemSuccess(result) {
        "use strict";
        this.viewModel = result;
        this.resetFocus = true;
    }

    onGetItemError(result) {
        "use strict";
        this.messages = 'Error'
    }

    updateItem(item) {
        "use strict";
        this.service.resource
            .update({resource: this.resource}, item)
            .$promise.then(
            //success
            (result) => this.onUpdateItemSuccess(result),
            //error
            (result) => this.onUpdateItemError(result)
        );
    }

    onUpdateItemSuccess(result) {
        "use strict";
        this.messages = 'Success';
        var newPath = this.resource + "/" + result.id;
        this.location.path(newPath);
    }

    onUpdateItemError(result) {
        "use strict";
        this.messages = 'Error'
    }

    deleteItem(item) {
        "use strict";
        this.service.resource
            .delete({resource: this.resource}, item)
            .$promise.then(
            //success
            (result) => this.onDeleteItemSuccess(result),
            //error
            (result) => this.onDeleteItemError(result)
        );
    }

    onDeleteItemSuccess(result) {
        "use strict";
        this.messages = 'Success'
        this.getList();
    }

    onDeleteItemError(result) {
        "use strict";
        this.messages = 'Error'
    }
}

export default BaseController;