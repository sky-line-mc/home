var e, t, n, r, i = !1,
    o = !1,
    a = [],
    s = -1;

function l(e) {
    ! function(e) {
        a.includes(e) || a.push(e);
        o || i || (i = !0, queueMicrotask(u))
    }(e)
}

function c(e) {
    let t = a.indexOf(e); - 1 !== t && t > s && a.splice(t, 1)
}

function u() {
    i = !1, o = !0;
    for (let e = 0; e < a.length; e++) a[e](), s = e;
    a.length = 0, s = -1, o = !1
}
var f = !0;

function d(e) {
    t = e
}
var _ = [],
    p = [],
    h = [];

function x(e, t) {
    "function" == typeof t ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, p.push(t))
}

function m(e, t) {
    e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach((([n, r]) => {
        (void 0 === t || t.includes(n)) && (r.forEach((e => e())), delete e._x_attributeCleanups[n])
    }))
}
var g = new MutationObserver(S),
    v = !1;

function y() {
    g.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }), v = !0
}

function b() {
    (w = w.concat(g.takeRecords())).length && !E && (E = !0, queueMicrotask((() => {
        S(w), w.length = 0, E = !1
    }))), g.disconnect(), v = !1
}
var w = [],
    E = !1;

function A(e) {
    if (!v) return e();
    b();
    let t = e();
    return y(), t
}
var O = !1,
    k = [];

function S(e) {
    if (O) return void(k = k.concat(e));
    let t = [],
        n = [],
        r = new Map,
        i = new Map;
    for (let o = 0; o < e.length; o++)
        if (!e[o].target._x_ignoreMutationObserver && ("childList" === e[o].type && (e[o].addedNodes.forEach((e => 1 === e.nodeType && t.push(e))), e[o].removedNodes.forEach((e => 1 === e.nodeType && n.push(e)))), "attributes" === e[o].type)) {
            let t = e[o].target,
                n = e[o].attributeName,
                a = e[o].oldValue,
                s = () => {
                    r.has(t) || r.set(t, []), r.get(t).push({
                        name: n,
                        value: t.getAttribute(n)
                    })
                },
                l = () => {
                    i.has(t) || i.set(t, []), i.get(t).push(n)
                };
            t.hasAttribute(n) && null === a ? s() : t.hasAttribute(n) ? (l(), s()) : l()
        }
    i.forEach(((e, t) => {
        m(t, e)
    })), r.forEach(((e, t) => {
        _.forEach((n => n(t, e)))
    }));
    for (let e of n)
        if (!t.includes(e) && (p.forEach((t => t(e))), e._x_cleanups))
            for (; e._x_cleanups.length;) e._x_cleanups.pop()();
    t.forEach((e => {
        e._x_ignoreSelf = !0, e._x_ignore = !0
    }));
    for (let e of t) n.includes(e) || e.isConnected && (delete e._x_ignoreSelf, delete e._x_ignore, h.forEach((t => t(e))), e._x_ignore = !0, e._x_ignoreSelf = !0);
    t.forEach((e => {
        delete e._x_ignoreSelf, delete e._x_ignore
    })), t = null, n = null, r = null, i = null
}

function C(e) {
    return N(j(e))
}

function $(e, t, n) {
    return e._x_dataStack = [t, ...j(n || e)], () => {
        e._x_dataStack = e._x_dataStack.filter((e => e !== t))
    }
}

function j(e) {
    return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? j(e.host) : e.parentNode ? j(e.parentNode) : []
}

function N(e) {
    let t = new Proxy({}, {
        ownKeys: () => Array.from(new Set(e.flatMap((e => Object.keys(e))))),
        has: (t, n) => e.some((e => e.hasOwnProperty(n))),
        get: (n, r) => (e.find((e => {
            if (e.hasOwnProperty(r)) {
                let n = Object.getOwnPropertyDescriptor(e, r);
                if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound) return !0;
                if ((n.get || n.set) && n.enumerable) {
                    let i = n.get,
                        o = n.set,
                        a = n;
                    i = i && i.bind(t), o = o && o.bind(t), i && (i._x_alreadyBound = !0), o && (o._x_alreadyBound = !0), Object.defineProperty(e, r, { ...a,
                        get: i,
                        set: o
                    })
                }
                return !0
            }
            return !1
        })) || {})[r],
        set: (t, n, r) => {
            let i = e.find((e => e.hasOwnProperty(n)));
            return i ? i[n] = r : e[e.length - 1][n] = r, !0
        }
    });
    return t
}

function M(e) {
    let t = (n, r = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach((([i, {
            value: o,
            enumerable: a
        }]) => {
            if (!1 === a || void 0 === o) return;
            let s = "" === r ? i : `${r}.${i}`;
            var l;
            "object" == typeof o && null !== o && o._x_interceptor ? n[i] = o.initialize(e, s, i) : "object" != typeof(l = o) || Array.isArray(l) || null === l || o === n || o instanceof Element || t(o, s)
        }))
    };
    return t(e)
}

function P(e, t = (() => {})) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(t, n, r) {
            return e(this.initialValue, (() => function(e, t) {
                return t.split(".").reduce(((e, t) => e[t]), e)
            }(t, n)), (e => L(t, n, e)), n, r)
        }
    };
    return t(n), e => {
        if ("object" == typeof e && null !== e && e._x_interceptor) {
            let t = n.initialize.bind(n);
            n.initialize = (r, i, o) => {
                let a = e.initialize(r, i, o);
                return n.initialValue = a, t(r, i, o)
            }
        } else n.initialValue = e;
        return n
    }
}

function L(e, t, n) {
    if ("string" == typeof t && (t = t.split(".")), 1 !== t.length) {
        if (0 === t.length) throw error;
        return e[t[0]] || (e[t[0]] = {}), L(e[t[0]], t.slice(1), n)
    }
    e[t[0]] = n
}
var T = {};

function R(e, t) {
    T[e] = t
}

function B(e, t) {
    return Object.entries(T).forEach((([n, r]) => {
        let i = null;
        Object.defineProperty(e, `$${n}`, {
            get: () => r(t, function() {
                if (i) return i; {
                    let [e, n] = re(t);
                    return i = {
                        interceptor: P,
                        ...e
                    }, x(t, n), i
                }
            }()),
            enumerable: !1
        })
    })), e
}

function I(e, t, n, ...r) {
    try {
        return n(...r)
    } catch (n) {
        z(n, e, t)
    }
}

function z(e, t, n = undefined) {
    Object.assign(e, {
        el: t,
        expression: n
    }), console.warn(`Alpine Expression Error: ${e.message}\n\n${n?'Expression: "'+n+'"\n\n':""}`, t), setTimeout((() => {
        throw e
    }), 0)
}
var D = !0;

function F(e) {
    let t = D;
    D = !1;
    let n = e();
    return D = t, n
}

function q(e, t, n = {}) {
    let r;
    return W(e, t)((e => r = e), n), r
}

function W(...e) {
    return V(...e)
}
var V = K;

