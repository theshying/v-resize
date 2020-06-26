<h1 align="center">👋v-resize</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%208.9.4-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%203.0.0-blue.svg" />
  <img alt="License: MIT" src="https://travis-ci.org/theshying/v-resize.svg?branch=master" />
  <a href="https://github.com/theshying/v-resize#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/theshying/element-admin-pro/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>

</p>

> 实时监听元素width/height属性变化的自定义vue指令
### [在线预览](https://theshying.github.io/v-resize)

## Introduction
v-resize 是一个能够实时监听元素大小变化的自定义vue指令，而不需要关心是什么引起变化，无论是flexbox弹性计算引起的变化，还是窗口resize均能监听到，总之只要这个元素的大小有变化，均能监听到，且性能很好，不需要去轮询元素的大小。



## How to use

```sh
npm install @theshy/v-resize --save
```

```javascript
//在main.js引入并注册
import vResize from '@theshy/v-resize'
Vue.use(vResize)

//在组件App.vue中

<template>
  <div v-resize="resizeHandler">
  </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        resizeHandler(val) {
            console.log(val); //{width:xx , height: xxx}
        },
    },
};
</script>
```

## License
This project is [MIT](https://github.com/theshying/element-admin-pro/blob/master/LICENSE) licensed.
