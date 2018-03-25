
import * as types from './mutations_types';


const mutations = {
    [types.CLEAR_LOCAL](state) {
        state.cartList.forEach(function(item) {
            item.num = 0;
        });
        state.cartList = [];
        localStorage.removeItem('vuex_cart');
    },
    // 更新用户信息
    [types.USER_INFO](state,u){
    	console.log("更新用户信息");
        state.userInfo=u;
        console.log("dd")
    	// state.userInfo = userInfo;
    },
    // 更新用户信息

    [types.UPDATE_LOCAL](state) {
        localStorage.setItem('vuex_cart', JSON.stringify(state.cartList));
    },
    [types.UPDATE_CUR_SHOP_STATUS](state, {
        index = -1
    }) {
        state.curIndex = index;
    },
    [types.DELETE_DB](state) {
        if (state.curIndex >= 0) {
            state.cartList[state.curIndex].num = 0;
            state.cartList.splice(state.curIndex, 1);
        }
    },
    [types.CREATE_DB](state, shop) {
        state.cartList.push(shop);
    },
    [types.ADD_DB](state) {
        state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num);
        state.cartList[state.curIndex].num++;
    },
    [types.REDUCE_DB](state) {
        state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num);
        state.cartList[state.curIndex].num--;
        if (state.cartList[state.curIndex].num == 0) {
            state.cartList.splice(state.curIndex, 1);
        }
    },
    [types.CHECK_DB](state, {
        id
    }) {
        state.curIndex = -1;
        var list = state.cartList;
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    state.curIndex = i;
                    break;
                }
            }
        }
    }
}
export default mutations;
