if(document.lastModified) {
    var lastModified = new Date(document.lastModified + " GMT").toString();
    chrome.extension.sendRequest({
        msg: "lastModified",
        lastModified: lastModified
    });
}
