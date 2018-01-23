<template>
  <div>
    <audio id="player" :controls="controlsShow" :loop="isLoop" preload="auto" :src="songUrl" @ended="musicEnd">你的浏览器不支持audio</audio>
    <div class="animation" @click="startAnimate">
      <img src="../assets/musicicon.png">
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import http from '../utils/http.js'
export default {
  name: 'audio-component',
  data () {
    return {
      controlsShow: false,
      isLoop: false,
      songUrlArr: [],
      songUrl: ''
    }
  },
  mounted () {
    // 页面初始化音乐默认暂停
    $('.animation').css('animation-play-state', 'paused')
    // 获取音乐地址
    this.queryMusic()
    // 请求测试
    // this.queryTest()
  },
  methods: {
    startAnimate () {
      let anDiv = $('.animation')
      let audio = document.getElementById('player')
      if (anDiv.css('animation-play-state') === 'running') {
        anDiv.css('animation-play-state', 'paused')
        audio.pause()
      } else {
        anDiv.css('animation-play-state', 'running')
        audio.play()
      }
    },
    queryMusic () {
      http.axiosQuery({
        url: '../static/music.json'
      }, (oData) => {
        let result = oData.data
        $.each(result, (i, item) => {
          this.songUrlArr.push(item.songUrl)
        })
        this.songUrl = this.songUrlArr[Math.floor(Math.random() * this.songUrlArr.length)]
      })
    },
    musicEnd () {
      this.songUrl = this.songUrlArr[Math.floor(Math.random() * this.songUrlArr.length)]
      setTimeout(() => {
        document.getElementById('player').play()
      }, 200)
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
