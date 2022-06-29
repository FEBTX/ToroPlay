/*!
   JW Player version 8.8.5
   Copyright (c) 2019, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.8.5/notice.txt
*/
(window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || []).push([
    [16], Array(61).concat([function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return K
        }), i.d(t, "b", function() {
            return Q
        });
        var n = i(82),
            a = i.n(n),
            r = i(83),
            l = i.n(r),
            o = i(84),
            s = i.n(o),
            d = i(85),
            c = i.n(d),
            h = i(86),
            w = i.n(h),
            p = i(87),
            u = i.n(p),
            f = i(88),
            m = i.n(f),
            j = i(89),
            g = i.n(j),
            v = i(90),
            y = i.n(v),
            b = i(91),
            x = i.n(b),
            k = i(92),
            O = i.n(k),
            C = i(93),
            z = i.n(C),
            S = i(94),
            M = i.n(S),
            I = i(95),
            E = i.n(I),
            P = i(96),
            L = i.n(P),
            T = i(97),
            V = i.n(T),
            B = i(98),
            A = i.n(B),
            R = i(99),
            D = i.n(R),
            U = i(100),
            q = i.n(U),
            H = i(101),
            N = i.n(H),
            _ = i(102),
            F = i.n(_),
            W = i(103),
            Y = i.n(W),
            X = i(104),
            Z = i.n(X),
            J = i(63),
            G = null;

        function K(e) {
            var t = te().querySelector($(e));
            return t ? ee(t) : null
        }

        function Q(e) {
            var t = te().querySelectorAll(e.split(",").map($).join(","));
            return Array.prototype.map.call(t, function(e) {
                return ee(e)
            })
        }

        function $(e) {
            return ".jw-svg-icon-".concat(e)
        }

        function ee(e) {
            return e.cloneNode(!0)
        }

        function te() {
            return G || (G = Object(J.a)("<xml>" + a.a + l.a + s.a + c.a + w.a + u.a + m.a + g.a + y.a + x.a + O.a + z.a + M.a + E.a + L.a + V.a + A.a + D.a + q.a + N.a + F.a + Y.a + Z.a + "</xml>")), G
        }
    }, , function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return r
        });
        var n, a = i(9);

        function r(e) {
            return n || (n = new DOMParser), Object(a.q)(Object(a.r)(n.parseFromString(e, "image/svg+xml").documentElement))
        }
    }, function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var i = function(e, t) {
                        var i = e[1] || "",
                            n = e[3];
                        if (!n) return i;
                        if (t && "function" == typeof btoa) {
                            var a = (l = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(l)))) + " */"),
                                r = n.sources.map(function(e) {
                                    return "/*# sourceURL=" + n.sourceRoot + e + " */"
                                });
                            return [i].concat(r).concat([a]).join("\n")
                        }
                        var l;
                        return [i].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + i + "}" : i
                }).join("")
            }, t.i = function(e, i) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, a = 0; a < this.length; a++) {
                    var r = this[a][0];
                    null != r && (n[r] = !0)
                }
                for (a = 0; a < e.length; a++) {
                    var l = e[a];
                    null != l[0] && n[l[0]] || (i && !l[2] ? l[2] = i : i && (l[2] = "(" + l[2] + ") and (" + i + ")"), t.push(l))
                }
            }, t
        }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        }), i.d(t, "b", function() {
            return r
        });
        var n = 12;

        function a() {
            try {
                var e = window.crypto || window.msCrypto;
                if (e && e.getRandomValues) return e.getRandomValues(new Uint32Array(1))[0].toString(36)
            } catch (e) {}
            return Math.random().toString(36).slice(2, 9)
        }

        function r(e) {
            for (var t = ""; t.length < e;) t += a();
            return t.slice(0, e)
        }
    }, , function(e, t, i) {
        "use strict";
        i.d(t, "b", function() {
            return n
        }), i.d(t, "a", function() {
            return a
        });
        var n = window.requestAnimationFrame || function(e) {
                return setTimeout(e, 17)
            },
            a = window.cancelAnimationFrame || clearTimeout
    }, , , , function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return a
        }), i.d(t, "b", function() {
            return r
        });
        var n = i(9);

        function a(e) {
            var t = 0;
            return e >= 1280 ? t = 7 : e >= 960 ? t = 6 : e >= 800 ? t = 5 : e >= 640 ? t = 4 : e >= 540 ? t = 3 : e >= 420 ? t = 2 : e >= 320 && (t = 1), t
        }

        function r(e, t) {
            var i = "jw-breakpoint-" + t;
            Object(n.o)(e, /jw-breakpoint-\d+/, i)
        }
    }, , function(e, t, i) {
        "use strict";
        t.a = "hidden" in document ? function() {
            return !document.hidden
        } : "webkitHidden" in document ? function() {
            return !document.webkitHidden
        } : function() {
            return !0
        }
    }, , , , , , , function(e, t, i) {
        "use strict";
        var n, a = i(73),
            r = i(67),
            l = i(6),
            o = [],
            s = [],
            d = {},
            c = "screen" in window && "orientation" in window.screen,
            h = l.OS.android && l.Browser.chrome,
            w = -1;

        function p(e, t) {
            for (var i = t.length; i--;) {
                var n = t[i];
                if (e.target === n.getContainer()) {
                    n.setIntersection(e);
                    break
                }
            }
        }

        function u() {
            Object(r.a)(w), w = Object(r.b)(function() {
                o.forEach(function(e) {
                    e.updateBounds()
                }), o.forEach(function(e) {
                    e.model.get("visibility") && e.updateStyles()
                }), o.forEach(function(e) {
                    e.checkResized()
                })
            })
        }

        function f() {
            o.forEach(function(e) {
                var t = e.model;
                if (!(t.get("audioMode") || !t.get("controls") || t.get("visibility") < .75)) {
                    var i = t.get("state"),
                        n = window.screen.orientation.type,
                        a = "landscape-primary" === n || "landscape-secondary" === n;
                    !a && "paused" === i && e.api.getFullscreen() ? e.api.setFullscreen(!1) : "playing" === i && e.api.setFullscreen(a)
                }
            })
        }

        function m() {
            o.forEach(function(e) {
                e.model.set("activeTab", Object(a.a)())
            })
        }

        function j(e, t) {
            var i = t.indexOf(e); - 1 !== i && t.splice(i, 1)
        }
        document.addEventListener("visibilitychange", m), document.addEventListener("webkitvisibilitychange", m), window.addEventListener("resize", u), window.addEventListener("orientationchange", u), h && c && window.screen.orientation.addEventListener("change", f), window.addEventListener("beforeunload", function() {
            document.removeEventListener("visibilitychange", m), document.removeEventListener("webkitvisibilitychange", m), window.removeEventListener("resize", u), window.removeEventListener("orientationchange", u), h && c && window.screen.orientation.removeEventListener("change", f)
        }), t.a = {
            add: function(e) {
                o.push(e)
            },
            remove: function(e) {
                j(e, o)
            },
            addWidget: function(e) {
                s.push(e)
            },
            removeWidget: function(e) {
                j(e, s)
            },
            size: function() {
                return o.length
            },
            observe: function(e) {
                var t;
                t = window.IntersectionObserver, n || (n = new t(function(e) {
                    if (e && e.length)
                        for (var t = e.length; t--;) {
                            var i = e[t];
                            p(i, o), p(i, s)
                        }
                }, {
                    threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                })), d[e.id] || (d[e.id] = !0, n.observe(e))
            },
            unobserve: function(e) {
                n && d[e.id] && (delete d[e.id], n.unobserve(e))
            }
        }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return r
        });
        var n, a = i(65);

        function r(e, t, i) {
            var r = function() {
                try {
                    n = window.localStorage.jwplayerLocalId
                } catch (e) {}
                return n = n || Object(a.b)(12)
            }();
            e.forEach(function(e) {
                var n = e.variations;
                if (n && n[t]) {
                    n.selected = n.selected || {};
                    var a = function(e, t) {
                            for (var i = function(e) {
                                    for (var t = 1794770992, i = 0, n = e.length; i < n; i++) t ^= e.charCodeAt(i), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                                    return t >>> 0
                                }(e) % 2520, n = t.reduce(function(e, t) {
                                    return e + t.weight
                                }, 0), a = 0, r = 0; r < t.length; r++) {
                                var l = t[r];
                                if ((a += 2520 * l.weight / n) > i) return l
                            }
                        }(r, n[t]),
                        l = a[i];
                    l && (e[i] = l, n.selected[t] = a)
                }
            })
        }
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
    }, , , , , function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-down" viewBox="0 0 240 240" focusable="false"><path d="M105.398,185.598c1.1,1.1,2.3,2.2,3.6,3.1c9.9,6.9,23.5,4.4,30.4-5.5l101.6-101.9l-33.9-33.9l-84.9,84.9l-84.9-84.9l-36.3,36.3L105.398,185.598L105.398,185.598z"></path></svg>'
    }, function(e, t, i) {
        var n = i(142);
        "string" == typeof n && (n = [
            ["all-players", n, ""]
        ]), i(41).style(n, "all-players"), n.locals && (e.exports = n.locals)
    }, function(e, t, i) {
        (e.exports = i(64)(!1)).push([e.i, '.jw-related,.jw-related-container,.jw-related-item-group,.jw-related-item-container,.jw-related-item-content,.jw-related-item-content-container,.jw-related-item-poster,.jw-related-item-play .jw-svg-icon,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster::before,.jw-related-autoplay-svg,.jw-related-shelf-list,.jw-related-shelf-items,.jw-related-shelf-item-contents,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before{height:100%;width:100%}.jwplayer .jw-overlays .jw-plugin-related.jw-plugin-related-open,.jw-flag-small-player .jw-related-container,.jw-related-title,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster::before,.jw-related-autoplay-svg,.jw-shelf-widget .jw-svg-icon-play,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::after{top:0;position:absolute;left:0}.jwplayer:not(.jw-flag-small-player) .jw-related-item-content .jw-related-item-title-text::before,.jw-related-item-title,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content-container::after{position:absolute;bottom:0;left:0}.jw-related .jw-icon-inline.jw-related-close{position:absolute;top:0;right:0}.jwplayer .jw-overlays .jw-plugin-related.jw-plugin-related-open,.jw-flag-small-player .jw-related-container,.jw-related-autoplay-svg,.jw-shelf-widget .jw-svg-icon-play{position:absolute;bottom:0;right:0}.jwplayer:not(.jw-flag-small-player) .jw-related-item-content .jw-related-item-title-text::before,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content-container::after,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::after{content:"";display:block}.jw-plugin-related{overflow:hidden;width:100%}.jw-plugin-related:not(.jw-plugin-related-open){pointer-events:none;display:none}.jw-flag-small-player .jw-plugin-related:not(.jw-plugin-related-open){top:0;bottom:auto}.jw-flag-touch:not(.jw-flag-small-player) .jw-plugin-related:not(.jw-plugin-related-open){bottom:88px}.jw-plugin-related.jw-plugin-related-open{opacity:1;visibility:visible}.jwplayer .jw-overlays .jw-plugin-related.jw-plugin-related-open{background-color:#000;display:block}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title{display:none}.jw-related{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:normal;pointer-events:all;position:relative}.jw-related-container{overflow:hidden}.jw-flag-small-player .jw-related-container{display:inline-block;margin:44px auto auto;overflow:visible;padding:0;height:calc(100% - (44px * 1.5));width:calc(100% - (44px * 3))}.jw-breakpoint-2 .jw-related-container,.jw-breakpoint-3 .jw-related-container,.jw-breakpoint-4 .jw-related-container{padding:44px 44px 11px}.jw-breakpoint-5 .jw-related-container{padding:44px 50px 6px}.jw-breakpoint-6 .jw-related-container{padding:66px 66px 33px}.jw-breakpoint-7 .jw-related-container{padding:77px 77px 37px}.jw-orientation-portrait .jw-related-container{align-items:center;display:flex}.jw-related-title{color:#aaa;background-color:transparent;font-size:16px;line-height:2.75;overflow:hidden;padding:0 1em;text-overflow:ellipsis;width:100%;padding-right:44px;white-space:nowrap}.jw-breakpoint-5 .jw-related-title{font-size:20px;line-height:3}.jw-breakpoint-6 .jw-related-title{font-size:24px}.jw-breakpoint-7 .jw-related-title{font-size:28px}.jw-related-item-group{overflow:hidden;position:relative}.jw-related-item-next-up+.jw-related-item-group{display:none}.jw-breakpoint-2 .jw-related-item-next-up+.jw-related-item-group{width:50%}.jwplayer:not(.jw-flag-small-player):not(.jw-breakpoint-2) .jw-related-item-next-up+.jw-related-item-group{width:66.66666667%}.jwplayer:not(.jw-flag-small-player) .jw-related-item-group{display:block}.jw-flag-small-player .jw-related-item-group{display:flex;flex-flow:row nowrap;overflow:visible;transition:-webkit-transform 150ms cubic-bezier(0, .25, .25, 1);transition:transform 150ms cubic-bezier(0, .25, .25, 1);transition:transform 150ms cubic-bezier(0, .25, .25, 1), -webkit-transform 150ms cubic-bezier(0, .25, .25, 1)}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child){-webkit-animation:none;animation:none;flex:0 0 auto;opacity:.5;-webkit-transform:scale(.75, .75);transform:scale(.75, .75);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transition:all 150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity,-webkit-transform,-webkit-transform-origin;transition-property:opacity,transform,transform-origin;transition-property:opacity,transform,transform-origin,-webkit-transform,-webkit-transform-origin;pointer-events:none}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus .jw-related-item-title .jw-related-item-title-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content .jw-related-item-title .jw-related-item-title-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus:hover .jw-related-item-title .jw-related-item-title-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content:hover .jw-related-item-title .jw-related-item-title-text{background:none;white-space:nowrap}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus .jw-related-item-title .jw-related-item-title-text::before,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content .jw-related-item-title .jw-related-item-title-text::before,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus:hover .jw-related-item-title .jw-related-item-title-text::before,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content:hover .jw-related-item-title .jw-related-item-title-text::before{content:none}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus .jw-related-item-title .jw-related-next-up-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content .jw-related-item-title .jw-related-next-up-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus:hover .jw-related-item-title .jw-related-next-up-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content:hover .jw-related-item-title .jw-related-next-up-text{font-weight:normal;padding:0 10px 5px}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-poster-content{background:rgba(0,0,0,0.4)}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-duration{display:none}.jw-flag-small-player .jw-related-item-group .jw-related-item:first-child{-webkit-transform-origin:80% 50%;transform-origin:80% 50%}.jw-flag-small-player .jw-related-item-group .jw-related-item.jw-related-active-item{pointer-events:auto;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.jw-flag-small-player .jw-related-item-group .jw-related-item.jw-related-active-item .jw-related-item-poster-content{background:rgba(0,0,0,0.4)}.jw-flag-small-player .jw-related-item-group .jw-related-item.jw-related-active-item~.jw-related-item{-webkit-transform-origin:20% 50%;transform-origin:20% 50%}@media (orientation:landscape){.jw-flag-fullscreen .jw-orientation-portrait .jw-related-item-group{display:block}}@media (orientation:portrait){.jw-orientation-portrait .jw-related-item.jw-related-item-next-up{width:100%}}.jw-related-item{float:left;height:100%;overflow:hidden;width:100%;outline:none}.jw-related-item:focus .jw-related-item-content{outline:solid 2px #4d90fe}.jw-breakpoint-2 .jw-related-item,.jw-breakpoint-3 .jw-related-item,.jw-breakpoint-4 .jw-related-item{padding:6px}.jw-breakpoint-5 .jw-related-item,.jw-breakpoint-6 .jw-related-item{padding:10px}.jw-breakpoint-7 .jw-related-item{padding:15px}.jw-breakpoint-2 .jw-related-item-group .jw-related-item{height:50%;width:50%;display:none}.jw-breakpoint-2 .jw-related-item-group .jw-related-item:nth-child(-n + 4){display:block}.jw-breakpoint-2 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n + 2){display:block;width:100%}.jw-breakpoint-3 .jw-related-item-group .jw-related-item:nth-child(-n + 6),.jw-breakpoint-4 .jw-related-item-group .jw-related-item:nth-child(-n + 9){display:block}.jw-breakpoint-3 .jw-related-item-group .jw-related-item{height:50%;width:33.33333333%;display:none}.jw-breakpoint-4 .jw-related-item-group .jw-related-item{height:33.33333333%;width:33.33333333%;display:none}.jw-breakpoint-3 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+4),.jw-breakpoint-4 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-5 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-6 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-7 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6){display:block;width:50%}.jw-breakpoint-4 .jw-related-item-group .jw-related-item,.jw-breakpoint-5 .jw-related-item-group .jw-related-item,.jw-breakpoint-6 .jw-related-item-group .jw-related-item,.jw-breakpoint-7 .jw-related-item-group .jw-related-item{height:33.33333333%;width:33.33333333%;display:block}.jw-plugin-related-open .jw-related-item{-webkit-animation:jw-related-item 250ms both cubic-bezier(0, .25, .25, 1);animation:jw-related-item 250ms both cubic-bezier(0, .25, .25, 1)}.jw-plugin-related-open .jw-related-item:nth-child(1){-webkit-animation-delay:50ms;animation-delay:50ms}.jw-plugin-related-open .jw-related-item:nth-child(2){-webkit-animation-delay:100ms;animation-delay:100ms}.jw-plugin-related-open .jw-related-item:nth-child(3){-webkit-animation-delay:150ms;animation-delay:150ms}.jw-plugin-related-open .jw-related-item:nth-child(4){-webkit-animation-delay:200ms;animation-delay:200ms}.jw-plugin-related-open .jw-related-item:nth-child(5){-webkit-animation-delay:250ms;animation-delay:250ms}.jw-plugin-related-open .jw-related-item:nth-child(6){-webkit-animation-delay:300ms;animation-delay:300ms}.jw-plugin-related-open .jw-related-item.jw-related-item-next-up{-webkit-animation-delay:0ms;animation-delay:0ms}.jw-flag-small-player .jw-plugin-related-open .jw-related-item{-webkit-animation-delay:0s;animation-delay:0s}.jw-related-item-content{background-color:#000;border:solid 1px rgba(255,255,255,0.2);box-sizing:border-box;cursor:pointer;display:block;overflow:hidden;position:relative;text-decoration:none;transition:border-color 150ms cubic-bezier(0, .25, .25, 1)}.jwplayer:not(.jw-flag-small-player) .jw-related-item-content .jw-related-item-title-text::before{height:30px;width:100%;background-image:linear-gradient(transparent, #000);opacity:0}.jw-related-item-content:hover,.jw-related-item:focus .jw-related-item-content{background-color:#000;border-color:#fff}.jw-related-item-content:hover .jw-related-item-title-text,.jw-related-item:focus .jw-related-item-content .jw-related-item-title-text{background-image:linear-gradient(transparent, #000);visibility:visible;white-space:normal}.jw-related-item-content:hover .jw-related-item-title-text::before,.jw-related-item:focus .jw-related-item-content .jw-related-item-title-text::before{opacity:1}.jw-related-item-content-container{overflow:hidden;position:relative}.jw-related-item-poster{background-position:center center;background-repeat:no-repeat;background-size:cover;overflow:hidden;display:block}.jw-related-item-poster-content{height:100%;overflow:hidden;position:relative}.jw-related-item-duration{position:absolute;top:15px;right:15px;color:#fff;font-size:12px;font-weight:bold;letter-spacing:.3px;text-align:right;text-shadow:-1px -1px 20px rgba(0,0,0,0.5),1px 1px 20px rgba(0,0,0,0.5)}.jw-breakpoint-2 .jw-related-item-duration,.jw-breakpoint-3 .jw-related-item-duration{position:absolute;top:10px;right:10px}.jw-breakpoint-6 .jw-related-item-duration,.jw-breakpoint-7 .jw-related-item-duration{position:absolute;top:20px;right:20px}.jw-breakpoint-6 .jw-related-item-duration{font-size:14px}.jw-breakpoint-7 .jw-related-item-duration{font-size:15px}.jw-related-item-play{top:50%;position:absolute;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);transition:opacity 150ms cubic-bezier(0, .25, .25, 1);opacity:0}.jw-breakpoint-0 .jw-related-item-play{height:32px;width:32px}.jw-flag-small-player .jw-related-item-next-up .jw-related-item-play{-webkit-transform:translate(-50%, -75%);transform:translate(-50%, -75%)}.jw-flag-small-player .jw-related-active-item .jw-related-item-play,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up:hover .jw-related-item-play{opacity:1}.jw-related-item-title{overflow:hidden;text-decoration:none;text-shadow:0 0 2px rgba(0,0,0,0.5);width:100%}.jw-related-item-title .jw-related-next-up-text{color:currentColor;display:none;font-size:13px;padding:0 15px;text-align:start}.jw-flag-small-player .jw-related-item-title .jw-related-next-up-text{padding:0 10px}.jw-related-item-title .jw-related-item-title-text{background-image:linear-gradient(transparent, #000);box-sizing:border-box;color:currentColor;display:block;font-size:13px;font-weight:bold;line-height:1.4;max-height:104.6px;padding:50px 15px 12px;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.jw-flag-small-player .jw-related-item:not(.jw-related-active-item) .jw-related-item-title .jw-related-item-title-text{opacity:0}.jw-flag-small-player .jw-related-item-title .jw-related-item-title-text{font-size:15px;line-height:1.2;padding:0 10px 10px}.jw-breakpoint-2 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-title .jw-related-item-title-text{line-height:1.3}.jw-breakpoint-5 .jw-related-item-title .jw-related-item-title-text{max-height:122.8px}.jw-breakpoint-6 .jw-related-item-title .jw-related-item-title-text{font-size:15px;max-height:141px}.jw-breakpoint-7 .jw-related-item-title .jw-related-item-title-text{font-size:16px;line-height:1.5;max-height:159.2px}.jw-related-item-title .jw-item-index-text em{font-style:normal;font-weight:bold}.jw-breakpoint-2 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-2 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-3 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-4 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-4 .jw-related-item-title .jw-related-item-title-text{padding:50px 10px 7px}.jw-breakpoint-6 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-6 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-7 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-7 .jw-related-item-title .jw-related-item-title-text{padding:50px 20px 17px}.jw-flag-small-player .jw-related-item-title{text-shadow:none}.jw-related-item-description{opacity:.8;display:none;font-size:13px;line-height:1.2;overflow:hidden}.jw-related-item-description .jw-related-item-title-text{display:block}.jw-related-item-content:hover .jw-related-item-description .jw-related-item-title-text,.jw-related-item:focus .jw-related-item-description .jw-related-item-title-text{opacity:1}.jw-related-item-description-content{box-sizing:border-box;padding:0 15px}.jw-breakpoint-4 .jw-related-item-description-content{padding:0 10px}.jw-breakpoint-6 .jw-related-item-description-content,.jw-breakpoint-7 .jw-related-item-description-content{padding:0 20px}.jw-related-item-next-up{display:block;width:100%}.jw-related-item.jw-related-item-next-up{height:100%}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content-container::after{height:50px;width:100%;background-image:linear-gradient(to bottom, transparent, #000)}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-content::after{height:75px}.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-content::after{height:100px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-content::after{height:125px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-content::after{height:150px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-content::after{height:175px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-content::after{height:200px}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:hover .jw-related-item-content-container::after,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:focus .jw-related-item-content-container::after{background-image:linear-gradient(transparent, #000)}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:hover .jw-related-item-poster-content::before,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:focus .jw-related-item-poster-content::before{background-image:linear-gradient(transparent, #000)}.jw-breakpoint-2 .jw-related-item-next-up{width:50%}.jw-breakpoint-3 .jw-related-item-next-up,.jw-breakpoint-4 .jw-related-item-next-up,.jw-breakpoint-5 .jw-related-item-next-up,.jw-breakpoint-6 .jw-related-item-next-up,.jw-breakpoint-7 .jw-related-item-next-up{width:33.33333333%}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster{height:42.85714286%;position:relative}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster::before{background-image:linear-gradient(transparent, #000);content:""}.jw-related-item-next-up .jw-related-item-title{text-shadow:none}.jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{display:block}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title{bottom:auto;height:auto;left:auto;position:relative;text-shadow:none}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{position:static}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{background:none;margin-bottom:5px;max-height:none;font-weight:normal;position:static;overflow:visible;white-space:normal}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text::before{display:none}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title{margin-top:-10px}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{padding:0 10px}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:15px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title{margin:-15px 0 5px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{padding:0 10px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:15px;margin-bottom:5px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:16px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title{margin:-20px 0 10px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{padding:0 15px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:15px;margin-bottom:10px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:18px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title{margin:-25px 0 10px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{padding:0 20px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:16px;margin-bottom:10px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:20px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title{margin:-30px 0 15px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{padding:0 20px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:18px;margin-bottom:10px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:24px;line-height:1.3}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-description{display:block}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-description{font-size:14px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-description{font-size:16px}@media (orientation:landscape){.jw-flag-fullscreen .jw-orientation-portrait .jw-related-item-next-up{display:block;height:100%;vertical-align:inherit}}.jw-orientation-portrait:not(.jw-flag-small-player) .jw-related-item-next-up,.jw-orientation-portrait .jw-related-item-group{height:40%}.jw-related-autoplay-frame{fill:none;stroke:transparent;stroke-width:2px}.jw-breakpoint-2 .jw-related-autoplay-frame,.jw-breakpoint-3 .jw-related-autoplay-frame,.jw-breakpoint-4 .jw-related-autoplay-frame{stroke-width:4px}.jw-breakpoint-5 .jw-related-autoplay-frame,.jw-breakpoint-6 .jw-related-autoplay-frame,.jw-breakpoint-7 .jw-related-autoplay-frame{stroke-width:8px}.jw-related-autoplay-frame-progress{fill:none;stroke:#fff;stroke-width:4px;transition:stroke 150ms cubic-bezier(0, .25, .25, 1)}.jw-related-item-content:hover .jw-related-autoplay-frame-progress,.jw-related-item-content:focus .jw-related-autoplay-frame-progress{stroke:rgba(255,255,255,0.6)}.jw-breakpoint-5 .jw-related-autoplay-frame-progress,.jw-breakpoint-6 .jw-related-autoplay-frame-progress,.jw-breakpoint-7 .jw-related-autoplay-frame-progress{stroke-width:8px}.jw-related .jw-icon-inline{transition:opacity 150ms cubic-bezier(0, .25, .25, 1);z-index:1}.jw-breakpoint-5 .jw-related .jw-icon-inline .jw-svg-icon-close{height:30px;width:30px}.jw-breakpoint-6 .jw-related .jw-icon-inline .jw-svg-icon-close{height:36px;width:36px}.jw-breakpoint-7 .jw-related .jw-icon-inline .jw-svg-icon-close{height:42px;width:42px}.jw-related .jw-icon-inline.jw-related-page{position:absolute;top:50%;-webkit-transform:translate(0, -50%);transform:translate(0, -50%)}.jw-related .jw-icon-inline.jw-related-page-left{left:0}.jw-related .jw-icon-inline.jw-related-page-right{right:0}.jw-breakpoint-5 .jw-related .jw-icon-inline{height:55px;width:55px}.jw-breakpoint-6 .jw-related .jw-icon-inline{height:66px;width:66px}.jw-breakpoint-7 .jw-related .jw-icon-inline{height:77px;width:77px}.jw-related-shelf-container{display:flex;flex-wrap:wrap;-webkit-transform:translate(0, 100%) translate(0, -43px);transform:translate(0, 100%) translate(0, -43px);transition:150ms 150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, -webkit-transform;transition-property:opacity, transform;transition-property:opacity, transform, -webkit-transform;margin:0 12px}.jw-related-shelf-container .jw-related-shelf-contents{display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}.jw-related-shelf-container .jw-related-more{color:rgba(255,255,255,0.8);cursor:pointer;display:none;text-shadow:0 0 4px rgba(0,0,0,0.65);font-size:12px;justify-content:flex-start;margin:0;padding:0;pointer-events:auto;white-space:nowrap;width:auto;outline:none}.jw-related-shelf-container .jw-related-more:hover,.jw-related-shelf-container .jw-related-more:focus{color:#fff}.jw-related-shelf-container .jw-related-more .jw-svg-icon{-webkit-filter:drop-shadow(0 0 2px rgba(0,0,0,0.5));filter:drop-shadow(0 0 2px rgba(0,0,0,0.5));margin:0 10px 0 0;flex:0 0 auto;width:16px}.jw-related-shelf-container .jw-related-close{cursor:pointer;margin-left:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, .25, .25, 1),visibility 0s 150ms linear;visibility:hidden;position:absolute;top:0;right:0}.jw-related-shelf-container .jw-related-close .jw-svg-icon{margin:0 6px;width:12px}.jw-flag-small-player .jw-related-shelf-container .jw-related-close{display:none}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete) .jw-controls:not(.jw-settings-open) .jw-related-shelf-container{-webkit-transform:translate(0, 0);transform:translate(0, 0);transition-delay:0s}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete) .jw-controls:not(.jw-settings-open) .jw-related-shelf-container .jw-related-close{opacity:1;visibility:visible;transition-delay:0s}.jw-flag-ads .jw-related-shelf-container,.jw-flag-small-player .jw-related-shelf-container{padding:0;display:none}.jw-button-container .jw-related-shelf-container{position:absolute;bottom:100%;left:0;pointer-events:none;margin-bottom:10px;right:0}.jwplayer.jw-flag-overlay-open-related-shelf:not(.jw-flag-small-player) .jw-settings-open .jw-related-shelf-container *{pointer-events:none}.jwplayer.jw-flag-overlay-open-related-shelf:not(.jw-flag-small-player) .jw-settings-open .jw-related-shelf{opacity:0;transition-delay:0s}.jw-related-control{align-items:center;border-radius:0;color:rgba(255,255,255,0.8);cursor:pointer;display:flex;flex:0 0 auto;height:auto;justify-content:center;transition:opacity 150ms cubic-bezier(0, .25, .25, 1);outline:none}.jwplayer:not(.jw-flag-touch) .jw-related-control{width:28px}.jw-related-control .jw-svg-icon{width:16px}.jw-related-control.jw-off{opacity:.25}.jw-breakpoint-4:not(.jw-flag-touch) .jw-related-control{width:22px}.jw-breakpoint-4:not(.jw-flag-touch) .jw-related-control .jw-svg-icon{width:12px}.jw-related-control:hover,.jw-related-control:focus{color:#fff}.jw-related-control:focus{border:solid 1px rgba(255,255,255,0.6)}.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-ads) .jw-related-more,.jw-state-buffering:not(.jw-flag-user-inactive):not(.jw-flag-ads) .jw-related-more,.jw-state-paused:not(.jw-flag-ads) .jw-related-more,.jw-state-complete:not(.jw-flag-ads) .jw-related-more{display:flex}.jw-state-playing:not(.jw-flag-user-inactive).jw-flag-touch .jw-related-more,.jw-state-buffering:not(.jw-flag-user-inactive).jw-flag-touch .jw-related-more,.jw-state-paused.jw-flag-touch .jw-related-more,.jw-state-complete.jw-flag-touch .jw-related-more{bottom:6px}.jw-state-playing:not(.jw-flag-user-inactive) .jw-logo-bump,.jw-state-buffering:not(.jw-flag-user-inactive) .jw-logo-bump,.jw-state-paused .jw-logo-bump,.jw-state-complete .jw-logo-bump{bottom:88px}.jw-related-shelf{background-color:rgba(0,0,0,0.5);display:flex;opacity:0;order:1;pointer-events:none;transition:opacity 150ms 0s cubic-bezier(0, .25, .25, 1),visibility 0s 150ms linear;width:100%;visibility:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jw-flag-overlay-open-related-shelf.jw-state-playing:not(.jw-flag-user-inactive) .jw-related-shelf,.jw-flag-overlay-open-related-shelf.jw-state-buffering:not(.jw-flag-user-inactive) .jw-related-shelf,.jw-flag-overlay-open-related-shelf.jw-state-paused .jw-controls:not(.jw-settings-open) .jw-related-shelf{opacity:1;pointer-events:auto;visibility:visible;transition-delay:150ms}.jw-flag-small-player .jw-related-shelf{display:none}.jw-related-shelf-list{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}.jw-related-shelf-items{display:flex;overflow:visible;transition:-webkit-transform 0s cubic-bezier(0, .25, .25, 1);transition:transform 0s cubic-bezier(0, .25, .25, 1);transition:transform 0s cubic-bezier(0, .25, .25, 1), -webkit-transform 0s cubic-bezier(0, .25, .25, 1);-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0)}.jw-related-shelf-items.jw-related-shelf-start{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.jw-related-shelf-items.jw-related-shelf-animating{transition-duration:450ms;pointer-events:none}.jw-related-shelf-items.jw-related-shelf-slide-next{-webkit-transform:translate(-200%, 0);transform:translate(-200%, 0)}.jw-related-shelf-items.jw-related-shelf-slide-prev{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.jw-related-shelf-item{height:100%;width:20%;background:50% 50% / cover no-repeat rgba(0,0,0,0.25);display:inline-block;flex:0 0 auto;padding:0;position:relative;transition:background-size 150ms cubic-bezier(0, .25, .25, 1);outline:none}.jw-related-shelf-item:hover .jw-related-shelf-item-contents,.jw-related-shelf-item:focus .jw-related-shelf-item-contents{opacity:1}.jw-related-shelf-item .jw-text{font-weight:bold;flex:0 0 100%;line-height:1.25;overflow:hidden}.jw-related-shelf-item .jw-related-shelf-item-duration{flex:0 0 100%;font-size:11px;margin:0 0 auto;text-align:right}.jw-related-shelf-item .jw-related-shelf-item-title{height:auto;margin:auto 0 0}.jw-breakpoint-2 .jw-related-shelf-item,.jw-breakpoint-3 .jw-related-shelf-item{width:calc(100% / 3)}.jw-breakpoint-2 .jw-related-shelf-item .jw-text,.jw-breakpoint-3 .jw-related-shelf-item .jw-text{font-size:11px}.jw-breakpoint-4 .jw-related-shelf-item{width:25%}.jw-related-shelf-item-aspect{height:0;padding:0 0 56.25%;position:relative}.jw-related-shelf-item-contents{background-color:rgba(0,0,0,0.5);align-items:flex-end;cursor:pointer;display:flex;flex-wrap:wrap;opacity:0;padding:8px;position:absolute;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-flag-touch .jw-related-shelf-item-contents{opacity:1}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-2 .jw-display,.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-3 .jw-display{padding-top:0}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-2 .jw-display-container,.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-3 .jw-display-container{-webkit-transform:translateY(-10%);transform:translateY(-10%)}.jw-flag-overlay-open-related-shelf .jw-nextup-container.jw-nextup-container-visible,.jw-flag-overlay-open-related-shelf .jw-nextup-sticky .jw-nextup-close{opacity:0;transition:opacity 150ms 0s cubic-bezier(0, .25, .25, 1),visibility 0s 150ms linear;visibility:hidden}.jw-shelf-widget{box-sizing:border-box;display:block;min-width:270px;-webkit-transform:none;transform:none;width:100%}.jw-shelf-widget,.jw-shelf-widget *{-webkit-tap-highlight-color:rgba(255,255,255,0);background-color:transparent;border:0;color:inherit;direction:ltr;float:none;font-size:100%;font-stretch:inherit;font-variant:inherit;line-height:normal;list-style:none;margin:0;padding:0;text-align:left;text-transform:none;vertical-align:baseline}.jw-shelf-widget *{box-sizing:inherit}.jw-shelf-widget .jw-related-more{color:inherit;cursor:default;display:flex;height:auto;font-size:106.25%;line-height:1.2;margin:0 0 5px 38px;text-shadow:none}.jw-shelf-widget .jw-related-more:hover{color:inherit}.jw-shelf-widget .jw-related-shelf-contents{padding:20px 8px;position:relative}.jw-shelf-widget .jw-related-shelf{background-color:transparent;display:flex;font-size:100%;height:auto;opacity:1;order:1;pointer-events:auto;position:relative;transition:opacity 150ms 0s cubic-bezier(0, .25, .25, 1),visibility 0s 150ms linear;visibility:visible;width:100%}.jw-shelf-widget:not(.jw-flag-touch) .jw-related-control:hover{opacity:1}.jw-shelf-widget:not(.jw-flag-touch) .jw-related-shelf-item:hover .jw-svg-icon,.jw-shelf-widget:not(.jw-flag-touch) .jw-related-shelf-item:hover .jw-related-shelf-item-image::before{opacity:1}.jw-shelf-widget .jw-related-control{height:auto;width:28px;align-items:center;border-radius:0;color:currentColor;cursor:pointer;display:flex;flex:0 0 auto;justify-content:center;opacity:.7;outline:none;margin:0 0 4.25em;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-shelf-widget .jw-related-control:focus{opacity:1}.jw-shelf-widget .jw-related-control.jw-off{opacity:.3;pointer-events:none}.jw-breakpoint-4.jw-shelf-widget .jw-related-control{width:28px}.jw-breakpoint-4.jw-shelf-widget .jw-related-control .jw-svg-icon{width:24px}.jw-shelf-widget .jw-related-control .jw-svg-icon{width:24px}.jw-shelf-widget .jw-related-shelf-item-title{color:inherit}.jw-shelf-widget .jw-svg-icon-play{height:50%;width:50%;color:#fff;-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3));margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, .25, .25, 1);z-index:1}.jw-shelf-widget .jw-related-shelf-item{height:100%;width:25%;background:transparent;cursor:pointer;display:inline-block;flex:0 0 auto;outline:none;padding:0 10px;position:relative;transition:background-size 150ms cubic-bezier(0, .25, .25, 1)}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image{background-color:transparent;background-size:cover;overflow:hidden;padding:0 0 56.25%;position:relative}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image:not([style])::before{opacity:1}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));opacity:0;pointer-events:none;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::after{height:150%;width:100%;pointer-events:none;-webkit-transform-origin:0 0;transform-origin:0 0}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading{pointer-events:none}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image .jw-svg-icon{display:none}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image::before,.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image::after{background:currentColor;opacity:.15}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image::after{-webkit-animation:jw-shimmer 1.5s cubic-bezier(.46, .03, .52, .96) both infinite;animation:jw-shimmer 1.5s cubic-bezier(.46, .03, .52, .96) both infinite}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n + 2) .jw-related-shelf-item-image::after{-webkit-animation-delay:200ms;animation-delay:200ms}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n + 3) .jw-related-shelf-item-image::after{-webkit-animation-delay:400ms;animation-delay:400ms}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n + 4) .jw-related-shelf-item-image::after{-webkit-animation-delay:600ms;animation-delay:600ms}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n + 5) .jw-related-shelf-item-image::after{-webkit-animation-delay:800ms;animation-delay:800ms}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-title{background:linear-gradient(currentColor, currentColor),linear-gradient(currentColor, currentColor);background-position:0 0, 0 50%;background-repeat:no-repeat;background-size:100% 1em, 65% 1em;opacity:.15;height:3.75em;overflow:hidden;text-indent:100%;white-space:nowrap}.jw-shelf-widget .jw-related-shelf-item.jw-related-loaded .jw-related-shelf-item-image::after{-webkit-animation:jw-shimmer 1.5s -0.5s cubic-bezier(.46, .03, .52, .96) forwards 1;animation:jw-shimmer 1.5s -0.5s cubic-bezier(.46, .03, .52, .96) forwards 1;background:currentColor}.jw-shelf-widget .jw-related-shelf-item.jw-related-displayed .jw-related-shelf-item-image::after{display:none}.jw-shelf-widget .jw-related-shelf-item:focus .jw-svg-icon,.jw-shelf-widget .jw-related-shelf-item:focus .jw-related-shelf-item-image::before{opacity:1}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-contents{align-items:flex-start;background:none;height:3.75em;margin:.5em 0 0;opacity:1;padding:0;position:static;transition:none}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-title{font-size:100%;font-weight:normal;height:3.75em;line-height:1.25;margin:0;overflow:hidden;text-overflow:ellipsis}.jw-shelf-items-5.jw-shelf-widget .jw-related-shelf-item{width:20%}.jw-shelf-items-4.jw-shelf-widget .jw-related-shelf-item{width:25%}.jw-shelf-items-3.jw-shelf-widget .jw-related-shelf-item{width:calc(100% / 3)}.jw-shelf-items-2.jw-shelf-widget .jw-related-shelf-item{width:50%}@-webkit-keyframes jw-shimmer{0%{-webkit-transform:translate(0, -100%) skewY(-15deg);transform:translate(0, -100%) skewY(-15deg)}66.6%,100%{-webkit-transform:translate(0, 100%) skewY(-15deg);transform:translate(0, 100%) skewY(-15deg)}}@keyframes jw-shimmer{0%{-webkit-transform:translate(0, -100%) skewY(-15deg);transform:translate(0, -100%) skewY(-15deg)}66.6%,100%{-webkit-transform:translate(0, 100%) skewY(-15deg);transform:translate(0, 100%) skewY(-15deg)}}@-webkit-keyframes jw-related-item{0%{opacity:0;-webkit-transform:scale(.85, .85);transform:scale(.85, .85);visibility:hidden}to{opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1);visibility:visible}}@keyframes jw-related-item{0%{opacity:0;-webkit-transform:scale(.85, .85);transform:scale(.85, .85);visibility:hidden}to{opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1);visibility:visible}}@-webkit-keyframes jw-dash{to{stroke-dashoffset:0}}@keyframes jw-dash{to{stroke-dashoffset:0}}', ""])
    }, function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-more-videos" viewBox="0 0 240 240" focusable="false"><path d="M0,30h60v75H0V30z M0,135h60v75H0V135z M90,135h60v75H90V135z M180,135h60v75h-60V135z M90,30h60v75H90V30z M180,30h60v75h-60V30z"></path></svg>'
    }, , , , function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i(0),
            a = i(27),
            r = i(45),
            l = i(1),
            o = function(e) {
                this.items = this.currentRequest = this.lastResponseText = null, this.requestOptions = e
            };

        function s(e) {
            var t;
            try {
                if (e.responseXML && e.responseXML.firstChild) {
                    var i = Object(r.a)(e.responseXML.firstChild);
                    t = Object(n.j)({
                        playlist: i
                    }, i.feedData)
                } else t = function(e) {
                    return JSON.parse(e.responseText)
                }(e), Array.isArray(t) && (t = {
                    playlist: t
                })
            } catch (e) {
                t = null
            }
            return t
        }
        o.prototype.load = function(e, t, i, r) {
            var o = this;
            this.currentRequest && this.abort();
            var d = this.requestOptions;
            if (d && d.queryParams) {
                var c = Object.keys(d.queryParams).map(function(e) {
                        return e + "=" + d.queryParams[e]
                    }),
                    h = e.indexOf("?") > 0 ? "&" : "?";
                e = e + h + c.join("&")
            }
            this.currentRequest = Object(a.a)(e, function(a) {
                o.currentRequest = null;
                var d = o.lastResponseText === a.responseText,
                    c = s(a);
                if (r && d) {
                    var h = Object(n.j)({}, c);
                    r(o.items, h, e)
                } else if (c) {
                    o.lastResponseText = a.responseText, o.items = c.playlist;
                    var w = Object(n.j)({}, c);
                    delete w.playlist, t(o.items, w, e)
                } else o.lastResponseText = null, i(new l.s(null, 302621))
            }, function(e, t, n, a) {
                i(Object(l.z)(a, 302e3))
            })
        }, o.prototype.loadRecommendation = function(e, t, i, n, r) {
            var o = this;
            this.currentRequest && this.abort();
            this.currentRequest = Object(a.a)(e, function(e) {
                o.currentRequest = null;
                var a = s(e);
                if (a) {
                    var d = a.file || t;
                    d ? o.load(d, i, n, r) : n(new l.s(null, 302650, a))
                } else n(new l.s(null, 302621))
            }, function(e, t, i, a) {
                n(Object(l.z)(a, 302e3))
            })
        }, o.prototype.clearCache = function() {
            this.lastResponseText = null
        }, o.prototype.abort = function() {
            this.currentRequest.onload = null, this.currentRequest.onreadystatechange = null, this.currentRequest.onerror = null, this.currentRequest.abort && this.currentRequest.abort(), this.currentRequest = null, this.lastResponseText = null
        };
        var d = o,
            c = i(6),
            h = function(e) {
                this.handlers = [], this.el = e
            };

        function w(e, t) {
            var i = new h(e);
            return i.add(t), i
        }
        h.prototype.add = function(e) {
            this.handlers.push(e)
        }, h.prototype.del = function(e) {
            e || (this.handlers = []);
            for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
        }, h.prototype.dispatch = function() {
            for (var e = 0, t = this.handlers.length; e < t; e++) {
                var i = this.handlers[e];
                "function" == typeof i && i.apply(this.el, arguments)
            }
        };
        var p = function(e, t) {
            this.element = "string" == typeof e ? document.querySelector(e) : e, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this);
            var i = c.Features.passiveEvents,
                n = !!i && {
                    passive: !1
                },
                a = !!i && {
                    passive: !0
                };
            this.element.addEventListener("touchstart", this.start, n), this.element.addEventListener("touchmove", this.move, n), this.element.addEventListener("touchend", this.end, a), this.element.addEventListener("touchcancel", this.cancel, a), this.preV = {
                x: null,
                y: null
            };
            var r = function() {};
            this.touchStart = w(this.element, t.touchStart || r), this.swipe = w(this.element, t.swipe || r), this.touchMove = w(this.element, t.touchMove || r), this.touchEnd = w(this.element, t.touchEnd || r), this.touchCancel = w(this.element, t.touchCancel || r), this._cancelAllHandler = this.cancelAll.bind(this), window.removeEventListener("scroll", this._cancelAllHandler), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.swipeTimeout = null, this.x1 = null, this.x2 = null, this.y1 = null, this.y2 = null
        };
        p.prototype = {
            start: function(e) {
                if (e.touches) {
                    this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e), this.last = this.now;
                    var t = this.preV;
                    if (e.touches.length > 1) {
                        var i = {
                            x: e.touches[1].pageX - this.x1,
                            y: e.touches[1].pageY - this.y1
                        };
                        t.x = i.x, t.y = i.y
                    }
                    e.preventDefault()
                }
            },
            move: function(e) {
                if (e.touches) {
                    var t = this.preV,
                        i = e.touches.length,
                        n = e.touches[0].pageX,
                        a = e.touches[0].pageY;
                    if (i > 1) {
                        var r = e.touches[1].pageX,
                            l = e.touches[1].pageY,
                            o = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - a
                            };
                        t.x = o.x, t.y = o.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + r - this.sx2) / 2, e.deltaY = (a - this.y2 + l - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.sx2 = r, this.sy2 = l
                    } else null !== this.x2 ? (e.deltaX = n - this.x2, e.deltaY = a - this.y2) : (e.deltaX = 0, e.deltaY = 0);
                    this.touchMove.dispatch(e), this.x2 = n, this.y2 = a, i > 1 && e.preventDefault()
                }
            },
            end: function(e) {
                if (e.changedTouches) {
                    var t = this;
                    (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) && (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        t.swipe.dispatch(e)
                    }, 0)), this.touchEnd.dispatch(e), this.preV.x = 0, this.preV.y = 0, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            },
            cancelAll: function() {
                clearTimeout(this.swipeTimeout)
            },
            cancel: function(e) {
                this.cancelAll(), this.touchCancel.dispatch(e)
            },
            _swipeDirection: function(e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
            },
            on: function(e, t) {
                this[e] && this[e].add(t)
            },
            off: function(e, t) {
                this[e] && this[e].del(t)
            },
            destroy: function() {
                return this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.swipe.del(), this.delta = null, this.last = null, this.now = null, this.preV = null, this.swipe = null, this.swipeTimeout = null, this.touchStart = null, this.touchMove = null, this.touchEnd = null, this.touchCancel = null, this.x1 = null, this.x2 = null, this.y1 = null, this.y2 = null, null
            }
        };
        var u = p,
            f = i(134),
            m = i.n(f),
            j = i(135),
            g = i.n(j),
            v = i(140),
            y = i.n(v),
            b = i(61),
            x = i(63),
            k = i(9),
            O = i(11),
            C = i(2),
            z = function(e, t) {
                var i = e.index,
                    n = e.image,
                    a = void 0 === n ? "" : n,
                    r = e.duration,
                    l = void 0 === r ? "" : r,
                    o = e.title,
                    s = void 0 === o ? "" : o,
                    d = "playlist" === t ? "".concat(i + 1, ". ") : "";
                return '<div class="jw-reset jw-related-item" aria-label="Video - '.concat(s || "Untitled Video", '" role="button" tabindex="0">') + '<div class="jw-reset jw-related-item-container"><div class="jw-reset jw-related-item-content jw-color-active-hover"><div class="jw-reset jw-related-item-content-container jw-color-inactive jw-color-active-hover"><div class="jw-reset jw-related-item-poster"' + function(e) {
                    return e ? ' style="background-image: url('.concat(e, ')"') : ""
                }(a) + '><div class="jw-reset jw-related-item-poster-content">' + '<div class="jw-reset jw-related-item-duration">'.concat(l ? Object(O.timeFormat)(Object(C.f)(l)) : "", "</div>") + '<div class="jw-reset jw-related-item-play jw-icon jw-icon-inline"></div></div></div><div class="jw-reset jw-related-item-title"><div class="jw-reset jw-related-item-title-content">' + '<span class="jw-reset-text jw-item-index-text jw-related-item-title-text" dir="auto">'.concat(d, "<em>").concat(s ? Object(k.e)(s).textContent : "", "</em></span>") + "</div></div></div></div></div></div>"
            };
        var S = function(e) {
                var t = e.image,
                    i = void 0 === t ? "" : t,
                    n = e.duration,
                    a = void 0 === n ? "" : n,
                    r = e.title,
                    l = void 0 === r ? "" : r,
                    o = e.index;
                return '<div class="jw-reset jw-related-shelf-item" '.concat(i ? 'style="background-image: url(' + i + ')"' : "", ' role="button" tabindex="0" aria-label="Video - ').concat(l || "Untitled Video", '" data-jw-index="').concat(o, '">') + '<div class="jw-reset jw-related-shelf-item-aspect"><div class="jw-reset jw-related-shelf-item-container"><div class="jw-reset jw-related-shelf-item-contents">' + '<div class="jw-reset jw-related-shelf-item-duration jw-text">'.concat(a ? Object(O.timeFormat)(Object(C.f)(a)) : "", "</div>") + '<div class="jw-reset-text jw-related-shelf-item-title jw-text" dir="auto">'.concat(l ? Object(k.e)(l).textContent : "", "</div>") + "</div></div></div></div>"
            },
            M = function(e) {
                var t = e.title,
                    i = void 0 === t ? "" : t,
                    n = e.index;
                return '<div class="jw-related-shelf-item" role="button" tabindex="0" aria-label="Video - '.concat(i || "Untitled Video", '" data-jw-index="').concat(n, '">') + '<div class="jw-related-shelf-item-image"></div><div class="jw-related-shelf-item-container"><div class="jw-related-shelf-item-contents">' + '<div class="jw-related-shelf-item-title" dir="auto">'.concat(i ? Object(k.e)(i).textContent : "", "</div>") + "</div></div></div>"
            },
            I = function(e) {
                var t = e.image,
                    i = void 0 === t ? "" : t,
                    n = e.duration,
                    a = void 0 === n ? "" : n,
                    r = e.title,
                    l = void 0 === r ? "" : r,
                    o = e.description,
                    s = void 0 === o ? "" : o,
                    d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return '<div class="jw-related-item jw-related-item-next-up jw-reset" aria-label="Next-up: Video - '.concat(l || "Untitled Video", '" role="button" aria-describedby="nextup-description" tabindex="0">') + '<div class="jw-related-item-container jw-reset"><div class="jw-related-item-content jw-color-active-hover jw-reset"><div class="jw-related-item-content-container jw-color-inactive jw-color-active-hover jw-reset"><div class="jw-related-item-poster jw-reset"' + function(e) {
                    return e ? ' style="background-image: url('.concat(e, ')"') : ""
                }(i) + '><div class="jw-related-item-poster-content jw-reset">' + '<div class="jw-related-item-duration jw-reset">'.concat(a ? Object(O.timeFormat)(Object(C.f)(a)) : "", "</div>") + '<div class="jw-related-item-play jw-icon jw-icon-inline jw-reset"></div></div></div><div class="jw-related-item-title jw-reset"><div class="jw-related-item-title-content jw-reset">' + '<strong class="jw-related-next-up-text jw-reset-text" dir="auto">'.concat(d, "</strong>") + '<span class="jw-item-index-text jw-related-item-title-text jw-reset-text" dir="auto">'.concat(l ? Object(k.e)(l).textContent : "", "</span>") + '</div></div><div class="jw-related-item-description jw-reset">' + '<div class="jw-related-item-description-content jw-reset" id="nextup-description">'.concat(s, "</div>") + '</div></div><div class="jw-related-item-countdown jw-reset" id="countdown"></div></div></div></div>'
            };
        var E = i(35);

        function P(e, t, i) {
            var n = new E.a(e);
            return t && n.on("click tap enter", function(e) {
                t(i || e)
            }, {
                directSelect: !0
            }), n
        }
        var L = i(23);

        function T(e, t, i) {
            this.element = e, this.item = t, this.ui = P(e, i, t), this.img = null
        }

        function V(e, t) {
            Object(k.n)(e, "jw-related-loading"), e.clientWidth, e.addEventListener("animationend", B), Object(k.a)(e, "jw-related-loaded");
            var i = e.querySelector(".jw-related-shelf-item-title");
            i && Object(k.p)(i, t.title || "")
        }

        function B(e) {
            var t = e.currentTarget;
            t.removeEventListener("animationend", B), Object(k.o)(t, /jw-related-(loaded|displayed)/, "jw-related-displayed")
        }
        T.prototype.loadImage = function() {
            if (!this.img) {
                var e = this.element,
                    t = this.item,
                    i = this.img = new Image;
                if (t.image) {
                    var n;
                    Object(k.a)(e, "jw-related-loading"), i.onload = function() {
                        clearTimeout(n),
                            function(e, t) {
                                Object(L.d)(e.querySelector(".jw-related-shelf-item-image"), {
                                    backgroundImage: t.image
                                }), V(e, t)
                            }(e, t)
                    };
                    var a = i.onerror = function() {
                        clearTimeout(n), V(e, t)
                    };
                    n = setTimeout(a, 4500), i.src = t.image
                } else V(e, t)
            }
        };
        var A, R = !0;

        function D() {
            R && (R = !1, i(141))
        }

        function U(e) {
            return A || (A = Object(x.a)("<xml>".concat(m.a).concat(g.a).concat(y.a, "</xml>"))), A.querySelector(".jw-svg-icon-".concat(e)).cloneNode(!0)
        }

        function q(e, t, i) {
            var n = N("jw-related-page jw-related-page-" + e, U("arrow-".concat(e)));
            return n.setAttribute("aria-label", i), P(n, t, e), n
        }

        function H(e, t, i) {
            var n = N("jw-related-close", i ? U("arrow-down") : Object(b.a)("close"), t, i);
            return n.setAttribute("aria-label", e), n
        }

        function N(e, t, i, n) {
            var a = document.createElement("div");
            return a.className = "jw-reset jw-icon jw-icon-inline ".concat(e).concat(n ? "" : " jw-button-color"), a.appendChild(t), a.setAttribute("role", "button"), a.setAttribute("tabindex", "0"), P(a, i), a
        }

        function _(e, t, i) {
            var n = Object(k.e)(z(e, i));
            return n.querySelector(".jw-related-item-play").appendChild(Object(b.a)("play")), P(n, t, e), n
        }

        function F(e, t, i) {
            if (e) {
                var n = Object(k.e)(I(e, t));
                return n.querySelector(".jw-related-item-play").appendChild(Object(b.a)("play")), P(n, i, e), n
            }
        }
        var W = function() {
            this.timer = null, this.interval = null
        };
        W.prototype.start = function(e, t, i, n) {
            var a = this;
            this.timer = window.setTimeout(function() {
                a.clear(), i(e)
            }, 1e3 * t);
            var r = t;
            this.interval = window.setInterval(function() {
                n(Math.max(0, r -= 1))
            }, 1e3), n(Math.max(0, t))
        }, W.prototype.clear = function() {
            window.clearTimeout(this.timer), window.clearInterval(this.interval)
        };
        var Y = W;

        function X(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Z = function() {
            function e(t, i, n, a) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.model = i, this.parentElement = a, this.container = null, this.isOpen = !1, this.feedType = n, D()
            }
            var t, i, n;
            return t = e, (i = [{
                key: "setupInterface",
                value: function() {
                    var e = this;
                    if (!this.container) {
                        var t = this.model.localization,
                            i = document.createElement("div");
                        i.className = "jw-reset jw-related jw-overlay";
                        var n = H(t.close, function(t) {
                            return e.model.trigger("close", "interaction", t)
                        });
                        i.appendChild(n), this.pageLeft = q("left", function() {
                            return e.paginate("left")
                        }, t.prev), i.appendChild(this.pageLeft);
                        var a = document.createElement("div");
                        a.className = "jw-reset jw-related-container";
                        var r = t.related.heading,
                            l = document.createElement("div");
                        l.className = "jw-related-title jw-reset-text", Object(k.p)(l, r), l.setAttribute("aria-label", r), l.setAttribute("dir", "auto"), i.appendChild(l);
                        var o = document.createElement("div");
                        o.className = "jw-reset jw-related-item-group", a.appendChild(o), i.appendChild(a), this.pageRight = q("right", function() {
                            return e.paginate("right")
                        }, t.next), i.appendChild(this.pageRight), this.container = i, this.attachInterface()
                    }
                }
            }, {
                key: "destroyInterface",
                value: function() {
                    this.container && (Object(k.g)(this.container), this.player.getControls() && this.detachInterface(), this.container = null)
                }
            }, {
                key: "toggle",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isOpen,
                        t = this.player.getContainer();
                    Object(k.u)(this.parentElement, "jw-plugin-related-open", e), Object(k.u)(t, "jw-flag-overlay-open-related", e), this.isOpen = e
                }
            }, {
                key: "visibility",
                value: function(e) {
                    this.container && Object(L.d)(this.container, e ? {
                        display: ""
                    } : {
                        display: "none"
                    })
                }
            }, {
                key: "attachInterface",
                value: function() {
                    var e = this.container,
                        t = this.parentElement;
                    t && (t.appendChild(e), Object(k.u)(this.parentElement, "jw-plugin-related", !0))
                }
            }, {
                key: "detachInterface",
                value: function() {
                    var e = this.container,
                        t = this.parentElement;
                    e && e.parentNode && e.parentNode.removeChild(e), t && Object(k.u)(t, "jw-plugin-related", !1)
                }
            }, {
                key: "paginate",
                value: function(e) {
                    this.model.trigger("overlayPaged", e)
                }
            }, {
                key: "getButtons",
                value: function() {
                    return {
                        left: this.pageLeft,
                        right: this.pageRight
                    }
                }
            }]) && X(t.prototype, i), n && X(t, n), e
        }();

        function J(e, t, i) {
            var n = e.onItemSelect;
            return i && (t.relatedFile = i), t.onclick = "play" === n ? "play" : "link", t
        }

        function G(e, t, i, n) {
            var a = i.feedItems,
                r = i.feedData,
                l = i.feedUri,
                o = J(e, {
                    visible: n,
                    method: t
                }, l);
            n && (o.feed = l, o.items = a, o.autoplay = "autoplay" === e.onComplete, o.feedData = r), e.trigger("analytics", n ? "open" : "close", o)
        }

        function K(e, t, i, n, a, r, l, o, s) {
            var d = l.feedData,
                c = l.feedUri,
                h = l.feedShownId;
            o.off("change:viewable", null, s), o.change("viewable", function(l, w) {
                Q(e, t, i, n, a, r, w, {
                    feedData: d,
                    feedUri: c,
                    feedShownId: h
                }), w ? o.off("change:viewable", null, s) : t = "inView"
            }, s)
        }

        function Q(e, t, i, n, a, r, l, o) {
            var s = o.feedData,
                d = o.feedUri,
                c = o.feedShownId,
                h = e.nextUp,
                w = e.onComplete,
                p = e.autoplayTimer,
                u = h && "autoplay" === w && "complete" === t,
                f = "recs" === i ? "discovery" : "playlist";
            e.trigger("analytics", "feedShown", J(e, {
                mode: f,
                feedData: s,
                feedShownId: c,
                itemsShown: r,
                page: a,
                reason: t,
                autoTimer: u && p >= 0 ? p : -1,
                ui: n,
                viewable: l
            }, d))
        }

        function $(e, t, i, n, a, r, l, o, s) {
            var d = s.feedData,
                c = s.feedUri,
                h = s.feedShownId,
                w = "recs" === i ? "discovery" : "playlist";
            e.trigger("analytics", "feedClick", J(e, {
                mode: w,
                feedData: d,
                feedShownId: h,
                itemsShown: r,
                reason: t,
                target: l,
                index: r.indexOf(l) + 1,
                page: a,
                ui: n,
                viewable: o
            }, c))
        }
        var ee = i(65);

        function te(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ie = function() {
                function e(t, i, n, a) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.player = t, this.model = i, this.playerModel = n, this.feedItems = [], this.feedData = {}, this.feedShownId = "", this.feedUri = "", this.feedType = a, this.currentPageNumber = 0, this.container = this.model.pluginContainer, this.view = new Z(t, i, a, this.container), c.OS.mobile && this.enableSwipe(), this.onNextUp = function(e, t) {
                        return r.setNextUp(t)
                    }, this.onPaged = function(e) {
                        return r.paginate(e, "paged")
                    }, "autoplay" === this.model.onComplete && (this.autoplay = new Y), this.keyEventHandler = function(e) {
                        r.keyDownHandler(e)
                    }, this.container.removeEventListener("keydown", this.keyEventHandler), this.container.addEventListener("keydown", this.keyEventHandler), this.model.on("overlayPaged", this.onPaged, this), this.model.change("nextUp", this.onNextUp, this)
                }
                var t, i, a;
                return t = e, (i = [{
                    key: "loadItems",
                    value: function(e, t, i) {
                        this.playerModel.off("change:viewable", null, this), this.feedItems = e, this.feedData = t, this.feedUri = i, this.nextItem = e[0], this.generatePages()
                    }
                }, {
                    key: "setNextUp",
                    value: function(e) {
                        e && (this.nextItem = e, this.generatePages())
                    }
                }, {
                    key: "onBeforePlay",
                    value: function() {
                        this.isOpen && this.close("play")
                    }
                }, {
                    key: "open",
                    value: function(e, t) {
                        var i = this.container,
                            n = this.view,
                            a = this.nextItem,
                            r = this.nextUpPage,
                            l = this.autoplay;
                        n.container || n.setupInterface(), this.generatePages(), this.goToPage(r, e), t && "enter" === t.type && a && i.addEventListener("animationend", function() {
                            var e = i.querySelector(".jw-related-item");
                            e && e.focus()
                        }, {
                            once: !0
                        }), "playing" === this.player.getState() && (this.unpausePlayer = !0), this.player.pause(), this.view.toggle(!0), l && "complete" === e && this.autoAdvance(), this.player.on("beforePlay", this.onBeforePlay, this), G(this.model, e, this, !0)
                    }
                }, {
                    key: "close",
                    value: function(e) {
                        this.player.off("beforePlay", this.onBeforePlay, this), this.playerModel.off("change:viewable", null, this), this.autoplay && this.autoplay.clear(), this.unpausePlayer && (this.player.play({
                            reason: "recs" === this.feedType ? "related-interaction" : "interaction"
                        }), this.unpausePlayer = !1), this.feedShownId = "", this.view.toggle(!1), G(this.model, e, this, !1)
                    }
                }, {
                    key: "enableSwipe",
                    value: function() {
                        var e = this;
                        return new u(this.container, {
                            swipe: function(t) {
                                var i = e.pages[e.currentPageNumber + 1],
                                    n = e.pages[e.currentPageNumber - 1];
                                "Left" === t.direction && i ? e.paginate("right", "paged_swiped") : "Right" === t.direction && n && e.paginate("left", "paged_swiped")
                            }
                        })
                    }
                }, {
                    key: "goToPage",
                    value: function(e, t) {
                        var i = this,
                            n = this.container,
                            a = this.pages,
                            r = this.nextUpPage,
                            l = this.smallPlayer,
                            o = this.model;
                        if (n && a.length) {
                            var s = n.querySelector(".jw-related-item-next-up");
                            s && s.parentElement.removeChild(s);
                            var d = n.querySelector(".jw-related-item-group");
                            Object(k.g)(d), a[e].forEach(function(t, n) {
                                var o = t.element;
                                if (e === r && 0 === n ? d.parentElement.insertBefore(o, d) : d.appendChild(o), l) {
                                    if (a[e - 1]) {
                                        var s = a[e - 1][0].element;
                                        d.appendChild(s), Object(k.u)(s, "jw-related-active-item", !1), s.setAttribute("tabindex", "-1")
                                    }
                                    if (d.appendChild(o), a[e + 1]) {
                                        var h = a[e + 1][0].element;
                                        d.appendChild(h), Object(k.u)(h, "jw-related-active-item", !1), h.setAttribute("tabindex", "-1")
                                    }
                                    if (0 !== e && (d.style.transitionDuration = "0s", e < i.currentPageNumber ? d.style.transform = "translateX(-200%)" : d.style.transform = "translateX(0)"), o.setAttribute("tabindex", "0"), !c.OS.iOS || !c.Features.iframe) {
                                        var w = function e() {
                                            o && o.focus(), d.removeEventListener("transitionend", e), d.removeEventListener("animationend", e)
                                        };
                                        d.addEventListener("transitionend", w), d.addEventListener("animationend", w)
                                    }
                                    setTimeout(function() {
                                        0 !== e ? (d.style.transitionDuration = "150ms", d.style.transform = "translateX(-100%)") : d.style.transform = "", Object(k.u)(o, "jw-related-active-item", !0)
                                    }, 0)
                                } else e === r && 0 === n ? d.parentElement.insertBefore(o, d) : d.appendChild(o), d.style.transform = ""
                            }), this.currentPageNumber = e, this.refreshButtons(), this.lastShownReason = t, this.visibleItems = a[e].map(function(e) {
                                return e.source
                            }), this.feedShownId = Object(ee.b)(ee.a), K(o, t, this.feedType, "overlay", e - r, this.visibleItems, this, this.playerModel, this)
                        }
                    }
                }, {
                    key: "generatePages",
                    value: function() {
                        var e = this,
                            t = this.model.localization.nextUp,
                            i = [],
                            a = [],
                            r = !1;
                        this.feedItems.forEach(function(l, o) {
                            var s = Object(n.j)({}, l, {
                                index: o
                            });
                            if (l === e.nextItem) a.length > 0 && (i.push(a), a = []), a.push({
                                source: s,
                                element: F(s, t, function() {
                                    return e.itemSelected(s)
                                })
                            }), e.nextUpPage = i.length, r = !0;
                            else {
                                var d = e.numItemsPerPage;
                                r && (d -= e.nextUpDisplacement), a.length >= d && (i.push(a), a = [], r = !1), a.push({
                                    source: s,
                                    element: _(s, function() {
                                        return e.itemSelected(s)
                                    }, e.feedType)
                                })
                            }
                        }), a.length > 0 && i.push(a), this.pages = i, this.currentPageNumber = this.nextUpPage
                    }
                }, {
                    key: "itemSelected",
                    value: function(e, t) {
                        var i = this.lastShownReason,
                            n = this.feedData,
                            a = this.feedUri,
                            r = this.feedType,
                            l = this.visibleItems,
                            o = this.nextUpPage,
                            s = this.currentPageNumber,
                            d = this.model;
                        t ? function(e, t, i, n, a, r) {
                            var l = r.feedData,
                                o = r.feedUri,
                                s = r.feedShownId,
                                d = "recs" === t ? "discovery" : "playlist";
                            e.trigger("analytics", "feedAutoAdvance", J(e, {
                                mode: d,
                                feedData: l,
                                feedShownId: s,
                                itemsShown: n,
                                target: a,
                                ui: i
                            }, o))
                        }(d, r, "overlay", l, e, this) : $(d, i, r, "overlay", s - o, l, e, this.playerModel.get("viewable"), this);
                        var c = "playlist" === r ? "playlistItemSelected" : "recsItemSelected";
                        d.trigger(c, {
                            item: e,
                            feedData: n,
                            feedUri: a
                        }, t ? "related-auto" : "related-interaction")
                    }
                }, {
                    key: "paginate",
                    value: function(e, t) {
                        switch (this.autoplay && (this.autoplay.clear(), this.resetAutoplay()), e) {
                            case "left":
                                return void this.goToPage(this.currentPageNumber - 1, t);
                            case "right":
                                return void this.goToPage(this.currentPageNumber + 1, t);
                            default:
                                return
                        }
                    }
                }, {
                    key: "autoAdvance",
                    value: function() {
                        var e = this,
                            t = this.model,
                            i = this.autoplay,
                            n = this.container,
                            a = this.nextItem,
                            r = t.autoplayTimer,
                            l = t.autoplayMessage.replace(/__title__/i, a.title),
                            o = n.querySelector(".jw-related-next-up-text");
                        i.start(a, r, function() {
                            return e.itemSelected(a, !0)
                        }, function(e) {
                            o && Object(k.p)(o, l.replace(/xx/i, e))
                        }), setTimeout(function() {
                            e.renderAutoplayAnimation(Math.max(0, r - .25))
                        }, 250)
                    }
                }, {
                    key: "refreshButtons",
                    value: function() {
                        var e = this.view.getButtons();
                        Object(k.u)(e.left, "jw-hidden", 0 === this.currentPageNumber), Object(k.u)(e.right, "jw-hidden", this.currentPageNumber === this.pages.length - 1)
                    }
                }, {
                    key: "keyDownHandler",
                    value: function(e) {
                        if (e) {
                            var t = this.pages[this.currentPageNumber + 1],
                                i = this.pages[this.currentPageNumber - 1];
                            switch (e.keyCode) {
                                case 39:
                                    t && this.paginate("right", "paged"), e.stopPropagation();
                                    break;
                                case 37:
                                    i && this.paginate("left", "paged"), e.stopPropagation()
                            }
                        }
                    }
                }, {
                    key: "renderAutoplayAnimation",
                    value: function(e) {
                        var t = this.container.querySelector(".jw-related-item-content");
                        if (t) {
                            var i = Object(k.e)('<svg xmlns="http://www.w3.org/2000/svg" class="jw-related-autoplay-svg" focusable="false"><rect class="jw-related-autoplay-frame" width="100%" height="100%"/><rect class="jw-related-autoplay-frame-progress jw-color-active jw-color-inactive-hover" width="100%" height="100%"/></svg>'),
                                n = i.querySelector(".jw-related-autoplay-frame-progress");
                            t.appendChild(i), this.resizeAutoplay(n), n.style.animation = e + "s linear forwards jw-dash"
                        }
                    }
                }, {
                    key: "resetAutoplay",
                    value: function() {
                        var e = this.container.querySelector(".jw-related-next-up-text");
                        e && Object(k.p)(e, this.model.localization.nextUp);
                        var t = this.container.querySelector(".jw-related-autoplay-frame-progress");
                        t && t.parentElement.removeChild(t)
                    }
                }, {
                    key: "resizeAutoplay",
                    value: function(e) {
                        if (e) {
                            var t = e.getBoundingClientRect(),
                                i = 2 * t.height + 2 * t.width;
                            e.style.strokeDasharray = i, e.style.strokeDashoffset = i
                        }
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.view.container || this.view.setupInterface(), this.generatePages(), this.isOpen && this.goToPage(this.nextUpPage, "resized")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.container.removeEventListener("keydown", this.keyEventHandler), this.model.off(null, null, this), this.playerModel.off(null, null, this), this.player.off(null, null, this), Object(k.g)(this.container)
                    }
                }, {
                    key: "isOpen",
                    get: function() {
                        return this.view.isOpen
                    }
                }, {
                    key: "smallPlayer",
                    get: function() {
                        return this.model.breakpoint < 2
                    }
                }, {
                    key: "numItemsPerPage",
                    get: function() {
                        switch (this.model.breakpoint) {
                            case 7:
                            case 6:
                            case 5:
                            case 4:
                                return 9;
                            case 3:
                                return 6;
                            case 2:
                                return 4;
                            case 1:
                            case 0:
                            default:
                                return 1
                        }
                    }
                }, {
                    key: "nextUpDisplacement",
                    get: function() {
                        switch (this.numItemsPerPage) {
                            case 9:
                                return 2;
                            case 6:
                            case 4:
                                return 1;
                            default:
                                return 0
                        }
                    }
                }]) && te(t.prototype, i), a && te(t, a), e
            }(),
            ne = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "jw-reset ";
                return '<div class="'.concat(i, 'jw-related-shelf">') + '<div class="'.concat(i, 'jw-icon jw-related-control jw-related-control-left jw-off" role="button" aria-label="').concat(e, '" tabindex="-1">').concat(m.a, "</div>") + '<div class="'.concat(i, 'jw-related-shelf-list">') + '<div class="'.concat(i, 'jw-related-shelf-items jw-related-shelf-start">') + "</div></div>" + '<div class="'.concat(i, 'jw-icon jw-related-control jw-related-control-right jw-off" aria-label="').concat(t, '" role="button" tabindex="-1">').concat(g.a, "</div>") + "</div>"
            };

        function ae(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var re = function() {
            function e(t, i, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.model = i, this.container = null, this.isOpen = !1, this.title = n, this.toggleEnded = this.onToggleAnimationEnd.bind(this), D(), this.setup()
            }
            var t, i, n;
            return t = e, (i = [{
                key: "setup",
                value: function() {
                    var e = this,
                        t = this.model.localization,
                        i = Object(k.e)('<div class="jw-related-shelf-contents jw-reset">');
                    this.container = Object(k.e)('<div class="jw-related-shelf-container jw-reset">'), this.container.appendChild(i);
                    var n = H(t.close, function(t) {
                        return e.model.trigger("close", "interaction", t)
                    }, !0);
                    Object(k.a)(n, "jw-related-more"), n.insertBefore(window.document.createTextNode(t.close), n.firstChild), this.shelfElement = Object(k.e)(ne(t.prev, t.next)), this.shelfList = this.shelfElement.querySelector(".jw-related-shelf-items"), i.appendChild(this.shelfElement), i.appendChild(n)
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.container;
                    e && (Object(k.g)(e), e && e.parentNode && e.parentNode.removeChild(e), this.container = null)
                }
            }, {
                key: "toggle",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isOpen,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    this.isOpen = e, this.shelfElement.removeEventListener("transitionend", this.toggleEnded), !t || "enter" !== t.type && "escape" !== t.type || this.shelfElement.addEventListener("transitionend", this.toggleEnded), Object(k.u)(this.player.getContainer(), "jw-flag-overlay-open-related-shelf", e)
                }
            }, {
                key: "onToggleAnimationEnd",
                value: function(e) {
                    if (e.stopImmediatePropagation(), this.shelfElement.removeEventListener("transitionend", this.toggleEnded), this.isOpen) {
                        var t = this.shelfList.querySelector(".jw-related-item-visible");
                        t && t.focus()
                    }
                }
            }, {
                key: "attachInterface",
                value: function() {
                    this.player.getContainer().querySelector(".jw-button-container").appendChild(this.container)
                }
            }]) && ae(t.prototype, i), n && ae(t, n), e
        }();

        function le(e, t) {
            this.container = e, this.displayMode = t, this.items = null
        }
        le.prototype.setItems = function(e, t) {
            var i = this.displayMode,
                a = this.items;
            this.items = e.map(function(e, r) {
                var l = a ? a[r] : null;
                return function(e, t, i, n) {
                    var a, r = "shelfWidget" === i;
                    if (n) {
                        n.ui.destroy(), a = n.element;
                        var l = e.title;
                        if (a.setAttribute("aria-label", "Video - ".concat(l || "Untitled Video")), a.setAttribute("data-jw-index", e.index), Object(k.p)(a.querySelector(".jw-related-shelf-item-title"), l ? Object(k.e)(l).textContent : ""), r) Object(k.o)(a, /jw-related-(load(ed|ing)|displayed)/, "jw-related-loading"), a.querySelector(".jw-related-shelf-item-image").removeAttribute("style");
                        else {
                            var o = e.duration;
                            Object(k.p)(a.querySelector(".jw-related-shelf-item-duration"), o ? "".concat(Object(O.timeFormat)(Object(C.f)(o))) : ""), a.setAttribute("style", "background-image: url(".concat(e.image, ")"))
                        }
                    } else r ? (a = Object(k.e)(M(e))).querySelector(".jw-related-shelf-item-image").appendChild(Object(b.a)("play")) : a = Object(k.e)(S(e));
                    return new T(a, e, t)
                }(Object(n.j)({}, e, {
                    index: r
                }), t, i, l)
            })
        }, le.prototype.load = function(e, t) {
            var i = this;
            this.items.forEach(function(n, a) {
                var r = a >= e * t && a < (e + 1) * t;
                "shelfWidget" === i.displayMode && r && n.loadImage()
            })
        }, le.prototype.update = function(e, t) {
            var i = this,
                n = this.container,
                a = this.items,
                r = Math.max(0, (e - 1) * t),
                l = Math.min(a.length, (e + 2) * t);
            if (function(e, t, i) {
                    for (var n = Array.prototype.slice.call(e.childNodes), a = 0; a < n.length; a++) {
                        var r = parseInt(n[a].getAttribute("data-jw-index"));
                        (r < t || r >= i || void 0 === t) && e.removeChild(n[a])
                    }
                }(n, r, l), n.childNodes.length) ! function(e, t, i) {
                    var n = e.firstChild;
                    if (!n) return;
                    for (var a = parseInt(n.getAttribute("data-jw-index")), r = t; r < a; r++) {
                        var l = i[r];
                        e.insertBefore(l.element, n)
                    }
                }(n, r, a),
                function(e, t, i) {
                    var n = e.lastChild;
                    if (!n) return;
                    for (var a = parseInt(n.getAttribute("data-jw-index")) + 1; a < t; a++) {
                        var r = i[a];
                        e.appendChild(r.element)
                    }
                }(n, l, a);
            else
                for (var o = r; o < l; o++) {
                    var s = a[o];
                    n.appendChild(s.element)
                }
            return a.reduce(function(n, a, r) {
                var l = r >= e * t && r < (e + 1) * t;
                return l && n.push(a.item), Object(k.u)(a.element, "jw-related-item-visible", l), "shelfWidget" === i.displayMode && l && a.loadImage(), a.element.setAttribute("tabindex", l ? "0" : "-1"), n
            }, [])
        };
        var oe = i(8);

        function se(e, t) {
            var i = this;
            Object(n.j)(this, oe.a);
            var a, r, l, o, s, d, h = e.querySelector(".jw-related-control-left"),
                w = e.querySelector(".jw-related-control-right"),
                p = e.querySelector(".jw-related-shelf-items"),
                f = new le(p, t),
                m = !1,
                j = [],
                g = "",
                v = !1,
                y = !1,
                b = [];

            function x(e) {
                if (e) switch (e.keyCode) {
                    case 39:
                        O("paged", e), e.stopPropagation();
                        break;
                    case 37:
                        C("paged", e), e.stopPropagation()
                }
            }

            function O(e, t) {
                !m && v && (0 === r ? Object(k.n)(p, "jw-related-shelf-start") : Object(k.a)(p, "jw-related-shelf-slide-next"), r++, z(t, e))
            }

            function C(e, t) {
                !m && y && (1 === r ? Object(k.a)(p, "jw-related-shelf-start") : Object(k.a)(p, "jw-related-shelf-slide-prev"), r--, z(t, e))
            }

            function z(e, t) {
                f.load(r, a), s = function(e, t, i) {
                    if (i.target !== p) return;
                    if (i.stopImmediatePropagation(), p.removeEventListener("transitionend", s), m) {
                        S(t), Object(k.n)(p, ["jw-related-shelf-animating", "jw-related-shelf-slide-next", "jw-related-shelf-slide-prev"]), m = !1;
                        var n = p.querySelector(".jw-related-item-visible");
                        e && ("enter" === e.type || "keydown" === e.type) && n && n.focus()
                    }
                    M()
                }.bind(this, e, t), p.addEventListener("transitionend", s), Object(k.a)(p, "jw-related-shelf-animating"), m = !0
            }

            function S(e) {
                b = f.update(r, a), I(e)
            }

            function M() {
                y = 0 !== r, Object(k.u)(h, "jw-off", !y), h.setAttribute("tabindex", y ? "0" : "-1"), v = r !== o - 1, Object(k.u)(w, "jw-off", !v), w.setAttribute("tabindex", v ? "0" : "-1")
            }
            this.items = f, this.load = function(e, n) {
                r = 0, j = e, a = n, o = Math.ceil(j.length / a), i.items.setItems(j, function(e) {
                    i.trigger("feedClick", {
                        lastShownReason: l,
                        page: r,
                        visibleItems: b,
                        item: e,
                        feedShownId: g
                    })
                }), S("shelfWidget" === t ? "feed_loaded" : null), Object(k.a)(p, "jw-related-shelf-start"), M()
            }, this.resize = function(e) {
                if (e !== a && j && !(j.length < 1)) {
                    var t = o > 1 && r === o - 1;
                    a = e, o = Math.ceil(j.length / a), r = t ? o - 1 : Math.min(r, o), S("resized"), M(), 0 === r && Object(k.a)(p, "jw-related-shelf-start")
                }
            }, this.onShelfToggled = function(t, i) {
                e.removeEventListener("keydown", x), t ? (e.addEventListener("keydown", x), I(i)) : g = ""
            }, this.destroy = function() {
                d && (d.destroy(), d = null), this.off()
            };
            var I = function(e) {
                e && (l = e, g = Object(ee.b)(ee.a), i.trigger("feedShown", {
                    reason: e,
                    page: r,
                    visibleItems: b,
                    feedShownId: g
                }))
            };
            P(h, C.bind(this, "paged")), P(w, O.bind(this, "paged")), c.OS.mobile && (d = new u(p, {
                swipe: function(e) {
                    "Left" === e.direction ? O("paged_swipe") : C("paged_swipe")
                }
            }))
        }

        function de(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ce, he = function() {
                function e(t, i, n, a) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.player = t, this.model = i, this.playerModel = n, this.view = new re(t, i, i.localization.related.heading), this.scroller = new se(this.view.container, "shelf"), this.scroller.on("feedShown", this.feedShown, this), this.scroller.on("feedClick", this.feedClick, this), this.feed = null, this.feedType = a
                }
                var t, i, n;
                return t = e, (i = [{
                    key: "loadItems",
                    value: function(e, t, i) {
                        this.playerModel.off("change:viewable", null, this), this.feed = {
                            feedItems: e,
                            feedData: t,
                            feedUri: i
                        }, this.scroller.load(e, this.numItemsPerPage)
                    }
                }, {
                    key: "open",
                    value: function(e, t) {
                        this.view.toggle(!0, t), this.scroller.onShelfToggled(!0, e), G(this.model, e, this.feed, !0)
                    }
                }, {
                    key: "close",
                    value: function(e, t) {
                        this.playerModel.off("change:viewable", null, this), this.view.toggle(!1, t), this.scroller.onShelfToggled(!1, e), G(this.model, e, this.feed, !1)
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.scroller.resize(this.numItemsPerPage)
                    }
                }, {
                    key: "feedShown",
                    value: function(e) {
                        var t = e.reason,
                            i = e.page,
                            n = e.visibleItems,
                            a = e.feedShownId,
                            r = this.feed;
                        r.feedShownId = a, K(this.model, t, this.feedType, "shelf", i, n, r, this.playerModel, this)
                    }
                }, {
                    key: "feedClick",
                    value: function(e) {
                        var t = e.lastShownReason,
                            i = e.page,
                            n = e.visibleItems,
                            a = e.item,
                            r = e.feedShownId,
                            l = this.model,
                            o = this.feed,
                            s = this.feedType,
                            d = o.feedData,
                            c = o.feedUri;
                        o.feedShownId = r, $(l, t, this.feedType, "shelf", i, n, a, this.playerModel.get("viewable"), o);
                        var h = "playlist" === s ? "playlistItemSelected" : "recsItemSelected";
                        l.trigger(h, {
                            item: a,
                            feedData: d,
                            feedUri: c
                        }, "related-interaction")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.view.destroy(), this.playerModel.off(null, null, this), this.scroller.destroy()
                    }
                }, {
                    key: "isOpen",
                    get: function() {
                        return this.view.isOpen
                    }
                }, {
                    key: "numItemsPerPage",
                    get: function() {
                        switch (this.model.breakpoint) {
                            case 7:
                            case 6:
                            case 5:
                                return 5;
                            case 4:
                                return 4;
                            case 3:
                            case 2:
                                return 3;
                            case 1:
                            case 0:
                            default:
                                return 0
                        }
                    }
                }]) && de(t.prototype, i), n && de(t, n), e
            }(),
            we = i(143),
            pe = i.n(we);

        function ue(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var fe = function() {
            function e(t, i, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "recs";
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = i, this.playerModel = n, this.model = t, this.feedItems = [], this.feedData = {}, this.feedUri = "", this.overlay = new ie(i, t, n, a), this.openedOnPause = !1, this.feedType = a, "shelf" === this.displayMode && (this.shelf = new he(i, t, n, a), i.on("pause", this.onPause, this), i.on("play", this.onPlay, this)), "recs" === a && i.on("complete", this.onComplete, this), t.change("breakpoint", this.onResize, this), t.on("close", this.close, this)
            }
            var t, i, n;
            return t = e, (i = [{
                key: "updateFeed",
                value: function(e, t, i) {
                    this.feedItems = e, this.feedData = t, this.feedUri = i, this.overlay.loadItems(e, t, i), this.shelf && this.shelf.loadItems(e, t, i), this.playerModel.off("change:controlsEnabled", this.controlsEnabled), this.playerModel.change("controlsEnabled", this.controlsEnabled, this)
                }
            }, {
                key: "controlsEnabled",
                value: function(e, t) {
                    t && (e.off("change:controlsEnabled", this.controlsEnabled), this.shelf && this.shelf.view.attachInterface(), this.createButtons())
                }
            }, {
                key: "onPause",
                value: function() {
                    var e = this.shelf;
                    this.currentView !== e || e.isOpen || (this.open("on_pause"), this.openedOnPause = !0)
                }
            }, {
                key: "onPlay",
                value: function() {
                    this.currentView === this.shelf && this.openedOnPause && this.close("play")
                }
            }, {
                key: "onComplete",
                value: function() {
                    var e = this.model.onComplete;
                    this.shelf && this.shelf.isOpen && this.shelf.close("complete"), "autoplay" === e && this.model.autoplayTimer <= 0 ? this.overlay.autoAdvance() : "hide" !== e && this.overlay.open("complete")
                }
            }, {
                key: "toggleShelf",
                value: function(e, t) {
                    var i = this.shelf;
                    i.isOpen ? this.close(e, t) : this.open(e, t), this.moreButton.setAttribute("aria-expanded", i.isOpen)
                }
            }, {
                key: "open",
                value: function(e, t) {
                    var i = this.currentView;
                    i && (i !== this.shelf || this.playerModel.get("controls")) && i.open(e, t)
                }
            }, {
                key: "close",
                value: function(e, t) {
                    var i = this.currentView,
                        n = this.shelf,
                        a = this.player;
                    i && (i !== n || this.playerModel.get("controls")) && i.isOpen && (i !== n || "interaction" !== e && "interaction_more" !== e || !this.openedOnPause || (a.off("pause", this.onPause, this), a.off("play", this.onPlay, this)), this.openedOnPause = !1, i.close(e, t), !t || "enter" !== t.type && "escape" !== t.type || this.currentButton.focus())
                }
            }, {
                key: "onResize",
                value: function() {
                    var e = this.shelf,
                        t = this.overlay,
                        i = this.currentView,
                        n = this.model.breakpoint;
                    i && (i.resize(), e && (n < 2 && e.isOpen ? (e.close(), t.open("resized")) : n >= 2 && t.isOpen && i !== t && (t.close(), e.open("resized"))))
                }
            }, {
                key: "showButton",
                value: function() {
                    var e = this.controlbarButton,
                        t = this.moreButton,
                        i = this.player;
                    t ? (Object(k.u)(t, "jw-hidden", this.smallPlayer), Object(k.u)(e, "jw-hidden", !this.smallPlayer)) : e && Object(k.u)(e, "jw-hidden", !1);
                    var n = i.getContainer().querySelector(".jw-logo");
                    n && Object(k.u)(n, "jw-logo-bump", this.currentButton === t && this.model.bumpLogo)
                }
            }, {
                key: "createButtons",
                value: function() {
                    var e = this,
                        t = this.player,
                        i = this.model,
                        n = this.shelf,
                        a = t.getContainer(),
                        r = i.localization.related.heading;
                    if (this.controlbarButton || "shelfWidget" === this.displayMode || (t.addButton(pe.a, r, function(t) {
                            return e.open("interaction", t)
                        }, "related", "jw-related-btn"), this.controlbarButton = a.querySelector(".".concat("jw-related-btn")), Object(k.u)(this.controlbarButton, "jw-hidden", !0)), n && !this.moreButton) {
                        ce || (ce = Object(x.a)(pe.a)), this.moreButton = N("jw-related-more", ce.cloneNode(!0), function(t) {
                            return e.toggleShelf("interaction_more", t)
                        }, !0), this.moreButton.appendChild(document.createTextNode(r));
                        var l = n.view.container;
                        l.insertBefore(this.moreButton, l.firstChild)
                    }
                    i.change("breakpoint", this.showButton, this)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.player.off(null, null, this), this.playerModel.off(null, null, this), this.model.off(null, null, this), this.shelf && this.shelf.destroy(), this.overlay.destroy(), this.player.removeButton("related");
                    var e = this.moreButton;
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
            }, {
                key: "smallPlayer",
                get: function() {
                    return this.model.breakpoint < 2
                }
            }, {
                key: "displayMode",
                get: function() {
                    return this.model.displayMode
                }
            }, {
                key: "currentView",
                get: function() {
                    return this.model.breakpoint < 2 || "overlay" === this.displayMode || "complete" === this.player.getState() ? this.overlay : this.shelf
                }
            }, {
                key: "currentButton",
                get: function() {
                    return this.model.breakpoint >= 2 && "shelf" === this.displayMode ? this.moreButton : this.controlbarButton
                }
            }, {
                key: "items",
                get: function() {
                    return this.feedItems
                },
                set: function(e) {
                    this.feedItems = e
                }
            }]) && ue(t.prototype, i), n && ue(t, n), e
        }();

        function me(e) {
            return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function je(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ge(e, t) {
            return !t || "object" !== me(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function ve(e, t, i) {
            return (ve = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ye(e)););
                    return e
                }(e, t);
                if (n) {
                    var a = Object.getOwnPropertyDescriptor(n, t);
                    return a.get ? a.get.call(i) : a.value
                }
            })(e, t, i || e)
        }

        function ye(e) {
            return (ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function be(e, t) {
            return (be = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var xe = function(e) {
                function t(e, i, n) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), ge(this, ye(t).call(this, e, i, n, "playlist"))
                }
                var i, n, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && be(e, t)
                }(t, fe), i = t, (n = [{
                    key: "updateFeed",
                    value: function(e, i) {
                        this.feedItems !== e && ve(ye(t.prototype), "updateFeed", this).call(this, e, i, "")
                    }
                }, {
                    key: "displayMode",
                    get: function() {
                        return this.model.configDisplayMode ? ve(ye(t.prototype), "displayMode", this) : "overlay"
                    }
                }, {
                    key: "currentView",
                    get: function() {
                        return this.model.breakpoint < 2 || "overlay" === this.displayMode ? this.overlay : this.shelf
                    }
                }]) && je(i.prototype, n), a && je(i, a), t
            }(),
            ke = function(e) {
                this.storage = e
            };

        function Oe(e) {
            return e.mediaid || e.file || (Array.isArray(e.sources) && e.sources[0] || {}).file
        }
        ke.prototype.filterAvailableItems = function(e, t, i) {
            var n = function(e, t) {
                return e.filter(function(e) {
                    var i = Array.isArray(e.sources) && e.sources[0] || {};
                    return e.image && e.title && ("play" === t && (i.file || e.file) || "play" !== t && e.link)
                })
            }(e, i);
            if (!(n = function(e, t) {
                    return e.filter(function(e) {
                        return -1 === t.indexOf(Oe(e))
                    })
                }(n, (t || []).map(function(e) {
                    return Oe(e)
                })))) return null;
            var a = this.getUnstoredRecommendations(n);
            return a.length ? a : (this.restoreRecommendations(e), n)
        }, ke.prototype.saveRecommendations = function(e) {
            var t = this;
            e.forEach(function(e) {
                return t.storage.addItem(Oe(e))
            })
        }, ke.prototype.itemSelected = function(e, t, i) {
            return this.storage.addItem(Oe(e), i), t.splice(e.index, 1), t
        }, ke.prototype.restoreRecommendations = function(e) {
            var t = this;
            e.forEach(function(e) {
                return t.storage.removeItem(Oe(e))
            })
        }, ke.prototype.getUnstoredRecommendations = function(e) {
            var t = this;
            return e.filter(function(e) {
                return !t.storage.containsItem(Oe(e))
            })
        };
        var Ce = ke,
            ze = i(52);

        function Se(e) {
            return (Se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Me(e) {
            return (Me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ie(e, t) {
            return (Ie = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ee(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var Pe = "shelf",
            Le = function(e) {
                function t(e, i, n) {
                    var a, r, l;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = this, a = !(l = Me(t).call(this)) || "object" !== Se(l) && "function" != typeof l ? Ee(r) : l;
                    var o = e.id,
                        s = e.localization,
                        d = e.logo,
                        c = e.repeat,
                        h = i.autoplaytimer,
                        w = i.disableRelated,
                        p = void 0 !== w && w,
                        u = i.displayMode,
                        f = i.displayMode,
                        m = void 0 === f ? Pe : f,
                        j = i.file,
                        g = i.oncomplete,
                        v = i.recommendations,
                        y = i.requestOptions,
                        b = i.showButton,
                        x = void 0 === b || b,
                        k = s.related.autoplaymessage,
                        O = h >= 0 ? h : 10,
                        C = !(!d || "bottom-left" !== d.position),
                        z = g;
                    !1 === z || c ? z = "hide" : z || (z = "show");
                    var S, M, I, E = "autoplay" === g ? "play" : i.onclick,
                        P = i.selector || "#".concat(o, "-shelf-widget");
                    return S = Ee(Ee(a)), M = a.attributes, I = {
                        autoplayMessage: k,
                        autoplayTimer: O,
                        bumpLogo: C,
                        disableRelated: !!p,
                        configDisplayMode: u,
                        displayMode: /shelf(?:Widget)?|overlay/.test(m) ? m : Pe,
                        file: j,
                        onComplete: z,
                        onItemSelect: E,
                        pluginContainer: n,
                        recommendations: v,
                        requestOptions: y,
                        selector: P,
                        showButton: !!x,
                        localization: s
                    }, Object.keys(I).forEach(function(e) {
                        var t = I[e];
                        Object.defineProperty(M, e, function(e, t) {
                            return {
                                enumerable: !0,
                                configurable: !1,
                                writable: t,
                                value: e
                            }
                        }(t, !1)), Object.defineProperty(S, e, {
                            get: function() {
                                return M[e]
                            },
                            enumerable: !1
                        })
                    }), a.addAttributes({
                        nextUp: null,
                        breakpoint: 0
                    }), a
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Ie(e, t)
                }(t, ze["a"]), t
            }();
        var Te = function(e) {
                var t, i, n = "jwplayer.mediaIds",
                    a = 1e3,
                    r = {};

                function l() {
                    try {
                        r = e.localStorage
                    } catch (e) {}
                    this.addItem = function(e, t) {
                        var l = "auto" === t ? 36e5 : 6e5;
                        ! function(e, t) {
                            (r[n] || "").length >= a && function(e) {
                                var t = Object.keys(i).filter(function(e) {
                                    return !(Date.now() >= i[e] && (s(e), 1))
                                }).sort(function(e, t) {
                                    return i[e] - i[t]
                                });
                                for (; e-- > 0;) delete i[t.shift()];
                                o()
                            }(1);
                            i[e] = t, o()
                        }(e, Date.now() + l)
                    }, this.removeItem = function(e) {
                        i[e] && s(e)
                    }, this.containsItem = function(e) {
                        var t = i[e];
                        return !!t && (!(Date.now() >= t) || (s(e), !1))
                    }
                }

                function o() {
                    try {
                        Object.keys(i).length ? r[n] = JSON.stringify(i) : delete r[n]
                    } catch (e) {}
                }

                function s(e) {
                    delete i[e], o()
                }
                return function() {
                    if (!t) {
                        t = new l;
                        var e = r[n];
                        if (e) try {
                            i = JSON.parse(e)
                        } catch (e) {}
                        i = i || {}
                    }
                    return t
                }
            }(window),
            Ve = i(71),
            Be = i(67);

        function Ae(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Re = function() {
            function e(t, i) {
                var a = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = {
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    },
                    l = {
                        width: "100%",
                        height: "100%"
                    };
                Object(L.b)(".jw-contract-trigger::before", Object(n.j)({
                    content: "",
                    overflow: "hidden",
                    width: "200%",
                    height: "200%"
                }, r));
                var o = Object(k.e)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'),
                    s = o.firstChild,
                    d = s.firstChild,
                    c = s.nextSibling;
                "static" === getComputedStyle(t).position && Object(L.d)(t, {
                    position: "relative"
                }), Object(L.d)([s, c], Object(n.j)({
                    overflow: "auto"
                }, r, l)), Object(L.d)(o, Object(n.j)({}, r, l)), this.expandElement = s, this.expandChild = d, this.contractElement = c, this.hiddenElement = t.appendChild(o), this.element = t, this.callback = i, this.resizeRaf = -1, this.lastWidth = 0, this.currentWidth = t.offsetWidth, this.scrollListener = function(e) {
                    var i = a.resizeRaf;
                    i && Object(Be.a)(i), i = Object(Be.b)(function() {
                        var i = a.currentWidth = t.offsetWidth;
                        a.lastWidth !== i && a.callback(e, i)
                    }), a.resizeRaf = i, a.resetTriggers()
                }, t.addEventListener("scroll", this.scrollListener, !0), this.resetTriggers()
            }
            var t, i, a;
            return t = e, (i = [{
                key: "resetTriggers",
                value: function() {
                    var e = this.currentWidth;
                    this.contractElement.scrollLeft = 2 * e, Object(L.d)(this.expandChild, {
                        width: e + 1
                    }), this.expandElement.scrollLeft = e + 1, this.lastWidth = e
                }
            }, {
                key: "destroy",
                value: function() {
                    this.callback && (this.element.removeEventListener("scroll", this.scrollListener, !0), this.element.removeChild(this.hiddenElement), this.scrollListener = this.callback = null)
                }
            }]) && Ae(t.prototype, i), a && Ae(t, a), e
        }();

        function De(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Ue = function() {
                function e(t, i, a) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), Object(n.j)(this, oe.a), this.player = t, this.playerModel = a, this.model = i, this.container = null, this.createContainer = null, this.visible = !0, this.scroller = null, this.width = 0, this.viewable = null, this.intersectionEntry = null, this.resizeListener = null, D(), t.on("fullscreen", function(e) {
                        e.fullscreen ? r.updateViewable(0) : r.setIntersection(r.intersectionEntry)
                    }, this)
                }
                var t, i, a;
                return t = e, (i = [{
                    key: "resize",
                    value: function(e, t) {
                        this.width = t;
                        var i = this.itemsPerPage;
                        this.scroller || this.setup(this.model.selector), Object(k.o)(this.container, /jw-shelf-items-\d+/, "jw-shelf-items-".concat(i)), this.scroller.resize(i)
                    }
                }, {
                    key: "setup",
                    value: function(e) {
                        var t = this,
                            i = this.player,
                            n = this.playerModel,
                            a = this.model,
                            r = a.localization,
                            l = i.getContainer(),
                            o = l.ownerDocument || document,
                            s = o.querySelector(e);
                        (this.createContainer = !s) ? ((s = o.createElement("div")).id = e.replace(/^#/, ""), l.nextSibling ? l.parentNode.insertBefore(s, l.nextSibling) : l.parentElement.appendChild(s), n.change("width", function(e, t) {
                            Object(L.d)(s, {
                                width: t
                            })
                        }, this), n.on("change:containerWidth", this.resize, this), this.width = n.get("containerWidth")) : (this.width = s.clientWidth || 320, Object(k.g)(s), this.resizeListener = new Re(s, function(e, i) {
                            return t.updateBounds(i)
                        }));
                        var d = this.itemsPerPage;
                        this.container = s, this.toggle(this.visible);
                        var c = ["jw-related-shelf-container", "jw-shelf-widget", "jw-shelf-items-".concat(d)];
                        n.get("touchMode") && c.push("jw-flag-touch"), Object(k.a)(s, c), a.change("breakpoint", function(e, t) {
                            Object(Ve.b)(s, Math.max(2, t))
                        }, this);
                        var h = Object(k.e)('<div class="jw-related-shelf-contents">'),
                            w = Object(k.e)('<div class="jw-related-more">'.concat(r.related.heading, "</div>")),
                            p = Object(k.e)(ne(r.prev, r.next, ""));
                        h.appendChild(w), h.appendChild(p), s.appendChild(h);
                        var u = new se(s, "shelfWidget"),
                            f = Array.apply(null, {
                                length: d
                            }).map(function() {
                                return {}
                            });
                        this.scroller = u, u.onShelfToggled(!0), u.items.setItems(f), u.items.update(0, f.length)
                    }
                }, {
                    key: "toggle",
                    value: function(e) {
                        this.visible = e, this.container && Object(L.d)(this.container, {
                            display: e ? "" : "none"
                        })
                    }
                }, {
                    key: "updateBounds",
                    value: function(e) {
                        this.width !== e && this.resize(null, e)
                    }
                }, {
                    key: "getContainer",
                    value: function() {
                        return this.container
                    }
                }, {
                    key: "setIntersection",
                    value: function(e) {
                        var t = this.playerModel;
                        !t.get("fullscreen") && t.get("activeTab") ? (this.intersectionEntry = e, this.updateViewable(Math.round(e.intersectionRatio))) : this.updateViewable(0)
                    }
                }, {
                    key: "updateViewable",
                    value: function(e) {
                        this.viewable !== e && (this.viewable = e, this.trigger("viewable", e))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.container,
                            t = this.scroller;
                        this.player.off(null, null, this), this.playerModel.off(null, null, this), this.model.off(null, null, this), this.resizeListener && (this.resizeListener.destroy(), this.resizeListener = null), this.off(), t && t.destroy(), e && (Object(k.g)(e), e.parentNode && this.createContainer ? e.parentNode.removeChild(e) : Object(k.o)(e, /jw-.+/, ""), this.container = null, this.createContainer = null)
                    }
                }, {
                    key: "itemsPerPage",
                    get: function() {
                        var e = Math.max(0, this.width - 60);
                        return Math.ceil(Math.min(Math.max(2, e / 200), 5))
                    }
                }]) && De(t.prototype, i), a && De(t, a), e
            }(),
            qe = i(80);

        function He(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Ne = function() {
                function e(t, i, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.player = t, this.model = n, this.feedItems = [], this.feedData = {}, this.feedUri = "", this.view = new Ue(t, n, i), n.once("change:breakpoint", this.setup, this)
                }
                var t, i, n;
                return t = e, (i = [{
                    key: "setup",
                    value: function() {
                        var e = this.view;
                        e.scroller || (e.setup(this.model.selector), qe.a.addWidget(e), qe.a.observe(e.container), e.scroller.on("feedShown", this.feedShown, this), e.scroller.on("feedClick", this.feedClick, this))
                    }
                }, {
                    key: "loadItems",
                    value: function(e) {
                        var t = this.view;
                        t.off("viewable", null, this), this.setup(), t.scroller.load(e, t.itemsPerPage)
                    }
                }, {
                    key: "toggle",
                    value: function(e) {
                        var t = this.view;
                        t.off("viewable", null, this), t.toggle(e)
                    }
                }, {
                    key: "feedClick",
                    value: function(e) {
                        var t = e.lastShownReason,
                            i = e.page,
                            n = e.visibleItems,
                            a = e.item,
                            r = e.feedShownId,
                            l = this.model,
                            o = this.feedData,
                            s = this.feedUri;
                        $(l, t, this.feedType, "shelfWidget", i, n, a, this.view.viewable, {
                            feedData: o,
                            feedUri: s,
                            feedShownId: r
                        });
                        var d = "playlist" === this.feedType ? "playlistItemSelected" : "recsItemSelected";
                        l.trigger(d, {
                            item: a,
                            feedData: o,
                            feedUri: s
                        }, "related-interaction");
                        var c = this.player.getContainer();
                        c.focus({
                            preventScroll: !0
                        }), c.blur()
                    }
                }, {
                    key: "feedShown",
                    value: function(e) {
                        var t = this,
                            i = e.reason,
                            n = e.page,
                            a = e.visibleItems,
                            r = e.feedShownId,
                            l = this.view,
                            o = this.feedData,
                            s = this.feedUri;
                        l.off("viewable", null, this);
                        var d = l.viewable;
                        null !== d ? (Q(this.model, i, this.feedType, "shelfWidget", n, a, d, {
                            feedData: o,
                            feedUri: s,
                            feedShownId: r
                        }), d || l.once("viewable", function(e) {
                            Q(t.model, "inView", t.feedType, "shelfWidget", n, a, e, {
                                feedData: o,
                                feedUri: s,
                                feedShownId: r
                            })
                        }, this)) : l.once("viewable", function() {
                            return t.feedShown({
                                reason: i,
                                page: n,
                                visibleItems: a,
                                feedShownId: r
                            })
                        }, this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.view;
                        this.model.off(null, null, this), qe.a.unobserve(e.container), qe.a.remove(e), e.destroy()
                    }
                }, {
                    key: "updateFeed",
                    value: function(e, t, i) {
                        this.feedItems = e, this.feedData = t, this.feedUri = i, this.loadItems(e)
                    }
                }, {
                    key: "items",
                    get: function() {
                        return this.feedItems
                    },
                    set: function(e) {
                        this.feedItems = e
                    }
                }, {
                    key: "feedType",
                    get: function() {
                        return this.feedItems.length && !this.feedUri ? "playlist" : "recs"
                    }
                }]) && He(t.prototype, i), n && He(t, n), e
            }(),
            _e = i(81);

        function Fe(e) {
            return (Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function We(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function Ye(e, t) {
            return !t || "object" !== Fe(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Xe(e) {
            return (Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ze(e, t) {
            return (Ze = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Je(e, t) {
            var i = e.mediaid,
                n = Ge(e.recommendations, i),
                a = Ge(t.recommendations, i),
                r = Ge(t.file, i);
            return {
                feed: n,
                recommendation: a,
                file: r,
                isValid: !!(n || a || r)
            }
        }

        function Ge(e, t) {
            var i = null;
            return e && (e.indexOf("MEDIAID") >= 0 ? t && (i = e.replace("MEDIAID", t)) : i = e), i
        }
        var Ke = function(e) {
            function t(e) {
                var i;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (i = Ye(this, Xe(t).call(this))).player = e, i.playerModel = null, i.relatedFilter = new Ce(Te()), i.loader = null, i.playlistController = null, i.recsController = null, i.widgetController = null, i
            }
            var i, a, r;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ze(e, t)
            }(t, oe["a"]), i = t, (a = [{
                key: "setup",
                value: function(e, t, i) {
                    if (!this.playerModel) {
                        this.playerModel = e;
                        var n = this.player,
                            a = new Le(n.getConfig(), t, i);
                        this.model = a, a.on("playlistItemSelected", this.playlistItemSelected, this), a.on("recsItemSelected", this.recsItemSelected, this), a.on("error", this.onError, this), a.on("analytics", this.onAnalytics, this), n.on("breakpoint", function(e) {
                            var t = e.breakpoint;
                            a.breakpoint = t
                        }, this), n.once("playlistItem", function() {
                            ! function(e) {
                                e.trigger("analytics", "setup", J(e, {}))
                            }(a)
                        }, this), n.on("playlistItem", this.onPlaylistItem, this), n.on("remove", this.destroy, this), "shelfWidget" === a.displayMode && (this.widgetController = new Ne(n, e, a))
                    }
                }
            }, {
                key: "playlistItemSelected",
                value: function(e, t) {
                    var i = e.item,
                        n = this.player;
                    this.close(null, "play");
                    var a = t || "related-interaction";
                    n.playlistItem(i.index, {
                        reason: a
                    })
                }
            }, {
                key: "recsItemSelected",
                value: function(e, t) {
                    var i = e.item,
                        n = e.feedData,
                        a = e.feedUri,
                        r = this.model,
                        l = this.playerModel,
                        o = this.player,
                        s = this.relatedFilter,
                        d = this.widgetController,
                        c = this.recsController;
                    this.close(null, "play");
                    var h = t && t.indexOf("auto") >= 0 ? "auto" : "";
                    if (function(e, t, i, n, a) {
                            var r = a.feedData,
                                l = a.feedUri,
                                o = e.autoplayTimer,
                                s = t && t.indexOf("auto") > -1,
                                d = t;
                            s || (d = "play" === e.onItemSelect ? "manual" : "link");
                            var c = {
                                item: n,
                                feedData: r,
                                auto: s,
                                autoplaytimer: o >= 0 ? o : -1,
                                position: n.index,
                                method: d
                            };
                            n.pin_set_id && (c.pin_set_id = n.pin_set_id), e.trigger("analytics", "play", J(e, c, l))
                        }(r, h || t, 0, i, {
                            feedData: n,
                            feedUri: a
                        }), "link" === r.onItemSelect) window.top.location = i.link;
                    else {
                        var w = function() {
                            o.play({
                                reason: t
                            })
                        };
                        l.once("change:playlistItem", w, this), o.load(i, n), l.off("change:playlistItem", w, this)
                    }
                    var p = d || c,
                        u = s.itemSelected(i, p.items, h);
                    d && (d.items = u), c && (c.items = u);
                    var f = Je(i, r);
                    this.loadRecs(f)
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this.playlistController,
                        i = this.recsController;
                    t ? t.open("api", e) : i && i.open("api", e)
                }
            }, {
                key: "close",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "api",
                        i = this.playlistController,
                        n = this.recsController;
                    i ? i.close(t, e) : n && n.close(t, e)
                }
            }, {
                key: "next",
                value: function(e) {
                    var t = this.player;
                    if (this.playlistController) return this.close(null, "play"), void t.playlistNext({
                        reason: "interaction"
                    });
                    var i = this.widgetController || this.recsController;
                    if (i) {
                        var n = i.items,
                            a = n[0],
                            r = i.feedData,
                            l = i.feedUri;
                        e = e || {}, a && this.recsItemSelected({
                            item: a,
                            items: n,
                            feedData: r,
                            feedUri: l
                        }, e.reason || "external")
                    }
                }
            }, {
                key: "onAnalytics",
                value: function(e, t) {
                    this.trigger(e, t)
                }
            }, {
                key: "onPlaylistItem",
                value: function(e) {
                    var t = e.index,
                        i = e.item,
                        a = this.player,
                        r = this.playerModel,
                        l = this.model,
                        o = r.attributes,
                        s = o.playlist,
                        d = o.feedData,
                        c = t === s.length - 1,
                        h = s[t + 1] || s[0],
                        w = "shelfWidget" === l.displayMode,
                        p = Je(i, l),
                        u = !l.disableRelated && p.isValid,
                        f = !1;
                    if (w) {
                        var m = c && u,
                            j = s.length > 1 && !m;
                        this.widgetController.toggle(u || j), j ? this.widgetController.feedItems !== s && (Object(_e.a)(s, "images", "image"), this.widgetController.updateFeed(s, d, "")) : u && (f = !0, this.loadRecs(p))
                    }
                    c ? u && (this.removePlaylist(), this.recsController || (this.recsController = new fe(l, a, r)), f || this.loadRecs(p)) : (this.removeRecs(), this.playlistController || (this.playlistController = new xe(l, a, r)), this.playlistController.updateFeed(s, d), this.trigger("nextUp", Object(n.j)({}, h, {
                        mode: "playlist",
                        feedData: h.feedData || {},
                        showNextUp: !0
                    }))), l.nextUp = h
                }
            }, {
                key: "loadRecs",
                value: function(e) {
                    var t = this;
                    this.loader || (this.loader = new d(this.model.requestOptions));
                    var i = e.feed,
                        n = e.recommendation,
                        a = e.file,
                        r = function(e, i, n) {
                            return t.updateFeed(e, i, n)
                        },
                        l = function(e) {
                            t.trigger("warning", e), t.onError()
                        };
                    i ? this.loader.load(i, r, l, r) : n ? this.loader.loadRecommendation(n, a, r, l, r) : a ? this.loader.load(a, r, l, r) : this.onError("No Valid Feeds")
                }
            }, {
                key: "updateFeed",
                value: function(e, t, i) {
                    var a = this.model,
                        r = this.player,
                        l = this.relatedFilter,
                        o = this.widgetController,
                        s = this.recsController,
                        d = this.playlistController ? this.playlistController.items : r.getPlaylist(),
                        c = l.filterAvailableItems(e, d, a.onItemSelect);
                    if (c.length) {
                        if (Object(_e.a)(c, "images", "image"), o && o.updateFeed(c, t, i), s && s.updateFeed(c, t, i), !this.playlistController) {
                            var h = c ? c[0] : null;
                            a.nextUp = h, h && this.trigger("nextUp", Object(n.j)({}, h, {
                                mode: "discovery",
                                feedData: t,
                                showNextUp: "hide" === a.onComplete || 0 === a.autoplayTimer
                            }))
                        }! function(e, t, i) {
                            e.trigger("analytics", "playlist", J(e, {
                                playlist: t,
                                feedData: i
                            }))
                        }(a, c, t)
                    } else this.onError("Empty Feed")
                }
            }, {
                key: "onError",
                value: function() {
                    this.playlistController || this.playerModel.set("nextUp", null), this.removeRecs(), this.widgetController && this.widgetController.toggle(!1)
                }
            }, {
                key: "removeRecs",
                value: function() {
                    this.recsController && (this.recsController.destroy(), this.recsController = null)
                }
            }, {
                key: "removePlaylist",
                value: function() {
                    this.playlistController && (this.playlistController.destroy(), this.playlistController = null)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeRecs(), this.removePlaylist(), this.widgetController && (this.widgetController.destroy(), this.widgetController = null)
                }
            }]) && We(i.prototype, a), r && We(i, r), t
        }();
        t.default = function(e, t, i) {
            var n = new Ke(e);
            this.setup = function(e) {
                return n.setup(e, t, i)
            }, this.destroy = function() {
                return n.destroy()
            }, this.open = function(e) {
                return n.open(e)
            }, this.close = function(e) {
                return n.close(e)
            }, this.next = function(e) {
                return n.next(e)
            }, this.on = function(e, t, i) {
                return n.on(e, t, i)
            }, this.once = function(e, t, i) {
                return n.once(e, t, i)
            }, this.off = function(e, t, i) {
                return n.off(e, t, i)
            }, this.trigger = function(e, t) {
                return n.trigger(e, t)
            }
        }
    }])
]);