
const state={
    //购物车列表
    cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],
    //当前购物车信息
    cartInfos: {
        total_price: 0,
        total_nums: 0
    },
    curIndex: -1,
    // 用户信息
    userInfo:"",
    // 用户信息
}
export default state;