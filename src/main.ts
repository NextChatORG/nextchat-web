/*
  NextChat - Messages social network
  Copyright (C) 2021  NextChat Org & NextChat Contributors
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import App from './App.vue'
import routes from './routes'
import viteSSR from 'vite-ssr'
import apolloProvider from './connection/graphql_connect'
import { createHead, Head } from '@vueuse/head'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default viteSSR(App, { routes }, ({ app }) => {
  app.use(createHead())
  app.use(apolloProvider)
  app.component(Head.name, Head)
  app.component('LayoutDefault', LayoutDefault)
})
