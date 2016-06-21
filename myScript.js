/*
1. You can use debugger for debugging the application.
2. Below shown functions are examples to show how to access form fields of some websites using jQuery
*/
function facebook(email, pass) {
    /*document.getElementById('email').value = email;
    document.getElementById('pass').value = pass;
    
    var submitBtn = document.getElementById('loginbutton');
    if (submitBtn.type == "submit" || submitBtn.type == "button") {
        submitBtn.click();
    }
    else {
        document.forms[0].submit();
    }*/
    $('#email').val(email);
    $('#pass').val(pass);
    
    $('#login_form').submit();
}

function itcOutlook(email, pass) {
    //debugger;
    /*document.getElementById('username').value = email;   //Name
    document.getElementById('password').value = pass;   //EmailId*/
    
    $('#username').val(email);
    $('#password').val(pass);
    
    $(".signinbutton").trigger("click");
}

function amazon(email, pass) {
    /*document.getElementById('ap_email').value = email; 
    document.getElementById('ap_password').value = pass;

    //check for the submit button
    var submitBtn = document.getElementById('signInSubmit');
    submitBtn.click();*/
    
    $('#ap_email').val(email);
    $('#ap_password').val(pass);
    
    $('#signInSubmit').click();
}

function itcVPN(email, pass) {
    //debugger;
    document.forms[0].username.value = email;
    document.forms[0].password.value = pass;
    
    document.forms[0].submit();
}

function itcOnePoint(email, pass) {
    //alert(email + " " + pass);
    //debugger;
    var userid = email.substring(12);;
    /*document.getElementById('userid').value = userid; 
    document.getElementById('pwd').value = pass;

    //click on submit
    document.forms[0].submit();  */
    
    $('#userid').val(userid);
    $('#pwd').val(pass);
    
    $('#login').submit();
}

function gitHub(email, pass) {
    $('#login_field').val(email);
    $('#password').val(pass);
    
    $(".btn-primary").trigger("click");
}

$(document).ready(function(){
    var email;
    var pass;
    var web;
    
//----------------------------------------------------OPTIONAL---------------------------------------------------------------------------
    //Define these URLs if you want your script to execute a particular functionality when visiting a URL
    //This will be done using "location.href == urlVPN"
    var urlVPN = "https://vpn.itcinfotech.com/dana/home/index.cgi";
    var urlOnePoint = "https://vpn.itcinfotech.com/psp/OPPORTAL/,DanaInfo=i3lerpweb4.itcinfotech.com,Port=8000,SSO=U+?cmd=login&languageCd=ENG&";
    var urlTimeSheet = "https://vpn.itcinfotech.com/psp/OPPORTAL/EMPLOYEE/EMPL/h/,DanaInfo=i3lerpweb4.itcinfotech.com,Port=8000+?tab=DEFAULT";

//-------------------------------------------------LOG OUT FUNCTIONALTY------------------------------------------------------------------
    //These URLs to take care of log Out functionalities
    var urlAmazonLogOut = "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26action%3Dsign-out%26path%3D%252Fgp%252Fyourstore%252Fhome%26ref_%3Dnav_youraccount_signout%26signIn%3D1%26useRedirectOnSuccess%3D1";
    
    var urlFacebookLogOut = "https://www.facebook.com/?stype=";
    
    var urlOutlookLogOut = "https://i3ljoin.itcinfotech.com/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fi3ljoin.itcinfotech.com%2fowa";
    
    var urlVPNLogOut = "https://vpn.itcinfotech.com/dana-na/auth/url_default/welcome.cgi?p=logout&c=1&u=useruidce9624ce960c4a309398d1694c6416d71240d482&signinUrl=gDhXVwMvBwABAAAAdpbwvGcxJDmmRSUC9Fek3ELwK6S1KylnmQw1kEs54KLiRokFbpKnFr4HcJDIpIJOrnN9qFPyYRJb-yIusKB6Eg%3D%3D";
//---------------------------------------------------------------------------------------------------------------------------------------
    
    //debugger;
    //Retrieve the saved values from persistent storage
    chrome.storage.sync.get("key", function (obj) {
        email = obj.key.email;
        pass = obj.key.pass;
        web = obj.key.web;
        //alert("saved message : " + JSON.stringify(obj));
        //alert("saved message : " + obj.key.email.toLowerCase() + obj.key.pass.toLowerCase() + obj.key.web.toLowerCase());
        
        if(obj.key.web.toLowerCase() === 'facebook') {
                //to prevent logging in again and again after logout
             if(location.href.includes(urlFacebookLogOut)) {
                console.log("Facebook Log out url visited");
                return;
            }
            facebook(obj.key.email, obj.key.pass);
        } else if(obj.key.web.toLowerCase() === 'amazon') {
            //to prevent logging in again and again after logout
            if(location.href == urlAmazonLogOut) {
                console.log("Amazon Log out url visited");
                return;
            }
            amazon(obj.key.email, obj.key.pass);
        } else if (obj.key.web.toLowerCase() === 'vpn' || obj.key.web.toLowerCase() === 'onepoint') {
            //to prevent logging in again and again after logout
            if(location.href == urlVPNLogOut) {
                console.log("VPN Log out url visited");
                return;
            }
            itcVPN(obj.key.email, obj.key.pass);
        } else if (obj.key.web.toLowerCase() === 'outlook') {
            //to prevent logging in again and again after logout
            if(location.href === urlOutlookLogOut) {
                console.log("Outlook Log out url visited");
                return;
            }
            itcOutlook(obj.key.email, obj.key.pass);
        } else if (obj.key.web.toLowerCase() === 'github') {
            gitHub(obj.key.email, obj.key.pass);
        }
    });
    
//----------------------------------------------------OPTIONAL---------------------------------------------------------------------------
    //This part of the code is used when we want our script to execute a particular functionality when visiting a URL   
    //debugger;
    if (location.href == urlVPN){
        //alert("VPN url visited");
        console.log("VPN url visited");
        //click on one Point link
        $('a').get(18).click();
      } else if(location.href == urlOnePoint) {
        setTimeout(function () {
            console.log("1 second passed");
            itcOnePoint(email, pass);
        },1000);
        //alert("One Point url visited");
        console.log("One Point url visited");
        //itcOnePoint(email, pass);
      } else if(location.href == urlTimeSheet) {
        setTimeout(function () {
            console.log("3 seconds passed");
            $('img').get(42).click();
        },4000);
        console.log("Time sheet url visited");
      } else {
          console.log("Not visited");
      }
//---------------------------------------------------------------------------------------------------------------------------------------
});