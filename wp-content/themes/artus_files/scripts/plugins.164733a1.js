+ function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350,
        d.DEFAULTS = {
            toggle: !0
        }, d.prototype.dimension = function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height"
        }, d.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                    var f = a.Event("show.bs.collapse");
                    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var h = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return h.call(this);
                        var i = a.camelCase(["scroll", g].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                    }
                }
            }
        }, d.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var e = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                }
            }
        }, d.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, d.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e)
            }, this)).end()
        }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
        };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
function(a, b, c, d, e, f, g) {
    function h() {
        function b(a, b) {
            e.push({
                lc: a,
                Yb: b
            })
        }

        function c(a, b) {
            l.e(e, function(c, d) {
                c.lc == a && c.Yb === b && e.splice(d, 1)
            })
        }
        var d = this,
            e = [];
        d.$On = d.addEventListener = b, d.$Off = d.removeEventListener = c, d.i = function(b) {
            var c = [].slice.call(arguments, 1);
            l.e(e, function(d) {
                d.lc == b && d.Yb.apply(a, c)
            })
        }
    }

    function i(b, g, h, i, j, m) {
        function n(a) {
            D += a, E += a, M += a, K += a, L += a, J = a
        }

        function o(a, c) {
            var d = a - D + b * c;
            return n(d), E
        }

        function p(a, b) {
            var d = a;
            if (F && (d >= E || D >= d) && (d = ((d - D) % F + F) % F + D), !C || x || b || K != d) {
                var f = c.min(d, E);
                if (f = c.max(f, D), !C || x || b || f != L) {
                    if (m) {
                        var k = (f - M) / (g || 1);
                        h.$Reverse && (k = 1 - k);
                        var n = l.td(j, m, k, y, A, z, h);
                        l.e(n, function(a, b) {
                            G[b] && G[b](i, a)
                        })
                    }
                    H.rc(L - M, f - M), L = f, l.e(N, function(c, d) {
                        var e = K > a ? N[N.length - d - 1] : c;
                        e.v(L - J, b)
                    });
                    var o = K,
                        p = L;
                    K = d, C = e, H.Gb(o, p)
                }
            }
        }

        function q(a, b, d) {
            b && a.Jb(E, 1), d || (D = c.min(D, a.ae() + J), E = c.max(E, a.Y() + J)), N.push(a)
        }

        function r() {
            if (u) {
                var a = l.J(),
                    b = c.min(a - I, h.md),
                    d = K + b * w;
                I = a, d * w >= v * w && (d = v), p(d), !x && d * w >= v * w ? t(B) : O(r)
            }
        }

        function s(a, b, d) {
            u || (u = e, x = d, B = b, a = c.max(a, D), a = c.min(a, E), v = a, w = K > v ? -1 : 1, H.ld(), I = l.J(), O(r))
        }

        function t(a) {
            u && (x = u = B = f, H.kd(), a && a())
        }
        b = b || 0;
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H = this,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = b,
            N = [],
            O = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.msRequestAnimationFrame;
        l.je() && l.Sc() < 7 && (O = d), O = O || function(a) {
            l.$Delay(a, h.$Interval)
        }, H.$Play = function(a, b, c) {
            s(a ? K + a : E, b, c)
        }, H.fd = s, H.W = t, H.Kd = function(a) {
            s(a)
        }, H.T = function() {
            return K
        }, H.jd = function() {
            return v
        }, H.Eb = function() {
            return L
        }, H.v = p, H.$Move = function(a) {
            p(K + a)
        }, H.$IsPlaying = function() {
            return u
        }, H.Fd = function(a) {
            F = a
        }, H.Jb = o, H.$Shift = n, H.X = function(a) {
            q(a, 0)
        }, H.nc = function(a) {
            q(a, 1)
        }, H.ae = function() {
            return D
        }, H.Y = function() {
            return E
        }, H.Gb = H.ld = H.kd = H.rc = l.ac, H.Zb = l.J(), h = l.l({
            $Interval: 16,
            md: 50
        }, h), F = h.ed, G = l.l({}, l.ce(), h.wc), D = M = b, E = b + g, z = h.$Round || {}, A = h.$During || {}, y = l.l({
            Cb: l.Nc(h.$Easing) && h.$Easing || k.$EaseSwing
        }, h.$Easing)
    }

    function j() {
        i.call(this, 0, 0), this.Sb = l.ac
    }!new function() {};
    var k = a.$JssorEasing$ = {
            $EaseSwing: function(a) {
                return -c.cos(a * c.PI) / 2 + .5
            },
            $EaseLinear: function(a) {
                return a
            },
            $EaseInQuad: function(a) {
                return a * a
            },
            $EaseOutQuad: function(a) {
                return -a * (a - 2)
            },
            $EaseInOutQuad: function(a) {
                return (a *= 2) < 1 ? .5 * a * a : -0.5 * (--a * (a - 2) - 1)
            },
            $EaseInCubic: function(a) {
                return a * a * a
            },
            $EaseOutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $EaseInOutCubic: function(a) {
                return (a *= 2) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
            },
            $EaseInQuart: function(a) {
                return a * a * a * a
            },
            $EaseOutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $EaseInOutQuart: function(a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
            },
            $EaseInQuint: function(a) {
                return a * a * a * a * a
            },
            $EaseOutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $EaseInOutQuint: function(a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
            },
            $EaseInSine: function(a) {
                return 1 - c.cos(a * c.PI / 2)
            },
            $EaseOutSine: function(a) {
                return c.sin(a * c.PI / 2)
            },
            $EaseInOutSine: function(a) {
                return -0.5 * (c.cos(c.PI * a) - 1)
            },
            $EaseInExpo: function(a) {
                return 0 == a ? 0 : c.pow(2, 10 * (a - 1))
            },
            $EaseOutExpo: function(a) {
                return 1 == a ? 1 : -c.pow(2, -10 * a) + 1
            },
            $EaseInOutExpo: function(a) {
                return 0 == a || 1 == a ? a : (a *= 2) < 1 ? .5 * c.pow(2, 10 * (a - 1)) : .5 * (-c.pow(2, -10 * --a) + 2)
            },
            $EaseInCirc: function(a) {
                return -(c.sqrt(1 - a * a) - 1)
            },
            $EaseOutCirc: function(a) {
                return c.sqrt(1 - (a -= 1) * a)
            },
            $EaseInOutCirc: function(a) {
                return (a *= 2) < 1 ? -0.5 * (c.sqrt(1 - a * a) - 1) : .5 * (c.sqrt(1 - (a -= 2) * a) + 1)
            },
            $EaseInElastic: function(a) {
                if (!a || 1 == a) return a;
                var b = .3,
                    d = .075;
                return -(c.pow(2, 10 * (a -= 1)) * c.sin(2 * (a - d) * c.PI / b))
            },
            $EaseOutElastic: function(a) {
                if (!a || 1 == a) return a;
                var b = .3,
                    d = .075;
                return c.pow(2, -10 * a) * c.sin(2 * (a - d) * c.PI / b) + 1
            },
            $EaseInOutElastic: function(a) {
                if (!a || 1 == a) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin(2 * (a - d) * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin(2 * (a - d) * c.PI / b) * .5 + 1
            },
            $EaseInBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $EaseOutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $EaseInOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $EaseInBounce: function(a) {
                return 1 - k.$EaseOutBounce(1 - a)
            },
            $EaseOutBounce: function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $EaseInOutBounce: function(a) {
                return .5 > a ? .5 * k.$EaseInBounce(2 * a) : .5 * k.$EaseOutBounce(2 * a - 1) + .5
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
        },
        l = new function() {
            function h() {
                if (!da) {
                    da = {
                        ie: "ontouchstart" in a || "createTouch" in b
                    };
                    var c;
                    (sa.pointerEnabled || (c = sa.msPointerEnabled)) && (da.dd = c ? "msTouchAction" : "touchAction")
                }
                return da
            }

            function i(c) {
                if (!na)
                    if (na = -1, "Microsoft Internet Explorer" == ta && a.attachEvent && a.ActiveXObject) {
                        var d = ua.indexOf("MSIE");
                        na = ia, pa = va(ua.substring(d + 5, ua.indexOf(";", d))), oa = b.documentMode || pa
                    } else if ("Netscape" == ta && a.addEventListener) {
                    var e = ua.indexOf("Firefox"),
                        f = ua.indexOf("Safari"),
                        g = ua.indexOf("Chrome"),
                        h = ua.indexOf("AppleWebKit");
                    if (e >= 0) na = ja, oa = va(ua.substring(e + 8));
                    else if (f >= 0) {
                        var i = ua.substring(0, f).lastIndexOf("/");
                        na = g >= 0 ? la : ka, oa = va(ua.substring(i + 1, f))
                    } else {
                        var j = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(ua);
                        j && (na = ia, oa = pa = va(j[1]))
                    }
                    h >= 0 && (ra = va(ua.substring(h + 12)))
                } else {
                    var j = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(ua);
                    j && (na = ma, oa = va(j[2]))
                }
                return c == na
            }

            function j() {
                return i(ia)
            }

            function m() {
                return j() && (6 > oa || "BackCompat" == b.compatMode)
            }

            function n() {
                return i(ka)
            }

            function o() {
                return i(la)
            }

            function p() {
                return i(ma)
            }

            function q() {
                return n() && ra > 534 && 535 > ra
            }

            function r() {
                return j() && 9 > oa
            }

            function s(a) {
                return ea || (v(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(b) {
                    return a.style[b] != g ? (ea = b, e) : void 0
                }), ea = ea || "transform"), ea
            }

            function t(a) {
                return {}.toString.call(a)
            }

            function u() {
                return fa || (fa = {}, v(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    fa["[object " + a + "]"] = a.toLowerCase()
                })), fa
            }

            function v(a, b) {
                if ("[object Array]" == t(a)) {
                    for (var c = 0; c < a.length; c++)
                        if (b(a[c], c, a)) return e
                } else
                    for (var d in a)
                        if (b(a[d], d, a)) return e
            }

            function w(a) {
                return a == d ? String(a) : u()[t(a)] || "object"
            }

            function x(a) {
                for (var b in a) return e
            }

            function y(a) {
                try {
                    return "object" == w(a) && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
                } catch (b) {}
            }

            function z(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function A(a, b) {
                setTimeout(a, b || 0)
            }

            function B(a, b, c) {
                var d = a && "inherit" != a ? a : "";
                return v(b, function(a) {
                    var b = a.exec(d);
                    if (b) {
                        var c = d.substr(0, b.index),
                            e = d.substr(b.lastIndex + 1, d.length - (b.lastIndex + 1));
                        d = c + e
                    }
                }), d = c + (0 != d.indexOf(" ") ? " " : "") + d
            }

            function C(a, b) {
                9 > oa && (a.style.filter = b)
            }

            function D(a, b, c) {
                if (9 > qa) {
                    var d = a.style.filter,
                        e = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        f = b ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0][0] + ", M12=" + b[0][1] + ", M21=" + b[1][0] + ", M22=" + b[1][1] + ", SizingMethod='auto expand')" : "",
                        g = B(d, [e], f);
                    C(a, g), ga.Uc(a, c.y), ga.Vc(a, c.x)
                }
            }

            function E(a) {
                a.constructor === E.caller && a.yd && a.yd.apply(a, E.caller.arguments)
            }

            function F(b) {
                return b || a.event
            }

            function G(b, c, e) {
                if (e == g) {
                    var f = b.currentStyle || b.style;
                    return e = f[c], "" == e && a.getComputedStyle && (f = b.ownerDocument.defaultView.getComputedStyle(b, d), f && (e = f.getPropertyValue(c) || f[c])), e
                }
                b.style[c] = e
            }

            function H(a, b, c, d) {
                return c == g ? va(G(a, b)) : (d && (c += "px"), void G(a, b, c))
            }

            function I(a, b) {
                var c = 2 & b,
                    d = b ? H : G;
                return function(b, e) {
                    return d(b, a, e, c)
                }
            }

            function J(a) {
                if (j() && 9 > pa) {
                    var b = /opacity=([^)]*)/.exec(a.style.filter || "");
                    return b ? va(b[1]) / 100 : 1
                }
                return va(a.style.opacity || "1")
            }

            function K(a, b, d) {
                if (j() && 9 > pa) {
                    var e = a.style.filter || "",
                        f = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                        g = c.round(100 * b),
                        h = "";
                    (100 > g || d) && (h = "alpha(opacity=" + g + ") ");
                    var i = B(e, [f], h);
                    C(a, i)
                } else a.style.opacity = 1 == b ? "" : c.round(100 * b) / 100
            }

            function L(b, e) {
                var f = e.$Rotate || 0,
                    h = e.$Scale == g ? 1 : e.$Scale;
                if (r()) {
                    var i = ga.se(f / 180 * c.PI, h, h);
                    D(b, f || 1 != h ? i : d, ga.re(i, e.$OriginalWidth, e.$OriginalHeight))
                } else {
                    var j = s(b);
                    if (j) {
                        var k = "rotate(" + f % 360 + "deg) scale(" + h + ")";
                        o() && ra > 535 && "ontouchstart" in a && (k += " perspective(2000px)"), b.style[j] = k
                    }
                }
            }

            function M(a, b, c, e) {
                for (e = e || "u", a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType) {
                        if (U(a, e) == b) return a;
                        if (!c) {
                            var f = M(a, b, c, e);
                            if (f) return f
                        }
                    }
            }

            function N(a, b, c, e) {
                e = e || "u";
                var f = [];
                for (a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType && (U(a, e) == b && f.push(a), !c)) {
                        var g = N(a, b, c, e);
                        g.length && (f = f.concat(g))
                    } return f
            }

            function O(a, b, c) {
                for (a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType) {
                        if (a.tagName == b) return a;
                        if (!c) {
                            var e = O(a, b, c);
                            if (e) return e
                        }
                    }
            }

            function P(a, b, c) {
                var e = [];
                for (a = a ? a.firstChild : d; a; a = a.nextSibling)
                    if (1 == a.nodeType && ((!b || a.tagName == b) && e.push(a), !c)) {
                        var f = P(a, b, c);
                        f.length && (e = e.concat(f))
                    } return e
            }

            function Q() {
                var a, b, c, d, e = arguments,
                    f = 1 & e[0],
                    h = 1 + f;
                for (a = e[h - 1] || {}; h < e.length; h++)
                    if (b = e[h])
                        for (c in b) d = b[c], d !== g && (d = b[c], a[c] = f && y(a[c]) ? Q(f, {}, d) : d);
                return a
            }

            function R(a, b) {
                var c, d, e, f = {};
                for (c in a)
                    if (d = a[c], e = b[c], d !== e) {
                        var g;
                        y(d) && y(e) && (d = R(e), g = !x(d)), !g && (f[c] = d)
                    } return f
            }

            function S(a) {
                return b.createElement(a)
            }

            function T(a, b, c) {
                return c == g ? a.getAttribute(b) : void a.setAttribute(b, c)
            }

            function U(a, b) {
                return T(a, b) || T(a, "data-" + b)
            }

            function V(a, b) {
                return b == g ? a.className : void(a.className = b)
            }

            function W(a) {
                var b = {};
                return v(a, function(a) {
                    b[a] = a
                }), b
            }

            function X(a, b) {
                return a.match(b || ha)
            }

            function Y(a, b) {
                return W(X(a || "", b))
            }

            function Z(a, b) {
                var c = "";
                return v(b, function(b) {
                    c && (c += a), c += b
                }), c
            }

            function $(a, b, c) {
                V(a, Z(" ", Q(R(Y(V(a)), Y(b)), Y(c))))
            }

            function _(a, b, c) {
                var d = a.cloneNode(!b);
                return !c && ga.Kc(d, "id"), d
            }

            function aa(a) {
                function c() {
                    $(a, f, k[o || m || 2 & n || n]), l.cb(a, "pointer-events", o ? "none" : "")
                }

                function d() {
                    m = 0, c(), ga.I(b, "mouseup", d), ga.I(b, "touchend", d), ga.I(b, "touchcancel", d)
                }

                function e(a) {
                    o ? ga.Fb(a) : (m = 4, c(), ga.c(b, "mouseup", d), ga.c(b, "touchend", d), ga.c(b, "touchcancel", d))
                }
                var f, h = this,
                    i = "",
                    j = ["av", "pv", "ds", "dn"],
                    k = [],
                    m = 0,
                    n = 0,
                    o = 0;
                h.Ic = function(a) {
                    return a == g ? n : (n = 2 & a || 1 & a, void c())
                }, h.$Enable = function(a) {
                    return a == g ? !o : (o = a ? 0 : 3, void c())
                }, a = ga.hb(a);
                var p = l.Oe(V(a));
                p && (i = p.shift()), v(j, function(a) {
                    k.push(i + a)
                }), f = Z(" ", k), k.unshift(""), ga.c(a, "mousedown", e), ga.c(a, "touchstart", e)
            }

            function ba() {
                return wa || (wa = Q({
                    zg: ga.Uc,
                    Ag: ga.Vc,
                    $Clip: ga.Ve,
                    kc: ga.me
                }, xa)), wa
            }

            function ca() {
                return ba(), wa.kc = wa.kc, wa
            }
            var da, ea, fa, ga = this,
                ha = /\S+/g,
                ia = 1,
                ja = 2,
                ka = 3,
                la = 4,
                ma = 5,
                na = 0,
                oa = 0,
                pa = 0,
                qa = 0,
                ra = 0,
                sa = navigator,
                ta = sa.appName,
                ua = sa.userAgent;
            ga.he = h, ga.Wc = j, ga.je = n, ga.ee = o, ga.vc = p, ga.Q = r, ga.Sc = function() {
                return oa
            }, ga.oc = function() {
                return i(), ra
            }, ga.$Delay = A, ga.yd = E, ga.hb = function(a) {
                return ga.cd(a) && (a = b.getElementById(a)), a
            }, ga.Xc = F, ga.Ac = function(a) {
                return a = F(a), a.target || a.srcElement || b
            }, ga.Yc = function(a) {
                return a = F(a), {
                    x: a.pageX || a.clientX || 0,
                    y: a.pageY || a.clientY || 0
                }
            }, ga.me = function(a, b) {
                q() ? A(ga.F(d, L, a, b)) : L(a, b)
            }, ga.le = function(a, b) {
                var c = s(a);
                c && (a.style[c + "Origin"] = b)
            }, ga.oe = function(a, b) {
                if (j() && 9 > pa || 10 > pa && m()) a.style.zoom = 1 == b ? "" : b;
                else {
                    var c = s(a);
                    if (c) {
                        var d = "scale(" + b + ")",
                            e = a.style[c],
                            f = new RegExp(/[\s]*scale\(.*?\)/g),
                            g = B(e, [f], d);
                        a.style[c] = g
                    }
                }
            }, ga.ne = function(a) {
                a.style[s(a)] && "none" != a.style[s(a)] || (a.style[s(a)] = "perspective(2000px)")
            }, ga.Rb = function(a, b) {
                return function(c) {
                    c = F(c);
                    var d = c.type,
                        e = c.relatedTarget || ("mouseout" == d ? c.toElement : c.fromElement);
                    (!e || e !== b && !ga.nf(b, e)) && a(c)
                }
            }, ga.c = function(a, b, c, d) {
                a = ga.hb(a), a.addEventListener ? ("mousewheel" == b && a.addEventListener("DOMMouseScroll", c, d), a.addEventListener(b, c, d)) : a.attachEvent && (a.attachEvent("on" + b, c), d && a.setCapture && a.setCapture())
            }, ga.I = function(a, b, c, d) {
                a = ga.hb(a), a.removeEventListener ? ("mousewheel" == b && a.removeEventListener("DOMMouseScroll", c, d), a.removeEventListener(b, c, d)) : a.detachEvent && (a.detachEvent("on" + b, c), d && a.releaseCapture && a.releaseCapture())
            }, ga.Fb = function(a) {
                a = F(a), a.preventDefault && a.preventDefault(), a.cancel = e, a.returnValue = f
            }, ga.af = function(a) {
                a = F(a), a.stopPropagation && a.stopPropagation(), a.cancelBubble = e
            }, ga.F = function(a, b) {
                var c = [].slice.call(arguments, 2),
                    d = function() {
                        var d = c.concat([].slice.call(arguments, 0));
                        return b.apply(a, d)
                    };
                return d
            }, ga.gf = function(a, c) {
                if (c == g) return a.textContent || a.innerText;
                var d = b.createTextNode(c);
                ga.jc(a), a.appendChild(d)
            }, ga.V = function(a, b) {
                for (var c = [], d = a.firstChild; d; d = d.nextSibling)(b || 1 == d.nodeType) && c.push(d);
                return c
            }, ga.C = M, ga.cf = O, ga.of = P, ga.mf = function(a, b) {
                return a.getElementsByTagName(b)
            }, ga.l = Q, ga.Nc = function(a) {
                return "function" == w(a)
            }, ga.mc = function(a) {
                return "array" == w(a)
            }, ga.cd = function(a) {
                return "string" == w(a)
            }, ga.Pc = function(a) {
                return !isNaN(va(a)) && isFinite(a)
            }, ga.e = v, ga.bb = function() {
                return S("DIV")
            }, ga.Qe = function() {
                return S("SPAN")
            }, ga.ac = function() {}, ga.M = T, ga.t = U, ga.Ec = V, ga.Oe = X, ga.tb = function(a) {
                return a.parentNode
            }, ga.K = function(a) {
                ga.N(a, "none")
            }, ga.A = function(a, b) {
                ga.N(a, b ? "none" : "")
            }, ga.Kc = function(a, b) {
                a.removeAttribute(b)
            }, ga.Se = function() {
                return j() && 10 > oa
            }, ga.Ve = function(a, b) {
                if (b) a.style.clip = "rect(" + c.round(b.$Top) + "px " + c.round(b.$Right) + "px " + c.round(b.$Bottom) + "px " + c.round(b.$Left) + "px)";
                else {
                    var d = a.style.cssText,
                        e = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                        f = B(d, e, "");
                    l.Vb(a, f)
                }
            }, ga.J = function() {
                return +new Date
            }, ga.D = function(a, b) {
                a.appendChild(b)
            }, ga.Wb = function(a, b, c) {
                (c || b.parentNode).insertBefore(a, b)
            }, ga.wb = function(a, b) {
                (b || a.parentNode).removeChild(a)
            }, ga.Ne = function(a, b) {
                v(a, function(a) {
                    ga.wb(a, b)
                })
            }, ga.jc = function(a) {
                ga.Ne(ga.V(a, e), a)
            }, ga.Me = function(a, b) {
                return parseInt(a, b || 10)
            };
            var va = parseFloat;
            ga.ec = va, ga.nf = function(a, c) {
                for (var d = b.body; c && a !== c && d !== c;) try {
                    c = c.parentNode
                } catch (e) {
                    return f
                }
                return a === c
            }, ga.O = _, ga.Ab = function(a, b) {
                function c(a, e) {
                    ga.I(f, "load", c), ga.I(f, "abort", d), ga.I(f, "error", d), b && b(f, e)
                }

                function d(a) {
                    c(a, e)
                }
                var f = new Image;
                p() && 11.6 > oa || !a ? c(!a) : (ga.c(f, "load", c), ga.c(f, "abort", d), ga.c(f, "error", d), f.src = a)
            }, ga.bf = function(a, b, c) {
                function d(a) {
                    e--, b && a && a.src == b.src && (b = a), !e && c && c(b)
                }
                var e = a.length + 1;
                v(a, function(a) {
                    ga.Ab(a.src, d)
                }), d()
            }, ga.Dc = function(a, b, c, d) {
                d && (a = _(a));
                var e = N(a, b);
                e.length || (e = l.mf(a, b));
                for (var f = e.length - 1; f > -1; f--) {
                    var g = e[f],
                        h = _(c);
                    V(h, V(g)), l.Vb(h, g.style.cssText), l.Wb(h, g), l.wb(g)
                }
                return a
            }, ga.Ub = function(a) {
                return new aa(a)
            }, ga.cb = G, ga.ab = I("overflow"), ga.B = I("top", 2), ga.z = I("left", 2), ga.o = I("width", 2), ga.n = I("height", 2), ga.Vc = I("marginLeft", 2), ga.Uc = I("marginTop", 2), ga.E = I("position"), ga.N = I("display"), ga.H = I("zIndex", 1), ga.rb = function(a, b, c) {
                return b == g ? J(a) : void K(a, b, c)
            }, ga.Vb = function(a, b) {
                return b == g ? a.style.cssText : void(a.style.cssText = b)
            };
            var wa, xa = {
                $Opacity: ga.rb,
                $Top: ga.B,
                $Left: ga.z,
                db: ga.o,
                eb: ga.n,
                xb: ga.E,
                yg: ga.N,
                $ZIndex: ga.H
            };
            ga.ce = ba, ga.Wd = ca, ga.Vd = function(a, b) {
                ba();
                var c = {};
                return v(b, function(b, d) {
                    xa[d] && (c[d] = xa[d](a))
                }), c
            }, ga.L = function(a, b) {
                var c = ba();
                v(b, function(b, d) {
                    c[d] && c[d](a, b)
                })
            }, ga.Ad = function(a, b) {
                ca(), ga.L(a, b)
            };
            var ya = new function() {
                function a(a, b) {
                    for (var c = a[0].length, d = a.length, e = b[0].length, f = [], g = 0; d > g; g++)
                        for (var h = f[g] = [], i = 0; e > i; i++) {
                            for (var j = 0, k = 0; c > k; k++) j += a[g][k] * b[k][i];
                            h[i] = j
                        }
                    return f
                }
                var b = this;
                b.Pb = function(b, c) {
                    var d = a(b, [
                        [c.x],
                        [c.y]
                    ]);
                    return z(d[0][0], d[1][0])
                }
            };
            ga.se = function(a, b, d) {
                var e = c.cos(a),
                    f = c.sin(a);
                return [
                    [e * b, -f * d],
                    [f * b, e * d]
                ]
            }, ga.re = function(a, b, d) {
                var e = ya.Pb(a, z(-b / 2, -d / 2)),
                    f = ya.Pb(a, z(b / 2, -d / 2)),
                    g = ya.Pb(a, z(b / 2, d / 2)),
                    h = ya.Pb(a, z(-b / 2, d / 2));
                return z(c.min(e.x, f.x, g.x, h.x) + b / 2, c.min(e.y, f.y, g.y, h.y) + d / 2)
            }, ga.td = function(a, b, e, f, g, h, i) {
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
                        var r, s = f[m] || f.Cb || k.$EaseSwing,
                            t = s(p),
                            u = a[m];
                        b[m];
                        var v = b[m];
                        l.Pc(v) ? r = u + v * t : (r = l.l({
                            Bb: {}
                        }, a[m]), l.e(v.Bb, function(a, b) {
                            var c = a * t;
                            r.Bb[b] = c, r[b] += c
                        })), j[m] = r
                    }(b.$Zoom || b.$Rotate) && (j.kc = {
                        $Rotate: j.$Rotate || 0,
                        $Scale: j.$Zoom,
                        $OriginalWidth: i.$OriginalWidth,
                        $OriginalHeight: i.$OriginalHeight
                    })
                }
                if (b.$Clip && i.$Move) {
                    var w = j.$Clip.Bb,
                        x = (w.$Top || 0) + (w.$Bottom || 0),
                        y = (w.$Left || 0) + (w.$Right || 0);
                    j.$Left = (j.$Left || 0) + y, j.$Top = (j.$Top || 0) + x, j.$Clip.$Left -= y, j.$Clip.$Right -= y, j.$Clip.$Top -= x, j.$Clip.$Bottom -= x
                }
                return j.$Clip && l.Se() && !j.$Clip.$Top && !j.$Clip.$Left && j.$Clip.$Right == i.$OriginalWidth && j.$Clip.$Bottom == i.$OriginalHeight && (j.$Clip = d), j
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
                for (var b, c = a.$Cols, e = a.$Rows, f = a.$Assembly, g = a.Kb, h = [], i = 0, j = 0, k = c - 1, l = e - 1, m = g - 1, j = 0; e > j; j++)
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
                    m = a.Kb,
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
                    l = a.Kb,
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
                    h = c.Kb,
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
                Hb: [],
                $During: {}
            };
            return l.l(d, a), d.Kb = d.$Cols * d.$Rows, l.Nc(d.$Easing) && (d.$Easing = {
                Cb: d.$Easing
            }), d.Od = c.ceil(d.$Duration / d.$Interval), d.Rd = function(a, b) {
                a /= d.$Cols, b /= d.$Rows;
                var c = a + "x" + b;
                if (!d.Hb[c]) {
                    d.Hb[c] = {
                        db: a,
                        eb: b
                    };
                    for (var e = 0; e < d.$Cols; e++)
                        for (var f = 0; f < d.$Rows; f++) d.Hb[c][f + "," + e] = {
                            $Top: f * b,
                            $Right: e * a + a,
                            $Bottom: f * b + b,
                            $Left: e * a
                        }
                }
                return d.Hb[c]
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
                w = d.Rd(h, i),
                x = j(d),
                y = x.length - 1,
                z = d.$Duration + d.$Delay * y,
                A = g + z,
                B = d.$SlideOut;
            if (A += 50, q.Mc = A, q.Ob = function(a) {
                    a -= g;
                    var b = z > a;
                    if (b || p) {
                        p = b, B || (a = z - a);
                        var e = c.ceil(a / d.$Interval);
                        l.e(s, function(a, b) {
                            var d = c.max(e, a.Cd);
                            d = c.min(d, a.length - 1), a.sd != d && (a.sd || B ? d == a.zd && B && l.K(t[b]) : l.A(t[b]), a.sd = d, l.Ad(t[b], a[d]))
                        })
                    }
                }, b = l.O(b), l.Q()) {
                var C = !b["no-image"],
                    D = l.of(b);
                l.e(D, function(a) {
                    (C || a["jssor-slider"]) && l.rb(a, l.rb(a), e)
                })
            }
            l.e(x, function(a, b) {
                l.e(a, function(a) {
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
                        db: h,
                        eb: i
                    }, m = l.l({}, n), k = l.l({}, w[p]), d.$Opacity && (n.$Opacity = 2 - d.$Opacity), d.$ZIndex && (n.$ZIndex = d.$ZIndex, m.$ZIndex = 0);
                    var D = d.$Cols * d.$Rows > 1 || d.$Clip;
                    if (d.$Zoom || d.$Rotate) {
                        var E = e;
                        if (l.Q() && (d.$Cols * d.$Rows > 1 ? E = f : D = f), E) {
                            n.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1, m.$Zoom = 1, (l.Q() || l.vc()) && (n.$Zoom = c.min(n.$Zoom, 2));
                            var F = d.$Rotate;
                            n.$Rotate = 360 * F * (x ? -1 : 1), m.$Rotate = 0
                        }
                    }
                    if (D) {
                        if (d.$Clip) {
                            var G = d.$ScaleClip || 1,
                                H = k.Bb = {};
                            y && z ? (H.$Top = w.eb / 2 * G, H.$Bottom = -H.$Top) : y ? H.$Bottom = -w.eb * G : z && (H.$Top = w.eb * G), A && C ? (H.$Left = w.db / 2 * G, H.$Right = -H.$Left) : A ? H.$Right = -w.db * G : C && (H.$Left = w.db * G)
                        }
                        o.$Clip = k, m.$Clip = w[p]
                    }
                    var I = q ? 1 : -1,
                        J = t ? 1 : -1;
                    d.x && (n.$Left += h * d.x * I), d.y && (n.$Top += i * d.y * J), l.e(n, function(a, b) {
                        l.Pc(a) && a != m[b] && (o[b] = a - m[b])
                    }), r[p] = B ? m : n;
                    var K = d.Od,
                        L = c.round(b * d.$Delay / d.$Interval);
                    s[p] = new Array(L), s[p].Cd = L, s[p].zd = L + K - 1;
                    for (var M = 0; K >= M; M++) {
                        var N = l.td(m, o, M / K, d.$Easing, d.$During, d.$Round, {
                            $Move: d.$Move,
                            $OriginalWidth: h,
                            $OriginalHeight: i
                        });
                        N.$ZIndex = N.$ZIndex || 1, s[p].push(N)
                    }
                })
            }), x.reverse(), l.e(x, function(c) {
                l.e(c, function(c) {
                    var d = c[0],
                        e = c[1],
                        f = d + "," + e,
                        g = b;
                    (e || d) && (g = l.O(b)), l.L(g, r[f]), l.ab(g, "hidden"), l.E(g, "absolute"), a.Zd(g), t[f] = g, l.A(g, !B)
                })
            })
        }

        function q() {
            var a = this,
                b = 0;
            i.call(a, 0, r), a.Gb = function(a, c) {
                c - b > y && (b = c, t && t.Ob(c), s && s.Ob(c))
            }, a.nb = u
        }
        var r, s, t, u, v = this,
            w = 0,
            x = j.$TransitionsOrder,
            y = 8;
        v.Hd = function() {
            var a = 0,
                b = j.$Transitions,
                d = b.length;
            return a = x ? w++ % d : c.floor(c.random() * d), b[a] && (b[a].Z = a), b[a]
        }, v.Dd = function(d, e, f, h, i) {
            u = i, i = o(i, y);
            var j = h.id,
                k = f.id;
            j["no-image"] = !h.Tb, k["no-image"] = !f.Tb;
            var l = j,
                m = k,
                n = i,
                q = i.$Brother || o({}, y);
            i.$SlideOut || (l = k, m = j);
            var w = q.$Shift || 0;
            s = new p(a, m, q, c.max(w - q.$Interval, 0), b, g), t = new p(a, l, n, c.max(q.$Interval - w, 0), b, g), s.Ob(0), t.Ob(0), r = c.max(s.Mc, t.Mc), v.Z = d
        }, v.Db = function() {
            a.Db(), s = d, t = d
        }, v.Jd = function() {
            var a = d;
            return t && (a = new q), a
        }, (l.Q() || l.vc() || n && l.oc() < 537) && (y = 16), h.call(v), i.call(v, -1e7, 1e7)
    };
    var n = a.$JssorSlider$ = function(m, p) {
        function q() {
            var a = this;
            i.call(a, -1e8, 2e8), a.Td = function() {
                var b = a.Eb(),
                    d = c.floor(b),
                    e = N(d),
                    f = b - c.floor(b);
                return {
                    Z: e,
                    Md: d,
                    xb: f
                }
            }, a.Gb = function(a, b) {
                var d = c.floor(b);
                d != b && b > a && d++, J(d, e), Y.i(n.$EVT_POSITION_CHANGE, N(b), N(a), b, a)
            }
        }

        function r() {
            var a = this;
            i.call(a, 0, 0, {
                ed: Va
            }), l.e(sb, function(b) {
                1 & gb && b.Fd(Va), a.nc(b), b.$Shift(Ga / _a)
            })
        }

        function s() {
            var a = this,
                b = kb.$Elmt;
            i.call(a, -1, 2, {
                $Easing: k.$EaseLinear,
                wc: {
                    xb: x
                },
                ed: Va
            }, b, {
                xb: 1
            }, {
                xb: -2
            }), a.Nb = b
        }

        function t(a, b) {
            var c, g, h, j, k, l = this;
            i.call(l, -1e8, 2e8, {
                md: 100
            }), l.ld = function() {
                Ja = e, La = d, Y.i(n.$EVT_SWIPE_START, N(Qa.T()), Qa.T())
            }, l.kd = function() {
                Ja = f, j = f;
                var a = Qa.Td();
                Y.i(n.$EVT_SWIPE_END, N(Qa.T()), Qa.T()), !a.xb && I(a.Md, Ua)
            }, l.Gb = function(a, b) {
                var d;
                if (j) d = k;
                else if (d = g, h) {
                    var e = b / h;
                    d = Z.$SlideEasing(e) * (g - c) + c
                }
                Qa.v(d)
            }, l.Qb = function(a, b, d, e) {
                c = a, g = b, h = d, Qa.v(a), l.v(0), l.fd(d, e)
            }, l.Nd = function(a) {
                j = e, k = a, l.$Play(a, d, e)
            }, l.Sd = function(a) {
                k = a
            }, Qa = new q, Qa.X(a), Qa.X(b)
        }

        function u() {
            var a = this,
                b = M();
            l.H(b, 0), l.cb(b, "pointerEvents", "none"), a.$Elmt = b, a.Zd = function(a) {
                l.D(b, a), l.A(b)
            }, a.Db = function() {
                l.K(b), l.jc(b)
            }
        }

        function v(a, b) {
            function g(b) {
                y && y.Sb(), v && v.Sb(), u(a, b), H = e, v = new da.$Class(a, da, 1), y = new da.$Class(a, da), y.v(0), v.v(0)
            }

            function j() {
                v.Zb < da.Zb && g()
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
                        l.o(B, i), l.n(B, j), l.B(B, (Xa - j) / 2), l.z(B, (Wa - i) / 2)
                    }
                    l.E(B, "absolute"), Y.i(n.$EVT_LOAD_END, b)
                }
                l.K(c), a && a(L)
            }

            function m(a, c, d, e) {
                if (e == La && Ua == b && Da && !Ca) {
                    var f = N(a);
                    lb.Dd(f, b, c, L, d), c.Xe(), Ra.Jb(f, 1), Ra.v(f), Sa.Qb(a, a, 0)
                }
            }

            function o(c) {
                if (c == La && Ua == b) {
                    if (!I) {
                        var e = d;
                        lb && (lb.Z == b ? e = lb.Jd() : lb.Db()), j(), I = new w(a, b, e, L.Te(), L.Le()), I.Jc(K)
                    }!I.$IsPlaying() && I.zc()
                }
            }

            function p(a, e, f) {
                if (a == b) {
                    a != e ? sb[e] && sb[e].Ue() : !f && I && I.Ye(), K && K.$Enable();
                    var g = La = l.J();
                    L.Ab(l.F(d, o, g))
                } else {
                    var h = c.abs(b - a),
                        i = ab + Z.$LazyLoading - 1;
                    (!G || i >= h) && L.Ab()
                }
            }

            function q() {
                Ua == b && I && (I.W(), K && K.$Quit(), K && K.$Disable(), I.Oc())
            }

            function r() {
                Ua == b && I && I.W()
            }

            function s(a) {
                !Ia && Y.i(n.$EVT_CLICK, b, a)
            }

            function t() {
                K = J.pInstance, I && I.Jc(K)
            }

            function u(a, b, c) {
                if (!l.M(a, "jssor-slider")) {
                    c = c || 0, H || ("IMG" == a.tagName && (M.push(a), l.M(a, "src") || (G = e, a["display-origin"] = l.N(a), l.K(a))), l.Q() && l.H(a, (l.H(a) || 0) + 1), Z.$HWA && l.oc() && (l.oc() < 534 || !Fa && !l.ee()) && l.ne(a));
                    var d = l.V(a);
                    l.e(d, function(d) {
                        var g = d.tagName,
                            h = l.t(d, "u");
                        if ("player" != h || J || (J = d, J.pInstance ? t() : l.c(J, "dataavailable", t)), "caption" == h) {
                            if (!l.Wc() && !b) {
                                var i = l.O(d, f, e);
                                l.Wb(i, d, a), l.wb(d, a), d = i, b = e
                            }
                        } else H || c || B || ("A" == g ? (B = "image" == l.t(d, "u") ? l.cf(d, "IMG") : l.C(d, "image", e), B && (C = d, l.L(C, _), D = l.O(C, e), l.N(D, "block"), l.L(D, _), l.rb(D, 0), l.cb(D, "backgroundColor", "#000"))) : "IMG" == g && "image" == l.t(d, "u") && (B = d), B && (B.border = 0, l.L(B, _)));
                        u(d, b, c + 1)
                    })
                }
            }
            var v, y, z, A, B, C, D, E, F, G, H, I, J, K, L = this,
                M = [];
            i.call(L, -ab, ab + 1, {}), L.Ab = function(a, c) {
                c = c || A, M.length && !F ? (l.A(c), E || (E = e, Y.i(n.$EVT_LOAD_START, b), l.e(M, function(a) {
                    l.M(a, "src") || (a.src = l.t(a, "src2"), l.N(a, a["display-origin"]))
                })), l.bf(M, B, l.F(d, k, a, c))) : k(a, c)
            }, L.df = function() {
                var a = b;
                Z.$AutoPlaySteps < 0 && (a -= Va);
                var e = a + Z.$AutoPlaySteps * ba;
                if (2 & gb && (e = N(e)), 1 & gb || (e = c.max(0, c.min(e, Va - ab))), e != b) {
                    if (lb) {
                        var f = lb.Hd(Va);
                        if (f) {
                            var g = La = l.J(),
                                h = sb[N(e)];
                            return h.Ab(l.F(d, m, e, h, f, g), A)
                        }
                    }
                    U(e)
                }
            }, L.bc = function() {
                p(b, b, e)
            }, L.Ue = function() {
                K && K.$Quit(), K && K.$Disable(), L.rd(), I && I.ff(), I = d, g()
            }, L.Xe = function() {
                l.K(a)
            }, L.rd = function() {
                l.A(a)
            }, L.ef = function() {
                K && K.$Enable()
            }, L.rc = function(a, b) {
                var c = ab - b;
                x(z, c)
            }, L.Te = function() {
                return v
            }, L.Le = function() {
                return y
            }, L.Z = b, h.call(L);
            var O = l.C(a, "thumb", e);
            O && (L.hf = l.O(O), l.Kc(O, "id"), l.K(O)), l.A(a), A = l.O(ja), l.H(A, 1e3), l.c(a, "click", s), g(e), L.Tb = B, L.qd = D, L.id = a, L.Nb = z = a, l.D(z, A), Y.$On(203, p), Y.$On(28, r), Y.$On(24, q);

        }

        function w(a, b, c, d, g) {
            function h() {
                l.jc(mb), Ba && r && y.qd && l.D(mb, y.qd), l.A(mb, !r && y.Tb)
            }

            function j() {
                s && (s = f, Y.i(n.$EVT_ROLLBACK_END, b, p, w, o, p, q), v.v(o)), v.zc()
            }

            function k(a) {
                u = a, v.W(), v.zc()
            }
            var m, o, p, q, r, s, t, u, v = this,
                w = 0,
                x = 0,
                y = sb[b];
            i.call(v, 0, 0), v.zc = function() {
                var a = v.Eb();
                if (!Ka && !Ja && !u && Ua == b) {
                    a || (m && !r && (r = e, v.Oc(e), Y.i(n.$EVT_SLIDESHOW_START, b, w, x, m, q)), h());
                    var c, d = n.$EVT_STATE_CHANGE;
                    a != q && (a == p ? c = q : a == o ? c = p : a ? a > p ? (s = e, c = p, d = n.$EVT_ROLLBACK_START) : c = v.jd() : c = o), Y.i(d, b, a, w, o, p, q);
                    var f = Da && (!cb || hb);
                    a == q ? (p != q && !(12 & cb) || f) && y.df() : (f || a != p) && v.fd(c, j)
                }
            }, v.Ye = function() {
                p == q && p == v.Eb() && v.v(o)
            }, v.ff = function() {
                lb && lb.Z == b && lb.Db();
                var a = v.Eb();
                q > a && Y.i(n.$EVT_STATE_CHANGE, b, -a - 1, w, o, p, q)
            }, v.Oc = function(a) {
                c && l.ab(ua, a && c.nb.$Outside ? "" : "hidden")
            }, v.rc = function(a, c) {
                r && c >= m && (r = f, h(), y.rd(), lb.Db(), Y.i(n.$EVT_SLIDESHOW_END, b, w, x, m, q)), Y.i(n.$EVT_PROGRESS_CHANGE, b, c, w, o, p, q)
            }, v.Jc = function(a) {
                a && !t && (t = a, a.$On($JssorPlayer$.be, k))
            }, c && v.nc(c), m = v.Y(), v.Y(), v.nc(d), o = d.Y(), p = o + (l.ec(l.t(a, "idle")) || db), g.$Shift(p), v.X(g), q = v.Y()
        }

        function x(a, b) {
            var d = va > 0 ? va : aa,
                e = Za * b * (1 & d),
                f = $a * b * (d >> 1 & 1);
            e = c.round(e), f = c.round(f), l.z(a, e), l.B(a, f)
        }

        function y() {
            ob = Ja, pb = Sa.jd(), nb = Qa.T()
        }

        function z() {
            y(), (Ka || !hb && 12 & cb) && (Sa.W(), Y.i(n.de))
        }

        function A(a) {
            if (!(Ka || !hb && 12 & cb || Sa.$IsPlaying())) {
                var b = Qa.T(),
                    d = c.ceil(nb);
                a && c.abs(Ma) >= Z.$MinDragOffsetToSlide && (d = c.ceil(b), d += Oa), 1 & gb || (d = c.min(Va - ab, c.max(d, 0)));
                var e = c.abs(d - b);
                e = 1 - c.pow(1 - e, 5), !Ia && ob ? Sa.Kd(pb) : b == d ? (ta.ef(), ta.bc()) : Sa.Qb(b, d, e * eb)
            }
        }

        function B(a) {
            !l.t(l.Ac(a), "nodrag") && l.Fb(a)
        }

        function C(a) {
            D(a, 1)
        }

        function D(a, c) {
            a = l.Xc(a);
            var g = l.Ac(a);
            if (!(wa || l.t(g, "nodrag") || !K() || c && 1 != a.touches.length)) {
                if (Ka = e, xa = f, La = d, l.c(b, c ? "touchmove" : "mousemove", E), l.J(), Ia = 0, z(), ob || (va = 0), c) {
                    var h = a.touches[0];
                    ib = h.clientX, jb = h.clientY
                } else {
                    var i = l.Yc(a);
                    ib = i.x, jb = i.y
                }
                Ma = 0, Na = 0, Oa = 0, Y.i(n.$EVT_DRAG_START, N(nb), nb, a)
            }
        }

        function E(a) {
            if (Ka) {
                a = l.Xc(a);
                var b;
                if ("mousemove" != a.type) {
                    var d = a.touches[0];
                    b = {
                        x: d.clientX,
                        y: d.clientY
                    }
                } else b = l.Yc(a);
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
                        } - 2 > Ma - Na ? Oa = 0 : Ma - Na > 2 && (Oa = -1), Na = Ma, Ma = h, qb = nb - Ma / i / (Ta || 1), Ma && va && !xa && (l.Fb(a), Ja ? Sa.Sd(qb) : Sa.Nd(qb))
                    }
                }
            }
        }

        function F() {
            if (L(), Ka) {
                Ka = f, l.J(), l.I(b, "mousemove", E), l.I(b, "touchmove", E), Ia = Ma, Sa.W();
                var a = Qa.T();
                Y.i(n.$EVT_DRAG_END, N(a), a, N(nb), nb), 12 & cb && y(), A(e)
            }
        }

        function G(a) {
            if (Ia) {
                l.af(a);
                for (var b = l.Ac(a); b && ia !== b;) {
                    "A" == b.tagName && l.Fb(a);
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
            va = 0, H(a), Y.i(n.$EVT_PARK, N(a), b)
        }

        function J(a, b) {
            sa = a, l.e(bb, function(c) {
                c.qc(N(a), a, b)
            })
        }

        function K() {
            var a = n.pd || 0,
                b = Ha;
            return ub && 1 & b && (b &= 1), n.pd |= b, wa = b & ~a
        }

        function L() {
            wa && (n.pd &= ~Ha, wa = 0)
        }

        function M() {
            var a = l.bb();
            return l.L(a, _), l.E(a, "absolute"), a
        }

        function N(a) {
            return (a % Va + Va) % Va
        }

        function O(a, b) {
            var d = a;
            b ? gb ? 2 & gb && (d = N(d + sa), b = f) : (d = c.min(c.max(d + sa, 0), Va - ab), b = f) : gb && (d = Y.od(d)), U(d, Z.$SlideDuration, b)
        }

        function P() {
            l.e(bb, function(a) {
                a.Bc(a.Xb.$ChanceToShow <= hb)
            })
        }

        function Q() {
            hb || (hb = 1, P(), Ka || (12 & cb && A(), 3 & cb && sb[Ua].bc()))
        }

        function R() {
            hb && (hb = 0, P(), Ka || !(12 & cb) || z())
        }

        function S() {
            _ = {
                db: Wa,
                eb: Xa,
                $Top: 0,
                $Left: 0
            }, l.e(qa, function(a) {
                l.L(a, _), l.E(a, "absolute"), l.ab(a, "hidden"), l.K(a)
            }), l.L(ja, _)
        }

        function T(a, b) {
            U(a, b, e)
        }

        function U(a, b, d) {
            if (fb && (!Ka && (hb || !(12 & cb)) || Z.$NaviQuitDrag)) {
                Ja = e, Ka = f, Sa.W(), b == g && (b = eb);
                var h = Pa.Eb(),
                    i = a;
                d && (i = h + a, i = a > 0 ? c.ceil(i) : c.floor(i)), 2 & gb && (i = N(i)), 1 & gb || (i = c.max(0, c.min(i, Va - ab)));
                var j = (i - h) % Va;
                i = h + j;
                var k = h == i ? 0 : b * c.abs(j);
                k = c.min(k, b * ab * 1.5), Sa.Qb(h, i, k || 1)
            }
        }

        function V() {
            return l.o($ || m)
        }

        function W() {
            return l.n($ || m)
        }

        function X(a, c) {
            if (a == g) return l.o(m);
            if (!$) {
                var d = l.bb(b);
                l.Ec(d, l.Ec(m)), l.Vb(d, l.Vb(m)), l.N(d, "block"), l.E(d, "relative"), l.B(d, 0), l.z(d, 0), l.ab(d, "visible"), $ = l.bb(b), l.E($, "absolute"), l.B($, 0), l.z($, 0), l.o($, l.o(m)), l.n($, l.n(m)), l.le($, "0 0"), l.D($, d);
                var e = l.V(m);
                l.D(m, $), l.cb(m, "backgroundImage", ""), l.e(e, function(a) {
                    l.D(l.t(a, "noscale") ? m : d, a)
                })
            }
            Ta = a / (c ? l.n : l.o)($), l.oe($, Ta);
            var f = c ? Ta * V() : a,
                h = c ? a : Ta * W();
            l.o(m, f), l.n(m, h), l.e(bb, function(a) {
                a.hc(f, h)
            })
        }
        var Y = this;
        Y.$PlayTo = U, Y.$GoTo = function(a) {
            Qa.v(a)
        }, Y.$Next = function() {
            T(1)
        }, Y.$Prev = function() {
            T(-1)
        }, Y.$Pause = function() {
            Da = f
        }, Y.$Play = function() {
            Da || (Da = e, sb[Ua] && sb[Ua].bc())
        }, Y.$SetSlideshowTransitions = function(a) {
            Z.$SlideshowOptions.$Transitions = a
        }, Y.$SetCaptionTransitions = function(a) {
            da.$CaptionTransitions = a, da.Zb = l.J()
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
            return a == g ? l.n(m) : void X(a, e)
        }, Y.$ScaleWidth = Y.$SetScaleWidth = Y.$GetScaleWidth = X, Y.od = function(a) {
            var b = c.ceil(N(Ga / _a)),
                d = N(a - sa + b);
            return d > ab ? a - sa > Va / 2 ? a -= Va : -Va / 2 >= a - sa && (a += Va) : a = sa + d - b, a
        }, h.call(Y), Y.$Elmt = m = l.hb(m);
        var Z = l.l({
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
            $SlideDuration: 2e3,
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
            da = l.l({
                $Class: j,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, Z.$CaptionSliderOptions),
            ea = Z.$BulletNavigatorOptions,
            fa = Z.$ArrowNavigatorOptions,
            ga = Z.$ThumbnailNavigatorOptions,
            ha = !Z.$UISearchMode,
            ia = l.C(m, "slides", ha),
            ja = l.C(m, "loading", ha) || l.bb(b),
            ka = l.C(m, "navigator", ha),
            la = l.C(m, "arrowleft", ha),
            ma = l.C(m, "arrowright", ha),
            na = l.C(m, "thumbnavigator", ha),
            oa = l.o(ia),
            pa = l.n(ia),
            qa = [],
            ra = l.V(ia);
        l.e(ra, function(a) {
            "DIV" != a.tagName || l.t(a, "u") ? l.Q() && l.H(a, (l.H(a) || 0) + 1) : qa.push(a)
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
        Da = Z.$AutoPlay, Y.Xb = p, S(), l.M(m, "jssor-slider", e), l.H(ia, l.H(ia) || 0), l.E(ia, "absolute"), ua = l.O(ia, e), l.Wb(ua, ia), ca && (Ba = ca.$ShowLink, Ea = ca.$Class, Fa = 1 == ab && Va > 1 && Ea && (!l.Wc() || l.Sc() >= 8)), Ga = Fa || ab >= Va || !(1 & gb) ? 0 : Z.$ParkingPosition, Ha = (ab > 1 || Ga ? aa : -1) & Z.$DragOrientation;
        var lb, mb, nb, ob, pb, qb, rb = ia,
            sb = [],
            tb = l.he(),
            ub = tb.ie;
        tb.dd && l.cb(rb, tb.dd, [d, "pan-y", "pan-x", "none"][Ha] || ""), Ra = new s, Fa && (lb = new Ea(kb, Wa, Xa, ca, ub)), l.D(ua, Ra.Nb), l.ab(ia, "hidden"), mb = M(), l.cb(mb, "backgroundColor", "#000"), l.rb(mb, 0), l.Wb(mb, rb.firstChild, rb);
        for (var vb = 0; vb < qa.length; vb++) {
            var wb = qa[vb],
                xb = new v(wb, vb);
            sb.push(xb)
        }
        l.K(ja), Pa = new r, Sa = new t(Pa, Ra), Ha && (l.c(ia, "mousedown", D), l.c(ia, "touchstart", C), l.c(ia, "dragstart", B), l.c(ia, "selectstart", B), l.c(b, "mouseup", F), l.c(b, "touchend", F), l.c(b, "touchcancel", F), l.c(a, "blur", F)), cb &= ub ? 10 : 5, ka && ea && (ya = new ea.$Class(ka, ea, V(), W()), bb.push(ya)), fa && la && ma && (fa.$Loop = gb, fa.$DisplayPieces = ab, za = new fa.$Class(la, ma, fa, V(), W()), bb.push(za)), na && ga && (ga.$StartIndex = Z.$StartIndex, Aa = new ga.$Class(na, ga), bb.push(Aa)), l.e(bb, function(a) {
            a.gc(Va, sb, ja), a.$On(o.Mb, O)
        }), X(V()), l.c(ia, "click", G), l.c(m, "mouseout", l.Rb(Q, m)), l.c(m, "mouseover", l.Rb(R, m)), P(), Z.$ArrowKeyNavigation && l.c(b, "keydown", function(a) {
            37 == a.keyCode ? T(-1) : 39 == a.keyCode && T(1)
        });
        var yb = Z.$StartIndex;
        1 & gb || (yb = c.max(0, c.min(yb, Va - ab))), Sa.Qb(yb, yb, 0)
    };
    a.$JssorSlideo$ = n, n.$EVT_CLICK = 21, n.$EVT_DRAG_START = 22, n.$EVT_DRAG_END = 23, n.$EVT_SWIPE_START = 24, n.$EVT_SWIPE_END = 25, n.$EVT_LOAD_START = 26, n.$EVT_LOAD_END = 27, n.de = 28, n.$EVT_POSITION_CHANGE = 202, n.$EVT_PARK = 203, n.$EVT_SLIDESHOW_START = 206, n.$EVT_SLIDESHOW_END = 207, n.$EVT_PROGRESS_CHANGE = 208, n.$EVT_STATE_CHANGE = 209, n.$EVT_ROLLBACK_START = 210, n.$EVT_ROLLBACK_END = 211;
    var o = {
        Mb: 1
    };
    a.$JssorBulletNavigator$ = function(a, b) {
        function g(a) {
            -1 != a && B[a].Ic(a == z)
        }

        function i(a) {
            j.i(o.Mb, a * r)
        }
        var j = this;
        h.call(j), a = l.hb(a);
        var k, m, n, p, q, r, s, t, u, v, w, x, y, z = 0,
            A = [],
            B = [];
        j.$Elmt = a, j.qc = function(a) {
            if (a != p) {
                var b = z,
                    d = c.floor(a / r);
                z = d, p = a, g(b), g(d)
            }
        }, j.Bc = function(b) {
            l.A(a, b)
        };
        var C;
        j.hc = function(b, c) {
            if (!C || q.$Scale == f) {
                var b = l.tb(a).clientWidth,
                    c = l.tb(a).clientHeight;
                1 & q.$AutoCenter && l.z(a, (b - m) / 2), 2 & q.$AutoCenter && l.B(a, (c - n) / 2), C = e
            }
        };
        var D;
        j.gc = function(b) {
            if (!D) {
                k = c.ceil(b / r), z = 0;
                var f = x + t,
                    g = y + u,
                    h = c.ceil(k / s) - 1;
                m = x + f * (v ? s - 1 : h), n = y + g * (v ? h : s - 1), l.o(a, m), l.n(a, n);
                for (var j = 0; k > j; j++) {
                    var o = l.Qe();
                    l.gf(o, j + 1);
                    var p = l.Dc(w, "numbertemplate", o, e);
                    l.E(p, "absolute");
                    var C = j % (h + 1);
                    l.z(p, v ? j % s * f : f * C), l.B(p, v ? g * C : c.floor(j / (h + 1)) * g), l.D(a, p), A[j] = p, 1 & q.$ActionMode && l.c(p, "click", l.F(d, i, j)), 2 & q.$ActionMode && l.c(p, "mouseover", l.Rb(l.F(d, i, j), p)), B[j] = l.Ub(p)
                }
                D = e
            }
        }, j.Xb = q = l.l({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, b), w = l.C(a, "prototype"), x = l.o(w), y = l.n(w), l.wb(w, a), r = q.$Steps || 1, s = q.$Lanes || 1, t = q.$SpacingX, u = q.$SpacingY, v = q.$Orientation - 1, q.$Scale == f && l.M(a, "noscale", e)
    }, a.$JssorArrowNavigator$ = function(a, b, c) {
        function g(a) {
            j.i(o.Mb, a, e)
        }

        function i(d) {
            l.A(a, d || !c.$Loop && 0 == n), l.A(b, d || !c.$Loop && n >= m - c.$DisplayPieces), k = d
        }
        var j = this;
        h.call(j);
        var k, m, n, p, q, r = l.o(a),
            s = l.n(a);
        j.qc = function(a, b, c) {
            c ? n = b : (n = a, i(k))
        }, j.Bc = i;
        var t;
        j.hc = function(c, d) {
            if (!t || p.$Scale == f) {
                var g = l.tb(a).clientWidth,
                    d = l.tb(a).clientHeight;
                1 & p.$AutoCenter && (l.z(a, (g - r) / 2), l.z(b, (g - r) / 2)), 2 & p.$AutoCenter && (l.B(a, (d - s) / 2), l.B(b, (d - s) / 2)), t = e
            }
        };
        var u;
        j.gc = function(c) {
            m = c, n = 0, u || (l.c(a, "click", l.F(d, g, -q)), l.c(b, "click", l.F(d, g, q)), l.Ub(a), l.Ub(b), u = e)
        }, j.Xb = p = l.l({
            $Steps: 1
        }, c), q = p.$Steps, p.$Scale == f && (l.M(a, "noscale", e), l.M(b, "noscale", e))
    }, a.$JssorThumbnailNavigator$ = function(a, b) {
        function i(a, b) {
            function c() {
                h.Ic(k == b)
            }

            function f(a) {
                (a || !x.$LastDragSucceded()) && A.i(o.Mb, b)
            }
            var g, h, i, j = this;
            j.Z = b, j.Hc = c, i = a.hf || a.Tb || l.bb(), j.Nb = g = l.Dc(z, "thumbnailtemplate", i, e), h = l.Ub(g), 1 & m.$ActionMode && l.c(g, "click", l.F(d, f, 0)), 2 & m.$ActionMode && l.c(g, "mouseover", l.Rb(l.F(d, f, 1), g))
        }
        var j, k, m, p, q, r, s, t, u, v, w, x, y, z, A = this,
            B = [];
        h.call(A), a = l.hb(a), A.qc = function(a, b, d) {
            var e = k;
            k = a, -1 != e && B[e].Hc(), B[a].Hc(), !d && x.$PlayTo(x.od(c.floor(b / r)))
        }, A.Bc = function(b) {
            l.A(a, b)
        }, A.hc = l.ac;
        var C;
        A.gc = function(b, d) {
            if (!C) {
                j = b, c.ceil(j / r), k = -1, w = c.min(w, d.length);
                var g = 1 & m.$Orientation,
                    h = u + (u + s) * (r - 1) * (1 - g),
                    o = v + (v + t) * (r - 1) * g,
                    z = h + (h + s) * (w - 1) * g,
                    A = o + (o + t) * (w - 1) * (1 - g);
                l.E(y, "absolute"), l.ab(y, "hidden"), 1 & m.$AutoCenter && l.z(y, (p - z) / 2), 2 & m.$AutoCenter && l.B(y, (q - A) / 2), l.o(y, z), l.n(y, A);
                var D = [];
                l.e(d, function(a, b) {
                    var d = new i(a, b),
                        e = d.Nb,
                        f = c.floor(b / r),
                        h = b % r;
                    l.z(e, (u + s) * h * (1 - g)), l.B(e, (v + t) * h * g), D[f] || (D[f] = l.bb(), l.D(y, D[f])), l.D(D[f], e), B.push(d)
                });
                var E = l.l({
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
        }, A.Xb = m = l.l({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, b), m.$Rows != g && (m.$Lanes = m.$Rows), p = l.o(a), q = l.n(a), y = l.C(a, "slides", e), z = l.C(y, "prototype"), u = l.o(z), v = l.n(z), l.wb(z, y), r = m.$Lanes || 1, s = m.$SpacingX, t = m.$SpacingY, w = m.$DisplayPieces, m.$Scale == f && l.M(a, "noscale", e)
    }, a.$JssorCaptionSlider$ = function(a, b, d) {
        function e(a, b) {
            function f(a, b) {
                var c = {};
                return l.e(o, function(d, e) {
                    var f = l.t(a, d + (b || ""));
                    if (f) {
                        var g = {};
                        "t" == d ? g.ob = f : f.indexOf("%") + 1 ? g.ze = l.ec(f) / 100 : g.ob = l.ec(f), c[e] = g
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
                    var d = n[l.Me(a)] || n[a];
                    l.mc(d) && (a != i ? (i = a, q[a] = 0, k[a] = d[c.floor(c.random() * d.length)]) : q[a]++, d = k[a], l.mc(d) && (d = d.length && d[q[a] % d.length], l.mc(d) && (d = d[c.floor(c.random() * d.length)]))), b = d, l.cd(b) && (b = h(b))
                }
                return b
            }
            var i, j = [],
                k = [],
                q = [],
                r = l.V(a);
            return l.e(r, function(a) {
                var c = [];
                c.$Elmt = a;
                var g = "caption" == l.t(a, "u");
                l.e(d ? [0, 3] : [2], function(d, i) {
                    if (g) {
                        var j, k;
                        if (2 == d && l.t(a, "t3") || (k = f(a, d), 2 != d || k.nb || (k.$Delay = k.$Delay || {
                                ob: 0
                            }, k = l.l(f(a, 0), k))), k && k.nb && (j = h(k.nb.ob))) {
                            var n = l.l({
                                $Delay: 0
                            }, j);
                            l.e(k, function(a, b) {
                                var c = (p[b] || p.Cb).apply(p, [n[b], k[b]]);
                                isNaN(c) || (n[b] = c)
                            }), i || (k.lb ? n.lb = k.lb.ob || 0 : 2 & m && (n.lb = 0))
                        }
                        c.push(n)
                    }
                    b % 2 && !i && (c.V = e(a, b + 1))
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
                h = l.tb(a),
                j = l.o(g),
                k = l.n(g),
                m = l.o(h),
                n = l.n(h),
                o = {},
                p = {},
                q = b.$ScaleClip || 1;
            if (b.$Opacity && (p.$Opacity = 1 - b.$Opacity), f.$OriginalWidth = j, f.$OriginalHeight = k, b.$Zoom || b.$Rotate) {
                p.$Zoom = (b.$Zoom || 2) - 2, (l.Q() || l.vc()) && (p.$Zoom = c.min(p.$Zoom, 1)), o.$Zoom = 1;
                var r = b.$Rotate || 0;
                p.$Rotate = 360 * r, o.$Rotate = 0
            } else if (b.$Clip) {
                var s = {
                        $Top: 0,
                        $Right: j,
                        $Bottom: k,
                        $Left: 0
                    },
                    t = l.l({}, s),
                    u = t.Bb = {},
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
            return o = l.l(o, l.Vd(g, p)), f.wc = l.Wd(), new i(b.$Delay, B, f, g, o, p)
        }

        function h(a, b) {
            return l.e(b, function(b) {
                var c, d = b.$Elmt,
                    e = b[0],
                    i = b[1];
                if (e && (c = f(d, e), a = c.Jb(e.lb == g ? a : e.lb, 1)), a = h(a, b.V), i) {
                    var l = f(d, i, 1);
                    l.Jb(a, 1), k.X(l), j.X(l)
                }
                c && k.X(c)
            }), a
        }
        var j, k = this,
            m = d ? b.$PlayInMode : b.$PlayOutMode,
            n = b.$CaptionTransitions,
            o = {
                nb: "t",
                $Delay: "d",
                $Duration: "du",
                x: "x",
                y: "y",
                $Rotate: "r",
                $Zoom: "z",
                $Opacity: "f",
                lb: "b"
            },
            p = {
                Cb: function(a, b) {
                    return isNaN(b.ob) ? a *= b.ze : a = b.ob, a
                },
                $Opacity: function(a, b) {
                    return this.Cb(a - 1, b)
                }
            };
        p.$Zoom = p.$Opacity, i.call(k, 0, 0), k.Sb = function() {
            k.v(k.Y() * (d || 0)), j.v(0)
        }, j = new i(0, 0), h(0, m ? e(a, 1) : [])
    }
}(window, document, Math, null, !0, !1);