export function createTreeData (options) {
    const {
        // 节点创建方法
        createNode,
        // 每个节点的子节点数量随机范围
        nodeLimits = [3, 5],
        // 子项字段名
        children = 'children',
        // 最大深度
        deepLimit = 3,
        // 父级节点
        parent
    } = options ?? {}

    const count = Math.round(Math.random() * (nodeLimits[1] - nodeLimits[0])) + nodeLimits[0]

    return Array(count).fill().map(() => {
        const node = createNode({ parent }) ?? {}

        if (deepLimit > 0) {
            node[children] = createTreeData({
                ...options,
                deepLimit: deepLimit - 1,
                parent: { ...node }
            })
        }

        return node
    })
}
