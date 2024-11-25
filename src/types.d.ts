export type TreeNode<T> = T & {
    [key: string]: any
}

export type Callback<T> = (item: T, parent?: T) => boolean

export function deepFilter<T>(
  list: TreeNode<T>[],
  callback: Callback<T>,
  children?: string,
  parent?: TreeNode<T>
): TreeNode<T>[];

export function deepSome<T>(
  list: TreeNode<T>[],
  callback: Callback<T>,
  children?: string,
  parent?: TreeNode<T>
): boolean;
