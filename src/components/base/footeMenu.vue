<template>
  <ul class="row light-primary-color">
    <li class="col-xs-4"
    v-for="(item, index) in nav"
    @click="routerLink(item.path)"
    :class="navindex == index ?'base-color':''"
    :key="index">
    <img :src="navindex == index ? item.activeSrc : item.src" alt="">
    <div v-show="navindex !== index">{{item.name}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          src: require(`../../assets/icons/home.png`),
          activeSrc: require(`../../assets/icons/home_act.png`),
          name: `主页`,
          path: "/"
        },
        {
          src: require(`../../assets/icons/chat.png`),
          activeSrc: require(`../../assets/icons/chat_act.png`),
          name: `消息`,
          path: "/chat"
        },
        {
          src: require(`../../assets/icons/user.png`),
          activeSrc: require(`../../assets/icons/user_act.png`),
          name: `用户`,
          /* path: `/user-center` */
          path: this.$cookie.get("user-name") ? "/user-center" : "/login"
          //如果没有登录，则链接到登录页面
        }
      ]
    };
  },
  props: ["navindex"],
  methods: {
    routerLink(path) {
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
  padding: 4px 0;
  text-align: center;
  color: #757575;
  font-size: 12px;
}
li img {
  height: 22px;
}
li.base-color img{
  height: 42px;
}
</style>
