# isTildePath(path)

> 识别路径是否类似 `~/Development/OpenSource`。

## 使用

- `path`，{ String }，路径

```js
import { log } from 'console';
import isTildePath from '@iyowei/is-tilde-path';

log(isTildePath('~/Development/OpenSource`')); // true
log(isTildePath('/Users/iyowei/Development/OpenSource`')); // false
```

## 安装

[![Node Version Badge][node version badge]][download node.js] ![esm][esm]

```shell
# Pnpm
pnpm add @iyowei/is-tilde-path

# yarn
yarn add @iyowei/is-tilde-path

# npm
npm add @iyowei/is-tilde-path
```

## 参与贡献

![PRs Welcome][prs welcome badge]



[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat