<template>
	<div class="box">
		<my-header title="动态" :isBack="isBack" ></my-header>
		<div class="dynamic">
			动态
		</div>
		<div class="footer-box">
				<footer-nav></footer-nav>
		</div>
	</div>
</template>
<script>
	import myHeader from '@/components/commenComponents/Header.vue';
	import footerNav from '@/components/commenComponents/footerNav.vue';
	export default{
		data(){
			return{
				isBack:true,
			}
		},
		components:{
			myHeader,
			footerNav,
		}
	}
</script>