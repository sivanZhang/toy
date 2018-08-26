<template>
  <ul class="row">
    <li class="col-xs-4"
    v-for="(item, index) in nav"
    @click="routerLink(index, item.path)"
    :key="index" v-html="item.icon"
     :class="navindex == index ? 'active' : ''">
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { icon: `<i class="fa fa-2x fa-balance-scale" aria-hidden="true"></i>`, path: '/' },
        {
          icon: `<i class="fa fa-2x fa-commenting-o" aria-hidden="true"></i>`,
          path: "/chat"
        },
        {
          icon: `<i class="fa fa-2x fa-user-o" aria-hidden="true"></i>`,
          path: this.$cookie.get("user-name") ? "/user-center" : "/login"
          //如果没有登录，则链接到登录页面
        }
      ]
    };
  },
  props: ["navindex"],
  methods: {
    routerLink(index, path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
ul {
  background-color: #fff;
  border-top: #ddd 1px solid;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  color: gray;
}
.active {
  color: #42b983;
}
</style>
