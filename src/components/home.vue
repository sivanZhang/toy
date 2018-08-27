<template>
  <div class="container">
    <header class="text-center row">
      <i class="fa fa-search" ref="icon_search" aria-hidden="true"></i>
      <input @change="search" id="search" type="search" class="form-control" placeholder="搜索">
    </header>
	  <nav class="flex text-center">
      <div><img src="../assets/icons/boy.svg" alt="icon"><br>男孩</div>
      <div><img src="../assets/icons/boy.svg" alt="icon"><br>女孩</div>
      <div><img src="../assets/icons/boy.svg" alt="icon"></div>
      <div><img src="../assets/icons/boy.svg" alt="icon"></div>
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
      this.$root.pop
    }
  }
};
</script>

<style scoped>
.flex img{
  width: 100%;
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
