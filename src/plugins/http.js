// 插件模块
import camelcaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";
import router from "../router";
import axios from "axios";
import { Loading, Message } from "element-ui";
const myHttpServer = {};

myHttpServer.install = function(Vue) {
  // 添加实例方法
  Vue.prototype.$axios = axios;
};

//

let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "加载中",
    background: "rgba(0,0,0,0,7)"
  });
}

function endLoading() {
  loading.close();
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 加载动画
    startLoading();
    if (localStorage.token) {
      // 设置统一的请求头 header
      config.headers.Authorization = localStorage.token;
    }
    const { data = {} } = config;
    config.data = snakeCaseKeys(data, { deep: true });
    return config;
  },
  error => {
    //
    Message.error("登录已过期，请重新登录！");
    // 跳转到登录页面
    router.push("/login");
    localStorage.clear();
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    // 结束加载动画
    endLoading();
    if (response.data.result === "log") {
      Message.error("登录已过期，请重新登录！");
      router.push("/login");
      localStorage.clear();
    } else if (response.data.result === "err") {
      Message.error(response.data.msg);
    }
    response.data = camelcaseKeys(response.data, { deep: true });
    return response.data;
  },
  error => {
    endLoading();
    Message.error(error.response.data);
    // 获取错误状态码
    const { status } = error.response;
    if (status == 401) {
      Message.error("登录已过期，请重新登录！");
      // 清除 token
      router.push("/login");
      localStorage.clear();
      // 跳转到登录页面
    }
    return Promise.reject(error);
  }
);
export default myHttpServer;
