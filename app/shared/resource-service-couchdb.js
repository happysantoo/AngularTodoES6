/**
 * Created by e1009811 on 5/1/2014.
 */

class ResourceService {
    constructor($resource) {
        "use strict";
        this.resource =
            //http://127.0.0.1:5984/todos/_design/api/_list/all/default
            $resource(':protocol//:server/:resource/:doc_id/:path1/:path2/:path3/:path4',
                { protocol: 'http:', server: 'localhost:5984' },
                {
                    create: {
                        method: 'POST'
                    },
                    update: {
                        method: 'PUT',
                        params: { doc_id: '@id' }
                    },
                    delete: {
                        method: 'DELETE',
                        params: { doc_id: '@id', rev: '@_rev' }
                    },
                    query: {
                        method: 'GET', isArray: true,
                        params: {
                            doc_id: '_design',
                            path1: 'api',
                            path2: '_list',
                            path3: 'all',
                            path4: 'default'
                        }
                    },
                    get: {
                        method: 'GET',
                        params: {
                            doc_id: '_design',
                            path1: 'api',
                            path2: '_show',
                            path3: 'detail',
                            path4: '@id'
                        }
                    }
                }
            );
    }
}

angular.module('app.shared').factory('ResourceService', ['$resource', ($resource) => new ResourceService($resource)]);

/*
 Create "_design/api" document in database

 curl -X PUT http://127.0.0.1:5984/todos
 curl -X PUT http://127.0.0.1:5984/todos/_design/api --data-binary @mydesign.json

 {
 "_id": "_design/api",
 "lists": {
 "all": "function(head, req) { var values = []; while (row = getRow()) { values.push(row.value); } return JSON.stringify(values); }"
 },
 "shows": {
 "detail": "function(doc, req) { var myDoc = JSON.parse(JSON.stringify( doc )); delete myDoc['_revisions']; myDoc.id = myDoc._id; return { 'json': myDoc }; }"
 },
 "views": {
 "default": {
 "map": "function (doc){ var myDoc = JSON.parse(JSON.stringify( doc )); myDoc.id = myDoc._id; emit(myDoc._id, myDoc); }"
 }
 }
 }
 */