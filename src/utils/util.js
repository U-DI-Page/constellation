/**
 *往localstorage里塞东西
 * @param {key} 键名
 * @param {value} 键值
 */
export function setLocalstorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 *从localstorage里取东西
 * @param {key} 键名
 */
export function getLocalStorage(key) {
  const result = localStorage.getItem(key);

  return result;
}
