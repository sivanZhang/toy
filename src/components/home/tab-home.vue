<template>
  <div>
    <nav class="flex text-center">
      <div><img src="../../assets/icons/boy.svg" alt="icon"><br>男孩</div>
      <div><img src="../../assets/icons/girl.svg" alt="icon"><br>女孩</div>
      <div><img src="../../assets/icons/jimu.svg" alt="icon"><br>益智</div>
      <div><img src="../../assets/icons/yinyue.svg" alt="icon"><br>音乐</div>
      <div><img src="../../assets/icons/shoubiao.svg" alt="icon"><br>电子数码</div>
      <div><img src="../../assets/icons/qiu.svg" alt="icon"><br>体育</div>
      <div><img src="../../assets/icons/wanou.svg" alt="icon"><br>玩偶</div>
      <div><img src="../../assets/icons/huaban.svg" alt="icon"><br>乘骑</div>
      <div><img src="../../assets/icons/sheji.svg" alt="icon"><br>射击</div>
      <div><img src="../../assets/icons/yingyong.svg" alt="icon"><br>其他</div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "discover",
  data() {
    return {
	  };
  }
}
</script>

<style scoped>
.flex div{
width: 20%;
}
.flex div:first-child{
margin-bottom: 10px;
}
.flex{
  border: 1px solid #388E3C;
  border-radius: 6px;
  padding: 15px 0;
  margin-top: 15px;
}
.flex img{
  height: 40px;
  margin-bottom: 5px;
}
</style>
