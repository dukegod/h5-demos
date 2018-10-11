<template>
  <div class="wrapper">
    <div class="rtc-300">
      我是一个400*400的正方形
    </div>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>

    <p> 一下为引入的第三方插件样式：</p>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { MessageBox } from 'mint-ui';
  import { Button } from 'mint-ui';

  Vue.component(Button.name, Button);

  export default {
    mounted() {
      // MessageBox({
      //   title: '提示',
      //   message: '确定执行此操作?',
      //   // showCancelButton: true
      // });
    }
  };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 30px;
}
</style>

<style lang="less" scoped>

@baseFont: 2;

.wrapper div {
  height: 1rem;
}
.rtc-300 {
  width: 400px/@baseFont;
  height: 400px/@baseFont !important;
  background-color: black;
  color: white;
  font-size: 30px/@baseFont;
}
.box1 {
  /* 750 * 20% */
  width: 150px/@baseFont;
  background-color: coral;
}
.box2 {
  /* 750 * 40% */
  width: 300px/@baseFont;
  background-color: skyblue;
}
.box3 {
  /* 750 * 60% */
  width: 450px/@baseFont;
  background-color: palegreen;
}
.box4 {
  /* 750 * 80% */
  width: 600px/@baseFont;
  background-color: wheat;
}
.box5 {
  /* 750 * 100% */
  width: 750px/@baseFont;
  background-color: darkred;
}
</style>
