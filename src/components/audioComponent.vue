<template>
  <div>
    <audio autoplay="autoplay" loop="loop" preload="auto" src="../media/music.mp3">你的浏览器不支持audio</audio>
    <div class="animation" @click="startAnimate">
      <img src="../assets/musicicon.png">
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'audio-component',
  methods: {
    startAnimate () {
      let anDiv = $('.animation')
      let audio = $('audio')[0]
      if (anDiv.css('animation-play-state') === 'running') {
        anDiv.css('animation-play-state', 'paused')
        audio.pause()
      } else {
        anDiv.css('animation-play-state', 'running')
        audio.play()
      }
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
