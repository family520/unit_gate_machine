//functionName:调用原生函数名,字符串类型
//functionVals:调用原生函数参数值，字符串数组数据，无参数传空串
//返回值为字符串类型
function callNativeFunction(functionName, functionValArr, callback){
    var equipmentType = getEquipmentType();
    let obj = {}
    obj[FUNCTION_NAME_KEY] = functionName
    obj[FUNCTION_VALS_KEY] = functionValArr
    if (callback != null && callback != undefined) {
        var callback_name = 'C' + Math.random().toString(36).substr(2);
        window[callback_name] = function(obj) {
            callback(obj);
            delete window[callback_name]
        };
        obj["callback"] = callback_name
    }
    if(equipmentType === EQUIPMENT_TYPE_ANDROID) {//安卓平台调用接口
        return AndroidNativeObject.callNativeFunction(JSON.stringify(obj));
    } else if(equipmentType === EQUIPMENT_TYPE_IOS ){//iOS平台调用接口
        return window.prompt(JSON.stringify(obj));
    }
    return "";
}


//显示toast
//msg:提示的消息 字符串类型
//location：提示消息展示的位置  常量，在constant.js里有定义，分中间TOAST_LOCATION_CENTER和底部TOAST_LOCATION_BOTTOM
function showToast(msgStr, location){
    var vals = [msgStr,location];
    var result = callNativeFunction(TOAST_NAME, vals);
    console.info(result);
    return result;
}

//显示底部消息
//msg:提示的消息  字符串类型
function showBottomToast(msgStr){
    console.info(msgStr);
    var result = showToast(msgStr,TOAST_LOCATION_BOTTOM);
    console.info(result)
}

//获取服务端地址
//返回值为字符串类型
function getServerUrl(){
    // var result = callNativeFunction(GET_SERVER_URL_NAME, []);//打包用
    var result = 'http://103.239.204.50:11650/'; //测试用
    // var result = 'http://localhost:20012/'; //本地用
    console.info(result)
    return result;
}

//启动登录界面
function startLoginUi(){
    var result = callNativeFunction(START_LOGIN_UI_NAME, []);
    console.info(result)
    return result;
}

//启动主页面
function startMainUi(){
    var result = callNativeFunction(START_MAIN_UI_NAME, []);
    console.info(result)
    return result;
}

//获取用户信息
//返回值为对象类型
function getUserInfo(){
    var result = callNativeFunction(GET_USER_INFO_NAME, []);
    console.info(result)
    return JSON.parse(result);
}

//保存用户信息
//存值必须为对象类型
function setUserInfo(userInfoObj){
    var vals = [JSON.stringify(userInfoObj)];
    var result = callNativeFunction(SET_USER_INFO_NAME, vals);
    console.info(result)
    return result;
}

//数据持久化
//keyStr:需要保存数据key，字符串类型
//valStr:需要保存的数据 字符串类型
function setStorage(keyStr, valStr){
    var vals = [keyStr, valStr];
    var result = callNativeFunction(SET_STORAGE_NAME, vals);
    console.info(result)
    return result;
}

//获取持久化数据
//keyStr:需要获取的数据key 字符串类型
//返回值为字符串类型
function getStorage(keyStr){
    var vals = [keyStr];
    // var result = callNativeFunction(GET_STORAGE_NAME, vals); //打包用
    var result = sessionStorage.getItem('token'); //测试用
    console.info(result)
    return result;
}

//获取授权的所有模块数据
//返回值为对象类型
function getAllModelData(){
    var result = callNativeFunction(GET_ALL_MODEL_DATA_NAME, []);
    return JSON.parse(result);
}

//获取appVersion数据
//格式：{"versionName":"1.0.0","versionCode":"1"}
//返回值为对象类型
function getAPPVersionInfo(){
    var result = callNativeFunction(GET_APP_VERSION_INFO_NAME, []);
    return JSON.parse(result);
}


//退出当前页面
//返回值为字符串类型
function exitCurrentUi(){
    var result = callNativeFunction(EXIT_CURRENT_UI_NAME, []);
    return result;
}

//启动新的webView页面
//urlStr:启动的页面完整路径，字符类型
//返回值为字符串类型
function startNewUi(urlStr){
    var vals = [urlStr];
    var result = callNativeFunction(START_NEW_UI_NAME, vals);
    return result;
}

//启动新的横屏的全屏的webView页面
//urlStr:启动的页面完整路径，字符类型
//返回值为字符串类型
function startLandscapeNewUi(urlStr){
    var vals = [urlStr];
    var result = callNativeFunction(START_LANDSCAPE_NEW_UI_NAME, vals);
    return result;
}

//启动新的webView页面并关闭当前页面
//urlStr:启动的页面完整路径，字符类型
//返回值为字符串类型
function startNewUiAndExitCurrentUi(urlStr){
    var vals = [urlStr];
    var result = callNativeFunction(START_NEW_UI_AND_EXIT_CURRENT_UI_NAME, vals);
    return result;
}

//启动二维码扫码界面，通过回调函数返回扫码结果
//callback:回调函数，扫码结果通过该函数返回
//返回值为字符串类型
function startQRCodeUi(callback){
    var result = callNativeFunction(START_QR_CODE_UI_NAME, [], callback);
    return result;
}

//显示系统状态栏消息
//title:状态栏消息标题，字符类型
//msg:状态栏消息内容，字符类型
//返回值为字符串类型
function showNotification(title, msg){
    var vals = [title, msg];
    var result = callNativeFunction(SHOW_NOTIFICATION_NAME, vals);
    return result;
}
