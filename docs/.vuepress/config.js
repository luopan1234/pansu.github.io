const sidebar = require('./config/sidebars')
module.exports = {
    title: 'Tuling Lab',
    description: '用心做技术-实践验真理',
    base: '/',
    // theme: 'reco',
    head: [['link', {rel: 'icon', href: '/image/favicon.ico'}], ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    plugins: [require('./plugins/router'),],
    themeConfig: {
        serviceWorker: {
            updatePopup:true
        },
        lastUpdated: '最后更新时间',
        nav: [
            {text: '导航', link: '/guide/'},
            {
                text: '前端大姐',
                items:[
                    {
                        text: 'Node',
                        items: [
                            { text: '命令行交互', link: '/passages/2019-05-07-play-node-shell/' },
                            { text: '测试', link: '/passages/2019-05-04-jest-base/' },
                            { text: '源码探索', link: '/passages/2019-05-02-node-block-chain/' }
                        ]
                    },
                ],
            },
            {
                text: '工具使用',
                items:[
                  {
                    text: 'Git',
                    items: [
                      {text:'Git的基本使用', link: '/passages/2019-07-31-git-base-command/'},
                      {text:'Git实践', link: '/passages/2019-07-31-git-activity/'}
                    ]
                  }
                ]
            }
        ],
        navbar: true,
        displayAllHeaders: true,
        sidebar,
        sidebarDepth: 2
    }
}
