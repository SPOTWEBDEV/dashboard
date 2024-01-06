! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var f = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        J = "undefined" == typeof window ? {
            document: f,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
            } else if (e.nodeType || e === J || e === f) a.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
                    else
                        for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: o
                        }), u.addEventListener(h, o, s)
                    } else
                        for (d = 0; d < p.length; d += 1) {
                            var v = p[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: l
                            }), u.addEventListener(v, l, s)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new J.CustomEvent(r, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function r(e) {
                if (e.target === this)
                    for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === J ? J.scrollY : e.scrollTop,
                    n = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                    for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof l)
                for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        L.fn[e] = t[e]
    });
    var e, a, i, ee = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = J.getComputedStyle(e, null);
                return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, a, i, s, r = {},
                    n = e || J.location.href;
                if ("string" == typeof n && n.length)
                    for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
                        }
                }
                return a
            }
        },
        te = (i = f.createElement("div"), {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
            flexbox: function() {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in J
        }),
        s = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        n = {
            components: {
                configurable: !0
            }
        };
    s.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, s.prototype.once = function(i, s, e) {
        var r = this;
        if ("function" != typeof s) return r;
        return r.on(i, function e() {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            s.apply(r, t), r.off(i, e)
        }, e)
    }, s.prototype.off = function(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
                e === i && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, s.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, s.prototype.useModulesParams = function(a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && ee.extend(a, t.params)
        })
    }, s.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function(e) {
            var a = s.modules[e],
                t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function(e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function(e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, n.components.set = function(e) {
        this.use && this.use(e)
    }, s.installModule = function(t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, s.use = function(e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(s, n);
    var o = {
        updateSize: function() {
            var e, t, a = this,
                i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
                    T = 0;
                    var P = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var z = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({
                            "-webkit-box-ordinal-group": z,
                            "-moz-box-ordinal-group": z,
                            "-ms-flex-order": z,
                            "-webkit-order": z,
                            order: z
                        })) : $ = k - (L = Math.floor(k / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null),
                                D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width")),
                                    N = parseFloat(I.getPropertyValue("padding-left")),
                                    H = parseFloat(I.getPropertyValue("padding-right")),
                                    G = parseFloat(I.getPropertyValue("margin-left")),
                                    B = parseFloat(I.getPropertyValue("margin-right")),
                                    X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + N + H + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height")),
                                    V = parseFloat(I.getPropertyValue("padding-top")),
                                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                                    R = parseFloat(I.getPropertyValue("margin-top")),
                                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                                    W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
                        l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }), t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                        marginLeft: g + "px"
                    }) : l.css({
                        marginRight: g + "px"
                    }) : l.css({
                        marginBottom: g + "px"
                    })), t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function(e) {
                            Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }), (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - Q
                        }), c.forEach(function(e, t) {
                            c[t] = e + Q
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, a = this,
                i = [],
                s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0])
                } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                }
            s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var d = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var p = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var c = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate),
                u = n.map(function(e) {
                    return d(e)
                }),
                h = (o.map(function(e) {
                    return d(e)
                }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        },
        slideReset: function(e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var u = {
        loopCreate: function() {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function(e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var h = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var v = {
            appendSlide: function(e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && te.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
            },
            addSlide: function(e, t) {
                var a = this,
                    i = a.$wrapperEl,
                    s = a.params,
                    r = a.activeIndex;
                s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (n <= e) a.appendSlide(t);
                else {
                    for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                        var p = a.slides.eq(d);
                        p.remove(), l.unshift(p)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                        o = e < r ? r + t.length : r
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        m = function() {
            var e = J.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: J.cordova || J.phonegap,
                    phonegap: J.cordova || J.phonegap
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
            }
            return t.pixelRatio = J.devicePixelRatio || 1, t
        }();

    function g() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var b = {
        attachEvents: function() {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl;
            e.onTouchStart = function(e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
                        if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                        else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                        s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                        var n = s.currentX,
                            o = s.currentY,
                            l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                            d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(n <= d || n >= J.screen.width - d)) {
                            if (ee.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                var p = !0;
                                L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                (i.touchStartForcePreventDefault || c) && r.preventDefault()
                            }
                            t.emit("touchStart", r)
                        }
                    }
                }
            }.bind(e), e.onTouchMove = function(e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches,
                    r = t.rtlTranslate,
                    n = e;
                if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                    if (!a.isTouchEvent || "mousemove" !== n.type) {
                        var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                            l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                        if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (ee.extend(s, {
                            startX: o,
                            startY: l,
                            currentX: o,
                            currentY: l
                        }), a.touchStartTime = ee.now()));
                        if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (t.isVertical()) {
                                if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
                            } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                        if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
                        if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                            s.currentX = o, s.currentY = l;
                            var d, p = s.currentX - s.startX,
                                c = s.currentY - s.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
                                else if (a.startMoving) {
                                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                var u = t.isHorizontal() ? p : c;
                                s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                var h = !0,
                                    v = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
                                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: a.touchStartTime
                                }), a.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: ee.now()
                                })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                            }
                        }
                    }
                } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
            }.bind(e), e.onTouchEnd = function(e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches,
                    r = t.rtlTranslate,
                    n = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    d = e;
                if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = ee.now(),
                    u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function() {
                        t && !t.destroyed && t.emit("click", d)
                    }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
                if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < a.velocities.length) {
                            var h = a.velocities.pop(),
                                v = a.velocities.pop(),
                                f = h.position - v.position,
                                m = h.time - v.time;
                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio,
                            b = t.velocity * g,
                            w = t.translate + b;
                        r && (w = -w);
                        var y, x, T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -w) {
                                    S = C;
                                    break
                                }
                            w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function() {
                                t.loopFix()
                            }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]);
                    var z = (p - o[M]) / k;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }.bind(e), e.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                        passive: !1,
                        capture: n
                    } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        },
        detachEvents: function() {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl,
                r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var w, y = {
            setBreakpoint: function() {
                var e = this,
                    t = e.activeIndex,
                    a = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params,
                    r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = o || e.originalParams,
                            d = s.loop && l.slidesPerView !== s.slidesPerView;
                        ee.extend(e.params, l), ee.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1,
                        a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }), a.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        I = {
            isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
            isEdge: !!J.navigator.userAgent.match(/Edge/g),
            isSafari: (w = J.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
        };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: o,
            translate: d,
            transition: p,
            slide: c,
            loop: u,
            grabCursor: h,
            manipulation: v,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function(e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }
                    e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        E = {},
        S = function(u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function(t) {
                    Object.keys(T[t]).forEach(function(e) {
                        h.prototype[e] || (h.prototype[e] = T[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {
                            enabled: !0
                        }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
                            enabled: !1
                        })
                    }
                });
                var n = ee.extend({}, x);
                r.useModulesParams(n), r.params = ee.extend({}, n, E, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function(e, t) {
                            var a = ee.extend({}, s, {
                                el: t
                            });
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return ee.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: ee.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }
            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else
                    for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function() {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid,
                        t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                        t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    s = a.$el,
                    r = a.$wrapperEl,
                    n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function(e) {
                ee.extend(E, e)
            }, e.extendedDefaults.get = function() {
                return E
            }, e.defaults.get = function() {
                return x
            }, e.Class.get = function() {
                return u
            }, e.$.get = function() {
                return L
            }, Object.defineProperties(h, e), h
        }(s),
        C = {
            name: "device",
            proto: {
                device: m
            },
            static: {
                device: m
            }
        },
        M = {
            name: "support",
            proto: {
                support: te
            },
            static: {
                support: te
            }
        },
        k = {
            name: "browser",
            proto: {
                browser: I
            },
            static: {
                browser: I
            }
        },
        P = {
            name: "resize",
            create: function() {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        z = {
            func: J.MutationObserver || J.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new z.func(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                a.emit("observerUpdate", e[0])
                            };
                            J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                        } else a.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            },
            init: function() {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        $ = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                ee.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        D = {
            update: function(e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (ee.extend(t.virtual, {
                        from: y,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function() {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function(e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            },
            renderSlide: function(e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            },
            appendSlide: function(e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function(e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        O = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: D.update.bind(e),
                        appendSlide: D.appendSlide.bind(e),
                        prependSlide: D.prependSlide.bind(e),
                        renderSlide: D.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        A = {
            handle: function(e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = J.innerWidth,
                            o = J.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            },
            enable: function() {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        N = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: A.enable.bind(this),
                        disable: A.disable.bind(this),
                        handle: A.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var H = {
            lastScrollTime: ee.now(),
            event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel",
                    t = e in f;
                if (!t) {
                    var a = f.createElement("div");
                    a.setAttribute(e, "return;"), t = "function" == typeof a[e]
                }
                return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                if (!a.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    r = a.rtlTranslate ? -1 : 1,
                    n = H.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                        s = n.pixelX * r
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                        s = n.pixelY
                    }
                else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
                if (0 === s) return !0;
                if (i.invert && (s = -s), a.params.freeMode) {
                    a.params.loop && a.loopFix();
                    var o = a.getTranslate() + s * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function() {
                            a.slideToClosest()
                        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
                } else {
                    if (60 < ee.now() - a.mousewheel.lastScrollTime)
                        if (s < 0)
                            if (a.isEnd && !a.params.loop || a.animating) {
                                if (i.releaseOnEdges) return !0
                            } else a.slideNext(), a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges) return !0
                    } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = (new J.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var e = this;
                if (!H.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function() {
                var e = this;
                if (!H.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        G = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        B = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var o, l, d, p = e.pagination.bullets;
                        if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function(e, t) {
                            var a = L(t),
                                i = a.index();
                            i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                        else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px")
                        }
                    }
                    if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                        var g;
                        g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                        e.preventDefault();
                        var t = L(this).index() * a.params.slidesPerGroup;
                        a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                    }), ee.extend(a.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        X = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && t.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        Y = {
            setTransform: function(e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p
                }
                if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, s)
                }), t.each(function(e, t) {
                    var a = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        i.parallax.setTransform(t, a)
                    })
                })
            },
            setTransition: function(s) {
                void 0 === s && (s = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    var a = L(t),
                        i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0), a.transition(i)
                })
            }
        },
        V = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, s.scaleStart = V.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    a.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = o, a.currentY = d;
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        F = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                    !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
                        var i = L(t);
                        i.addClass(p.loadingClass);
                        var s = i.attr("data-background"),
                            r = i.attr("data-src"),
                            n = i.attr("data-srcset"),
                            o = i.attr("data-sizes");
                        d.loadImage(i[0], r || s, n, o, !1, function() {
                            if (null != d && d && (!d || d.params) && !d.destroyed) {
                                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(d.params.slideDuplicateClass)) {
                                        var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                        d.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        d.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                d.emit("lazyImageReady", c[0], i[0])
                            }
                        }), d.emit("lazyImageLoad", c[0], i[0])
                    })
                }
            },
            load: function() {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;

                function l(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
                }
                if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function(e, t) {
                    var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                    i.lazy.loadInSlide(a)
                });
                else if (1 < o)
                    for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b))
                    }
            }
        },
        R = {
            LinearSpline: function(e, t) {
                var a, i, s, r, n, o = function(e, t) {
                    for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                    return a
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var a, i, s = this,
                    r = s.controller.control;

                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
                else r instanceof S && t !== r && n(r)
            },
            setTransition: function(t, e) {
                var a, i = this,
                    s = i.controller.control;

                function r(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
                else s instanceof S && e !== s && r(s)
            }
        },
        q = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function() {
                var i = this,
                    s = i.params.a11y;
                i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                    var a = L(t);
                    i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t, a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
            }
        },
        W = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = W.slugify(a.attr("data-history"));
                    J.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = J.history.state;
                    s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
                        value: i
                    }, null, i) : J.history.pushState({
                        value: i
                    }, null, i))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (W.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        j = {
            onHashCange: function() {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    e.slideTo(a)
                }
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || ""
                    }
            },
            init: function() {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                                var r = s.index();
                                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        U = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        K = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.transitionEnd(function() {
                        if (!s && a && !a.destroyed) {
                            s = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                        }
                    })
                }
            }
        },
        _ = {
            setTranslate: function() {
                var e, t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                    var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            k = d.shadowScale,
                            P = d.shadowScale / M,
                            z = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                    }
                var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        Z = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    t.eq(i).transitionEnd(function() {
                        if (!r && a && !a.destroyed) {
                            r = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                        }
                    })
                }
            }
        },
        Q = {
            setTranslate: function() {
                for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                    var v = i.eq(u),
                        f = r[u],
                        m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                    var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                    if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                        var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                    }
                }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ae = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), ee.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                        var s;
                        if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                            var r = e.activeIndex;
                            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                        }
                        e.slideTo(s)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s, r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                            var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
                        for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                    else
                        for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
                }
            }
        },
        ie = [C, M, k, P, $, O, N, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: H.enable.bind(e),
                        disable: H.disable.bind(e),
                        handle: H.handle.bind(e),
                        handleMouseEnter: H.handleMouseEnter.bind(e),
                        handleMouseLeave: H.handleMouseLeave.bind(e),
                        lastScrollTime: ee.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    navigation: {
                        init: G.init.bind(e),
                        update: G.update.bind(e),
                        destroy: G.destroy.bind(e),
                        onNextClick: G.onNextClick.bind(e),
                        onPrevClick: G.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t = this.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    pagination: {
                        init: B.init.bind(e),
                        render: B.render.bind(e),
                        update: B.update.bind(e),
                        destroy: B.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    scrollbar: {
                        init: X.init.bind(e),
                        destroy: X.destroy.bind(e),
                        updateSize: X.updateSize.bind(e),
                        setTranslate: X.setTranslate.bind(e),
                        setTransition: X.setTransition.bind(e),
                        enableDraggable: X.enableDraggable.bind(e),
                        disableDraggable: X.disableDraggable.bind(e),
                        setDragPosition: X.setDragPosition.bind(e),
                        onDragStart: X.onDragStart.bind(e),
                        onDragMove: X.onDragMove.bind(e),
                        onDragEnd: X.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    parallax: {
                        setTransform: Y.setTransform.bind(this),
                        setTranslate: Y.setTranslate.bind(this),
                        setTransition: Y.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var i = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                    t[e] = V[e].bind(i)
                }), ee.extend(i, {
                    zoom: t
                });
                var s = 1;
                Object.defineProperty(i.zoom, "scale", {
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        if (s !== e) {
                            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                            i.emit("zoomChange", e, t, a)
                        }
                        s = e
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                ee.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: F.load.bind(this),
                        loadInSlide: F.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: R.getInterpolateFunction.bind(e),
                        setTranslate: R.setTranslate.bind(e),
                        setTransition: R.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    a11y: {
                        liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(q).forEach(function(e) {
                    t.a11y[e] = q[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    history: {
                        init: W.init.bind(e),
                        setHistory: W.setHistory.bind(e),
                        setHistoryPopState: W.setHistoryPopState.bind(e),
                        scrollToSlide: W.scrollToSlide.bind(e),
                        destroy: W.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: j.init.bind(e),
                        destroy: j.destroy.bind(e),
                        setHash: j.setHash.bind(e),
                        onHashCange: j.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: U.run.bind(t),
                        start: U.start.bind(t),
                        stop: U.stop.bind(t),
                        pause: U.pause.bind(t),
                        onTransitionEnd: function(e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    fadeEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                ee.extend(this, {
                    cubeEffect: {
                        setTranslate: _.setTranslate.bind(this),
                        setTransition: _.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    flipEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    coverflowEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                ee.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ae.init.bind(this),
                        update: ae.update.bind(this),
                        onThumbClick: ae.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
//# sourceMappingURL=swiper.min.js.map
! function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(s, !0);
                if (r) return r(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                return o(t[s][1][e] || e)
            }, u, u.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
    return o
}({
    1: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("webfontloader"),
            r = e("./MinimalClass"),
            s = e("./ContentFix"),
            a = e("./ScrollActionSimple"),
            l = e("../public/PopupRequestForm"),
            c = e("../public/PopupEmailForm"),
            u = e("../public/PopupPolicy"),
            h = e("../public/MainMenu"),
            d = e("../public/IndexFooter"),
            f = e("../public/JsLoader"),
            p = e("../public/JsIndexLoader"),
            m = e("../public/Weborama");
        e("smoothscroll-polyfill").polyfill(), t.exports = r.extend({
            __className: "App",
            _resizable: [],
            _scrollable: [],
            pre: function() {
                this.lang = i("html").attr("lang"), this.fonts_loaded = !1, this.inited = !1
            },
            create: function() {
                var e = this;
                window.app = this, this.update_window_size(), this.weborama = new m, this.ww = 0, this.wh = 0, this.page_height = 0, this.scrollTop = 0, this.previousScrollTop = 0, this.scrollDir = !0, o.load({
                    custom: {
                        families: ["History", "Open Sans"]
                    },
                    active: function() {
                        e.fonts_loaded = !0, e.resize()
                    }
                }), this.cfix = new s, this.sas = new a, i(window).resize(function(t) {
                    e.resize(t)
                }), i(window).scroll(function(t) {
                    e.scroll(t)
                }), i(document).ready(function(t) {
                    e.resize(t), e.scroll(t)
                }), this.resize(), this.scroll(), this.setup_loader(), setTimeout(function() {
                    e.setup()
                }, 10)
            },
            setup_loader: function() {
                var e = this,
                    t = function() {
                        i(document.body).removeClass("loading").addClass("loaded")
                    },
                    n = function() {
                        e.cfix.setFixedContent(!1)
                    },
                    o = i(".js-barkli-index-loader");
                o.length ? this.loader = new p({
                    element: o,
                    delegate: this,
                    _onLoad: t,
                    _onFullyLoad: n
                }) : (o = i(".js-barkli-loader")).length ? this.loader = new f({
                    element: o,
                    delegate: this,
                    _onLoad: t,
                    _onFullyLoad: n
                }) : (this.loader = !1, t(), n()), this.loader && (window.scrollTo(0, 0), this.cfix.setFixedContent(!0))
            },
            setup: function() {
                var e = this,
                    t = document.getElementById("main-menu");
                this.main_menu = !!t && new h({
                    element: t,
                    delegate: e
                }), i(".js-popup-request-form").each(function(t, n) {
                    e.popup_request_form = new l({
                        element: n,
                        delegate: e
                    })
                }), i(".js-popup-email-form").each(function(t, n) {
                    e.popup_email_form = new c({
                        element: n,
                        delegate: e
                    })
                }), i(".js-popup-policy-trigger").each(function(t, n) {
                    e.popup_policy_form = new u({
                        element: n,
                        delegate: e
                    })
                }), i(".js-index-footer").each(function(t, n) {
                    e.index_footer = new d({
                        element: n,
                        delegate: e
                    })
                }), this.loader && this.loader.load()
            },
            add_resize: function(e) {
                for (var t = 0; t < this._resizable.length; t++)
                    if (this._resizable[t] == e) return;
                this._resizable.push(e), this.ww && this.wh && e.resize(this.ww, this.wh)
            },
            remove_resize: function(e) {
                for (var t = [], n = !1, i = 0; i < this._resizable.length; i++) this._resizable[i] == e ? n = !0 : t.push(e);
                n && (this._resizable = t)
            },
            add_scroll: function(e) {
                for (var t = 0; t < this._scrollable.length; t++)
                    if (this._scrollable[t] == e) return;
                this._scrollable.push(e), e.scroll(this.scrollTop)
            },
            remove_scroll: function(e) {
                for (var t = [], n = !1, i = 0; i < this._scrollable.length; i++) this._scrollable[i] == e ? n = !0 : t.push(e);
                n && (this._scrollable = t)
            },
            update_window_size: function() {
                this.ww = i(window).width(), this.wh = i(window).height()
            },
            resize: function() {
                this.update_window_size(), window.innerWidth;
                for (var e = 0; e < this._resizable.length; e++) this._resizable[e].resize(this.ww, this.wh);
                this.update_page_height(!0)
            },
            update_page_height: function(e) {
                this.page_height = i("#content").outerHeight(!0), !e && this.index_footer && (this.index_footer.resize(this.ww, this.wh), this.index_footer.scroll(this.scrollTop))
            },
            scroll: function() {
                this.scrollTop = i(window).scrollTop(), this.scrollDir = this.scrollTop > this.previousScrollTop, this.previousScrollTop = this.scrollTop;
                for (var e = 0; e < this._scrollable.length; e++) this._scrollable[e].scroll(this.scrollTop, this.scrollDir)
            }
        })
    }, {
        "../public/JsIndexLoader": 17,
        "../public/JsLoader": 18,
        "../public/IndexFooter": 29,
        "../public/MainMenu": 33,
        "../public/PopupEmailForm": 35,
        "../public/PopupPolicy": 36,
        "../public/PopupRequestForm": 37,
        "../public/Weborama": 45,
        "./ContentFix": 2,
        "./MinimalClass": 11,
        "./ScrollActionSimple": 12,
        jquery: 52,
        "smoothscroll-polyfill": 53,
        webfontloader: 54
    }],
    2: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("class.extend");
        t.exports = o.extend({
            __className: "ContentFix",
            contentFixed: !1,
            contentFixedAt: 0,
            init: function() {
                var e = this;
                this.screen = i("#screen"), this.content = this.screen.find("#content"), window.setFixedContent = function(t) {
                    return e.setFixedContent(t)
                }
            },
            setFixedContent: function(e) {}
        })
    }, {
        "class.extend": 50,
        jquery: 52
    }],
    3: [function(e, t, n) {
        "use strict";
        e("jquery"), e("./ForceValidable")
    }, {
        "./ForceValidable": 9,
        jquery: 52
    }],
    4: [function(e, t, n) {}],
    5: [function(e, t, n) {}],
    6: [function(e, t, n) {}],
    7: [function(e, t, n) {}],
    8: [function(e, t, n) {}],
    9: [function(e, t, n) {}],
    10: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("../lib/MinimalClass");
        t.exports = o.extend({
            __className: "Loader",
            loaderSVG: '<svg class="circular" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="#4B575C" stroke-width="1" opacity=".2" fill="none"/><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
            loaderSVG_big: '<svg class="circular" viewBox="0 0 70 70"><circle cx="35" cy="35" r="30" stroke="#4B575C" stroke-width="1" opacity=".2" fill="none"/><circle class="path" cx="35" cy="35" r="30" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
            create: function() {
                this.element = i("<div>").addClass("loader"), this.css && this.element.addClass(this.css), this.big && this.element.addClass("big"), this.caption = !!this.text && i("<div>").addClass("caption").html(this.text), this.fixed && this.element.addClass("fixed"), this.target && this.appendTo(this.target)
            },
            show: function() {
                this.element.addClass("show")
            },
            hide: function() {
                this.element.removeClass("show")
            },
            appendTo: function(e) {
                this.target = i(e), this.element.appendTo(this.target), this.element.html(this.big ? this.loaderSVG_big : this.loaderSVG), this.caption && this.element.append(this.caption)
            },
            remove: function() {
                this.element.remove()
            }
        })
    }, {
        "../lib/MinimalClass": 11,
        jquery: 52
    }],
    11: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("bezier-easing"),
            r = e("class.extend");
        t.exports = r.extend({
            __className: "MinimalClass",
            __nativeMode: !1,
            init: function(e) {
                this.delegate = !1, this.element = !1, this.opt = {}, this.pre(e), "function" == typeof this._pre && this._pre(e), this.setOptions(e), this.create()
            },
            create: function() {},
            pre: function(e) {},
            _pre: null,
            log_buffer: [],
            log_log_buffer: function() {
                for (var e = 0; e < this.log_buffer.length; e++) window.console.log.apply(this, this.log_buffer[e]);
                return this.log_buffer = [], "End of log buffer."
            },
            log: function() {
                void 0 !== window.console && "function" == typeof window.console.log ? window.console.log.apply(window.console, arguments) : alert(arguments.join("\n"))
            },
            setOptions: function(e) {
                if (void 0 !== e)
                    for (var t in e) this.setOption(t, e[t])
            },
            setOption: function(e, t) {
                "element" !== e ? "delegate" !== e ? "_" !== e.substr(0, 1) ? this.opt[e] = t : this[e = e.substr(1)] = t : this.delegate = t : this.element = this.__nativeMode ? t : i(t)
            },
            mouseWheelLocked: !1,
            onMouseWheelLock: function(e) {
                e.preventDefault()
            },
            toggleMouseWheelLock: function(e) {
                return e !== this.mouseWheelLocked && (e ? i(document).bind("mousewheel", this.onMouseWheelLock) : i(document).unbind("mousewheel", this.onMouseWheelLock), this.mouseWheelLocked = e), this.mouseWheelLocked
            },
            in_array: function(e, t) {
                for (var n = t.length, i = 0; i < n; i++)
                    if (t[i] == e) return !0;
                return !1
            },
            is_touch_device: function() {
                return "ontouchstart" in window || window.navigator.maxTouchPoints
            },
            setCaretPosition: function(e, t) {
                if (null != e)
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        n.move("character", t), n.select()
                    } else e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) : e.focus()
            },
            transitionEndEventName: function() {
                var e, t = document.createElement("div"),
                    n = {
                        transition: "transitionend",
                        OTransition: "otransitionend",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        msTransition: "MSTransitionEnd"
                    };
                for (e in n)
                    if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e]
            },
            animationEndEventName: function() {
                var e, t = document.createElement("div"),
                    n = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "mozAnimationRnd",
                        msAnimation: "MSAnimationEnd"
                    };
                for (e in n)
                    if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e]
            },
            xlink: function(e, t) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return n.innerHTML = '<use xlink:href="#' + e + '"></use>', t && n.setAttribute("class", t), n
            },
            calculate_animated_value: function(e, t, n) {
                var i = t > e,
                    o = i ? t - e : e - t,
                    r = (i ? 1 : -1) * Math.max(.001, o / n);
                return i ? Math.min(t, e + r) : Math.max(t, e + r)
            },
            lz: function(e) {
                var t = document.getElementById("LZ");
                t || ((t = document.createElement("DIV")).id = "LZ", t.className = "LZ", document.body.appendChild(t)), t.appendChild(e)
            },
            preload_image: function(e, t) {
                var n = new Image;
                n.src = e, n.onload = function() {
                    "function" == typeof t && t(n)
                }, this.lz(n)
            },
            fullscreen: function(e) {
                var t = document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement,
                    n = document.documentElement;
                return (t = t || !1) != e && (t ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullScreen ? n.webkitRequestFullScreen() : n.msRequestFullscreen && n.msRequestFullscreen(), !0)
            },
            calc_element_scroll_prc: function(e) {
                if (void 0 === e || "function" != typeof e.getBoundingClientRect) return 0;
                var t = e.getBoundingClientRect(),
                    n = window.innerHeight + t.height;
                return t.top > window.innerHeight ? 0 : t.top < -t.height ? 1 : 1 - (t.top + t.height) / n
            },
            animate: function(e, t, n) {
                var i, r = Date.now(),
                    s = o(t[0], t[1], t[2], t[3]);
                ! function t() {
                    var o = (Date.now() - r) / e;
                    o > 1 ? (n(1), cancelAnimationFrame(i)) : (n(s(o)), i = requestAnimationFrame(t.bind(this)))
                }()
            },
            measure_distance: function(e, t) {
                return e >= 0 && t >= 0 || e <= 0 && t <= 0 ? e < t ? e - t : t - e : (Math.abs(t) + Math.abs(e)) * (t < 0 ? -1 : 0)
            },
            setTouchEvent: function(e) {
                var t = e.touchSurface;
                i(t).bind("touchstart", function(n) {
                    var o = n.originalEvent;
                    if (e.distanceX = 0, e.distanceY = 0, e.locked = !1, 1 != o.touches.length) return !1;
                    (e.prevent || e.preventStart || Math.abs(e.movedX) < Math.abs(e.movedY)) && (o.preventDefault(), o.stopPropagation());
                    var r, s, a = Math.round(i(window).width() / 2),
                        l = (new Date).getTime();
                    r = s = {
                        top: o.touches[0].clientY,
                        left: o.touches[0].clientX
                    }, "function" == typeof e.onStart && e.onStart(e, o), i(t).bind("touchmove", function(t) {
                        if (1 != (o = t.originalEvent).touches.length) return !1;
                        (e.prevent || e.preventMove || Math.abs(e.movedX) < Math.abs(e.movedY)) && (o.preventDefault(), o.stopPropagation()), r = {
                            top: o.touches[0].clientY,
                            left: o.touches[0].clientX
                        }, e.prevDistanceX = e.distanceX, e.prevDistanceY = e.distanceY, e.distanceX = r.left - s.left, e.distanceY = r.top - s.top, e.movedX = e.distanceX - e.prevDistanceX, e.movedY = e.distanceY - e.prevDistanceY, e.onMove && e.onMove(e, o)
                    }), i(t).bind("touchend", function(n) {
                        o = n.originalEvent, (e.prevent || e.preventEnd || Math.abs(e.movedX) < Math.abs(e.movedY)) && (o.preventDefault(), o.stopPropagation());
                        var c = (new Date).getTime();
                        e.onEnd && (e.dTime = c - l, e.prevDistanceX = e.distanceX || 0, e.prevDistanceY = e.distanceY || 0, e.distanceX = r.left - s.left, e.distanceY = r.top - s.top, e.movedX = e.distanceX - e.prevDistanceX, e.movedY = e.distanceY - e.prevDistanceY, e.maxDTime = e.maxDTime || 1200, e.minDistanceX = e.minDistanceX || 100, e.minDistanceY = e.minDistanceY || 100, e.moved = !1, e.click = !1, e.clickWH = !1, e.dTime < e.maxDTime && (e.distanceX < -e.minDistanceX ? e.moved = "left" : e.distanceX > e.minDistanceX ? e.moved = "right" : e.distanceY < -e.minDistanceY ? e.moved = "up" : e.distanceY > e.minDistanceY ? e.moved = "down" : Math.abs(e.distanceY) < e.minDistanceY && Math.abs(e.distanceX) < e.minDistanceX && (e.clickWH = s.left > a ? 1 : -1)), e.preventEndIfMoved && e.moved && (o.preventDefault(), o.stopPropagation()), e.onEnd(e, o)), i(t).unbind("touchmove"), i(t).unbind("touchend"), e.distanceX = 0, e.distanceY = 0
                    })
                })
            }
        })
    }, {
        "bezier-easing": 49,
        "class.extend": 50,
        jquery: 52
    }],
    12: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("./MinimalClass");
        t.exports = i.extend({})
    }, {
        "./MinimalClass": 11,
        jquery: 52
    }],
    13: [function(e, t, n) {
        "use strict";
        var i = e("./index.js"),
            o = (e("jquery"), e("./MinimalClass"));
        t.exports = o.extend({
            __className: "Slider",
            __nativeMode: !0,
            pre: function(e) {
                this.loaded = !1, this.loading = !1, this.loadedItems = 0, this.stagetRect = !1, this.switching = !0, this.pos = 0, this.item = [], this.autoplay = !1, this.autoplayTimer = !1, this.stageRect = !1, this.autoload = !0, this.loadOnDemand = !1, this.loadInSequence = !1, this.isUserInteracted = !1, this.itemSetupMode = "background", this.clickableStage = !0
            },
            create: function() {
                var e = this;
                this.stage = this.element.querySelector(".stage"), this.stage && (this.stageRect = this.stage.getBoundingClientRect(), this.pos_view = this.element.querySelector(".js-pos"), this.arrl = this.element.querySelector(".js-prev"), this.arrr = this.element.querySelector(".js-next"), i.querySelectorAll(".item", this.stage).forEach(function(t, n) {
                    var o = {
                        id: n,
                        obj: t,
                        src: t.getAttribute("data-src"),
                        image: t.querySelector(".image"),
                        active: i.hasClass(t, "active"),
                        width: 0,
                        height: 0,
                        w: 0,
                        h: 0,
                        loaded: !1,
                        loading: !1,
                        error: !1
                    };
                    o.active && (e.pos = n), e.item.push(o)
                }), this.autoload && (this.loadOnDemand ? this.loadItem(this.pos, function(t) {
                    e.prepareSlider(), e.switching = !1
                }) : this.load()), "function" == typeof this._create && this._create(), window.addEventListener("onresize", function() {
                    e.resize()
                }), this.resize())
            },
            resize: function() {
                this.stageRect = this.stage.getBoundingClientRect()
            },
            startAutoplay: function() {
                if (this.autoplay) {
                    this.stopAutoplay();
                    var e = this;
                    this.autoplayTimer = setTimeout(function() {
                        e.next()
                    }, this.autoplay)
                }
            },
            stopAutoplay: function(e) {
                this.autoplayTimer && (clearTimeout(this.autoplayTimer), this.autoplayTimer = !1), e && (this.autoplay = !1)
            },
            setLoading: function(e) {
                this.loading != e && (e ? i.addClass(this.element, "loading") : i.removeClass(this.element, "loading"), this.loading = e)
            },
            load: function(e) {
                if (this.loading) return !1;
                if (this.loaded) return i.cb(e);
                var t = this;
                return this.loadInSequence ? this.loadItem(0, e) : this.item.forEach(function(n, i) {
                    t.loadItem(i, e)
                }), !0
            },
            loadItem: function(e, t) {
                var n = this.item[e],
                    o = this,
                    r = document.getElementById("LZ");
                r || ((r = i.create("LZ", document.body)).id = "LZ"), n.loading = !0, n.img = i.create(!1, r, "IMG"), i.bindEvent(n.img, "load", function(n) {
                    o.itemLoaded(n, e, t)
                }), i.bindEvent(n.img, "error", function(n) {
                    o.itemLoaded(n, e, t)
                }), n.img.src = n.src
            },
            itemLoaded: function(e, t, n) {
                var o = this.item[t];
                switch (e.type) {
                    case "load":
                        o.width = o.img.width || 0, o.height = o.img.height || 0, this.setupItem(o);
                        break;
                    case "error":
                        o.error = !0
                }
                this.loadedItems++, o.loading = !0, o.loaded = !0, this.loadOnDemand ? (this.setLoading(!1), i.cb(o)) : this.loadedItems >= this.item.length ? this.everythigLoaded(n) : t < this.item.length - 1 && this.loadInSequence && this.loadItem(t + 1, n)
            },
            setupItem: function(e) {
                switch (this.itemSetupMode) {
                    case "background.image":
                        var t = document.createElement("DIV");
                        t.className = "image", t.style.backgroundImage = "url(" + e.src + ")", e.obj.appendChild(t), e.image = t;
                        break;
                    case "background":
                    default:
                        e.obj.style.backgroundImage = "url(" + e.src + ")"
                }
            },
            everythigLoaded: function(e) {
                this.loading = !1, this.loaded = !0, this.setLoading(!1), this.switching = !1, this.loaded = !0, this.removeItemsWithErrors(), this.prepareSlider(), this.startAutoplay(), i.cb(e)
            },
            prepareSlider: function() {
                var e = this.item[this.pos];
                i.addClass(e.obj, "active"), e.active = !0, this.setupEvents()
            },
            setupEvents: function() {
                var e = this;
                this.arrl && i.bindEvent(this.arrl, "click", function(t) {
                    e.userInteracted(), e.prev(), "function" == typeof e.onClick && e.onClick(e)
                }), this.arrr && i.bindEvent(this.arrr, "click", function(t) {
                    e.userInteracted(), e.next(), "function" == typeof e.onClick && e.onClick(e)
                }), this.stage && this.clickableStage && this.item.length > 1 && i.bindEvent(this.stage, "click", function(t) {
                    e.userInteracted();
                    var n = e.stage.getBoundingClientRect();
                    t.pageX > n.left + n.width / 2 ? e.next() : e.prev(), "function" == typeof e.onClick && e.onClick(e)
                })
            },
            startTimer: function() {},
            stopTimer: function() {},
            userInteracted: function() {
                this.isUserInteracted = !0, this.stopAutoplay(!0), this.stopTimer()
            },
            removeItemsWithErrors: function() {
                for (var e = [], t = 0, n = 0, i = 0; i < this.item.length; i++) this.item[i].error ? (this.stage.removeChild(this.item[i].obj), t++) : (this.item[i].id = n++, e.push(this.item[i]));
                t && (this.item = e)
            },
            prev: function(e, t) {
                var n = this.pos - 1;
                n < 0 && (n = this.item.length - 1), this.switchSlide(n, !1, e, t)
            },
            next: function(e, t) {
                var n = this.pos + 1;
                n >= this.item.length && (n = 0), this.switchSlide(n, !0, e, t)
            },
            switchSlide: function(e, t, n, o, r, s) {
                if (this.loading || !r && (this.pos == e || this.switching)) return !1;
                void 0 === o && (o = !1), void 0 === t && (t = e > this.pos), this.switching = !0;
                var a = this,
                    l = this.item[this.pos],
                    c = this.item[e],
                    u = t ? "Next" : "Prev",
                    h = i.animationEndEventName(),
                    d = i.transitionEndEventName(),
                    f = 0,
                    p = function() {
                        o || (i.removeClasses(l.obj, ["navOut" + u, "flyOut" + u]), i.removeClasses(c.obj, ["navIn" + u, "flyIn" + u, "fly" + u])), i.removeClass(l.obj, "active"), i.addClass(c.obj, "active"), l.active = !1, c.active = !0, a.pos = e, a.pos_view && (a.pos_view.innerHTML = e + 1 + " из " + a.item.length), a.switching = !1, a.startAutoplay(), "function" == typeof a.onSwitch && a.onSwitch(a, s)
                    },
                    m = function(e) {
                        this.removeEventListener(d, m, !1), ++f >= 2 && p()
                    },
                    g = function(e) {
                        this.removeEventListener(h, g, !1), ++f >= 2 && p()
                    };
                return this.loadOnDemand && !c.loaded ? (this.loadItem(c.id, function() {
                    a.switchSlide(e, t, n, o, !0)
                }), !0) : (void 0 !== this.dots && "function" == typeof this.dots.activate && this.dots.activate(e), !o && h ? (l.obj.addEventListener(h, g, !1), c.obj.addEventListener(h, g, !1), i.addClass(l.obj, "navOut" + u), i.addClass(c.obj, "navIn" + u)) : !o && d ? (l.obj.addEventListener(d, m, !1), c.obj.addEventListener(d, m, !1), i.addClass(c.obj, "fly" + u), setTimeout(function() {
                    i.addClass(l.obj, "flyOut" + u), i.addClass(c.obj, "flyIn" + u)
                }, 10)) : (o = !0, p()), !0)
            }
        })
    }, {
        "./MinimalClass": 11,
        "./index.js": 16,
        jquery: 52
    }],
    14: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("@vimeo/player"),
            r = e("./Loader"),
            s = e("./MinimalClass");
        t.exports = s.extend({
            __className: "VimeoPlayer",
            _players: [],
            _pause_other_players: function() {
                var e = this;
                this._players.forEach(function(t, n) {
                    t != e && t.pause()
                })
            },
            pre: function(e) {
                this.id = 0, this.player_options = {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    loop: !1
                }, this.onOpen = !1, this.onClose = !1, this.onPlay = !1, this.onEnded = !1, this.onReady = !1, this.onLoaded = !1, this.width = 0, this.height = 0, this.video_width = 0, this.video_height = 0, this.resizeMode = "fs", this.ready = !1, this.playing = !1, this.opened = !1, this.is_loaded = !1, this.autoplay = !0, this.autoopen = !1, this.css_class = !1, this.closeBtn = !1
            },
            create: function() {
                var e = this;
                this._players.push(this), this.element ? (this.closeBtn = this.find(".js-close"), this.closeBtn.length || (this.closeBtn = !1), this.id || (this.id = this.element.attr("vimeo-id") || 0)) : (this.element = i("<div>").addClass("vimeo-player"), this.id && this.element.appendTo(document.body), this.closeBtn = i("<div>").addClass("arr close js-close"), this.closeBtn.append('<svg class="circle"><use xlink:href="#circle"></use></svg>'), this.closeBtn.append('<svg class="icon"><use xlink:href="#close"></use></svg>'), this.closeBtn.appendTo(this.element), this.loader = new r({
                    _target: this.element,
                    _css: "white",
                    _big: void 0 !== this.loader_text,
                    _text: this.loader_text
                })), this.id ? (this.player_options.id = this.id, this.closeBtn && this.closeBtn.click(function(t) {
                    e.close(t)
                }), this.player_box = i("<div>").addClass("player-box").appendTo(this.element), this.css_class && this.element.addClass(this.css_class), this.auto_create_player && this.create_player(), this._create(), window.app.add_resize(this), this.scalable_circle_css_class) : this.log("Unable to create vimeo player: no id")
            },
            create_player: function() {
                var e = this;
                this.player = new o(this.player_box[0], this.player_options), this.player.setLoop(!1), this.player.on("loaded", function() {
                    e.player.getVideoWidth().then(function(t) {
                        e.video_width = t, e.resize()
                    }).catch(function(e) {}), e.player.getVideoHeight().then(function(t) {
                        e.video_height = t, e.resize()
                    }).catch(function(e) {}), e.is_loaded = !0, e.loaded()
                }), this.player.on("play", function() {
                    e.playing = !0, "function" == typeof e.onPlay && e.onPlay(this)
                }), this.player.on("pause", function() {
                    e.playing = !1, "function" == typeof e.onPause && e.onPause(this)
                }), this.player.on("ended", function() {
                    e.playing = !1, "function" == typeof e.onEnded && e.onEnded(this)
                }), this.element.bind("click", function(t) {
                    t.target == this && e.close()
                })
            },
            _create: function() {},
            resize: function() {
                var e = this.element.width(),
                    t = this.element.height();
                switch (this.resizeMode) {
                    case "fs":
                        this.width = e, this.height = t;
                        break;
                    default:
                        if (!this.video_width || !this.video_height) return !1;
                        this.width = Math.round(.8 * e), this.height = Math.round(this.width / this.video_width * this.video_height), this.height > .8 * t && (this.height = Math.round(.8 * t), this.width = Math.round(this.height / this.video_height * this.video_width))
                }
                this.player_box.find("iframe").css({
                    width: 960,
                    height: 540
                }), this.ready || (this.ready = !0, this.element.trigger("ready", [this]), "function" == typeof self.onReady && self.onReady(this))
            },
            loaded: function() {
                this.resize(), this.autoopen ? this.open() : this.autoplay && this.opened && (this.play(), this.element.addClass("show")), "function" == typeof this.onLoaded && this.onLoaded(this)
            },
            play: function() {
                if (this._pause_other_players(), this.loader.hide(), !this.player) return this.create_player();
                this.playing || this.player.play()
            },
            pause: function() {
                this.playing && this.player.pause()
            },
            open: function(e) {
                this.element.addClass("open show"), this.opened = !0, this.openingComplete(e)
            },
            openingComplete: function(e) {
                this.autoplay && this.play(), "function" == typeof this.onOpen && this.onOpen(this, e)
            },
            close: function(e) {
                this.element.removeClass("show open"), this.opened = !1, this.pause(), this.closingComplete(e)
            },
            closingComplete: function(e) {
                "function" == typeof this.onClose && this.onClose(this, e)
            },
            remove: function() {
                var e = this,
                    t = [];
                this._players.forEach(function(n, i) {
                    n !== e && t.push(n)
                }), this._players = t, this.player.unload(), this.element.remove()
            }
        })
    }, {
        "./Loader": 10,
        "./MinimalClass": 11,
        "@vimeo/player": 48,
        jquery: 52
    }],
    15: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("./VimeoPlayer");
        t.exports = i.extend({
            __className: "VimeoPlayerPopper"
        })
    }, {
        "./VimeoPlayer": 14,
        jquery: 52
    }],
    16: [function(e, t, n) {
        "use strict";
        Array.prototype.slice
    }, {}],
    17: [function(e, t, n) {}],
    18: [function(e, t, n) {}],
    19: [function(e, t, n) {}],
    20: [function(e, t, n) {}],
    21: [function(e, t, n) {}],
    22: [function(e, t, n) {}],
    23: [function(e, t, n) {}],
    24: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("../lib/MinimalClass");
        e("../lib/VimeoPlayerPopper");
        t.exports = i.extend({
            __className: "CardsCard",
            create: function() {
                var e = this;
                this.arrow_direction = !0, this.active = !1, this.opened = !1, this.is_previous = !1, this.setpos_animated_callback = null, this.vimeo_id = this.element.attr("vimeo-id") || !1, this.player = null, this.video = this.element.find("video"), this.visual = this.element.find(".js-visual"), this.content = this.element.find(".js-content"), this.content_box = this.element.find(".js-content-box"), this.arrow = this.element.find(".js-arrow"), this.visual.bind("click", function(t) {
                    e.delegate && "function" == typeof e.delegate.enableTimer && e.delegate.enableTimer(!1), e.mouse_visual(t)
                }), this.vimeo_id && this.visual.addClass("with-video"), this.element.bind(this.transitionEndEventName(), function(t) {
                    if (t.target === this) switch (t.originalEvent.propertyName) {
                        case "transform":
                            e.setpos_complete(t)
                    }
                }), this.content_box.bind(this.transitionEndEventName(), function(t) {
                    if (t.target === this) switch (t.originalEvent.propertyName) {
                        case "transform":
                            e.opened || e.element.removeClass("expand")
                    }
                })
            },
            load_vimeo_player: function(e) {
                $("#modal_video").modal("show");
                var t = "https://www.youtube.com/embed/" + this.vimeo_id + "?autoplay=1;enablejsapi=1";
                console.log(t), $(".modal_video .modal-body iframe").attr("src", t)
            },
            mouse_visual: function(e) {
                switch (e.type) {
                    case "click":
                        if (this.delegate && this.delegate.busy) return;
                        this.active ? this.load_vimeo_player(!0) : this.delegate && "function" == typeof this.delegate.switch_card && this.delegate.switch_card(this.id, null, !0)
                }
            },
            setpos: function(e, t, n) {
                t && this.element.addClass("animated1"), this.element.css({
                    transform: "translateX(" + e + "px)"
                }), this.setpos_animated_callback = null, "function" == typeof n && (t ? this.setpos_animated_callback = n : n(this))
            },
            setpos_complete: function() {
                this.element.removeClass("animated1"), "function" == typeof this.setpos_animated_callback && this.setpos_animated_callback(this)
            },
            set_previous: function(e) {
                this.is_previous = e, e ? this.element.addClass("right") : this.element.removeClass("right")
            },
            resize: function(e, t) {
                var n = {
                    width: e,
                    height: t
                };
                this.element.css(n), this.visual.css(n), this.content.css(n)
            },
            open: function() {
                this.opened || (this.element.addClass("expand open"), this.opened = !0)
            },
            close: function() {
                this.opened && (this.element.removeClass("open"), this.opened = !1)
            },
            activate: function(e, t, n) {
                this.element.addClass("active"), this.active = !0, this.setpos(e, t, n), this.video.length && this.video[0].play(), this.open()
            },
            deactivate: function() {
                this.element.removeClass("active"), this.video.length && this.video[0].pause(), this.active = !1
            }
        })
    }, {
        "../lib/MinimalClass": 11,
        "../lib/VimeoPlayerPopper": 15,
        jquery: 52
    }],
    25: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("../lib/MinimalClass"),
            r = e("./Dots"),
            s = e("./CardsCard"),
            a = e("./PxLine");
        t.exports = o.extend({
            __className: "CardsSlider",
            create: function() {
                var e = this;
                this.busy = !1, this.isUserInteracted = !1, this.autotimer_active = !1, this.user_interaction_timeout_timer = !1, this.current_item_locked = !1, this.cards_type = this.element.attr("data-cards-type"), this.cards = [], this.cards_order = [], this.cards_order_prev = [], this.cards_order_next = [], this.dots = !1, this.autotimer_active = !1, this.user_interaction_timeout_timer = !1, this.scrolled_into_viewport = !0, this.pos = -1, this.width = 0, this.height = 0, this.initial_position_x = 0, this.active_position_x = 0, this.centered = !1, this.carouseled = !1, this.card_min_width = 360, this.card_max_width = 480, this.min_screen_width = 1024, this.max_screen_width = 1920;
                var t = this.element.find(".js-px-line");
                t.length && new a({
                    element: t,
                    _prc_source: this.element
                }), this.cards_element = this.element.find(".js-cards"), this.cards_element.length && (this.scrolled_into_viewport = !this.element.hasClass("js-should-scroll-into-viewport"), this.cards_element.find(".js-card").each(function(t, n) {
                    e.cards.push(new s({
                        _id: t,
                        element: n,
                        delegate: e
                    }))
                }), this.dots_element = this.element.find(".js-dots"), this.dots_element.length && (this.dots = new r({
                    element: this.dots_element,
                    delegate: e,
                    _onChange: function(t, n, i) {
                        e.switch_card(t, n, i)
                    }
                })), this.back2first = this.cards_element.find(".js-back2first"), this.back2first.length && this.back2first.click(function(t) {
                    e.userInteracted(), e.switch_card(e.dots.with_zero ? -1 : 0)
                })), window.app.add_resize(this), window.app.add_scroll(this)
            },
            next: function() {
                var e = this.pos + 1;
                e >= this.cards.length && (e = 0), this.switch_card(e, !0)
            },
            prev: function() {
                var e = this.pos - 1;
                e < 0 && (e = this.cards.length - 1), this.switch_card(e, !1)
            },
            switch_card: function(e, t, n, i) {
                return n && this.userInteracted(), !this.busy && this.pos != e && (void 0 === i && (i = !0), void 0 === t && (t = 0), e >= 0 ? this.element.find(".js-hide-text").addClass("hide") : this.element.find(".js-hide-text").removeClass("hide"), this.pos >= 0 && this.cards[this.pos].close(), this.dots.activate(e), this.repos(e, i), !0)
            },
            enableTimer: function(e) {
                this.dots && "function" == typeof this.dots.enableTimer && this.dots.enableTimer(e)
            },
            userInteracted: function() {
                if (!this.current_item_locked) {
                    this.isUserInteracted = !0, this.stopTimer();
                    var e = this;
                    this.clearUserInteractionTimeout(), this.user_interaction_timeout_timer = setTimeout(function() {
                        e.isUserInteracted = !1, e.startTimer()
                    }, 5e3)
                }
            },
            clearUserInteractionTimeout: function() {
                this.user_interaction_timeout_timer && (clearTimeout(this.user_interaction_timeout_timer), this.user_interaction_timeout_timer = null)
            },
            scroll: function(e, t) {
                if (!this.scrolled_into_viewport) {
                    var n = this.cards_element[0].getBoundingClientRect();
                    window.app.wh - (n.top + n.height) > 0 && (this.element.addClass("scrolled_into_viewport"), this.scrolled_into_viewport = !0)
                }
                if (!this.current_item_locked) {
                    var i = this.calc_element_scroll_prc(this.element[0]);
                    i >= .4 && i <= .9 ? this.isUserInteracted || this.startTimer() : (this.clearUserInteractionTimeout(), this.isUserInteracted = !1, this.pauseTimer())
                }
            },
            startTimer: function() {
                this.autotimer_active || (this.enableTimer(!0), this.autotimer_active = !0)
            },
            pauseTimer: function() {
                this.autotimer_active && (this.enableTimer(!1), this.autotimer_active = !1)
            },
            stopTimer: function() {
                this.enableTimer(!1), this.autotimer_active = !1
            },
            lock_current_item: function(e) {
                e ? (this.current_item_locked = !0, this.stopTimer(), this.clearUserInteractionTimeout()) : (this.current_item_locked = !1, this.userInteracted())
            },
            recalc: function() {
                var e = i(window).width(),
                    t = this.cards_element.height(),
                    n = Math.round(e / 12 * 2),
                    o = Math.round(e * (e <= this.max_screen_width ? .1 : .05)),
                    r = this.card_max_width - this.card_min_width,
                    s = Math.min(1, (e - this.min_screen_width) / (this.max_screen_width - this.min_screen_width)),
                    a = Math.max(this.card_min_width, Math.min(this.card_max_width, Math.round(this.card_min_width + r * s))),
                    l = Math.round(e - .66 * a),
                    c = (this.cards.length + 1) * (a + o),
                    u = e >= c,
                    h = !u && e < c - (a + o + (a - (l - o)));
                this.card_width = a, this.card_padding = o, this.initial_position_x = l, this.active_position_x = n, this.carouseled != h && this.reorder(this.pos), this.centered = u, this.carouseled = h, this.width = e, this.height = t
            },
            resize: function(e, t) {
                this.recalc(), this.cards_element.css({
                    width: this.width
                });
                var n = this;
                i(this.cards).each(function(e, t) {
                    t.resize(n.card_width, n.height)
                }), this.repos(this.pos, !1), this.inited || (this.inited = !0, this.dots.with_zero || this.switch_card(0, null, null, !1))
            },
            reorder: function(e) {
                var t;
                for (this.cards_order = [], this.cards_order_prev = [], this.cards_order_next = [], t = 0; t < this.cards.length; t++) e > t ? this.cards_order_prev.push(t) : e < t && this.cards_order_next.push(t);
                for (this.cards_order_prev.reverse(), this.carouseled, t = 0; t < this.cards_order_prev.length; t++) this.cards_order.push(this.cards_order_prev[t]);
                for (e >= 0 && this.cards_order.push(e), t = 0; t < this.cards_order_next.length; t++) this.cards_order.push(this.cards_order_next[t])
            },
            repos: function(e, t) {
                var n = this,
                    o = 0,
                    r = this.card_width + this.card_padding;
                if (e < 0 && !t) o = this.initial_position_x, i(this.cards).each(function(e, t) {
                    t.setpos(o), o += r
                }), this.pos = e;
                else {
                    if (this.reorder(e), e >= this.cards.length - 1 ? this.back2first.css({
                            display: "block"
                        }) : this.back2first.css({
                            display: "none"
                        }), this.busy) return;
                    this.busy = !0;
                    var s, a, l, c = t ? function(t) {
                        n.pos = e, n.busy = !1
                    } : null;
                    for (o = this.active_position_x - r, s = 0; s < this.cards_order_prev.length; s++) l = this.cards_order_prev[s], (a = this.cards[l]).set_previous(!0), a.deactivate(), a.setpos(o, t), o -= r;
                    for (e >= 0 ? this.cards[e].activate(this.active_position_x, t, c) : setTimeout(c, 1e3), o = this.active_position_x + r + this.card_width, s = 0; s < this.cards_order_next.length; s++) l = this.cards_order_next[s], (a = this.cards[l]).set_previous(!1), a.deactivate(), a.setpos(o, t), o += r;
                    t || (n.pos = e, n.busy = !1)
                }
            }
        })
    }, {
        "../lib/MinimalClass": 11,
        "./CardsCard": 24,
        "./Dots": 27,
        "./PxLine": 38,
        jquery: 52
    }],
    26: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("../lib/MinimalClass");
        t.exports = i.extend({
            __className: "CircleTimer",
            pre: function() {
                this.autorestart = !1, this.mode = "jquery"
            },
            create: function() {
                var e = this;
                this.tmr = !1, this.timer = this.element.find(".js-circle-timer"), this.time || (this.time = parseInt(this.timer.attr("data-time")) || 5), "css" == this.mode && this.timer.bind(this.transitionEndEventName(), function(t) {
                    if (t.target === this) switch (t.originalEvent.propertyName) {
                        case "stroke-dashoffset":
                            e.complete(t)
                    }
                })
            },
            start: function() {
                switch (this.mode) {
                    case "jquery":
                        var e = this;
                        this.timer.css({
                            strokeDashoffset: 190
                        }).animate({
                            strokeDashoffset: 0
                        }, 1e3 * this.time, "linear", function() {
                            e.complete()
                        });
                        break;
                    case "css":
                        this.timer.addClass("timer" + this.time)
                }
            },
            stop: function() {
                switch (this.tmr && (clearTimeout(this.tmr), this.tmr = null), this.mode) {
                    case "jquery":
                        this.timer.stop().css({
                            strokeDashoffset: 190
                        });
                        break;
                    case "css":
                        this.timer.removeClass("timer" + this.time)
                }
            },
            complete: function(e) {
                if (this.stop(), "function" == typeof this.onComplete && this.onComplete(this), this.autorestart) {
                    var t = this;
                    this.tmr = setTimeout(function() {
                        t.start()
                    }, 10)
                }
            }
        })
    }, {
        "../lib/MinimalClass": 11,
        jquery: 52
    }],
    27: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("../lib/MinimalClass"),
            r = e("./CircleTimer");
        t.exports = o.extend({
            __className: "Dots",
            create: function() {
                var e = this;
                this.dots = [], this.timer_dot = !1, this.timers_enabled = !1, this.active = -1, this.with_zero = !1, this.element.find(".dot").each(function(t, n) {
                    var o = i(n),
                        s = (o.find(".js-circle-timer"), {
                            id: t,
                            obj: o,
                            timer: new r({
                                element: o,
                                _time: 10,
                                _autorestart: !1,
                                _onComplete: function(t) {
                                    e.next_item()
                                }
                            }),
                            active: o.hasClass("active"),
                            activate: function(e, t) {
                                this.active != e && (e ? (this.obj.addClass("active"), t && this.start_timer()) : (this.obj.removeClass("active"), this.cancel_timer()), this.active = e)
                            },
                            start_timer: function() {
                                this.timer && e.timers_enabled && this.timer.start()
                            },
                            cancel_timer: function() {
                                this.timer && this.timer.stop()
                            }
                        });
                    s.active && (e.active = s.id), s.obj.hasClass("zero") && (e.with_zero = !0), s.obj.bind("click", function(t) {
                        e.switch_item(s.id, null, !0)
                    }), e.dots.push(s)
                })
            },
            activate: function(e) {
                var t = e + (this.with_zero ? 1 : 0);
                this.active != t && (this.active >= 0 && this.dots[this.active].activate(!1), this.active = t, this.dots[this.active].activate(!0, this.timers_enabled))
            },
            enableTimer: function(e) {
                this.timers_enabled = e, e ? (this.active < 0 && (this.active = 0, this.dots[this.active].activate(!0)), this.dots[this.active].start_timer()) : this.active >= 0 && this.dots[this.active].cancel_timer()
            },
            next_item: function() {
                var e = this.active + 1;
                e >= this.dots.length && (e = 0), this.switch_item(e)
            },
            prev_item: function() {
                var e = this.active - 1;
                e < 0 && (e = this.dots.length - 1), this.switch_item(e)
            },
            switch_item: function(e, t, n) {
                var i = this.active >= 0 && this.dots[this.active],
                    o = this.dots[e];
                (t || !o || "function" != typeof this.onChange || this.onChange(o.id + (this.with_zero ? -1 : 0), null, n)) && (i && i.id == o.id || (i.activate(!1), o.activate(!0), this.active = o.id, this.timers_enabled && o.start_timer()))
            }
        })
    }, {
        "../lib/MinimalClass": 11,
        "./CircleTimer": 26,
        jquery: 52
    }],
    28: [function(e, t, n) {
        e("jquery");
        var i = e("../lib/MinimalClass");
        t.exports = i.extend({
            __className: "FloatingTitleBox"
        });
        i.extend({
            __className: "FloatingTitle",
            create: function() {
                this.px = 0, this.top = this.element.find(".js-top"), this.top_span = this.top.find("span"), this.bottom = this.element.find(".js-bottom"), this.bottom_span = !!this.bottom.length && this.bottom.find("span"), this.setpx(this.px)
            },
            resize: function() {
                this.height = this.element.outerHeight(!0), this.setpx(this.px)
            },
            setpx: function(e) {
                if (!this.bottom_span) return !1;
                this.px = Math.min(e, this.height);
                var t = this.height - this.px;
                this.bottom.css({
                    top: t,
                    height: this.px
                }), this.bottom_span.css({
                    transform: "translateY(-" + t + "px)"
                })
            },
            setoffset: function(e) {
                this.element.css({
                    transform: "translateY(-" + e + "px)"
                })
            }
        })
    }, {
        "../lib/MinimalClass": 11,
        jquery: 52
    }],
    29: [function(e, t, n) {}],
    30: [function(e, t, n) {}],
    31: [function(e, t, n) {}],
    32: [function(e, t, n) {}],
    33: [function(e, t, n) {}],
    34: [function(e, t, n) {}],
    35: [function(e, t, n) {}],
    36: [function(e, t, n) {}],
    37: [function(e, t, n) {}],
    38: [function(e, t, n) {}],
    39: [function(e, t, n) {}],
    40: [function(e, t, n) {}],
    41: [function(e, t, n) {}],
    42: [function(e, t, n) {}],
    43: [function(e, t, n) {}],
    44: [function(e, t, n) {}],
    45: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = e("class.extend");
        t.exports = o.extend({
            init: function() {
                this.lz = !1, window.weborama = this
            },
            add: function(e) {
                this.lz || (this.lz = i("#LZ"), this.lz.length || (this.lz = i("<div></div>", {
                    id: "LZ"
                }).addClass("LZ").appendTo(i(document.body)))), this.lz.append('<img src="https://barkliru.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=4745&a.cp=' + e + '&a.ct=d">')
            }
        })
    }, {
        "class.extend": 50,
        jquery: 52
    }],
    46: [function(e, t, n) {
        "use strict";
        var i = e("jquery"),
            o = (e("../lib/index.js"), e("../lib/App")),
            r = (e("./RequestForm"), e("./CardsSlider"));
        window.parallax_enabled = !1, window.parallax_enabled && i(document.body).addClass("with-animation"), new o, i(".js-cards-slider").each(function(e, t) {
            new r({
                element: t
            })
        })
    }, {
        "../lib/App": 1,
        "../lib/Loader": 10,
        "../lib/VimeoPlayer": 14,
        "../lib/index.js": 16,
        "./BarkliMap": 19,
        "./BarkliSlider": 21,
        "./BarkliSliderHouse": 22,
        "./Building": 23,
        "./CardsSlider": 25,
        "./FloatingTitleBox": 28,
        "./IndexScreen": 30,
        "./Interiors": 31,
        "./Office": 34,
        "./RequestForm": 39,
        "./SideJoker": 41,
        "./TTKGallery": 43,
        jquery: 52
    }],
    47: [function(e, t, n) {}, {}],
    48: [function(e, t, n) {}, {}],
    49: [function(e, t, n) {}, {}],
    50: [function(e, t, n) {
        ! function() {
            var e = !1,
                n = /xyz/.test(function() {
                    xyz
                }) ? /\b_super\b/ : /.*/;
            this.Class = function() {}, Class.extend = function(t, i) {
                null == i && (i = t, t = "Class");
                var o = this.prototype;
                e = !0;
                var r = new this;
                for (var s in e = !1, i) r[s] = "function" == typeof i[s] && "function" == typeof o[s] && n.test(i[s]) ? function(e, t) {
                    return function() {
                        var n = this._super;
                        this._super = o[e];
                        var i = t.apply(this, arguments);
                        return this._super = n, i
                    }
                }(s, i[s]) : i[s];

                function a() {
                    !e && this.init && this.init.apply(this, arguments)
                }
                a.prototype = r;
                var l = new Function("return function " + t + "(){ }")();
                return a.prototype.constructor = l, a.extend = arguments.callee, a
            }, t.exports = Class
        }()
    }, {}],
    51: [function(e, t, n) {}, {}],
    52: [function(e, t, n) {
        ! function(e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";
            var n = [],
                i = e.document,
                o = Object.getPrototypeOf,
                r = n.slice,
                s = n.concat,
                a = n.push,
                l = n.indexOf,
                c = {},
                u = c.toString,
                h = c.hasOwnProperty,
                d = h.toString,
                f = d.call(Object),
                p = {},
                g = function(e, t) {
                    return new g.fn.init(e, t)
                },
                v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                y = /^-ms-/,
                b = /-([a-z])/g,
                w = function(e, t) {
                    return t.toUpperCase()
                };

            function x(e) {
                var t = !!e && "length" in e && e.length,
                    n = g.type(e);
                return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            g.fn = g.prototype = {
                jquery: "3.2.1",
                constructor: g,
                length: 0,
                toArray: function() {
                    return r.call(this)
                },
                get: function(e) {
                    return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = g.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return g.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(g.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(r.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: n.sort,
                splice: n.splice
            }, g.extend = g.fn.extend = function() {
                var e, t, n, i, o, r, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (g.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && g.isPlainObject(n) ? n : {}, s[t] = g.extend(c, r, i)) : void 0 !== i && (s[t] = i));
                return s
            }, g.extend({
                expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === g.type(e)
                },
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = g.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || d.call(n) !== f))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    m(e)
                },
                camelCase: function(e) {
                    return e.replace(y, "ms-").replace(b, w)
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (x(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(v, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (x(Object(e)) ? g.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var i, o, r = 0,
                        a = [];
                    if (x(e))
                        for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
                    else
                        for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
                    return s.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), g.isFunction(e)) return i = r.call(arguments, 2), (o = function() {
                        return e.apply(t || this, i.concat(r.call(arguments)))
                    }).guid = e.guid = e.guid || g.guid++, o
                },
                now: Date.now,
                support: p
            }), "function" == typeof Symbol && (g.fn[Symbol.iterator] = n[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
            var _ = function(e) {
                var t, n, i, o, r, s, a, l, c, u, h, d, f, p, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    _ = 0,
                    C = 0,
                    T = se(),
                    k = se(),
                    E = se(),
                    j = function(e, t) {
                        return e === t && (h = !0), 0
                    },
                    S = {}.hasOwnProperty,
                    q = [],
                    D = q.pop,
                    N = q.push,
                    A = q.push,
                    L = q.slice,
                    F = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    I = "[\\x20\\t\\r\\n\\f]",
                    P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    O = "\\[" + I + "*(" + P + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + I + "*\\]",
                    z = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                    B = new RegExp(I + "+", "g"),
                    H = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                    R = new RegExp("^" + I + "*," + I + "*"),
                    W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                    X = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
                    $ = new RegExp(z),
                    Y = new RegExp("^" + P + "$"),
                    V = {
                        ID: new RegExp("^#(" + P + ")"),
                        CLASS: new RegExp("^\\.(" + P + ")"),
                        TAG: new RegExp("^(" + P + "|[*])"),
                        ATTR: new RegExp("^" + O),
                        PSEUDO: new RegExp("^" + z),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                    },
                    U = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Q = /[+~]/,
                    K = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                    ee = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        d()
                    },
                    oe = ye(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    A.apply(q = L.call(x.childNodes), x.childNodes), q[x.childNodes.length].nodeType
                } catch (e) {
                    A = {
                        apply: q.length ? function(e, t) {
                            N.apply(e, L.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function re(e, t, i, o) {
                    var r, a, c, u, h, p, v, y = t && t.ownerDocument,
                        _ = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return i;
                    if (!o && ((t ? t.ownerDocument || t : x) !== f && d(t), t = t || f, m)) {
                        if (11 !== _ && (h = J.exec(e)))
                            if (r = h[1]) {
                                if (9 === _) {
                                    if (!(c = t.getElementById(r))) return i;
                                    if (c.id === r) return i.push(c), i
                                } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                            } else {
                                if (h[2]) return A.apply(i, t.getElementsByTagName(e)), i;
                                if ((r = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return A.apply(i, t.getElementsByClassName(r)), i
                            }
                        if (n.qsa && !E[e + " "] && (!g || !g.test(e))) {
                            if (1 !== _) y = t, v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + ve(p[a]);
                                v = p.join(","), y = Q.test(e) && me(t.parentNode) || t
                            }
                            if (v) try {
                                return A.apply(i, y.querySelectorAll(v)), i
                            } catch (e) {} finally {
                                u === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(H, "$1"), t, i, o)
                }

                function se() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function ae(e) {
                    return e[w] = !0, e
                }

                function le(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ce(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
                }

                function ue(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function he(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function de(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function fe(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function pe(e) {
                    return ae(function(t) {
                        return t = +t, ae(function(n, i) {
                            for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = re.support = {}, r = re.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, d = re.setDocument = function(e) {
                        var t, o, s = e ? e.ownerDocument || e : x;
                        return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, m = !r(f), x !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = le(function(e) {
                            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = le(function(e) {
                            return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                        }), n.getById ? (i.filter.ID = function(e) {
                            var t = e.replace(K, ee);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function(e) {
                            var t = e.replace(K, ee);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, i, o, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                    for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, v = [], g = [], (n.qsa = Z.test(f.querySelectorAll)) && (le(function(e) {
                            p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                        }), le(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", z)
                        }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, j = t ? function(e, t) {
                            if (e === t) return h = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === x && b(x, e) ? -1 : t === f || t.ownerDocument === x && b(x, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return h = !0, 0;
                            var n, i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? F(u, e) - F(u, t) : 0;
                            if (o === r) return ue(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? ue(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0
                        }, f) : f
                    }, re.matches = function(e, t) {
                        return re(e, null, null, t)
                    }, re.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== f && d(e), t = t.replace(X, "='$1']"), n.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {}
                        return re(t, f, null, [e]).length > 0
                    }, re.contains = function(e, t) {
                        return (e.ownerDocument || e) !== f && d(e), b(e, t)
                    }, re.attr = function(e, t) {
                        (e.ownerDocument || e) !== f && d(e);
                        var o = i.attrHandle[t.toLowerCase()],
                            r = o && S.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                        return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }, re.escape = function(e) {
                        return (e + "").replace(te, ne)
                    }, re.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, re.uniqueSort = function(e) {
                        var t, i = [],
                            o = 0,
                            r = 0;
                        if (h = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(j), h) {
                            for (; t = e[r++];) t === e[r] && (o = i.push(r));
                            for (; o--;) e.splice(i[o], 1)
                        }
                        return u = null, e
                    }, o = re.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += o(t);
                        return n
                    }, (i = re.selectors = {
                        cacheLength: 50,
                        createPseudo: ae,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(K, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(K, ee).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = T[e + " "];
                                return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var o = re.attr(i, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, o) {
                                var r = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === i && 0 === o ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var c, u, h, d, f, p, m = r !== s ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = a && t.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        b = !1;
                                    if (g) {
                                        if (r) {
                                            for (; m;) {
                                                for (d = t; d = d[m];)
                                                    if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                p = m = "only" === e && !p && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                            for (b = (f = (c = (u = (h = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop();)
                                                if (1 === d.nodeType && ++b && d === t) {
                                                    u[e] = [_, f, b];
                                                    break
                                                }
                                        } else if (y && (b = f = (c = (u = (h = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b)
                                            for (;
                                                (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [_, b]), d !== t)););
                                        return (b -= o) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                                return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                    for (var i, r = o(e, t), s = r.length; s--;) e[i = F(e, r[s])] = !(n[i] = r[s])
                                }) : function(e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: ae(function(e) {
                                var t = [],
                                    n = [],
                                    i = a(e.replace(H, "$1"));
                                return i[w] ? ae(function(e, t, n, o) {
                                    for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                                }) : function(e, o, r) {
                                    return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: ae(function(e) {
                                return function(t) {
                                    return re(e, t).length > 0
                                }
                            }),
                            contains: ae(function(e) {
                                return e = e.replace(K, ee),
                                    function(t) {
                                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: ae(function(e) {
                                return Y.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(K, ee).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === p
                            },
                            focus: function(e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: fe(!1),
                            disabled: fe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return G.test(e.nodeName)
                            },
                            input: function(e) {
                                return U.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: pe(function() {
                                return [0]
                            }),
                            last: pe(function(e, t) {
                                return [t - 1]
                            }),
                            eq: pe(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: pe(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: pe(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: pe(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                                return e
                            }),
                            gt: pe(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[t] = he(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[t] = de(t);

                function ge() {}

                function ve(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function ye(e, t, n) {
                    var i = t.dir,
                        o = t.next,
                        r = o || i,
                        s = n && "parentNode" === r,
                        a = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || s) return e(t, n, o);
                        return !1
                    } : function(t, n, l) {
                        var c, u, h, d = [_, a];
                        if (l) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || s)
                                    if (u = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else {
                                        if ((c = u[r]) && c[0] === _ && c[1] === a) return d[2] = c[2];
                                        if (u[r] = d, d[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function be(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function we(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                    return s
                }

                function xe(e, t, n, i, o, r) {
                    return i && !i[w] && (i = xe(i)), o && !o[w] && (o = xe(o, r)), ae(function(r, s, a, l) {
                        var c, u, h, d = [],
                            f = [],
                            p = s.length,
                            m = r || function(e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []),
                            g = !e || !r && t ? m : we(m, d, e, a, l),
                            v = n ? o || (r ? e : p || i) ? [] : s : g;
                        if (n && n(g, v, a, l), i)
                            for (c = we(v, f), i(c, [], a, l), u = c.length; u--;)(h = c[u]) && (v[f[u]] = !(g[f[u]] = h));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = v.length; u--;)(h = v[u]) && c.push(g[u] = h);
                                    o(null, v = [], c, l)
                                }
                                for (u = v.length; u--;)(h = v[u]) && (c = o ? F(r, h) : d[u]) > -1 && (r[c] = !(s[c] = h))
                            }
                        } else v = we(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : A.apply(s, v)
                    })
                }

                function _e(e) {
                    for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                            return e === t
                        }, a, !0), h = ye(function(e) {
                            return F(t, e) > -1
                        }, a, !0), d = [function(e, n, i) {
                            var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                            return t = null, o
                        }]; l < r; l++)
                        if (n = i.relative[e[l].type]) d = [ye(be(d), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                                return xe(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(H, "$1"), n, l < o && _e(e.slice(l, o)), o < r && _e(e = e.slice(o)), o < r && ve(e))
                            }
                            d.push(n)
                        }
                    return be(d)
                }
                return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, s = re.tokenize = function(e, t) {
                    var n, o, r, s, a, l, c, u = k[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = i.preFilter; a;) {
                        for (s in n && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = W.exec(a)) && (n = o.shift(), r.push({
                                value: n,
                                type: o[0].replace(H, " ")
                            }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                            value: n,
                            type: s,
                            matches: o
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? re.error(e) : k(e, l).slice(0)
                }, a = re.compile = function(e, t) {
                    var n, o = [],
                        r = [],
                        a = E[e + " "];
                    if (!a) {
                        for (t || (t = s(e)), n = t.length; n--;)(a = _e(t[n]))[w] ? o.push(a) : r.push(a);
                        (a = E(e, function(e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                r = function(r, s, a, l, u) {
                                    var h, p, g, v = 0,
                                        y = "0",
                                        b = r && [],
                                        w = [],
                                        x = c,
                                        C = r || o && i.find.TAG("*", u),
                                        T = _ += null == x ? 1 : Math.random() || .1,
                                        k = C.length;
                                    for (u && (c = s === f || s || u); y !== k && null != (h = C[y]); y++) {
                                        if (o && h) {
                                            for (p = 0, s || h.ownerDocument === f || (d(h), a = !m); g = e[p++];)
                                                if (g(h, s || f, a)) {
                                                    l.push(h);
                                                    break
                                                }
                                            u && (_ = T)
                                        }
                                        n && ((h = !g && h) && v--, r && b.push(h))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (p = 0; g = t[p++];) g(b, w, s, a);
                                        if (r) {
                                            if (v > 0)
                                                for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                                            w = we(w)
                                        }
                                        A.apply(l, w), u && !r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                                    }
                                    return u && (_ = T, c = x), b
                                };
                            return n ? ae(r) : r
                        }(r, o))).selector = e
                    }
                    return a
                }, l = re.select = function(e, t, n, o) {
                    var r, l, c, u, h, d = "function" == typeof e && e,
                        f = !o && s(e = d.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(K, ee), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                            if ((h = i.find[u]) && (o = h(c.matches[0].replace(K, ee), Q.test(l[0].type) && me(t.parentNode) || t))) {
                                if (l.splice(r, 1), !(e = o.length && ve(l))) return A.apply(n, o), n;
                                break
                            }
                    }
                    return (d || a(e, f))(o, t, !m, n, !t || Q.test(e) && me(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(j).join("") === w, n.detectDuplicates = !!h, d(), n.sortDetached = le(function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                }), le(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ce("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && le(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ce("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ce(M, function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), re
            }(e);
            g.find = _, g.expr = _.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = _.uniqueSort, g.text = _.getText, g.isXMLDoc = _.isXML, g.contains = _.contains, g.escapeSelector = _.escape;
            var C = function(e, t, n) {
                    for (var i = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && g(e).is(n)) break;
                            i.push(e)
                        }
                    return i
                },
                T = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                k = g.expr.match.needsContext;

            function E(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                S = /^.[^:#\[\.,]*$/;

            function q(e, t, n) {
                return g.isFunction(t) ? g.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                }) : t.nodeType ? g.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? g.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n
                }) : S.test(t) ? g.filter(t, e, n) : (t = g.filter(t, e), g.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }
            g.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? g.find.matchesSelector(i, e) ? [i] : [] : g.find.matches(e, g.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, g.fn.extend({
                find: function(e) {
                    var t, n, i = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(g(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (g.contains(o[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < i; t++) g.find(e, o[t], n);
                    return i > 1 ? g.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(q(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(q(this, e || [], !0))
                },
                is: function(e) {
                    return !!q(this, "string" == typeof e && k.test(e) ? g(e) : e || [], !1).length
                }
            });
            var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (g.fn.init = function(e, t, n) {
                var o, r;
                if (!e) return this;
                if (n = n || D, "string" == typeof e) {
                    if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (o[1]) {
                        if (t = t instanceof g ? t[0] : t, g.merge(this, g.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), j.test(o[1]) && g.isPlainObject(t))
                            for (o in t) g.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                        return this
                    }
                    return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(g) : g.makeArray(e, this)
            }).prototype = g.fn, D = g(i);
            var A = /^(?:parents|prev(?:Until|All))/,
                L = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function F(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            g.fn.extend({
                has: function(e) {
                    var t = g(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (g.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, i = 0,
                        o = this.length,
                        r = [],
                        s = "string" != typeof e && g(e);
                    if (!k.test(e))
                        for (; i < o; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, e))) {
                                    r.push(n);
                                    break
                                }
                    return this.pushStack(r.length > 1 ? g.uniqueSort(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? l.call(g(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), g.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return C(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n)
                },
                next: function(e) {
                    return F(e, "nextSibling")
                },
                prev: function(e) {
                    return F(e, "previousSibling")
                },
                nextAll: function(e) {
                    return C(e, "nextSibling")
                },
                prevAll: function(e) {
                    return C(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return T(e.firstChild)
                },
                contents: function(e) {
                    return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), g.merge([], e.childNodes))
                }
            }, function(e, t) {
                g.fn[e] = function(n, i) {
                    var o = g.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = g.filter(i, o)), this.length > 1 && (L[e] || g.uniqueSort(o), A.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function I(e) {
                return e
            }

            function P(e) {
                throw e
            }

            function O(e, t, n, i) {
                var o;
                try {
                    e && g.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && g.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            g.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return g.each(e.match(M) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : g.extend({}, e);
                var t, n, i, o, r = [],
                    s = [],
                    a = -1,
                    l = function() {
                        for (o = o || e.once, i = t = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                        e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                    },
                    c = {
                        add: function() {
                            return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                                g.each(n, function(n, i) {
                                    g.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== g.type(i) && t(i)
                                })
                            }(arguments), n && !t && l()), this
                        },
                        remove: function() {
                            return g.each(arguments, function(e, t) {
                                for (var n;
                                    (n = g.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                            }), this
                        },
                        has: function(e) {
                            return e ? g.inArray(e, r) > -1 : r.length > 0
                        },
                        empty: function() {
                            return r && (r = []), this
                        },
                        disable: function() {
                            return o = s = [], r = n = "", this
                        },
                        disabled: function() {
                            return !r
                        },
                        lock: function() {
                            return o = s = [], n || t || (r = n = ""), this
                        },
                        locked: function() {
                            return !!o
                        },
                        fireWith: function(e, n) {
                            return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return c
            }, g.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", g.Callbacks("memory"), g.Callbacks("memory"), 2],
                            ["resolve", "done", g.Callbacks("once memory"), g.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", g.Callbacks("once memory"), g.Callbacks("once memory"), 1, "rejected"]
                        ],
                        i = "pending",
                        o = {
                            state: function() {
                                return i
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return o.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return g.Deferred(function(t) {
                                    g.each(n, function(n, i) {
                                        var o = g.isFunction(e[i[4]]) && e[i[4]];
                                        r[i[1]](function() {
                                            var e = o && o.apply(this, arguments);
                                            e && g.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, i, o) {
                                var r = 0;

                                function s(t, n, i, o) {
                                    return function() {
                                        var a = this,
                                            l = arguments,
                                            c = function() {
                                                var e, c;
                                                if (!(t < r)) {
                                                    if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then, g.isFunction(c) ? o ? c.call(e, s(r, n, I, o), s(r, n, P, o)) : (r++, c.call(e, s(r, n, I, o), s(r, n, P, o), s(r, n, I, n.notifyWith))) : (i !== I && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
                                                }
                                            },
                                            u = o ? c : function() {
                                                try {
                                                    c()
                                                } catch (e) {
                                                    g.Deferred.exceptionHook && g.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= r && (i !== P && (a = void 0, l = [e]), n.rejectWith(a, l))
                                                }
                                            };
                                        t ? u() : (g.Deferred.getStackHook && (u.stackTrace = g.Deferred.getStackHook()), e.setTimeout(u))
                                    }
                                }
                                return g.Deferred(function(e) {
                                    n[0][3].add(s(0, e, g.isFunction(o) ? o : I, e.notifyWith)), n[1][3].add(s(0, e, g.isFunction(t) ? t : I)), n[2][3].add(s(0, e, g.isFunction(i) ? i : P))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? g.extend(e, o) : o
                            }
                        },
                        r = {};
                    return g.each(n, function(e, t) {
                        var s = t[2],
                            a = t[5];
                        o[t[1]] = s.add, a && s.add(function() {
                            i = a
                        }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                            return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                        }, r[t[0] + "With"] = s.fireWith
                    }), o.promise(r), t && t.call(r, r), r
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        i = Array(n),
                        o = r.call(arguments),
                        s = g.Deferred(),
                        a = function(e) {
                            return function(n) {
                                i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || s.resolveWith(i, o)
                            }
                        };
                    if (t <= 1 && (O(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g.isFunction(o[n] && o[n].then))) return s.then();
                    for (; n--;) O(o[n], a(n), s.reject);
                    return s.promise()
                }
            });
            var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            g.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, g.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            };
            var B = g.Deferred();

            function H() {
                i.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), g.ready()
            }
            g.fn.ready = function(e) {
                return B.then(e).catch(function(e) {
                    g.readyException(e)
                }), this
            }, g.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== e && --g.readyWait > 0 || B.resolveWith(i, [g]))
                }
            }), g.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(g.ready) : (i.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
            var R = function(e, t, n, i, o, r, s) {
                    var a = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === g.type(n))
                        for (a in o = !0, n) R(e, t, a, n[a], !0, r, s);
                    else if (void 0 !== i && (o = !0, g.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                            return c.call(g(e), n)
                        })), t))
                        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
                },
                W = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

            function X() {
                this.expando = g.expando + X.uid++
            }
            X.uid = 1, X.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, W(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var i, o = this.cache(e);
                    if ("string" == typeof t) o[g.camelCase(t)] = n;
                    else
                        for (i in t) o[g.camelCase(i)] = t[i];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][g.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(g.camelCase) : (t = g.camelCase(t)) in i ? [t] : t.match(M) || []).length;
                            for (; n--;) delete i[t[n]]
                        }(void 0 === t || g.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !g.isEmptyObject(t)
                }
            };
            var $ = new X,
                Y = new X,
                V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                U = /[A-Z]/g;

            function G(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : V.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        Y.set(e, t, n)
                    } else n = void 0;
                return n
            }
            g.extend({
                hasData: function(e) {
                    return Y.hasData(e) || $.hasData(e)
                },
                data: function(e, t, n) {
                    return Y.access(e, t, n)
                },
                removeData: function(e, t) {
                    Y.remove(e, t)
                },
                _data: function(e, t, n) {
                    return $.access(e, t, n)
                },
                _removeData: function(e, t) {
                    $.remove(e, t)
                }
            }), g.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0],
                        s = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Y.get(r), 1 === r.nodeType && !$.get(r, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = g.camelCase(i.slice(5)), G(r, i, o[i]));
                            $.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        Y.set(this, e)
                    }) : R(this, function(t) {
                        var n;
                        if (r && void 0 === t) return void 0 !== (n = Y.get(r, e)) ? n : void 0 !== (n = G(r, e)) ? n : void 0;
                        this.each(function() {
                            Y.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Y.remove(this, e)
                    })
                }
            }), g.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = $.get(e, t), n && (!i || Array.isArray(n) ? i = $.access(e, t, g.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = g.queue(e, t),
                        i = n.length,
                        o = n.shift(),
                        r = g._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                        g.dequeue(e, t)
                    }, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return $.get(e, n) || $.access(e, n, {
                        empty: g.Callbacks("once memory").add(function() {
                            $.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), g.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? g.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = g.queue(this, e, t);
                        g._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && g.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        g.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        o = g.Deferred(),
                        r = this,
                        s = this.length,
                        a = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = $.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(t)
                }
            });
            var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                J = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
                Q = ["Top", "Right", "Bottom", "Left"],
                K = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && g.contains(e.ownerDocument, e) && "none" === g.css(e, "display")
                },
                ee = function(e, t, n, i) {
                    var o, r, s = {};
                    for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                    for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
                    return o
                };

            function te(e, t, n, i) {
                var o, r = 1,
                    s = 20,
                    a = i ? function() {
                        return i.cur()
                    } : function() {
                        return g.css(e, t, "")
                    },
                    l = a(),
                    c = n && n[3] || (g.cssNumber[t] ? "" : "px"),
                    u = (g.cssNumber[t] || "px" !== c && +l) && J.exec(g.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3], n = n || [], u = +l || 1;
                    do {
                        u /= r = r || ".5", g.style(e, t, u + c)
                    } while (r !== (r = a() / l) && 1 !== r && --s)
                }
                return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
            }
            var ne = {};

            function ie(e) {
                var t, n = e.ownerDocument,
                    i = e.nodeName,
                    o = ne[i];
                return o || (t = n.body.appendChild(n.createElement(i)), o = g.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ne[i] = o, o)
            }

            function oe(e, t) {
                for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = $.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && K(i) && (o[r] = ie(i))) : "none" !== n && (o[r] = "none", $.set(i, "display", n)));
                for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
                return e
            }
            g.fn.extend({
                show: function() {
                    return oe(this, !0)
                },
                hide: function() {
                    return oe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        K(this) ? g(this).show() : g(this).hide()
                    })
                }
            });
            var re = /^(?:checkbox|radio)$/i,
                se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ae = /^$|\/(?:java|ecma)script/i,
                le = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ce(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? g.merge([e], n) : n
            }

            function ue(e, t) {
                for (var n = 0, i = e.length; n < i; n++) $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"))
            }
            le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
            var he, de, fe = /<|&#?\w+;/;
            he = i.createDocumentFragment().appendChild(i.createElement("div")), (de = i.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), he.appendChild(de), p.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
            var pe = i.documentElement,
                me = /^key/,
                ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ve = /^([^.]*)(?:\.(.+)|)/;

            function ye() {
                return !0
            }

            function be() {
                return !1
            }

            function we() {
                try {
                    return i.activeElement
                } catch (e) {}
            }

            function xe(e, t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), t) xe(e, a, n, i, t[a], r);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = be;
                else if (!o) return e;
                return 1 === r && (s = o, (o = function(e) {
                    return g().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = g.guid++)), e.each(function() {
                    g.event.add(this, t, o, i, n)
                })
            }
            g.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r, s, a, l, c, u, h, d, f, p, m, v = $.get(e);
                    if (v)
                        for (n.handler && (n = (r = n).handler, o = r.selector), o && g.find.matchesSelector(pe, o), n.guid || (n.guid = g.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                                return void 0 !== g && g.event.triggered !== t.type ? g.event.dispatch.apply(e, arguments) : void 0
                            }), c = (t = (t || "").match(M) || [""]).length; c--;) f = m = (a = ve.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = g.event.special[f] || {}, f = (o ? h.delegateType : h.bindType) || f, h = g.event.special[f] || {}, u = g.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && g.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        }, r), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), g.event.global[f] = !0)
                },
                remove: function(e, t, n, i, o) {
                    var r, s, a, l, c, u, h, d, f, p, m, v = $.hasData(e) && $.get(e);
                    if (v && (l = v.events)) {
                        for (c = (t = (t || "").match(M) || [""]).length; c--;)
                            if (f = m = (a = ve.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                                for (h = g.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) u = d[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                                s && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, v.handle) || g.removeEvent(e, f, v.handle), delete l[f])
                            } else
                                for (f in l) g.event.remove(e, f + t[c], n, i, !0);
                        g.isEmptyObject(l) && $.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, o, r, s, a = g.event.fix(e),
                        l = new Array(arguments.length),
                        c = ($.get(this, "events") || {})[a.type] || [],
                        u = g.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                        for (s = g.event.handlers.call(this, a, c), t = 0;
                            (o = s[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = o.elem, n = 0;
                                (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((g.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, o, r, s, a = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? g(o, this).index(c) > -1 : g.find(o, this, null, [c]).length), s[o] && r.push(i);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                })
                            }
                    return c = this, l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function(e, t) {
                    Object.defineProperty(g.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g.isFunction(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[g.expando] ? e : new g.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== we() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === we() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return E(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, g.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, g.Event = function(e, t) {
                if (!(this instanceof g.Event)) return new g.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && g.extend(this, t), this.timeStamp = e && e.timeStamp || g.now(), this[g.expando] = !0
            }, g.Event.prototype = {
                constructor: g.Event,
                isDefaultPrevented: be,
                isPropagationStopped: be,
                isImmediatePropagationStopped: be,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, g.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, g.event.addProp), g.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                g.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = e.relatedTarget,
                            o = e.handleObj;
                        return i && (i === this || g.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), g.fn.extend({
                on: function(e, t, n, i) {
                    return xe(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return xe(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, g(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function() {
                        g.event.remove(this, e, n, t)
                    })
                }
            });
            var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ce = /<script|<style|<link/i,
                Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ke = /^true\/(.*)/,
                Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function je(e, t) {
                return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && g(">tbody", e)[0] || e
            }

            function Se(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function qe(e) {
                var t = ke.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function De(e, t) {
                var n, i, o, r, s, a, l, c;
                if (1 === t.nodeType) {
                    if ($.hasData(e) && (r = $.access(e), s = $.set(t, r), c = r.events))
                        for (o in delete s.handle, s.events = {}, c)
                            for (n = 0, i = c[o].length; n < i; n++) g.event.add(t, o, c[o][n]);
                    Y.hasData(e) && (a = Y.access(e), l = g.extend({}, a), Y.set(t, l))
                }
            }

            function Ne(e, t, n, i) {
                t = s.apply([], t);
                var o, r, a, l, c, u, h = 0,
                    d = e.length,
                    f = d - 1,
                    v = t[0],
                    y = g.isFunction(v);
                if (y || d > 1 && "string" == typeof v && !p.checkClone && Te.test(v)) return e.each(function(o) {
                    var r = e.eq(o);
                    y && (t[0] = v.call(this, o, r.html())), Ne(r, t, n, i)
                });
                if (d && (r = (o = function(e, t, n, i, o) {
                        for (var r, s, a, l, c, u, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                            if ((r = e[f]) || 0 === r)
                                if ("object" === g.type(r)) g.merge(d, r.nodeType ? [r] : r);
                                else if (fe.test(r)) {
                            for (s = s || h.appendChild(t.createElement("div")), a = (se.exec(r) || ["", ""])[1].toLowerCase(), l = le[a] || le._default, s.innerHTML = l[1] + g.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                            g.merge(d, s.childNodes), (s = h.firstChild).textContent = ""
                        } else d.push(t.createTextNode(r));
                        for (h.textContent = "", f = 0; r = d[f++];)
                            if (i && g.inArray(r, i) > -1) o && o.push(r);
                            else if (c = g.contains(r.ownerDocument, r), s = ce(h.appendChild(r), "script"), c && ue(s), n)
                            for (u = 0; r = s[u++];) ae.test(r.type || "") && n.push(r);
                        return h
                    }(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                    for (l = (a = g.map(ce(o, "script"), Se)).length; h < d; h++) c = o, h !== f && (c = g.clone(c, !0, !0), l && g.merge(a, ce(c, "script"))), n.call(e[h], c, h);
                    if (l)
                        for (u = a[a.length - 1].ownerDocument, g.map(a, qe), h = 0; h < l; h++) c = a[h], ae.test(c.type || "") && !$.access(c, "globalEval") && g.contains(u, c) && (c.src ? g._evalUrl && g._evalUrl(c.src) : m(c.textContent.replace(Ee, ""), u))
                }
                return e
            }

            function Ae(e, t, n) {
                for (var i, o = t ? g.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || g.cleanData(ce(i)), i.parentNode && (n && g.contains(i.ownerDocument, i) && ue(ce(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            g.extend({
                htmlPrefilter: function(e) {
                    return e.replace(_e, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                        h = g.contains(e.ownerDocument, e);
                    if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e)))
                        for (s = ce(u), i = 0, o = (r = ce(e)).length; i < o; i++) a = r[i], void 0, "input" === (c = (l = s[i]).nodeName.toLowerCase()) && re.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                    if (t)
                        if (n)
                            for (r = r || ce(e), s = s || ce(u), i = 0, o = r.length; i < o; i++) De(r[i], s[i]);
                        else De(e, u);
                    return (s = ce(u, "script")).length > 0 && ue(s, !h && ce(e, "script")), u
                },
                cleanData: function(e) {
                    for (var t, n, i, o = g.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (W(n)) {
                            if (t = n[$.expando]) {
                                if (t.events)
                                    for (i in t.events) o[i] ? g.event.remove(n, i) : g.removeEvent(n, i, t.handle);
                                n[$.expando] = void 0
                            }
                            n[Y.expando] && (n[Y.expando] = void 0)
                        }
                }
            }), g.fn.extend({
                detach: function(e) {
                    return Ae(this, e, !0)
                },
                remove: function(e) {
                    return Ae(this, e)
                },
                text: function(e) {
                    return R(this, function(e) {
                        return void 0 === e ? g.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Ne(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Ne(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = je(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Ne(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Ne(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (g.cleanData(ce(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return g.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return R(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ce.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = g.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (g.cleanData(ce(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Ne(this, arguments, function(t) {
                        var n = this.parentNode;
                        g.inArray(this, e) < 0 && (g.cleanData(ce(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), g.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                g.fn[e] = function(e) {
                    for (var n, i = [], o = g(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), g(o[s])[t](n), a.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Le = /^margin/,
                Fe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                Me = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                };

            function Ie(e, t, n) {
                var i, o, r, s, a = e.style;
                return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || g.contains(e.ownerDocument, e) || (s = g.style(e, t)), !p.pixelMarginRight() && Fe.test(s) && Le.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
            }

            function Pe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function t() {
                    if (l) {
                        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", pe.appendChild(a);
                        var t = e.getComputedStyle(l);
                        n = "1%" !== t.top, s = "2px" === t.marginLeft, o = "4px" === t.width, l.style.marginRight = "50%", r = "4px" === t.marginRight, pe.removeChild(a), l = null
                    }
                }
                var n, o, r, s, a = i.createElement("div"),
                    l = i.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), g.extend(p, {
                    pixelPosition: function() {
                        return t(), n
                    },
                    boxSizingReliable: function() {
                        return t(), o
                    },
                    pixelMarginRight: function() {
                        return t(), r
                    },
                    reliableMarginLeft: function() {
                        return t(), s
                    }
                }))
            }();
            var Oe = /^(none|table(?!-c[ea]).+)/,
                ze = /^--/,
                Be = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                He = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Re = ["Webkit", "Moz", "ms"],
                We = i.createElement("div").style;

            function Xe(e) {
                var t = g.cssProps[e];
                return t || (t = g.cssProps[e] = function(e) {
                    if (e in We) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Re.length; n--;)
                        if ((e = Re[n] + t) in We) return e
                }(e) || e), t
            }

            function $e(e, t, n) {
                var i = J.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function Ye(e, t, n, i, o) {
                var r, s = 0;
                for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += g.css(e, n + Q[r], !0, o)), i ? ("content" === n && (s -= g.css(e, "padding" + Q[r], !0, o)), "margin" !== n && (s -= g.css(e, "border" + Q[r] + "Width", !0, o))) : (s += g.css(e, "padding" + Q[r], !0, o), "padding" !== n && (s += g.css(e, "border" + Q[r] + "Width", !0, o)));
                return s
            }

            function Ve(e, t, n) {
                var i, o = Me(e),
                    r = Ie(e, t, o),
                    s = "border-box" === g.css(e, "boxSizing", !1, o);
                return Fe.test(r) ? r : (i = s && (p.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + Ye(e, t, n || (s ? "border" : "content"), i, o) + "px")
            }

            function Ue(e, t, n, i, o) {
                return new Ue.prototype.init(e, t, n, i, o)
            }
            g.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ie(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, s, a = g.camelCase(t),
                            l = ze.test(t),
                            c = e.style;
                        if (l || (t = Xe(a)), s = g.cssHooks[t] || g.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                        "string" == (r = typeof n) && (o = J.exec(n)) && o[1] && (n = te(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (g.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var o, r, s, a = g.camelCase(t);
                    return ze.test(t) || (t = Xe(a)), (s = g.cssHooks[t] || g.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ie(e, t, i)), "normal" === o && t in He && (o = He[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
                }
            }), g.each(["height", "width"], function(e, t) {
                g.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n) return !Oe.test(g.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, t, i) : ee(e, Be, function() {
                            return Ve(e, t, i)
                        })
                    },
                    set: function(e, n, i) {
                        var o, r = i && Me(e),
                            s = i && Ye(e, t, i, "border-box" === g.css(e, "boxSizing", !1, r), r);
                        return s && (o = J.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = g.css(e, t)), $e(0, n, s)
                    }
                }
            }), g.cssHooks.marginLeft = Pe(p.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), g.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                g.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Q[i] + t] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }, Le.test(e) || (g.cssHooks[e + t].set = $e)
            }), g.fn.extend({
                css: function(e, t) {
                    return R(this, function(e, t, n) {
                        var i, o, r = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Me(e), o = t.length; s < o; s++) r[t[s]] = g.css(e, t[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? g.style(e, t, n) : g.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), g.Tween = Ue, Ue.prototype = {
                constructor: Ue,
                init: function(e, t, n, i, o, r) {
                    this.elem = e, this.prop = n, this.easing = o || g.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (g.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Ue.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Ue.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Ue.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ue.propHooks._default.set(this), this
                }
            }, Ue.prototype.init.prototype = Ue.prototype, Ue.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        g.fx.step[e.prop] ? g.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[g.cssProps[e.prop]] && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, Ue.propHooks.scrollTop = Ue.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, g.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, g.fx = Ue.prototype.init, g.fx.step = {};
            var Ge, Ze, Je = /^(?:toggle|show|hide)$/,
                Qe = /queueHooks$/;

            function Ke() {
                Ze && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(Ke) : e.setTimeout(Ke, g.fx.interval), g.fx.tick())
            }

            function et() {
                return e.setTimeout(function() {
                    Ge = void 0
                }), Ge = g.now()
            }

            function tt(e, t) {
                var n, i = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Q[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function nt(e, t, n) {
                for (var i, o = (it.tweeners[t] || []).concat(it.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                    if (i = o[r].call(n, t, e)) return i
            }

            function it(e, t, n) {
                var i, o, r = 0,
                    s = it.prefilters.length,
                    a = g.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (o) return !1;
                        for (var t = Ge || et(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                        return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                    },
                    c = a.promise({
                        elem: e,
                        props: g.extend({}, t),
                        opts: g.extend(!0, {
                            specialEasing: {},
                            easing: g.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Ge || et(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = g.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function(t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < i; n++) c.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (function(e, t) {
                        var n, i, o, r, s;
                        for (n in e)
                            if (o = t[i = g.camelCase(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = g.cssHooks[i]) && "expand" in s)
                                for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                            else t[i] = o
                    }(u, c.opts.specialEasing); r < s; r++)
                    if (i = it.prefilters[r].call(c, e, u, c.opts)) return g.isFunction(i.stop) && (g._queueHooks(c.elem, c.opts.queue).stop = g.proxy(i.stop, i)), i;
                return g.map(u, nt, c), g.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), g.fx.timer(g.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            g.Animation = g.extend(it, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return te(n.elem, e, J.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        g.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(M);
                        for (var n, i = 0, o = e.length; i < o; i++) n = e[i], it.tweeners[n] = it.tweeners[n] || [], it.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var i, o, r, s, a, l, c, u, h = "width" in t || "height" in t,
                            d = this,
                            f = {},
                            p = e.style,
                            m = e.nodeType && K(e),
                            v = $.get(e, "fxshow");
                        for (i in n.queue || (null == (s = g._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || a()
                            }), s.unqueued++, d.always(function() {
                                d.always(function() {
                                    s.unqueued--, g.queue(e, "fx").length || s.empty.fire()
                                })
                            })), t)
                            if (o = t[i], Je.test(o)) {
                                if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                                    if ("show" !== o || !v || void 0 === v[i]) continue;
                                    m = !0
                                }
                                f[i] = v && v[i] || g.style(e, i)
                            }
                        if ((l = !g.isEmptyObject(t)) || !g.isEmptyObject(f))
                            for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = $.get(e, "display")), "none" === (u = g.css(e, "display")) && (c ? u = c : (oe([e], !0), c = e.style.display || c, u = g.css(e, "display"), oe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === g.css(e, "float") && (l || (d.done(function() {
                                    p.display = c
                                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                })), l = !1, f) l || (v ? "hidden" in v && (m = v.hidden) : v = $.access(e, "fxshow", {
                                display: c
                            }), r && (v.hidden = !m), m && oe([e], !0), d.done(function() {
                                for (i in m || oe([e]), $.remove(e, "fxshow"), f) g.style(e, i, f[i])
                            })), l = nt(m ? v[i] : 0, i, d), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? it.prefilters.unshift(e) : it.prefilters.push(e)
                    }
                }), g.speed = function(e, t, n) {
                    var i = e && "object" == typeof e ? g.extend({}, e) : {
                        complete: n || !n && t || g.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !g.isFunction(t) && t
                    };
                    return g.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in g.fx.speeds ? i.duration = g.fx.speeds[i.duration] : i.duration = g.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        g.isFunction(i.old) && i.old.call(this), i.queue && g.dequeue(this, i.queue)
                    }, i
                }, g.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(K).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var o = g.isEmptyObject(e),
                            r = g.speed(t, n, i),
                            s = function() {
                                var t = it(this, g.extend({}, e), r);
                                (o || $.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                r = g.timers,
                                s = $.get(this);
                            if (o) s[o] && s[o].stop && i(s[o]);
                            else
                                for (o in s) s[o] && s[o].stop && Qe.test(o) && i(s[o]);
                            for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                            !t && n || g.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = $.get(this),
                                i = n[e + "queue"],
                                o = n[e + "queueHooks"],
                                r = g.timers,
                                s = i ? i.length : 0;
                            for (n.finish = !0, g.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), g.each(["toggle", "show", "hide"], function(e, t) {
                    var n = g.fn[t];
                    g.fn[t] = function(e, i, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(tt(t, !0), e, i, o)
                    }
                }), g.each({
                    slideDown: tt("show"),
                    slideUp: tt("hide"),
                    slideToggle: tt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    g.fn[e] = function(e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                }), g.timers = [], g.fx.tick = function() {
                    var e, t = 0,
                        n = g.timers;
                    for (Ge = g.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || g.fx.stop(), Ge = void 0
                }, g.fx.timer = function(e) {
                    g.timers.push(e), g.fx.start()
                }, g.fx.interval = 13, g.fx.start = function() {
                    Ze || (Ze = !0, Ke())
                }, g.fx.stop = function() {
                    Ze = null
                }, g.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, g.fn.delay = function(t, n) {
                    return t = g.fx && g.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                        var o = e.setTimeout(n, t);
                        i.stop = function() {
                            e.clearTimeout(o)
                        }
                    })
                },
                function() {
                    var e = i.createElement("input"),
                        t = i.createElement("select").appendChild(i.createElement("option"));
                    e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
                }();
            var ot, rt = g.expr.attrHandle;
            g.fn.extend({
                attr: function(e, t) {
                    return R(this, g.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        g.removeAttr(this, e)
                    })
                }
            }), g.extend({
                attr: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? g.prop(e, t, n) : (1 === r && g.isXMLDoc(e) || (o = g.attrHooks[t.toLowerCase()] || (g.expr.match.bool.test(t) ? ot : void 0)), void 0 !== n ? null === n ? void g.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = g.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!p.radioValue && "radio" === t && E(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0,
                        o = t && t.match(M);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) e.removeAttribute(n)
                }
            }), ot = {
                set: function(e, t, n) {
                    return !1 === t ? g.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, g.each(g.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = rt[t] || g.find.attr;
                rt[t] = function(e, t, i) {
                    var o, r, s = t.toLowerCase();
                    return i || (r = rt[s], rt[s] = o, o = null != n(e, t, i) ? s : null, rt[s] = r), o
                }
            });

            function st(e) {
                return (e.match(M) || []).join(" ")
            }

            function at(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            g.fn.extend({
                prop: function(e, t) {
                    return R(this, g.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[g.propFix[e] || e]
                    })
                }
            }), g.extend({
                prop: function(e, t, n) {},
                propHooks: {
                    tabIndex: {}
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), p.optSelected || (g.propHooks.selected = {}), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                g.propFix[this.toLowerCase()] = this
            }), g.fn.extend({
                addClass: function(e) {
                    var t, n, i, o, r, s, a, l = 0;
                    if (g.isFunction(e)) return this.each(function(t) {
                        g(this).addClass(e.call(this, t, at(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(M) || []; n = this[l++];)
                            if (o = at(n), i = 1 === n.nodeType && " " + st(o) + " ") {
                                for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                o !== (a = st(i)) && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, o, r, s, a, l = 0;
                    if (g.isFunction(e)) return this.each(function(t) {
                        g(this).removeClass(e.call(this, t, at(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(M) || []; n = this[l++];)
                            if (o = at(n), i = 1 === n.nodeType && " " + st(o) + " ") {
                                for (s = 0; r = t[s++];)
                                    for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                                o !== (a = st(i)) && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each(function(n) {
                        g(this).toggleClass(e.call(this, n, at(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, r;
                        if ("string" === n)
                            for (i = 0, o = g(this), r = e.match(M) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = at(this)) && $.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + st(at(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            g.fn.extend({}), g.extend({}), g.each(["radio", "checkbox"], function() {}), g.fn.extend({}), g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                g.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), g.fn.extend({}), p.focusin = "onfocusin" in e, p.focusin || g.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {});
            var lt = e.location;
            g.now();
            g.parseXML = function(e) {};
            g.param = function(e, t) {}, g.fn.extend({
                serialize: function() {
                    return g.param(this.serializeArray())
                },
                serializeArray: function() {}
            });
            "*/".concat("*");
            i.createElement("a").href = lt.href, g.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    accepts: {},
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {},
                    converters: {},
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    g.ajaxSettings
                },
                ajaxPrefilter: function(e, t) {},
                ajaxTransport: function(e, t) {},
                getJSON: function(e, t, n) {
                    return g.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return g.get(e, void 0, t, "script")
                }
            }), g.fn.extend({}), g.expr.pseudos.hidden = function(e) {
                return !g.expr.pseudos.visible(e)
            }, g.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, g.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var ct = g.ajaxSettings.xhr();
            p.cors = !!ct && "withCredentials" in ct, p.ajax = ct = !!ct, g.ajaxTransport(function(e) {}), g.ajaxPrefilter(function(e) {}), g.ajaxSetup({}), g.ajaxPrefilter("script", function(e) {}), g.ajaxTransport("script", function(e) {});
            g.ajaxSetup({}), g.ajaxPrefilter("json jsonp", function(e, t, n) {}), g.parseHTML = function(e, t, n) {}, g.fn.load = function(e, t, n) {}, g.each(), g.fn.extend({
                offset: function(e) {},
                position: function() {},
                offsetParent: function() {}
            }), g.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                g.fn[e] = function(i) {
                    return R(this, function(e, i, o) {
                        var r;
                        if (g.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                    }, e, i, arguments.length)
                }
            }), g.each(["top", "left"], function(e, t) {
                g.cssHooks[t] = Pe(p.pixelPosition, function(e, n) {
                    if (n) return n = Ie(e, t), Fe.test(n) ? g(e).position()[t] + "px" : n
                })
            }), g.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                g.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    g.fn[i] = function(o, r) {
                        var s = arguments.length && (n || "boolean" != typeof o),
                            a = n || (!0 === o || !0 === r ? "margin" : "border");
                        return R(this, function(t, n, o) {
                            var r;
                            return g.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? g.css(t, n, a) : g.style(t, n, o, a)
                        }, t, s ? o : void 0, s)
                    }
                })
            }), g.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), g.isArray = Array.isArray, g.parseJSON = JSON.parse, g.nodeName = E, "function" == typeof define && define.amd && define("jquery", [], function() {
                return g
            });
            var ut = e.jQuery,
                ht = e.$;
            return g.noConflict = function(t) {
                return e.$ === g && (e.$ = ht), t && e.jQuery === g && (e.jQuery = ut), g
            }, t || (e.jQuery = e.$ = g), g
        })
    }, {}],
    53: [function(e, t, n) {
        ! function(e, i, o) {
            "use strict";

            function r() {
                if (!("scrollBehavior" in i.documentElement.style)) {
                    var t = e.HTMLElement || e.Element,
                        n = 468,
                        r = {
                            scroll: e.scroll || e.scrollTo,
                            scrollBy: e.scrollBy,
                            elScroll: t.prototype.scroll || a,
                            scrollIntoView: t.prototype.scrollIntoView
                        },
                        s = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now;
                    e.scroll = e.scrollTo = function() {
                        l(arguments[0]) ? r.scroll.call(e, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : u.call(e, i.body, ~~arguments[0].left, ~~arguments[0].top)
                    }, e.scrollBy = function() {
                        l(arguments[0]) ? r.scrollBy.call(e, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : u.call(e, i.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset))
                    }, t.prototype.scroll = t.prototype.scrollTo = function() {
                        if (l(arguments[0])) r.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                        else {
                            var e = arguments[0].left,
                                t = arguments[0].top;
                            u.call(this, this, "number" == typeof e ? e : this.scrollLeft, "number" == typeof t ? t : this.scrollTop)
                        }
                    }, t.prototype.scrollBy = function() {
                        var e = arguments[0];
                        "object" == typeof e ? this.scroll({
                            left: e.left + this.scrollLeft,
                            top: e.top + this.scrollTop,
                            behavior: e.behavior
                        }) : this.scroll(this.scrollLeft + e, this.scrollTop + arguments[1])
                    }, t.prototype.scrollIntoView = function() {
                        if (l(arguments[0])) r.scrollIntoView.call(this, arguments[0] === o || arguments[0]);
                        else {
                            var t = function(t) {
                                    var n, o, r;
                                    do {
                                        n = (t = t.parentNode) === i.body, o = t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth, r = "visible" === e.getComputedStyle(t, null).overflow
                                    } while (!n && (!o || r));
                                    return n = o = r = null, t
                                }(this),
                                n = t.getBoundingClientRect(),
                                s = this.getBoundingClientRect();
                            t !== i.body ? (u.call(this, t, t.scrollLeft + s.left - n.left, t.scrollTop + s.top - n.top), e.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth"
                            })) : e.scrollBy({
                                left: s.left,
                                top: s.top,
                                behavior: "smooth"
                            })
                        }
                    }
                }

                function a(e, t) {
                    this.scrollLeft = e, this.scrollTop = t
                }

                function l(e) {
                    if ("object" != typeof e || null === e || e.behavior === o || "auto" === e.behavior || "instant" === e.behavior) return !0;
                    if ("object" == typeof e && "smooth" === e.behavior) return !1;
                    throw new TypeError("behavior not valid")
                }

                function c(t) {
                    var i, o, r, a, l = (s() - t.startTime) / n;
                    a = l = l > 1 ? 1 : l, i = .5 * (1 - Math.cos(Math.PI * a)), o = t.startX + (t.x - t.startX) * i, r = t.startY + (t.y - t.startY) * i, t.method.call(t.scrollable, o, r), o === t.x && r === t.y || e.requestAnimationFrame(c.bind(e, t))
                }

                function u(t, n, o) {
                    var l, u, h, d, f = s();
                    t === i.body ? (l = e, u = e.scrollX || e.pageXOffset, h = e.scrollY || e.pageYOffset, d = r.scroll) : (l = t, u = t.scrollLeft, h = t.scrollTop, d = a), c({
                        scrollable: l,
                        method: d,
                        startTime: f,
                        startX: u,
                        startY: h,
                        x: n,
                        y: o
                    })
                }
            }
            "object" == typeof n ? t.exports = {
                polyfill: r
            } : r()
        }(window, document)
    }, {}],
    54: [function(e, t, n) {
        ! function() {
            function e(e, t, n) {
                return e.call.apply(e.bind, arguments)
            }

            function i(t, o, r) {
                return (i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : n).apply(null, arguments)
            }

            function o(e, t) {
                this.a = e, this.o = t || e, this.c = this.o.document
            }
            window.FontFace;

            function r(e, t, n) {
                t = t || [], n = n || [];
                for (var i = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
                    for (var r = !1, s = 0; s < i.length; s += 1)
                        if (t[o] === i[s]) {
                            r = !0;
                            break
                        }
                    r || i.push(t[o])
                }
                for (t = [], o = 0; o < i.length; o += 1) {
                    for (r = !1, s = 0; s < n.length; s += 1)
                        if (i[o] === n[s]) {
                            r = !0;
                            break
                        }
                    r || t.push(i[o])
                }
                e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
            }

            function u() {
                this.a = 0, this.c = null
            }

            function h(e, t) {
                e.c = t,
                    function(e) {
                        0 == e.a && e.c && (e.c(), e.c = null)
                    }(e)
            }

            function p(e) {
                this.a = e || "-"
            }

            function g(e, t) {
                this.c = e, this.f = 4, this.a = "n";
                var n = (t || "n4").match(/^([nio])([1-9])$/i);
                n && (this.a = n[1], this.f = parseInt(n[2], 10))
            }

            function v(e) {
                var t = [];
                e = e.split(/,\s*/);
                for (var n = 0; n < e.length; n++) {
                    var i = e[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
                }
                return t.join(",")
            }

            function y(e) {
                return e.a + e.f
            }

            function b(e) {
                var t = "normal";
                return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
            }

            function w(e) {
                var t = 4,
                    n = "n",
                    i = null;
                return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))), n + t
            }

            function x(e, t) {
                this.c = e, this.f = e.o.document.documentElement, this.h = t, this.a = new p("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
            }

            function _(e) {
                e.g && (n = [], i = [e.a.c("wf", "loading")], t || n.push(e.a.c("wf", "inactive")), r(e.f, n, i)), C(e, "inactive")
            }

            function C(e, t, n) {
                e.j && e.h[t] && (n ? e.h[t](n.c, y(n)) : e.h[t]())
            }

            function T() {
                this.c = {}
            }

            function k(e, t) {
                this.c = e, this.f = t, this.a = a(this.c, "span", {
                    "aria-hidden": "true"
                }, this.f)
            }

            function E(e) {
                l(e.c, "body", e.a)
            }

            function j(e) {
                return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + v(e.c) + ";font-style:" + b(e) + ";font-weight:" + e.f + "00;"
            }

            function S(e, t, n, i, o, r) {
                this.g = e, this.j = t, this.a = i, this.c = n, this.f = o || 3e3, this.h = r || void 0
            }

            function q(e, t, n, i, o, r, s) {
                this.v = e, this.B = t, this.c = n, this.a = i, this.s = s || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = r || null, this.m = this.j = this.h = this.g = null, this.g = new k(this.c, this.s), this.h = new k(this.c, this.s), this.j = new k(this.c, this.s), this.m = new k(this.c, this.s), e = j(e = new g(this.a.c + ",serif", y(this.a))), this.g.a.style.cssText = e, e = j(e = new g(this.a.c + ",sans-serif", y(this.a))), this.h.a.style.cssText = e, e = j(e = new g("serif", y(this.a))), this.j.a.style.cssText = e, e = j(e = new g("sans-serif", y(this.a))), this.m.a.style.cssText = e, E(this.g), E(this.h), E(this.j), E(this.m)
            }
            p.prototype.c = function(e) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                return t.join(this.a)
            }, S.prototype.start = function() {
                var e = this.c.o.document,
                    t = this,
                    i = new Promise(function(i, o) {
                        ! function r() {
                            s() - n >= t.f ? o() : e.fonts.load(function(e) {
                                return b(e) + " " + e.f + "00 300px " + v(e.c)
                            }(t.a), t.h).then(function(e) {
                                1 <= e.length ? i() : setTimeout(r, 25)
                            }, function() {
                                o()
                            })
                        }()
                    }),
                    o = null,
                    r = new Promise(function(e, n) {
                        o = setTimeout(n, t.f)
                    });
                Promise.race([r, i]).then(function() {
                    o && (clearTimeout(o), o = null), t.g(t.a)
                }, function() {
                    t.j(t.a)
                })
            };
            var D = {
                    D: "serif",
                    C: "sans-serif"
                },
                N = null;

            function A() {
                if (null === N) {
                    var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    N = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
                }
                return N
            }

            function L(e, t, n) {
                for (var i in D)
                    if (D.hasOwnProperty(i) && t === e.f[D[i]] && n === e.f[D[i]]) return !0;
                return !1
            }

            function F(e, t) {
                setTimeout(i(function() {
                    c(this.g.a), c(this.h.a), c(this.j.a), c(this.m.a), t(this.a)
                }, e), 0)
            }

            function M(e, t, n) {
                this.c = e, this.a = t, this.f = 0, this.m = this.j = !1, this.s = n
            }
            q.prototype.start = function() {
                this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = s(),
                    function e(t) {
                        var n, o = t.g.a.offsetWidth,
                            r = t.h.a.offsetWidth;
                        (n = o === t.f.serif && r === t.f["sans-serif"]) || (n = A() && L(t, o, r)), n ? s() - t.A >= t.w ? A() && L(t, o, r) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? F(t, t.v) : F(t, t.B) : function(t) {
                            setTimeout(i(function() {
                                e(this)
                            }, t), 50)
                        }(t) : F(t, t.v)
                    }(this)
            };
            var I = null;

            function P(e) {
                0 == --e.f && e.j && (e.m ? ((e = e.a).g && r(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), C(e, "active")) : _(e.a))
            }

            function O(e) {
                this.j = e, this.a = new T, this.h = 0, this.f = this.g = !0
            }

            function z(e, t, n, o, s) {
                var a = 0 == --e.h;
                (e.f || e.g) && setTimeout(function() {
                    var e = s || null,
                        l = o || {};
                    if (0 === n.length && a) _(t.a);
                    else {
                        t.f += n.length, a && (t.j = a);
                        var c, u = [];
                        for (c = 0; c < n.length; c++) {
                            var h = n[c],
                                d = l[h.c],
                                f = t.a,
                                p = h;
                            if (f.g && r(f.f, [f.a.c("wf", p.c, y(p).toString(), "loading")]), C(f, "fontloading", p), f = null, null === I)
                                if (window.FontFace) {
                                    p = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                    var m = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                    I = p ? 42 < parseInt(p[1], 10) : !m
                                } else I = !1;
                            f = I ? new S(i(t.g, t), i(t.h, t), t.c, h, t.s, d) : new q(i(t.g, t), i(t.h, t), t.c, h, t.s, e, d), u.push(f)
                        }
                        for (c = 0; c < u.length; c++) u[c].start()
                    }
                }, 0)
            }

            function B(e, t) {
                this.c = e, this.a = t
            }

            function H(e, t) {
                this.c = e, this.a = t
            }

            function R(e, t) {
                this.c = e || W, this.a = [], this.f = [], this.g = t || ""
            }
            M.prototype.g = function(e) {
                var t = this.a;
                t.g && r(t.f, [t.a.c("wf", e.c, y(e).toString(), "active")], [t.a.c("wf", e.c, y(e).toString(), "loading"), t.a.c("wf", e.c, y(e).toString(), "inactive")]), C(t, "fontactive", e), this.m = !0, P(this)
            }, M.prototype.h = function(e) {
                var t = this.a;
                t.g && (i = [], s = [t.a.c("wf", e.c, y(e).toString(), "loading")], n || i.push(t.a.c("wf", e.c, y(e).toString(), "inactive")), r(t.f, i, s)), C(t, "fontinactive", e), P(this)
            }, O.prototype.load = function(e) {
                this.c = new o(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes,
                    function(e, t, n) {
                        var i = [],
                            o = n.timeout;
                        ! function(e) {
                            e.g && r(e.f, [e.a.c("wf", "loading")]), C(e, "loading")
                        }(t);
                        i = function(e, t, n) {
                            var i, o = [];
                            for (i in t)
                                if (t.hasOwnProperty(i)) {
                                    var r = e.c[i];
                                    r && o.push(r(t[i], n))
                                }
                            return o
                        }(e.a, n, e.c);
                        var s = new M(e.c, t, o);
                        for (e.h = i.length, t = 0, n = i.length; t < n; t++) i[t].load(function(t, n, i) {
                            z(e, s, t, n, i)
                        })
                    }(this, new x(this.c, e), e)
            }, B.prototype.load = function(e) {
                var t = this,
                    n = t.a.projectId,
                    i = t.a.version;
                if (n) {
                    var o = t.c.o;
                    f(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (i ? "?v=" + i : ""), function(i) {
                        i ? e([]) : (o["__MonotypeConfiguration__" + n] = function() {
                            return t.a
                        }, function t() {
                            if (o["__mti_fntLst" + n]) {
                                var i, r = o["__mti_fntLst" + n](),
                                    s = [];
                                if (r)
                                    for (var a = 0; a < r.length; a++) {
                                        var l = r[a].fontfamily;
                                        null != r[a].fontStyle && null != r[a].fontWeight ? (i = r[a].fontStyle + r[a].fontWeight, s.push(new g(l, i))) : s.push(new g(l))
                                    }
                                e(s)
                            } else setTimeout(function() {
                                t()
                            }, 50)
                        }())
                    }).id = "__MonotypeAPIScript__" + n
                } else e([])
            }, H.prototype.load = function(e) {
                var t, n, i = this.a.urls || [],
                    o = this.a.families || [],
                    r = this.a.testStrings || {},
                    s = new u;
                for (t = 0, n = i.length; t < n; t++) d(this.c, i[t], m(s));
                var a = [];
                for (t = 0, n = o.length; t < n; t++)
                    if ((i = o[t].split(":"))[1])
                        for (var l = i[1].split(","), c = 0; c < l.length; c += 1) a.push(new g(i[0], l[c]));
                    else a.push(new g(i[0]));
                h(s, function() {
                    e(a, r)
                })
            };
            var W = "https://fonts.googleapis.com/css";

            function X(e) {
                this.f = e, this.a = [], this.c = {}
            }
            var $ = {
                    latin: "BESbswy",
                    "latin-ext": "çöüğş",
                    cyrillic: "йяЖ",
                    greek: "αβΣ",
                    khmer: "កខគ",
                    Hanuman: "កខគ"
                },
                Y = {
                    thin: "1",
                    extralight: "2",
                    "extra-light": "2",
                    ultralight: "2",
                    "ultra-light": "2",
                    light: "3",
                    regular: "4",
                    book: "4",
                    medium: "5",
                    "semi-bold": "6",
                    semibold: "6",
                    "demi-bold": "6",
                    demibold: "6",
                    bold: "7",
                    "extra-bold": "8",
                    extrabold: "8",
                    "ultra-bold": "8",
                    ultrabold: "8",
                    black: "9",
                    heavy: "9",
                    l: "3",
                    r: "4",
                    b: "7"
                },
                V = {
                    i: "i",
                    italic: "i",
                    n: "n",
                    normal: "n"
                },
                U = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

            function G(e, t) {
                this.c = e, this.a = t
            }
            var Z = {
                Arimo: !0,
                Cousine: !0,
                Tinos: !0
            };

            function J(e, t) {
                this.c = e, this.a = t
            }

            function Q(e, t) {
                this.c = e, this.f = t, this.a = []
            }
            G.prototype.load = function(e) {
                var t = new u,
                    n = this.c,
                    i = new R(this.a.api, this.a.text),
                    o = this.a.families;
                ! function(e, t) {
                    for (var n = t.length, i = 0; i < n; i++) {
                        var o = t[i].split(":");
                        3 == o.length && e.f.push(o.pop());
                        var r = "";
                        2 == o.length && "" != o[1] && (r = ":"), e.a.push(o.join(r))
                    }
                }(i, o);
                var r = new X(o);
                ! function(e) {
                    for (var t = e.f.length, n = 0; n < t; n++) {
                        var i = e.f[n].split(":"),
                            o = i[0].replace(/\+/g, " "),
                            r = ["n4"];
                        if (2 <= i.length) {
                            var s;
                            if (s = [], a = i[1])
                                for (var a, l = (a = a.split(",")).length, c = 0; c < l; c++) {
                                    var u;
                                    if ((u = a[c]).match(/^[\w-]+$/))
                                        if (null == (h = U.exec(u.toLowerCase()))) u = "";
                                        else {
                                            if (u = null == (u = h[2]) || "" == u ? "n" : V[u], null == (h = h[1]) || "" == h) h = "4";
                                            else var h = Y[h] || (isNaN(h) ? "4" : h.substr(0, 1));
                                            u = [u, h].join("")
                                        }
                                    else u = "";
                                    u && s.push(u)
                                }
                            0 < s.length && (r = s), 3 == i.length && (s = [], 0 < (i = (i = i[2]) ? i.split(",") : s).length && (i = $[i[0]]) && (e.c[o] = i))
                        }
                        for (e.c[o] || (i = $[o]) && (e.c[o] = i), i = 0; i < r.length; i += 1) e.a.push(new g(o, r[i]))
                    }
                }(r), d(n, function(e) {
                    if (0 == e.a.length) throw Error("No fonts to load!");
                    if (-1 != e.c.indexOf("kit=")) return e.c;
                    for (var t = e.a.length, n = [], i = 0; i < t; i++) n.push(e.a[i].replace(/ /g, "+"));
                    return t = e.c + "?family=" + n.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
                }(i), m(t)), h(t, function() {
                    e(r.a, r.c, Z)
                })
            }, J.prototype.load = function(e) {
                var t = this.a.id,
                    n = this.c.o;
                t ? f(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function(t) {
                    if (t) e([]);
                    else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                        t = n.Typekit.config.fn;
                        for (var i = [], o = 0; o < t.length; o += 2)
                            for (var r = t[o], s = t[o + 1], a = 0; a < s.length; a++) i.push(new g(r, s[a]));
                        try {
                            n.Typekit.load({
                                events: !1,
                                classes: !1,
                                async: !0
                            })
                        } catch (e) {}
                        e(i)
                    }
                }, 2e3) : e([])
            }, Q.prototype.load = function(e) {
                var t = this.f.id,
                    n = this.c.o,
                    i = this;
                t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
                    for (var o = 0, r = n.fonts.length; o < r; ++o) {
                        var s = n.fonts[o];
                        i.a.push(new g(s.name, w("font-weight:" + s.weight + ";font-style:" + s.style)))
                    }
                    e(i.a)
                }, f(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(e) {
                    return e.o.location.hostname || e.a.location.hostname
                }(this.c) + "/" + t + ".js", function(t) {
                    t && e([])
                })) : e([])
            };
            var K = new O(window);
            K.a.c.custom = function(e, t) {
                return new H(t, e)
            }, K.a.c.fontdeck = function(e, t) {
                return new Q(t, e)
            }, K.a.c.monotype = function(e, t) {
                return new B(t, e)
            }, K.a.c.typekit = function(e, t) {
                return new J(t, e)
            }, K.a.c.google = function(e, t) {
                return new G(t, e)
            };
            var ee = {
                load: i(K.load, K)
            };
            "function" == typeof define && define.amd ? define(function() {
                return ee
            }) : void 0 !== t && t.exports ? t.exports = ee : (window.WebFont = ee, window.WebFontConfig && K.load(window.WebFontConfig))
        }()
    }, {}]
}, {}, [46]), $(".modal.modal_video").on("shown.bs.modal", function(e) {
    $("video").prop("muted", !0)
}), $(".modal.modal_video").on("hidden.bs.modal", function(e) {
    $(".modal_video .modal-body iframe").attr("src", ""), $("video").prop("muted", !1)
});


/*  */
if ($(".video-carousel").length) {
    $(".video-carousel").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: true,
        autoplay: false,
        mouseDrag: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
}

$(".video-caroselWrap .video-link").click(function() {
    var datalink = $(this).attr('data-link');
    var videolink = 'https://www.youtube.com/embed/' + datalink + '?autoplay=1;enablejsapi=1';
    $('.video-modal').find('iframe').attr('src', videolink);
    $('.video-modal').fadeIn();
    //console.log(videolink)
});
$(".video-modal .close-video-modal").click(function() {
    $(this).parents('.video-modal').find('iframe').attr('src', '');
    $(this).parents('.video-modal').hide();
});

var home_mob_video_slider = new Swiper('.home_mob_video_slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1200,
});