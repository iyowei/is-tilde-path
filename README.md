[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

# isVirtualRoot(path)

> 识别路径是否类似 `~/Development/OpenSource`。

## 使用

- `path`，{ String }，路径

```js
import { log } from 'console';
import isVirtualRoot from '@iyowei/is-virtual-root';

log(isVirtualRoot('~/Development/OpenSource`')); // true
log(isVirtualRoot('/Users/iyowei/Development/OpenSource`')); // false
```

## 安装

[![Node Version Badge][node version badge]][download node.js]

```shell
# Pnpm
pnpm add @iyowei/is-virtual-root

# yarn
yarn add @iyowei/is-virtual-root

# npm
npm add @iyowei/is-virtual-root
```

## 参与贡献

![PRs Welcome][prs welcome badge]
