! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.4",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    } if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                } return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                } j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;

            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                } return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    } d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function(a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function(a, b) {
            sa.remove(a, b)
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function(a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {},
        Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
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
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bb.unshift(a) : bb.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || ra.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ra.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0),
                        b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Ya = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Za || (Za = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Za), Za = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {},
        Eb = {
            0: 200,
            1223: 204
        },
        Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}),
function(a, b, c, d, e, f, g) {
    function h() {
        function b(a, b) {
            g.push({
                $EventName: a,
                $Handler: b
            })
        }

        function c(a, b) {
            l.$Each(g, function(c, d) {
                c.$EventName == a && c.$Handler === b && g.splice(d, 1)
            })
        }

        function d() {
            g = []
        }

        function e() {
            l.$Each(h, function(a) {
                l.$RemoveEvent(a.$Obj, a.$EventName, a.$Handler)
            }), h = []
        }
        var f = this,
            g = [],
            h = [];
        f.$Listen = function(a, b, c, d) {
            l.$AddEvent(a, b, c, d), h.push({
                $Obj: a,
                $EventName: b,
                $Handler: c
            })
        }, f.$Unlisten = function(a, b, c) {
            l.$Each(h, function(d, e) {
                d.$Obj === a && d.$EventName == b && d.$Handler === c && (l.$RemoveEvent(a, b, c), h.splice(e, 1))
            })
        }, f.$UnlistenAll = e, f.$On = f.addEventListener = b, f.$Off = f.removeEventListener = c, f.$TriggerEvent = function(b) {
            var c = [].slice.call(arguments, 1);
            l.$Each(g, function(d) {
                d.$EventName == b && d.$Handler.apply(a, c)
            })
        }, f.$Destroy = function() {
            e(), d();
            for (var a in f) delete f[a]
        }
    }

    function i(b, g, h, i, j, m) {
        function n(a) {
            E += a, F += a, N += a, O += a, L += a, M += a, K = a
        }

        function o(a, c) {
            var d = a - E + b * c;
            return n(d), F
        }

        function p(a, b) {
            var d = a;
            if (G && (d >= F || E >= d) && (d = ((d - E) % G + G) % G + E), !D || y || b || L != d) {
                var f = c.min(d, F);
                if (f = c.max(f, E), !D || y || b || f != M) {
                    if (m) {
                        var k = (f - N) / (g || 1);
                        h.$Reverse && (k = 1 - k);
                        var n = l.$Cast(j, m, k, z, B, A, h);
                        l.$Each(n, function(a, b) {
                            H[b] && H[b](i, a)
                        })
                    }
                    I.$OnInnerOffsetChange(M - N, f - N), M = f, l.$Each(P, function(c, d) {
                        var e = L > a ? P[P.length - d - 1] : c;
                        e.$GoToPosition(M - K, b)
                    });
                    var o = L,
                        p = M;
                    L = d, D = e, I.$OnPositionChange(o, p)
                }
            }
        }

        function q(a, b, d) {
            b && a.$Locate(F, 1), d || (E = c.min(E, a.$GetPosition_OuterBegin() + K), F = c.max(F, a.$GetPosition_OuterEnd() + K)), P.push(a)
        }

        function r() {
            if (u) {
                var a = l.$GetNow(),
                    b = c.min(a - J, h.$IntervalMax),
                    d = L + b * x;
                J = a, d * x >= w * x && (d = w), p(d), !y && d * x >= w * x ? t(C) : Q(r)
            }
        }

        function s(a, b, d) {
            u || (u = e, y = d, C = b, a = c.max(a, E), a = c.min(a, F), w = a, x = L > w ? -1 : 1, I.$OnStart(), J = l.$GetNow(), Q(r))
        }

        function t(a) {
            u && (y = u = C = f, I.$OnStop(), a && a())
        }
        b = b || 0;
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I = this,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = b,
            O = b + g,
            P = [],
            Q = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.msRequestAnimationFrame;
        l.$IsBrowserSafari() && l.$BrowserVersion() < 7 && (Q = d), Q = Q || function(a) {
            l.$Delay(a, h.$Interval)
        }, I.$Play = function(a, b, c) {
            s(a ? L + a : F, b, c)
        }, I.$PlayToPosition = s, I.$PlayToBegin = function(a, b) {
            s(E, a, b)
        }, I.$PlayToEnd = function(a, b) {
            s(F, a, b)
        }, I.$Stop = t, I.$Continue = function(a) {
            s(a)
        }, I.$GetPosition = function() {
            return L
        }, I.$GetPlayToPosition = function() {
            return w
        }, I.$GetPosition_Display = function() {
            return M
        }, I.$GoToPosition = p, I.$GoToBegin = function() {
            p(E, e)
        }, I.$GoToEnd = function() {
            p(F, e)
        }, I.$Move = function(a) {
            p(L + a)
        }, I.$CombineMode = function() {
            return v
        }, I.$GetDuration = function() {
            return g
        }, I.$IsPlaying = function() {
            return u
        }, I.$IsOnTheWay = function() {
            return L > N && O >= L
        }, I.$SetLoopLength = function(a) {
            G = a
        }, I.$Locate = o, I.$Shift = n, I.$Join = q, I.$Combine = function(a) {
            q(a, 0)
        }, I.$Chain = function(a) {
            q(a, 1)
        }, I.$GetPosition_InnerBegin = function() {
            return N
        }, I.$GetPosition_InnerEnd = function() {
            return O
        }, I.$GetPosition_OuterBegin = function() {
            return E
        }, I.$GetPosition_OuterEnd = function() {
            return F
        }, I.$OnPositionChange = I.$OnStart = I.$OnStop = I.$OnInnerOffsetChange = l.$EmptyFunction, I.$Version = l.$GetNow(), h = l.$Extend({
            $Interval: 16,
            $IntervalMax: 50
        }, h), G = h.$LoopLength, H = l.$Extend({}, l.$StyleSetter(), h.$Setter), E = N = b, F = O = b + g, A = h.$Round || {}, B = h.$During || {}, z = l.$Extend({
            $Default: l.$IsFunction(h.$Easing) && h.$Easing || k.$EaseSwing
        }, h.$Easing)
    }

    function j() {
        i.call(this, 0, 0), this.$Revert = l.$EmptyFunction
    }!new function() {
        function c(a) {
            if (a.constructor === c.caller) throw new Error("Cannot create instance of an abstract class.")
        }
        this.$DebugMode = e, this.$Log = function(b, c) {
            var d = a.console || {},
                e = this.$DebugMode;
            e && d.log ? d.log(b) : e && c && alert(b)
        }, this.$Error = function(b, c) {
            var d = a.console || {},
                e = this.$DebugMode;
            if (e && d.error ? d.error(b) : e && alert(b), e) throw c || new Error(b)
        }, this.$Fail = function(a) {
            throw new Error(a)
        }, this.$Assert = function(a, b) {
            var c = this.$DebugMode;
            if (c && !a) throw new Error("Assert failed " + b || "")
        }, this.$Trace = function(b) {
            var c = a.console || {},
                d = this.$DebugMode;
            d && c.log && c.log(b)
        }, this.$Execute = function(a) {
            var b = this.$DebugMode;
            b && a()
        }, this.$LiveStamp = function(a, c) {
            var d = this.$DebugMode;
            if (d) {
                var e = b.createElement("DIV");
                e.setAttribute("id", c), a.$Live = e
            }
        }, this.$C_AbstractProperty = function() {
            throw new Error("The property is abstract, it should be implemented by subclass.")
        }, this.$C_AbstractMethod = function() {
            throw new Error("The method is abstract, it should be implemented by subclass.")
        }, this.$C_AbstractClass = c
    };
    var k = a.$JssorEasing$ = {
        $EaseSwing: function(a) {
            return -c.cos(a * c.PI) / 2 + .5
        },
        $EaseLinear: function(a) {
            return a
        },
        $EaseOutQuad: function(a) {
            return -a * (a - 2)
        },
        $EaseGoBack: function() {
            return 1 - c.abs(1)
        },
        $EaseInWave: function(a) {
            return 1 - c.cos(a * c.PI * 2)
        },
        $EaseOutWave: function(a) {
            return c.sin(a * c.PI * 2)
        },
        $EaseOutJump: function(a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        },
        $EaseInJump: function(a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
    };
    a.$JssorDirection$ = {
        $TO_LEFT: 1,
        $TO_RIGHT: 2,
        $TO_TOP: 4,
        $TO_BOTTOM: 8,
        $HORIZONTAL: 3,
        $VERTICAL: 12,
        $GetDirectionHorizontal: function(a) {
            return 3 & a
        },
        $GetDirectionVertical: function(a) {
            return 12 & a
        },
        $IsHorizontal: function(a) {
            return 3 & a
        },
        $IsVertical: function(a) {
            return 12 & a
        }
    };
    var l = a.$Jssor$ = new function() {
            function h() {
                if (!fa) {
                    fa = {
                        $Touchable: "ontouchstart" in a || "createTouch" in b
                    };
                    var c;
                    (ua.pointerEnabled || (c = ua.msPointerEnabled)) && (fa.$TouchActionAttr = c ? "msTouchAction" : "touchAction")
                }
                return fa
            }

            function i(c) {
                if (!pa)
                    if (pa = -1, "Microsoft Internet Explorer" == va && a.attachEvent && a.ActiveXObject) {
                        var d = wa.indexOf("MSIE");
                        pa = ka, ra = Aa(wa.substring(d + 5, wa.indexOf(";", d))), qa = b.documentMode || ra
                    } else if ("Netscape" == va && a.addEventListener) {
                    var e = wa.indexOf("Firefox"),
                        f = wa.indexOf("Safari"),
                        g = wa.indexOf("Chrome"),
                        h = wa.indexOf("AppleWebKit");
                    if (e >= 0) pa = la, qa = Aa(wa.substring(e + 8));
                    else if (f >= 0) {
                        var i = wa.substring(0, f).lastIndexOf("/");
                        pa = g >= 0 ? na : ma, qa = Aa(wa.substring(i + 1, f))
                    } else {
                        var j = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(wa);
                        j && (pa = ka, qa = ra = Aa(j[1]))
                    }
                    h >= 0 && (ta = Aa(wa.substring(h + 12)))
                } else {
                    var j = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(wa);
                    j && (pa = oa, qa = Aa(j[2]))
                }
                return c == pa
            }

            function j() {
                return i(ka)
            }

            function m() {
                return j() && (6 > qa || "BackCompat" == b.compatMode)
            }

            function n() {
                return i(la)
            }

            function o() {
                return i(ma)
            }

            function p() {
                return i(na)
            }

            function q() {
                return i(oa)
            }

            function r() {
                return o() && ta > 534 && 535 > ta
            }

            function s() {
                return j() && 9 > qa
            }

            function t(a) {
                return ga || (w(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(b) {
                    return a.style[b] != g ? (ga = b, e) : void 0
                }), ga = ga || "transform"), ga
            }

            function u(a) {
                return {}.toString.call(a)
            }

            function v() {
                return ha || (ha = {}, w(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    ha["[object " + a + "]"] = a.toLowerCase()
                })), ha
            }

            function w(a, b) {
                if ("[object Array]" == u(a)) {
                    for (var c = 0; c < a.length; c++)
                        if (b(a[c], c, a)) return e
                } else
                    for (var d in a)
                        if (b(a[d], d, a)) return e
            }

            function x(a) {
                return a == d ? String(a) : v()[u(a)] || "object"
            }

            function y(a) {
                for (var b in a) return e
            }

            function z(a) {
                try {
                    return "object" == x(a) && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
                } catch (b) {}
            }

            function A(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function B(a, b) {
                setTimeout(a, b || 0)
            }

            function C(a, b, c) {
                var d = a && "inherit" != a ? a : "";
                return w(b, function(a) {
                    var b = a.exec(d);
                    if (b) {
                        var c = d.substr(0, b.index),
                            e = d.substr(b.lastIndex + 1, d.length - (b.lastIndex + 1));
                        d = c + e
                    }
                }), d = c + (0 != d.indexOf(" ") ? " " : "") + d
            }

            function D(a, b) {
                9 > qa && (a.style.filter = b)
            }

            function E(a, b, c) {
                if (9 > sa) {
                    var d = a.style.filter,
                        e = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        f = b ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0][0] + ", M12=" + b[0][1] + ", M21=" + b[1][0] + ", M22=" + b[1][1] + ", SizingMethod='auto expand')" : "",
                        g = C(d, [e], f);
                    D(a, g), ia.$CssMarginTop(a, c.y), ia.$CssMarginLeft(a, c.x)
                }
            }

            function F(a) {
                a.constructor === F.caller && a.$Construct && a.$Construct.apply(a, F.caller.arguments)
            }

            function G(b) {
                return b || a.event
            }

            function H(b, c, e) {
                if (e == g) {
                    var f = b.currentStyle || b.style;
                    return e = f[c], "" == e && a.getComputedStyle && (f = b.ownerDocument.defaultView.getComputedStyle(b, d), f && (e = f.getPropertyValue(c) || f[c])), e
                }
                b.style[c] = e
            }

            function I(a, b, c, d) {
                return c == g ? Aa(H(a, b)) : (d && (c += "px"), void H(a, b, c))
            }

            function J(a, b, c) {
                return I(a, b, c, e)
            }

            function K(a, b) {
                var c = 2 & b,
                    d = b ? I : H;
                return function(b, e) {
                    return d(b, a, e, c)
                }
            }

            function L(a) {
                if (j() && 9 > ra) {
                    var b = /opacity=([^)]*)/.exec(a.style.filter || "");
                    return b ? Aa(b[1]) / 100 : 1
                }
                return Aa(a.style.opacity || "1")
            }

            function M(a, b, d) {
                if (j() && 9 > ra) {
                    var e = a.style.filter || "",
                        f = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                        g = c.round(100 * b),
                        h = "";
                    (100 > g || d) && (h = "alpha(opacity=" + g + ") ");
                    var i = C(e, [f], h);
                    D(a, i)
                } else a.style.opacity = 1 == b ? "" : c.round(100 * b) / 100
            }

            function N(b, e) {
                var f = e.$Rotate || 0,
                    h = e.$Scale == g ? 1 : e.$Scale;
                if (s()) {
                    var i = ia.$CreateMatrix(f / 180 * c.PI, h, h);
                    E(b, f || 1 != h ? i : d, ia.$GetMatrixOffset(i, e.$OriginalWidth, e.$OriginalHeight))
                } else {
                    var j = t(b);
                    if (j) {
                        var k = "rotate(" + f % 360 + "deg) scale(" + h + ")";
                        p() && ta > 535 && "ontouchstart" in a && (k += " perspective(2000px)"), b.style[j] = k
                    }
                }
            }

            function O(a, b, c, e) {
                for (e = e || "u", a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType) {
                        if (W(a, e) == b) return a;
                        if (!c) {
                            var f = O(a, b, c, e);
                            if (f) return f
                        }
                    }
            }

            function P(a, b, c, e) {
                e = e || "u";
                var f = [];
                for (a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType && (W(a, e) == b && f.push(a), !c)) {
                        var g = P(a, b, c, e);
                        g.length && (f = f.concat(g))
                    } return f
            }

            function Q(a, b, c) {
                for (a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType) {
                        if (a.tagName == b) return a;
                        if (!c) {
                            var e = Q(a, b, c);
                            if (e) return e
                        }
                    }
            }

            function R(a, b, c) {
                var e = [];
                for (a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType && ((!b || a.tagName == b) && e.push(a), !c)) {
                        var f = R(a, b, c);
                        f.length && (e = e.concat(f))
                    } return e
            }

            function S() {
                var a, b, c, d, e = arguments,
                    f = 1 & e[0],
                    h = 1 + f;
                for (a = e[h - 1] || {}; h < e.length; h++)
                    if (b = e[h])
                        for (c in b) d = b[c], d !== g && (d = b[c], a[c] = f && z(a[c]) ? S(f, {}, d) : d);
                return a
            }

            function T(a, b) {
                var c, d, e, f = {};
                for (c in a)
                    if (d = a[c], e = b[c], d !== e) {
                        var g;
                        z(d) && z(e) && (d = T(e), g = !y(d)), !g && (f[c] = d)
                    } return f
            }

            function U(a) {
                return b.createElement(a)
            }

            function V(a, b, c) {
                return c == g ? a.getAttribute(b) : void a.setAttribute(b, c)
            }

            function W(a, b) {
                return V(a, b) || V(a, "data-" + b)
            }

            function X(a, b) {
                return b == g ? a.className : void(a.className = b)
            }

            function Y(a) {
                var b = {};
                return w(a, function(a) {
                    b[a] = a
                }), b
            }

            function Z(a, b) {
                return a.match(b || ja)
            }

            function $(a, b) {
                return Y(Z(a || "", b))
            }

            function _(a, b) {
                var c = "";
                return w(b, function(b) {
                    c && (c += a), c += b
                }), c
            }

            function aa(a, b, c) {
                X(a, _(" ", S(T($(X(a)), $(b)), $(c))))
            }

            function ba(a, b, c) {
                var d = a.cloneNode(!b);
                return !c && ia.$RemoveAttribute(d, "id"), d
            }

            function ca(a) {
                function c() {
                    aa(a, f, k[o || m || 2 & n || n]), l.$Css(a, "pointer-events", o ? "none" : "")
                }

                function d() {
                    m = 0, c(), ia.$RemoveEvent(b, "mouseup", d), ia.$RemoveEvent(b, "touchend", d), ia.$RemoveEvent(b, "touchcancel", d)
                }

                function e(a) {
                    o ? ia.$CancelEvent(a) : (m = 4, c(), ia.$AddEvent(b, "mouseup", d), ia.$AddEvent(b, "touchend", d), ia.$AddEvent(b, "touchcancel", d))
                }
                var f, h = this,
                    i = "",
                    j = ["av", "pv", "ds", "dn"],
                    k = [],
                    m = 0,
                    n = 0,
                    o = 0;
                h.$Selected = function(a) {
                    return a == g ? n : (n = 2 & a || 1 & a, void c())
                }, h.$Enable = function(a) {
                    return a == g ? !o : (o = a ? 0 : 3, void c())
                }, a = ia.$GetElement(a);
                var p = l.$Split(X(a));
                p && (i = p.shift()), w(j, function(a) {
                    k.push(i + a)
                }), f = _(" ", k), k.unshift(""), ia.$AddEvent(a, "mousedown", e), ia.$AddEvent(a, "touchstart", e)
            }

            function da() {
                return Ba || (Ba = S({
                    $MarginTop: ia.$CssMarginTop,
                    $MarginLeft: ia.$CssMarginLeft,
                    $Clip: ia.$SetStyleClip,
                    $Transform: ia.$SetStyleTransform
                }, Ca)), Ba
            }

            function ea() {
                return da(), Ba.$Transform = Ba.$Transform, Ba
            }
            var fa, ga, ha, ia = this,
                ja = /\S+/g,
                ka = 1,
                la = 2,
                ma = 3,
                na = 4,
                oa = 5,
                pa = 0,
                qa = 0,
                ra = 0,
                sa = 0,
                ta = 0,
                ua = navigator,
                va = ua.appName,
                wa = ua.userAgent,
                xa = b.documentElement;
            ia.$Device = h, ia.$IsBrowserIE = j, ia.$IsBrowserIeQuirks = m, ia.$IsBrowserFireFox = n, ia.$IsBrowserSafari = o, ia.$IsBrowserChrome = p, ia.$IsBrowserOpera = q, ia.$IsBrowserBadTransform = r, ia.$IsBrowserIe9Earlier = s, ia.$BrowserVersion = function() {
                return qa
            }, ia.$BrowserEngineVersion = function() {
                return ra || qa
            }, ia.$WebKitVersion = function() {
                return i(), ta
            }, ia.$Delay = B, ia.$Inherit = function(a, b) {
                return b.call(a), S({}, a)
            }, ia.$Construct = F, ia.$GetElement = function(a) {
                return ia.$IsString(a) && (a = b.getElementById(a)), a
            }, ia.$GetEvent = G, ia.$EvtSrc = function(a) {
                return a = G(a),
                    a.target || a.srcElement || b
            }, ia.$EvtTarget = function(a) {
                return a = G(a), a.relatedTarget || a.toElement
            }, ia.$EvtWhich = function(a) {
                return a = G(a), a.which || [0, 1, 3, 0, 2][a.button] || a.charCode || a.keyCode
            }, ia.$MousePosition = function(a) {
                return a = G(a), {
                    x: a.pageX || a.clientX || 0,
                    y: a.pageY || a.clientY || 0
                }
            }, ia.$PageScroll = function() {
                var c = b.body;
                return {
                    x: (a.pageXOffset || xa.scrollLeft || c.scrollLeft || 0) - (xa.clientLeft || c.clientLeft || 0),
                    y: (a.pageYOffset || xa.scrollTop || c.scrollTop || 0) - (xa.clientTop || c.clientTop || 0)
                }
            }, ia.$WindowSize = function() {
                var a = b.body;
                return {
                    x: a.clientWidth || xa.clientWidth,
                    y: a.clientHeight || xa.clientHeight
                }
            }, ia.$SetStyleTransform = function(a, b) {
                r() ? B(ia.$CreateCallback(d, N, a, b)) : N(a, b)
            }, ia.$SetStyleTransformOrigin = function(a, b) {
                var c = t(a);
                c && (a.style[c + "Origin"] = b)
            }, ia.$CssScale = function(a, b) {
                if (j() && 9 > ra || 10 > ra && m()) a.style.zoom = 1 == b ? "" : b;
                else {
                    var c = t(a);
                    if (c) {
                        var d = "scale(" + b + ")",
                            e = a.style[c],
                            f = new RegExp(/[\s]*scale\(.*?\)/g),
                            g = C(e, [f], d);
                        a.style[c] = g
                    }
                }
            }, ia.$EnableHWA = function(a) {
                a.style[t(a)] && "none" != a.style[t(a)] || (a.style[t(a)] = "perspective(2000px)")
            }, ia.$DisableHWA = function(a) {
                a.style[t(a)] = "none"
            };
            var ya = 0,
                za = 0;
            ia.$WindowResizeFilter = function(a, b) {
                return s() ? function() {
                    var c = e,
                        d = m() ? a.document.body : a.document.documentElement;
                    if (d) {
                        var g = d.offsetWidth - ya,
                            h = d.offsetHeight - za;
                        g || h ? (ya += g, za += h) : c = f
                    }
                    c && b()
                } : b
            }, ia.$MouseOverOutFilter = function(a, b) {
                return function(c) {
                    c = G(c);
                    var d = c.type,
                        e = c.relatedTarget || ("mouseout" == d ? c.toElement : c.fromElement);
                    (!e || e !== b && !ia.$IsChild(b, e)) && a(c)
                }
            }, ia.$AddEvent = function(a, b, c, d) {
                a = ia.$GetElement(a), a.addEventListener ? ("mousewheel" == b && a.addEventListener("DOMMouseScroll", c, d), a.addEventListener(b, c, d)) : a.attachEvent && (a.attachEvent("on" + b, c), d && a.setCapture && a.setCapture())
            }, ia.$RemoveEvent = function(a, b, c, d) {
                a = ia.$GetElement(a), a.removeEventListener ? ("mousewheel" == b && a.removeEventListener("DOMMouseScroll", c, d), a.removeEventListener(b, c, d)) : a.detachEvent && (a.detachEvent("on" + b, c), d && a.releaseCapture && a.releaseCapture())
            }, ia.$FireEvent = function(a, c) {
                var d;
                if (b.createEvent) d = b.createEvent("HTMLEvents"), d.initEvent(c, f, f), a.dispatchEvent(d);
                else {
                    var e = "on" + c;
                    d = b.createEventObject(), a.fireEvent(e, d)
                }
            }, ia.$CancelEvent = function(a) {
                a = G(a), a.preventDefault && a.preventDefault(), a.cancel = e, a.returnValue = f
            }, ia.$StopEvent = function(a) {
                a = G(a), a.stopPropagation && a.stopPropagation(), a.cancelBubble = e
            }, ia.$CreateCallback = function(a, b) {
                var c = [].slice.call(arguments, 2),
                    d = function() {
                        var d = c.concat([].slice.call(arguments, 0));
                        return b.apply(a, d)
                    };
                return d
            }, ia.$InnerText = function(a, c) {
                if (c == g) return a.textContent || a.innerText;
                var d = b.createTextNode(c);
                ia.$Empty(a), a.appendChild(d)
            }, ia.$InnerHtml = function(a, b) {
                return b == g ? a.innerHTML : void(a.innerHTML = b)
            }, ia.$GetClientRect = function(a) {
                var b = a.getBoundingClientRect();
                return {
                    x: b.left,
                    y: b.top,
                    w: b.right - b.left,
                    h: b.bottom - b.top
                }
            }, ia.$ClearInnerHtml = function(a) {
                a.innerHTML = ""
            }, ia.$EncodeHtml = function(a) {
                var b = ia.$CreateDiv();
                return ia.$InnerText(b, a), ia.$InnerHtml(b)
            }, ia.$DecodeHtml = function(a) {
                var b = ia.$CreateDiv();
                return ia.$InnerHtml(b, a), ia.$InnerText(b)
            }, ia.$SelectElement = function(c) {
                var e;
                a.getSelection && (e = a.getSelection());
                var f = d;
                b.createRange ? (f = b.createRange(), f.selectNode(c)) : (f = b.body.createTextRange(), f.moveToElementText(c), f.select()), e && e.addRange(f)
            }, ia.$DeselectElements = function() {
                b.selection ? b.selection.empty() : a.getSelection && a.getSelection().removeAllRanges()
            }, ia.$Children = function(a, b) {
                for (var c = [], d = a.firstChild; d; d = d.nextSibling)(b || 1 == d.nodeType) && c.push(d);
                return c
            }, ia.$FindChild = O, ia.$FindChildByTag = Q, ia.$FindChildrenByTag = R, ia.$GetElementsByTag = function(a, b) {
                return a.getElementsByTagName(b)
            }, ia.$Extend = S, ia.$Unextend = T, ia.$IsFunction = function(a) {
                return "function" == x(a)
            }, ia.$IsArray = function(a) {
                return "array" == x(a)
            }, ia.$IsString = function(a) {
                return "string" == x(a)
            }, ia.$IsNumeric = function(a) {
                return !isNaN(Aa(a)) && isFinite(a)
            }, ia.$Type = x, ia.$Each = w, ia.$IsNotEmpty = y, ia.$CreateElement = U, ia.$CreateDiv = function() {
                return U("DIV")
            }, ia.$CreateSpan = function() {
                return U("SPAN")
            }, ia.$EmptyFunction = function() {}, ia.$Attribute = V, ia.$AttributeEx = W, ia.$ClassName = X, ia.$ToHash = Y, ia.$Split = Z, ia.$Join = _, ia.$AddClass = function(a, b) {
                aa(a, d, b)
            }, ia.$RemoveClass = aa, ia.$ReplaceClass = aa, ia.$ParentNode = function(a) {
                return a.parentNode
            }, ia.$HideElement = function(a) {
                ia.$CssDisplay(a, "none")
            }, ia.$EnableElement = function(a, b) {
                b ? ia.$Attribute(a, "disabled", e) : ia.$RemoveAttribute(a, "disabled")
            }, ia.$HideElements = function(a) {
                for (var b = 0; b < a.length; b++) ia.$HideElement(a[b])
            }, ia.$ShowElement = function(a, b) {
                ia.$CssDisplay(a, b ? "none" : "")
            }, ia.$ShowElements = function(a, b) {
                for (var c = 0; c < a.length; c++) ia.$ShowElement(a[c], b)
            }, ia.$RemoveAttribute = function(a, b) {
                a.removeAttribute(b)
            }, ia.$CanClearClip = function() {
                return j() && 10 > qa
            }, ia.$SetStyleClip = function(a, b) {
                if (b) a.style.clip = "rect(" + c.round(b.$Top) + "px " + c.round(b.$Right) + "px " + c.round(b.$Bottom) + "px " + c.round(b.$Left) + "px)";
                else {
                    var d = a.style.cssText,
                        e = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                        f = C(d, e, "");
                    l.$CssCssText(a, f)
                }
            }, ia.$GetNow = function() {
                return +new Date
            }, ia.$AppendChild = function(a, b) {
                a.appendChild(b)
            }, ia.$AppendChildren = function(a, b) {
                w(b, function(b) {
                    ia.$AppendChild(a, b)
                })
            }, ia.$InsertBefore = function(a, b, c) {
                (c || b.parentNode).insertBefore(a, b)
            }, ia.$InsertAfter = function(a, b, c) {
                ia.$InsertBefore(a, b.nextSibling, c || b.parentNode)
            }, ia.$InsertAdjacentHtml = function(a, b, c) {
                a.insertAdjacentHTML(b, c)
            }, ia.$RemoveElement = function(a, b) {
                (b || a.parentNode).removeChild(a)
            }, ia.$RemoveElements = function(a, b) {
                w(a, function(a) {
                    ia.$RemoveElement(a, b)
                })
            }, ia.$Empty = function(a) {
                ia.$RemoveElements(ia.$Children(a, e), a)
            }, ia.$ParseInt = function(a, b) {
                return parseInt(a, b || 10)
            };
            var Aa = parseFloat;
            ia.$ParseFloat = Aa, ia.$IsChild = function(a, c) {
                for (var d = b.body; c && a !== c && d !== c;) try {
                    c = c.parentNode
                } catch (e) {
                    return f
                }
                return a === c
            }, ia.$CloneNode = ba, ia.$LoadImage = function(a, b) {
                function c(a, e) {
                    ia.$RemoveEvent(f, "load", c), ia.$RemoveEvent(f, "abort", d), ia.$RemoveEvent(f, "error", d), b && b(f, e)
                }

                function d(a) {
                    c(a, e)
                }
                var f = new Image;
                q() && 11.6 > qa || !a ? c(!a) : (ia.$AddEvent(f, "load", c), ia.$AddEvent(f, "abort", d), ia.$AddEvent(f, "error", d), f.src = a)
            }, ia.$LoadImages = function(a, b, c) {
                function d(a) {
                    e--, b && a && a.src == b.src && (b = a), !e && c && c(b)
                }
                var e = a.length + 1;
                w(a, function(a) {
                    ia.$LoadImage(a.src, d)
                }), d()
            }, ia.$BuildElement = function(a, b, c, d) {
                d && (a = ba(a));
                var e = P(a, b);
                e.length || (e = l.$GetElementsByTag(a, b));
                for (var f = e.length - 1; f > -1; f--) {
                    var g = e[f],
                        h = ba(c);
                    X(h, X(g)), l.$CssCssText(h, g.style.cssText), l.$InsertBefore(h, g), l.$RemoveElement(g)
                }
                return a
            }, ia.$Buttonize = function(a) {
                return new ca(a)
            }, ia.$Css = H, ia.$CssN = I, ia.$CssP = J, ia.$CssOverflow = K("overflow"), ia.$CssTop = K("top", 2), ia.$CssLeft = K("left", 2), ia.$CssWidth = K("width", 2), ia.$CssHeight = K("height", 2), ia.$CssMarginLeft = K("marginLeft", 2), ia.$CssMarginTop = K("marginTop", 2), ia.$CssPosition = K("position"), ia.$CssDisplay = K("display"), ia.$CssZIndex = K("zIndex", 1), ia.$CssFloat = function(a, b) {
                return H(a, j() ? "styleFloat" : "cssFloat", b)
            }, ia.$CssOpacity = function(a, b, c) {
                return b == g ? L(a) : void M(a, b, c)
            }, ia.$CssCssText = function(a, b) {
                return b == g ? a.style.cssText : void(a.style.cssText = b)
            };
            var Ba, Ca = {
                $Opacity: ia.$CssOpacity,
                $Top: ia.$CssTop,
                $Left: ia.$CssLeft,
                $Width: ia.$CssWidth,
                $Height: ia.$CssHeight,
                $Position: ia.$CssPosition,
                $Display: ia.$CssDisplay,
                $ZIndex: ia.$CssZIndex
            };
            ia.$StyleSetter = da, ia.$StyleSetterEx = ea, ia.$GetStyles = function(a, b) {
                da();
                var c = {};
                return w(b, function(b, d) {
                    Ca[d] && (c[d] = Ca[d](a))
                }), c
            }, ia.$SetStyles = function(a, b) {
                var c = da();
                w(b, function(b, d) {
                    c[d] && c[d](a, b)
                })
            }, ia.$SetStylesEx = function(a, b) {
                ea(), ia.$SetStyles(a, b)
            };
            var Da = new function() {
                function a(a, b) {
                    for (var c = a[0].length, d = a.length, e = b[0].length, f = [], g = 0; d > g; g++)
                        for (var h = f[g] = [], i = 0; e > i; i++) {
                            for (var j = 0, k = 0; c > k; k++) j += a[g][k] * b[k][i];
                            h[i] = j
                        }
                    return f
                }
                var b = this;
                b.$ScaleX = function(a, c) {
                    return b.$ScaleXY(a, c, 0)
                }, b.$ScaleY = function(a, c) {
                    return b.$ScaleXY(a, 0, c)
                }, b.$ScaleXY = function(b, c, d) {
                    return a(b, [
                        [c, 0],
                        [0, d]
                    ])
                }, b.$TransformPoint = function(b, c) {
                    var d = a(b, [
                        [c.x],
                        [c.y]
                    ]);
                    return A(d[0][0], d[1][0])
                }
            };
            ia.$CreateMatrix = function(a, b, d) {
                var e = c.cos(a),
                    f = c.sin(a);
                return [
                    [e * b, -f * d],
                    [f * b, e * d]
                ]
            }, ia.$GetMatrixOffset = function(a, b, d) {
                var e = Da.$TransformPoint(a, A(-b / 2, -d / 2)),
                    f = Da.$TransformPoint(a, A(b / 2, -d / 2)),
                    g = Da.$TransformPoint(a, A(b / 2, d / 2)),
                    h = Da.$TransformPoint(a, A(-b / 2, d / 2));
                return A(c.min(e.x, f.x, g.x, h.x) + b / 2, c.min(e.y, f.y, g.y, h.y) + d / 2)
            }, ia.$Cast = function(a, b, e, f, g, h, i) {
                var j = b;
                if (a) {
                    j = {};
                    for (var m in b) {
                        var n = h[m] || 1,
                            o = g[m] || [0, 1],
                            p = (e - o[0]) / o[1];
                        p = c.min(c.max(p, 0), 1), p *= n;
                        var q = c.floor(p);
                        p != q && (p -= q);
                        var r, s = f[m] || f.$Default || k.$EaseSwing,
                            t = s(p),
                            u = a[m];
                        b[m];
                        var v = b[m];
                        l.$IsNumeric(v) ? r = u + v * t : (r = l.$Extend({
                            $Offset: {}
                        }, a[m]), l.$Each(v.$Offset, function(a, b) {
                            var c = a * t;
                            r.$Offset[b] = c, r[b] += c
                        })), j[m] = r
                    }(b.$Zoom || b.$Rotate) && (j.$Transform = {
                        $Rotate: j.$Rotate || 0,
                        $Scale: j.$Zoom,
                        $OriginalWidth: i.$OriginalWidth,
                        $OriginalHeight: i.$OriginalHeight
                    })
                }
                if (b.$Clip && i.$Move) {
                    var w = j.$Clip.$Offset,
                        x = (w.$Top || 0) + (w.$Bottom || 0),
                        y = (w.$Left || 0) + (w.$Right || 0);
                    j.$Left = (j.$Left || 0) + y, j.$Top = (j.$Top || 0) + x, j.$Clip.$Left -= y, j.$Clip.$Right -= y, j.$Clip.$Top -= x, j.$Clip.$Bottom -= x
                }
                return j.$Clip && l.$CanClearClip() && !j.$Clip.$Top && !j.$Clip.$Left && j.$Clip.$Right == i.$OriginalWidth && j.$Clip.$Bottom == i.$OriginalHeight && (j.$Clip = d), j
            }
        },
        m = a.$JssorSlideshowFormations$ = new function() {
            function a(a) {
                return (a & l) == l
            }

            function b(a) {
                return (a & m) == m
            }

            function d(a, b, c) {
                c.push(b), a[b] = a[b] || [], a[b].push(c)
            }
            var f = this,
                g = 0,
                h = 1,
                i = 2,
                j = 3,
                k = 1,
                l = 2,
                m = 4,
                n = 8,
                o = 256,
                p = 512,
                q = 1024,
                r = 2048,
                s = r + k,
                t = r + l,
                u = p + k,
                v = p + l,
                w = o + m,
                x = o + n,
                y = q + m,
                z = q + n;
            f.$FormationStraight = function(a) {
                for (var b, c = a.$Cols, e = a.$Rows, f = a.$Assembly, g = a.$Count, h = [], i = 0, j = 0, k = c - 1, l = e - 1, m = g - 1, j = 0; e > j; j++)
                    for (i = 0; c > i; i++) {
                        switch (f) {
                            case s:
                                b = m - (i * e + (l - j));
                                break;
                            case y:
                                b = m - (j * c + (k - i));
                                break;
                            case u:
                                b = m - (i * e + j);
                            case w:
                                b = m - (j * c + i);
                                break;
                            case t:
                                b = i * e + j;
                                break;
                            case x:
                                b = j * c + (k - i);
                                break;
                            case v:
                                b = i * e + (l - j);
                                break;
                            default:
                                b = j * c + i
                        }
                        d(h, b, [j, i])
                    }
                return h
            }, f.$FormationSwirl = function(a) {
                var b, c, f = a.$Cols,
                    k = a.$Rows,
                    l = a.$Assembly,
                    m = a.$Count,
                    n = [],
                    o = [],
                    p = 0,
                    q = 0,
                    r = 0,
                    z = f - 1,
                    A = k - 1,
                    B = 0;
                switch (l) {
                    case s:
                        q = z, r = 0, c = [i, h, j, g];
                        break;
                    case y:
                        q = 0, r = A, c = [g, j, h, i];
                        break;
                    case u:
                        q = z, r = A, c = [j, h, i, g];
                        break;
                    case w:
                        q = z, r = A, c = [h, j, g, i];
                        break;
                    case t:
                        q = 0, r = 0, c = [i, g, j, h];
                        break;
                    case x:
                        q = z, r = 0, c = [h, i, g, j];
                        break;
                    case v:
                        q = 0, r = A, c = [j, g, i, h];
                        break;
                    default:
                        q = 0, r = 0, c = [g, i, h, j]
                }
                for (p = 0; m > p;) {
                    if (b = r + "," + q, q >= 0 && f > q && r >= 0 && k > r && !o[b]) o[b] = e, d(n, p++, [r, q]);
                    else switch (c[B++ % c.length]) {
                        case g:
                            q--;
                            break;
                        case i:
                            r--;
                            break;
                        case h:
                            q++;
                            break;
                        case j:
                            r++
                    }
                    switch (c[B % c.length]) {
                        case g:
                            q++;
                            break;
                        case i:
                            r++;
                            break;
                        case h:
                            q--;
                            break;
                        case j:
                            r--
                    }
                }
                return n
            }, f.$FormationZigZag = function(a) {
                var b, c, e = a.$Cols,
                    f = a.$Rows,
                    k = a.$Assembly,
                    l = a.$Count,
                    m = [],
                    n = 0,
                    o = 0,
                    p = 0,
                    q = e - 1,
                    r = f - 1,
                    z = 0;
                switch (k) {
                    case s:
                        o = q, p = 0, c = [i, h, j, h];
                        break;
                    case y:
                        o = 0, p = r, c = [g, j, h, j];
                        break;
                    case u:
                        o = q, p = r, c = [j, h, i, h];
                        break;
                    case w:
                        o = q, p = r, c = [h, j, g, j];
                        break;
                    case t:
                        o = 0, p = 0, c = [i, g, j, g];
                        break;
                    case x:
                        o = q, p = 0, c = [h, i, g, i];
                        break;
                    case v:
                        o = 0, p = r, c = [j, g, i, g];
                        break;
                    default:
                        o = 0, p = 0, c = [g, i, h, i]
                }
                for (n = 0; l > n;)
                    if (b = p + "," + o, o >= 0 && e > o && p >= 0 && f > p && "undefined" == typeof m[b]) switch (d(m, n++, [p, o]), c[z % c.length]) {
                        case g:
                            o++;
                            break;
                        case i:
                            p++;
                            break;
                        case h:
                            o--;
                            break;
                        case j:
                            p--
                    } else {
                        switch (c[z++ % c.length]) {
                            case g:
                                o--;
                                break;
                            case i:
                                p--;
                                break;
                            case h:
                                o++;
                                break;
                            case j:
                                p++
                        }
                        switch (c[z++ % c.length]) {
                            case g:
                                o++;
                                break;
                            case i:
                                p++;
                                break;
                            case h:
                                o--;
                                break;
                            case j:
                                p--
                        }
                    }
                return m
            }, f.$FormationStraightStairs = function(c) {
                var e = c.$Cols,
                    f = c.$Rows,
                    g = c.$Assembly,
                    h = c.$Count,
                    i = [],
                    j = 0,
                    k = 0,
                    l = 0,
                    m = e - 1,
                    n = f - 1,
                    o = h - 1;
                switch (g) {
                    case s:
                    case v:
                    case u:
                    case t:
                        var p = 0,
                            q = 0;
                        break;
                    case x:
                    case y:
                    case w:
                    case z:
                        var p = m,
                            q = 0;
                        break;
                    default:
                        g = z;
                        var p = m,
                            q = 0
                }
                for (k = p, l = q; h > j;) {
                    switch (b(g) || a(g) ? d(i, o - j++, [l, k]) : d(i, j++, [l, k]), g) {
                        case s:
                        case v:
                            k--, l++;
                            break;
                        case u:
                        case t:
                            k++, l--;
                            break;
                        case x:
                        case y:
                            k--, l--;
                            break;
                        case z:
                        case w:
                        default:
                            k++, l++
                    }
                    if (0 > k || 0 > l || k > m || l > n) {
                        switch (g) {
                            case s:
                            case v:
                                p++;
                                break;
                            case x:
                            case y:
                            case u:
                            case t:
                                q++;
                                break;
                            case z:
                            case w:
                            default:
                                p--
                        }
                        if (0 > p || 0 > q || p > m || q > n) {
                            switch (g) {
                                case s:
                                case v:
                                    p = m, q++;
                                    break;
                                case u:
                                case t:
                                    q = n, p++;
                                    break;
                                case x:
                                case y:
                                    q = n, p--;
                                    break;
                                case z:
                                case w:
                                default:
                                    p = 0, q++
                            }
                            q > n ? q = n : 0 > q ? q = 0 : p > m ? p = m : 0 > p && (p = 0)
                        }
                        l = q, k = p
                    }
                }
                return i
            }, f.$FormationSquare = function(a) {
                var b, e, f, g, h, i = a.$Cols || 1,
                    j = a.$Rows || 1,
                    k = [];
                for (f = j > i ? (j - i) / 2 : 0, g = i > j ? (i - j) / 2 : 0, h = c.round(c.max(i / 2, j / 2)) + 1, b = 0; i > b; b++)
                    for (e = 0; j > e; e++) d(k, h - c.min(b + 1 + f, e + 1 + g, i - b + f, j - e + g), [e, b]);
                return k
            }, f.$FormationRectangle = function(a) {
                var b, e, f, g = a.$Cols || 1,
                    h = a.$Rows || 1,
                    i = [];
                for (f = c.round(c.min(g / 2, h / 2)) + 1, b = 0; g > b; b++)
                    for (e = 0; h > e; e++) d(i, f - c.min(b + 1, e + 1, g - b, h - e), [e, b]);
                return i
            }, f.$FormationRandom = function(a) {
                for (var b, e = [], f = 0; f < a.$Rows; f++)
                    for (b = 0; b < a.$Cols; b++) d(e, c.ceil(1e5 * c.random()) % 13, [f, b]);
                return e
            }, f.$FormationCircle = function(a) {
                for (var b, e = a.$Cols || 1, f = a.$Rows || 1, g = [], h = e / 2 - .5, i = f / 2 - .5, j = 0; e > j; j++)
                    for (b = 0; f > b; b++) d(g, c.round(c.sqrt(c.pow(j - h, 2) + c.pow(b - i, 2))), [b, j]);
                return g
            }, f.$FormationCross = function(a) {
                for (var b, e = a.$Cols || 1, f = a.$Rows || 1, g = [], h = e / 2 - .5, i = f / 2 - .5, j = 0; e > j; j++)
                    for (b = 0; f > b; b++) d(g, c.round(c.min(c.abs(j - h), c.abs(b - i))), [b, j]);
                return g
            }, f.$FormationRectangleCross = function(a) {
                for (var b, e = a.$Cols || 1, f = a.$Rows || 1, g = [], h = e / 2 - .5, i = f / 2 - .5, j = c.max(h, i) + 1, k = 0; e > k; k++)
                    for (b = 0; f > b; b++) d(g, c.round(j - c.max(h - c.abs(k - h), i - c.abs(b - i))) - 1, [b, k]);
                return g
            }
        };
    a.$JssorSlideshowRunner$ = function(a, b, g, j, n) {
        function o(a, b) {
            var d = {
                $Interval: b,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: f,
                $SlideOut: f,
                $Reverse: f,
                $Formation: m.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: k.$EaseSwing,
                $Round: {},
                $Blocks: [],
                $During: {}
            };
            return l.$Extend(d, a), d.$Count = d.$Cols * d.$Rows, l.$IsFunction(d.$Easing) && (d.$Easing = {
                $Default: d.$Easing
            }), d.$FramesCount = c.ceil(d.$Duration / d.$Interval), d.$GetBlocks = function(a, b) {
                a /= d.$Cols, b /= d.$Rows;
                var c = a + "x" + b;
                if (!d.$Blocks[c]) {
                    d.$Blocks[c] = {
                        $Width: a,
                        $Height: b
                    };
                    for (var e = 0; e < d.$Cols; e++)
                        for (var f = 0; f < d.$Rows; f++) d.$Blocks[c][f + "," + e] = {
                            $Top: f * b,
                            $Right: e * a + a,
                            $Bottom: f * b + b,
                            $Left: e * a
                        }
                }
                return d.$Blocks[c]
            }, d.$Brother && (d.$Brother = o(d.$Brother, b), d.$SlideOut = e), d
        }

        function p(a, b, d, g, h, i) {
            function j(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            var k, m, n, o, p, q = this,
                r = {},
                s = {},
                t = [],
                u = d.$ChessMode.$Column || 0,
                v = d.$ChessMode.$Row || 0,
                w = d.$GetBlocks(h, i),
                x = j(d),
                y = x.length - 1,
                z = d.$Duration + d.$Delay * y,
                A = g + z,
                B = d.$SlideOut;
            if (A += 50, q.$EndTime = A, q.$ShowFrame = function(a) {
                    a -= g;
                    var b = z > a;
                    if (b || p) {
                        p = b, B || (a = z - a);
                        var e = c.ceil(a / d.$Interval);
                        l.$Each(s, function(a, b) {
                            var d = c.max(e, a.$Min);
                            d = c.min(d, a.length - 1), a.$LastFrameIndex != d && (a.$LastFrameIndex || B ? d == a.$Max && B && l.$HideElement(t[b]) : l.$ShowElement(t[b]), a.$LastFrameIndex = d, l.$SetStylesEx(t[b], a[d]))
                        })
                    }
                }, b = l.$CloneNode(b), l.$IsBrowserIe9Earlier()) {
                var C = !b["no-image"],
                    D = l.$FindChildrenByTag(b);
                l.$Each(D, function(a) {
                    (C || a["jssor-slider"]) && l.$CssOpacity(a, l.$CssOpacity(a), e)
                })
            }
            l.$Each(x, function(a, b) {
                l.$Each(a, function(a) {
                    var g = a[0],
                        j = a[1],
                        p = g + "," + j,
                        q = f,
                        t = f,
                        x = f;
                    u && j % 2 && (3 & u && (q = !q), 12 & u && (t = !t), 16 & u && (x = !x)), v && g % 2 && (3 & v && (q = !q), 12 & v && (t = !t), 16 & v && (x = !x)), d.$Top = d.$Top || 4 & d.$Clip, d.$Bottom = d.$Bottom || 8 & d.$Clip, d.$Left = d.$Left || 1 & d.$Clip, d.$Right = d.$Right || 2 & d.$Clip;
                    var y = t ? d.$Bottom : d.$Top,
                        z = t ? d.$Top : d.$Bottom,
                        A = q ? d.$Right : d.$Left,
                        C = q ? d.$Left : d.$Right;
                    d.$Clip = y || z || A || C, o = {}, n = {
                        $Top: 0,
                        $Left: 0,
                        $Opacity: 1,
                        $Width: h,
                        $Height: i
                    }, m = l.$Extend({}, n), k = l.$Extend({}, w[p]), d.$Opacity && (n.$Opacity = 2 - d.$Opacity), d.$ZIndex && (n.$ZIndex = d.$ZIndex, m.$ZIndex = 0);
                    var D = d.$Cols * d.$Rows > 1 || d.$Clip;
                    if (d.$Zoom || d.$Rotate) {
                        var E = e;
                        if (l.$IsBrowserIe9Earlier() && (d.$Cols * d.$Rows > 1 ? E = f : D = f), E) {
                            n.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1, m.$Zoom = 1, (l.$IsBrowserIe9Earlier() || l.$IsBrowserOpera()) && (n.$Zoom = c.min(n.$Zoom, 2));
                            var F = d.$Rotate;
                            n.$Rotate = 360 * F * (x ? -1 : 1), m.$Rotate = 0
                        }
                    }
                    if (D) {
                        if (d.$Clip) {
                            var G = d.$ScaleClip || 1,
                                H = k.$Offset = {};
                            y && z ? (H.$Top = w.$Height / 2 * G, H.$Bottom = -H.$Top) : y ? H.$Bottom = -w.$Height * G : z && (H.$Top = w.$Height * G), A && C ? (H.$Left = w.$Width / 2 * G, H.$Right = -H.$Left) : A ? H.$Right = -w.$Width * G : C && (H.$Left = w.$Width * G)
                        }
                        o.$Clip = k, m.$Clip = w[p]
                    }
                    var I = q ? 1 : -1,
                        J = t ? 1 : -1;
                    d.x && (n.$Left += h * d.x * I), d.y && (n.$Top += i * d.y * J), l.$Each(n, function(a, b) {
                        l.$IsNumeric(a) && a != m[b] && (o[b] = a - m[b])
                    }), r[p] = B ? m : n;
                    var K = d.$FramesCount,
                        L = c.round(b * d.$Delay / d.$Interval);
                    s[p] = new Array(L), s[p].$Min = L, s[p].$Max = L + K - 1;
                    for (var M = 0; K >= M; M++) {
                        var N = l.$Cast(m, o, M / K, d.$Easing, d.$During, d.$Round, {
                            $Move: d.$Move,
                            $OriginalWidth: h,
                            $OriginalHeight: i
                        });
                        N.$ZIndex = N.$ZIndex || 1, s[p].push(N)
                    }
                })
            }), x.reverse(), l.$Each(x, function(c) {
                l.$Each(c, function(c) {
                    var d = c[0],
                        e = c[1],
                        f = d + "," + e,
                        g = b;
                    (e || d) && (g = l.$CloneNode(b)), l.$SetStyles(g, r[f]), l.$CssOverflow(g, "hidden"), l.$CssPosition(g, "absolute"), a.$AddClipElement(g), t[f] = g, l.$ShowElement(g, !B)
                })
            })
        }

        function q() {
            var a = this,
                b = 0;
            i.call(a, 0, r), a.$OnPositionChange = function(a, c) {
                c - b > y && (b = c, t && t.$ShowFrame(c), s && s.$ShowFrame(c))
            }, a.$Transition = u
        }
        var r, s, t, u, v = this,
            w = 0,
            x = j.$TransitionsOrder,
            y = 8;
        v.$GetTransition = function() {
            var a = 0,
                b = j.$Transitions,
                d = b.length;
            return a = x ? w++ % d : c.floor(c.random() * d), b[a] && (b[a].$Index = a), b[a]
        }, v.$Initialize = function(d, e, f, h, i) {
            u = i, i = o(i, y);
            var j = h.$Item,
                k = f.$Item;
            j["no-image"] = !h.$Image, k["no-image"] = !f.$Image;
            var l = j,
                m = k,
                n = i,
                q = i.$Brother || o({}, y);
            i.$SlideOut || (l = k, m = j);
            var w = q.$Shift || 0;
            s = new p(a, m, q, c.max(w - q.$Interval, 0), b, g), t = new p(a, l, n, c.max(q.$Interval - w, 0), b, g), s.$ShowFrame(0), t.$ShowFrame(0), r = c.max(s.$EndTime, t.$EndTime), v.$Index = d
        }, v.$Clear = function() {
            a.$Clear(), s = d, t = d
        }, v.$GetProcessor = function() {
            var a = d;
            return t && (a = new q), a
        }, (l.$IsBrowserIe9Earlier() || l.$IsBrowserOpera() || n && l.$WebKitVersion() < 537) && (y = 16), h.call(v), i.call(v, -1e7, 1e7)
    };
    var n = a.$JssorSlider$ = function(m, p) {
        function q() {
            var a = this;
            i.call(a, -1e8, 2e8), a.$GetCurrentSlideInfo = function() {
                var b = a.$GetPosition_Display(),
                    d = c.floor(b),
                    e = N(d),
                    f = b - c.floor(b);
                return {
                    $Index: e,
                    $VirtualIndex: d,
                    $Position: f
                }
            }, a.$OnPositionChange = function(a, b) {
                var d = c.floor(b);
                d != b && b > a && d++, J(d, e), Y.$TriggerEvent(n.$EVT_POSITION_CHANGE, N(b), N(a), b, a)
            }
        }

        function r() {
            var a = this;
            i.call(a, 0, 0, {
                $LoopLength: Va
            }), l.$Each(sb, function(b) {
                1 & gb && b.$SetLoopLength(Va), a.$Chain(b), b.$Shift(Ga / _a)
            })
        }

        function s() {
            var a = this,
                b = kb.$Elmt;
            i.call(a, -1, 2, {
                $Easing: k.$EaseLinear,
                $Setter: {
                    $Position: x
                },
                $LoopLength: Va
            }, b, {
                $Position: 1
            }, {
                $Position: -2
            }), a.$Wrapper = b
        }

        function t(a, b) {
            var c, g, h, j, k, l = this;
            i.call(l, -1e8, 2e8, {
                $IntervalMax: 100
            }), l.$OnStart = function() {
                Ja = e, La = d, Y.$TriggerEvent(n.$EVT_SWIPE_START, N(Qa.$GetPosition()), Qa.$GetPosition())
            }, l.$OnStop = function() {
                Ja = f, j = f;
                var a = Qa.$GetCurrentSlideInfo();
                Y.$TriggerEvent(n.$EVT_SWIPE_END, N(Qa.$GetPosition()), Qa.$GetPosition()), !a.$Position && I(a.$VirtualIndex, Ua)
            }, l.$OnPositionChange = function(a, b) {
                var d;
                if (j) d = k;
                else if (d = g, h) {
                    var e = b / h;
                    d = Z.$SlideEasing(e) * (g - c) + c
                }
                Qa.$GoToPosition(d)
            }, l.$PlayCarousel = function(a, b, d, e) {
                c = a, g = b, h = d, Qa.$GoToPosition(a), l.$GoToPosition(0), l.$PlayToPosition(d, e)
            }, l.$StandBy = function(a) {
                j = e, k = a, l.$Play(a, d, e)
            }, l.$SetStandByPosition = function(a) {
                k = a
            }, l.$MoveCarouselTo = function(a) {
                Qa.$GoToPosition(a)
            }, Qa = new q, Qa.$Combine(a), Qa.$Combine(b)
        }

        function u() {
            var a = this,
                b = M();
            l.$CssZIndex(b, 0), l.$Css(b, "pointerEvents", "none"), a.$Elmt = b, a.$AddClipElement = function(a) {
                l.$AppendChild(b, a), l.$ShowElement(b)
            }, a.$Clear = function() {
                l.$HideElement(b), l.$Empty(b)
            }
        }

        function v(a, b) {
            function g(b) {
                y && y.$Revert(), v && v.$Revert(), u(a, b), H = e, v = new da.$Class(a, da, 1), y = new da.$Class(a, da), y.$GoToPosition(0), v.$GoToPosition(0)
            }

            function j() {
                v.$Version < da.$Version && g()
            }

            function k(a, c, d) {
                if (!F && (F = e, B && d)) {
                    var g = d.width,
                        h = d.height,
                        i = g,
                        j = h;
                    if (g && h && Z.$FillMode) {
                        if (3 & Z.$FillMode && (!(4 & Z.$FillMode) || g > Wa || h > Xa)) {
                            var k = f,
                                m = Wa / Xa * h / g;
                            1 & Z.$FillMode ? k = m > 1 : 2 & Z.$FillMode && (k = 1 > m), i = k ? g * Xa / h : Wa, j = k ? Xa : h * Wa / g
                        }
                        l.$CssWidth(B, i), l.$CssHeight(B, j), l.$CssTop(B, (Xa - j) / 2), l.$CssLeft(B, (Wa - i) / 2)
                    }
                    l.$CssPosition(B, "absolute"), Y.$TriggerEvent(n.$EVT_LOAD_END, b)
                }
                l.$HideElement(c), a && a(M)
            }

            function m(a, c, d, e) {
                if (e == La && Ua == b && Da && !Ca) {
                    var f = N(a);
                    lb.$Initialize(f, b, c, M, d), c.$HideContentForSlideshow(), Ra.$Locate(f, 1), Ra.$GoToPosition(f), Sa.$PlayCarousel(a, a, 0)
                }
            }

            function o(c) {
                if (c == La && Ua == b) {
                    if (!I) {
                        var e = d;
                        lb && (lb.$Index == b ? e = lb.$GetProcessor() : lb.$Clear()), j(), I = new w(a, b, e, M.$GetCaptionSliderIn(), M.$GetCaptionSliderOut()), I.$SetPlayer(K)
                    }!I.$IsPlaying() && I.$Replay()
                }
            }

            function p(a, e, f) {
                if (a == b) {
                    a != e ? sb[e] && sb[e].$ParkOut() : !f && I && I.$AdjustIdleOnPark(), K && K.$Enable();
                    var g = La = l.$GetNow();
                    M.$LoadImage(l.$CreateCallback(d, o, g))
                } else {
                    var h = c.abs(b - a),
                        i = ab + Z.$LazyLoading - 1;
                    (!G || i >= h) && M.$LoadImage()
                }
            }

            function q() {
                Ua == b && I && (I.$Stop(), K && K.$Quit(), K && K.$Disable(), I.$OpenSlideshowPanel())
            }

            function r() {
                Ua == b && I && I.$Stop()
            }

            function s(a) {
                !Ia && Y.$TriggerEvent(n.$EVT_CLICK, b, a)
            }

            function t() {
                K = J.pInstance, I && I.$SetPlayer(K)
            }

            function u(a, b, c) {
                if (!l.$Attribute(a, "jssor-slider")) {
                    c = c || 0, H || ("IMG" == a.tagName && (O.push(a), l.$Attribute(a, "src") || (G = e, a["display-origin"] = l.$CssDisplay(a), l.$HideElement(a))), l.$IsBrowserIe9Earlier() && l.$CssZIndex(a, (l.$CssZIndex(a) || 0) + 1), Z.$HWA && l.$WebKitVersion() && (l.$WebKitVersion() < 534 || !Fa && !l.$IsBrowserChrome()) && l.$EnableHWA(a));
                    var d = l.$Children(a);
                    l.$Each(d, function(d) {
                        var g = d.tagName,
                            h = l.$AttributeEx(d, "u");
                        if ("player" != h || J || (J = d, J.pInstance ? t() : l.$AddEvent(J, "dataavailable", t)), "caption" == h) {
                            if (!l.$IsBrowserIE() && !b) {
                                var i = l.$CloneNode(d, f, e);
                                l.$InsertBefore(i, d, a), l.$RemoveElement(d, a), d = i, b = e
                            }
                        } else H || c || B || ("A" == g ? (B = "image" == l.$AttributeEx(d, "u") ? l.$FindChildByTag(d, "IMG") : l.$FindChild(d, "image", e), B && (C = d, l.$SetStyles(C, _), D = l.$CloneNode(C, e), l.$CssDisplay(D, "block"), l.$SetStyles(D, _), l.$CssOpacity(D, 0), l.$Css(D, "backgroundColor", "#000"))) : "IMG" == g && "image" == l.$AttributeEx(d, "u") && (B = d), B && (B.border = 0, l.$SetStyles(B, _)));
                        u(d, b, c + 1)
                    })
                }
            }
            var v, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M = this,
                O = [];
            i.call(M, -ab, ab + 1, {
                $SlideItemAnimator: e
            }), M.$LoadImage = function(a, c) {
                c = c || A, O.length && !F ? (l.$ShowElement(c), E || (E = e, Y.$TriggerEvent(n.$EVT_LOAD_START, b), l.$Each(O, function(a) {
                    l.$Attribute(a, "src") || (a.src = l.$AttributeEx(a, "src2"), l.$CssDisplay(a, a["display-origin"]))
                })), l.$LoadImages(O, B, l.$CreateCallback(d, k, a, c))) : k(a, c)
            }, M.$GoForNextSlide = function() {
                var a = b;
                Z.$AutoPlaySteps < 0 && (a -= Va);
                var e = a + Z.$AutoPlaySteps * ba;
                if (2 & gb && (e = N(e)), 1 & gb || (e = c.max(0, c.min(e, Va - ab))), e != b) {
                    if (lb) {
                        var f = lb.$GetTransition(Va);
                        if (f) {
                            var g = La = l.$GetNow(),
                                h = sb[N(e)];
                            return h.$LoadImage(l.$CreateCallback(d, m, e, h, f, g), A)
                        }
                    }
                    U(e)
                }
            }, M.$TryActivate = function() {
                p(b, b, e)
            }, M.$ParkOut = function() {
                K && K.$Quit(), K && K.$Disable(), M.$UnhideContentForSlideshow(), I && I.$Abort(), I = d, g()
            }, M.$StampSlideItemElements = function(a) {
                a = L + "_" + a
            }, M.$HideContentForSlideshow = function() {
                l.$HideElement(a)
            }, M.$UnhideContentForSlideshow = function() {
                l.$ShowElement(a)
            }, M.$EnablePlayer = function() {
                K && K.$Enable()
            }, M.$OnInnerOffsetChange = function(a, b) {
                var c = ab - b;
                x(z, c)
            }, M.$GetCaptionSliderIn = function() {
                return v
            }, M.$GetCaptionSliderOut = function() {
                return y
            }, M.$Index = b, h.call(M);
            var P = l.$FindChild(a, "thumb", e);
            P && (M.$Thumb = l.$CloneNode(P), l.$RemoveAttribute(P, "id"), l.$HideElement(P)), l.$ShowElement(a), A = l.$CloneNode(ja), l.$CssZIndex(A, 1e3), l.$AddEvent(a, "click", s), g(e), M.$Image = B, M.$Link = D, M.$Item = a, M.$Wrapper = z = a, l.$AppendChild(z, A), Y.$On(203, p), Y.$On(28, r), Y.$On(24, q)
        }

        function w(a, b, c, d, g) {
            function h() {
                l.$Empty(mb), Ba && r && y.$Link && l.$AppendChild(mb, y.$Link), l.$ShowElement(mb, !r && y.$Image)
            }

            function j() {
                s && (s = f, Y.$TriggerEvent(n.$EVT_ROLLBACK_END, b, p, w, o, p, q), v.$GoToPosition(o)), v.$Replay()
            }

            function k(a) {
                u = a, v.$Stop(), v.$Replay()
            }
            var m, o, p, q, r, s, t, u, v = this,
                w = 0,
                x = 0,
                y = sb[b];
            i.call(v, 0, 0), v.$Replay = function() {
                var a = v.$GetPosition_Display();
                if (!Ka && !Ja && !u && Ua == b) {
                    a || (m && !r && (r = e, v.$OpenSlideshowPanel(e), Y.$TriggerEvent(n.$EVT_SLIDESHOW_START, b, w, x, m, q)), h());
                    var c, d = n.$EVT_STATE_CHANGE;
                    a != q && (a == p ? c = q : a == o ? c = p : a ? a > p ? (s = e, c = p, d = n.$EVT_ROLLBACK_START) : c = v.$GetPlayToPosition() : c = o), Y.$TriggerEvent(d, b, a, w, o, p, q);
                    var f = Da && (!cb || hb);
                    a == q ? (p != q && !(12 & cb) || f) && y.$GoForNextSlide() : (f || a != p) && v.$PlayToPosition(c, j)
                }
            }, v.$AdjustIdleOnPark = function() {
                p == q && p == v.$GetPosition_Display() && v.$GoToPosition(o)
            }, v.$Abort = function() {
                lb && lb.$Index == b && lb.$Clear();
                var a = v.$GetPosition_Display();
                q > a && Y.$TriggerEvent(n.$EVT_STATE_CHANGE, b, -a - 1, w, o, p, q)
            }, v.$OpenSlideshowPanel = function(a) {
                c && l.$CssOverflow(ua, a && c.$Transition.$Outside ? "" : "hidden")
            }, v.$OnInnerOffsetChange = function(a, c) {
                r && c >= m && (r = f, h(), y.$UnhideContentForSlideshow(), lb.$Clear(), Y.$TriggerEvent(n.$EVT_SLIDESHOW_END, b, w, x, m, q)), Y.$TriggerEvent(n.$EVT_PROGRESS_CHANGE, b, c, w, o, p, q)
            }, v.$SetPlayer = function(a) {
                a && !t && (t = a, a.$On($JssorPlayer$.$EVT_SWITCH, k))
            }, c && v.$Chain(c), m = v.$GetPosition_OuterEnd(), v.$GetPosition_OuterEnd(), v.$Chain(d), o = d.$GetPosition_OuterEnd(), p = o + (l.$ParseFloat(l.$AttributeEx(a, "idle")) || db), g.$Shift(p), v.$Combine(g), q = v.$GetPosition_OuterEnd()
        }

        function x(a, b) {
            var d = va > 0 ? va : aa,
                e = Za * b * (1 & d),
                f = $a * b * (d >> 1 & 1);
            e = c.round(e), f = c.round(f), l.$CssLeft(a, e), l.$CssTop(a, f)
        }

        function y() {
            ob = Ja, pb = Sa.$GetPlayToPosition(), nb = Qa.$GetPosition()
        }

        function z() {
            y(), (Ka || !hb && 12 & cb) && (Sa.$Stop(), Y.$TriggerEvent(n.$EVT_FREEZE))
        }

        function A(a) {
            if (!(Ka || !hb && 12 & cb || Sa.$IsPlaying())) {
                var b = Qa.$GetPosition(),
                    d = c.ceil(nb);
                a && c.abs(Ma) >= Z.$MinDragOffsetToSlide && (d = c.ceil(b), d += Oa), 1 & gb || (d = c.min(Va - ab, c.max(d, 0)));
                var e = c.abs(d - b);
                e = 1 - c.pow(1 - e, 5), !Ia && ob ? Sa.$Continue(pb) : b == d ? (ta.$EnablePlayer(), ta.$TryActivate()) : Sa.$PlayCarousel(b, d, e * eb)
            }
        }

        function B(a) {
            !l.$AttributeEx(l.$EvtSrc(a), "nodrag") && l.$CancelEvent(a)
        }

        function C(a) {
            D(a, 1)
        }

        function D(a, c) {
            a = l.$GetEvent(a);
            var g = l.$EvtSrc(a);
            if (!(wa || l.$AttributeEx(g, "nodrag") || !K() || c && 1 != a.touches.length)) {
                if (Ka = e, xa = f, La = d, l.$AddEvent(b, c ? "touchmove" : "mousemove", E), l.$GetNow(), Ia = 0, z(), ob || (va = 0), c) {
                    var h = a.touches[0];
                    ib = h.clientX, jb = h.clientY
                } else {
                    var i = l.$MousePosition(a);
                    ib = i.x, jb = i.y
                }
                Ma = 0, Na = 0, Oa = 0, Y.$TriggerEvent(n.$EVT_DRAG_START, N(nb), nb, a)
            }
        }

        function E(a) {
            if (Ka) {
                a = l.$GetEvent(a);
                var b;
                if ("mousemove" != a.type) {
                    var d = a.touches[0];
                    b = {
                        x: d.clientX,
                        y: d.clientY
                    }
                } else b = l.$MousePosition(a);
                if (b) {
                    var f = b.x - ib,
                        g = b.y - jb;
                    if (c.floor(nb) != nb && (va = va || aa & wa), !f && !g || va || (va = 3 == wa ? c.abs(g) > c.abs(f) ? 2 : 1 : wa, ub && 1 == va && c.abs(g) - c.abs(f) > 3 && (xa = e)), va) {
                        var h = g,
                            i = $a;
                        if (1 == va && (h = f, i = Za), !(1 & gb)) {
                            if (h > 0) {
                                var j = i * Ua,
                                    k = h - j;
                                k > 0 && (h = j + 5 * c.sqrt(k))
                            }
                            if (0 > h) {
                                var j = i * (Va - ab - Ua),
                                    k = -h - j;
                                k > 0 && (h = -j - 5 * c.sqrt(k))
                            }
                        } - 2 > Ma - Na ? Oa = 0 : Ma - Na > 2 && (Oa = -1), Na = Ma, Ma = h, qb = nb - Ma / i / (Ta || 1), Ma && va && !xa && (l.$CancelEvent(a), Ja ? Sa.$SetStandByPosition(qb) : Sa.$StandBy(qb))
                    }
                }
            }
        }

        function F() {
            if (L(), Ka) {
                Ka = f, l.$GetNow(), l.$RemoveEvent(b, "mousemove", E), l.$RemoveEvent(b, "touchmove", E), Ia = Ma, Sa.$Stop();
                var a = Qa.$GetPosition();
                Y.$TriggerEvent(n.$EVT_DRAG_END, N(a), a, N(nb), nb), 12 & cb && y(), A(e)
            }
        }

        function G(a) {
            if (Ia) {
                l.$StopEvent(a);
                for (var b = l.$EvtSrc(a); b && ia !== b;) {
                    "A" == b.tagName && l.$CancelEvent(a);
                    try {
                        b = b.parentNode
                    } catch (c) {
                        break
                    }
                }
            }
        }

        function H(a) {
            return sb[Ua], Ua = N(a), ta = sb[Ua], J(a), Ua
        }

        function I(a, b) {
            va = 0, H(a), Y.$TriggerEvent(n.$EVT_PARK, N(a), b)
        }

        function J(a, b) {
            sa = a, l.$Each(bb, function(c) {
                c.$SetCurrentIndex(N(a), a, b)
            })
        }

        function K() {
            var a = n.$DragRegistry || 0,
                b = Ha;
            return ub && 1 & b && (b &= 1), n.$DragRegistry |= b, wa = b & ~a
        }

        function L() {
            wa && (n.$DragRegistry &= ~Ha, wa = 0)
        }

        function M() {
            var a = l.$CreateDiv();
            return l.$SetStyles(a, _), l.$CssPosition(a, "absolute"), a
        }

        function N(a) {
            return (a % Va + Va) % Va
        }

        function O(a, b) {
            var d = a;
            b ? gb ? 2 & gb && (d = N(d + sa), b = f) : (d = c.min(c.max(d + sa, 0), Va - ab), b = f) : gb && (d = Y.$GetVirtualIndex(d)), U(d, Z.$SlideDuration, b)
        }

        function P() {
            l.$Each(bb, function(a) {
                a.$Show(a.$Options.$ChanceToShow <= hb)
            })
        }

        function Q() {
            hb || (hb = 1, P(), Ka || (12 & cb && A(), 3 & cb && sb[Ua].$TryActivate()))
        }

        function R() {
            hb && (hb = 0, P(), Ka || !(12 & cb) || z())
        }

        function S() {
            _ = {
                $Width: Wa,
                $Height: Xa,
                $Top: 0,
                $Left: 0
            }, l.$Each(qa, function(a) {
                l.$SetStyles(a, _), l.$CssPosition(a, "absolute"), l.$CssOverflow(a, "hidden"), l.$HideElement(a)
            }), l.$SetStyles(ja, _)
        }

        function T(a, b) {
            U(a, b, e)
        }

        function U(a, b, d) {
            if (fb && (!Ka && (hb || !(12 & cb)) || Z.$NaviQuitDrag)) {
                Ja = e, Ka = f, Sa.$Stop(), b == g && (b = eb);
                var h = Pa.$GetPosition_Display(),
                    i = a;
                d && (i = h + a, i = a > 0 ? c.ceil(i) : c.floor(i)), 2 & gb && (i = N(i)), 1 & gb || (i = c.max(0, c.min(i, Va - ab)));
                var j = (i - h) % Va;
                i = h + j;
                var k = h == i ? 0 : b * c.abs(j);
                k = c.min(k, b * ab * 1.5), Sa.$PlayCarousel(h, i, k || 1)
            }
        }

        function V() {
            return l.$CssWidth($ || m)
        }

        function W() {
            return l.$CssHeight($ || m)
        }

        function X(a, c) {
            if (a == g) return l.$CssWidth(m);
            if (!$) {
                var d = l.$CreateDiv(b);
                l.$ClassName(d, l.$ClassName(m)), l.$CssCssText(d, l.$CssCssText(m)), l.$CssDisplay(d, "block"), l.$CssPosition(d, "relative"), l.$CssTop(d, 0), l.$CssLeft(d, 0), l.$CssOverflow(d, "visible"), $ = l.$CreateDiv(b), l.$CssPosition($, "absolute"), l.$CssTop($, 0), l.$CssLeft($, 0), l.$CssWidth($, l.$CssWidth(m)), l.$CssHeight($, l.$CssHeight(m)), l.$SetStyleTransformOrigin($, "0 0"), l.$AppendChild($, d);
                var e = l.$Children(m);
                l.$AppendChild(m, $), l.$Css(m, "backgroundImage", ""), l.$Each(e, function(a) {
                    l.$AppendChild(l.$AttributeEx(a, "noscale") ? m : d, a)
                })
            }
            Ta = a / (c ? l.$CssHeight : l.$CssWidth)($), l.$CssScale($, Ta);
            var f = c ? Ta * V() : a,
                h = c ? a : Ta * W();
            l.$CssWidth(m, f), l.$CssHeight(m, h), l.$Each(bb, function(a) {
                a.$Relocate(f, h)
            })
        }
        var Y = this;
        Y.$PlayTo = U, Y.$GoTo = function(a) {
            Qa.$GoToPosition(a)
        }, Y.$Next = function() {
            T(1)
        }, Y.$Prev = function() {
            T(-1)
        }, Y.$Pause = function() {
            Da = f
        }, Y.$Play = function() {
            Da || (Da = e, sb[Ua] && sb[Ua].$TryActivate())
        }, Y.$SetSlideshowTransitions = function(a) {
            Z.$SlideshowOptions.$Transitions = a
        }, Y.$SetCaptionTransitions = function(a) {
            da.$CaptionTransitions = a, da.$Version = l.$GetNow()
        }, Y.$SlidesCount = function() {
            return qa.length
        }, Y.$CurrentIndex = function() {
            return Ua
        }, Y.$IsAutoPlaying = function() {
            return Da
        }, Y.$IsDragging = function() {
            return Ka
        }, Y.$IsSliding = function() {
            return Ja
        }, Y.$IsMouseOver = function() {
            return !hb
        }, Y.$LastDragSucceded = function() {
            return Ia
        }, Y.$OriginalWidth = Y.$GetOriginalWidth = V, Y.$OriginalHeight = Y.$GetOriginalHeight = W, Y.$ScaleHeight = Y.$GetScaleHeight = function(a) {
            return a == g ? l.$CssHeight(m) : void X(a, e)
        }, Y.$ScaleWidth = Y.$SetScaleWidth = Y.$GetScaleWidth = X, Y.$GetVirtualIndex = function(a) {
            var b = c.ceil(N(Ga / _a)),
                d = N(a - sa + b);
            return d > ab ? a - sa > Va / 2 ? a -= Va : -Va / 2 >= a - sa && (a += Va) : a = sa + d - b, a
        }, h.call(Y), Y.$Elmt = m = l.$GetElement(m);
        var Z = l.$Extend({
            $FillMode: 0,
            $LazyLoading: 1,
            $StartIndex: 0,
            $AutoPlay: f,
            $Loop: 1,
            $HWA: e,
            $NaviQuitDrag: e,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: k.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $DisplayPieces: 1,
            $ParkingPosition: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, p);
        Z.$Idle != g && (Z.$AutoPlayInterval = Z.$Idle), Z.$Cols != g && (Z.$DisplayPieces = Z.$Cols);
        var $, _, aa = 3 & Z.$PlayOrientation,
            ba = (4 & Z.$PlayOrientation) / -4 || 1,
            ca = Z.$SlideshowOptions,
            da = l.$Extend({
                $Class: j,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, Z.$CaptionSliderOptions),
            ea = Z.$BulletNavigatorOptions,
            fa = Z.$ArrowNavigatorOptions,
            ga = Z.$ThumbnailNavigatorOptions,
            ha = !Z.$UISearchMode,
            ia = l.$FindChild(m, "slides", ha),
            ja = l.$FindChild(m, "loading", ha) || l.$CreateDiv(b),
            ka = l.$FindChild(m, "navigator", ha),
            la = l.$FindChild(m, "arrowleft", ha),
            ma = l.$FindChild(m, "arrowright", ha),
            na = l.$FindChild(m, "thumbnavigator", ha),
            oa = l.$CssWidth(ia),
            pa = l.$CssHeight(ia),
            qa = [],
            ra = l.$Children(ia);
        l.$Each(ra, function(a) {
            "DIV" != a.tagName || l.$AttributeEx(a, "u") ? l.$IsBrowserIe9Earlier() && l.$CssZIndex(a, (l.$CssZIndex(a) || 0) + 1) : qa.push(a)
        });
        var sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua = -1,
            Va = qa.length,
            Wa = Z.$SlideWidth || oa,
            Xa = Z.$SlideHeight || pa,
            Ya = Z.$SlideSpacing,
            Za = Wa + Ya,
            $a = Xa + Ya,
            _a = 1 & aa ? Za : $a,
            ab = c.min(Z.$DisplayPieces, Va),
            bb = [],
            cb = Z.$PauseOnHover,
            db = Z.$AutoPlayInterval,
            eb = Z.$SlideDuration,
            fb = Va > ab,
            gb = fb ? Z.$Loop : 0,
            hb = 1,
            ib = 0,
            jb = 0,
            kb = new u;
        Da = Z.$AutoPlay, Y.$Options = p, S(), l.$Attribute(m, "jssor-slider", e), l.$CssZIndex(ia, l.$CssZIndex(ia) || 0), l.$CssPosition(ia, "absolute"), ua = l.$CloneNode(ia, e), l.$InsertBefore(ua, ia), ca && (Ba = ca.$ShowLink, Ea = ca.$Class, Fa = 1 == ab && Va > 1 && Ea && (!l.$IsBrowserIE() || l.$BrowserVersion() >= 8)), Ga = Fa || ab >= Va || !(1 & gb) ? 0 : Z.$ParkingPosition, Ha = (ab > 1 || Ga ? aa : -1) & Z.$DragOrientation;
        var lb, mb, nb, ob, pb, qb, rb = ia,
            sb = [],
            tb = l.$Device(),
            ub = tb.$Touchable;
        tb.$TouchActionAttr && l.$Css(rb, tb.$TouchActionAttr, [d, "pan-y", "pan-x", "none"][Ha] || ""), Ra = new s, Fa && (lb = new Ea(kb, Wa, Xa, ca, ub)), l.$AppendChild(ua, Ra.$Wrapper), l.$CssOverflow(ia, "hidden"), mb = M(), l.$Css(mb, "backgroundColor", "#000"), l.$CssOpacity(mb, 0), l.$InsertBefore(mb, rb.firstChild, rb);
        for (var vb = 0; vb < qa.length; vb++) {
            var wb = qa[vb],
                xb = new v(wb, vb);
            sb.push(xb)
        }
        l.$HideElement(ja), Pa = new r, Sa = new t(Pa, Ra), Ha && (l.$AddEvent(ia, "mousedown", D), l.$AddEvent(ia, "touchstart", C),
            l.$AddEvent(ia, "dragstart", B), l.$AddEvent(ia, "selectstart", B), l.$AddEvent(b, "mouseup", F), l.$AddEvent(b, "touchend", F), l.$AddEvent(b, "touchcancel", F), l.$AddEvent(a, "blur", F)), cb &= ub ? 10 : 5, ka && ea && (ya = new ea.$Class(ka, ea, V(), W()), bb.push(ya)), fa && la && ma && (fa.$Loop = gb, fa.$DisplayPieces = ab, za = new fa.$Class(la, ma, fa, V(), W()), bb.push(za)), na && ga && (ga.$StartIndex = Z.$StartIndex, Aa = new ga.$Class(na, ga), bb.push(Aa)), l.$Each(bb, function(a) {
            a.$Reset(Va, sb, ja), a.$On(o.$NAVIGATIONREQUEST, O)
        }), X(V()), l.$AddEvent(ia, "click", G), l.$AddEvent(m, "mouseout", l.$MouseOverOutFilter(Q, m)), l.$AddEvent(m, "mouseover", l.$MouseOverOutFilter(R, m)), P(), Z.$ArrowKeyNavigation && l.$AddEvent(b, "keydown", function(a) {
            37 == a.keyCode ? T(-1) : 39 == a.keyCode && T(1)
        });
        var yb = Z.$StartIndex;
        1 & gb || (yb = c.max(0, c.min(yb, Va - ab))), Sa.$PlayCarousel(yb, yb, 0)
    };
    a.$JssorSlideo$ = n, n.$EVT_CLICK = 21, n.$EVT_DRAG_START = 22, n.$EVT_DRAG_END = 23, n.$EVT_SWIPE_START = 24, n.$EVT_SWIPE_END = 25, n.$EVT_LOAD_START = 26, n.$EVT_LOAD_END = 27, n.$EVT_FREEZE = 28, n.$EVT_POSITION_CHANGE = 202, n.$EVT_PARK = 203, n.$EVT_SLIDESHOW_START = 206, n.$EVT_SLIDESHOW_END = 207, n.$EVT_PROGRESS_CHANGE = 208, n.$EVT_STATE_CHANGE = 209, n.$EVT_ROLLBACK_START = 210, n.$EVT_ROLLBACK_END = 211;
    var o = {
        $NAVIGATIONREQUEST: 1,
        $INDEXCHANGE: 2,
        $RESET: 3
    };
    a.$JssorBulletNavigator$ = function(a, b) {
        function g(a) {
            -1 != a && B[a].$Selected(a == z)
        }

        function i(a) {
            j.$TriggerEvent(o.$NAVIGATIONREQUEST, a * r)
        }
        var j = this;
        h.call(j), a = l.$GetElement(a);
        var k, m, n, p, q, r, s, t, u, v, w, x, y, z = 0,
            A = [],
            B = [];
        j.$Elmt = a, j.$GetCurrentIndex = function() {
            return p
        }, j.$SetCurrentIndex = function(a) {
            if (a != p) {
                var b = z,
                    d = c.floor(a / r);
                z = d, p = a, g(b), g(d)
            }
        }, j.$Show = function(b) {
            l.$ShowElement(a, b)
        };
        var C;
        j.$Relocate = function(b, c) {
            if (!C || q.$Scale == f) {
                var b = l.$ParentNode(a).clientWidth,
                    c = l.$ParentNode(a).clientHeight;
                1 & q.$AutoCenter && l.$CssLeft(a, (b - m) / 2), 2 & q.$AutoCenter && l.$CssTop(a, (c - n) / 2), C = e
            }
        };
        var D;
        j.$Reset = function(b) {
            if (!D) {
                k = c.ceil(b / r), z = 0;
                var f = x + t,
                    g = y + u,
                    h = c.ceil(k / s) - 1;
                m = x + f * (v ? s - 1 : h), n = y + g * (v ? h : s - 1), l.$CssWidth(a, m), l.$CssHeight(a, n);
                for (var j = 0; k > j; j++) {
                    var o = l.$CreateSpan();
                    l.$InnerText(o, j + 1);
                    var p = l.$BuildElement(w, "numbertemplate", o, e);
                    l.$CssPosition(p, "absolute");
                    var C = j % (h + 1);
                    l.$CssLeft(p, v ? j % s * f : f * C), l.$CssTop(p, v ? g * C : c.floor(j / (h + 1)) * g), l.$AppendChild(a, p), A[j] = p, 1 & q.$ActionMode && l.$AddEvent(p, "click", l.$CreateCallback(d, i, j)), 2 & q.$ActionMode && l.$AddEvent(p, "mouseover", l.$MouseOverOutFilter(l.$CreateCallback(d, i, j), p)), B[j] = l.$Buttonize(p)
                }
                D = e
            }
        }, j.$Options = q = l.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, b), w = l.$FindChild(a, "prototype"), x = l.$CssWidth(w), y = l.$CssHeight(w), l.$RemoveElement(w, a), r = q.$Steps || 1, s = q.$Lanes || 1, t = q.$SpacingX, u = q.$SpacingY, v = q.$Orientation - 1, q.$Scale == f && l.$Attribute(a, "noscale", e)
    }, a.$JssorArrowNavigator$ = function(a, b, c) {
        function g(a) {
            j.$TriggerEvent(o.$NAVIGATIONREQUEST, a, e)
        }

        function i(d) {
            l.$ShowElement(a, d || !c.$Loop && 0 == n), l.$ShowElement(b, d || !c.$Loop && n >= m - c.$DisplayPieces), k = d
        }
        var j = this;
        h.call(j);
        var k, m, n, p, q, r = l.$CssWidth(a),
            s = l.$CssHeight(a);
        j.$GetCurrentIndex = function() {
            return n
        }, j.$SetCurrentIndex = function(a, b, c) {
            c ? n = b : (n = a, i(k))
        }, j.$Show = i;
        var t;
        j.$Relocate = function(c, d) {
            if (!t || p.$Scale == f) {
                var g = l.$ParentNode(a).clientWidth,
                    d = l.$ParentNode(a).clientHeight;
                1 & p.$AutoCenter && (l.$CssLeft(a, (g - r) / 2), l.$CssLeft(b, (g - r) / 2)), 2 & p.$AutoCenter && (l.$CssTop(a, (d - s) / 2), l.$CssTop(b, (d - s) / 2)), t = e
            }
        };
        var u;
        j.$Reset = function(c) {
            m = c, n = 0, u || (l.$AddEvent(a, "click", l.$CreateCallback(d, g, -q)), l.$AddEvent(b, "click", l.$CreateCallback(d, g, q)), l.$Buttonize(a), l.$Buttonize(b), u = e)
        }, j.$Options = p = l.$Extend({
            $Steps: 1
        }, c), q = p.$Steps, p.$Scale == f && (l.$Attribute(a, "noscale", e), l.$Attribute(b, "noscale", e))
    }, a.$JssorThumbnailNavigator$ = function(a, b) {
        function i(a, b) {
            function c() {
                h.$Selected(k == b)
            }

            function f(a) {
                (a || !x.$LastDragSucceded()) && A.$TriggerEvent(o.$NAVIGATIONREQUEST, b)
            }
            var g, h, i, j = this;
            j.$Index = b, j.$Highlight = c, i = a.$Thumb || a.$Image || l.$CreateDiv(), j.$Wrapper = g = l.$BuildElement(z, "thumbnailtemplate", i, e), h = l.$Buttonize(g), 1 & m.$ActionMode && l.$AddEvent(g, "click", l.$CreateCallback(d, f, 0)), 2 & m.$ActionMode && l.$AddEvent(g, "mouseover", l.$MouseOverOutFilter(l.$CreateCallback(d, f, 1), g))
        }
        var j, k, m, p, q, r, s, t, u, v, w, x, y, z, A = this,
            B = [];
        h.call(A), a = l.$GetElement(a), A.$GetCurrentIndex = function() {
            return k
        }, A.$SetCurrentIndex = function(a, b, d) {
            var e = k;
            k = a, -1 != e && B[e].$Highlight(), B[a].$Highlight(), !d && x.$PlayTo(x.$GetVirtualIndex(c.floor(b / r)))
        }, A.$Show = function(b) {
            l.$ShowElement(a, b)
        }, A.$Relocate = l.$EmptyFunction;
        var C;
        A.$Reset = function(b, d) {
            if (!C) {
                j = b, c.ceil(j / r), k = -1, w = c.min(w, d.length);
                var g = 1 & m.$Orientation,
                    h = u + (u + s) * (r - 1) * (1 - g),
                    o = v + (v + t) * (r - 1) * g,
                    z = h + (h + s) * (w - 1) * g,
                    A = o + (o + t) * (w - 1) * (1 - g);
                l.$CssPosition(y, "absolute"), l.$CssOverflow(y, "hidden"), 1 & m.$AutoCenter && l.$CssLeft(y, (p - z) / 2), 2 & m.$AutoCenter && l.$CssTop(y, (q - A) / 2), l.$CssWidth(y, z), l.$CssHeight(y, A);
                var D = [];
                l.$Each(d, function(a, b) {
                    var d = new i(a, b),
                        e = d.$Wrapper,
                        f = c.floor(b / r),
                        h = b % r;
                    l.$CssLeft(e, (u + s) * h * (1 - g)), l.$CssTop(e, (v + t) * h * g), D[f] || (D[f] = l.$CreateDiv(), l.$AppendChild(y, D[f])), l.$AppendChild(D[f], e), B.push(d)
                });
                var E = l.$Extend({
                    $HWA: f,
                    $AutoPlay: f,
                    $NaviQuitDrag: f,
                    $SlideWidth: h,
                    $SlideHeight: o,
                    $SlideSpacing: s * g + t * (1 - g),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: m.$Orientation,
                    $DragOrientation: m.$DisableDrag ? 0 : m.$Orientation
                }, m);
                x = new n(a, E), C = e
            }
        }, A.$Options = m = l.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, b), m.$Rows != g && (m.$Lanes = m.$Rows), p = l.$CssWidth(a), q = l.$CssHeight(a), y = l.$FindChild(a, "slides", e), z = l.$FindChild(y, "prototype"), u = l.$CssWidth(z), v = l.$CssHeight(z), l.$RemoveElement(z, y), r = m.$Lanes || 1, s = m.$SpacingX, t = m.$SpacingY, w = m.$DisplayPieces, m.$Scale == f && l.$Attribute(a, "noscale", e)
    }, a.$JssorCaptionSlider$ = function(a, b, d) {
        function e(a, b) {
            function f(a, b) {
                var c = {};
                return l.$Each(o, function(d, e) {
                    var f = l.$AttributeEx(a, d + (b || ""));
                    if (f) {
                        var g = {};
                        "t" == d ? g.$Value = f : f.indexOf("%") + 1 ? g.$Percent = l.$ParseFloat(f) / 100 : g.$Value = l.$ParseFloat(f), c[e] = g
                    }
                }), c
            }

            function g() {
                return n[c.floor(c.random() * n.length)]
            }

            function h(a) {
                var b;
                if ("*" == a) b = g();
                else if (a) {
                    var d = n[l.$ParseInt(a)] || n[a];
                    l.$IsArray(d) && (a != i ? (i = a, q[a] = 0, k[a] = d[c.floor(c.random() * d.length)]) : q[a]++, d = k[a], l.$IsArray(d) && (d = d.length && d[q[a] % d.length], l.$IsArray(d) && (d = d[c.floor(c.random() * d.length)]))), b = d, l.$IsString(b) && (b = h(b))
                }
                return b
            }
            var i, j = [],
                k = [],
                q = [],
                r = l.$Children(a);
            return l.$Each(r, function(a) {
                var c = [];
                c.$Elmt = a;
                var g = "caption" == l.$AttributeEx(a, "u");
                l.$Each(d ? [0, 3] : [2], function(d, i) {
                    if (g) {
                        var j, k;
                        if (2 == d && l.$AttributeEx(a, "t3") || (k = f(a, d), 2 != d || k.$Transition || (k.$Delay = k.$Delay || {
                                $Value: 0
                            }, k = l.$Extend(f(a, 0), k))), k && k.$Transition && (j = h(k.$Transition.$Value))) {
                            var n = l.$Extend({
                                $Delay: 0
                            }, j);
                            l.$Each(k, function(a, b) {
                                var c = (p[b] || p.$Default).apply(p, [n[b], k[b]]);
                                isNaN(c) || (n[b] = c)
                            }), i || (k.$BeginTime ? n.$BeginTime = k.$BeginTime.$Value || 0 : 2 & m && (n.$BeginTime = 0))
                        }
                        c.push(n)
                    }
                    b % 2 && !i && (c.$Children = e(a, b + 1))
                }), j.push(c)
            }), j
        }

        function f(a, b, e) {
            var f = {
                    $Easing: b.$Easing,
                    $Round: b.$Round,
                    $During: b.$During,
                    $Reverse: d && !e
                },
                g = a,
                h = l.$ParentNode(a),
                j = l.$CssWidth(g),
                k = l.$CssHeight(g),
                m = l.$CssWidth(h),
                n = l.$CssHeight(h),
                o = {},
                p = {},
                q = b.$ScaleClip || 1;
            if (b.$Opacity && (p.$Opacity = 1 - b.$Opacity), f.$OriginalWidth = j, f.$OriginalHeight = k, b.$Zoom || b.$Rotate) {
                p.$Zoom = (b.$Zoom || 2) - 2, (l.$IsBrowserIe9Earlier() || l.$IsBrowserOpera()) && (p.$Zoom = c.min(p.$Zoom, 1)), o.$Zoom = 1;
                var r = b.$Rotate || 0;
                p.$Rotate = 360 * r, o.$Rotate = 0
            } else if (b.$Clip) {
                var s = {
                        $Top: 0,
                        $Right: j,
                        $Bottom: k,
                        $Left: 0
                    },
                    t = l.$Extend({}, s),
                    u = t.$Offset = {},
                    v = 4 & b.$Clip,
                    w = 8 & b.$Clip,
                    x = 1 & b.$Clip,
                    y = 2 & b.$Clip;
                v && w ? (u.$Top = k / 2 * q, u.$Bottom = -u.$Top) : v ? u.$Bottom = -k * q : w && (u.$Top = k * q), x && y ? (u.$Left = j / 2 * q, u.$Right = -u.$Left) : x ? u.$Right = -j * q : y && (u.$Left = j * q), f.$Move = b.$Move, p.$Clip = t, o.$Clip = s
            }
            var z = 0,
                A = 0;
            b.x && (z -= m * b.x), b.y && (A -= n * b.y), (z || A || f.$Move) && (p.$Left = z, p.$Top = A);
            var B = b.$Duration;
            return o = l.$Extend(o, l.$GetStyles(g, p)), f.$Setter = l.$StyleSetterEx(), new i(b.$Delay, B, f, g, o, p)
        }

        function h(a, b) {
            return l.$Each(b, function(b) {
                var c, d = b.$Elmt,
                    e = b[0],
                    i = b[1];
                if (e && (c = f(d, e), a = c.$Locate(e.$BeginTime == g ? a : e.$BeginTime, 1)), a = h(a, b.$Children), i) {
                    var l = f(d, i, 1);
                    l.$Locate(a, 1), k.$Combine(l), j.$Combine(l)
                }
                c && k.$Combine(c)
            }), a
        }
        var j, k = this,
            m = d ? b.$PlayInMode : b.$PlayOutMode,
            n = b.$CaptionTransitions,
            o = {
                $Transition: "t",
                $Delay: "d",
                $Duration: "du",
                x: "x",
                y: "y",
                $Rotate: "r",
                $Zoom: "z",
                $Opacity: "f",
                $BeginTime: "b"
            },
            p = {
                $Default: function(a, b) {
                    return isNaN(b.$Value) ? a *= b.$Percent : a = b.$Value, a
                },
                $Opacity: function(a, b) {
                    return this.$Default(a - 1, b)
                }
            };
        p.$Zoom = p.$Opacity, i.call(k, 0, 0), k.$Revert = function() {
            k.$GoToPosition(k.$GetPosition_OuterEnd() * (d || 0)), j.$GoToPosition(0)
        }, j = new i(0, 0), h(0, m ? e(a, 1) : [])
    }
}(window, document, Math, null, !0, !1);