/**
 * @Author: longmo
 * @Date: 2025-11-29 21:04:28
 * @LastEditTime: 2025-11-30 16:47:53
 * @FilePath: docs/.vuepress/config.js
 * @Description:
 */
const webpack = require('webpack')
const {resolve} = require("node:path");
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    cache: false,

    // 主题配置
    themeConfig: {
        // 导航栏配置
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: 'GitHub', link: 'https://github.com'}
        ],

        // 侧边栏配置
        sidebar: [
            '/',
            '/guide/',
        ]
    },

    // 插件配置
    plugins: [
        'demo-container-v2.7',
    ],
    // 客户端配置
    // clientRootMixin: require.resolve('./client-enhance.js'),

    // 添加 Webpack 配置处理 ES 模块
    configureWebpack: (config, isServer) => {
        return {
            // resolve 配置应该放在顶层
            resolve: {
                // fullySpecified: false,
                // extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx']
                modules: [
                    'node_modules',
                ]
            },
            plugins: [
                // new webpack.DefinePlugin({
                //     'process.env': {
                //         NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
                //         DEBUG: JSON.stringify(false)
                //     },
                //     // 如果需要全局 process 对象（不推荐，但可解决报错）
                //     'process': JSON.stringify({
                //         env: {
                //             NODE_ENV: process.env.NODE_ENV || 'development',
                //             DEBUG: false
                //         }
                //     })
                // })
            ],
            module: {
                rules: [
                    {
                        test: /\.mjs$/,
                        include: /node_modules/,
                        type: 'javascript/auto',
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: [
                                    [require.resolve('@babel/plugin-transform-class-static-block')],
                                    [require.resolve('@babel/plugin-transform-optional-chaining')],
                                ]
                            }
                        }
                    },
                    {
                        test: /\.js$/,
                        include: /node_modules/,
                        type: 'javascript/auto',
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: [
                                    [require.resolve('@babel/plugin-transform-class-static-block')],
                                    [require.resolve('@babel/plugin-transform-optional-chaining')],
                                ]
                            }
                        }
                    },
                    {
                        test: /\.cjs$/,
                        include: /node_modules/,
                        type: 'javascript/auto',
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: [
                                    [require.resolve('@babel/plugin-transform-class-static-block')],
                                    [require.resolve('@babel/plugin-transform-optional-chaining')],
                                ]
                            }
                        }
                    }
                ]
            }
        }
    },
    // 使用 chainWebpack 替代 configureWebpack
    chainWebpack: (config) => {
        // config.module
        //     .rule('mjs')
        //     .test(/\.mjs$/)
        //     .include
        //     .add(/node_modules/)
        //     .end()
        //     .type('javascript/auto');

        // console.log(config.resolve.mainFields)
        // config.resolve.mainFields.clear()
        // config.resolve.mainFields.merge(['main', 'browser'])
    }
}
