<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 500px;
    /*  内容区域是固定高度 可能有点问题 */
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #E5E9F2;
    min-height: 100vh;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    height: 60px;
    line-height: 60px;
    background: #D3DCE6;
    text-align: center;
    font-size: 20px;
}


.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    /* 修改了速度 和 模式 现在看来没有以前的效果, 不过观感好多  */
    transition: width .08s ease-out;
    /*
    property：执行过渡的属性  all 或者  width
    duration：执行过渡的持续时间  可以是 s 或是 ms
    timing-function：执行过渡的速率模式  ease-in-out
    delay：延时多久执行
      */
}

.ivu-menu-light {
    background: #E5E9F2;
}
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="light" width="auto">
                    <div class="layout-logo-left">
                        <span class="logo-lg" v-show="spanLeft == 4">
                            <b>Admin</b>LTE
                        </span>
                        <span class="logo-mini" v-show="spanLeft == 1">
                            <b>LTE</b>
                        </span>
                    </div>
                    <Menu-item name="1">
                        <!-- 这里必须用 tag='li' 因为menu结构是li 否则的话你只有点到字 才会切换 这样不合理 而且样式也变了 填上这个就好了 监听li点击 样式也好了 -->
                         <router-link to="/main/sub1" tag="li">  
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text" v-show="spanLeft == 4">选项 1选项</span>
                        </router-link>
                    </Menu-item>
                    <Menu-item name="2">
                        <router-link to="/main/sub2" tag="li">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">选项 2</span>
                        </router-link>
                    </Menu-item>
                    <Menu-item name="3">
                        <router-link to="/main/sub3" tag="li">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">选项 3</span>
                        </router-link>
                    </Menu-item>
                </Menu>
            </i-col>
    
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
    
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spanLeft: 4,
            spanRight: 20
        }
    },
    computed: {
        iconSize() {
            return this.spanLeft === 4 ? 20 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 4) {
                this.spanLeft = 1;
                this.spanRight = 23;
            } else {
                this.spanLeft = 4;
                this.spanRight = 20;
            }
        }
    }
}
</script>