function K(e, t) {
    let n = {};
    B(n, e);
    let r = [n, ...j(e)],
        i = "function" == typeof t ? function(e, t) {
            return (n = (() => {}), {
                scope: r = {},
                params: i = []
            } = {}) => {
                H(n, t.apply(N([r, ...e]), i))
            }
        }(r, t) : function(e, t, n) {
            let r = function(e, t) {
                if (U[e]) return U[e];
                let n = Object.getPrototypeOf((async function() {})).constructor,
                    r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(async()=>{ ${e} })()` : e;
                const i = () => {
                    try {
                        return new n(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)
                    } catch (n) {
                        return z(n, t, e), Promise.resolve()
                    }
                };
                let o = i();
                return U[e] = o, o
            }(t, n);
            return (i = (() => {}), {
                scope: o = {},
                params: a = []
            } = {}) => {
                r.result = void 0, r.finished = !1;
                let s = N([o, ...e]);
                if ("function" == typeof r) {
                    let e = r(r, s).catch((e => z(e, n, t)));
                    r.finished ? (H(i, r.result, s, a, n), r.result = void 0) : e.then((e => {
                        H(i, e, s, a, n)
                    })).catch((e => z(e, n, t))).finally((() => r.result = void 0))
                }
            }
        }(r, t, e);
    return I.bind(null, e, t, i)
}
var U = {};

function H(e, t, n, r, i) {
    if (D && "function" == typeof t) {
        let o = t.apply(n, r);
        o instanceof Promise ? o.then((t => H(e, t, n, r))).catch((e => z(e, i, t))) : e(o)
    } else "object" == typeof t && t instanceof Promise ? t.then((t => e(t))) : e(t)
}
var J = "x-";

function X(e = "") {
    return J + e
}
var Z = {};

function Y(e, t) {
    return Z[e] = t, {
        before(t) {
            if (!Z[t]) return void console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
            const n = fe.indexOf(t);
            fe.splice(n >= 0 ? n : fe.indexOf("DEFAULT"), 0, e)
        }
    }
}

function G(e, t, n) {
    if (t = Array.from(t), e._x_virtualDirectives) {
        let n = Object.entries(e._x_virtualDirectives).map((([e, t]) => ({
                name: e,
                value: t
            }))),
            r = Q(n);
        n = n.map((e => r.find((t => t.name === e.name)) ? {
            name: `x-bind:${e.name}`,
            value: `"${e.value}"`
        } : e)), t = t.concat(n)
    }
    let r = {},
        i = t.map(oe(((e, t) => r[e] = t))).filter(le).map(function(e, t) {
            return ({
                name: n,
                value: r
            }) => {
                let i = n.match(ce()),
                    o = n.match(/:([a-zA-Z0-9\-:]+)/),
                    a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                    s = t || e[n] || n;
                return {
                    type: i ? i[1] : null,
                    value: o ? o[1] : null,
                    modifiers: a.map((e => e.replace(".", ""))),
                    expression: r,
                    original: s
                }
            }
        }(r, n)).sort(de);
    return i.map((t => function(e, t) {
        let n = () => {},
            r = Z[t.type] || n,
            [i, o] = re(e);
        ! function(e, t, n) {
            e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(n)
        }(e, t.original, o);
        let a = () => {
            e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, i), r = r.bind(r, e, t, i), ee ? te.get(ne).push(r) : r())
        };
        return a.runCleanups = o, a
    }(e, t)))
}

function Q(e) {
    return Array.from(e).map(oe()).filter((e => !le(e)))
}
var ee = !1,
    te = new Map,
    ne = Symbol();

function re(e) {
    let r = [],
        [i, o] = function(e) {
            let r = () => {};
            return [i => {
                let o = t(i);
                return e._x_effects || (e._x_effects = new Set, e._x_runEffects = () => {
                    e._x_effects.forEach((e => e()))
                }), e._x_effects.add(o), r = () => {
                    void 0 !== o && (e._x_effects.delete(o), n(o))
                }, o
            }, () => {
                r()
            }]
        }(e);
    r.push(o);
    return [{
        Alpine: et,
        effect: i,
        cleanup: e => r.push(e),
        evaluateLater: W.bind(W, e),
        evaluate: q.bind(q, e)
    }, () => r.forEach((e => e()))]
}
var ie = (e, t) => ({
    name: n,
    value: r
}) => (n.startsWith(e) && (n = n.replace(e, t)), {
    name: n,
    value: r
});

function oe(e = (() => {})) {
    return ({
        name: t,
        value: n
    }) => {
        let {
            name: r,
            value: i
        } = ae.reduce(((e, t) => t(e)), {
            name: t,
            value: n
        });
        return r !== t && e(r, t), {
            name: r,
            value: i
        }
    }
}
var ae = [];

function se(e) {
    ae.push(e)
}

function le({
    name: e
}) {
    return ce().test(e)
}
var ce = () => new RegExp(`^${J}([^:^.]+)\\b`);
var ue = "DEFAULT",
    fe = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", ue, "teleport"];

function de(e, t) {
    let n = -1 === fe.indexOf(e.type) ? ue : e.type,
        r = -1 === fe.indexOf(t.type) ? ue : t.type;
    return fe.indexOf(n) - fe.indexOf(r)
}

function _e(e, t, n = {}) {
    e.dispatchEvent(new CustomEvent(t, {
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}

function pe(e, t) {
    if ("function" == typeof ShadowRoot && e instanceof ShadowRoot) return void Array.from(e.children).forEach((e => pe(e, t)));
    let n = !1;
    if (t(e, (() => n = !0)), n) return;
    let r = e.firstElementChild;
    for (; r;) pe(r, t), r = r.nextElementSibling
}

function he(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t)
}
var xe = !1;
var me = [],
    ge = [];

function ve() {
    return me.map((e => e()))
}

function ye() {
    return me.concat(ge).map((e => e()))
}

function be(e) {
    me.push(e)
}

function we(e) {
    ge.push(e)
}

function Ee(e, t = !1) {
    return Ae(e, (e => {
        if ((t ? ye() : ve()).some((t => e.matches(t)))) return !0
    }))
}

function Ae(e, t) {
    if (e) {
        if (t(e)) return e;
        if (e._x_teleportBack && (e = e._x_teleportBack), e.parentElement) return Ae(e.parentElement, t)
    }
}
var Oe = [];

function ke(e, t = pe, n = (() => {})) {
    ! function(e) {
        ee = !0;
        let t = Symbol();
        ne = t, te.set(t, []);
        let n = () => {
            for (; te.get(t).length;) te.get(t).shift()();
            te.delete(t)
        };
        e(n), ee = !1, n()
    }((() => {
        t(e, ((e, t) => {
            n(e, t), Oe.forEach((n => n(e, t))), G(e, e.attributes).forEach((e => e())), e._x_ignore && t()
        }))
    }))
}

function Se(e) {
    pe(e, (e => m(e)))
}
var Ce = [],
    $e = !1;

function je(e = (() => {})) {
    return queueMicrotask((() => {
        $e || setTimeout((() => {
            Ne()
        }))
    })), new Promise((t => {
        Ce.push((() => {
            e(), t()
        }))
    }))
}

function Ne() {
    for ($e = !1; Ce.length;) Ce.shift()()
}

function Me(e, t) {
    return Array.isArray(t) ? Pe(e, t.join(" ")) : "object" == typeof t && null !== t ? function(e, t) {
        let n = e => e.split(" ").filter(Boolean),
            r = Object.entries(t).flatMap((([e, t]) => !!t && n(e))).filter(Boolean),
            i = Object.entries(t).flatMap((([e, t]) => !t && n(e))).filter(Boolean),
            o = [],
            a = [];
        return i.forEach((t => {
            e.classList.contains(t) && (e.classList.remove(t), a.push(t))
        })), r.forEach((t => {
            e.classList.contains(t) || (e.classList.add(t), o.push(t))
        })), () => {
            a.forEach((t => e.classList.add(t))), o.forEach((t => e.classList.remove(t)))
        }
    }(e, t) : "function" == typeof t ? Me(e, t()) : Pe(e, t)
}

function Pe(e, t) {
    return t = !0 === t ? t = "" : t || "", n = t.split(" ").filter((t => !e.classList.contains(t))).filter(Boolean), e.classList.add(...n), () => {
        e.classList.remove(...n)
    };
    var n
}

function Le(e, t) {
    return "object" == typeof t && null !== t ? function(e, t) {
        let n = {};
        return Object.entries(t).forEach((([t, r]) => {
            n[t] = e.style[t], t.startsWith("--") || (t = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), e.style.setProperty(t, r)
        })), setTimeout((() => {
            0 === e.style.length && e.removeAttribute("style")
        })), () => {
            Le(e, n)
        }
    }(e, t) : function(e, t) {
        let n = e.getAttribute("style", t);
        return e.setAttribute("style", t), () => {
            e.setAttribute("style", n || "")
        }
    }(e, t)
}

function Te(e, t = (() => {})) {
    let n = !1;
    return function() {
        n ? t.apply(this, arguments) : (n = !0, e.apply(this, arguments))
    }
}

function Re(e, t, n = {}) {
    e._x_transition || (e._x_transition = {
        enter: {
            during: n,
            start: n,
            end: n
        },
        leave: {
            during: n,
            start: n,
            end: n
        },
        in (n = (() => {}), r = (() => {})) {
            Ie(e, t, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, n, r)
        },
        out(n = (() => {}), r = (() => {})) {
            Ie(e, t, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, n, r)
        }
    })
}

function Be(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : Be(t)
}

function Ie(e, t, {
    during: n,
    start: r,
    end: i
} = {}, o = (() => {}), a = (() => {})) {
    if (e._x_transitioning && e._x_transitioning.cancel(), 0 === Object.keys(n).length && 0 === Object.keys(r).length && 0 === Object.keys(i).length) return o(), void a();
    let s, l, c;
    ! function(e, t) {
        let n, r, i, o = Te((() => {
            A((() => {
                n = !0, r || t.before(), i || (t.end(), Ne()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning
            }))
        }));
        e._x_transitioning = {
            beforeCancels: [],
            beforeCancel(e) {
                this.beforeCancels.push(e)
            },
            cancel: Te((function() {
                for (; this.beforeCancels.length;) this.beforeCancels.shift()();
                o()
            })),
            finish: o
        }, A((() => {
            t.start(), t.during()
        })), $e = !0, requestAnimationFrame((() => {
            if (n) return;
            let o = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")),
                a = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
            0 === o && (o = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), A((() => {
                t.before()
            })), r = !0, requestAnimationFrame((() => {
                n || (A((() => {
                    t.end()
                })), Ne(), setTimeout(e._x_transitioning.finish, o + a), i = !0)
            }))
        }))
    }(e, {
        start() {
            s = t(e, r)
        },
        during() {
            l = t(e, n)
        },
        before: o,
        end() {
            s(), c = t(e, i)
        },
        after: a,
        cleanup() {
            l(), c()
        }
    })
}

function ze(e, t, n) {
    if (-1 === e.indexOf(t)) return n;
    const r = e[e.indexOf(t) + 1];
    if (!r) return n;
    if ("scale" === t && isNaN(r)) return n;
    if ("duration" === t || "delay" === t) {
        let e = r.match(/([0-9]+)ms/);
        if (e) return e[1]
    }
    return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
}
Y("transition", ((e, {
    value: t,
    modifiers: n,
    expression: r
}, {
    evaluate: i
}) => {
    "function" == typeof r && (r = i(r)), !1 !== r && (r && "boolean" != typeof r ? function(e, t, n) {
        Re(e, Me, "");
        let r = {
            enter: t => {
                e._x_transition.enter.during = t
            },
            "enter-start": t => {
                e._x_transition.enter.start = t
            },
            "enter-end": t => {
                e._x_transition.enter.end = t
            },
            leave: t => {
                e._x_transition.leave.during = t
            },
            "leave-start": t => {
                e._x_transition.leave.start = t
            },
            "leave-end": t => {
                e._x_transition.leave.end = t
            }
        };
        r[n](t)
    }(e, r, t) : function(e, t, n) {
        Re(e, Le);
        let r = !t.includes("in") && !t.includes("out") && !n,
            i = r || t.includes("in") || ["enter"].includes(n),
            o = r || t.includes("out") || ["leave"].includes(n);
        t.includes("in") && !r && (t = t.filter(((e, n) => n < t.indexOf("out"))));
        t.includes("out") && !r && (t = t.filter(((e, n) => n > t.indexOf("out"))));
        let a = !t.includes("opacity") && !t.includes("scale"),
            s = a || t.includes("opacity"),
            l = a || t.includes("scale"),
            c = s ? 0 : 1,
            u = l ? ze(t, "scale", 95) / 100 : 1,
            f = ze(t, "delay", 0) / 1e3,
            d = ze(t, "origin", "center"),
            _ = "opacity, transform",
            p = ze(t, "duration", 150) / 1e3,
            h = ze(t, "duration", 75) / 1e3,
            x = "cubic-bezier(0.4, 0.0, 0.2, 1)";
        i && (e._x_transition.enter.during = {
            transformOrigin: d,
            transitionDelay: `${f}s`,
            transitionProperty: _,
            transitionDuration: `${p}s`,
            transitionTimingFunction: x
        }, e._x_transition.enter.start = {
            opacity: c,
            transform: `scale(${u})`
        }, e._x_transition.enter.end = {
            opacity: 1,
            transform: "scale(1)"
        });
        o && (e._x_transition.leave.during = {
            transformOrigin: d,
            transitionDelay: `${f}s`,
            transitionProperty: _,
            transitionDuration: `${h}s`,
            transitionTimingFunction: x
        }, e._x_transition.leave.start = {
            opacity: 1,
            transform: "scale(1)"
        }, e._x_transition.leave.end = {
            opacity: c,
            transform: `scale(${u})`
        })
    }(e, n, t))
})), window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
    const i = "visible" === document.visibilityState ? requestAnimationFrame : setTimeout;
    let o = () => i(n);
    t ? e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : o() : e._x_transition ? e._x_transition.in(n) : o() : (e._x_hidePromise = e._x_transition ? new Promise(((t, n) => {
        e._x_transition.out((() => {}), (() => t(r))), e._x_transitioning.beforeCancel((() => n({
            isFromCancelledTransition: !0
        })))
    })) : Promise.resolve(r), queueMicrotask((() => {
        let t = Be(e);
        t ? (t._x_hideChildren || (t._x_hideChildren = []), t._x_hideChildren.push(e)) : i((() => {
            let t = e => {
                let n = Promise.all([e._x_hidePromise, ...(e._x_hideChildren || []).map(t)]).then((([e]) => e()));
                return delete e._x_hidePromise, delete e._x_hideChildren, n
            };
            t(e).catch((e => {
                if (!e.isFromCancelledTransition) throw e
            }))
        }))
    })))
};
var De = !1;

function Fe(e, t = (() => {})) {
    return (...n) => De ? t(...n) : e(...n)
}

function qe(t, n, r, i = []) {
    switch (t._x_bindings || (t._x_bindings = e({})), t._x_bindings[n] = r, n = i.includes("camel") ? n.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase())) : n) {
        case "value":
            ! function(e, t) {
                if ("radio" === e.type) void 0 === e.attributes.value && (e.value = t), window.fromModel && (e.checked = Ve(e.value, t));
                else if ("checkbox" === e.type) Number.isInteger(t) ? e.value = t : Number.isInteger(t) || Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some((t => Ve(t, e.value))) : e.checked = !!t : e.value = String(t);
                else if ("SELECT" === e.tagName) ! function(e, t) {
                    const n = [].concat(t).map((e => e + ""));
                    Array.from(e.options).forEach((e => {
                        e.selected = n.includes(e.value)
                    }))
                }(e, t);
                else {
                    if (e.value === t) return;
                    e.value = t
                }
            }(t, r);
            break;
        case "style":
            ! function(e, t) {
                e._x_undoAddedStyles && e._x_undoAddedStyles();
                e._x_undoAddedStyles = Le(e, t)
            }(t, r);
            break;
        case "class":
            ! function(e, t) {
                e._x_undoAddedClasses && e._x_undoAddedClasses();
                e._x_undoAddedClasses = Me(e, t)
            }(t, r);
            break;
        case "selected":
        case "checked":
            ! function(e, t, n) {
                We(e, t, n),
                    function(e, t, n) {
                        e[t] !== n && (e[t] = n)
                    }(e, t, n)
            }(t, n, r);
            break;
        default:
            We(t, n, r)
    }
}

function We(e, t, n) {
    [null, void 0, !1].includes(n) && function(e) {
        return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
    }(t) ? e.removeAttribute(t) : (Ke(t) && (n = t), function(e, t, n) {
        e.getAttribute(t) != n && e.setAttribute(t, n)
    }(e, t, n))
}

function Ve(e, t) {
    return e == t
}

function Ke(e) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
}

function Ue(e, t, n) {
    let r = e.getAttribute(t);
    return null === r ? "function" == typeof n ? n() : n : "" === r || (Ke(t) ? !![t, "true"].includes(r) : r)
}

function He(e, t) {
    var n;
    return function() {
        var r = this,
            i = arguments;
        clearTimeout(n), n = setTimeout((function() {
            n = null, e.apply(r, i)
        }), t)
    }
}

function Je(e, t) {
    let n;
    return function() {
        let r = this,
            i = arguments;
        n || (e.apply(r, i), n = !0, setTimeout((() => n = !1), t))
    }
}
var Xe = {},
    Ze = !1;
var Ye = {};

function Ge(e, t, n) {
    let r = [];
    for (; r.length;) r.pop()();
    let i = Object.entries(t).map((([e, t]) => ({
            name: e,
            value: t
        }))),
        o = Q(i);
    i = i.map((e => o.find((t => t.name === e.name)) ? {
        name: `x-bind:${e.name}`,
        value: `"${e.value}"`
    } : e)), G(e, i, n).map((e => {
        r.push(e.runCleanups), e()
    }))
}
var Qe = {};
var et = {
    get reactive() {
        return e
    },
    get release() {
        return n
    },
    get effect() {
        return t
    },
    get raw() {
        return r
    },
    version: "3.12.3",
    flushAndStopDeferringMutations: function() {
        O = !1, S(k), k = []
    },
    dontAutoEvaluateFunctions: F,
    disableEffectScheduling: function(e) {
        f = !1, e(), f = !0
    },
    startObservingMutations: y,
    stopObservingMutations: b,
    setReactivityEngine: function(i) {
        e = i.reactive, n = i.release, t = e => i.effect(e, {
            scheduler: e => {
                f ? l(e) : e()
            }
        }), r = i.raw
    },
    closestDataStack: j,
    skipDuringClone: Fe,
    onlyDuringClone: function(e) {
        return (...t) => De && e(...t)
    },
    addRootSelector: be,
    addInitSelector: we,
    addScopeToNode: $,
    deferMutations: function() {
        O = !0
    },
    mapAttributes: se,
    evaluateLater: W,
    interceptInit: function(e) {
        Oe.push(e)
    },
    setEvaluator: function(e) {
        V = e
    },
    mergeProxies: N,
    extractProp: function(e, t, n, r = !0) {
        if (e._x_bindings && void 0 !== e._x_bindings[t]) return e._x_bindings[t];
        if (e._x_inlineBindings && void 0 !== e._x_inlineBindings[t]) {
            let n = e._x_inlineBindings[t];
            return n.extract = r, F((() => q(e, n.expression)))
        }
        return Ue(e, t, n)
    },
    findClosest: Ae,
    closestRoot: Ee,
    destroyTree: Se,
    interceptor: P,
    transition: Ie,
    setStyles: Le,
    mutateDom: A,
    directive: Y,
    throttle: Je,
    debounce: He,
    evaluate: q,
    initTree: ke,
    nextTick: je,
    prefixed: X,
    prefix: function(e) {
        J = e
    },
    plugin: function(e) {
        (Array.isArray(e) ? e : [e]).forEach((e => e(et)))
    },
    magic: R,
    store: function(t, n) {
        if (Ze || (Xe = e(Xe), Ze = !0), void 0 === n) return Xe[t];
        Xe[t] = n, "object" == typeof n && null !== n && n.hasOwnProperty("init") && "function" == typeof n.init && Xe[t].init(), M(Xe[t])
    },
    start: function() {
        var e;
        xe && he("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), xe = !0, document.body || he("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), _e(document, "alpine:init"), _e(document, "alpine:initializing"), y(), e = e => ke(e, pe), h.push(e), x((e => Se(e))),
            function(e) {
                _.push(e)
            }(((e, t) => {
                G(e, t).forEach((e => e()))
            })), Array.from(document.querySelectorAll(ye())).filter((e => !Ee(e.parentElement, !0))).forEach((e => {
                ke(e)
            })), _e(document, "alpine:initialized")
    },
    clone: function(e, r) {
        r._x_dataStack || (r._x_dataStack = e._x_dataStack), De = !0,
            function(e) {
                let r = t;
                d(((e, t) => {
                    let i = r(e);
                    return n(i), () => {}
                })), e(), d(r)
            }((() => {
                ! function(e) {
                    let t = !1;
                    ke(e, ((e, n) => {
                        pe(e, ((e, r) => {
                            if (t && function(e) {
                                    return ve().some((t => e.matches(t)))
                                }(e)) return r();
                            t = !0, n(e, r)
                        }))
                    }))
                }(r)
            })), De = !1
    },
    bound: function(e, t, n) {
        return e._x_bindings && void 0 !== e._x_bindings[t] ? e._x_bindings[t] : Ue(e, t, n)
    },
    $data: C,
    walk: pe,
    data: function(e, t) {
        Qe[e] = t
    },
    bind: function(e, t) {
        let n = "function" != typeof t ? () => t : t;
        e instanceof Element ? Ge(e, n()) : Ye[e] = n
    }
};

function tt(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let e = 0; e < r.length; e++) n[r[e]] = !0;
    return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
}
var nt, rt = Object.freeze({}),
    it = Object.assign,
    ot = Object.prototype.hasOwnProperty,
    at = (e, t) => ot.call(e, t),
    st = Array.isArray,
    lt = e => "[object Map]" === dt(e),
    ct = e => "symbol" == typeof e,
    ut = e => null !== e && "object" == typeof e,
    ft = Object.prototype.toString,
    dt = e => ft.call(e),
    _t = e => dt(e).slice(8, -1),
    pt = e => "string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
    ht = (e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    })((e => e.charAt(0).toUpperCase() + e.slice(1))),
    xt = (e, t) => e !== t && (e == e || t == t),
    mt = new WeakMap,
    gt = [],
    vt = Symbol("iterate"),
    yt = Symbol("Map key iterate");
var bt = 0;

function wt(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
var Et = !0,
    At = [];

function Ot() {
    const e = At.pop();
    Et = void 0 === e || e
}

function kt(e, t, n) {
    if (!Et || void 0 === nt) return;
    let r = mt.get(e);
    r || mt.set(e, r = new Map);
    let i = r.get(n);
    i || r.set(n, i = new Set), i.has(nt) || (i.add(nt), nt.deps.push(i), nt.options.onTrack && nt.options.onTrack({
        effect: nt,
        target: e,
        type: t,
        key: n
    }))
}

function St(e, t, n, r, i, o) {
    const a = mt.get(e);
    if (!a) return;
    const s = new Set,
        l = e => {
            e && e.forEach((e => {
                (e !== nt || e.allowRecurse) && s.add(e)
            }))
        };
    if ("clear" === t) a.forEach(l);
    else if ("length" === n && st(e)) a.forEach(((e, t) => {
        ("length" === t || t >= r) && l(e)
    }));
    else switch (void 0 !== n && l(a.get(n)), t) {
        case "add":
            st(e) ? pt(n) && l(a.get("length")) : (l(a.get(vt)), lt(e) && l(a.get(yt)));
            break;
        case "delete":
            st(e) || (l(a.get(vt)), lt(e) && l(a.get(yt)));
            break;
        case "set":
            lt(e) && l(a.get(vt))
    }
    s.forEach((a => {
        a.options.onTrigger && a.options.onTrigger({
            effect: a,
            target: e,
            key: n,
            type: t,
            newValue: r,
            oldValue: i,
            oldTarget: o
        }), a.options.scheduler ? a.options.scheduler(a) : a()
    }))
}
var Ct = tt("__proto__,__v_isRef,__isVue"),
    $t = new Set(Object.getOwnPropertyNames(Symbol).map((e => Symbol[e])).filter(ct)),
    jt = Tt(),
    Nt = Tt(!1, !0),
    Mt = Tt(!0),
    Pt = Tt(!0, !0),
    Lt = {};

function Tt(e = !1, t = !1) {
    return function(n, r, i) {
        if ("__v_isReactive" === r) return !e;
        if ("__v_isReadonly" === r) return e;
        if ("__v_raw" === r && i === (e ? t ? fn : un : t ? cn : ln).get(n)) return n;
        const o = st(n);
        if (!e && o && at(Lt, r)) return Reflect.get(Lt, r, i);
        const a = Reflect.get(n, r, i);
        if (ct(r) ? $t.has(r) : Ct(r)) return a;
        if (e || kt(n, "get", r), t) return a;
        if (xn(a)) {
            return !o || !pt(r) ? a.value : a
        }
        return ut(a) ? e ? _n(a) : dn(a) : a
    }
}

function Rt(e = !1) {
    return function(t, n, r, i) {
        let o = t[n];
        if (!e && (r = hn(r), o = hn(o), !st(t) && xn(o) && !xn(r))) return o.value = r, !0;
        const a = st(t) && pt(n) ? Number(n) < t.length : at(t, n),
            s = Reflect.set(t, n, r, i);
        return t === hn(i) && (a ? xt(r, o) && St(t, "set", n, r, o) : St(t, "add", n, r)), s
    }
}["includes", "indexOf", "lastIndexOf"].forEach((e => {
    const t = Array.prototype[e];
    Lt[e] = function(...e) {
        const n = hn(this);
        for (let e = 0, t = this.length; e < t; e++) kt(n, "get", e + "");
        const r = t.apply(n, e);
        return -1 === r || !1 === r ? t.apply(n, e.map(hn)) : r
    }
})), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
    const t = Array.prototype[e];
    Lt[e] = function(...e) {
        At.push(Et), Et = !1;
        const n = t.apply(this, e);
        return Ot(), n
    }
}));
var Bt = {
        get: jt,
        set: Rt(),
        deleteProperty: function(e, t) {
            const n = at(e, t),
                r = e[t],
                i = Reflect.deleteProperty(e, t);
            return i && n && St(e, "delete", t, void 0, r), i
        },
        has: function(e, t) {
            const n = Reflect.has(e, t);
            return ct(t) && $t.has(t) || kt(e, "has", t), n
        },
        ownKeys: function(e) {
            return kt(e, "iterate", st(e) ? "length" : vt), Reflect.ownKeys(e)
        }
    },
    It = {
        get: Mt,
        set: (e, t) => (console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0),
        deleteProperty: (e, t) => (console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0)
    };
it({}, Bt, {
    get: Nt,
    set: Rt(!0)
}), it({}, It, {
    get: Pt
});
var zt = e => ut(e) ? dn(e) : e,
    Dt = e => ut(e) ? _n(e) : e,
    Ft = e => e,
    qt = e => Reflect.getPrototypeOf(e);

function Wt(e, t, n = !1, r = !1) {
    const i = hn(e = e.__v_raw),
        o = hn(t);
    t !== o && !n && kt(i, "get", t), !n && kt(i, "get", o);
    const {
        has: a
    } = qt(i), s = r ? Ft : n ? Dt : zt;
    return a.call(i, t) ? s(e.get(t)) : a.call(i, o) ? s(e.get(o)) : void(e !== i && e.get(t))
}

function Vt(e, t = !1) {
    const n = this.__v_raw,
        r = hn(n),
        i = hn(e);
    return e !== i && !t && kt(r, "has", e), !t && kt(r, "has", i), e === i ? n.has(e) : n.has(e) || n.has(i)
}

function Kt(e, t = !1) {
    return e = e.__v_raw, !t && kt(hn(e), "iterate", vt), Reflect.get(e, "size", e)
}

function Ut(e) {
    e = hn(e);
    const t = hn(this);
    return qt(t).has.call(t, e) || (t.add(e), St(t, "add", e, e)), this
}

function Ht(e, t) {
    t = hn(t);
    const n = hn(this),
        {
            has: r,
            get: i
        } = qt(n);
    let o = r.call(n, e);
    o ? sn(n, r, e) : (e = hn(e), o = r.call(n, e));
    const a = i.call(n, e);
    return n.set(e, t), o ? xt(t, a) && St(n, "set", e, t, a) : St(n, "add", e, t), this
}

function Jt(e) {
    const t = hn(this),
        {
            has: n,
            get: r
        } = qt(t);
    let i = n.call(t, e);
    i ? sn(t, n, e) : (e = hn(e), i = n.call(t, e));
    const o = r ? r.call(t, e) : void 0,
        a = t.delete(e);
    return i && St(t, "delete", e, void 0, o), a
}

function Xt() {
    const e = hn(this),
        t = 0 !== e.size,
        n = lt(e) ? new Map(e) : new Set(e),
        r = e.clear();
    return t && St(e, "clear", void 0, void 0, n), r
}

function Zt(e, t) {
    return function(n, r) {
        const i = this,
            o = i.__v_raw,
            a = hn(o),
            s = t ? Ft : e ? Dt : zt;
        return !e && kt(a, "iterate", vt), o.forEach(((e, t) => n.call(r, s(e), s(t), i)))
    }
}

function Yt(e, t, n) {
    return function(...r) {
        const i = this.__v_raw,
            o = hn(i),
            a = lt(o),
            s = "entries" === e || e === Symbol.iterator && a,
            l = "keys" === e && a,
            c = i[e](...r),
            u = n ? Ft : t ? Dt : zt;
        return !t && kt(o, "iterate", l ? yt : vt), {
            next() {
                const {
                    value: e,
                    done: t
                } = c.next();
                return t ? {
                    value: e,
                    done: t
                } : {
                    value: s ? [u(e[0]), u(e[1])] : u(e),
                    done: t
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Gt(e) {
    return function(...t) {
        {
            const n = t[0] ? `on key "${t[0]}" ` : "";
            console.warn(`${ht(e)} operation ${n}failed: target is readonly.`, hn(this))
        }
        return "delete" !== e && this
    }
}
var Qt = {
        get(e) {
            return Wt(this, e)
        },
        get size() {
            return Kt(this)
        },
        has: Vt,
        add: Ut,
        set: Ht,
        delete: Jt,
        clear: Xt,
        forEach: Zt(!1, !1)
    },
    en = {
        get(e) {
            return Wt(this, e, !1, !0)
        },
        get size() {
            return Kt(this)
        },
        has: Vt,
        add: Ut,
        set: Ht,
        delete: Jt,
        clear: Xt,
        forEach: Zt(!1, !0)
    },
    tn = {
        get(e) {
            return Wt(this, e, !0)
        },
        get size() {
            return Kt(this, !0)
        },
        has(e) {
            return Vt.call(this, e, !0)
        },
        add: Gt("add"),
        set: Gt("set"),
        delete: Gt("delete"),
        clear: Gt("clear"),
        forEach: Zt(!0, !1)
    },
    nn = {
        get(e) {
            return Wt(this, e, !0, !0)
        },
        get size() {
            return Kt(this, !0)
        },
        has(e) {
            return Vt.call(this, e, !0)
        },
        add: Gt("add"),
        set: Gt("set"),
        delete: Gt("delete"),
        clear: Gt("clear"),
        forEach: Zt(!0, !0)
    };

function rn(e, t) {
    const n = t ? e ? nn : en : e ? tn : Qt;
    return (t, r, i) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(at(n, r) && r in t ? n : t, r, i)
}["keys", "values", "entries", Symbol.iterator].forEach((e => {
    Qt[e] = Yt(e, !1, !1), tn[e] = Yt(e, !0, !1), en[e] = Yt(e, !1, !0), nn[e] = Yt(e, !0, !0)
}));
var on = {
        get: rn(!1, !1)
    },
    an = {
        get: rn(!0, !1)
    };

function sn(e, t, n) {
    const r = hn(n);
    if (r !== n && t.call(e, r)) {
        const t = _t(e);
        console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var ln = new WeakMap,
    cn = new WeakMap,
    un = new WeakMap,
    fn = new WeakMap;

function dn(e) {
    return e && e.__v_isReadonly ? e : pn(e, !1, Bt, on, ln)
}

function _n(e) {
    return pn(e, !0, It, an, un)
}

function pn(e, t, n, r, i) {
    if (!ut(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    const o = i.get(e);
    if (o) return o;
    const a = (s = e).__v_skip || !Object.isExtensible(s) ? 0 : function(e) {
        switch (e) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
        }
    }(_t(s));
    var s;
    if (0 === a) return e;
    const l = new Proxy(e, 2 === a ? r : n);
    return i.set(e, l), l
}

function hn(e) {
    return e && hn(e.__v_raw) || e
}

function xn(e) {
    return Boolean(e && !0 === e.__v_isRef)
}
R("nextTick", (() => je)), R("dispatch", (e => _e.bind(_e, e))), R("watch", ((e, {
    evaluateLater: t,
    effect: n
}) => (r, i) => {
    let o, a = t(r),
        s = !0,
        l = n((() => a((e => {
            JSON.stringify(e), s ? o = e : queueMicrotask((() => {
                i(e, o), o = e
            })), s = !1
        }))));
    e._x_effects.delete(l)
})), R("store", (function() {
    return Xe
})), R("data", (e => C(e))), R("root", (e => Ee(e))), R("refs", (e => (e._x_refs_proxy || (e._x_refs_proxy = N(function(e) {
    let t = [],
        n = e;
    for (; n;) n._x_refs && t.push(n._x_refs), n = n.parentNode;
    return t
}(e))), e._x_refs_proxy)));
var mn = {};

function gn(e) {
    return mn[e] || (mn[e] = 0), ++mn[e]
}

function vn(e, t, n) {
    R(t, (t => he(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, t)))
}
R("id", (e => (t, n = null) => {
    let r = function(e, t) {
            return Ae(e, (e => {
                if (e._x_ids && e._x_ids[t]) return !0
            }))
        }(e, t),
        i = r ? r._x_ids[t] : gn(t);
    return n ? `${t}-${i}-${n}` : `${t}-${i}`
})), R("el", (e => e)), vn("Focus", "focus", "focus"), vn("Persist", "persist", "persist"), Y("modelable", ((e, {
    expression: r
}, {
    effect: i,
    evaluateLater: o,
    cleanup: a
}) => {
    let s = o(r),
        l = () => {
            let e;
            return s((t => e = t)), e
        },
        c = o(`${r} = __placeholder`),
        u = e => c((() => {}), {
            scope: {
                __placeholder: e
            }
        }),
        f = l();
    u(f), queueMicrotask((() => {
        if (!e._x_model) return;
        e._x_removeModelListeners.default();
        let r = e._x_model.get,
            i = e._x_model.set,
            o = function({
                get: e,
                set: r
            }, {
                get: i,
                set: o
            }) {
                let a, s, l = !0,
                    c = t((() => {
                        let t, n;
                        l ? (t = e(), o(t), n = i(), l = !1) : (t = e(), n = i(), s = JSON.stringify(t), JSON.stringify(n), s !== a ? (n = i(), o(t), n = t) : (r(n), t = n)), a = JSON.stringify(t), JSON.stringify(n)
                    }));
                return () => {
                    n(c)
                }
            }({
                get: () => r(),
                set(e) {
                    i(e)
                }
            }, {
                get: () => l(),
                set(e) {
                    u(e)
                }
            });
        a(o)
    }))
}));
var yn = document.createElement("div");
Y("teleport", ((e, {
    modifiers: t,
    expression: n
}, {
    cleanup: r
}) => {
    "template" !== e.tagName.toLowerCase() && he("x-teleport can only be used on a <template> tag", e);
    let i = Fe((() => document.querySelector(n)), (() => yn))();
    i || he(`Cannot find x-teleport element for selector: "${n}"`);
    let o = e.content.cloneNode(!0).firstElementChild;
    e._x_teleport = o, o._x_teleportBack = e, e._x_forwardEvents && e._x_forwardEvents.forEach((t => {
        o.addEventListener(t, (t => {
            t.stopPropagation(), e.dispatchEvent(new t.constructor(t.type, t))
        }))
    })), $(o, {}, e), A((() => {
        t.includes("prepend") ? i.parentNode.insertBefore(o, i) : t.includes("append") ? i.parentNode.insertBefore(o, i.nextSibling) : i.appendChild(o), ke(o), o._x_ignore = !0
    })), r((() => o.remove()))
}));
var bn = () => {};

function wn(e, t, n, r) {
    let i = e,
        o = e => r(e),
        a = {},
        s = (e, t) => n => t(e, n);
    if (n.includes("dot") && (t = t.replace(/-/g, ".")), n.includes("camel") && (t = function(e) {
            return e.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase()))
        }(t)), n.includes("passive") && (a.passive = !0), n.includes("capture") && (a.capture = !0), n.includes("window") && (i = window), n.includes("document") && (i = document), n.includes("debounce")) {
        let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
            t = En(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
        o = He(o, t)
    }
    if (n.includes("throttle")) {
        let e = n[n.indexOf("throttle") + 1] || "invalid-wait",
            t = En(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
        o = Je(o, t)
    }
    return n.includes("prevent") && (o = s(o, ((e, t) => {
        t.preventDefault(), e(t)
    }))), n.includes("stop") && (o = s(o, ((e, t) => {
        t.stopPropagation(), e(t)
    }))), n.includes("self") && (o = s(o, ((t, n) => {
        n.target === e && t(n)
    }))), (n.includes("away") || n.includes("outside")) && (i = document, o = s(o, ((t, n) => {
        e.contains(n.target) || !1 !== n.target.isConnected && (e.offsetWidth < 1 && e.offsetHeight < 1 || !1 !== e._x_isShown && t(n))
    }))), n.includes("once") && (o = s(o, ((e, n) => {
        e(n), i.removeEventListener(t, o, a)
    }))), o = s(o, ((e, r) => {
        (function(e) {
            return ["keydown", "keyup"].includes(e)
        })(t) && function(e, t) {
            let n = t.filter((e => !["window", "document", "prevent", "stop", "once", "capture"].includes(e)));
            if (n.includes("debounce")) {
                let e = n.indexOf("debounce");
                n.splice(e, En((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
            }
            if (n.includes("throttle")) {
                let e = n.indexOf("throttle");
                n.splice(e, En((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
            }
            if (0 === n.length) return !1;
            if (1 === n.length && An(e.key).includes(n[0])) return !1;
            const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e => n.includes(e)));
            if (n = n.filter((e => !r.includes(e))), r.length > 0) {
                if (r.filter((t => ("cmd" !== t && "super" !== t || (t = "meta"), e[`${t}Key`]))).length === r.length && An(e.key).includes(n[0])) return !1
            }
            return !0
        }(r, n) || e(r)
    })), i.addEventListener(t, o, a), () => {
        i.removeEventListener(t, o, a)
    }
}

function En(e) {
    return !Array.isArray(e) && !isNaN(e)
}

function An(e) {
    if (!e) return [];
    var t;
    e = [" ", "_"].includes(t = e) ? t : t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    let n = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return n[e] = e, Object.keys(n).map((t => {
        if (n[t] === e) return t
    })).filter((e => e))
}

function On(e) {
    let t = e ? parseFloat(e) : null;
    return n = t, Array.isArray(n) || isNaN(n) ? e : t;
    var n
}

function kn(e) {
    return null !== e && "object" == typeof e && "function" == typeof e.get && "function" == typeof e.set
}
bn.inline = (e, {
    modifiers: t
}, {
    cleanup: n
}) => {
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, n((() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
    }))
}, Y("ignore", bn), Y("effect", ((e, {
    expression: t
}, {
    effect: n
}) => n(W(e, t)))), Y("model", ((e, {
    modifiers: t,
    expression: n
}, {
    effect: r,
    cleanup: i
}) => {
    let o = e;
    t.includes("parent") && (o = e.parentNode);
    let a, s = W(o, n);
    a = "string" == typeof n ? W(o, `${n} = __placeholder`) : "function" == typeof n && "string" == typeof n() ? W(o, `${n()} = __placeholder`) : () => {};
    let l = () => {
            let e;
            return s((t => e = t)), kn(e) ? e.get() : e
        },
        c = e => {
            let t;
            s((e => t = e)), kn(t) ? t.set(e) : a((() => {}), {
                scope: {
                    __placeholder: e
                }
            })
        };
    "string" == typeof n && "radio" === e.type && A((() => {
        e.hasAttribute("name") || e.setAttribute("name", n)
    }));
    var u = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    let f = De ? () => {} : wn(e, u, t, (n => {
        c(function(e, t, n, r) {
            return A((() => {
                if (n instanceof CustomEvent && void 0 !== n.detail) return n.detail ? ? n.target.value;
                if ("checkbox" === e.type) {
                    if (Array.isArray(r)) {
                        let e = t.includes("number") ? On(n.target.value) : n.target.value;
                        return n.target.checked ? r.concat([e]) : r.filter((t => !(t == e)))
                    }
                    return n.target.checked
                }
                if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map((e => On(e.value || e.text))) : Array.from(n.target.selectedOptions).map((e => e.value || e.text)); {
                    let e = n.target.value;
                    return t.includes("number") ? On(e) : t.includes("trim") ? e.trim() : e
                }
            }))
        }(e, t, n, l()))
    }));
    if (t.includes("fill") && [null, ""].includes(l()) && e.dispatchEvent(new Event(u, {})), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = f, i((() => e._x_removeModelListeners.default())), e.form) {
        let t = wn(e.form, "reset", [], (t => {
            je((() => e._x_model && e._x_model.set(e.value)))
        }));
        i((() => t()))
    }
    e._x_model = {
        get: () => l(),
        set(e) {
            c(e)
        }
    }, e._x_forceModelUpdate = t => {
        void 0 === (t = void 0 === t ? l() : t) && "string" == typeof n && n.match(/\./) && (t = ""), window.fromModel = !0, A((() => qe(e, "value", t))), delete window.fromModel
    }, r((() => {
        let n = l();
        t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(n)
    }))
})), Y("cloak", (e => queueMicrotask((() => A((() => e.removeAttribute(X("cloak")))))))), we((() => `[${X("init")}]`)), Y("init", Fe(((e, {
    expression: t
}, {
    evaluate: n
}) => "string" == typeof t ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)))), Y("text", ((e, {
    expression: t
}, {
    effect: n,
    evaluateLater: r
}) => {
    let i = r(t);
    n((() => {
        i((t => {
            A((() => {
                e.textContent = t
            }))
        }))
    }))
})), Y("html", ((e, {
    expression: t
}, {
    effect: n,
    evaluateLater: r
}) => {
    let i = r(t);
    n((() => {
        i((t => {
            A((() => {
                e.innerHTML = t, e._x_ignoreSelf = !0, ke(e), delete e._x_ignoreSelf
            }))
        }))
    }))
})), se(ie(":", X("bind:")));
var Sn = (e, {
    value: t,
    modifiers: n,
    expression: r,
    original: i
}, {
    effect: o
}) => {
    if (!t) {
        let t = {};
        return a = t, Object.entries(Ye).forEach((([e, t]) => {
            Object.defineProperty(a, e, {
                get: () => (...e) => t(...e)
            })
        })), void W(e, r)((t => {
            Ge(e, t, i)
        }), {
            scope: t
        })
    }
    var a;
    if ("key" === t) return function(e, t) {
        e._x_keyExpression = t
    }(e, r);
    if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
    let s = W(e, r);
    o((() => s((i => {
        void 0 === i && "string" == typeof r && r.match(/\./) && (i = ""), A((() => qe(e, t, i, n)))
    }))))
};

function Cn(e, t, n, r) {
    let i = {};
    if (/^\[.*\]$/.test(e.item) && Array.isArray(t)) {
        e.item.replace("[", "").replace("]", "").split(",").map((e => e.trim())).forEach(((e, n) => {
            i[e] = t[n]
        }))
    } else if (/^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t) {
        e.item.replace("{", "").replace("}", "").split(",").map((e => e.trim())).forEach((e => {
            i[e] = t[e]
        }))
    } else i[e.item] = t;
    return e.index && (i[e.index] = n), e.collection && (i[e.collection] = r), i
}

function $n() {}

function jn(e, t, n) {
    Y(t, (r => he(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r)))
}
Sn.inline = (e, {
    value: t,
    modifiers: n,
    expression: r
}) => {
    t && (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = {
        expression: r,
        extract: !1
    })
}, Y("bind", Sn), be((() => `[${X("data")}]`)), Y("data", Fe(((t, {
    expression: n
}, {
    cleanup: r
}) => {
    n = "" === n ? "{}" : n;
    let i = {};
    B(i, t);
    let o = {};
    var a, s;
    a = o, s = i, Object.entries(Qe).forEach((([e, t]) => {
        Object.defineProperty(a, e, {
            get: () => (...e) => t.bind(s)(...e),
            enumerable: !1
        })
    }));
    let l = q(t, n, {
        scope: o
    });
    void 0 !== l && !0 !== l || (l = {}), B(l, t);
    let c = e(l);
    M(c);
    let u = $(t, c);
    c.init && q(t, c.init), r((() => {
        c.destroy && q(t, c.destroy), u()
    }))
}))), Y("show", ((e, {
    modifiers: t,
    expression: n
}, {
    effect: r
}) => {
    let i = W(e, n);
    e._x_doHide || (e._x_doHide = () => {
        A((() => {
            e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
        }))
    }), e._x_doShow || (e._x_doShow = () => {
        A((() => {
            1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display")
        }))
    });
    let o, a = () => {
            e._x_doHide(), e._x_isShown = !1
        },
        s = () => {
            e._x_doShow(), e._x_isShown = !0
        },
        l = () => setTimeout(s),
        c = Te((e => e ? s() : a()), (t => {
            "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, s, a) : t ? l() : a()
        })),
        u = !0;
    r((() => i((e => {
        (u || e !== o) && (t.includes("immediate") && (e ? l() : a()), c(e), o = e, u = !1)
    }))))
})), Y("for", ((t, {
    expression: n
}, {
    effect: r,
    cleanup: i
}) => {
    let o = function(e) {
            let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                n = /^\s*\(|\)\s*$/g,
                r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                i = e.match(r);
            if (!i) return;
            let o = {};
            o.items = i[2].trim();
            let a = i[1].replace(n, "").trim(),
                s = a.match(t);
            s ? (o.item = a.replace(t, "").trim(), o.index = s[1].trim(), s[2] && (o.collection = s[2].trim())) : o.item = a;
            return o
        }(n),
        a = W(t, o.items),
        s = W(t, t._x_keyExpression || "index");
    t._x_prevKeys = [], t._x_lookup = {}, r((() => function(t, n, r, i) {
        let o = e => "object" == typeof e && !Array.isArray(e),
            a = t;
        r((r => {
            var s;
            s = r, !Array.isArray(s) && !isNaN(s) && r >= 0 && (r = Array.from(Array(r).keys(), (e => e + 1))), void 0 === r && (r = []);
            let l = t._x_lookup,
                u = t._x_prevKeys,
                f = [],
                d = [];
            if (o(r)) r = Object.entries(r).map((([e, t]) => {
                let o = Cn(n, t, e, r);
                i((e => d.push(e)), {
                    scope: {
                        index: e,
                        ...o
                    }
                }), f.push(o)
            }));
            else
                for (let e = 0; e < r.length; e++) {
                    let t = Cn(n, r[e], e, r);
                    i((e => d.push(e)), {
                        scope: {
                            index: e,
                            ...t
                        }
                    }), f.push(t)
                }
            let _ = [],
                p = [],
                h = [],
                x = [];
            for (let e = 0; e < u.length; e++) {
                let t = u[e]; - 1 === d.indexOf(t) && h.push(t)
            }
            u = u.filter((e => !h.includes(e)));
            let m = "template";
            for (let e = 0; e < d.length; e++) {
                let t = d[e],
                    n = u.indexOf(t);
                if (-1 === n) u.splice(e, 0, t), _.push([m, e]);
                else if (n !== e) {
                    let t = u.splice(e, 1)[0],
                        r = u.splice(n - 1, 1)[0];
                    u.splice(e, 0, r), u.splice(n, 0, t), p.push([t, r])
                } else x.push(t);
                m = t
            }
            for (let e = 0; e < h.length; e++) {
                let t = h[e];
                l[t]._x_effects && l[t]._x_effects.forEach(c), l[t].remove(), l[t] = null, delete l[t]
            }
            for (let e = 0; e < p.length; e++) {
                let [t, n] = p[e], r = l[t], i = l[n], o = document.createElement("div");
                A((() => {
                    i || he('x-for ":key" is undefined or invalid', a), i.after(o), r.after(i), i._x_currentIfEl && i.after(i._x_currentIfEl), o.before(r), r._x_currentIfEl && r.after(r._x_currentIfEl), o.remove()
                })), i._x_refreshXForScope(f[d.indexOf(n)])
            }
            for (let t = 0; t < _.length; t++) {
                let [n, r] = _[t], i = "template" === n ? a : l[n];
                i._x_currentIfEl && (i = i._x_currentIfEl);
                let o = f[r],
                    s = d[r],
                    c = document.importNode(a.content, !0).firstElementChild,
                    u = e(o);
                $(c, u, a), c._x_refreshXForScope = e => {
                    Object.entries(e).forEach((([e, t]) => {
                        u[e] = t
                    }))
                }, A((() => {
                    i.after(c), ke(c)
                })), "object" == typeof s && he("x-for key cannot be an object, it must be a string or an integer", a), l[s] = c
            }
            for (let e = 0; e < x.length; e++) l[x[e]]._x_refreshXForScope(f[d.indexOf(x[e])]);
            a._x_prevKeys = d
        }))
    }(t, o, a, s))), i((() => {
        Object.values(t._x_lookup).forEach((e => e.remove())), delete t._x_prevKeys, delete t._x_lookup
    }))
})), $n.inline = (e, {
    expression: t
}, {
    cleanup: n
}) => {
    let r = Ee(e);
    r._x_refs || (r._x_refs = {}), r._x_refs[t] = e, n((() => delete r._x_refs[t]))
}, Y("ref", $n), Y("if", ((e, {
    expression: t
}, {
    effect: n,
    cleanup: r
}) => {
    let i = W(e, t);
    n((() => i((t => {
        t ? (() => {
            if (e._x_currentIfEl) return e._x_currentIfEl;
            let t = e.content.cloneNode(!0).firstElementChild;
            $(t, {}, e), A((() => {
                e.after(t), ke(t)
            })), e._x_currentIfEl = t, e._x_undoIf = () => {
                pe(t, (e => {
                    e._x_effects && e._x_effects.forEach(c)
                })), t.remove(), delete e._x_currentIfEl
            }
        })() : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf)
    })))), r((() => e._x_undoIf && e._x_undoIf()))
})), Y("id", ((e, {
    expression: t
}, {
    evaluate: n
}) => {
    n(t).forEach((t => function(e, t) {
        e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = gn(t))
    }(e, t)))
})), se(ie("@", X("on:"))), Y("on", Fe(((e, {
    value: t,
    modifiers: n,
    expression: r
}, {
    cleanup: i
}) => {
    let o = r ? W(e, r) : () => {};
    "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let a = wn(e, t, n, (e => {
        o((() => {}), {
            scope: {
                $event: e
            },
            params: [e]
        })
    }));
    i((() => a()))
}))), jn("Collapse", "collapse", "collapse"), jn("Intersect", "intersect", "intersect"), jn("Focus", "trap", "focus"), jn("Mask", "mask", "mask"), et.setEvaluator(K), et.setReactivityEngine({
    reactive: dn,
    effect: function(e, t = rt) {
        (function(e) {
            return e && !0 === e._isEffect
        })(e) && (e = e.raw);
        const n = function(e, t) {
            const n = function() {
                if (!n.active) return e();
                if (!gt.includes(n)) {
                    wt(n);
                    try {
                        return At.push(Et), Et = !0, gt.push(n), nt = n, e()
                    } finally {
                        gt.pop(), Ot(), nt = gt[gt.length - 1]
                    }
                }
            };
            return n.id = bt++, n.allowRecurse = !!t.allowRecurse, n._isEffect = !0, n.active = !0, n.raw = e, n.deps = [], n.options = t, n
        }(e, t);
        return t.lazy || n(), n
    },
    release: function(e) {
        e.active && (wt(e), e.options.onStop && e.options.onStop(), e.active = !1)
    },
    raw: hn
});
var Nn = et;
window.Alpine = Nn, Nn.start();