<template>
  <header class="row">
      <slot></slot>
  </header>
</template>

<script>
export default {
    name:'pageHeader',
  data() {
    return {
     
    };
  }
};
</script>

<style scoped>
header.row{
    color: gray;
    text-align: center;
    border-bottom: 1px solid #e1e4e8;
    height: 50px;
    line-height: 50px;
}
</style>
