import axios from 'axios'
import qs from 'qs'

const getUrl = (url) => {
  if (process.env.NODE_ENV == 'development') {
    return `/api${url}`;
  } else if (process.env.NODE_ENV == 'debug') {
    return `/api${url}`;
  } else if (process.env.NODE_ENV == 'production') {
    return `${url}`;
  }
};
const mockUrl = (url) => {
  return `/mock${url}`;
};

const _axios = ({url, params = {}, options}) => {
  let _options = Object.assign({
    method: 'post',
    withCredentials: true
  }, options)
  let [_params, _data] = _options.method === 'get' ? [params, ''] : ['', params]
  return axios({
    method: _options.method,
    url: url,
    params: _params, // get 接收的数据
    data: qs.stringify(_data), //post 接受的数据
    withCredentials: _options.withCredentials
  })
    .then(res => {
      console.log(res);
      let _res = res.data
      return _res
    })
    .catch(e => {
      return e
    })
};

export const $axios = ({url, params = {}, options}) => {
  return _axios({url: getUrl(url), params, options})
};

export const $mock = ({url, params = {}, options}) => {
  return _axios({
    url: mockUrl(url),
    params,
    options: Object.assign({
      mode: 'mock'
    }, options)
  })
};
