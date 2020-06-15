import axios from "axios";
import util from "./util.js";
// import store from "../store/index";
import {
  getToken
} from './tools.js'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

import {baseUrl} from '@/configs/back-config'
const baseURL = process.env.NODE_ENV !== 'production' ? baseUrl.dev : baseUrl.pro;
// const baseURL = baseUrl.;

const service = axios.create({
  baseURL: baseURL + '/',
  timeout: 24000
});

// http request 拦截器
service.interceptors.request.use(
  config => {
    let token = getToken()
    if (token) {
      config.headers.Authorization = "Bearer " + token
    }
    if (process.env.NODE_ENV !== 'production') console.log(config)
    return config;
  },
  error => {
    util.warning(error);
    return Promise.reject(error);
  }
);
//响应拦截器即异常处理
service.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV !== 'production') console.log(response)
    if (response.data.code == "03") {
      sessionStorage.setItem("user", "");
      window.location.reload();
    }
    return response;
  },
  err => {
    // store.commit("changeSubmit", true);
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          util.warning("错误请求", "error");
          break;
        case 401:
          util.warning("未授权，请重新登录", "error");
          break;
        case 403:
          util.warning("拒绝访问", "error");
          break;
        case 404:
          util.warning("请求错误,未找到该资源", "error");
          break;
        case 405:
          util.warning("请求方法未允许", "error");
          break;
        case 408:
          util.warning("请求超时", "error");
          break;
        case 500:
          util.warning("服务器端出错", "error");
          break;
        case 501:
          util.warning("网络未实现", "error");
          break;
        case 502:
          util.warning("网络错误", "error");
          break;
        case 503:
          util.warning("服务不可用", "error");
          break;
        case 504:
          util.warning("网络超时", "error");
          break;
        case 505:
          util.warning("http版本不支持该请求", "error");
          break;
        default:
        util.warning(`连接错误${err.response.status}`, "error");
      }
    } else {
      util.warning("连接到服务器失败", "error");
    }
    util.warning("err" + err);
    return Promise.resolve(err.response);
  }
);

export default {
  baseURL,
  get(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: "get",
        url,
        params: param
      }).then(res => {
        resolve(res);
      });
    });
  },
  post(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: "post",
        url,
        data: param
      }).then(res => {
        resolve(res);
      });
    });
  },
  put(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: "put",
        url,
        data: param
      }).then(res => {
        resolve(res);
      });
    });
  },
  delete(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: "delete",
        url,
        data: param
      }).then(res => {
        resolve(res);
      });
    });
  },
  uploadFile(url, param) {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      for (var attr in param) {
        formData.append(attr, param[attr]);
      }
      service({
        //添加请求头
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        url,
        data: formData,
        cancelToken: source.token
      }).then(res => {
        resolve(res);
      });
    })
  },
  downloadpost(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: "post",
        url,
        data: param,
        responseType: "blob"
      }).then(res => {
        resolve(res);
      });
    });
  },
  downloadget(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: "get",
        url,
        responseType: "blob",
        params: param
      }).then(res => {
        resolve(res);
      });
    });
  }
};

const baseget = (url, param) => {
  return new Promise((resolve, reject) => {
    service({
      method: "get",
      url,
      params: param
    }).then(res => {
      resolve(res);
    });
  });
};
const basepost = (url, param) => {
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url,
      data: param,
      responseType: "blob"
    }).then(res => {
      resolve(res);
    });
  });
};
