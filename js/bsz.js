bsz=function () {
    var e = ["site_pv", "site_uv", "page_pv", "page_uv"],
        t = document.currentScript,
        n = "https://bsz.dusays.com:9001/api",
        i = "busuanzi-identity",
        r = function () {
            var t = new XMLHttpRequest;
            t.open("POST", n, !0);
            var a = localStorage.getItem(i);
            null != a && t.setRequestHeader("Authorization", "Bearer " + a);
            var r = window.location.href;
            0 == window.location.host.indexOf("www.") && (r = r.replace("www.", "")), t.setRequestHeader("x-bsz-referer", r), t.onreadystatechange = function () {
                if (4 === t.readyState && 200 === t.status) {
                    var a = JSON.parse(t.responseText);
                    if (!0 === a.success) {
                        e.map((function (e) {
                            var t = document.getElementById("busuanzi_value_".concat(e));
                            t && (t.innerHTML = a.data[e])
                        }));
                        var n = t.getResponseHeader("Set-Bsz-Identity");
                        null != n && "" != n && localStorage.setItem(i, n)
                    }
                }
            }, t.send()
        };
    if (r(), a) {
        var s = window.history.pushState;
        window.history.pushState = function () {
            s.apply(this, arguments), r()
        }, window.addEventListener("popstate", (function (e) {
            r()
        }), !1)
    }
}
window.addEventListener('load',bsz);
window.addEventListener('pjax:complete',bsz);