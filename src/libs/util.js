import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? ' 易购 -' + title : 'iView project';
    window.document.title = title;
};

//设置基本请求域名 不用写那么长 下面创建了个axios实例
const ajaxUrl = env === 'development' ?
    'http://localhost:36742' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

    alert(ajaxUrl);
util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;