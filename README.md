# osmosis-ts

TypeScript/AssemblyScript library for decoding Osmosis messages.

## Usage

```typescript
import { osmosis, google } from "@graphprotocol/osmosis-ts";

function logSender(any: google.protobuf.Any) {
  if (any.type_url == '/osmosis.gamm.v1beta1.MsgSwapExactAmountOut') {
    const message = osmosis.gamm.v1beta1.decodeMsgSwapExactAmountOut(any.value);
    log.console(message.sender);
  }
}
```

## Development

Install [Protocol Buffer Compiler](https://github.com/protocolbuffers/protobuf/releases) (`protoc`) and [Lerna](https://lerna.js.org/).

### Fetch dependencies

```bash
git submodule update --init --force
```

### Build and test

```bash
yarn install
yarn build
yarn test
```

## Update dependencies

In order to update a dependency, change the value of the `branch` option in the corresponding section of the `.gitmodules` file.

> **Note**<br>
> A submodule should always point to a tag.

```bash
git -C <submodule_dir> checkout <new_tag>
yarn build
yarn test
git commit -m <submodule_dir>
```
