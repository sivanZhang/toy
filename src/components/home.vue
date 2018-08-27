<template>
  <div class="container">
    <header class="text-center row">
      <i class="fa fa-search" ref="icon_search" aria-hidden="true"></i>
      <input @focus="search" id="search" type="search" class="form-control" placeholder="搜索">
    </header>
	  <nav class="flex text-center">
      <div><img src="../assets/icons/boy.svg" alt="icon"><br>男孩</div>
      <div><img src="../assets/icons/girl.svg" alt="icon"><br>女孩</div>
      <div><img src="../assets/icons/jimu.svg" alt="icon"><br>益智</div>
      <div><img src="../assets/icons/yinyue.svg" alt="icon"><br>音乐</div>
      <div><img src="../assets/icons/shoubiao.svg" alt="icon"><br>电子数码</div>
      <div><img src="../assets/icons/qiu.svg" alt="icon"><br>体育</div>
      <div><img src="../assets/icons/wanou.svg" alt="icon"><br>玩偶</div>
      <div><img src="../assets/icons/huaban.svg" alt="icon"><br>乘骑</div>
      <div><img src="../assets/icons/sheji.svg" alt="icon"><br>射击</div>
      <div><img src="../assets/icons/yingyong.svg" alt="icon"><br>其他</div>
    </nav>
    <foote-menu :navindex='0'></foote-menu>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
	};
  },
  methods:{
    search(){
      this.$router.push('/search')
    }
  }
};
</script>

<style scoped>
.flex div{
width: 20%;
}
.flex div:first-child{
margin-bottom: 10px;
}
.flex{
  border: 1px solid #42b983;
  border-radius: 6px;
  padding: 15px 0;
  margin-top: 15px;
}
.flex img{
  height: 40px;
  margin-bottom: 5px;
}
#search {
  border: none;
  outline: none;
  border-radius: 17px;
  border: 1px solid #e1e4e8;
  width: 100%;
  padding-left: 34px;
  color: #333;
  height: 34px;
  font-size: 12px;
  width: 70%;
  margin-bottom: 6px;
  display: inline-block;
}
.fa-search{
	transform: translateX(30px);
	color: gray;
}
</style>
