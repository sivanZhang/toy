<template>
  <div class="container">
	<header class="text-center row">
		<i class="fa fa-search" ref="icon_search" aria-hidden="true"></i>
		<input v-model="search" id="search" type="search" class="form-control" placeholder="搜索">
	</header>
    <foote-menu :navindex='0'></foote-menu>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
	};
  }
};
</script>

<style scoped>
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
}
</style>
