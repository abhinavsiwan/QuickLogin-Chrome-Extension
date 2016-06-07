function sendClicks() {
    var email = $("#email").val();
    var pass = $("#pass").val();
    var website = $("#website").val();
    
    //This part of code sends data from popup to background script
    chrome.extension.sendMessage({email: email, pass: pass, web: website}, function (response) {
        //alert("Popup Response received: ");
        console.log("Popup Response received: ");
    });
}

$(document).ready(function(){
    console.log("popup.js > extension ready");
    $("#click-me").click(function() {
        sendClicks();
    });
});

