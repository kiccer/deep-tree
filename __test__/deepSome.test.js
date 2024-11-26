import { deepSome } from '../src/deep'
import 'jest-extended'

test('deepSome - 常规测试', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepSome(treeData, item => item.value > 3)
    ).toEqualCustom(true)

    expect(
        deepSome(treeData, item => item.value === 0)
    ).toEqualCustom(true)

    expect(
        deepSome(treeData, item => item.value > 4)
    ).toEqualCustom(false)
})

test('deepSome - 父子节点关联判断', () => {
    const treeData = [
        { value: 1 },
        { value: 2, children: [{ value: 3 }, { value: 0 }] },
        { value: 0, children: [{ value: 3 }, { value: 4 }] }
    ]

    expect(
        deepSome(treeData, (item, parent) => parent ? item.value > 3 : item.value < 1)
    ).toEqualCustom(true)
})
