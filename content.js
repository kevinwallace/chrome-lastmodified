if(document.lastModified) {
    chrome.extension.sendRequest({
        msg: "lastModified",
        lastModified: document.lastModified
    });
}