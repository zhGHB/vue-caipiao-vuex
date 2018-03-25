<template>
	<div class="banner-box">
		<swiper :options="swiperOption" ref="mySwiperA">
			  <swiper-slide class="slider-item" v-for="(item,index) in bannerData" :key="index" >
			  	  <img :src="item.image">
			  </swiper-slide>
		</swiper>
	</div>
</template>
<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import axios from 'axios';
		export default {
		data(){
		      return {
		        swiperOption: {
		         notNextTick: true,
                 autoplay: 3000,
                  // direction : 'vertical',
                  grabCursor : true,
                  setWrapperSize :true,
                  autoHeight: true,
                  pagination : '.swiper-pagination',
                  paginationClickable :true,
                  prevButton:'.swiper-button-prev',//上一张
                  nextButton:'.swiper-button-next',//下一张
                  scrollbar:'.swiper-scrollbar',//滚动条
                  mousewheelControl : true,
                  observeParents:true,
                  debugger: true,
		      },
		      bannerData:[],
		    }
	},
	created(){
		this.getBannerData();
	},
	computed: {
	    swiper() {
	     return this.$refs.mySwiperA.swiper
	    }
	  },
	  mounted() {
	    this.swiper.slideTo(0, 1000, false)
	   },
	   components:{
	   		swiper,
	   		swiperSlide
	   },
	   methods:{
	   		getBannerData(){
	   			var that=this;
	   			axios.get('/api/home/banner', {}).then(function (res) {
	   			    if(res.data.code==10000){
	   			    	var data=res.data.data;
	   			    	var bannerData=[];
	   			    	for(var key in data){
	   			    		bannerData.push(data[key]);
	   			    	}
	   			    	that.bannerData=bannerData;
	   			    }
	   			}).catch(function (error) {console.log(error);});
	   		}
	   }
 }
</script>
<style lang="less" scoped>
	
	
</style>