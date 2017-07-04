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
                    <Checkbox size="large" >记住密码</Checkbox>
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
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
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
    min-height: 80vh;   /* 为了把form往上移动点,这里改了高度原来为100*/
    width: 100vw;
    z-index: 1;
    /*color: #fff;*/
    text-transform: uppercase;
    /*font-size: 5vmin;*/
    display: flex;
    align-items: center; /* align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。*/
    justify-content: center;   /*justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。 使用 align-content 属性对齐交叉轴上的各项（垂直）。 */
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
