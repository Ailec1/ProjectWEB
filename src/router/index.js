import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/_HomeView.vue'

import WebProject from '../views/WebProject.vue'
import Pokedex from '../views/Pokedex.vue'
import Table from '../views/Table.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Play from '../views/Play.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/web-project',
    name: 'web-project',
    component: WebProject
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: Pokedex
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/play',
    name: 'play',
    component: Play
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
