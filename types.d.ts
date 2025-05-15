// types.d.ts

export type TreeNode = {
  [key: string]: any;
};

export type deepFilter = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => TreeNode[];

export type deepSome = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => boolean;

export type deepEvery = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => boolean;

export type deepFind = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => boolean,
  children?: string,
  parent?: TreeNode
) => TreeNode | undefined;

export type deepEach = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => void,
  children?: string,
  parent?: TreeNode
) => void;

export type deepMap = (
  list: TreeNode[],
  callback: (item: TreeNode, parent?: TreeNode) => TreeNode,
  children?: string,
  parent?: TreeNode
) => TreeNode[];
