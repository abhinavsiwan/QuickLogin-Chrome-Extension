function sendClicks() {
    /*var email = $("#email").val();
    var pass = $("#pass").val();
    //var website = $("#website").val();
    var website=$("#websiteID").val();*/
    
    //validation for the input fields
    var email_fill=false;
    var pass_fill=false;
    
    var email = "";
    var pass = "";
    var website=$("#websiteID").val();
    
    //validation for Email field
    $('input[id="email"]').each(function() {
         if($.trim($(this).val()) == '') {
             //$(this).css({ "border": "1px solid red"});
            $("#errorEmail").css('visibility', 'visible');
        } else {
             $(this).css({"border": ""});
             $("#errorEmail").css('visibility', 'hidden');
             email_fill = true;
             email = $("#email").val();
        }
    });
    
    //validation for Password field
    $('input[id="pass"]').each(function() {
         if($.trim($(this).val()) == '') {
             //$(this).css({ "border": "1px solid red"});
            $("#errorPassword").css('visibility', 'visible');
        } else {
             $(this).css({"border": ""});
             $("#errorPassword").css('visibility', 'hidden');
             pass_fill = true;
             pass = $("#pass").val();
        }
    });
    
    //If Email and Password are provided, then only proceed
    if(email_fill && pass_fill) {
        //This part of code sends data from popup to background script
        chrome.extension.sendMessage({email: email, pass: pass, web: website}, function (response) {
            //alert("Popup Response received: ");
            console.log("Popup Response received: ");
        });   
    }
}

$(document).ready(function(){
    console.log("popup.js > extension ready");
    $("#click-me").click(function() {
        sendClicks();
    });
});

