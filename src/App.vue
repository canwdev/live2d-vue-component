<template>
  <div>
    <Live2D
      :message="hitokoto"
      :showMessage="showHitokoto" 
      @onLive2DClick="fetchHitokoto"
    />
  </div>
</template>

<script>
import Live2D from "./components/Live2D";
import axios from "axios";

export default {
  components: {
    Live2D
  },
  data() {
    return {
      hitokoto: "",
      showHitokoto: false,
      loadingHitokoto: false // 防止重复请求
    };
  },

  mounted() {
    // 定时获取一言
    this.fetchInterval = null;
    this.fetchTimeout = null;

    this.fetchHitokoto();
  },
  methods: {
    fetchHitokoto() {
      clearInterval(this.fetchInterval);
      clearTimeout(this.fetchTimeout);
      this.showHitokoto = false;
      if (this.loadingHitokoto) return;
      this.loadingHitokoto = true;

      // const types = ['a', 'b', 'c']
      // const type = types[Math.floor(Math.random() * types.length)]
      // axios.get(`https://v1.hitokoto.cn/?c=${type}`).then(res => {
      axios
        .get(`https://v1.hitokoto.cn`)
        .then(res => {
          setTimeout(() => {
            this.hitokoto = res.data.hitokoto;
            this.showHitokoto = true;
          }, 100); // 防止动画一闪而过

          // n秒后自动隐藏
          this.fetchTimeout = setTimeout(() => {
            this.showHitokoto = false;
          }, 15000);
        })
        .catch(e => {
          console.error(e);
          this.showHitokoto = false;
        })
        .finally(() => {
          this.loadingHitokoto = false;
        });

      // 定时刷新一言
      this.fetchInterval = setInterval(() => {
        this.fetchHitokoto();
      }, 30000);
    },
  }
};
</script>
