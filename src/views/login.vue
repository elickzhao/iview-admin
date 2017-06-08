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
import particleground from 'Particleground.js';
import Vue from 'vue';

//因为这是老插件 所以没有遵循新规则 所以用npm安装也是无法使用的, 必须借助 exports-loader 这个插件来加载才可以
var particlesJS = require('exports-loader?window.particlesJS!../libs/particles.js');

//alert("dddd");

// (function () {
//     var options = {
//         color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
//         num: 100,
//         range: 300,
//         linewidth: 1,
//         maxSpeed: 1,
//         maxR: 5,
//     }
//     //放在这里也不行啊 虽然执行了 不够还是不会创建实例的
//     new Particleground.particle('#canvas', options);
//     console.log("cccccccccccccc");
// })()
// var options = {
//     color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
//     num: 100,
//     range: 300,
//     linewidth: 1,
//     maxSpeed: 1,
//     maxR: 5,
// }
//  new Particleground.particle('#canvas', options);


// 放在这里没问题,不过json记住不能有注释 否则会解析错误的
//如果用这个插件 看来只能这么写了
particlesJS.load('particles-js', './assets/particles1.json', function () {
    console.log('callback - particles.js config loaded');
});





// Vue.nextTick(function () {   //放在这里是不行的 因为dom好像没有创建完成 所以插件不好使
    //嗯 看来我错了 放在外面 下面这句也不好使, 无法创建一个放canvas的标签 具体不太清楚是为什么
