import { deepEvery } from '../src/deep-tree'
import 'jest-extended'

test('deepEvery - 常规测试', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepEvery(treeData, item => item.value >= 0)
    ).toEqualCustom(true)

    expect(
        deepEvery(treeData, item => item.value < 3)
    ).toEqualCustom(false)

    expect(
        deepEvery(treeData, item => item.value < 5)
    ).toEqualCustom(true)
})

test('deepEvery - 父子节点关联判断', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 6 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepEvery(treeData, (item, parent) => parent ? item.value > 2 : item.value < 4)
    ).toEqualCustom(true)
})
