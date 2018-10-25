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
         
        <div><mt-swipe class="item-img" :auto="0">
        <mt-swipe-item class="slide1">
            <img :src="api+product.picture" alt="">
        </mt-swipe-item>
        <mt-swipe-item class="slide2">
            <img :src="api+product.picture" alt="">
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
            <img :src="api+product.picture" alt="">
        </mt-swipe-item>
        </mt-swipe></div>
        <div class="product_name">
            {{product.name}}
        </div>
        <p class="accent-text-color price">
            ￥{{product.price}}
        </p>
    </div>
</template>
<script>
export default {
  data() {
    return {
        api: this.axios.defaults.baseURL,
        product:Object.assign(this.$store.state.product)
    };
  },
  methods:{

  }
  ,
  mounted(){
    let imgWidth = $(".item-img").width();

    $(".item-img>img,.item-img").height(imgWidth);
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
.item-img /deep/ img{
    width: 100%;
}
.product_name{
    padding: 15px;
}
.price{
    font-style: 14px;
    padding: 15px;
}
</style>