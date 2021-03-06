/**
 *agave.sdk
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function SystemLoginConfig() {
    this.auth = undefined
    this.host = undefined
    this.port = undefined
    this.protocol = undefined

}

//Make instanceof work


/**
 *The default authentication credential used for this system.
 *
 * @return: SystemAuthConfig
 */
SystemLoginConfig.prototype.getAuth = function () {

    return this.auth;
}


SystemLoginConfig.prototype.setAuth = function (value) {
    this.auth = value;
}


/**
 *The hostname or ip address of the submission server
 *
 * @return: string
 */
SystemLoginConfig.prototype.getHost = function () {

    return this.host;
}


SystemLoginConfig.prototype.setHost = function (value) {
    this.host = value;
}


/**
 *The port number of the submission server.
 *
 * @return: int
 */
SystemLoginConfig.prototype.getPort = function () {

    return this.port;
}


SystemLoginConfig.prototype.setPort = function (value) {
    this.port = value;
}


/**
 *The protocol used to authenticate to the submission server.
 *
 * @return: SystemLoginProtocolTypeEnum
 */
SystemLoginConfig.prototype.getProtocol = function () {

    return this.protocol;
}


SystemLoginConfig.prototype.setProtocol = function (value) {
    this.protocol = value;
}
     





