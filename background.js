//Add an event Listener to receive the message sent from popup.js to background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        //alert("Popup message received :"+ message.email + " " + message.pass + " " + message.web);
     
        //save the data in persistent storage
        chrome.storage.sync.set({"key": {'email': message.email, 'pass': message.pass, 'web': message.web}}, function () {
             if (chrome.runtime.error) {
                //alert("Runtime error.");
                console.log("Runtime error.");
            } else {
                //alert("settings saved");
                console.log("settings saved");
            }
        });
        
        //then update the page to the required URL
        if(message.web.toLowerCase() === 'facebook') {
            chrome.tabs.update({url: "http://www.facebook.com"});
        } else if (message.web.toLowerCase() === 'vpn' || message.web.toLowerCase() === 'onepoint') {
            chrome.tabs.update({url: "https://vpn.itcinfotech.com/dana-na/auth/url_default/welcome.cgi"});
        } else if(message.web.toLowerCase() === 'amazon') {
            chrome.tabs.update({url: "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin"});
        } else if(message.web.toLowerCase() === 'outlook') {
            chrome.tabs.update({url: "https://i3ljoin.itcinfotech.com/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fi3ljoin.itcinfotech.com%2fowa%2f%23authRedirect%3dtrue"});
        } else if(message.web.toLowerCase() === 'github') {
            chrome.tabs.update({url: "https://github.com/login"});
        }
        window.close();
});