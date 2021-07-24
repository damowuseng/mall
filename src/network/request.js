import axios from "axios";

// export function request(config) {
//   // 创建axios实例
//   const instance = axios.create({
//     // 此处写入请求数据的网址
//     baseURL: '',
//     timeout: 5000
//   })
//   //发送网络请求
//   instance(config).then(res => {
//       console.log(res);
//     }
//   ).catch(err => {
//     console.log(err);
//   })
// }

// TODO 网络数据请求
export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  // axios拦截器
  instance.interceptors.request.use(config => {
    // 请求拦截
    // 检查url是否符合
    // 登录鉴权
    // 请求提示信息
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {

    return res
  }, error => {
    console.log(error);
  } )

  return instance(config)

}


