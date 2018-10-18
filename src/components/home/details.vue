<template>
    <div>
        <header>
                <div>
                    <i @click="$router.go(-1)" class="fa fa-lg fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="submenu">
                    <span>商品</span>
                    <span>详情</span>
                    <span>留言</span>
                </div>
                <div>
                    <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
                </div>
        </header>
        <div><mt-swipe class="row" :auto="3000">
        <mt-swipe-item class="slide1">
            <img :src="api+product.picture" alt="">
        </mt-swipe-item>
        <mt-swipe-item @click.native="test" class="slide2">
            <img :src="api+product.picture" alt="">
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
            <img :src="api+product.picture" alt="">
        </mt-swipe-item>
        </mt-swipe></div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
        api: this.axios.defaults.baseURL,
        product:this.$store.state.product,
    };
  },
  methods:{

  }
};
</script>
<style lang="less" scoped>
header{
    padding: 10px 15px;
    display: flex;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    align-items: center;
    div.submenu{
        flex: 3 1 auto;
        display: flex;
        justify-content: space-around;
    }
    div:not(.submenu){
        flex: 1 1 auto;
        font-size: 16px;
    }
    div:last-of-type{
        text-align: right;
    }
}
</style>