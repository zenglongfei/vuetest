<template>
  <div>
    <audio id="player" :controls="controlsShow" :loop="isLoop" preload="auto" :src="songUrl" @ended="musicEnd">你的浏览器不支持audio</audio>
    <div :style='{"animation-play-state" : animationState}' class="animation" @click="startAnimate">
      <img src="../assets/musicicon.png">
    </div>
  </div>
</template>

<script>
import http from '../utils/http.js'
export default {
  name: 'audio-component',
  data () {
    return {
      controlsShow: false,
      isLoop: false,
      songUrlArr: [],
      songUrl: '',
      animationState: 'paused'
    }
  },
  mounted () {
    // 获取音乐地址
    this.queryMusic()
    // 请求测试
    // this.queryTest()
  },
  methods: {
    startAnimate () {
      let audio = document.getElementById('player')
      if (this.animationState === 'running') {
        this.animationState = 'paused'
        audio.pause()
      } else {
        this.animationState = 'running'
        audio.play()
      }
    },
    queryMusic () {
      http.axiosQuery(this, {
        url: '../static/json/music.json'
      }, (oData) => {
        let result = oData.data
        for (let i = 0; i < result.length; i++) {
          this.songUrlArr.push(result[i].songUrl)
        }
        this.songUrl = this.songUrlArr[Math.floor(Math.random() * this.songUrlArr.length)]
      })
    },
    musicEnd () {
      this.songUrl = this.songUrlArr[Math.floor(Math.random() * this.songUrlArr.length)]
      this.$nextTick(() => {
        document.getElementById('player').play()
      })
    }
  }
}
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
}
.animation {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
  animation:myfirst 3s linear infinite;
  -moz-animation:myfirst 3s linear infinite; /* Firefox */
  -webkit-animation:myfirst 3s linear infinite; /* Safari and Chrome */
  -o-animation:myfirst 3s linear infinite; /* Opera */
}
@keyframes myfirst
{
  0%   {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

@-moz-keyframes myfirst /* Firefox */
{
  0%   {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
  0%   {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

@-o-keyframes myfirst /* Opera */
{
  0%   {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
</style>
