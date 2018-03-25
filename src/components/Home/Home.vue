<template>
	<div class="home">
		<my-header title="游戏大厅" :isBack="isBack" ></my-header>
		<banner></banner>
		<div @click="mod">点击我修改vuex的信息</div>
		<div class="user-name">用户中心：{{U}}</div>
		<div class="footer-box">
			<footer-nav></footer-nav>
		</div>
	</div>
</template>
<script >
	import myHeader from '@/components/commenComponents/Header.vue';
	import footerNav from '@/components/commenComponents/footerNav.vue';
	import banner from './Banner.vue';
	import {mapGetters, mapMutations, mapActions} from 'vuex';
	export default{
		data(){
			return{
				isBack:true,
				U:sessionStorage.getItem("userInfo"),
			}
		},
		components:{
			myHeader,
			footerNav,
			banner
		},
		created(){
			this.getInfo();
		},
		computed:{
			...mapGetters([
			  'userInfo'
			]),
			
		},
		methods:{
			getInfo(){
				console.log(this.$store.state.userInfo);
			},
			...mapActions([
			  'updata_user_info'
			]),
			...mapMutations({
			  setUserInfo: 'USER_INFO'
			}),
			mod(){
				this.updata_user_info("zhouzhong");
			}
		}
	}
</script>
<style lang="less">
	@import '~var_less';
	@import "./Home.less";
</style>