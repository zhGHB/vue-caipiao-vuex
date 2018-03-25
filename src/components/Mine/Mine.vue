<template>
	<div class="mine">
	    <my-header title="我的" :isBack="isBack" ></my-header>
	    <div class="login-out" @click="confirm">
	    	 退出登录
	    </div>
	    <footer-nav :navIndex="navIndex"></footer-nav>
	</div>
</template>




<script>
	import footerNav from '@/components/commenComponents/footerNav.vue';
	import myHeader from '@/components/commenComponents/Header.vue';
	import {mapActions} from "vuex";
	export default{
		data(){
			return{
				isBack:true,
				navIndex:4,
				modal6: true,
                loading: true
			}
		
		},
		components:{
			myHeader,
			footerNav,
			
		},
		methods: {
		            confirm () {
		                this.$Modal.confirm({
		                    title: '确认对话框标题',
		                    content: '<p>确定要退出登录吗？</p>',
		                    onOk: () => {
		                        this.$Message.info('退出成功');
		                        this.updata_user_info("");
		                        sessionStorage.removeItem('userInfo');
		                        this.$router.push("/login")
		                    },
		                    onCancel: () => {
		                        this.$Message.info('点击了取消');
		                    }
		                });
		            },
                    ...mapActions([
        			   'updata_user_info'
        			]),
		         
		        }
	}
</script>
<style lang="less" scoped>
	 @import "./Mine.less";
</style>