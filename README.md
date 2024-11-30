# DEEP-TREE

> 提供一系列对树状数组进行深度遍历操作的方法。

## Functions

### deepFilter

```ts
export type DeepFilter = (
    // 遍历前的树状列表
    list: TreeNode[],
    // 遍历回调方法
    callback: (item: TreeNode, parent?: TreeNode) => boolean,
    // 子项字段名，默认 `children`
    children?: string,
    // 父节点对象，一般不需要外部传入
    parent?: TreeNode
) => TreeNode[]; // 遍历后的树状列表
```

### deepSome

```ts
export type DeepSome = (
    // 遍历前的树状列表
    list: TreeNode[],
    // 遍历回调方法
    callback: (item: TreeNode, parent?: TreeNode) => boolean,
    // 子项字段名，默认 `children`
    children?: string,
    // 父节点对象，一般不需要外部传入
    parent?: TreeNode
) => boolean; // 是否满足
```

### deepEvery

```ts
export type DeepEvery = (
    // 遍历前的树状列表
    list: TreeNode[],
    // 遍历回调方法
    callback: (item: TreeNode, parent?: TreeNode) => boolean,
    // 子项字段名，默认 `children`
    children?: string,
    // 父节点对象，一般不需要外部传入
    parent?: TreeNode
) => boolean; // 是否满足
```

### deepFind

```ts
export type DeepFind = (
    // 遍历前的树状列表
    list: TreeNode[],
    // 遍历回调方法
    callback: (item: TreeNode, parent?: TreeNode) => boolean,
    // 子项字段名，默认 `children`
    children?: string,
    // 父节点对象，一般不需要外部传入
    parent?: TreeNode
) => TreeNode | undefined; // 匹配项
```

### deepEach

```ts
export type DeepEach = (
    // 遍历前的树状列表
    list: TreeNode[],
    // 遍历回调方法
    callback: (item: TreeNode, parent?: TreeNode) => void,
    // 子项字段名，默认 `children`
    children?: string,
    // 父节点对象，一般不需要外部传入
    parent?: TreeNode
) => void; // undefined
```

### deepMap

```ts
export type DeepMap = (
    // 遍历前的树状列表
    list: TreeNode[],
    // 遍历回调方法
    callback: (item: TreeNode, parent?: TreeNode) => TreeNode,
    // 子项字段名，默认 `children`
    children?: string,
    // 父节点对象，一般不需要外部传入
    parent?: TreeNode
) => TreeNode[]; // 遍历后的树状列表
```

## Other

### TreeNode

```ts
export type TreeNode = {
    [key: string]: any;
    // 子节点字段名由 children 参数决定
};
```
