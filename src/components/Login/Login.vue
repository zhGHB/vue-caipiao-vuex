<template>
    <div class="login">
    	<Form ref="formInline" :model="formInline" :rules="ruleInline" >
    	    <FormItem prop="user">
    	        <Input type="text" v-model="formInline.user" placeholder="用户名">
    	            <Icon type="ios-person-outline" slot="prepend"></Icon>
    	        </Input>
    	    </FormItem>
    	    <FormItem prop="password">
    	        <Input type="password" v-model="formInline.password" placeholder="密码">
    	            <Icon type="ios-locked-outline" slot="prepend"></Icon>
    	        </Input>
    	    </FormItem>
    	    <FormItem>
    	        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
    	    </FormItem>
    	</Form>
    </div>
</template>
<script>
	import {mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能少于6位数', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	if(this.formInline.password==="123456"){
                    		this.updata_user_info(this.formInline.user);
                    		this.$Message.success('登录成功');
                    		sessionStorage.setItem("userInfo",this.formInline.user);
                    		this.$router.push(this.$route.query.redirect || '/Mine')
                    		 
                    	}else{
                    		this.$Message.success('密码错误');
                    	}
                        
                    } else {
                        this.$Message.error('请填写完整信息');
                    }
                })
            },
            ...mapActions([
			   'updata_user_info'
			]),
        }
    }
</script>

<style lang="less">
    @import '~var_less';
 	.login{
 		padding-left:2rem;
 		padding-right:2rem;
 		position:fixed;
 		top:0;
 		right:0;
 		bottom:0;
 		left:0;
 		Form{
 			margin-top:10rem;
 		}
 	}
</style>
