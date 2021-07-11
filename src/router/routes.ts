/**
 * @description 测试路由
 */
export const testRoute = {
  path: '/test',
  name: 'Test',
  component: () => import('../components/Test.vue'),
  meta: {
    title: 'test',
  },
}

// 基本路由
export const baseRoutes = [testRoute]
