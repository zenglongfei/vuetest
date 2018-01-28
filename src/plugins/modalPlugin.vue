<template>
  <div class="modal-box" v-if="show">
    <div class="modal-bg" @touchmove.prevent></div>
    <div class="modal-main" @touchmove.prevent>
      <div class="modal-header" v-if="type">
        <div class="modal-header-inner">{{title}}</div>
      </div>
      <div class="modal-body" v-html="content">
      </div>
      <div class="modal-footer">
        <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large" @click="cancelModal" v-if="btnShow"><span>{{btn[0]}}</span></button>
        <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-large" @click="sureModal"><span>{{btn[1] || btn[0]}}</span></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal-plugin',
    data () {
      return {
        show: true,
        cancel: null,
        sure: null,
        type: 1,
        btn: ['取消', '确定'],
        btnShow: true,
        title: '',
        content: ''
      }
    },
    methods: {
      cancelModal () {
        this.show = false
        this.cancel && this.cancel()
      },
      sureModal () {
        this.show = false
        this.sure && this.sure()
      }
    }
  }
</script>

<style scoped>
  body {
    height: 100%;
  }
  .modal-bg {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.4);
    height: 100%;
    z-index: 1000;
  }
  .modal-main {
    width: 80%;
    background-color: #fff;
    border: 0;
    border-radius: 6px;
    background-clip: padding-box;
    position: fixed;
    top: 30%;
    left: 10%;
    z-index: 1001;
    outline: 0;
  }
  .modal-header {
    border-bottom: 1px solid #e9eaec;
    padding: 14px 16px;
    line-height: 1;
  }
  .modal-header-inner {
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #1c2438;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .modal-body {
    padding: 16px;
    font-size: 16px;
    color: #495060;
    line-height: 1.5;
    overflow: auto;
    scrollbar-base-color:#ff6600;
    -webkit-overflow-scrolling: touch;
    word-break:break-all;
  }
  .modal-footer {
    border-top: 1px solid #e9eaec;
    padding: 10px 18px;
    text-align: right;
  }
  .ivu-btn {
    outline: 0;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 6px 15px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #495060;
    background-color: #f7f7f7;
    border-color: #dddee1;
  }
  .ivu-btn-text {
    color: #495060;
    background-color: transparent;
    border-color: transparent;
  }
  .ivu-btn-large {
    padding: 6px 15px 7px;
    font-size: 14px;
    border-radius: 4px;
  }
  .ivu-btn-primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
</style>
