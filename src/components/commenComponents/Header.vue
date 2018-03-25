<template>
	<div class="header-box">
		<img src="../../assets/back-icon.png" v-if="isBack"/>
		<div class="header">
			{{title}}
		</div>
	</div>
</template>
<script>
	export default{
		props: {
		  title: {
		    type: String,
		    default: ''
		  },
		  isBack:{
		  	type:Boolean,
		  	default:true,
		  }
		},
		data(){
			return{
				
			}
		}

	}
</script>
<style lang="less" scoped>
	@import '~var_less';
	.header-box{
		position:relative;
		img{
			width:2rem;
			height: 2rem;
			position: absolute;
			top:1rem;
			left: 1rem;
		}
	}
	.header{
		height:4rem;
		background:@header-bg-color;
		color:@font-color;
		font-size:@font-size;
		padding-left:4rem;
		padding-right:4rem;
		text-align:center;
		line-height:4rem;
	}

</style>