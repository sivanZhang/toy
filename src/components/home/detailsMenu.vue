<template>
    <div class="submenu">
        <div class="icons">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
        </div>
        <div class="dark-primary-color">
            加入购物车
        </div>
        <div class="accent-color">
            置换
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.submenu {
    border-top: 1px solid #ddd;
  .flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  color: #fff;
  .icons {
    display: flex;
    justify-content: space-around;
    color: #333;
  }
  div {
    padding: 10px 15px;
    flex: 1 1 0;
    text-align: center;
  }
}
</style>