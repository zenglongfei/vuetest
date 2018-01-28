
import Vue from 'vue'
import messagePlugin from './messagePlugin.vue'
import modalPlugin from './modalPlugin'

let messageOptions = {
  type: 'info',
  content: '没有提示内容'
}

const Message = (config) => {
  let Tpl = Vue.extend(messagePlugin)
  let instance = new Tpl()
  if (!!config && typeof config !== 'object') {
    messageOptions.content = config
  }
  config = {
    ...messageOptions,
    ...config
  }
  for (let key in config) {
    if (config.hasOwnProperty(key)) {
      instance.$data[key] = config[key]
    }
  }
  document.body.appendChild(instance.$mount().$el)
}

let modalOptions = {
  show: true,
  cancel: null,
  sure () {
    console.log(0)
  }
}

const Modal = (config) => {
  let Tpl = Vue.extend((modalPlugin))
  let instance = new Tpl()
  config = {
    ...modalOptions,
    ...config
  }
  for (let key in config) {
    if (config.hasOwnProperty(key)) {
      instance.$data[key] = config[key]
    }
  }
  document.body.appendChild(instance.$mount().$el)
}

export default {
  install () {
    Vue.prototype.$Message = Message.bind(Vue)
    Vue.prototype.$Modal = Modal.bind(Vue)
  }
}
