<style scoped>
.index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
}

.index h1 {
    height: 150px;
}

.index h1 img {
    height: 100%;
}

.index h2 {
    color: #666;
    margin-bottom: 200px;
}

.index h2 p {
    margin: 0 0 50px;
}

.index .ivu-row-flex {
    height: 100%;
}
</style>
<template>
    <div class="index">
        <div id="particles-js"></div>
        <!--<Button type="ghost" @click="handleStart">Start iView</Button>-->
        <div id="canvas" style="width:100vw;min-height: 100vh"></div>
        <div id="text">
            <h1>Everything Connects</h1>
            <Button type="ghost" @click="handleStart">Start iView</Button>
        </div>
    
        <!--<Row type="flex" justify="center" align="middle">
                                                                                                    <Col span="24">
                                                                                                    <h1>
                                                                                                        <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                                                                                                    </h1>
                                                                                                    <h2>
                                                                                                        <p>Welcome to your iView app!</p>
                                                                                                        
                                                                                                            <Button type="ghost" @click="handleStart">Start iView</Button>
                                                                                                       
                                                                                                    </h2>
                                                                                                    </Col>
                                                                                                </Row>-->
    </div>
</template>

<script>
//import particlesJS from 'particles.js';
import JParticles from 'jparticles';
import Vue from 'vue';

//因为这是老插件 所以没有遵循新规则 所以用npm安装也是无法使用的, 必须借助 exports-loader 这个插件来加载才可以
var particlesJS = require('exports-loader?window.particlesJS!../libs/particles.js');

// particlesJS.load('particles-js', 'assets/particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });



var options = {
    color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
    num: 100,
    proximity:100,  //连线的最大距离
    range: 1300,    //连线范围
    linewidth: 1,
    maxSpeed: 1,
    maxR: 5,
    lineShape:'cube',
}

//这个页面不刷新的话就不会出现 和下边 beforeRouteEnter 类似 呵呵 又发现个区别啊  document.ready 就不可以 只能用 window.onload
window.onload = function(){
    new JParticles.particle('#canvas', options);
}

export default {
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {

    //         vm.handleStart()
    //     });
    // },
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
