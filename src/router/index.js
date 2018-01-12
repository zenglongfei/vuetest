import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import childrenView from '@/components/childrenView'
import grandChild from '@/components/grandChild'
import grandChild2 from '@/components/grandChild2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'childrenView',
          name: 'childrenView',
          component: childrenView,
          children: [{
            path: 'grandChild',
            name: 'grandChild',
            component: grandChild
          }, {
            path: 'grandChild2',
            name: 'grandChild2',
            component: grandChild2
          }]
        }
      ]
    }
  ]
})
