var adblockTest = function(a) {
        var b = document.createElement("div");
        b.innerHTML = "&nbsp";
        b.className = "adsbox";
        document.body.appendChild(b);
        var c = 1;
        window.setTimeout(function() {
            0 === b.offsetHeight && (c = 2);
            b.remove();
            return a(c)
        }, 100)
    },
    userAgentHelper = {
        iOS: function() {
            var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
            if (navigator.platform)
                for (; a.length;)
                    if (navigator.platform === a.pop()) return !0;
            return !1
        }
    },
    cookieHelper = {
        setCookie: function(a, b, c) {
            document.cookie = a + "=" + encodeURI(b +
                "|" + c) + ";expires=" + c + ";path=/"
        },
        getCookie: function(a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = null, e = 0; e < b.length; e++) {
                for (var d = b[e];
                    " " == d.charAt(0);) d = d.substring(1);
                0 == d.indexOf(a) && (c = d.substring(a.length, d.length))
            }
            return c ? (c = decodeURI(c), c = c.split("|"), {
                value: parseInt(c[0]),
                expiration: c[1]
            }) : null
        },
        calcExpiration: function(a) {
            var b = new Date;
            b.setTime(b.getTime() + 36E5 * a);
            return b.toUTCString()
        }
    },
    tabUnder = {
        maxTabTimes: 4,
        timeBetweenTabs: .5,
        init: function() {
            if ("undefined" == typeof section ||
                "undefined" == typeof channel) return !1;
            this.popTimes = "undefined" == typeof popTimes || popTimes > this.maxTabTimes || 0 >= popTimes ? this.maxTabTimes : popTimes;
            "undefined" != typeof timeBetweenTabs && (this.timeBetweenTabs = timeBetweenTabs);
            this.section = section;
            this.channel = channel;
            this.urlToShow = "http://www.wrapk.net/" + adBlocker;
            this.setListener()
        },
        setListener: function() {
            userAgentHelper.iOS() ? document.addEventListener ? document.addEventListener("touchend",
                this.openTab) : document.attachEvent("touchend", this.openTab) : document.addEventListener ? document.addEventListener("click", this.openTab) : document.attachEvent("click", this.openTab)
        },
        openTab: function() {
            var a = cookieHelper.getCookie("tabCount");
            cookieHelper.getCookie("tabExecuted") || a && !(a && a.value < tabUnder.popTimes) || (a ? cookieHelper.setCookie("tabCount", ++a.value, a.expiration) : cookieHelper.setCookie("tabCount", 1, cookieHelper.calcExpiration(24)), cookieHelper.setCookie("tabExecuted", 1, cookieHelper.calcExpiration(tabUnder.timeBetweenTabs)),
                setTimeout(function() {
                    window.location.href = tabUnder.urlToShow;
                    window.open(window.location.href)
                }, userAgentHelper.iOS() ? 500 : 10))
        }
    },
    adBlocker;
window.onload = function() {
    adblockTest(function(a) {
        adBlocker = a;
        tabUnder.init()
    })
};