// particlesJS("particles-js", {	//dom标签
//     "particles": {
//         "number": { //粒子的数量
//             "value": 80,
//             "density": {  //粒子的稀密程度 这个轻易别该 会死机 越大越稀疏
//                 "enable": true,
//                 "value_area": 1000  // 每一个粒子占据的空间
//             }
//         },
//         "color": {
//             "value": ['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'] //粒子颜色 （支持16进制”#b61924”，rgb”{r:182, g:25, b:36}”，hsl，以及random）['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14']
//         },
//         "image": {  //如果使用图片 这里设置
//             "src": "img/github.svg",
//             "width": 100,
//             "height": 100
//         },
//         "shape": {
//             "type": "circle", // 粒子的形状 （”circle” “edge” “triangle” “polygon” “star” “image”）
//             "stroke": { // 粒子边缘线条 宽度和颜色
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {  //多变形状,不太理解
//                 "nb_sides": 5
//             },
//         },
//         "opacity": {
//             "value": 0.75,  //粒子透明度 (0~1)
//             "random": true,  //随机透明度
//             "anim": {
//                 "enable": false,  //开启动画 这样粒子的透明度将不断变化
//                 "speed": 1,     //数值越大 速度变化越快
//                 "opacity_min": 0.1, //应该是透明变化幅度
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 10,  //粒子大小
//             "random": true,
//             "anim": {
//                 "enable": false, //大小动画
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {  //连线
//             "enable": true,
//             "distance": 150,  //相距多少连线
//             "color": "#ffffff",
//             "opacity": 0.4, //透明度
//             "width": 1
//         },
//         "move": {
//             "enable": true, //如果关闭了 就没有画面了
//             "speed": 4,   //越大速度越快
//             "direction": "none", //移动方向 none碰撞运动
//             "random": false,   //粒子随机运动了 也没物理特性了
//             "straight": false,   //静止 
//             "out_mode": "out",  //粒子是否可以出边缘 out/bounce
//             "bounce": false,      //粒子之间是否碰撞
//             "attract": {       //这个不知道是干啥的 好像粒子互相吸引
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {  //鼠标是否互动
//                 "enable": false,
//                 "mode": "repulse" //互动模式 ["grab", "bubble","repulse"] 第一个是连线 第二个粒子放大  第三个是推开
//             },
//             "onclick": {
//                 "enable": false,
//                 "mode": "repulse"  //点击特效 "push" ["push", "remove","bubble" ,"repulse"] push是添加 其他的和上面一样
//             },
//             "resize": true  //重画不太懂干什么用的
//         },
//         "modes": {  //这里是模式的设置
//             "grab": {
//                 "distance": 140,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true //不知道干啥的
// });

// particlesJS("particles-js", {	//dom标签
//     "particles": {
//         "number": { //粒子的数量
//             "value": 80,
//             "density": {  //粒子的稀密程度 这个轻易别该 会死机 越大越稀疏
//                 "enable": true,
//                 "value_area": 1000  // 每一个粒子占据的空间
//             }
//         },
//         "color": {
//             "value": ['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'] //粒子颜色 （支持16进制”#b61924”，rgb”{r:182, g:25, b:36}”，hsl，以及random）['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14']
//         },
//         "image": {  //如果使用图片 这里设置
//             "src": "img/github.svg",
//             "width": 100,
//             "height": 100
//         },
//         "shape": {
//             "type": "circle", // 粒子的形状 （”circle” “edge” “triangle” “polygon” “star” “image”）
//             "stroke": { // 粒子边缘线条 宽度和颜色
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {  //多变形状,不太理解
//                 "nb_sides": 5
//             },
//         },
//         "opacity": {
//             "value": 0.75,  //粒子透明度 (0~1)
//             "random": true,  //随机透明度
//             "anim": {
//                 "enable": false,  //开启动画 这样粒子的透明度将不断变化
//                 "speed": 1,     //数值越大 速度变化越快
//                 "opacity_min": 0.1, //应该是透明变化幅度
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 10,  //粒子大小
//             "random": true,
//             "anim": {
//                 "enable": false, //大小动画
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {  //连线
//             "enable": true,
//             "distance": 150,  //相距多少连线
//             "color": "#ffffff",
//             "opacity": 0.4, //透明度
//             "width": 1
//         },
//         "move": {
//             "enable": true, //如果关闭了 就没有画面了
//             "speed": 4,   //越大速度越快
//             "direction": "none", //移动方向 none碰撞运动
//             "random": false,   //粒子随机运动了 也没物理特性了
//             "straight": false,   //静止 
//             "out_mode": "out",  //粒子是否可以出边缘 out/bounce
//             "bounce": false,      //粒子之间是否碰撞
//             "attract": {       //这个不知道是干啥的 好像粒子互相吸引
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {  //鼠标是否互动
//                 "enable": false,
//                 "mode": "repulse" //互动模式 ["grab", "bubble","repulse"] 第一个是连线 第二个粒子放大  第三个是推开
//             },
//             "onclick": {
//                 "enable": false,
//                 "mode": "repulse"  //点击特效 "push" ["push", "remove","bubble" ,"repulse"] push是添加 其他的和上面一样
//             },
//             "resize": true  //重画不太懂干什么用的
//         },
//         "modes": {  //这里是模式的设置
//             "grab": {
//                 "distance": 140,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true //不知道干啥的
// });



// })


export default {
    // created: function () {
    //     // var options = {
    //     //     color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
    //     //     num: 100,
    //     //     range: 300,
    //     //     linewidth: 1,
    //     //     maxSpeed: 1,
    //     //     maxR: 5,
    //     // }
    //     // //放在这里也不行啊 虽然执行了 不够还是不会创建实例的
    //     // new Particleground.particle('#canvas', options);
    //     // console.log("cccccccccccccc");
    //     this.handleStart(); //这个执行了 不过插件却没有使用
    // },
    beforeRouteEnter(to, from, next) {
        //this.handleStart(); //这个不行无法调用this
        var options = {
            color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
            num: 100,
            range: 300,
            linewidth: 1,
            maxSpeed: 1,
            maxR: 5,
        }
        //放在这里也不行啊 虽然执行了 不够还是不会创建实例的
        new Particleground.particle('#canvas', options);
        console.log("zzzz");
        next();
    },
    methods: {
        handleStart() {
            // this.$Modal.info({
            //     title: 'Bravo',
            //     content: 'Now, enjoy the convenience of iView.'
            // });
            var options = {
                color: '#FFF', //['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14'],
                num: 100,
                range: 300,
                linewidth: 1,
                maxSpeed: 1,
                maxR: 5,
            }
            //这个就更奇葩了.因为是类 不是函数 结果必须在方法里靠点击才能运行 其他的一概不执行 而且他运行也不像文档里写的必须引入particles.js 也够怪的
            new Particleground.particle('#canvas', options);
            console.log("cccccccccccccc");

            // particlesJS.load('particles-js', 'assets/particles.json', function () {
            //     console.log('callback - particles.js config loaded');
            // });
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
