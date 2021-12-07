function setCookie(name, value) {

    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 10);
    document.cookie = name + "=" + escape(value) + ";expires=" + exdate;

}


function getCookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            var start = start + name.length + 1;
            var end = document.cookie.indexOf(";", start);
            if (end == -1) {
                var end = document.cookie.length;
                return unescape(document.cookie.substring(start, end));
            }
        }
        return "";
    }
}


function deleteCookie(name) {

    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 10);
    document.cookie = name + "=" + escape("") + ";expires=" + exdate;



}