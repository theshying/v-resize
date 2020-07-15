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

> 实时监听dom元素尺寸变化的自定义vue指令
### [在线预览(兼容IE9+)](https://theshying.github.io/v-resize)

## Introduction
v-resize 是一个能够实时监听dom元素尺寸变化的自定义vue指令，
我们不需要关心是什么引起变化，无论是flexbox弹性计算引起的变化，还是窗口resize均能监听到，甚至通过控制台修改元素的尺寸。

总之只要这个元素的大小发生变化，均能监听到，且性能很好，不需要去轮询元素的大小。

## How to do
在支持resizeObserve的浏览器下，我们会优先使用原生resizeObserve来监听变化，否则我们会使用iframe来模拟window的resize事件实现监听


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
        resizeHandler(size) {
            console.log(size); //{width:xx , height: xxx}
        },
    },
};
</script>
```

>默认情况下dom元素第一次渲染的的时候不会触发resizeHandler，如果需要可以使用v-resize.immediate

>ps: 监听到的size中包括元素宽度、内边距和溢出尺寸，不包括边框和外边距




## License
This project is [MIT](https://github.com/theshying/element-admin-pro/blob/master/LICENSE) licensed.
