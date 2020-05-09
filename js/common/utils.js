function getEquipmentType(){
    var equipmentType = "";
    var agent = navigator.userAgent.toLowerCase();
    var android = agent.indexOf(EQUIPMENT_TYPE_ANDROID);
    var iphone = agent.indexOf(EQUIPMENT_TYPE_IPHONE);
    var ipad = agent.indexOf(EQUIPMENT_TYPE_IPAD);
    if(android != -1){
        equipmentType = EQUIPMENT_TYPE_ANDROID;
    }
    if(iphone != -1 || ipad != -1){
        equipmentType = EQUIPMENT_TYPE_IOS;
    }
    return equipmentType;
}

window.addEventListener('load',function(){
    var type = getQueryVariable(PAGE_LOAD_TYPE_KEY);
    if(type === PAGE_LOAD_TYPE_MAIN){
        var back = document.getElementsByClassName('nav-back')[0]
        console.log(back)
        if(!isEmpty(back)){
            back.style.display = 'none';
        }
    }
})

////获取url参数
function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function isEmpty(obj) {
  if (typeof obj === 'undefined' || obj == null || obj === '') {
    return true;
  } else {
    return false;
  }
}