/**
 *agave.sdk
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function SystemCloneAction() {
    this.id = undefined

}

//Make instanceof work
SystemCloneAction.prototype = new SystemAction();

SystemCloneAction.prototype.constructor = SystemCloneAction;


/**
 *Unique name for new system
 *
 * @return: string|null
 */
SystemCloneAction.prototype.getId = function () {

    return this.id;
}


SystemCloneAction.prototype.setId = function (value) {
    this.id = value;
}
     





