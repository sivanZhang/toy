<template>
<div class="container">
    <header class="text-center row"><span class="h4">个人中心</span></header>
    <div class="title" @click="toChange">
        <div class="col1"><img class="user-img" :src="image_src" alt=""></div>
        <div class="col2">Phone:{{phone_number}}</div>
        <div class="col3 text-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
    </div>
    <ul class="text-left row links">
        <router-link tag="li" to="/waiting">Settings<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></router-link>
        <router-link tag="li" to="/waiting">Help<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></router-link>
        <li @click="sign_out">Sign out<i class="fa fa-pull-right fa-angle-right" aria-hidden="true"></i></li>
    </ul>
    <foote-menu :navindex='2'></foote-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      phone_number: this.$cookie.get("user-name"),
      image_src: "",
      title:'More'
    };
  },
  methods: {
    sign_out() {
      this.$cookie.delete("user-name");
      this.$cookie.delete("portrain");
      this.$cookie.delete("portrait");
      localStorage.removeItem("token");
      this.$router.push("/login");
      $().message("Logged out");
    },
    toChange() {
      this.$router.push("/change");
    }
  },
  beforeMount(){
    //头像源文件，如果修改则用修改的头像，否则用登录时接受的头像
    let portrait = this.$cookie.get("portrait"),
      portrain = this.$cookie.get("portrain");
    if (portrain) {
      this.image_src = portrain;
    } else {
      this.image_src = portrait;
    }
  }
  ,
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
      document.title='TeamLink-'+this.title;
  }
}
</script>

<style scoped>
li {
  padding: 15px 0;
}
ul.links {
  background-color: #fff;
  padding: 0px 15px;
  border-top: 1px solid #e1e4e8;
  border-bottom: 1px solid #e1e4e8;
}
li + li {
  border-top: 1px solid #e1e4e8;
}
.user-img {
  width: 60px;
  height: 60px;
  border-radius: 3px;
}
.title {
  padding: 10px 0;
  width: 100%;
  display: table;
}
.col1,
.col2,
.col3 {
  display: table-cell;
}
.col1 {
  vertical-align: middle;
  width: 75px;
}
.col2 {
  vertical-align: bottom;
}
.col3 {
  vertical-align: middle;
}
</style>
