/**
 * 深层遍历 filter 函数
 *
 * @param   {Array}  list       遍历前的树状列表
 * @param   {Function}  callback  遍历回调方法 `item => Boolean`
 * @param   {String}  children  子项字段名，默认 `children`
 *
 * @return  {Array}            遍历后的树状列表
 */
export function deepFilter (list, callback, children = 'children', parent) {
  return list.reduce((ls, item) => {
    if (!callback(item, parent)) return ls

    const cloneItem = { ...item }

    if (Array.isArray(cloneItem[children])) {
      cloneItem[children] = deepFilter(
        cloneItem[children],
        callback,
        children,
        item
      )
    }

    return ls.concat(cloneItem)
  }, [])
}

/**
 * 深层遍历 some 函数
 *
 * @param   {Array}  list       遍历前的树状列表
 * @param   {Function}  callback  遍历回调方法 `item => Boolean`
 * @param   {String}  children  子项字段名，默认 `children`
 *
 * @return  {Boolean}            是否满足
 */
export function deepSome (list, callback, children = 'children', parent) {
  return list.some(item => {
    const bool = callback(item, parent)

    return bool || (
      Array.isArray(item[children]) &&
      deepSome(item[children], callback, children, item)
    )
  })
}

/**
 * 深层遍历 every 函数
 *
 * @param   {Array}  list       遍历前的树状列表
 * @param   {Function}  callback  遍历回调方法 `item => Boolean`
 * @param   {String}  children  子项字段名，默认 `children`
 *
 * @return  {Boolean}            是否满足
 */
export function deepEvery (list, callback, children = 'children', parent) {
  return list.every(item => {
    const bool = callback(item, parent)

    return bool && (
      !Array.isArray(item[children]) ||
      deepEvery(item[children], callback, children, item)
    )
  })
}

/**
 * 深层遍历 find 函数
 *
 * @param   {Array}  list       遍历前的树状列表
 * @param   {Function}  callback  遍历回调方法 `item => Boolean`
 * @param   {String}  children  子项字段名，默认 `children`
 *
 * @return  {[Object|Undefined]}            匹配项
 */
export function deepFind (list, callback, children = 'children', parent) {
  return list.find(item => callback(item, parent) ? item : deepFind(
    item[children] ?? [],
    callback,
    children,
    item
  ))
}

/**
 * 深层遍历 forEach 函数
 *
 * @param   {Array}  list       遍历前的树状列表
 * @param   {Function}  callback  遍历回调方法 `item => undefined`
 * @param   {String}  children  子项字段名，默认 `children`
 *
 * @return  {Undefined}            undefined
 */
export function deepEach (list, callback, children = 'children', parent) {
  return list.forEach(item => {
    callback(item, parent)

    if (Array.isArray(item[children])) {
      deepEach(item[children], callback, children, item)
    }
  })
}

/**
 * 深层遍历 map 函数
 *
 * @param   {Array}  list       遍历前的树状列表
 * @param   {Function}  callback  遍历回调方法 `item => item`
 * @param   {String}  children  子项字段名，默认 `children`
 *
 * @return  {Array}            遍历后的树状列表
 */
export function deepMap (list, callback, children = 'children', parent) {
  return list.map(item => {
    const cloneItem = callback(item, parent)

    if (Array.isArray(item[children])) {
      cloneItem[children] = deepMap(item[children], callback, children, item)
    }

    return cloneItem
  })
}
