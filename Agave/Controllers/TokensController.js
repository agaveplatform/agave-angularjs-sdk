/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('TokensController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', function ($q, Configuration, HttpClient, APIHelper) {
    return {

        /**
         * Refresh an existing auth token using the provided client application credentials
         * and the existing refresh token.
         * @see https://tools.ietf.org/html/rfc6749#section-6
         *
         * @param {Client} client Required parameter: the client application whose key and secret will be used to refresh the token
         * @param {string} refreshToken Required parameter: the refresh token to use to get a new access token.
         * @return {promise<RefreshTokenResponse>}
         */
        refreshToken: function (client, refreshToken) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/token';

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            var form = {
                grant_type: "refresh_token",
                refresh_token: refreshToken,
                scope: "PRODUCTION"
            };

            //prepare headers
            var headers = {

            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'POST',
                queryUrl: queryUrl,
                form: form,
                headers: headers,
                username: client.consumerKey,
                password: client.consumerSecret
            };

            var response = new HttpClient(config);

            //Create promise to return
            var deferred = $q.defer();

            //process response
            response.then(function (result) {
                deferred.resolve(result.body);
            }, function (result) {
                deferred.reject(APIHelper.appendContext({
                    errorMessage: 'HTTP Response Not OK',
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deferred.promise;
        },

        /**
         * Fetch a new token using the Resource Owner Password grant.
         * @see https://tools.ietf.org/html/rfc6749#section-4.3
         *
         * @param {Client} client    Required parameter: The client with valid key and secret to use in the request
         * @param {string} username  Required parameter: The username for whom the token will be generated
         * @param {string} password  Required parameter: The password of the user for whom the token will be generated
         * @return {promise<AuthTokenResponse>}
         */
        getResourceOwnerPasswordGrantTypeToken: function (client, username, password) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/token';

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {

            };

            var form = {
                grant_type: "password",
                username: username,
                password: password,
                scope: "PRODUCTION"
            };

            //Remove null values
            APIHelper.cleanObject(tokenRefreshRequest);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'POST',
                queryUrl: queryUrl,
                headers: headers,
                username: client.consumerKey,
                password: client.consumerSecret,
                form: form
            };

            var response = new HttpClient(config);

            //Create promise to return
            var deferred = $q.defer();

            //process response
            response.then(function (result) {
                deferred.resolve(result.body);
            }, function (result) {
                //Error handling for custom HTTP status codes
                if (result.code === 400) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'Raised if the the user credentials are missing',
                        errorCode: 400,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 403) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'Failed to authenticate the user',
                        errorCode: 403,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 404) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'The token service cannot be found',
                        errorCode: 404,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 500) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'The service was unable to generate a new token',
                        errorCode: 500,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                }

                deferred.reject(APIHelper.appendContext({
                    errorMessage: 'HTTP Response Not OK',
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deferred.promise;
        },

        /**
         * Fetch a new token using the Resource Owner Password grant.
         * @see http://tools.ietf.org/html/rfc6749#section-4.4
         *
         * @param {Client} client    Required parameter: The client with valid key and secret to use in the request
         * @param {string} username  Required parameter: The username for whom the token will be generated
         * @param {string} password  Required parameter: The password of the user for whom the token will be generated
         * @return {promise<AuthTokenResponse>}
         */
        getClientCredentialsGrantTypeToken: function (client, username, password) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/token';

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                
            };

            var form = {
                grant_type: "client_credentials",
                username: username,
                password: password,
                scope: "PRODUCTION"
            };

            //Remove null values
            APIHelper.cleanObject(tokenRefreshRequest);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'POST',
                queryUrl: queryUrl,
                headers: headers,
                username: client.consumerKey,
                password: client.consumerSecret,
                form: form
            };

            var response = new HttpClient(config);

            //Create promise to return
            var deferred = $q.defer();

            //process response
            response.then(function (result) {
                deferred.resolve(result.body);
            }, function (result) {
                //Error handling for custom HTTP status codes
                if (result.code === 400) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'Raised if the the user credentials are missing',
                        errorCode: 400,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 403) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'Failed to authenticate the user',
                        errorCode: 403,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 404) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'The token service cannot be found',
                        errorCode: 404,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 500) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'The service was unable to generate a new token',
                        errorCode: 500,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                }

                deferred.reject(APIHelper.appendContext({
                    errorMessage: 'HTTP Response Not OK',
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deferred.promise;
        },


    };
}]);
