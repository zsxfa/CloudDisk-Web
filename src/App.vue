<template>
	<div id="app">
		<Header v-if="isHeaderShow" id="headWrapper"></Header>
		<router-view class="mainContent"></router-view>
		<el-backtop class="backtop" target="#app" title="回到顶部"></el-backtop>
	</div>
</template>

<script>
import Header from '_c/Header.vue'

export default {
	name: 'App',
	components: {
		Header
	},
	computed: {
		//  头部是否显示
		isHeaderShow() {
			let routerNameList = ['Onlyoffice', 'Error_401', 'Error_404', 'Error_500']
			return routerNameList.includes(this.$route.name) ? false : true
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~_a/styles/varibles.styl';

#app {
  height: 100%;
  overflow-x: hidden;
  -webkit-text-size-adjust: none;
  overflow-y: auto;
  >>> .el-backtop {
    background-color: $Success;
    color: #fff;
    z-index: 3;
  }
  .mainContent {
    flex: 1;
    width: 90%;
    min-height: calc(100vh - 70px);
    margin: 0 auto;
    display: flex;
  }
}
</style>
