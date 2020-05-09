//各个移动端平台类型定义
const EQUIPMENT_TYPE_IOS = "iOS"
const EQUIPMENT_TYPE_IPHONE= "iphone"
const EQUIPMENT_TYPE_IPAD= "ipad"
const EQUIPMENT_TYPE_ANDROID = "android"

//当前页面加载地方
const PAGE_LOAD_TYPE_KEY = "type";//参数key
const PAGE_LOAD_TYPE_MAIN = "page_load_type_main";//底部主菜单
const PAGE_LOAD_TYPE_MENU = "page_load_type_menu";//菜单

//函数参数定义
const FUNCTION_NAME_KEY = "functionName"
const FUNCTION_VALS_KEY = "functionVals"

//toast函数相关常量
const TOAST_NAME ="toast";
const TOAST_LOCATION_BOTTOM ="bottom";
const TOAST_LOCATION_CENTER ="center";

//获取服务端地址
const GET_SERVER_URL_NAME ="getServerUrl";

//启动登录界面
const START_LOGIN_UI_NAME ="startLoginUi";
//启动主页面
const START_MAIN_UI_NAME ="startMainUi";

//获取用户信息
const GET_USER_INFO_NAME = "getUserInfo";
//保存用户信息
const SET_USER_INFO_NAME = "setUserInfo";

//用户数据持久化保存
const SET_STORAGE_NAME = "setStorage";
const GET_STORAGE_NAME = "getStorage";

//获取授权的所有模块数据
const GET_ALL_MODEL_DATA_NAME = "getAllModelData";

//获取APP版本信息
const GET_APP_VERSION_INFO_NAME = "getAPPVersionInfo";

//退出当前页面
const EXIT_CURRENT_UI_NAME = "exitCurrentUi";

//启动新的webView页面
const START_NEW_UI_NAME = "startNewUi";

//启动新的横屏的全屏的webView页面
const START_LANDSCAPE_NEW_UI_NAME = "startLandscapeNewUi";

//启动新的webView页面并关闭当前页面
const START_NEW_UI_AND_EXIT_CURRENT_UI_NAME = "startNewUiAndExitCurrentUi";

//启动二维码扫码界面，通过回调函数返回扫码结果
const START_QR_CODE_UI_NAME = "startQRCodeUi";

//显示系统状态栏消息。
const SHOW_NOTIFICATION_NAME = "showNotification";
