if(document.lastModified) {
    var lastModified = new Date(document.lastModified + " GMT");
    var now = new Date();
    if (now.getTime() - lastModified.getTime() > 1000) {
      // This is hacky, but there doesn't seem to be any way to tell if the
      // date returned from document.lastModified is based on a Last-Modified
      // header, or made up on the spot by Chrome.  We'll assume that if it's
      // within 1 second of now, Chrome is lying to us.
      chrome.extension.sendRequest({
          msg: "lastModified",
          lastModified: lastModified.toString()
      });
    }
}
