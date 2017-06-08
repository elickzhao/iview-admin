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
        <!--<div id="particles-js"></div>-->
    
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
import particlesJS from 'particles.js';
import particleground from 'Particleground.js';




// particlesJS.load('particles-js', 'assets/particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });


export default {
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
            new Particleground.particle('#canvas', options);
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
