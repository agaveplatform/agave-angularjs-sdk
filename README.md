Agave
=================
This API SDK was automatically generated by APIMATIC BETA v2.0

How To Configure:
=================
The generated code might need to be configured with your API credentials. To do that,
open the file "Configuration.js" and edit it's contents.

How To Build:
=============
The generated code relies on AngularJS framework being available .

How To Use:
===========
The following shows how import the Services and use:

1) Add the folder 'Agave' into your to your scripts folder e.g scripts.

2) Import the reference to these files inside the appropriate html file such as index.html.
   The configuration.js file should be imported before the other files.


    <!-- Helper files -->
    <script src="scripts/Agave/Configuration.js"></script>
    <script src="scripts/Agave/APIHelper.js"></script>
    <script src="scripts/Agave/Http/Client/HttpContext.js"></script>
    <script src="scripts/Agave/Http/Client/RequestClient.js"></script>
    <script src="scripts/Agave/Http/Request/HttpRequest.js"></script>
    <script src="scripts/Agave/Http/Response/HttpResponse.js"></script>

    <!-- API Services -->
    <script src="scripts/Agave/Services/ClientsService.js"></script>
    <script src="scripts/Agave/Services/AppsService.js"></script>
    <script src="scripts/Agave/Services/FilesService.js"></script>
    <script src="scripts/Agave/Services/JobsService.js"></script>
    <script src="scripts/Agave/Services/MetaService.js"></script>
    <script src="scripts/Agave/Services/MonitorsService.js"></script>
    <script src="scripts/Agave/Services/NotificationsService.js"></script>
    <script src="scripts/Agave/Services/PostitsService.js"></script>
    <script src="scripts/Agave/Services/ProfilesService.js"></script>
    <script src="scripts/Agave/Services/SystemsService.js"></script>
    <script src="scripts/Agave/Services/TransformsService.js"></script>

    <!-- ENUM Models -->
    <script src="scripts/Agave/Models/JobStatusTypeEnum.js"></script>
    <script src="scripts/Agave/Models/MonitorCheckResultTypeEnum.js"></script>
    <script src="scripts/Agave/Models/TermEnum.js"></script>
    <script src="scripts/Agave/Models/Term3Enum.js"></script>
    <script src="scripts/Agave/Models/SystemCredentialTypeEnum.js"></script>
    <script src="scripts/Agave/Models/ClientSubscriptionTierEnum.js"></script>
    <script src="scripts/Agave/Models/SystemExecutionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/ApplicationParallelismEnum.js"></script>
    <script src="scripts/Agave/Models/PermissionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/FileManagementActionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/JobActionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/PostItRequestMethodEnum.js"></script>
    <script src="scripts/Agave/Models/GenderEnum.js"></script>
    <script src="scripts/Agave/Models/SystemLoginProtocolTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemStorageProtocolTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemTypeEnum.js"></script>
    <script src="scripts/Agave/Models/AuthenticationTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemStatusTypeEnum.js"></script>
    <script src="scripts/Agave/Models/ApplicationExecutionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/BatchSchedulerTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemRoleTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemLoginAuthenticationTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemAuthConfigServerProtocolTypeEnum.js"></script>
    <script src="scripts/Agave/Models/SystemActionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/ApplicationParameterTypeEnum.js"></script>
    <script src="scripts/Agave/Models/ApplicationActionTypeEnum.js"></script>
    <script src="scripts/Agave/Models/FilesStatusTypeEnum.js"></script>
    <script src="scripts/Agave/Models/ClientAPISubscriptionStatusTypeEnum.js"></script>
    <script src="scripts/Agave/Models/FileTypeEnum.js"></script>

    <!-- Models -->
    <script src="scripts/Agave/Models/ApplicationParameterStringValue.js"></script>
    <script src="scripts/Agave/Models/ApplicationParameterBooleanValue.js"></script>
    <script src="scripts/Agave/Models/ApplicationParameterNumericValue.js"></script>
    <script src="scripts/Agave/Models/ApplicationParameterFlagValue.js"></script>
    <script src="scripts/Agave/Models/Client.js"></script>
    <script src="scripts/Agave/Models/ClientRequest.js"></script>
    <script src="scripts/Agave/Models/ClientAPISubscription.js"></script>
    <script src="scripts/Agave/Models/ClientSubscriptionRequest.js"></script>
    <script src="scripts/Agave/Models/SingleClientResponse.js"></script>
    <script src="scripts/Agave/Models/MultipleClientResponse.js"></script>
    <script src="scripts/Agave/Models/EmptyClientResponse.js"></script>
    <script src="scripts/Agave/Models/MultipleSubscriptionResponse.js"></script>
    <script src="scripts/Agave/Models/SingleSubscriptionResponse.js"></script>
    <script src="scripts/Agave/Models/EmptySubscriptionResponse.js"></script>
    <script src="scripts/Agave/Models/ACL.js"></script>
    <script src="scripts/Agave/Models/ApplicationSummary.js"></script>
    <script src="scripts/Agave/Models/Application.js"></script>
    <script src="scripts/Agave/Models/ApplicationInput.js"></script>
    <script src="scripts/Agave/Models/ApplicationArgumentDetails.js"></script>
    <script src="scripts/Agave/Models/ApplicationArgumentValue.js"></script>
    <script src="scripts/Agave/Models/AbstractApplicationParameterValue.js"></script>
    <script src="scripts/Agave/Models/AgaveResponse.js"></script>
    <script src="scripts/Agave/Models/EmptyApplicationResponse.js"></script>
    <script src="scripts/Agave/Models/MultipleApplicationResponse.js"></script>
    <script src="scripts/Agave/Models/EmptyRemoteFileResponse.js"></script>
    <script src="scripts/Agave/Models/FileHistoryResponse.js"></script>
    <script src="scripts/Agave/Models/MultipleRemoteFileResponse.js"></script>
    <script src="scripts/Agave/Models/FileInfo.js"></script>
    <script src="scripts/Agave/Models/SingleRemoteFileResponse.js"></script>
    <script src="scripts/Agave/Models/MultiplePermissionResponse.js"></script>
    <script src="scripts/Agave/Models/PermissionRequest.js"></script>
    <script src="scripts/Agave/Models/PermissionStanza.js"></script>
    <script src="scripts/Agave/Models/FilePermissionRequest.js"></script>
    <script src="scripts/Agave/Models/FileAction.js"></script>
    <script src="scripts/Agave/Models/Job.js"></script>
    <script src="scripts/Agave/Models/JobRequest.js"></script>
    <script src="scripts/Agave/Models/JobHistory.js"></script>
    <script src="scripts/Agave/Models/JobSubmission.js"></script>
    <script src="scripts/Agave/Models/JobParameters.js"></script>
    <script src="scripts/Agave/Models/JobInputs.js"></script>
    <script src="scripts/Agave/Models/JobSummary.js"></script>
    <script src="scripts/Agave/Models/JobStatusSummary.js"></script>
    <script src="scripts/Agave/Models/Notification.js"></script>
    <script src="scripts/Agave/Models/JobAction.js"></script>
    <script src="scripts/Agave/Models/Metadata.js"></script>
    <script src="scripts/Agave/Models/MetadataSchema.js"></script>
    <script src="scripts/Agave/Models/MonitoringTaskSummary.js"></script>
    <script src="scripts/Agave/Models/MonitoringTaskCheck.js"></script>
    <script src="scripts/Agave/Models/NotificationRequest.js"></script>
    <script src="scripts/Agave/Models/NotificationResponse.js"></script>
    <script src="scripts/Agave/Models/PostIt.js"></script>
    <script src="scripts/Agave/Models/PostItRequest.js"></script>
    <script src="scripts/Agave/Models/SinglePostItResponse.js"></script>
    <script src="scripts/Agave/Models/InternalUser.js"></script>
    <script src="scripts/Agave/Models/ProfileRequest.js"></script>
    <script src="scripts/Agave/Models/Profile.js"></script>
    <script src="scripts/Agave/Models/SingleInternalUserResponse.js"></script>
    <script src="scripts/Agave/Models/SingleProfileResponse.js"></script>
    <script src="scripts/Agave/Models/EmptySystemResponse.js"></script>
    <script src="scripts/Agave/Models/MultipleSystemResponse.js"></script>
    <script src="scripts/Agave/Models/SingleSystemResponse.js"></script>
    <script src="scripts/Agave/Models/BatchQueue.js"></script>
    <script src="scripts/Agave/Models/SystemLoginConfig.js"></script>
    <script src="scripts/Agave/Models/SystemStorageConfig.js"></script>
    <script src="scripts/Agave/Models/SystemCredential.js"></script>
    <script src="scripts/Agave/Models/SystemSummary.js"></script>
    <script src="scripts/Agave/Models/System.js"></script>
    <script src="scripts/Agave/Models/SystemRequest.js"></script>
    <script src="scripts/Agave/Models/ExecutionSystem.js"></script>
    <script src="scripts/Agave/Models/SystemCredentialsResponse.js"></script>
    <script src="scripts/Agave/Models/MultipleSystemRoleResponse.js"></script>
    <script src="scripts/Agave/Models/SystemAuthConfig.js"></script>
    <script src="scripts/Agave/Models/SystemAuthConfigServer.js"></script>
    <script src="scripts/Agave/Models/SystemAction.js"></script>
    <script src="scripts/Agave/Models/MultipleTransformResponse.js"></script>
    <script src="scripts/Agave/Models/SingleTransformResponse.js"></script>
    <script src="scripts/Agave/Models/Transform.js"></script>
    <script src="scripts/Agave/Models/TransformRequest.js"></script>
    <script src="scripts/Agave/Models/ApplicationArgumentDataSemantics.js"></script>
    <script src="scripts/Agave/Models/ApplicationArgumentSemantics.js"></script>
    <script src="scripts/Agave/Models/ApplicationOutput.js"></script>
    <script src="scripts/Agave/Models/ApplicationParameter.js"></script>
    <script src="scripts/Agave/Models/ApplicationArgument.js"></script>
    <script src="scripts/Agave/Models/ApplicationParameterEnumValueItem.js"></script>
    <script src="scripts/Agave/Models/SystemRoleRequest.js"></script>
    <script src="scripts/Agave/Models/TransferTaskProgressSummary.js"></script>
    <script src="scripts/Agave/Models/TransformEncoder.js"></script>
    <script src="scripts/Agave/Models/FileMkdirAction.js"></script>
    <script src="scripts/Agave/Models/FileRenameAction.js"></script>
    <script src="scripts/Agave/Models/FileMoveAction.js"></script>
    <script src="scripts/Agave/Models/FileCopyAction.js"></script>
    <script src="scripts/Agave/Models/TransformDecoder.js"></script>
    <script src="scripts/Agave/Models/AgaveNullResponse.js"></script>
    <script src="scripts/Agave/Models/ApplicationAction.js"></script>
    <script src="scripts/Agave/Models/ApplicationPublishAction.js"></script>
    <script src="scripts/Agave/Models/ApplicationCloneAction.js"></script>
    <script src="scripts/Agave/Models/ApplicationEnableAction.js"></script>
    <script src="scripts/Agave/Models/ApplicationDisableAction.js"></script>
    <script src="scripts/Agave/Models/ApplicationUnpublishAction.js"></script>
    <script src="scripts/Agave/Models/JobStopAction.js"></script>
    <script src="scripts/Agave/Models/JobResubmitAction.js"></script>
    <script src="scripts/Agave/Models/MonitoringTaskDetails.js"></script>
    <script src="scripts/Agave/Models/StorageSystem.js"></script>
    <script src="scripts/Agave/Models/FilePermission.js"></script>
    <script src="scripts/Agave/Models/Permission.js"></script>
    <script src="scripts/Agave/Models/FilePermissionStanza.js"></script>
    <script src="scripts/Agave/Models/SystemRole.js"></script>
    <script src="scripts/Agave/Models/SystemPublishAction.js"></script>
    <script src="scripts/Agave/Models/SystemCloneAction.js"></script>
    <script src="scripts/Agave/Models/HistoryEvent.js"></script>
    <script src="scripts/Agave/Models/FileImportRequest.js"></script>

3) Inject the module into your main module e.g:

    var myApp = angular.module('myApp', ['Agave'])

4) To use a generated factory in your Service, injection could be as follows :

    myApp.Service('PageCtrl',function($scope,ClientsService) {

    }
