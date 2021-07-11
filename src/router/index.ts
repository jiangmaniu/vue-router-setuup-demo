import type { App } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { baseRoutes } from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 安装路由
export function setupRouter(app: App<Element>) {
  app.use(router)
}
