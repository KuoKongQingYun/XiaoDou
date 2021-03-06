function sendAjaxRequest(url, backcall) {
    var XMLHttpReq;
    try {
        XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP"); //IE高版本创建XMLHTTP
    } catch (E) {
        try {
            XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP"); //IE低版本创建XMLHTTP
        } catch (E) {
            XMLHttpReq = new XMLHttpRequest(); //兼容非IE浏览器，直接创建XMLHTTP对象
        }
    }
    XMLHttpReq.open("post", url, true);
    XMLHttpReq.onreadystatechange = function() {
        if (XMLHttpReq.readyState == 4) {
            if (XMLHttpReq.status == 200) {
                backcall(XMLHttpReq.responseText);
            }
        }
    }; //指定响应函数
    XMLHttpReq.send(null);
}