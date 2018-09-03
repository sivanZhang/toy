<template>
<div>
    <div class="container"><back></back></div>
    <form class="container">
        <div class="text-center base-color title">
            <div>登录</div>
        </div>
        <input v-model="user.phone"  @change="test_phone" class="form-control" type="number" id="phone_number" placeholder="手机号码">
        <input v-model="user.password" class="form-control" type="password" name="phone_number" placeholder="登录密码">
        <button id="submit" @click="submit" type="button" class="default-primary-color  common-btn" :disabled='isDisabled'>登录</button>
        <div class="row">
            <router-link to="/signup" class="col-xs-6 base-color text-left">创建账号</router-link>
            <router-link to="/forgot" class="col-xs-6 base-color text-right">忘记密码?</router-link>
        </div>
        <div v-show="msg.length" class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {{message}}
        </div>
    </form>
</div>
</template>

<script>
import {base_api} from '../../../static/js/api.js'
import back from "../back";
export default {
  components: {
    back
  },
  data() {
    return {
      msg: [],
      user: {
        phone: null,
        password: null
      }
    };
  },
  computed: {
    message() {
      return this.msg.toString();
    },
    isDisabled() {
      if (!this.user.phone || !this.user.password) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    /* 设置提示信息*/
    setInfo(info) {
      let self = this;
      self.msg.pop();
      self.msg.push(info);
    },
    submit() {
      this.axios
        .post("/users/login/?json", this.$qs.stringify(this.user))
        .then(result => {
          if (result.data.status == "ok") {
            this.$cookie.set("user-name", result.data.phone);
            this.$cookie.set("portrait",base_api+result.data.portrait);
            localStorage.setItem("token", "JWT" + " " + result.data.token);
            $().message("Login success");
           this.$router.push("/user-center");
          } else {
            this.setInfo(result.data.msg);
          }
        })
        .catch(error => {
          this.setInfo(error);
        });
    },
    test_phone() {
      if (!/[0-9]+/.test(this.user.phone)) {
        this.setInfo("请输入正确的手机号码!");
      }
    }
  }
};
</script>

<style scoped>
@import url(../../../static/css/login.css);
</style>
