<template>
    <div class="index">
        <div id="particles-js"></div>
        <div id="text">
            <Row>
                <Col class="login-container">
                <lFrom></lFrom>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>

import JParticles from 'jparticles';
//import Vue from 'vue';


//引入配置文件
import particles_config from "../assets/particles1.json";

//因为这是老插件 所以没有遵循新规则 所以用npm安装也是无法使用的, 必须借助 exports-loader 这个插件来加载才可以
var particlesJS = require('exports-loader?window.particlesJS!../libs/particles.js');

export default {
    //使用vue钩子程序更简介和易读些
    mounted: function () {
        particlesJS('particles-js', particles_config)
    },
    methods: {
        handleStart() {
            var options = {
                color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
                num: 100,
                range: 300,
                linewidth: 1,
                maxSpeed: 1,
                maxR: 5,
            }
            //这个就更奇葩了.因为是类 不是函数 结果必须在方法里靠点击才能运行 其他的一概不执行 而且他运行也不像文档里写的必须引入particles.js 也够怪的
            new JParticles.particle('#canvas', options);
        }
    },
    components:{
        lFrom:(resolve) => require(['./login-form.vue'], resolve)
    }
};
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

#canvas,
#text {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
}

#text {
    min-height: 100vh;
    width: 100vw;
    z-index: 1;
    /*color: #fff;*/
    text-transform: uppercase;
    /*font-size: 5vmin;*/
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.login-container{
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 450px;                  /*登录form的宽度需要修改这里 */
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
</style>
