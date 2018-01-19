<template>
  <div>
    <h2>{{chMsg}}</h2>
    <p>当前时间：<span v-html="nowTime"></span></p>
    <p>距离{{endYear}}年还剩：<span v-html="leftTime"></span></p>
  </div>
</template>

<script>
  export default {
    name: 'new-components',
    props: ['chMsg'],
    mounted () {
      setInterval(() => {
        this.refreshTime()
      }, 1000)
      this.leftDate()
    },
    data () {
      return {
        nowTime: '--',
        leftTime: '--',
        endYear: 2019,
        remainingTime: ''
      }
    },
    computed: {
      initDate () {
        return (new Date('yyyy/01/01 00:00:00').setFullYear(this.endYear))
      }
    },
    methods: {
      refreshTime () {
        this.nowTime = this.formatDate(new Date())
      },
      formatDate (date) {
        let nDate = new Date(date)
        let year = nDate.getFullYear()
        let month = nDate.getMonth() + 1
        let day = nDate.getDate()
        let hour = nDate.getHours()
        let minu = nDate.getMinutes()
        let seco = nDate.getSeconds()
        return (year + '/' + this.addZero(month) + '/' + this.addZero(day) + '&nbsp;&nbsp;' + this.addZero(hour) + ':' + this.addZero(minu) + ':' + this.addZero(seco))
      },
      addZero (num) {
        if (num < 10) {
          num = '0' + num
        }
        return num
      },
      leftDate () {
        this.remainingTime = new Date(this.initDate) - new Date()
        if (this.remainingTime > 0) {
          this.countDown = setInterval(() => {
            this.leftTimer()
          }, 1000)
        }
      },
      leftTimer () {
        this.remainingTime -= 1000
        let days = parseInt(this.remainingTime / 1000 / 60 / 60 / 24, 10)
        let hours = parseInt(this.remainingTime / 1000 / 60 / 60 % 24, 10)
        let minutes = parseInt(this.remainingTime / 1000 / 60 % 60, 10)
        let seconds = parseInt(this.remainingTime / 1000 % 60, 10)
        days = this.addZero(days)
        hours = this.addZero(hours)
        minutes = this.addZero(minutes)
        seconds = this.addZero(seconds)
        this.leftTime = days + '天' + hours + '时' + minutes + '分' + seconds + '秒'
        if (this.remainingTime <= 0) {
          clearInterval(this.countDown)
        }
      }
    }
  }
</script>

<style scoped>
  p {
    text-align: left;
  }
  h2 {
    font-weight: normal;
  }
</style>
