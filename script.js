//your JS code here. If required.
let info=document.getElementById("browser-info");
let browserName=window.navigator.appName;
let  version =window.navigator.appVersion;

info.innerText=`You are using ${browserName} version ${version}`;