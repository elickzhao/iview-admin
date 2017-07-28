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
    transition: width .2s ease-in-out;
}

.ivu-menu-light {
    background: #E5E9F2;
}

.lwidth {
     min-width: 150px; 
    overflow: hidden;
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
                    <Menu-item :class="{'lwidth': spanLeft === 4}" name="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">选项 1</span>
                    </Menu-item>
                    <Menu-item :class="{'lwidth': spanLeft === 4}" name="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">选项 2</span>
                    </Menu-item>
                    <Menu-item :class="{'lwidth': spanLeft === 4}" name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">选项 3</span>
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
                    <div class="layout-content-main">内容区域</div>
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
