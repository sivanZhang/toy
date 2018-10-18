<template>
  <div class="row">
    <div v-for="(item,index) in products" :key="index" class="container" @click="getDetail(item,index)">
      <img :src="api+item.picture" alt="">
      <div>{{item.name}}
      <p class="accent-text-color">￥{{item.price}}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "discover",
  data() {
    return {
      products: [],
      api: this.axios.defaults.baseURL
    };
  },
  methods: {
    getDetail(product,urlId){
      this.$store.commit('setProduct',product);
      /* this.$router.push(`/details/${urlId+1}`); */
    }
  },
  created() {
    let self = this;
    self.axios
      .get("get_json")
      .then(res => {
        let aProduct = JSON.parse(res.data);
        self.products = [...aProduct];
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
  border: 1px solid #efefef;
}
.row > div {
  background: #fff;
  display: flex;
  justify-content: flex-start;
}
.row > div + div {
  border-top: 1px solid #ddd;
}
.row {
  margin-top: 15px;
}
</style>
