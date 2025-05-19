// types.d.ts

type TreeNode = {
  [key: string]: any
}

declare module 'deep-tree' {
    export const deepFilter: (
      list: TreeNode[],
      callback: (item: TreeNode, parent?: TreeNode) => boolean,
      children?: string,
      parent?: TreeNode
    ) => TreeNode[]

    export const deepSome: (
      list: TreeNode[],
      callback: (item: TreeNode, parent?: TreeNode) => boolean,
      children?: string,
      parent?: TreeNode
    ) => boolean

    export const deepEvery: (
      list: TreeNode[],
      callback: (item: TreeNode, parent?: TreeNode) => boolean,
      children?: string,
      parent?: TreeNode
    ) => boolean

    export const deepFind: (
      list: TreeNode[],
      callback: (item: TreeNode, parent?: TreeNode) => boolean,
      children?: string,
      parent?: TreeNode
    ) => TreeNode | undefined

    export const deepEach: (
      list: TreeNode[],
      callback: (item: TreeNode, parent?: TreeNode) => void,
      children?: string,
      parent?: TreeNode
    ) => void

    export const deepMap: (
      list: TreeNode[],
      callback: (item: TreeNode, parent?: TreeNode) => TreeNode,
      children?: string,
      parent?: TreeNode
    ) => TreeNode[]
}
