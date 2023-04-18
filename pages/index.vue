<template>
  <div class="root">
    <Tutorial />
    <div class="ball-box">
      <div class="ball1 ball"></div>
      <div class="ball2 ball"></div>
      <div class="ball3 ball"></div>
      <div class="ball4 ball"></div>
    oom-killer out of memory
    I want to be someone like Elon Musk
    </div>
    <a style="position:absolute;bottom:20px;transform: translateX(-50%);" href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023002954号-1</a>
  </div>
</template>

<script>
// import { getTestData } from '~/src/api/data'
// const {getTestData} = require('/src/api/data')
// import axios from 'axios'
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    console.log('geographic information system')
    // return data
    // $axios.get('https://sk2.fun/api/gettestdata').then(res=>{
    //   console.log(2222)
    // }).catch(err=>{
    //   console.log(333)
    //   console.log(err)
    // })
    // const testData = await $axios.get('https://sk2.fun/api/gettestdata')
    // console.log(testData)
    return {project: 'nuxt'}
  }
}
</script>

<style scoped>
.root {
  text-align: center;
}
@keyframes ball {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
}
@keyframes ball1 {
  from {
    left: 0px;
    top: 0px;
  }
  50% {
    left: 10px;
    top: 10px;
  }
  to {
    left: 0px;
    top: 0px;
    z-index: 4;
  }
}
@keyframes ball2 {
  from {
    left: 10px;
    top: 0px;
  }
  50% {
    left: 0px;
    top: 10px;
  }
  to {
    left: 10px;
    top: 0px;
    z-index: 3;
  }
}
@keyframes ball3 {
  from {
    left: 0px;
    top: 10px;
  }
  50% {
    left: 10px;
    top: 0px;
  }
  to {
    left: 0px;
    top: 10px;
    z-index: 2;
  }
}
@keyframes ball4 {
  from {
    left: 10px;
    top: 10px;
  }
  50% {
    left: 0px;
    top: 0px;
  }
  to {
    left: 10px;
    top: 10px;
    z-index: 1;
  }
}

.ball-box {
  position: absolute;
  top: 50px;
  left: 50px;
}

.ball {
  z-index: 4;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px;
  transition: all 1s;
  /* animation: ball 2s ease-in 0 infinite forwards; */
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}

.ball1 {
  position: absolute;
  top: 0;
  left: 0;
  background-color: chartreuse;
  animation: ball 1.3s infinite forwards, ball1 1.3s infinite forwards;
}

.ball2 {
  position: absolute;
  top: 0;
  left: 10px;
  background-color: cornflowerblue;
  animation: ball 1.3s infinite forwards, ball2 1.3s infinite forwards;
}

.ball3 {
  position: absolute;
  top: 10px;
  left: 0;
  background-color: coral;
  animation: ball 1.3s infinite forwards, ball3 1.3s infinite forwards;
}

.ball4 {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: pink;
  animation: ball 1.3s infinite forwards, ball4 1.3s infinite forwards;
}
</style>
