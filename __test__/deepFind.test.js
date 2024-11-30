import { deepFind } from '../src/deep-tree'
import 'jest-extended'

test('deepFind - 常规测试', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepFind(treeData, item => item.value === 1)
    ).toEqualCustom({ value: 1 })

    expect(
        deepFind(treeData, item => item.value === 2)
    ).toEqualCustom({ value: 2, children: [{ value: 3 }, { value: 0 }] })

    expect(
        deepFind(treeData, item => item.value === 3)
    ).toEqualCustom({ value: 3 })

    expect(
        deepFind(treeData, item => item.value === 0)
    ).toEqualCustom({ value: 0 })

    expect(
        deepFind(treeData, item => item.value === 4)
    ).toEqualCustom({ value: 4 })
})

test('deepFind - 父子节点关联判断', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepFind(treeData, (item, parent) => item.value !== 3 && parent?.value === 0)
    ).toEqualCustom({ value: 4 })
})
