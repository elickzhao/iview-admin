<template>
    <div class="index">
        <div id="particles-js"></div>
        <transition name="bounceIn">
            <lFrom></lFrom>
        </transition>
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
    components: {
        lFrom: (resolve) => require(['./login-form.vue'], resolve)
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

#canvas {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
}


@keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }

    20% {
        transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
        transform: scale3d(.9, .9, .9);
    }

    60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
        transform: scale3d(.97, .97, .97);
    }

    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}


/**
这次用的是css的动画 https://penjs.net/animate/
下次用 Animate.css 那个用起来好像比这个简单
*/

.bounceIn-enter-active {
    animation: bounceIn .5s;
}

.bounceIn-leave-active {
    animation: bounceIn .5s reverse; /*reverse 不知道用处何在*/
}
</style>
