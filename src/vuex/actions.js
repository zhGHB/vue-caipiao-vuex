import * as types from './mutations_types';


export const updata_user_info = function ({commit}, user) {
   
    commit(types.USER_INFO,user);
}
