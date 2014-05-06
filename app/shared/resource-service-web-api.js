/**
 * Created by Bob on 5/4/2014.
 */

class ResourceService {
    constructor($resource) {
        "use strict";
        this.resource =
            $resource('http://localhost:59263/api/:resource/:id',
                { id: '@id' },
                {
                    update: { method: 'PUT' }
                }
            );
    }
}

export default ResourceService;

angular.module('app.shared').factory('ResourceService', ['$resource', ($resource) => new ResourceService($resource)]);