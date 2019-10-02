const fetch = require('node-fetch')
const { URLSearchParams } = require('url')

class SafeRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  fetch(url, options) {
    let fetchRequest
    if (options.method === 'GET') {
      fetchRequest = fetch(
        `${this.baseUrl}${url}${this._urlParams(options.params)}`
      )
    } else {
      fetchRequest = fetch(`${this.baseUrl}${url}`, {
        method: options.method,
        body: this._bodyParams(options.params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...options.headers
        }
      })
    }
    let result = {
      code: 0,
      message: '',
      data: []
    }
    return new Promise((resolve, reject) => {
      fetchRequest
        .then(res => res.json())
        .then(json => {
          result.code = 1
          result.message = 'success'
          result.data = json
          resolve(result)
        })
        .catch(error => {
          result.message = '与后端接口请求异常'
          reject(result)
        })
    }).catch(error => error)
  }

  _urlParams(params = {}) {
    let paramsStr = ''
    Object.keys(params).forEach(key => {
      paramsStr += `&${key}=${params[key]}`
    })
    return paramsStr
  }

  _bodyParams(params = {}) {
    const param = new URLSearchParams()
    Object.keys(params).forEach(key => {
      param.append(key, params[key])
    })
    return param
  }
}

module.exports = SafeRequest
