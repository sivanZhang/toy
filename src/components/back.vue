<template>
<div class="text-left back">
    <span @click="go_back"><i class="fa fa-2x fa-angle-left" aria-hidden="true"></i></span>
    <router-link class="pull-right" to="/">主页</router-link>
</div>
</template>

<script>
export default {
    methods: {
        go_back() {
            this.$router.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
    line-height: 50px;
    color: grey;
    height: 50px;
}
a {
    color: inherit;
}
</style>
