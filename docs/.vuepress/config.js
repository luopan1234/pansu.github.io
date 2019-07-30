module.exports = {
    title: 'Tuling Lab',
    description: '图灵实验室',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    themeConfig: {
        nav: [
            {text: 'home', link: '/'},
            {text: 'js', link: '/js/'},
            {text: 'java', link: '/java/'},
            {text: 'python', link: '/python/'},
            // 下拉列表
            {
                text: 'select',
                items: [
                    {text: 'select1', link: '/select/select1'},
                    {text: 'select2', link: '/select/select2'}
                ]
            },
            // { text: 'GitHub', link: 'http://liuyukuai.github.io'}
        ],
        sidebar: {
            '/': [
                {
                    title: '基础',
                    collapsable: false
                },
                {
                    title: '高级',
                    collapsable: true,
                    children: [
                        '/js/common/test'
                    ]
                }
            ]
        }
    }
}
