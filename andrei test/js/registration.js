class RequestsSender {
    constructor(url, callback) {
        this.url = url;
        this.callback = callback;
    }

    httpGet(path = "", headers = {}) {
        var xmlHttp = new XMLHttpRequest();

        let callback = this.callback;
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                callback(xmlHttp.responseText);
            }
        };

        xmlHttp.open("GET", this.url + "/" + path, true);

        for (let key in headers) {
            xmlHttp.setRequestHeader(key, headers[key]);
        }

        xmlHttp.send(null);
    }

    httpPost(data, path = "", headers = {}) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.withCredentials = true;

        let callback = this.callback;
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                callback(xmlHttp.responseText);
            }
        };

        xmlHttp.open("POST", this.url + "/" + path, true); 

        for (let key in headers) {
            xmlHttp.setRequestHeader(key, headers[key]);
        }

        xmlHttp.send(data);
    }

    httpPut(data, path = "", headers = {}) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.withCredentials = true;

        let callback = this.callback;
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                callback(xmlHttp.responseText);
            }
        };

        xmlHttp.open("PUT", this.url + "/" + path, true);

        for (let key in headers) {
            xmlHttp.setRequestHeader(key, headers[key]);
        }

        xmlHttp.send(data);
    }
}

const url = "http://10.22.240.71:8000";
const path = "validate";

