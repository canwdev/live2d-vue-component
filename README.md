# live2d-vue-component

> Live2D 看板娘组件 for Vue

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

   


