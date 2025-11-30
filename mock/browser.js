import { setupWorker } from 'msw'
import { handlers } from './handlers'

// 设置 Service Worker
export const worker = setupWorker(...handlers)

// 启动 mock 服务
export const startMockWorker = () => {
  worker.start({
    onUnhandledRequest: 'warn'
  }).then(() => {
    console.log('🔶 MSW: Mock worker started successfully')
  }).catch(error => {
    console.error('🔴 MSW: Failed to start mock worker:', error)
  })
}
