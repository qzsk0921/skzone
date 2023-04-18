// import axios from 'axios';

// // 文档https://www.showdoc.com.cn/1211424298043743/6177193887360288
// const service = axios.create({
//   // baseURL: process.env.VUE_APP_BASE_API,
//   baseURL: 'https://sk2.fun/api',
//   timeout: 10000,
//   // nginx转发到后端Springboot 
//   withCredentials: true,
// });

// service.interceptors.request.use(
//   requestConfig => {

//     // do something before request is sent
//     // if (store.getters.token) {
//     //   requestConfig.headers['Authorization'] = store.getters.token;
//     // }
//     requestConfig.headers['Accesse-Control-Allow-Origin'] = "*"

//     return requestConfig;
//   },
//   error => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// service.interceptors.response.use(
//   response => {

//     // if (process.env.NODE_ENV !== 'production') console.log(response);

//     const res = response.data;
//     // if (res.code !== 200) {
//     //     // alert(res.msg);
//     //     Message({
//     //         type: 'error',
//     //         message: res.msg,
//     //         duration: 4 * 1000,
//     //     });
//     //     // 400	请求失败 401 未登录授权 403	无权限 409 数据不存在
//     //     return Promise.reject(new Error(res.msg || 'Error'));
//     // } else {
//     //     return res;
//     // }
//   },
//   error => {
//     console.log('err' + error); //for debug
//     return Promise.reject(new Error(error));
//   }
// );

// export default service;
