/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.addEventListener("deviceready", onDeviceReady, false);


var opts={};
function onDeviceReady() {
    var networkState = checkConnection();
    /* load local files if there is not network connection */
    if (networkState == Connection.NONE) {
        //window.location="local/index.html"; 
        navigator.notification.alert('This app requires an internet connection');
    } else {
        opts = JSON.parse( window.localStorage.getItem("opts") );
        if (opts === null) opts={};
        if (opts["ultimoIndirizzo"]) {
            $("#goto").val(opts["ultimoIndirizzo"]);
            //vaiA();
        }
    }
}
//function onDeviceReady() {
//    // Now safe to use the Codova API
//    window.location = "http://192.168.1.42/rr/";
//}

function checkConnection() {
    var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';

    return networkState;

}


function vaiA() {
    var sito=$("#goto").val();
    window.location = sito;
 
    opts["ultimoIndirizzo"]=sito;
    window.localStorage.setItem("opts", JSON.stringify(opts));    
}