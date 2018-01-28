<template>
  <div class="modal-box" v-if="show">
    <div class="modal-bg"></div>
    <div class="modal-wrap">
      <div class="modal-main">
        <a class="modal-close" @click="cancelModal">
          <i class="ivu-icon ivu-icon-ios-close-empty"></i>
        </a>
        <div class="modal-header">
          <div class="modal-header-inner">普通的Modal对话框标题</div>
        </div>
        <div class="modal-body">
          <p>对话框内容</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large" @click="cancelModal"><span>取消</span></button>
          <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-large" @click="sureModal"><span>确定</span></button>
        </div>
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
        sure: null
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
  .modal-bg {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.4);
    height: 100%;
    z-index: 1000;
  }
  .modal-wrap {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }
  .modal-main {
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: 30%;
    background-color: #fff;
    border: 0;
    border-radius: 6px;
    background-clip: padding-box;
  }
  .modal-close {
    font-size: 12px;
    position: absolute;
    right: 16px;
    top: 8px;
    overflow: hidden;
    cursor: pointer;
  }
  .ivu-icon-ios-close-empty {
    font-size: 31px;
    color: #999;
    transition: color .2s ease;
    position: relative;
    top: 1px;
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
    font-size: 12px;
    color: #495060;
    line-height: 1.5;
  }
  .modal-footer {
    border-top: 1px solid #e9eaec;
    padding: 12px 18px;
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
