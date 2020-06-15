export const forEach = (arr, fn) => {
    if (!arr.length || !fn) return
    let i = -1
    let len = arr.length
    while (++i < len) {
      let item = arr[i]
      fn(item, i, arr)
    }
  }
  
  export const TOKEN_KEY = 'http-token'
  
  export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  }
  
  export const getToken = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) return token
    else return ""
  }
  
  export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
  }