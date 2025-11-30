import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// 设置 Node.js 服务器
export const server = setupServer(...handlers)

// 启动 mock 服务器
export const startMockServer = () => {
  server.listen({
    onUnhandledRequest: 'warn'
  })
  
  console.log('🔶 MSW: Mock server started successfully')
  
  // 优雅关闭
  process.once('SIGTERM', () => server.close())
  process.once('SIGINT', () => server.close())
}