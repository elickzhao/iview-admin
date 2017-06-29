<template>
    <div class="index">
        <div id="particles-js"></div>
        <div id="text">
            <h1>Everything Connects</h1>
            <!--<Button type="ghost" @click="handleStart">Start iView</Button>
             <router-link to="/main">
            <Button type="ghost" @click="handleStart">main</Button>
             </router-link>-->
        </div>   
    </div>
</template>

<script>

import JParticles from 'jparticles';
import Vue from 'vue';

//var particles_config = require("../assets/particles1.json");
import particles_config from "../assets/particles1.json";
console.log("----------");
console.log(particles_config.particles.number.value);

let config = JSON.stringify(particles_config);
console.log(config);

//因为这是老插件 所以没有遵循新规则 所以用npm安装也是无法使用的, 必须借助 exports-loader 这个插件来加载才可以
var particlesJS = require('exports-loader?window.particlesJS!../libs/particles.js');

//这个目前来看还是最优方案  //加载配置文件没有什么好的方法呢 不能把他生成到build目录里  //这个问题已经解决了 不过还有个问题是 静态文件无法使用,只能用服务器才行
//还有个问题 就是dev的时候 原来是放在根目录,但那个不好,现在是自动生成在dist里 不过得先build否则不会有这个目录也是个麻烦
//现在这么写还不错,就是静态文件时不可用  还有问题呢 用ser.js这种静态服务器位置不对
//这里加载文件用的是网络读取
//assets/particles1.json 这个build时候用 dist/assets/particles1.json 这个dev用 该如何弄呢
//这个只能通过文件读取 可能是跟particlesJS有关
// particlesJS.load('particles-js', "assets/particles1.json" , function () {
//     console.log('callback - particles.js config loaded');
// });

//呵呵 看了下源代码 其实这么直接使用方法也可以 一开始一直报错,后来发现原来页面DOM没有加载完成 所以这么写了
window.onload =()=>{particlesJS('particles-js',particles_config)}


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
    min-height: 100vh;   /*必须是最小高度  如果是高度的话 下面会有留白 可能是因为和其他高度相对有关*/
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
