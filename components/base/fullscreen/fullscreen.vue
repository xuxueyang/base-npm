<template>
  <div v-if="showFullScreenBtn" class="full-screen-btn-con">
    <el-tooltip :content="text" placement="bottom">
      <i @click="handleChange" class="icon-full"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Fullscreen',
  computed: {
    showFullScreenBtn () {
      return window.navigator.userAgent.indexOf('MSIE') < 0
    },
    text() {
      if (this.value) {
        return '退出全屏'
      }else {
        return '全屏'
      }
    }
  },
  props: {
    value: {// 是否全屏
      type: Boolean,
      default: false
    },
    domSelector: {
      type: String,
      default: 'body'
    }
  },
  methods: {
    handleFullscreen () {
      let main = document.querySelector(this.domSelector)
      if (this.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
    },
    handleChange () {
      this.handleFullscreen()
    }
  },
  mounted () {
    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
    isFullscreen = !!isFullscreen
    document.addEventListener('fullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('mozfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('webkitfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('msfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    this.$emit('input', isFullscreen)
  }
}
</script>

<style lang="less">
.full-screen-btn-con{
  display: inline-block;
}
.full-screen-btn-con .ivu-tooltip-rel{
  height: 48px;
  line-height: 48px;
  i{
    cursor: pointer;
  }
}
</style>
