import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import DebugLogModal from './DebugLogModal.component';

export default {
  component: DebugLogModal,
  title: 'DebugLogModal',
};

const testLog = `Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Signal/1.40.1 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36 node/12.18.3 env/production
INFO  2021-03-11T13:50:21.648Z app ready
INFO  2021-03-11T13:50:21.648Z starting version 1.40.1
INFO  2021-03-11T13:50:21.679Z media access status not-determined not-determined
INFO  2021-03-11T13:50:21.694Z updateSchema:
  Current user_version: 23;
  Most recent db schema: 23;
  SQLite version: 3.33.0;
  SQLCipher version: 4.4.2 community;
  (deprecated) schema_version: 113;

INFO  2021-03-11T13:50:21.724Z Initializing BrowserWindow config: {"show":true,"width":1920,"height":1055,"minWidth":680,"minHeight":550,"autoHideMenuBar":false,"titleBarStyle":"hidden","backgroundColor":"#3a76f0","webPreferences":{"nodeIntegration":false,"nodeIntegrationInWorker":false,"contextIsolation":false,"enableRemoteModule":true,"preload":"[REDACTED]/app.asar/preload.js","nativeWindowOpen":true,"spellcheck":true,"backgroundThrottling":false},"icon":"[REDACTED]/app.asar/build/icons/png/512x512.png","x":-1920,"y":25}
INFO  2021-03-11T13:50:21.778Z spellcheck: user locale: en-US
INFO  2021-03-11T13:50:21.778Z spellcheck: available spellchecker languages:  ["af","bg","ca","cs","cy","da","de","el","en-AU","en-CA","en-GB","en-GB-oxendict","en-US","es","es-419","es-AR","es-ES","es-MX","es-US","et","fa","fo","fr","he","hi","hr","hu","hy","id","it","ko","lt","lv","nb","nl","pl","pt-BR","pt-PT","ro","ru","sh","sk","sl","sq","sr","sv","ta","tg","tr","uk","vi"]
INFO  2021-03-11T13:50:21.778Z spellcheck: setting languages to:  ["en-US"]
INFO  2021-03-11T13:50:21.790Z Begin ensuring permissions
INFO  2021-03-11T13:50:21.901Z Ensuring file permissions for 2 files
INFO  2021-03-11T13:50:21.903Z Finish ensuring permissions in 113ms
INFO  2021-03-11T13:50:22.883Z x-attr dependency did not load successfully
INFO  2021-03-11T13:50:22.912Z preload complete
INFO  2021-03-11T13:50:23.060Z pre-main prep time: 1 ms
INFO  2021-03-11T13:50:23.128Z background page reloaded
INFO  2021-03-11T13:50:23.128Z environment: production
INFO  2021-03-11T13:50:23.166Z SQL channel job 1 (getItemById) succeeded in 37ms
INFO  2021-03-11T13:50:23.166Z Storage fetch
INFO  2021-03-11T13:50:23.263Z SQL channel job 2 (getAllItems) succeeded in 97ms
INFO  2021-03-11T13:50:23.305Z SQL channel job 3 (createOrUpdateItem) succeeded in 40ms
INFO  2021-03-11T13:50:23.313Z Starting background data migration. Target version: 10
INFO  2021-03-11T13:50:23.315Z GET https://textsecure-service.whispersystems.org/v1/config
INFO  2021-03-11T13:50:23.321Z ConversationController: starting initial fetch
INFO  2021-03-11T13:50:23.353Z ConversationController: done with initial fetch
INFO  2021-03-11T13:50:23.353Z SQL channel job 7 (getAllStickerPacks) succeeded in 31ms
INFO  2021-03-11T13:50:23.354Z SQL channel job 8 (getAllStickers) succeeded in 32ms
INFO  2021-03-11T13:50:23.354Z SQL channel job 9 (getRecentStickers) succeeded in 32ms
INFO  2021-03-11T13:50:23.354Z SQL channel job 13 (getAllIdentityKeys) succeeded in 32ms
INFO  2021-03-11T13:50:23.355Z SignalProtocolStore: Finished caching identityKeys data
INFO  2021-03-11T13:50:23.355Z SQL channel job 14 (getAllSessions) succeeded in 33ms
INFO  2021-03-11T13:50:23.355Z SignalProtocolStore: Finished caching sessions data
INFO  2021-03-11T13:50:23.355Z SQL channel job 12 (getItemById) succeeded in 33ms
INFO  2021-03-11T13:50:23.355Z SQL channel job 10 (getRecentEmojis) succeeded in 33ms
INFO  2021-03-11T13:50:23.356Z SQL channel job 11 (getItemById) succeeded in 34ms
INFO  2021-03-11T13:50:23.358Z SignalProtocolStore: Finished caching preKeys data
INFO  2021-03-11T13:50:23.359Z SignalProtocolStore: Finished caching signedPreKeys data
INFO  2021-03-11T13:50:23.359Z checkForConflicts: starting...
INFO  2021-03-11T13:50:23.359Z checkForConflicts: complete!
INFO  2021-03-11T13:50:23.386Z Cleanup: starting...
INFO  2021-03-11T13:50:23.386Z Initializing network observer every 5000ms
INFO  2021-03-11T13:50:23.386Z Build expires:  2021-05-23T23:05:47.000Z
INFO  2021-03-11T13:50:23.388Z Cleanup: Found 0 messages for cleanup
INFO  2021-03-11T13:50:23.388Z Cleanup: complete
INFO  2021-03-11T13:50:23.388Z listening for registration events
INFO  2021-03-11T13:50:23.390Z connect {"connectCount":0}
INFO  2021-03-11T13:50:23.390Z GET https://textsecure-service.whispersystems.org/v1/config
INFO  2021-03-11T13:50:23.391Z open inbox
INFO  2021-03-11T13:50:23.400Z next message expires 2021-03-15T19:24:07.645Z
INFO  2021-03-11T13:50:23.588Z GET https://textsecure-service.whispersystems.org/v1/config 200 Success
INFO  2021-03-11T13:50:23.644Z GET https://textsecure-service.whispersystems.org/v1/config 200 Success
INFO  2021-03-11T13:50:23.644Z Initializing socket and listening for messages
INFO  2021-03-11T13:50:23.646Z getAllFromCache
INFO  2021-03-11T13:50:23.646Z opening message socket https://textsecure-service.whispersystems.org
INFO  2021-03-11T13:50:23.648Z initializeGroupCredentialFetcher: starting...
INFO  2021-03-11T13:50:23.648Z maybeFetchCredentials: no new credentials needed
INFO  2021-03-11T13:50:23.649Z attachment_downloads/start: enabling
INFO  2021-03-11T13:50:23.650Z PUT https://textsecure-service.whispersystems.org/v1/devices/capabilities
INFO  2021-03-11T13:50:23.655Z SQL channel job 21 (createOrUpdateItem) succeeded in 11ms
INFO  2021-03-11T13:50:23.656Z getAllFromCache loaded 0 saved envelopes
INFO  2021-03-11T13:50:23.661Z PUT https://textsecure-service.whispersystems.org/v1/messages/[REDACTED]d7c
INFO  2021-03-11T13:50:23.699Z PUT https://textsecure-service.whispersystems.org/v1/messages/[REDACTED]d7c 200 Success
INFO  2021-03-11T13:50:23.700Z PUT https://textsecure-service.whispersystems.org/v1/devices/capabilities 204 Success
INFO  2021-03-11T13:50:23.700Z Start idle detector
INFO  2021-03-11T13:50:23.814Z websocket open
INFO  2021-03-11T13:50:23.818Z got request PUT /api/v1/queue/empty
INFO  2021-03-11T13:50:23.820Z MessageReceiver: finished processing messages after 'empty', now waiting for application
INFO  2021-03-11T13:50:23.820Z MessageReceiver: emitting 'empty' event
INFO  2021-03-11T13:50:23.821Z onEmpty: All outstanding database requests complete
INFO  2021-03-11T13:50:23.821Z Next signed key rotation scheduled for 2021-03-12T22:14:27.228Z
INFO  2021-03-11T13:50:23.821Z refreshSenderCertificate: Getting new certificate...
INFO  2021-03-11T13:50:23.821Z GET https://textsecure-service.whispersystems.org/v1/certificate/delivery
INFO  2021-03-11T13:50:23.822Z GET https://textsecure-service.whispersystems.org/v1/certificate/delivery?includeE164=false
INFO  2021-03-11T13:50:23.823Z macos/start: starting checks...
INFO  2021-03-11T13:50:23.823Z checkDownloadAndInstall: checking for update...
INFO  2021-03-11T13:50:23.853Z GET https://textsecure-service.whispersystems.org/v1/certificate/delivery 200 Success
INFO  2021-03-11T13:50:23.853Z GET https://textsecure-service.whispersystems.org/v1/certificate/delivery?includeE164=false 200 Success
INFO  2021-03-11T13:50:23.857Z Next sender certificate refresh scheduled for 2021-03-12T13:50:23.857Z
INFO  2021-03-11T13:50:23.857Z refreshOurProfile
INFO  2021-03-11T13:50:23.859Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]d7c/[REDACTED]0c1 (unauth)
INFO  2021-03-11T13:50:23.966Z checkForUpdates: 1.40.1 is not newer; no new update available
INFO  2021-03-11T13:50:24.010Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]d7c/[REDACTED]0c1 200 Success
INFO  2021-03-11T13:50:24.011Z Setting sealedSender to ENABLED for conversation [REDACTED]d7c ([REDACTED]095)
INFO  2021-03-11T13:50:24.013Z GET https://cdn.signal.org/[REDACTED]RlQ
INFO  2021-03-11T13:50:24.260Z GET https://cdn.signal.org/[REDACTED]RlQ 200 Success
INFO  2021-03-11T13:50:24.364Z App has finished loading in: 2785
INFO  2021-03-11T13:50:24.438Z SQL channel job 30 (createOrUpdateItem) succeeded in 72ms
INFO  2021-03-11T13:50:24.822Z Not updating notifications; notification status is noNotifications.
INFO  2021-03-11T13:50:25.715Z queueing envelope [REDACTED]d7c.1 1615470627559 (abe19837107e4e859043a58a4161b4a6)
INFO  2021-03-11T13:50:25.715Z message from [REDACTED]d7c.1 1615470627559 (abe19837107e4e859043a58a4161b4a6)
INFO  2021-03-11T13:50:25.716Z New remote ephemeral key
INFO  2021-03-11T13:50:25.722Z got keys sync message
INFO  2021-03-11T13:50:25.722Z onKeysSync: received keys
INFO  2021-03-11T13:50:26.224Z storageService.sync: starting...
INFO  2021-03-11T13:50:26.224Z storageService.fetchManifest
INFO  2021-03-11T13:50:26.224Z GET https://textsecure-service.whispersystems.org/v1/storage/auth
INFO  2021-03-11T13:50:26.251Z GET https://textsecure-service.whispersystems.org/v1/storage/auth 200 Success
INFO  2021-03-11T13:50:26.251Z GET https://storage.signal.org/v1/storage/manifest/version/94
INFO  2021-03-11T13:50:26.376Z GET https://storage.signal.org/v1/storage/manifest/version/94 204 Success
INFO  2021-03-11T13:50:26.376Z storageService.fetchManifest: nothing changed
INFO  2021-03-11T13:50:26.376Z storageService.sync: no new manifest
INFO  2021-03-11T13:50:29.758Z Removing notification
INFO  2021-03-11T13:50:30.763Z Not updating notifications; notification status is noNotifications.
INFO  2021-03-11T13:50:53.731Z Upgrade message schema (with index): {"done":true,"numProcessed":0,"fetchDuration":1,"upgradeDuration":0,"saveDuration":0,"totalDuration":1}
INFO  2021-03-11T13:50:53.731Z Background migration complete. Stopping idle detector.
INFO  2021-03-11T13:50:53.731Z Stop idle detector
INFO  2021-03-11T13:51:20.516Z Sending a keepalive message
INFO  2021-03-11T13:52:15.544Z Sending a keepalive message
INFO  2021-03-11T13:52:25.712Z getAllFromCache
INFO  2021-03-11T13:52:25.714Z getAllFromCache loaded 0 saved envelopes
INFO  2021-03-11T13:53:10.569Z Sending a keepalive message
INFO  2021-03-11T13:54:05.597Z Sending a keepalive message
INFO  2021-03-11T13:55:00.621Z Sending a keepalive message
INFO  2021-03-11T13:55:55.654Z Sending a keepalive message
INFO  2021-03-11T13:56:50.686Z Sending a keepalive message
INFO  2021-03-11T13:57:45.718Z Sending a keepalive message
INFO  2021-03-11T13:58:40.744Z Sending a keepalive message
INFO  2021-03-11T13:59:35.770Z Sending a keepalive message
INFO  2021-03-11T14:00:30.798Z Sending a keepalive message
INFO  2021-03-11T14:01:08.003Z Removing notification
INFO  2021-03-11T14:01:09.004Z Not updating notifications; notification status is noNotifications.
INFO  2021-03-11T14:01:09.421Z open inbox
INFO  2021-03-11T14:01:09.475Z waitForEmptyEventQueue: Waiting for event handler queue idle...
INFO  2021-03-11T14:01:09.484Z maybeFetchCredentials: no new credentials needed
INFO  2021-03-11T14:01:09.484Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]ae8/[REDACTED]9c4 (unauth)
INFO  2021-03-11T14:01:09.484Z Cycling agent for type -unauth
INFO  2021-03-11T14:01:09.485Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]33d/[REDACTED]d44 (unauth)
INFO  2021-03-11T14:01:09.485Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]fcb/[REDACTED]239 (unauth)
INFO  2021-03-11T14:01:09.486Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]9b0/[REDACTED]6eb (unauth)
INFO  2021-03-11T14:01:09.487Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]4f5/[REDACTED]500 (unauth)
INFO  2021-03-11T14:01:09.487Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]129/[REDACTED]5a7 (unauth)
INFO  2021-03-11T14:01:09.488Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]a70/[REDACTED]710 (unauth)
INFO  2021-03-11T14:01:09.488Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]d0f/[REDACTED]e15 (unauth)
INFO  2021-03-11T14:01:09.489Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]b61/[REDACTED]e88 (unauth)
INFO  2021-03-11T14:01:09.491Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]31b/[REDACTED]57f (unauth)
INFO  2021-03-11T14:01:09.492Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]7b4/[REDACTED]7f0 (unauth)
INFO  2021-03-11T14:01:09.493Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]953/[REDACTED]436 (unauth)
INFO  2021-03-11T14:01:09.493Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]2e8/[REDACTED]99d (unauth)
INFO  2021-03-11T14:01:09.494Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]f10/[REDACTED]355 (unauth)
INFO  2021-03-11T14:01:09.495Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]880/[REDACTED]b61 (unauth)
INFO  2021-03-11T14:01:09.495Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]02d/[REDACTED]ca1 (unauth)
INFO  2021-03-11T14:01:09.496Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]a1c/[REDACTED]205 (unauth)
INFO  2021-03-11T14:01:09.497Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]b1d/[REDACTED]9f2 (unauth)
INFO  2021-03-11T14:01:09.497Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]ae9/[REDACTED]d6f (unauth)
INFO  2021-03-11T14:01:09.498Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]5a0/[REDACTED]0b2 (unauth)
INFO  2021-03-11T14:01:09.498Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]654/[REDACTED]a0c (unauth)
INFO  2021-03-11T14:01:09.499Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]842/[REDACTED]425 (unauth)
INFO  2021-03-11T14:01:09.500Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]463/[REDACTED]da8 (unauth)
INFO  2021-03-11T14:01:09.500Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]96a/[REDACTED]e19 (unauth)
INFO  2021-03-11T14:01:09.501Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]d7c/[REDACTED]0c1 (unauth)
INFO  2021-03-11T14:01:09.501Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]401/[REDACTED]381 (unauth)
INFO  2021-03-11T14:01:09.502Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]130/[REDACTED]eec (unauth)
INFO  2021-03-11T14:01:09.503Z getGroupUpdates/groupv2([REDACTED]WyI=): Starting...
INFO  2021-03-11T14:01:09.503Z updateGroupViaState/groupv2([REDACTED]WyI=): Getting full group state...
INFO  2021-03-11T14:01:09.508Z GET https://storage.signal.org/v1/groups
INFO  2021-03-11T14:01:09.508Z Cycling agent for type -auth
INFO  2021-03-11T14:01:09.514Z SQL channel job 51 (getMessageMetricsForConversation) succeeded in 49ms
INFO  2021-03-11T14:01:09.519Z SQL channel job 52 (getLastConversationPreview) succeeded in 54ms
INFO  2021-03-11T14:01:09.519Z SQL channel job 53 (getLastConversationActivity) succeeded in 54ms
INFO  2021-03-11T14:01:09.536Z SQL channel job 54 (getOlderMessagesByConversation) succeeded in 20ms
INFO  2021-03-11T14:01:09.817Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]ae8/[REDACTED]9c4 200 Success
INFO  2021-03-11T14:01:09.817Z Setting sealedSender to ENABLED for conversation [REDACTED]ae8 ([REDACTED]aa4)
INFO  2021-03-11T14:01:09.827Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]4f5/[REDACTED]500 200 Success
INFO  2021-03-11T14:01:09.827Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]d0f/[REDACTED]e15 200 Success
INFO  2021-03-11T14:01:09.827Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]33d/[REDACTED]d44 200 Success
INFO  2021-03-11T14:01:09.827Z GET https://textsecure-service.whispersystems.org/v1/profile/[REDACTED]b61/[REDACTED]e88 200 Success
INFO  2021-03-11T14:01:09.828Z Setting sealedSender to ENABLED for conversation [REDACTED]4f5 ([REDACTED]239)
INFO  2021-03-11T14:01:09.828Z Setting sealedSender to ENABLED for conversation [REDACTED]d0f ([REDACTED]865)
INFO  2021-03-11T14:01:09.828Z Setting sealedSender to ENABLED for conversation [REDACTED]33d ([REDACTED]faa)
INFO  2021-03-11T14:01:09.828Z Setting sealedSender to ENABLED for conversation [REDACTED]b61 ([REDACTED]882)
INFO  2021-03-11T14:01:09.829Z GET https://cdn.signal.org/[REDACTED]k3g
INFO  2021-03-11T14:01:09.830Z GET https://cdn.signal.org/[REDACTED]FRQ
INFO  2021-03-11T14:01:09.830Z GET https://cdn.signal.org/[REDACTED]ZJQ
INFO  2021-03-11T14:01:09.831Z GET https://cdn.signal.org/[REDACTED]gow`;

const Template: Story<ComponentProps<typeof DebugLogModal>> = (args) => <DebugLogModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  debugLog: testLog,
  onClose: () => {},
  onOpenLogsFolder: () => {},
  onSendReport: () => {},
  open: true,
};
