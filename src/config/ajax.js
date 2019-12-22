import axios from 'axios'

export default function (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    type = type.toUpperCase()
    let promise

    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      }
      url = url + '?' + dataStr
      // 发送请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
