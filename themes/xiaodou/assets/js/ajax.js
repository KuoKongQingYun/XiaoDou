function sendAjaxRequest(url, backcall) {
    var XMLHttpReq;
    try {
        XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP"); //IE�߰汾����XMLHTTP
    } catch (E) {
        try {
            XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP"); //IE�Ͱ汾����XMLHTTP
        } catch (E) {
            XMLHttpReq = new XMLHttpRequest(); //���ݷ�IE�������ֱ�Ӵ���XMLHTTP����
        }
    }
    XMLHttpReq.open("post", url, true);
    XMLHttpReq.onreadystatechange = function() {
        if (XMLHttpReq.readyState == 4) {
            if (XMLHttpReq.status == 200) {
                backcall(XMLHttpReq.responseText);
            }
        }
    }; //ָ����Ӧ����
    XMLHttpReq.send(null);
}