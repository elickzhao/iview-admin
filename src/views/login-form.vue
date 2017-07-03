<template>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item>
            <h1>系统登录</h1>
        </Form-item>
        <Form-item prop="user">
            <Input type="text" placeholder="帐号" size="large">
            <Icon type="person" size="20" color='#80848f' slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" placeholder="密码" size="large">
            <Icon type="locked" size="20" color='#80848f' slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="interest">
            <Checkbox>记住密码</Checkbox>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
        </Form-item>
    </i-form>
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
