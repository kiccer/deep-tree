// types.d.ts

export type TreeNode = {
  [key: string]: any;
};

export type DeepFilter = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => TreeNode[];

export type DeepSome = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => boolean;

export type DeepEvery = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => boolean;

export type DeepFind = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => TreeNode | undefined;

export type DeepEach = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => void,
  children?: string,
  parent?: TreeNode
) => void;

export type DeepMap = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => TreeNode,
  children?: string,
  parent?: TreeNode
) => TreeNode[];
