import { deepEach } from '../src/deep'
import 'jest-extended'

test('deepEach - 常规测试', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    deepEach(treeData, item => {
        item.value = item.value ** 2
    })

    expect(treeData).toEqualCustom([
        { value: 1 },
        { value: 4, children: [{ value: 9 }, { value: 0 }] },
        { value: 0, children: [{ value: 9 }, { value: 16 }] }
    ])
})

test('deepEach - 父子节点关联判断', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 2 }, { value: 0 }] },
        { value: 3, children: [{ value: 3 }, { value: 4 }] }
    ]

    deepEach(treeData, (item, parent) => {
        item.value = parent ? item.value * 2 : item.value ** 2
    })

    expect(treeData).toEqualCustom([
        { value: 1 },
        { value: 4, children: [{ value: 4 }, { value: 0 }] },
        { value: 9, children: [{ value: 6 }, { value: 8 }] }
    ])
})
