## MobileCoin Electron Wallet [v1 Release]

A user-friendly desktop wallet with support for transaction history, encrypted contact book, gift codes, and payments.

- You must read and accept the [Terms of Use for MobileCoins and MobileCoin Wallets](./TERMS-OF-USE.md) to use MobileCoin Software.


## Offline Use

There are two ways to use desktop wallet (DW) offline: view-only accounts and offline mode. Offline mode is more secure, but view-only mode is more convenient, while still being more secure than a fully-online wallet.


### Offline Mode

In offline mode, none of your keys is ever saved to an online computer, the offline computer will save your keys in an encrypted database, and you will have to copy the ledger from an online computer to the offline computer any time you want to update your balance or create a transaction.


#### Syncing an account



1. Get started with offline mode by installing DW on a computer connected to the internet. 
2. Create a new account. DW will automatically begin downloading the Mobilecoin ledger to that computer. 
3. Once the download has finished, export the ledger by going to settings -> manage ledger database and click the EXPORT button underneath the “Ledger database path” heading. 
4. Take this file, along with the installer for DW to your offline computer. Install DW, create a new account or import an existing account, then import the ledger database using the IMPORT button in either the settings or underneath the account balance indicator. DW will restart and then sync the account with the imported ledger DB.


#### Creating and submitting a transaction



1. Once the account is synced, enter the transaction details on the Send/Receive tab. Click “Save signed transaction” to build the transaction, then confirm the transaction build in the preview that pops up. Confirming the build will prompt you to save the signed transaction to disk.
2. Copy this saved transaction over to the connected computer. Start up DW using the new account you created earlier.Navigate to the Send/Receive page and rather than entering the transaction details into the form, click “Import Signed Transaction”.
3. Take a look at the transaction details that appear in the confirmation modal. If everything looks correct, click “confirm send” to submit the transaction to the Mobilecoin network.


### View-Only Accounts

A view only account allows you to maintain an account on a connected computer using only your view keys. The connected account will be able to sync with the ledger and show you all of the transactions that have been received for that account. However it will not know which transactions have been spent until you use a tool called the transactions-signer to sync the view-only account. You can also build + submit transactions using the view-only account and the transaction signer. The transaction-signer should only be used on an offline computer. By default it will save your mnemonic in an unencrypted JSON file on the computer where it is run.

View only accounts can be identified in the DW by a circular icon with an exclamation mark inside it. The icon will be next to the account balance indicator. If the account contains MOB/eUSD that might be spent, the icon will be yellow and icon-buttons for downloading and uploading sync files will be rendered. If the account contains only MOB/eUSD that is confirmed to be unspent, the view-only icon will be white and the sync buttons will not appear.


#### Syncing an account



1. Get started with view-only mode by downloading the transaction-signer from the [full-service releases](https://github.com/mobilecoinofficial/full-service/releases). Find the most recent release and download the appropriate package for your system. Unzip the package, and move the transaction-signer binary into a directory where you want to keep your secrets.
2. Create a new account or import an existing account: 
    1. Create a new account by opening a terminal navigating into the directory with the transaction-signer and running `./transaction-signer create`.
    2. Import an existing account by running `./transaction-signer import “<your account’s mnemonic>” –-name <your account’s name>`.
    3. The transaction signer will create two files: `mobilecoin_secret_mnemonic_xxxx.json` and `mobilecoin_view_account_import_package.xxxx.json`. The mnemonic file will be used by the transaction signer to sync the account & sign transactions. The import package contains your view keys and will be used to import a view-only account into the online DW.
3. Copy the `mobilecoin_view_account_import_package.xxxx.json` file over to the online computer. Install DW and when given the choice to create or import an account, select “Import View Only Account”. Upload the import package json file.
4. The wallet will create and navigate to the view-only account, which will start syncing. The view only account will have a record of all received transactions and render a balance, but that balance may not be correct because the account does not know which transactions have been spent (this knowledge would require the private spend key).
5. In order to properly sync the view-only account, you need to download an account-sync package and have the transaction-signer scan it. In the DW, underneath the balance indicator, click on the download arrow. This will download the sync request JSON file.
6. Copy the syn  request JSON file to the offline computer. From within the transaction-signer directory run `./transaction-signer sync <path to mnemonic file> <path to sync package>`. The transaction signer will generate and save a completed sync JSON file. 
7. Copy the completed sync JSON file over to the online computer. In DW, click on the upload sync package icon and select the completed sync jSON file. DW will quickly sync and now it will know which txos have been spent and it will render an accurate balance.


##### Creating and submitting a transaction



1. From the view-only account, navigate to the send/receive tab and enter the transaction details. Click “Save Unsigned Transaction”. This will build an unsigned transaction and save it to disk.
2. Copy the unsigned transaction over to the offline computer. From inside the directory with the transaction signer run `./transaction-signer sign &lt;path to mnemonic file> &lt;path to unsigned transaction JSON>`. The transaction-signer will sign and save the transaction.
3. Copy the signed transaction over to the computer with the online DW. From the send/receive tab for the view-only account, click on the “Import Signed Transaction” button. Select the signed transaction JSON. The confirmation window should pop up. Verify the transaction details, then click “Submit” to submit the transaction to the Mobilecoin network.




### Note to Developers

- Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for notes on contributing bug reports and code.

### License

MobileCoin Desktop Wallet is available under open-source licenses. Look for the [LICENSE](./LICENSE) file for more information.

### Setup

Depending on your local platform, you'll need to add the correct version of ***full-service*** from the Downloads section of the [full-service binaries](https://github.com/mobilecoinofficial/full-service/releases) to the `./full-service-bin` directory. The helper script `./get-full-service.sh` will download the appropriate full-service tarball and extract it into `/tmp/full-service`, and then build `./full-service-bin` with Desktop Wallet's full-service startup scripts and the needed elements from the full-service tarball.

For example, to set up your local repo clone for debugging on MacOS with Apple Silicon using Testnet and v2.10.6 of full-service, you would run `get-full-service.sh` as follows:
```bash
./get-full-service.sh -o mac -a arm64 -n testnet -v v2.10.6
```
### Dev

The application is dependent on using node version `^16.0.0`. Since different applications may rely on different versions of node, it is recommended you use a [node manager like n](https://github.com/tj/n). You can check the current node version with `node --version`.

Once you're working with the correct version of node, you'll need to install the rest of the packages. At the root of the directory run `yarn install` (or `yarn` if you're cool like that). Because this wallet has native packages, you'll need to drop into the app/ directory `cd app/` and run `yarn install` here as well. Once done, hop back up to the root directory (I know you know this, but `cd ..`).

Run the dev environment with `yarn dev` from the base directory.

That's it!

(There's plenty of other commands, take a peak at the package.json scripts).

### Debugging

When you call `yarn dev`, the app will run with a Chrome inspect window for debugging convenience. If you want to debug the built or packaged app, please look closely at the `package.json` file for other commands.

If you need to debug the renderer (the interactive side of the app + the api request/responses from `full-service`), you can simply add the keyword `debugger` in the code. When inspecting in the Chrome window, javascript will stop at that line and allow you to quickly inspect the local state.

YOU CANNOT USE THE `DEBUGGER` KEYWORD IN A REACT'S RENDER RETURN VALUE. (The return value that looks an awful lot like html).

You may want to debug the main process. You can find a debugging tutorial [here](https://www.electronjs.org/docs/tutorial/debugging-main-process).
