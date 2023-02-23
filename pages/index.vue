<template>
  <div>
    <Tutorial />
    <div class="ball-box">
      <div class="ball1 ball"></div>
      <div class="ball2 ball"></div>
      <div class="ball3 ball"></div>
      <div class="ball4 ball"></div>
    oom-killer
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
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
