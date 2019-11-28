<template>
  <div class="live2d-wrap" :class="{hidden}">
    <div class="action-group">
      <button @click="hideLive2D">{{ hidden ? '显示Live2D' : '隐藏Live2D' }}</button>
    </div>
    <transition name="bounce">
      <div v-show="showMessage" class="message">{{ message }}</div>
    </transition>
    <canvas id="live2d" width="280" height="500" class="live2d" @click.prevent="$emit('onLive2DClick')"></canvas>
  </div>
</template>

<script>

import load from "../utils/dynamicLoadScript";

export default {
  name: "Live2D",
  props: {
    message: {
      type: [Boolean, String, Number],
      default: 'Hello World!'
    },
    showMessage: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    live2dStarted: false,
    hidden: false
  }),
  watch: {
    hidden(nv) {
      if (!nv && !this.live2dStarted) {
        this.startLive2D();
      }
    }
  },
  
  mounted() {
    setTimeout(() => {
      // 是否自动加载L2D
      if (!this.hidden) {
        this.startLive2D();
      }
    }, 200);
  },
  methods: {
    startLive2D() {
      load("/live2d/js/live2d.js", err => {
        if (err) {
          console.error(err.message);
          return;
        }
        // 启动live2d！
        // eslint-disable-next-line no-undef
        loadlive2d("live2d", "/live2d/models/suzukaze_aoba/index.json");
        this.live2dStarted = true;
        console.log("Live2d Started");
      });
    },
    hideLive2D() {
      this.hidden = !this.hidden;
    }
  }
};
</script>

<style lang="stylus" scoped>
.bounce-enter-active, .bounce-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.57, 2.8);
}

.bounce-enter, .bounce-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

$border_color = rgba(103, 58, 183, 0.4);
$bg_color = rgba(255, 255, 255, 0.6);
$box_shadow_color = rgba(103, 58, 183, 0.3);

$transition(time = 0.3s) {
  transition: all time cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @media screen and (max-width: $tablet_width) {
    transition: all time ease; // 节约移动端性能
  }
}

.live2d-wrap {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 280px;
  height: 430px;
  $transition(0.5s);

  @media screen and (max-width: $mobile_width) {
    transform-origin: right bottom;
    transform: scale(0.8);
  }

  &.hidden {
    height: 40px;
    pointer-events: none;

    .action-group {
      visibility: visible;
      opacity: 1;
    }

    canvas#live2d, .message {
      visibility: hidden;
      opacity: 0;
    }
  }

  &:hover {
    .action-group {
      visibility: visible;
      opacity: 1;
    }
  }

  .action-group {
    position: absolute;
    top: 0;
    right: 10px;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    pointer-events: visible;
    $transition();

    &>button {
      $transition();
      background: $bg_color;
      border: 1px solid $border_color;
      border-radius: 10px;
      padding: 5px 10px;
      outline: none;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 10px $box_shadow_color;
      }
    }
  }

  canvas#live2d {
    cursor: pointer;
    $transition();
  }

  .message {
    position: absolute;
    bottom: 15%;
    left: 10%;
    right: 10%;
    padding: 5px;
    text-align: center;
    border: 1px solid $border_color;
    border-radius: 12px;
    background-color: $bg_color;
    box-shadow: 0 3px 10px 2px $box_shadow_color;
    font-size: 13px;
    pointer-events: none;
    z-index: 2;
  }

  @media screen and (max-width: $mobile_width) {
    opacity: 0.99;
    transform-origin: right bottom;
  }
}

/*  */
</style>
