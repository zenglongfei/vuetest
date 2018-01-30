import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import childrenView from '@/components/childrenView'
import learnComponent from '@/components/learnComponent'
import axiosItem from '@/components/axiosItem'
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
            path: 'axiosItem',
            name: 'axiosItem',
            component: axiosItem
          }, {
            path: 'grandChild2',
            name: 'grandChild2',
            component: grandChild2
          }]
        },
        {
          path: 'learnComponent',
          name: 'learnComponent',
          component: learnComponent
        }
      ]
    }
  ]
})
