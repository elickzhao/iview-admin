<template>
    <div class="index">
        <div id="particles-js"></div>
        <div id="text">
            <h1>Everything Connects</h1>
            <Button type="ghost" @click="handleStart">Start iView</Button>
        </div>   
    </div>
</template>

<script>

import JParticles from 'jparticles';
import Vue from 'vue';

//因为这是老插件 所以没有遵循新规则 所以用npm安装也是无法使用的, 必须借助 exports-loader 这个插件来加载才可以
var particlesJS = require('exports-loader?window.particlesJS!../libs/particles.js');

//这个目前来看还是最优方案
particlesJS.load('particles-js', 'assets/particles1.json', function () {
    console.log('callback - particles.js config loaded');
});


export default {
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
    }
};
</script>

<style>
.index {
    background: #222;
    margin: 0rem;
    min-height: 100vh;
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
    color: #fff;
    text-transform: uppercase;
    font-size: 8vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#text h1 {
    opacity: 0.9
}
</style>
