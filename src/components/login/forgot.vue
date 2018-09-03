<template>
<div>
    <div class="container"><back></back></div>
    <form class="container">
        <div class="text-center title">
          修改密码
          </div>
        <input v-model.lazy="user.phone" @blur="test_phone" class="form-control" type="number" placeholder="手机号码">
        <div class="relative">
            <input v-model.lazy="user.phonecode" @blur="test_phonecode" class="form-control" type="text" name="verification" placeholder="短信验证码">
            <button @click="send_code" id="send_code" class="base-color" type="button">发送验证码</button>
        </div>
        <input v-model.lazy="user.password" class="form-control" type="password" name="phone_number" placeholder="新的密码">
        <button  @click='submit' :disabled="isDisabled" id="submit" type="button" class="default-primary-color common-btn">修改密码</button>
        <p class="text-center">
            修改成功后
            <router-link to="/login" class="base-color">登录</router-link>
        </p>
        <div v-if="msg.length" class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {{message}}
        </div>
    </form>
</div>
</template>

<script>
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
        password: null,
        phonecode: null
      }
    };
  },
  computed: {
    message: function() {
      return this.msg.toString();
    },
    isDisabled() {
      if (!this.user.phone || !this.user.password || !this.user.phonecode) {
        return true;
      } else {
        return false;
      }
    },
    regtestPhone() {
      return !/[0-9]+/.test(this.user.phone);
    }
  },
  methods: {
    setInfo(info) {
      this.msg.pop();
      this.msg.push(info);
    },
    submit() {
      if (this.regtestPhone) {
        this.setInfo("Please enter your correct phone number");
      } else {
        this.axios
          .post(
            "/users/find_password?json",
            this.$qs.stringify(this.user)
          )
          .then(result => {
            console.log(result);
            this.setInfo(result.data.msg);
          })
          .catch(error => {
            this.setInfo(error);
          });
      }
    },
    test_phonecode() {
      /* 验证码是否正确 */
      if (!/^\d{4}$/.test(this.user.phonecode)) {
        this.setInfo("Please enter a four-digit verification code!");
      } else {
        this.axios
          .get(
            "/users/phonecode/" +
              this.user.phone +
              "/" +
              this.user.phonecode +
              "?json"
          )
          .then(result => {
            if (result.data.status == "ok") {
              return;
            } else {
              this.setInfo(result.data.msg);
            }
          })
          .catch(error => {
            this.setInfo(error);
          });
      }
    },
    send_code() {
      /* 发送验证码 */
      if (this.regtestPhone) {
        this.setInfo("Please fill in the correct phone number first!");
      } else {
        this.axios
          .get(
            "/users/phonecode/" +
              this.user.phone +
              "?json&codetype=1"
          )
          .then(result => {
            this.setInfo(result.data.msg);
          })
          .catch(error => {
            this.setInfo(error);
          });
      }
    },
    test_phone() {
      if (this.regtestPhone) {
        this.setInfo("Please enter your correct phone number");
      }
    }
  }
};
</script>

<style scoped>
@import url(../../../static/css/login.css);
p {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid rgba(48, 51, 57, 0.15);
}

</style>
