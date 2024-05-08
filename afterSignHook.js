/* eslint-disable */

require('dotenv');

const path = require('path');

var electron_notarize = require('electron-notarize');

module.exports = async function (params) {
  if (process.platform !== 'darwin') {
    return;
  }

  console.log('afterSign hook triggered', params);

  let appId = 'com.mobilecoin.vault';
  let appPath = path.join(params.appOutDir, `${params.packager.appInfo.productFilename}.app`);

  console.log(`Notarizing ${appId} found at ${appPath}`);

  try {
    await electron_notarize.notarize({
      tool: 'notarytool',
      appPath,
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_ID_PASSWORD,
      teamId: process.env.APPLE_TEAM_ID,
    });
  } catch (error) {
    console.log(error);
  }

  console.log(`Done notarizing ${appId}`);
};
