<template>
  <keep-alive>
  <div class="container">
    <header class="text-center row">
      <i class="fa fa-search" ref="icon_search" aria-hidden="true"></i>
      <input @focus="search" id="search" type="search" class="form-control" placeholder="搜索">
    </header>
    <div class="btn-group" role="group" aria-label="...">
      <button
      v-for="(tab,index) in tabs"
      v-bind:key="index"
      v-bind:class="[{ active: currentTab === tab.path },'tab-button','btn']"
      v-on:click="currentTab = tab.path">
      {{ tab.name }}
      </button>
    </div>
    
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
    <foote-menu :navindex='0'></foote-menu>
  </div>
  </keep-alive>
</template>

<script>
import tabDiscover from "./tab-discover";
import tabHome from "./tab-home";
import tabMoments from "./tab-moments";
export default {
  name: "home",
  components: {
    tabDiscover,
    tabHome,
    tabMoments
  },
  data() {
    return {
      title: "Home",
      currentTab: "Home",
      tabs: [
        { path: "Home", name: "主页" },
        { path: "Discover", name: "发现" },
        { path: "Moments", name: "置换" }
      ]
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  methods: {
    search() {
      this.$router.push("/search");
    }
  },
  mounted() {
    document.title = "Toy-" + this.title;
    document.body.style.backgroundColor = "#ebebeb";
  },
  beforeDestroy() {
    document.body.style.backgroundColor = "inherit";
  }
};
</script>

<style scoped lang="less">
@textColor: #388e3c;
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .btn {
    flex: 1 1 0;
    border-radius: 0px;
    background: none;
    border-width: 0 0 1px 0;
    outline: none;
  }
  .tab-button:hover,
  .btn-default:hover {
    border-color: inherit;
  }
  .tab-button.active,
  .btn-default:active {
    color: #ff5252;
    outline: none;
    background: none;
    border-bottom: #ff5252 2px solid;
    box-shadow: unset;
  }
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
#search {
  border: none;
  outline: none;
  border-radius: 17px;
  border: 1px solid #e1e4e8;
  width: 100%;
  padding-left: 34px;
  color: #333;
  height: 34px;
  font-size: 12px;
  width: 70%;
  margin-bottom: 6px;
  display: inline-block;
}
.fa-search {
  transform: translateX(30px);
  color: gray;
}
header.row {
  color: gray;
  text-align: center;
  border-bottom: 1px solid #e1e4e8;
  height: 50px;
  line-height: 50px;
}
</style>
