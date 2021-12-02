## MobileCoin Electron Wallet [v1 Release]

A user-friendly desktop wallet with support for transaction history, encrypted contact book, gift codes, and payments.

- You must read and accept the [Terms of Use for MobileCoins and MobileCoin Wallets](./TERMS-OF-USE.md) to use MobileCoin Software.

### Roadmap

Here is a list of some upcoming changes and initiatives:

- User-controlled bug reporting
- Support for M1
- Support for Windows
- Better accessibility support

### Note to Developers

- Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for notes on contributing bug reports and code.

### License

MobileCoin Desktop Wallet is available under open-source licenses. Look for the [LICENSE](./LICENSE) file for more information.

### Setup

Depending on your local platform, you'll need to add the correct version from the Downloads section of the [full-service binaries](https://github.com/mobilecoinofficial/full-service/releases/tag/v1.0.0-pre.8) to the `./full-service-bin` directory. Grab the binary `full-service` file and the .css files, and place them in their relative subdirectory in `./full-service-bin`. Once you have the files in the `./full-service-bin/testnet` and `./full-service-bin/mainnet` directories, copy the contents from `./full-service-bin/testnet` into `./full-service-bin`. When you add the binaries, you will likely need to give permissions for the dev environment to run them. In the directory with the binaries, grant permission: `chmod +x full-service`.

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
