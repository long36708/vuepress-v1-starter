/**
 * @Author: longmo
 * @Date: 2025-11-30 11:06:15
 * @LastEditTime: 2025-11-30 12:16:45
 * @FilePath: docs/.vuepress/enhanceApp.js
 * @Description: 
 */

// const {startMockWorker} =require('../../mock/browser')
export default ({Vue,isServer}) => {
    if (!isServer && process.env.NODE_ENV === 'development') {
        import('../../mock/browser').then(({ startMockWorker }) => {
            startMockWorker()
        }).catch(error => {
            console.error('Failed to load MSW:', error)
        })
        //
        // try {
        //     startMockWorker()
        // }catch (error) {
        //     console.error('Failed to load MSW:', error)
        // }
    }
}
