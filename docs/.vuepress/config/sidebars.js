const nodejs = [
    {
        title: '命令行交互',
        collapsable: false,
        children: [
            '命令行交互/玩转Nodejs命令行'
        ]
    },
    {
        title: '测试',
        collapsable: false,
        children: [
            '测试/Jest实战：单元测试与服务测试',
            '测试/Jest进阶：接入ts、集成测试与覆盖率统计'
        ]
    },
    {
        title: '源码探索',
        collapsable: false,
        children: [
            '源码探索/实现简易区块链',
            '源码探索/负载均衡：轮询调度算法实现',
            '源码探索/VemoJS源码拆解',
            '源码探索/koa源码：架构设计',
            '源码探索/koa源码：核心库原理',
            '源码探索/koa源码：手动实现',
        ]
    }
]
const tools = [
    {
        title: 'Git的基本使用',
        collapsable: false,
        children: [
            'Git基础使用/基础命令',
            'Git基础使用/Git实践'
        ]
    }
]
module.exports={
    '/NodeJS/': nodejs,
    '/Tools/': tools
}
