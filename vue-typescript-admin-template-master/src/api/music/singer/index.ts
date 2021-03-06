import request from '@/utils/requestJava';
import axios from 'axios';

let blog_api = process.env.VUE_APP_BLOG_API;
// 不明白生产环境的url是zhengzemin.cn:3000 + //file.dev的，而且blog_api这个还多了个单引号
// console.log(blog_api)
if(process.env.NODE_ENV !== 'development'){
  blog_api =  "http://file.dev.zhengzemin.cn:81";
  // console.log(process.env.VUE_APP_BLOG_API)
}
 
 
export const getSinger = (data: any) =>
  request({
    url: '/bk/music/singer/list',
    method: 'post',
    data
  })

  export const editSinger = (data: any) =>
  request({
    url: '/bk/music/singer/edit',
    method: 'post',
    data
  })

  


  export const uploadSinger = (data: any) =>
  request({
    url: '/bk/music/singer/upload',  
    method: 'post',
    data
  })

  export const delSinger = (data: any) =>
  request({
    url: '/bk/music/singer/del',  
    method: 'post',
    data
  })
 
  // export const getSinger = (param: any) => {
  //   // console.log(process.env);
  //   // console.log(blog_api)
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(`${blog_api}/bk/music/singer/list`, param)
  //       .then(res => {
  //         const data = res.data.data;
  //         data[1].items = JSON.parse(data[1].items)

  //         resolve(data);
  //       })
  //       .catch(err => {
  //         reject(err.data); 
  //       });
  //   });
  // };



  // export const uploadSinger = (param: any) => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(`${blog_api}/bk/music/singer/upload`, param, {
  //         headers: { "Content-Type": "multipart/form-data" }
  //       })
  //       .then(res => {
  //         resolve(res.data);
  //       })
  //       .catch(err => {
  //         reject(err.data);
  //       });
  //   });
  // };


  // export const editSinger = (param: any) => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(`${blog_api}/bk/music/singer/edit`, param, {
  //         headers: { "Content-Type": "multipart/form-data" }
  //       })
  //       .then(res => {
  //         resolve(res.data);
  //       })
  //       .catch(err => {
  //         reject(err.data);
  //       });
  //   });
  // };



  // export const delSinger = (param: any) => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(`${blog_api}/bk/music/singer/del`, param)
  //       .then(res => {
  //         resolve(res.data.data);
  //       })
  //       .catch(err => {
  //         reject(err.data);
  //       });
  //   });
  // };