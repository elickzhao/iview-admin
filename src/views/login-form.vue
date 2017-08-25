<template>
    <div id="text">
        <Row>
            <Col class="login-container">
            <i-form ref="formInline" :model="formInline" :rules="ruleInline">
                <Form-item>
                    <h1>系统登录</h1>
                </Form-item>
                <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="帐号" size="large">
                    <Icon type="person" size="20" color='#80848f' slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
                    <Icon type="locked" size="20" color='#80848f' slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="interest" style="text-align:left">
                    <Checkbox size="large">记住密码</Checkbox>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
                </Form-item>
            </i-form>
            </Col>
        </Row>
    </div>
</template>
<script>

import axios from 'axios';
import Mock from 'mockjs';
import MockAdapter from 'axios-mock-adapter';   //这个插件不能自动模拟数据,只能自己手写而已,可以利用上面插件模拟 但最好两个合起来

import Util from '../libs/util';

(function () {
    var template = {
        'people|1-4': [{
            'name': '@name',
            'age': '@integer(10,80)'
        }]
    }
    let data = Mock.mock(template);

    // var data = Mock.mock({
    //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    //     'list|1-10': [{
    //         // 属性 id 是一个自增数，起始值为 1，每次增 1
    //         'id|+1': 1
    //     }]
    // })
    // 输出结果

    console.log(JSON.stringify(data, null, 2)); //第二个参数是回调函数,第三个是使用空格缩进,现在是2个缩进
})()

export default {
    data() {
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
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ]
            }
        }
    },
    mounted: function () {
        // 用 $nextTick 也不行 应该是这里可以用this 但是 document.onkeyup 里面不行
        // this.$nextTick(function () {
        //     // 代码保证 this.$el 在 document 中
        //     document.onkeyup = function (ev) {
        //         if (ev.keyCode == 13) {
        //             this.handleSubmit('formInline');
        //         }
        //     }
        // })

        let self = this;
        document.onkeyup = function (ev) {
            if (ev.keyCode == 13) {
                self.handleSubmit('formInline');
            }
        }

    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    // let self = this //必须转换一下,要不下面的 $Message 会找不到
                    // //现在用的是实例请求,已经写好了基本url所以不用写前面那一大段了
                    // Util.ajax.get('users', {  //只能用get 是请求 post是创建
                    //     params: {
                    //         user: this.formInline.user,
                    //         password: this.formInline.password
                    //     }
                    // })
                    //     .then(function (res) {  //还有这里蛮有趣的,用浏览器返回的是json格式,用这个请求回来的就是对象模式了
                    //         if (res.data != "") {
                    //             self.$Message.success('登录成功!');
                    //             self.$router.push({ path: '/main' })
                    //         } else {
                    //             self.$Message.error('用户活密码错误!');
                    //         }

                    //     })
                    //     .catch(function (err) {//这个捕捉错误 空也不算
                    //         self.$Notice.error('用户活密码错误!');
                    //     });
                    // 上面那个是api方式,但我现在想做一个本地独立运用的,所以先建立页面吧.等以后分成两个版本用
                    this.$Message.success('登录成功!');
                    //this.$router.push({ path: '/main' })

                    //本地拦截并模拟数据测试
                    // let mock = new MockAdapter(axios);

                    // var template = {
                    //     'people|1-4': [{
                    //         'name': '@name',
                    //         'age': '@integer(10,80)'
                    //     }]
                    // }
                    // let data = Mock.mock(template);

                    // mock.onGet("www.h.com").reply(200, data);
                    // axios.get("www.h.com").then(function (res) {
                    //     let u = res.data.user;
                    //     console.log(JSON.stringify(res.data, null, 2));
                    // });

                    
                    //请求esay mock ,这个可以模拟各类型数据因为用的是mock.js 但是管理功能上比较欠缺
                    axios.get("http://www.easy-mock.com/mock/5995ae24059b9c566dc5145f/example/user/list").then((res)=>{
                        console.log(JSON.stringify(res.data, null, 2));
                    });

                    //这个请求的是doclever,这个能管理功能异常强大.但是模拟数据类型比较少.比如现在还不能模拟出多个数组 以至于没法弄列表
                    //这么写需要配合net.js才能完成短连接请求
                    Util.ajax.get("/user/").then(
                        function(res){
                            console.log(JSON.stringify(res.data, null, 2));
                        }
                    );


                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    }
}
</script>
<style>
.index {
    background: #f8f8f9;
    margin: 0rem;
    min-height: 100vh;
    /*必须是最小高度  如果是高度的话 下面会有留白 可能是因为和其他高度相对有关*/
    font-family: Futura, sans-serif;
    z-index: -2;
}

#text {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
}

#text {
    min-height: 80vh;
    /* 为了把form往上移动点,这里改了高度原来为100*/
    width: 100vw;
    z-index: 1;
    /*color: #fff;*/
    text-transform: uppercase;
    /*font-size: 5vmin;*/
    display: flex;
    align-items: center;
    /* align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。*/
    justify-content: center;
    /*justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。 使用 align-content 属性对齐交叉轴上的各项（垂直）。 */
    text-align: center;
}

.login-container {
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    /*margin: 180px auto;*/
    width: 400px;
    /*登录form的宽度需要修改这里 */
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
</style>
