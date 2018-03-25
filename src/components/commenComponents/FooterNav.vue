<template>
	<div class="footer">
		<router-link to="/" class="footer-nav"  :class=" navIndex==1?'active':'' ">首页</router-link>
		<router-link to="/Charge" class="footer-nav" :class=" navIndex==2?'active':'' ">充值</router-link>
		<router-link to="/Dynamic" class="footer-nav" :class=" navIndex==3?'active':'' ">动态</router-link>
		<router-link to="/Mine" class="footer-nav" :class=" navIndex==4?'active':'' ">我的</router-link>
	</div>
</template>

<script>
	export default{
      props: {
        navIndex: {
          type: Number,
          default: 1,
        },
        data(){
         return{
            
         }
        }
        
      },
	}
</script>

<style lang="less" scoped>
   .footer{
   		height: 4rem;
   		line-height: 4rem;
   		position: fixed;
   		bottom: 0;
   		right: 0;
   		left: 0;
   		height: 4rem;
   		.footer-nav{
   			font-size:1.4rem;
   			display: inline-block;
   			color:#545454;
   			width:100%/4.1;
   			text-align: center;
            &.active{
               color:red,
            }
   		}
   }
</style>