import { deepFilter } from '../src/deep'
import 'jest-extended'

test('deepFilter - 常规测试', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepFilter(treeData, item => item.value >= 1)
    ).toEqualCustom([
        { value: 1 },
        { value: 2, children: [{ value: 3 }] }
    ])
})

test('deepFilter - 父子节点关联判断', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepFilter(treeData, (item, parent) => parent ? item.value < 2 : item.value > 0)
    ).toEqualCustom([
        { value: 1 },
        { value: 2, children: [{ value: 0 }] }
    ])
})
