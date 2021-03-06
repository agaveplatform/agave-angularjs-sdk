/**
 *agave.sdk
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function JobRequest() {
    this.appId = undefined
    this.archive = true
    this.archivePath = undefined
    this.archiveSystem = undefined
    this.batchQueue = undefined
    this.inputs = undefined
    this.memoryPerNode = undefined
    this.name = undefined
    this.nodeCount = undefined
    this.notifications = undefined
    this.parameters = undefined
    this.processorsPerNode = undefined
    this.maxRunTime = undefined

}

//Make instanceof work


/**
 *The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run.
 *
 * @return: string
 */
JobRequest.prototype.getAppId = function () {

    return this.appId;
}


JobRequest.prototype.setAppId = function (value) {
    this.appId = value;
}


/**
 *Whether the output from this job should be archived. If true, all new files created by this application's execution will be archived to the archivePath in the user's default storage system.
 *
 * @return: bool
 */
JobRequest.prototype.getArchive = function () {

    return this.archive;
}


JobRequest.prototype.setArchive = function (value) {
    this.archive = value;
}


/**
 *The path of the archive folder for this job on the user's default storage sytem.
 *
 * @return: string|null
 */
JobRequest.prototype.getArchivePath = function () {

    return this.archivePath;
}


JobRequest.prototype.setArchivePath = function (value) {
    this.archivePath = value;
}


/**
 *The unique id of the storage system on which this job's output will be staged.
 *
 * @return: string|null
 */
JobRequest.prototype.getArchiveSystem = function () {

    return this.archiveSystem;
}


JobRequest.prototype.setArchiveSystem = function (value) {
    this.archiveSystem = value;
}


/**
 *The queue to which this job should be submitted. This is optional and only applies when the execution system has a batch scheduler.
 *
 * @return: string|null
 */
JobRequest.prototype.getBatchQueue = function () {

    return this.batchQueue;
}


JobRequest.prototype.setBatchQueue = function (value) {
    this.batchQueue = value;
}


/**
 *The application specific input files needed for this job. These vary from application to application and should be entered as multiple individual parameters in the form. Inputs may be given as relative paths in the user's default storage system or as URI. If a URI is given, the data will be staged in by the IO service and made avaialble to the application at run time.
 *
 * @return: array|null
 */
JobRequest.prototype.getInputs = function () {

    return this.inputs;
}


JobRequest.prototype.setInputs = function (value) {
    this.inputs = value;
}


/**
 *The requested memory for this application to run given in GB.
 *
 * @return: int|null
 */
JobRequest.prototype.getMemoryPerNode = function () {

    return this.memoryPerNode;
}


JobRequest.prototype.setMemoryPerNode = function (value) {
    this.memoryPerNode = value;
}


/**
 *The name of the job.
 *
 * @return: string
 */
JobRequest.prototype.getName = function () {

    return this.name;
}


JobRequest.prototype.setName = function (value) {
    this.name = value;
}


/**
 *The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
 *
 * @return: int|null
 */
JobRequest.prototype.getNodeCount = function () {

    return this.nodeCount;
}


JobRequest.prototype.setNodeCount = function (value) {
    this.nodeCount = value;
}


/**
 *An array of notifications you wish to receive.
 *
 * @return: array
 */
JobRequest.prototype.getNotifications = function () {

    return this.notifications;
}


JobRequest.prototype.setNotifications = function (value) {
    this.notifications = value;
}


/**
 *The application specific parameters needed for this job. These vary from application to application and should be entered as multiple individual parameters in the form. The actual dataType will be determined by the application description.
 *
 * @return: array|null
 */
JobRequest.prototype.getParameters = function () {

    return this.parameters;
}


JobRequest.prototype.setParameters = function (value) {
    this.parameters = value;
}


/**
 *The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
 *
 * @return: int|null
 */
JobRequest.prototype.getProcessorsPerNode = function () {

    return this.processorsPerNode;
}


JobRequest.prototype.setProcessorsPerNode = function (value) {
    this.processorsPerNode = value;
}


/**
 *The requested compute time needed for this application to complete given in HH:mm:ss format.
 *
 * @return: string|null
 */
JobRequest.prototype.getMaxRunTime = function () {

    return this.maxRunTime;
}


JobRequest.prototype.setMaxRunTime = function (value) {
    this.maxRunTime = value;
}
     





