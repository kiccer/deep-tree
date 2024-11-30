import { deepMap } from '../src/deep-tree'
import 'jest-extended'

test('deepMap - 常规测试', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepMap(treeData, item => ({
            ...item,
            value: item.value ** 2
        }))
    ).toEqualCustom([
        { value: 1 },
        { value: 4, children: [{ value: 9 }, { value: 0 }] },
        { value: 0, children: [{ value: 9 }, { value: 16 }] }
    ])
})

test('deepMap - 父子节点关联判断', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 2 }, { value: 0 }] },
        { value: 3, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepMap(treeData, (item, parent) => ({
            ...item,
            value: parent ? item.value * 2 : item.value ** 2
        }))
    ).toEqualCustom([
        { value: 1 },
        { value: 4, children: [{ value: 4 }, { value: 0 }] },
        { value: 9, children: [{ value: 6 }, { value: 8 }] }
    ])
})
