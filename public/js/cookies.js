var btn = document.getElementById('load_values');
var inputline = document.getElementById('arrayinput');
inputline.value = getCookie();

btn.addEventListener("click", setCookie)

function getCookie() {
    if(document.cookie != "") {
        var allcookies = document.cookie.split(';');
        return allcookies[0].split('=')[1]
    }
    return ""
}

function setCookie()
{
    if(inputline == "" ) {
        return;
    }
    var now = new Date();
    //setting expiry date to one day from now
    now.setTime(now.getTime() + 24*60*60*1000);

    var inputarr = inputline.value.split(' ').map(String);
    var op = ""
    for(var i =0; i<inputarr.length;i++){
        op += inputarr[i] + " ";
    }
    document.cookie = "array=" + op;
    document.cookie += "; expires=" + now.toUTCString() + ";";
}
