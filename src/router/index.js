import Vue from 'vue'
import Router from 'vue-router'
import SubscribePage from '@/components/subscribe/SubscribePage'
import DownloadPage from '@/components/download/DownloadPage'
import FindPage from '@/components/find/FindPage'
import InfoPage from '@/components/info/InfoPage'
import SearchPage from '@/components/search/SearchPage'


Vue.use(Router);
//为什么不加会报错？
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode : 'history',
  routes: [
      {
          path: '/',
          redirect: '/subscribe'
      },{
      path: '/Subscribe',
      name: 'SubscribePage',
      component: SubscribePage
    },{
          path: '/download',
          name: 'DownloadPage',
          component: DownloadPage
      },{
          path: '/find',
          name: 'FindPage',
          component: FindPage
      },{
          path: '/info',
          name: 'InfoPage',
          component: InfoPage
      },{
          path: '/search',
          name: 'SearchPage',
          component: SearchPage
      }
  ]
})
