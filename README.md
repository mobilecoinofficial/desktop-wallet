# WARNING

Do not build from main without full confidence in the state of the application. If there is no official release, please contact an admin for the correct branch.

## MobileCoin Electron Wallet [Beta]

A user-friendly desktop wallet with support for encrypted key storage, an address book [WIP], and QR code generation for communicating Payment Request Codes and Gift Codes to mobile apps[WIP].

- You must read and accept the [Terms of Use for MobileCoins and MobileCoin Wallets](./TERMS-OF-USE.md) to use MobileCoin Software.
- Please note that currently, the MobileCoin Wallet is not available for download or use by U.S. persons or entities, persons or entities located in the U.S., or persons or entities in other prohibited jurisdictions.

### Roadmap

Here is a list of some upcoming changes and initiatives:

- Move from `mobilecoind` to `MobileCoin Full Service` **!!BREAKING CHANGES!!**
- Internationalization
- Safety PIN
- Transaction History
- Address Book
- Offline Mode
- Update Notifications
- Improvements to Gift Codes
- Support for M1
- Support for Windows
- Better accessibility support

When introducing **breaking changes**, we will modify the application name so that it does not overwrite any previous version. You import your entropy and start fresh. During prototype development, you should expect periodic breaking changes.

### Note to Developers

- MobileCoin Desktop Wallet is a prototype. Expect substantial changes before the release.
- Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for notes on contributing bug reports and code.

### License

MobileCoin Desktop Wallet is available under open-source licenses. Look for the [LICENSE](./LICENSE) file for more information.

### Setup

Depending on your local platform, you'll need to add the `mobilecoind` binaries in the appropriate directory found in `./mobilecoind-bin`. If you add the binaries, you will likely need to give permissions for the dev environment to run them. In the directory with the binaries, grant permission: `sudo chmod +x mobilecoind`.

### Dev

You'll need to start by installing the packages. At the root, run `yarn install` (or `yarn` if you're cool like that).

Run the dev environment with `yarn dev`.

That's it!

(There's plenty of other commands, take a peak at the package.json scripts).

### Changes to FullService and the Protos

If there have been changes to the Protos and FullService, you'll need to change the `mobilecoind` binaries and grant permission as noted in `Setup`. You will also need to regenerate the static Protos in javascript.

After copying the new .protos files into `./app/mobilecoind/protos/`. You should make sure that the correct javascript flag is assigned to data-types when appropriate. For example, `uint64 balance = 1 [jstype = JS_STRING];` will import the `uint64` as a `string` --> preventing precision loss with unsafe numbers.

Once you know your data-types are safe, `cd` into the same directory (`./app/mobilecoind/protos`). With your node packages installed (from the earlier `npm install` instructions in `Dev`) run the following command to port the .protos to .js:

```
../../../node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./ \
--grpc_out=grpc_js:./ *.proto
```

That command just simply runs the `grpc_tools` in your node package to covert the protos.

After that, you'll want to update the typescript. In the same directory, run the following:

```
protoc \
--plugin=protoc-gen-ts=../../../node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./ \
-I ./ \
*.proto
```

Wasn't that all awful? It is. We can improve this experience greatly by dynamically loading the protos using the `@grpc/proto-loader` package. In fact, using the proto-loader cuts out a significant amount of manual (and hacky) overhead we are doing to expose the API as promises and to convert between javascript-objects and grpc-objects. The only blocker was loading the `.proto` files into webpack and electron-builder (which probably takes a small spike into their docs). If anyone feels up to the task, getting our `.proto` files packaged saves us from a significant amount of manual work.

(!!! We are moving away from `mobilecoind` in favor of `MobileCoin Full Service` API !!!)

### Debugging

When you call `yarn dev`, the app will run with a Chrome inspect window for debugging convenience. If you want to debug the built or packaged app, please look closely at the `package.json` file for other commands.

If you need to debug the renderer (the interactive side of the app + the api request/responses from `mobilecoind`), you can simply add the keyword `debugger` in the code. When inspecting in the Chrome window, javascript will stop at that line and allow you to quickly inspect the local state.

YOU CANNOT USE THE `DEBUGGER` KEYWORD IN A REACT'S RENDER RETURN VALUE. (The return value that looks an awful lot like html).

You may want to debug the main process. You can find a debugging tutorial [here](https://www.electronjs.org/docs/tutorial/debugging-main-process).
