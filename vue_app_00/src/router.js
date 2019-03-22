import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import testContainer from "./components/testContainer.vue"
import Home from "./components/tabbar/Home.vue"
import NewsList from "./components/home/NewsList.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/test',component:testContainer},
    {path:'/Home',component:Home},
    {path:'/NewsList',component:NewsList}
  ]
})
