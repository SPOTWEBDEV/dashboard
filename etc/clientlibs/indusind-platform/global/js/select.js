! function(e, t) {
    void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
        return t(e)
    })) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    ! function(e) {
        "use strict";
        var t = ["sanitize", "whiteList", "sanitizeFn"],
            i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            n = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function o(t, o) {
            var r = t.nodeName.toLowerCase();
            if (-1 !== e.inArray(r, o)) return -1 === e.inArray(r, i) || Boolean(t.nodeValue.match(s) || t.nodeValue.match(n));
            for (var l = e(o).filter((function(e, t) {
                    return t instanceof RegExp
                })), a = 0, c = l.length; a < c; a++)
                if (r.match(l[a])) return !0;
            return !1
        }

        function r(e, t, i) {
            if (i && "function" == typeof i) return i(e);
            for (var s = Object.keys(t), n = 0, r = e.length; n < r; n++)
                for (var l = e[n].querySelectorAll("*"), a = 0, c = l.length; a < c; a++) {
                    var d = l[a],
                        h = d.nodeName.toLowerCase();
                    if (-1 !== s.indexOf(h))
                        for (var p = [].slice.call(d.attributes), u = [].concat(t["*"] || [], t[h] || []), f = 0, m = p.length; f < m; f++) {
                            var v = p[f];
                            o(v, u) || d.removeAttribute(v.nodeName)
                        } else d.parentNode.removeChild(d)
                }
        }
        "classList" in document.createElement("_") || function(t) {
            if ("Element" in t) {
                var i = "classList",
                    s = "prototype",
                    n = t.Element[s],
                    o = Object,
                    r = function() {
                        var t = e(this);
                        return {
                            add: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), t.addClass(e)
                            },
                            remove: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), t.removeClass(e)
                            },
                            toggle: function(e, i) {
                                return t.toggleClass(e, i)
                            },
                            contains: function(e) {
                                return t.hasClass(e)
                            }
                        }
                    };
                if (o.defineProperty) {
                    var l = {
                        get: r,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        o.defineProperty(n, i, l)
                    } catch (t) {
                        void 0 !== t.number && -2146823252 !== t.number || (l.enumerable = !1, o.defineProperty(n, i, l))
                    }
                } else o[s].__defineGetter__ && n.__defineGetter__(i, r)
            }
        }(window);
        var l, a, c, d = document.createElement("_");
        if (d.classList.add("c1", "c2"), !d.classList.contains("c2")) {
            var h = DOMTokenList.prototype.add,
                p = DOMTokenList.prototype.remove;
            DOMTokenList.prototype.add = function() {
                Array.prototype.forEach.call(arguments, h.bind(this))
            }, DOMTokenList.prototype.remove = function() {
                Array.prototype.forEach.call(arguments, p.bind(this))
            }
        }
        if (d.classList.toggle("c3", !1), d.classList.contains("c3")) {
            var u = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : u.call(this, e)
            }
        }

        function f(e, t) {
            var i, s = e.selectedOptions,
                n = [];
            if (t) {
                for (var o = 0, r = s.length; o < r; o++)(i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i);
                return n
            }
            return s
        }

        function m(e, t) {
            for (var i, s = [], n = t || e.selectedOptions, o = 0, r = n.length; o < r; o++)(i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value || i.text);
            return e.multiple ? s : s.length ? s[0] : null
        }
        d = null, String.prototype.startsWith || (l = function() {
            try {
                var e = {},
                    t = Object.defineProperty,
                    i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(), a = {}.toString, c = function(e) {
            if (null == this) throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == a.call(e)) throw new TypeError;
            var i = t.length,
                s = String(e),
                n = s.length,
                o = 1 < arguments.length ? arguments[1] : void 0,
                r = o ? Number(o) : 0;
            r != r && (r = 0);
            var l = Math.min(Math.max(r, 0), i);
            if (i < n + l) return !1;
            for (var c = -1; ++c < n;)
                if (t.charCodeAt(l + c) != s.charCodeAt(c)) return !1;
            return !0
        }, l ? l(String.prototype, "startsWith", {
            value: c,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = c), Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
            get: function() {
                return this.querySelectorAll(":checked")
            }
        });
        var v = {
            useDefault: !1,
            _set: e.valHooks.select.set
        };
        e.valHooks.select.set = function(t, i) {
            return i && !v.useDefault && e(t).data("selected", !0), v._set.apply(this, arguments)
        };
        var g = null,
            b = function() {
                try {
                    return new Event("change"), !0
                } catch (e) {
                    return !1
                }
            }();

        function w(e, t, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
                var l = n[r],
                    a = e[l];
                if (a && (a = a.toString(), "display" === l && (a = a.replace(/<[^>]+>/g, "")), s && (a = S(a)), a = a.toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break
            }
            return o
        }

        function I(e) {
            return parseInt(e, 10) || 0
        }
        e.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (b ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e)
        };
        var x = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            },
            k = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            $ = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

        function y(e) {
            return x[e]
        }

        function S(e) {
            return (e = e.toString()) && e.replace(k, y).replace($, "")
        }
        var E, C, O, z, T, A = (E = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, C = function(e) {
                return E[e]
            }, O = "(?:" + Object.keys(E).join("|") + ")", z = RegExp(O), T = RegExp(O, "g"), function(e) {
                return e = null == e ? "" : "" + e, z.test(e) ? e.replace(T, C) : e
            }),
            L = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            },
            N = {
                success: !1,
                major: "3"
            };
        try {
            N.full = (e.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), N.major = N.full[0], N.success = !0
        } catch (e) {}
        var D = 0,
            H = ".bs.select",
            P = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title",
                ICONBASE: "glyphicon",
                TICKICON: "glyphicon-ok"
            },
            W = {
                MENU: "." + P.MENU
            },
            B = {
                span: document.createElement("span"),
                i: document.createElement("i"),
                subtext: document.createElement("small"),
                a: document.createElement("a"),
                li: document.createElement("li"),
                whitespace: document.createTextNode(" "),
                fragment: document.createDocumentFragment()
            };
        B.a.setAttribute("role", "option"), B.subtext.className = "text-muted", B.text = B.span.cloneNode(!1), B.text.className = "text", B.checkMark = B.span.cloneNode(!1);
        var M = new RegExp("38|40"),
            R = new RegExp("^9$|27"),
            U = function(e, t, i) {
                var s = B.li.cloneNode(!1);
                return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s
            },
            j = function(e, t) {
                var i, s, n = B.text.cloneNode(!1);
                if (e.content) n.innerHTML = e.content;
                else {
                    if (n.textContent = e.text, e.icon) {
                        var o = B.whitespace.cloneNode(!1);
                        (s = (!0 === t ? B.i : B.span).cloneNode(!1)).className = e.iconBase + " " + e.icon, B.fragment.appendChild(s), B.fragment.appendChild(o)
                    }
                    e.subtext && ((i = B.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(i))
                }
                if (!0 === t)
                    for (; 0 < n.childNodes.length;) B.fragment.appendChild(n.childNodes[0]);
                else B.fragment.appendChild(n);
                return B.fragment
            },
            V = function(t, i) {
                var s = this;
                v.useDefault || (e.valHooks.select.set = v._set, v.useDefault = !0), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.options = i, this.selectpicker = {
                    main: {},
                    search: {},
                    current: {},
                    view: {},
                    keydown: {
                        keyHistory: "",
                        resetKeyHistory: {
                            start: function() {
                                return setTimeout((function() {
                                    s.selectpicker.keydown.keyHistory = ""
                                }), 800)
                            }
                        }
                    }
                }, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var n = this.options.windowPadding;
                "number" == typeof n && (this.options.windowPadding = [n, n, n, n]), this.val = V.prototype.val, this.render = V.prototype.render, this.refresh = V.prototype.refresh, this.setStyle = V.prototype.setStyle, this.selectAll = V.prototype.selectAll, this.deselectAll = V.prototype.deselectAll, this.destroy = V.prototype.destroy, this.remove = V.prototype.remove, this.show = V.prototype.show, this.hide = V.prototype.hide, this.init()
            };

        function F(i) {
            var s, n = arguments,
                o = i;
            if ([].shift.apply(n), !N.success) {
                try {
                    N.full = (e.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (i) {
                    V.BootstrapVersion ? N.full = V.BootstrapVersion.split(" ")[0].split(".") : (N.full = [N.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", i))
                }
                N.major = N.full[0], N.success = !0
            }
            if ("4" === N.major) {
                var r = [];
                V.DEFAULTS.style === P.BUTTONCLASS && r.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }), V.DEFAULTS.iconBase === P.ICONBASE && r.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }), V.DEFAULTS.tickIcon === P.TICKICON && r.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }), P.DIVIDER = "dropdown-divider", P.SHOW = "show", P.BUTTONCLASS = "btn-light", P.POPOVERHEADER = "popover-header", P.ICONBASE = "", P.TICKICON = "bs-ok-default";
                for (var l = 0; l < r.length; l++) i = r[l], V.DEFAULTS[i.name] = P[i.className]
            }
            var a = this.each((function() {
                var i = e(this);
                if (i.is("select")) {
                    var r = i.data("selectpicker"),
                        l = "object" == typeof o && o;
                    if (r) {
                        if (l)
                            for (var a in l) l.hasOwnProperty(a) && (r.options[a] = l[a])
                    } else {
                        var c = i.data();
                        for (var d in c) c.hasOwnProperty(d) && -1 !== e.inArray(d, t) && delete c[d];
                        var h = e.extend({}, V.DEFAULTS, e.fn.selectpicker.defaults || {}, c, l);
                        h.template = e.extend({}, V.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, c.template, l.template), i.data("selectpicker", r = new V(this, h))
                    }
                    "string" == typeof o && (s = r[o] instanceof Function ? r[o].apply(r, n) : r.options[o])
                }
            }));
            return void 0 !== s ? s : a
        }
        V.VERSION = "1.13.11", V.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: P.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: P.ICONBASE,
            tickIcon: P.TICKICON,
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        }, V.prototype = {
            constructor: V,
            init: function() {
                var e = this,
                    t = this.$element.attr("id");
                D++, this.selectId = "bs-select-" + D, this.$element[0].classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$element[0].classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(W.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element[0].classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(P.MENURIGHT), void 0 !== t && this.$button.attr("data-id", t), this.checkDisabled(), this.clickListener(), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + H, (function() {
                    if (e.isVirtual()) {
                        var t = e.$menuInner[0],
                            i = t.firstChild.cloneNode(!1);
                        t.replaceChild(i, t.firstChild), t.scrollTop = 0
                    }
                })), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(t) {
                        e.$element.trigger("hide" + H, t)
                    },
                    "hidden.bs.dropdown": function(t) {
                        e.$element.trigger("hidden" + H, t)
                    },
                    "show.bs.dropdown": function(t) {
                        e.$element.trigger("show" + H, t)
                    },
                    "shown.bs.dropdown": function(t) {
                        e.$element.trigger("shown" + H, t)
                    }
                }), e.$element[0].hasAttribute("required") && this.$element.on("invalid" + H, (function() {
                    e.$button[0].classList.add("bs-invalid"), e.$element.on("shown" + H + ".invalid", (function() {
                        e.$element.val(e.$element.val()).off("shown" + H + ".invalid")
                    })).on("rendered" + H, (function() {
                        this.validity.valid && e.$button[0].classList.remove("bs-invalid"), e.$element.off("rendered" + H)
                    })), e.$button.on("blur" + H, (function() {
                        e.$element.trigger("focus").trigger("blur"), e.$button.off("blur" + H)
                    }))
                })), setTimeout((function() {
                    e.createLi(), e.$element.trigger("loaded" + H)
                }))
            },
            createDropdown: function() {
                var t = this.multiple || this.options.showTick ? " show-tick" : "",
                    i = this.multiple ? ' aria-multiselectable="true"' : "",
                    s = "",
                    n = this.autofocus ? " autofocus" : "";
                N.major < 4 && this.$element.parent().hasClass("input-group") && (s = " input-group-btn");
                var o, r = "",
                    l = "",
                    a = "",
                    c = "";
                return this.options.header && (r = '<div class="' + P.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (l = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + A(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (a = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + P.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + P.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (c = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + P.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), o = '<div class="dropdown bootstrap-select' + t + s + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + n + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === N.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + P.MENU + " " + ("4" === N.major ? "" : P.SHOW) + '">' + r + l + a + '<div class="inner ' + P.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + i + '><ul class="' + P.MENU + " inner " + ("4" === N.major ? P.SHOW : "") + '" role="presentation"></ul></div>' + c + "</div></div>", e(o)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = this.selectpicker.view.size = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e],
                        i = !0;
                    "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(t, i, s) {
                var n, o, l = this,
                    a = 0,
                    c = [];
                if (this.selectpicker.current = t ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), i)
                    if (s) a = this.$menuInner[0].scrollTop;
                    else if (!l.multiple) {
                    var d = l.$element[0],
                        h = (d.options[d.selectedIndex] || {}).liIndex;
                    if ("number" == typeof h && !1 !== l.options.size) {
                        var p = l.selectpicker.main.data[h],
                            u = p && p.position;
                        u && (a = u - (l.sizeInfo.menuInnerHeight + l.sizeInfo.liHeight) / 2)
                    }
                }

                function f(e, i) {
                    var s, a, d, h, p, u, f, m, v, g, b = l.selectpicker.current.elements.length,
                        w = [],
                        I = !0,
                        x = l.isVirtual();
                    l.selectpicker.view.scrollTop = e, s = Math.ceil(l.sizeInfo.menuInnerHeight / l.sizeInfo.liHeight * 1.5), a = Math.round(b / s) || 1;
                    for (var k = 0; k < a; k++) {
                        var $ = (k + 1) * s;
                        if (k === a - 1 && ($ = b), w[k] = [k * s + (k ? 1 : 0), $], !b) break;
                        void 0 === p && e - 1 <= l.selectpicker.current.data[$ - 1].position - l.sizeInfo.menuInnerHeight && (p = k)
                    }
                    if (void 0 === p && (p = 0), u = [l.selectpicker.view.position0, l.selectpicker.view.position1], d = Math.max(0, p - 1), h = Math.min(a - 1, p + 1), l.selectpicker.view.position0 = !1 === x ? 0 : Math.max(0, w[d][0]) || 0, l.selectpicker.view.position1 = !1 === x ? b : Math.min(b, w[h][1]) || 0, f = u[0] !== l.selectpicker.view.position0 || u[1] !== l.selectpicker.view.position1, void 0 !== l.activeIndex && (o = l.selectpicker.main.elements[l.prevActiveIndex], c = l.selectpicker.main.elements[l.activeIndex], n = l.selectpicker.main.elements[l.selectedIndex], i && (l.activeIndex !== l.selectedIndex && l.defocusItem(c), l.activeIndex = void 0), l.activeIndex && l.activeIndex !== l.selectedIndex && l.defocusItem(n)), void 0 !== l.prevActiveIndex && l.prevActiveIndex !== l.activeIndex && l.prevActiveIndex !== l.selectedIndex && l.defocusItem(o), (i || f) && (m = l.selectpicker.view.visibleElements ? l.selectpicker.view.visibleElements.slice() : [], l.selectpicker.view.visibleElements = !1 === x ? l.selectpicker.current.elements : l.selectpicker.current.elements.slice(l.selectpicker.view.position0, l.selectpicker.view.position1), l.setOptionStatus(), (t || !1 === x && i) && (v = m, g = l.selectpicker.view.visibleElements, I = !(v.length === g.length && v.every((function(e, t) {
                            return e === g[t]
                        })))), (i || !0 === x) && I)) {
                        var y, S, E = l.$menuInner[0],
                            C = document.createDocumentFragment(),
                            O = E.firstChild.cloneNode(!1),
                            z = l.selectpicker.view.visibleElements,
                            T = [];
                        E.replaceChild(O, E.firstChild), k = 0;
                        for (var A = z.length; k < A; k++) {
                            var L, N, D = z[k];
                            l.options.sanitize && (L = D.lastChild) && (N = l.selectpicker.current.data[k + l.selectpicker.view.position0]) && N.content && !N.sanitized && (T.push(L), N.sanitized = !0), C.appendChild(D)
                        }
                        if (l.options.sanitize && T.length && r(T, l.options.whiteList, l.options.sanitizeFn), E.firstChild.style.marginBottom = !0 === x ? (y = 0 === l.selectpicker.view.position0 ? 0 : l.selectpicker.current.data[l.selectpicker.view.position0 - 1].position, S = l.selectpicker.view.position1 > b - 1 ? 0 : l.selectpicker.current.data[b - 1].position - l.selectpicker.current.data[l.selectpicker.view.position1 - 1].position, E.firstChild.style.marginTop = y + "px", S + "px") : E.firstChild.style.marginTop = 0, E.firstChild.appendChild(C), !0 === x && l.sizeInfo.hasScrollBar) {
                            var H = E.firstChild.offsetWidth;
                            if (i && H < l.sizeInfo.menuInnerInnerWidth && l.sizeInfo.totalMenuWidth > l.sizeInfo.selectWidth) E.firstChild.style.minWidth = l.sizeInfo.menuInnerInnerWidth + "px";
                            else if (H > l.sizeInfo.menuInnerInnerWidth) {
                                l.$menu[0].style.minWidth = 0;
                                var P = E.firstChild.offsetWidth;
                                P > l.sizeInfo.menuInnerInnerWidth && (l.sizeInfo.menuInnerInnerWidth = P, E.firstChild.style.minWidth = l.sizeInfo.menuInnerInnerWidth + "px"), l.$menu[0].style.minWidth = ""
                            }
                        }
                    }
                    if (l.prevActiveIndex = l.activeIndex, l.options.liveSearch) {
                        if (t && i) {
                            var W, B = 0;
                            l.selectpicker.view.canHighlight[B] || (B = 1 + l.selectpicker.view.canHighlight.slice(1).indexOf(!0)), W = l.selectpicker.view.visibleElements[B], l.defocusItem(l.selectpicker.view.currentActive), l.activeIndex = (l.selectpicker.current.data[B] || {}).index, l.focusItem(W)
                        }
                    } else l.$menuInner.trigger("focus")
                }
                f(a, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", (function(e, t) {
                    l.noScroll || f(this.scrollTop, t), l.noScroll = !1
                })), e(window).off("resize" + H + "." + this.selectId + ".createView").on("resize" + H + "." + this.selectId + ".createView", (function() {
                    l.$newElement.hasClass(P.SHOW) && f(l.$menuInner[0].scrollTop)
                }))
            },
            focusItem: function(e, t, i) {
                if (e) {
                    t = t || this.selectpicker.main.data[this.activeIndex];
                    var s = e.firstChild;
                    s && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active")))
                }
            },
            defocusItem: function(e) {
                e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active"))
            },
            setPlaceholder: function() {
                var t = !1;
                if (this.options.title && !this.multiple) {
                    this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), t = !0;
                    var i = this.$element[0],
                        s = !1,
                        n = !this.selectpicker.view.titleOption.parentNode;
                    n && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", s = void 0 === e(i.options[i.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected")), (n || 0 !== this.selectpicker.view.titleOption.index) && i.insertBefore(this.selectpicker.view.titleOption, i.firstChild), s && (i.selectedIndex = 0)
                }
                return t
            },
            createLi: function() {
                var e = this,
                    t = this.options.iconBase,
                    i = ':not([hidden]):not([data-hidden="true"])',
                    s = [],
                    n = [],
                    o = 0,
                    r = 0,
                    l = this.setPlaceholder() ? 1 : 0;
                this.options.hideDisabled && (i += ":not(:disabled)"), !e.options.showTick && !e.multiple || B.checkMark.parentNode || (B.checkMark.className = t + " " + e.options.tickIcon + " check-mark", B.a.appendChild(B.checkMark));
                var a = this.$element[0].querySelectorAll("select > *" + i);

                function c(e) {
                    var t = n[n.length - 1];
                    t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", s.push(U(!1, P.DIVIDER, e.optID ? e.optID + "div" : void 0)), n.push(e))
                }

                function d(i, r) {
                    if ((r = r || {}).divider = "true" === i.getAttribute("data-divider"), r.divider) c({
                        optID: r.optID
                    });
                    else {
                        var l = n.length,
                            a = i.style.cssText,
                            d = a ? A(a) : "",
                            h = (i.className || "") + (r.optgroupClass || "");
                        r.optID && (h = "opt " + h), r.text = i.textContent, r.content = i.getAttribute("data-content"), r.tokens = i.getAttribute("data-tokens"), r.subtext = i.getAttribute("data-subtext"), r.icon = i.getAttribute("data-icon"), r.iconBase = t;
                        var p = j(r),
                            u = U(function(e, t, i) {
                                var s = B.a.cloneNode(!0);
                                return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && (s.className = t), "4" === N.major && s.classList.add("dropdown-item"), i && s.setAttribute("style", i), s
                            }(p, h, d), "", r.optID);
                        u.firstChild && (u.firstChild.id = e.selectId + "-" + l), s.push(u), i.liIndex = l, r.display = r.content || r.text, r.type = "option", r.index = l, r.option = i, r.disabled = r.disabled || i.disabled, n.push(r);
                        var f = 0;
                        r.display && (f += r.display.length), r.subtext && (f += r.subtext.length), r.icon && (f += 1), o < f && (o = f, e.selectpicker.view.widestOption = s[s.length - 1])
                    }
                }

                function h(e, o) {
                    var l = o[e],
                        a = o[e - 1],
                        h = o[e + 1],
                        p = l.querySelectorAll("option" + i);
                    if (p.length) {
                        var u, f, m = {
                                label: A(l.label),
                                subtext: l.getAttribute("data-subtext"),
                                icon: l.getAttribute("data-icon"),
                                iconBase: t
                            },
                            v = " " + (l.className || "");
                        r++, a && c({
                            optID: r
                        });
                        var g = function(e) {
                            var t, i, s = B.text.cloneNode(!1);
                            if (s.innerHTML = e.label, e.icon) {
                                var n = B.whitespace.cloneNode(!1);
                                (i = B.span.cloneNode(!1)).className = e.iconBase + " " + e.icon, B.fragment.appendChild(i), B.fragment.appendChild(n)
                            }
                            return e.subtext && ((t = B.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(t)), B.fragment.appendChild(s), B.fragment
                        }(m);
                        s.push(U(g, "dropdown-header" + v, r)), n.push({
                            display: m.label,
                            subtext: m.subtext,
                            type: "optgroup-label",
                            optID: r
                        });
                        for (var b = 0, w = p.length; b < w; b++) {
                            var I = p[b];
                            0 === b && (f = (u = n.length - 1) + w), d(I, {
                                headerIndex: u,
                                lastIndex: f,
                                optID: r,
                                optgroupClass: v,
                                disabled: l.disabled
                            })
                        }
                        h && c({
                            optID: r
                        })
                    }
                }
                for (var p = a.length; l < p; l++) {
                    var u = a[l];
                    "OPTGROUP" !== u.tagName ? d(u, {}) : h(l, a)
                }
                this.selectpicker.main.elements = s, this.selectpicker.main.data = n, this.selectpicker.current = this.selectpicker.main
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                this.setPlaceholder();
                var e, t, i = this,
                    s = this.$element[0],
                    n = f(s, this.options.hideDisabled),
                    o = n.length,
                    l = this.$button[0],
                    a = l.querySelector(".filter-option-inner-inner"),
                    c = document.createTextNode(this.options.multipleSeparator),
                    d = B.fragment.cloneNode(!1),
                    h = !1;
                if (l.classList.toggle("bs-placeholder", i.multiple ? !o : !m(s, n)), this.tabIndex(), "static" === this.options.selectedTextFormat) d = j({
                    text: this.options.title
                }, !0);
                else if ((e = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < o) && (e = 1 < (t = this.options.selectedTextFormat.split(">")).length && o > t[1] || 1 === t.length && 2 <= o), !1 === e) {
                    for (var p = 0; p < o && p < 50; p++) {
                        var u = n[p],
                            v = {},
                            g = {
                                content: u.getAttribute("data-content"),
                                subtext: u.getAttribute("data-subtext"),
                                icon: u.getAttribute("data-icon")
                            };
                        this.multiple && 0 < p && d.appendChild(c.cloneNode(!1)), u.title ? v.text = u.title : g.content && i.options.showContent ? (v.content = g.content.toString(), h = !0) : (i.options.showIcon && (v.icon = g.icon, v.iconBase = this.options.iconBase), i.options.showSubtext && !i.multiple && g.subtext && (v.subtext = " " + g.subtext), v.text = u.textContent.trim()), d.appendChild(j(v, !0))
                    }
                    49 < o && d.appendChild(document.createTextNode("..."))
                } else {
                    var b = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                    this.options.hideDisabled && (b += ":not(:disabled)");
                    var w = this.$element[0].querySelectorAll("select > option" + b + ", optgroup" + b + " option" + b).length,
                        I = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, w) : this.options.countSelectedText;
                    d = j({
                        text: I.replace("{0}", o.toString()).replace("{1}", w.toString())
                    }, !0)
                }
                if (null == this.options.title && (this.options.title = this.$element.attr("title")), d.childNodes.length || (d = j({
                        text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText
                    }, !0)), l.title = d.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && h && r([d], i.options.whiteList, i.options.sanitizeFn), a.innerHTML = "", a.appendChild(d), N.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
                    var x = l.querySelector(".filter-expand"),
                        k = a.cloneNode(!0);
                    k.className = "filter-expand", x ? l.replaceChild(k, x) : l.appendChild(k)
                }
                this.$element.trigger("rendered" + H)
            },
            setStyle: function(e, t) {
                var i, s = this.$button[0],
                    n = this.$newElement[0],
                    o = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), N.major < 4 && (n.classList.add("bs3"), n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")), i = e ? e.trim() : o, "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")), i && s.classList.add.apply(s.classList, i.split(" ")))
            },
            liHeight: function(t) {
                if (t || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var i = document.createElement("div"),
                        s = document.createElement("div"),
                        n = document.createElement("div"),
                        o = document.createElement("ul"),
                        r = document.createElement("li"),
                        l = document.createElement("li"),
                        a = document.createElement("li"),
                        c = document.createElement("a"),
                        d = document.createElement("span"),
                        h = this.options.header && 0 < this.$menu.find("." + P.POPOVERHEADER).length ? this.$menu.find("." + P.POPOVERHEADER)[0].cloneNode(!0) : null,
                        p = this.options.liveSearch ? document.createElement("div") : null,
                        u = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        f = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                        m = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, d.className = "text", c.className = "dropdown-item " + (m ? m.className : ""), i.className = this.$menu[0].parentNode.className + " " + P.SHOW, "auto" === this.options.width && (s.style.minWidth = 0), s.className = P.MENU + " " + P.SHOW, n.className = "inner " + P.SHOW, o.className = P.MENU + " inner " + ("4" === N.major ? P.SHOW : ""), r.className = P.DIVIDER, l.className = "dropdown-header", d.appendChild(document.createTextNode("​")), c.appendChild(d), a.appendChild(c), l.appendChild(d.cloneNode(!0)), this.selectpicker.view.widestOption && o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), o.appendChild(a), o.appendChild(r), o.appendChild(l), h && s.appendChild(h), p) {
                        var v = document.createElement("input");
                        p.className = "bs-searchbox", v.className = "form-control", p.appendChild(v), s.appendChild(p)
                    }
                    u && s.appendChild(u), n.appendChild(o), s.appendChild(n), f && s.appendChild(f), i.appendChild(s), document.body.appendChild(i);
                    var g, b = a.offsetHeight,
                        w = l ? l.offsetHeight : 0,
                        x = h ? h.offsetHeight : 0,
                        k = p ? p.offsetHeight : 0,
                        $ = u ? u.offsetHeight : 0,
                        y = f ? f.offsetHeight : 0,
                        S = e(r).outerHeight(!0),
                        E = !!window.getComputedStyle && window.getComputedStyle(s),
                        C = s.offsetWidth,
                        O = E ? null : e(s),
                        z = {
                            vert: I(E ? E.paddingTop : O.css("paddingTop")) + I(E ? E.paddingBottom : O.css("paddingBottom")) + I(E ? E.borderTopWidth : O.css("borderTopWidth")) + I(E ? E.borderBottomWidth : O.css("borderBottomWidth")),
                            horiz: I(E ? E.paddingLeft : O.css("paddingLeft")) + I(E ? E.paddingRight : O.css("paddingRight")) + I(E ? E.borderLeftWidth : O.css("borderLeftWidth")) + I(E ? E.borderRightWidth : O.css("borderRightWidth"))
                        },
                        T = {
                            vert: z.vert + I(E ? E.marginTop : O.css("marginTop")) + I(E ? E.marginBottom : O.css("marginBottom")) + 2,
                            horiz: z.horiz + I(E ? E.marginLeft : O.css("marginLeft")) + I(E ? E.marginRight : O.css("marginRight")) + 2
                        };
                    n.style.overflowY = "scroll", g = s.offsetWidth - C, document.body.removeChild(i), this.sizeInfo.liHeight = b, this.sizeInfo.dropdownHeaderHeight = w, this.sizeInfo.headerHeight = x, this.sizeInfo.searchHeight = k, this.sizeInfo.actionsHeight = $, this.sizeInfo.doneButtonHeight = y, this.sizeInfo.dividerHeight = S, this.sizeInfo.menuPadding = z, this.sizeInfo.menuExtras = T, this.sizeInfo.menuWidth = C, this.sizeInfo.menuInnerInnerWidth = C - z.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = g, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var t, i = e(window),
                    s = this.$newElement.offset(),
                    n = e(this.options.container);
                this.options.container && n.length && !n.is("body") ? ((t = n.offset()).top += parseInt(n.css("borderTopWidth")), t.left += parseInt(n.css("borderLeftWidth"))) : t = {
                    top: 0,
                    left: 0
                };
                var o = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = s.top - t.top - i.scrollTop(), this.sizeInfo.selectOffsetBot = i.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - t.top - o[2], this.sizeInfo.selectOffsetLeft = s.left - t.left - i.scrollLeft(), this.sizeInfo.selectOffsetRight = i.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - t.left - o[1], this.sizeInfo.selectOffsetTop -= o[0], this.sizeInfo.selectOffsetLeft -= o[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, s, n, o, r, l, a = this.sizeInfo.selectWidth,
                    c = this.sizeInfo.liHeight,
                    d = this.sizeInfo.headerHeight,
                    h = this.sizeInfo.searchHeight,
                    p = this.sizeInfo.actionsHeight,
                    u = this.sizeInfo.doneButtonHeight,
                    f = this.sizeInfo.dividerHeight,
                    m = this.sizeInfo.menuPadding,
                    v = 0;
                if (this.options.dropupAuto && (l = c * this.selectpicker.current.elements.length + m.vert, this.$newElement.toggleClass(P.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)), "auto" === this.options.size) n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + d + h + p + u, r = Math.max(n - m.vert, 0), this.$newElement.hasClass(P.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++) "divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = c * this.options.size + v * f + m.vert) - m.vert, o = i + d + h + p + u, s = r = ""
                }
                this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }), this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": r + "px"
                }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(P.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(t) {
                if (this.liHeight(t), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var i = this,
                        s = e(window);
                    this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", (function() {
                        return i.setMenuSize()
                    })), "auto" === this.options.size ? s.off("resize" + H + "." + this.selectId + ".setMenuSize scroll" + H + "." + this.selectId + ".setMenuSize").on("resize" + H + "." + this.selectId + ".setMenuSize scroll" + H + "." + this.selectId + ".setMenuSize", (function() {
                        return i.setMenuSize()
                    })) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && s.off("resize" + H + "." + this.selectId + ".setMenuSize scroll" + H + "." + this.selectId + ".setMenuSize"), i.createView(!1, !0, t)
                }
            },
            setWidth: function() {
                var e = this;
                "auto" === this.options.width ? requestAnimationFrame((function() {
                    e.$menu.css("min-width", "0"), e.$element.on("loaded" + H, (function() {
                        e.liHeight(), e.setMenuSize();
                        var t = e.$newElement.clone().appendTo("body"),
                            i = t.css("width", "auto").children("button").outerWidth();
                        t.remove(), e.sizeInfo.selectWidth = Math.max(e.sizeInfo.totalMenuWidth, i), e.$newElement.css("width", e.sizeInfo.selectWidth + "px")
                    }))
                })) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, i, s, n = this,
                    o = e(this.options.container),
                    r = function(r) {
                        var l = {},
                            a = n.options.display || !!e.fn.dropdown.Constructor.Default && e.fn.dropdown.Constructor.Default.display;
                        n.$bsContainer.addClass(r.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(P.DROPUP, r.hasClass(P.DROPUP)), t = r.offset(), o.is("body") ? i = {
                            top: 0,
                            left: 0
                        } : ((i = o.offset()).top += parseInt(o.css("borderTopWidth")) - o.scrollTop(), i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()), s = r.hasClass(P.DROPUP) ? 0 : r[0].offsetHeight, (N.major < 4 || "static" === a) && (l.top = t.top - i.top + s, l.left = t.left - i.left), l.width = r[0].offsetWidth, n.$bsContainer.css(l)
                    };
                this.$button.on("click.bs.dropdown.data-api", (function() {
                    n.isDisabled() || (r(n.$newElement), n.$bsContainer.appendTo(n.options.container).toggleClass(P.SHOW, !n.$button.hasClass(P.SHOW)).append(n.$menu))
                })), e(window).off("resize" + H + "." + this.selectId + " scroll" + H + "." + this.selectId).on("resize" + H + "." + this.selectId + " scroll" + H + "." + this.selectId, (function() {
                    n.$newElement.hasClass(P.SHOW) && r(n.$newElement)
                })), this.$element.on("hide" + H, (function() {
                    n.$menu.data("height", n.$menu.height()), n.$bsContainer.detach()
                }))
            },
            setOptionStatus: function(e) {
                var t = this;
                if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length)
                    for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
                        var s = t.selectpicker.current.data[i + t.selectpicker.view.position0],
                            n = s.option;
                        n && (!0 !== e && t.setDisabled(s.index, s.disabled), t.setSelected(s.index, n.selected))
                    }
            },
            setSelected: function(e, t) {
                var i, s, n = this.selectpicker.main.elements[e],
                    o = this.selectpicker.main.data[e],
                    r = void 0 !== this.activeIndex,
                    l = this.activeIndex === e || t && !this.multiple && !r;
                o.selected = t, s = n.firstChild, t && (this.selectedIndex = e), n.classList.toggle("selected", t), l ? (this.focusItem(n, o), this.selectpicker.view.currentActive = n, this.activeIndex = e) : this.defocusItem(n), s && (s.classList.toggle("selected", t), t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")), l || r || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(i))
            },
            setDisabled: function(e, t) {
                var i, s = this.selectpicker.main.elements[e];
                this.selectpicker.main.data[e].disabled = t, i = s.firstChild, s.classList.toggle(P.DISABLED, t), i && ("4" === N.major && i.classList.toggle(P.DISABLED, t), t ? (i.setAttribute("aria-disabled", t), i.setAttribute("tabindex", -1)) : (i.removeAttribute("aria-disabled"), i.setAttribute("tabindex", 0)))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement[0].classList.add(P.DISABLED), this.$button.addClass(P.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button[0].classList.contains(P.DISABLED) && (this.$newElement[0].classList.remove(P.DISABLED), this.$button.removeClass(P.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.on("click", (function() {
                    return !e.isDisabled()
                }))
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this,
                    i = e(document);

                function s() {
                    t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$menuInner.trigger("focus")
                }

                function n() {
                    t.dropdown && t.dropdown._popper && t.dropdown._popper.state.isCreated ? s() : requestAnimationFrame(n)
                }
                i.data("spaceSelect", !1), this.$button.on("keyup", (function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1))
                })), this.$newElement.on("show.bs.dropdown", (function() {
                    3 < N.major && !t.dropdown && (t.dropdown = t.$button.data("bs.dropdown"), t.dropdown._menu = t.$menu[0])
                })), this.$button.on("click.bs.dropdown.data-api", (function() {
                    t.$newElement.hasClass(P.SHOW) || t.setSize()
                })), this.$element.on("shown" + H, (function() {
                    t.$menuInner[0].scrollTop !== t.selectpicker.view.scrollTop && (t.$menuInner[0].scrollTop = t.selectpicker.view.scrollTop), 3 < N.major ? requestAnimationFrame(n) : s()
                })), this.$menuInner.on("mouseenter", "li a", (function(e) {
                    var i = this.parentElement,
                        s = t.isVirtual() ? t.selectpicker.view.position0 : 0,
                        n = Array.prototype.indexOf.call(i.parentElement.children, i),
                        o = t.selectpicker.current.data[n + s];
                    t.focusItem(i, o, !0)
                })), this.$menuInner.on("click", "li a", (function(i, s) {
                    var n = e(this),
                        o = t.$element[0],
                        r = t.isVirtual() ? t.selectpicker.view.position0 : 0,
                        l = t.selectpicker.current.data[n.parent().index() + r],
                        a = l.index,
                        c = m(o),
                        d = o.selectedIndex,
                        h = o.options[d],
                        p = !0;
                    if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass(P.DISABLED)) {
                        var u = l.option,
                            v = e(u),
                            b = u.selected,
                            w = v.parent("optgroup"),
                            I = w.find("option"),
                            x = t.options.maxOptions,
                            k = w.data("maxOptions") || !1;
                        if (a === t.activeIndex && (s = !0), s || (t.prevActiveIndex = t.activeIndex, t.activeIndex = void 0), t.multiple) {
                            if (u.selected = !b, t.setSelected(a, !b), n.trigger("blur"), !1 !== x || !1 !== k) {
                                var $ = x < f(o).length,
                                    y = k < w.find("option:selected").length;
                                if (x && $ || k && y)
                                    if (x && 1 == x) o.selectedIndex = -1, u.selected = !0, t.setOptionStatus(!0);
                                    else if (k && 1 == k) {
                                    for (var S = 0; S < I.length; S++) {
                                        var E = I[S];
                                        E.selected = !1, t.setSelected(E.liIndex, !1)
                                    }
                                    u.selected = !0, t.setSelected(a, !0)
                                } else {
                                    var C = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
                                        O = "function" == typeof C ? C(x, k) : C,
                                        z = O[0].replace("{n}", x),
                                        T = O[1].replace("{n}", k),
                                        A = e('<div class="notify"></div>');
                                    O[2] && (z = z.replace("{var}", O[2][1 < x ? 0 : 1]), T = T.replace("{var}", O[2][1 < k ? 0 : 1])), u.selected = !1, t.$menu.append(A), x && $ && (A.append(e("<div>" + z + "</div>")), p = !1, t.$element.trigger("maxReached" + H)), k && y && (A.append(e("<div>" + T + "</div>")), p = !1, t.$element.trigger("maxReachedGrp" + H)), setTimeout((function() {
                                        t.setSelected(a, !1)
                                    }), 10), A[0].classList.add("fadeOut"), setTimeout((function() {
                                        A.remove()
                                    }), 1050)
                                }
                            }
                        } else h && (h.selected = !1), u.selected = !0, t.setSelected(a, !0);
                        !t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.trigger("focus") : t.options.liveSearch && t.$searchbox.trigger("focus"), p && (t.multiple || d !== o.selectedIndex) && (g = [u.index, v.prop("selected"), c], t.$element.triggerNative("change"))
                    }
                })), this.$menu.on("click", "li." + P.DISABLED + " a, ." + P.POPOVERHEADER + ", ." + P.POPOVERHEADER + " :not(.close)", (function(i) {
                    i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"))
                })), this.$menuInner.on("click", ".divider, .dropdown-header", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus")
                })), this.$menu.on("click", "." + P.POPOVERHEADER + " .close", (function() {
                    t.$button.trigger("click")
                })), this.$searchbox.on("click", (function(e) {
                    e.stopPropagation()
                })), this.$menu.on("click", ".actions-btn", (function(i) {
                    t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"), i.preventDefault(), i.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
                })), this.$element.on("change" + H, (function() {
                    t.render(), t.$element.trigger("changed" + H, g), g = null
                })).on("focus" + H, (function() {
                    t.options.mobile || t.$button.trigger("focus")
                }))
            },
            liveSearchListener: function() {
                var e = this,
                    t = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api", (function() {
                    e.$searchbox.val() && e.$searchbox.val("")
                })), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", (function(e) {
                    e.stopPropagation()
                })), this.$searchbox.on("input propertychange", (function() {
                    var i = e.$searchbox.val();
                    if (e.selectpicker.search.elements = [], e.selectpicker.search.data = [], i) {
                        var s = [],
                            n = i.toUpperCase(),
                            o = {},
                            r = [],
                            l = e._searchStyle(),
                            a = e.options.liveSearchNormalize;
                        a && (n = S(n)), e._$lisSelected = e.$menuInner.find(".selected");
                        for (var c = 0; c < e.selectpicker.main.data.length; c++) {
                            var d = e.selectpicker.main.data[c];
                            o[c] || (o[c] = w(d, n, l, a)), o[c] && void 0 !== d.headerIndex && -1 === r.indexOf(d.headerIndex) && (0 < d.headerIndex && (o[d.headerIndex - 1] = !0, r.push(d.headerIndex - 1)), o[d.headerIndex] = !0, r.push(d.headerIndex), o[d.lastIndex + 1] = !0), o[c] && "optgroup-label" !== d.type && r.push(c)
                        }
                        c = 0;
                        for (var h = r.length; c < h; c++) {
                            var p = r[c],
                                u = r[c - 1],
                                f = (d = e.selectpicker.main.data[p], e.selectpicker.main.data[u]);
                            ("divider" !== d.type || "divider" === d.type && f && "divider" !== f.type && h - 1 !== c) && (e.selectpicker.search.data.push(d), s.push(e.selectpicker.main.elements[p]))
                        }
                        e.activeIndex = void 0, e.noScroll = !0, e.$menuInner.scrollTop(0), e.selectpicker.search.elements = s, e.createView(!0), s.length || (t.className = "no-results", t.innerHTML = e.options.noneResultsText.replace("{0}", '"' + A(i) + '"'), e.$menuInner[0].firstChild.appendChild(t))
                    } else e.$menuInner.scrollTop(0), e.createView(!1)
                }))
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                var t = this.$element[0];
                if (void 0 === e) return this.$element.val();
                var i = m(t);
                if (g = [null, null, i], this.$element.val(e).trigger("changed" + H, g), this.$newElement.hasClass(P.SHOW))
                    if (this.multiple) this.setOptionStatus(!0);
                    else {
                        var s = (t.options[t.selectedIndex] || {}).liIndex;
                        "number" == typeof s && (this.setSelected(this.selectedIndex, !1), this.setSelected(s, !0))
                    }
                return this.render(), g = null, this.$element
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element[0],
                        i = 0,
                        s = 0,
                        n = m(t);
                    t.classList.add("bs-select-hidden");
                    for (var o = 0, r = this.selectpicker.current.elements.length; o < r; o++) {
                        var l = this.selectpicker.current.data[o],
                            a = l.option;
                        a && !l.disabled && "divider" !== l.type && (l.selected && i++, (a.selected = e) && s++)
                    }
                    t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), g = [null, null, n], this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(t) {
                var i, s, n, o, r, l = e(this),
                    a = l.hasClass("dropdown-toggle"),
                    c = (a ? l.closest(".dropdown") : l.closest(W.MENU)).data("this"),
                    d = c.findLis(),
                    h = !1,
                    p = 9 === t.which && !a && !c.options.selectOnTab,
                    u = M.test(t.which) || p,
                    f = c.$menuInner[0].scrollTop,
                    m = !0 === c.isVirtual() ? c.selectpicker.view.position0 : 0;
                if (!(s = c.$newElement.hasClass(P.SHOW)) && (u || 48 <= t.which && t.which <= 57 || 96 <= t.which && t.which <= 105 || 65 <= t.which && t.which <= 90) && (c.$button.trigger("click.bs.dropdown.data-api"), c.options.liveSearch)) c.$searchbox.trigger("focus");
                else {
                    if (27 === t.which && s && (t.preventDefault(), c.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), u) {
                        if (!d.length) return; - 1 !== (i = (n = c.selectpicker.main.elements[c.activeIndex]) ? Array.prototype.indexOf.call(n.parentElement.children, n) : -1) && c.defocusItem(n), 38 === t.which ? (-1 !== i && i--, i + m < 0 && (i += d.length), c.selectpicker.view.canHighlight[i + m] || -1 == (i = c.selectpicker.view.canHighlight.slice(0, i + m).lastIndexOf(!0) - m) && (i = d.length - 1)) : (40 === t.which || p) && (++i + m >= c.selectpicker.view.canHighlight.length && (i = 0), c.selectpicker.view.canHighlight[i + m] || (i = i + 1 + c.selectpicker.view.canHighlight.slice(i + m + 1).indexOf(!0))), t.preventDefault();
                        var v = m + i;
                        38 === t.which ? 0 === m && i === d.length - 1 ? (c.$menuInner[0].scrollTop = c.$menuInner[0].scrollHeight, v = c.selectpicker.current.elements.length - 1) : h = (r = (o = c.selectpicker.current.data[v]).position - o.height) < f : (40 === t.which || p) && (0 === i ? v = c.$menuInner[0].scrollTop = 0 : h = f < (r = (o = c.selectpicker.current.data[v]).position - c.sizeInfo.menuInnerHeight)), n = c.selectpicker.current.elements[v], c.activeIndex = c.selectpicker.current.data[v].index, c.focusItem(n), c.selectpicker.view.currentActive = n, h && (c.$menuInner[0].scrollTop = r), c.options.liveSearch ? c.$searchbox.trigger("focus") : l.trigger("focus")
                    } else if (!l.is("input") && !R.test(t.which) || 32 === t.which && c.selectpicker.keydown.keyHistory) {
                        var g, b, I = [];
                        t.preventDefault(), c.selectpicker.keydown.keyHistory += L[t.which], c.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel), c.selectpicker.keydown.resetKeyHistory.cancel = c.selectpicker.keydown.resetKeyHistory.start(), b = c.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(b) && (b = b.charAt(0));
                        for (var x = 0; x < c.selectpicker.current.data.length; x++) {
                            var k = c.selectpicker.current.data[x];
                            w(k, b, "startsWith", !0) && c.selectpicker.view.canHighlight[x] && I.push(k.index)
                        }
                        if (I.length) {
                            var $ = 0;
                            d.removeClass("active").find("a").removeClass("active"), 1 === b.length && (-1 === ($ = I.indexOf(c.activeIndex)) || $ === I.length - 1 ? $ = 0 : $++), g = I[$], h = 0 < f - (o = c.selectpicker.main.data[g]).position ? (r = o.position - o.height, !0) : (r = o.position - c.sizeInfo.menuInnerHeight, o.position > f + c.sizeInfo.menuInnerHeight), n = c.selectpicker.main.elements[g], c.activeIndex = I[$], c.focusItem(n), n && n.firstChild.focus(), h && (c.$menuInner[0].scrollTop = r), l.trigger("focus")
                        }
                    }
                    s && (32 === t.which && !c.selectpicker.keydown.keyHistory || 13 === t.which || 9 === t.which && c.options.selectOnTab) && (32 !== t.which && t.preventDefault(), c.options.liveSearch && 32 === t.which || (c.$menuInner.find(".active a").trigger("click", !0), l.trigger("focus"), c.options.liveSearch || (t.preventDefault(), e(document).data("spaceSelect", !0))))
                }
            },
            mobile: function() {
                this.$element[0].classList.add("mobile-device")
            },
            refresh: function() {
                var t = e.extend({}, this.options, this.$element.data());
                this.options = t, this.checkDisabled(), this.setStyle(), this.render(), this.createLi(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + H)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(H).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), e(window).off(H + "." + this.selectId)
            }
        };
        var _ = e.fn.selectpicker;
        e.fn.selectpicker = F, e.fn.selectpicker.Constructor = V, e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = _, this
        }, e(document).off("keydown.bs.dropdown.data-api").on("keydown" + H, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', V.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', (function(e) {
            e.stopPropagation()
        })), e(window).on("load" + H + ".data-api", (function() {
            e(".selectpicker").each((function() {
                var t = e(this);
                F.call(t, t.data())
            }))
        }))
    }(e)
}));