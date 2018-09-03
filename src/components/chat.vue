<template>
  <div class="container">
    <header class="text-center row"><span class="h4">消息</span></header>
    <foote-menu :navindex='1'></foote-menu>
  </div>
</template>

<script>
export default {
  name: "chat",
  data(){
    return{
      title:'chat'
    }
  },
  mounted() {
      document.title='Toy-'+this.title;
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round-btn {
  display: inline-block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  padding-top: 18px;
  position: absolute;
  right: 15px;
  bottom: 65px;
}
.recent {
  font-size: 18px;
  padding: 20px 0 10px;
}
.item-header{
	line-height: 120px;
	text-align: center;
	color: grey;
	height: 120px;
	background: #efefef;
}
.item-footer{
	height: 60px;
}
.collections-item{
	border:#e1e4e8 1px solid;
}
.btn-set{
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 0px;
	margin-top: 13px;
  max-width: 100%;
}
.message{
	padding:10px 15px 10px 15px;
}
.item-footer .col-xs-2{
  padding-left: 0px;
}
</style>
