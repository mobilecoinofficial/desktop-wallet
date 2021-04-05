# WARNING

Do not build from main without full confidence in the state of the application. If there is no official release, please contact an admin for the correct branch. Self-package at your own risk.

Be viligent for phishing attempts.


## MobileCoin Electron Wallet [Beta]

A user-friendly desktop wallet with support for transaction history, encrypted contact book, gift codes, and payments.

- You must read and accept the [Terms of Use for MobileCoins and MobileCoin Wallets](./TERMS-OF-USE.md) to use MobileCoin Software.
- Please note that currently, the MobileCoin Wallet is not available for download or use by U.S. persons or entities, persons or entities located in the U.S., or persons or entities in other prohibited jurisdictions.

### Roadmap

Here is a list of some upcoming changes and initiatives:

- Offline Mode (Your keys never touch a computer with the internet!)
- Update Notifications
- User-controlled bug reporting
- Support for M1
- Support for Windows
- Better accessibility support


### Note to Developers

- MobileCoin Desktop Wallet is a prototype. Expect substantial changes before the release.
- Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for notes on contributing bug reports and code.

### License

MobileCoin Desktop Wallet is available under open-source licenses. Look for the [LICENSE](./LICENSE) file for more information.

### Setup

Depending on your local platform, you'll need to add the `full-service-testnet` and `ingest-enclave` binaries in the appropriate directory found in `./full-service-bin`. If you add the binaries, you will likely need to give permissions for the dev environment to run them. In the directory with the binaries, grant permission: ` chmod +x full-service-testnet`.

### Dev

You'll need to start by installing the packages. At the root, run `yarn install` (or `yarn` if you're cool like that).

Run the dev environment with `yarn dev`.

That's it!

(There's plenty of other commands, take a peak at the package.json scripts).

### Debugging

When you call `yarn dev`, the app will run with a Chrome inspect window for debugging convenience. If you want to debug the built or packaged app, please look closely at the `package.json` file for other commands.

If you need to debug the renderer (the interactive side of the app + the api request/responses from `mobilecoind`), you can simply add the keyword `debugger` in the code. When inspecting in the Chrome window, javascript will stop at that line and allow you to quickly inspect the local state.

YOU CANNOT USE THE `DEBUGGER` KEYWORD IN A REACT'S RENDER RETURN VALUE. (The return value that looks an awful lot like html).

You may want to debug the main process. You can find a debugging tutorial [here](https://www.electronjs.org/docs/tutorial/debugging-main-process).
