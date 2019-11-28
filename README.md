# live2d-vue-component

> Live2D 看板娘组件 for Vue

![demo](./public/demo.png)

## 查看 Demo

示例文件在：`src/Live2DDemo.vue`

```sh
# clone 本项目
yarn install
yarn serve
```

## 使用方式

1. 安装

   ```
   npm i live2d-vue-component
   ```


2. 在网站根目录放置 live2d 素材文件，本项目使用的素材在 `./public/live2d/models/suzukaze_aoba`

3. 在 vue 组件中使用

   ```vue
   <template>
     <div>
       <Live2D
        :model-path="'/static/live2d/models/suzukaze_aoba/index.json'"
        :message="'Hello World!'"
        :show-message="true"
        @onLive2DClick="()=>{}"
      />
     </div>
   </template>
   <script>
   import Live2D from "live2d-vue-component";
   export default {
     components: {
       Live2D
     },
   }
   </script>
   ```

## 备注

- 由于 live2d.js 过于古老，我找不到未压缩的源码及其api，所以报错了也无法调试。
- 点击页面报错可能是一些[模型的问题](https://github.com/galnetwen/Live2D/issues/4)。
- 目前 live2d 实例加载后无法卸载，在对性能有要求的项目上谨慎使用。


