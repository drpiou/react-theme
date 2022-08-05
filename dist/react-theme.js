import W, { createContext as _a, useRef as ma, useEffect as $a, useCallback as Oa, useContext as Ta, useMemo as wa } from "react";
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ja = typeof Xe == "object" && Xe && Xe.Object === Object && Xe, In = ja, Sa = In, Pa = typeof self == "object" && self && self.Object === Object && self, Ca = Sa || Pa || Function("return this")(), G = Ca, Ea = G, xa = Ea.Symbol, ar = xa, jt = ar, kn = Object.prototype, Ra = kn.hasOwnProperty, Aa = kn.toString, Ge = jt ? jt.toStringTag : void 0;
function Ia(e) {
  var t = Ra.call(e, Ge), n = e[Ge];
  try {
    e[Ge] = void 0;
    var o = !0;
  } catch {
  }
  var s = Aa.call(e);
  return o && (t ? e[Ge] = n : delete e[Ge]), s;
}
var ka = Ia, Fa = Object.prototype, Da = Fa.toString;
function Ma(e) {
  return Da.call(e);
}
var Na = Ma, St = ar, La = ka, Ua = Na, za = "[object Null]", Ba = "[object Undefined]", Pt = St ? St.toStringTag : void 0;
function Ga(e) {
  return e == null ? e === void 0 ? Ba : za : Pt && Pt in Object(e) ? La(e) : Ua(e);
}
var vt = Ga;
function Wa(e) {
  return e != null && typeof e == "object";
}
var Fn = Wa, Va = Function.prototype, Ka = Va.toString;
Ka.call(Object);
var Ya = vt, Ha = Fn, qa = "[object Arguments]";
function Ja(e) {
  return Ha(e) && Ya(e) == qa;
}
var Xa = Ja, Ct = Xa, Za = Fn, Dn = Object.prototype, Qa = Dn.hasOwnProperty, eo = Dn.propertyIsEnumerable;
Ct(function() {
  return arguments;
}());
var rr = { exports: {} };
function ro() {
  return !1;
}
var to = ro;
(function(e, t) {
  var n = G, o = to, s = t && !t.nodeType && t, f = s && !0 && e && !e.nodeType && e, p = f && f.exports === s, l = p ? n.Buffer : void 0, c = l ? l.isBuffer : void 0, g = c || o;
  e.exports = g;
})(rr, rr.exports);
var Qr = { exports: {} };
(function(e, t) {
  var n = In, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, p = f && n.process, l = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || p && p.binding && p.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(Qr, Qr.exports);
var Et = Qr.exports;
Et && Et.isTypedArray;
rr.exports;
function no(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mn = no, ao = vt, oo = Mn, io = "[object AsyncFunction]", so = "[object Function]", co = "[object GeneratorFunction]", uo = "[object Proxy]";
function fo(e) {
  if (!oo(e))
    return !1;
  var t = ao(e);
  return t == so || t == co || t == io || t == uo;
}
var lo = fo;
function po() {
  this.__data__ = [], this.size = 0;
}
var vo = po;
function yo(e, t) {
  return e === t || e !== e && t !== t;
}
var ho = yo, go = ho;
function bo(e, t) {
  for (var n = e.length; n--; )
    if (go(e[n][0], t))
      return n;
  return -1;
}
var or = bo, _o = or, mo = Array.prototype, $o = mo.splice;
function Oo(e) {
  var t = this.__data__, n = _o(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : $o.call(t, n, 1), --this.size, !0;
}
var To = Oo, wo = or;
function jo(e) {
  var t = this.__data__, n = wo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var So = jo, Po = or;
function Co(e) {
  return Po(this.__data__, e) > -1;
}
var Eo = Co, xo = or;
function Ro(e, t) {
  var n = this.__data__, o = xo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
var Ao = Ro, Io = vo, ko = To, Fo = So, Do = Eo, Mo = Ao;
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ie.prototype.clear = Io;
ie.prototype.delete = ko;
ie.prototype.get = Fo;
ie.prototype.has = Do;
ie.prototype.set = Mo;
var No = ie, Lo = G, Uo = Lo["__core-js_shared__"], zo = Uo, Jr = zo, xt = function() {
  var e = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bo(e) {
  return !!xt && xt in e;
}
var Go = Bo, Wo = Function.prototype, Vo = Wo.toString;
function Ko(e) {
  if (e != null) {
    try {
      return Vo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nn = Ko, Yo = lo, Ho = Go, qo = Mn, Jo = Nn, Xo = /[\\^$.*+?()[\]{}|]/g, Zo = /^\[object .+?Constructor\]$/, Qo = Function.prototype, ei = Object.prototype, ri = Qo.toString, ti = ei.hasOwnProperty, ni = RegExp(
  "^" + ri.call(ti).replace(Xo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ai(e) {
  if (!qo(e) || Ho(e))
    return !1;
  var t = Yo(e) ? ni : Zo;
  return t.test(Jo(e));
}
var oi = ai;
function ii(e, t) {
  return e == null ? void 0 : e[t];
}
var si = ii, ci = oi, ui = si;
function fi(e, t) {
  var n = ui(e, t);
  return ci(n) ? n : void 0;
}
var se = fi, li = se, pi = G, vi = li(pi, "Map"), Ln = vi, yi = se, di = yi(Object, "create"), ir = di, Rt = ir;
function hi() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
var gi = hi;
function bi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _i = bi, mi = ir, $i = "__lodash_hash_undefined__", Oi = Object.prototype, Ti = Oi.hasOwnProperty;
function wi(e) {
  var t = this.__data__;
  if (mi) {
    var n = t[e];
    return n === $i ? void 0 : n;
  }
  return Ti.call(t, e) ? t[e] : void 0;
}
var ji = wi, Si = ir, Pi = Object.prototype, Ci = Pi.hasOwnProperty;
function Ei(e) {
  var t = this.__data__;
  return Si ? t[e] !== void 0 : Ci.call(t, e);
}
var xi = Ei, Ri = ir, Ai = "__lodash_hash_undefined__";
function Ii(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ri && t === void 0 ? Ai : t, this;
}
var ki = Ii, Fi = gi, Di = _i, Mi = ji, Ni = xi, Li = ki;
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ce.prototype.clear = Fi;
ce.prototype.delete = Di;
ce.prototype.get = Mi;
ce.prototype.has = Ni;
ce.prototype.set = Li;
var Ui = ce, At = Ui, zi = No, Bi = Ln;
function Gi() {
  this.size = 0, this.__data__ = {
    hash: new At(),
    map: new (Bi || zi)(),
    string: new At()
  };
}
var Wi = Gi;
function Vi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ki = Vi, Yi = Ki;
function Hi(e, t) {
  var n = e.__data__;
  return Yi(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var sr = Hi, qi = sr;
function Ji(e) {
  var t = qi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Xi = Ji, Zi = sr;
function Qi(e) {
  return Zi(this, e).get(e);
}
var es = Qi, rs = sr;
function ts(e) {
  return rs(this, e).has(e);
}
var ns = ts, as = sr;
function os(e, t) {
  var n = as(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
var is = os, ss = Wi, cs = Xi, us = es, fs = ns, ls = is;
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ue.prototype.clear = ss;
ue.prototype.delete = cs;
ue.prototype.get = us;
ue.prototype.has = fs;
ue.prototype.set = ls;
var ps = ue, vs = G;
vs.Uint8Array;
var It = ar, kt = It ? It.prototype : void 0;
kt && kt.valueOf;
var ys = se, ds = G, hs = ys(ds, "DataView"), gs = hs, bs = se, _s = G, ms = bs(_s, "Promise"), $s = ms, Os = se, Ts = G, ws = Os(Ts, "Set"), js = ws, Ss = se, Ps = G, Cs = Ss(Ps, "WeakMap"), Es = Cs, et = gs, rt = Ln, tt = $s, nt = js, at = Es, Un = vt, fe = Nn, Ft = "[object Map]", xs = "[object Object]", Dt = "[object Promise]", Mt = "[object Set]", Nt = "[object WeakMap]", Lt = "[object DataView]", Rs = fe(et), As = fe(rt), Is = fe(tt), ks = fe(nt), Fs = fe(at), ae = Un;
(et && ae(new et(new ArrayBuffer(1))) != Lt || rt && ae(new rt()) != Ft || tt && ae(tt.resolve()) != Dt || nt && ae(new nt()) != Mt || at && ae(new at()) != Nt) && (ae = function(e) {
  var t = Un(e), n = t == xs ? e.constructor : void 0, o = n ? fe(n) : "";
  if (o)
    switch (o) {
      case Rs:
        return Lt;
      case As:
        return Ft;
      case Is:
        return Dt;
      case ks:
        return Mt;
      case Fs:
        return Nt;
    }
  return t;
});
rr.exports;
var zn = ps, Ds = "Expected a function";
function yt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ds);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], f = n.cache;
    if (f.has(s))
      return f.get(s);
    var p = e.apply(this, o);
    return n.cache = f.set(s, p) || f, p;
  };
  return n.cache = new (yt.Cache || zn)(), n;
}
yt.Cache = zn;
var Ms = yt, Ns = Ms, Ls = 500;
function Us(e) {
  var t = Ns(e, function(o) {
    return n.size === Ls && n.clear(), o;
  }), n = t.cache;
  return t;
}
var zs = Us, Bs = zs, Gs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ws = /\\(\\)?/g;
Bs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gs, function(n, o, s, f) {
    t.push(s ? f.replace(Ws, "$1") : o || n);
  }), t;
});
var Ut = ar, zt = Ut ? Ut.prototype : void 0;
zt && zt.toString;
const Vs = (e) => e.displayName || e.name || void 0;
var Bn = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function Ks() {
  if (Bt)
    return We;
  Bt = 1;
  var e = W, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(l, c, g) {
    var h, $ = {}, w = null, P = null;
    g !== void 0 && (w = "" + g), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (h in c)
      o.call(c, h) && !f.hasOwnProperty(h) && ($[h] = c[h]);
    if (l && l.defaultProps)
      for (h in c = l.defaultProps, c)
        $[h] === void 0 && ($[h] = c[h]);
    return { $$typeof: t, type: l, key: w, ref: P, props: $, _owner: s.current };
  }
  return We.Fragment = n, We.jsx = p, We.jsxs = p, We;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function Ys() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = W, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), R = Symbol.iterator, te = "@@iterator";
    function be(r) {
      if (r === null || typeof r != "object")
        return null;
      var a = R && r[R] || r[te];
      return typeof a == "function" ? a : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(r) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
          i[u - 1] = arguments[u];
        ne("error", r, i);
      }
    }
    function ne(r, a, i) {
      {
        var u = C.ReactDebugCurrentFrame, d = u.getStackAddendum();
        d !== "" && (a += "%s", i = i.concat([d]));
        var b = i.map(function(y) {
          return String(y);
        });
        b.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, b);
      }
    }
    var br = !1, _r = !1, mr = !1, $r = !1, Or = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Tr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === f || Or || r === s || r === g || r === h || $r || r === P || br || _r || mr || typeof r == "object" && r !== null && (r.$$typeof === w || r.$$typeof === $ || r.$$typeof === p || r.$$typeof === l || r.$$typeof === c || r.$$typeof === _e || r.getModuleId !== void 0));
    }
    function wr(r, a, i) {
      var u = r.displayName;
      if (u)
        return u;
      var d = a.displayName || a.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function E(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            var a = r;
            return me(a) + ".Consumer";
          case p:
            var i = r;
            return me(i._context) + ".Provider";
          case c:
            return wr(r, r.render, "ForwardRef");
          case $:
            var u = r.displayName || null;
            return u !== null ? u : E(r.type) || "Memo";
          case w: {
            var d = r, b = d._payload, y = d._init;
            try {
              return E(y(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, F = 0, $e, Oe, Te, we, je, Se, Pe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function jr() {
      {
        if (F === 0) {
          $e = console.log, Oe = console.info, Te = console.warn, we = console.error, je = console.group, Se = console.groupCollapsed, Pe = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        F++;
      }
    }
    function Sr() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: $e
            }),
            info: A({}, r, {
              value: Oe
            }),
            warn: A({}, r, {
              value: Te
            }),
            error: A({}, r, {
              value: we
            }),
            group: A({}, r, {
              value: je
            }),
            groupCollapsed: A({}, r, {
              value: Se
            }),
            groupEnd: A({}, r, {
              value: Pe
            })
          });
        }
        F < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = C.ReactCurrentDispatcher, Y;
    function N(r, a, i) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (d) {
            var u = d.stack.trim().match(/\n( *(at )?)/);
            Y = u && u[1] || "";
          }
        return `
` + Y + r;
      }
    }
    var H = !1, L;
    {
      var Pr = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Pr();
    }
    function Ee(r, a) {
      if (!r || H)
        return "";
      {
        var i = L.get(r);
        if (i !== void 0)
          return i;
      }
      var u;
      H = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = K.current, K.current = null, jr();
      try {
        if (a) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (x) {
              u = x;
            }
            Reflect.construct(r, [], y);
          } else {
            try {
              y.call();
            } catch (x) {
              u = x;
            }
            r.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            u = x;
          }
          r();
        }
      } catch (x) {
        if (x && u && typeof x.stack == "string") {
          for (var v = x.stack.split(`
`), T = u.stack.split(`
`), _ = v.length - 1, m = T.length - 1; _ >= 1 && m >= 0 && v[_] !== T[m]; )
            m--;
          for (; _ >= 1 && m >= 0; _--, m--)
            if (v[_] !== T[m]) {
              if (_ !== 1 || m !== 1)
                do
                  if (_--, m--, m < 0 || v[_] !== T[m]) {
                    var j = `
` + v[_].replace(" at new ", " at ");
                    return r.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", r.displayName)), typeof r == "function" && L.set(r, j), j;
                  }
                while (_ >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = b, Sr(), Error.prepareStackTrace = d;
      }
      var k = r ? r.displayName || r.name : "", Be = k ? N(k) : "";
      return typeof r == "function" && L.set(r, Be), Be;
    }
    function Cr(r, a, i) {
      return Ee(r, !1);
    }
    function Er(r) {
      var a = r.prototype;
      return !!(a && a.isReactComponent);
    }
    function U(r, a, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ee(r, Er(r));
      if (typeof r == "string")
        return N(r);
      switch (r) {
        case g:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return Cr(r.render);
          case $:
            return U(r.type, a, i);
          case w: {
            var u = r, d = u._payload, b = u._init;
            try {
              return U(b(d), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, xe = {}, Re = C.ReactDebugCurrentFrame;
    function B(r) {
      if (r) {
        var a = r._owner, i = U(r.type, r._source, a ? a.type : null);
        Re.setExtraStackFrame(i);
      } else
        Re.setExtraStackFrame(null);
    }
    function xr(r, a, i, u, d) {
      {
        var b = Function.call.bind(z);
        for (var y in r)
          if (b(r, y)) {
            var v = void 0;
            try {
              if (typeof r[y] != "function") {
                var T = Error((u || "React class") + ": " + i + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = r[y](a, y, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              v = _;
            }
            v && !(v instanceof Error) && (B(d), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, y, typeof v), B(null)), v instanceof Error && !(v.message in xe) && (xe[v.message] = !0, B(d), O("Failed %s type: %s", i, v.message), B(null));
          }
      }
    }
    var Rr = Array.isArray;
    function q(r) {
      return Rr(r);
    }
    function Ar(r) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function Ir(r) {
      try {
        return Ae(r), !1;
      } catch {
        return !0;
      }
    }
    function Ae(r) {
      return "" + r;
    }
    function Ie(r) {
      if (Ir(r))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(r)), Ae(r);
    }
    var D = C.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, Fe, J;
    J = {};
    function Fr(r) {
      if (z.call(r, "ref")) {
        var a = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Dr(r) {
      if (z.call(r, "key")) {
        var a = Object.getOwnPropertyDescriptor(r, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Mr(r, a) {
      if (typeof r.ref == "string" && D.current && a && D.current.stateNode !== a) {
        var i = E(D.current.type);
        J[i] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(D.current.type), r.ref), J[i] = !0);
      }
    }
    function Nr(r, a) {
      {
        var i = function() {
          ke || (ke = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Lr(r, a) {
      {
        var i = function() {
          Fe || (Fe = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ur = function(r, a, i, u, d, b, y) {
      var v = {
        $$typeof: t,
        type: r,
        key: a,
        ref: i,
        props: y,
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function zr(r, a, i, u, d) {
      {
        var b, y = {}, v = null, T = null;
        i !== void 0 && (Ie(i), v = "" + i), Dr(a) && (Ie(a.key), v = "" + a.key), Fr(a) && (T = a.ref, Mr(a, d));
        for (b in a)
          z.call(a, b) && !kr.hasOwnProperty(b) && (y[b] = a[b]);
        if (r && r.defaultProps) {
          var _ = r.defaultProps;
          for (b in _)
            y[b] === void 0 && (y[b] = _[b]);
        }
        if (v || T) {
          var m = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          v && Nr(y, m), T && Lr(y, m);
        }
        return Ur(r, v, T, d, u, D.current, y);
      }
    }
    var X = C.ReactCurrentOwner, De = C.ReactDebugCurrentFrame;
    function I(r) {
      if (r) {
        var a = r._owner, i = U(r.type, r._source, a ? a.type : null);
        De.setExtraStackFrame(i);
      } else
        De.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Me() {
      {
        if (X.current) {
          var r = E(X.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Br(r) {
      {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + a + ":" + i + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function Gr(r) {
      {
        var a = Me();
        if (!a) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function Le(r, a) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Gr(a);
        if (Ne[i])
          return;
        Ne[i] = !0;
        var u = "";
        r && r._owner && r._owner !== X.current && (u = " It was passed a child from " + E(r._owner.type) + "."), I(r), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), I(null);
      }
    }
    function Ue(r, a) {
      {
        if (typeof r != "object")
          return;
        if (q(r))
          for (var i = 0; i < r.length; i++) {
            var u = r[i];
            Q(u) && Le(u, a);
          }
        else if (Q(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var d = be(r);
          if (typeof d == "function" && d !== r.entries)
            for (var b = d.call(r), y; !(y = b.next()).done; )
              Q(y.value) && Le(y.value, a);
        }
      }
    }
    function Wr(r) {
      {
        var a = r.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === $))
          i = a.propTypes;
        else
          return;
        if (i) {
          var u = E(a);
          xr(i, r.props, "prop", u, r);
        } else if (a.PropTypes !== void 0 && !Z) {
          Z = !0;
          var d = E(a);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vr(r) {
      {
        for (var a = Object.keys(r.props), i = 0; i < a.length; i++) {
          var u = a[i];
          if (u !== "children" && u !== "key") {
            I(r), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), I(null);
            break;
          }
        }
        r.ref !== null && (I(r), O("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function ze(r, a, i, u, d, b) {
      {
        var y = Tr(r);
        if (!y) {
          var v = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Br(d);
          T ? v += T : v += Me();
          var _;
          r === null ? _ = "null" : q(r) ? _ = "array" : r !== void 0 && r.$$typeof === t ? (_ = "<" + (E(r.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof r, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, v);
        }
        var m = zr(r, a, i, d, b);
        if (m == null)
          return m;
        if (y) {
          var j = a.children;
          if (j !== void 0)
            if (u)
              if (q(j)) {
                for (var k = 0; k < j.length; k++)
                  Ue(j[k], r);
                Object.freeze && Object.freeze(j);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(j, r);
        }
        return r === o ? Vr(m) : Wr(m), m;
      }
    }
    function Kr(r, a, i) {
      return ze(r, a, i, !0);
    }
    function Yr(r, a, i) {
      return ze(r, a, i, !1);
    }
    var Hr = Yr, qr = Kr;
    Ze.Fragment = o, Ze.jsx = Hr, Ze.jsxs = qr;
  }()), Ze;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ks() : e.exports = Ys();
})(Bn);
Bn.exports.jsx;
const Hs = () => {
  const e = W.useRef(!1);
  return W.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, qs = (e) => {
  const t = Hs(), [n, o] = W.useState(e), s = W.useCallback(
    (f) => {
      t.current && o(f);
    },
    [t]
  );
  return [n, s];
};
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Js = typeof Qe == "object" && Qe && Qe.Object === Object && Qe, Gn = Js, Xs = Gn, Zs = typeof self == "object" && self && self.Object === Object && self, Qs = Xs || Zs || Function("return this")(), M = Qs, ec = M, rc = ec.Symbol, dt = rc, Wt = dt, Wn = Object.prototype, tc = Wn.hasOwnProperty, nc = Wn.toString, Ve = Wt ? Wt.toStringTag : void 0;
function ac(e) {
  var t = tc.call(e, Ve), n = e[Ve];
  try {
    e[Ve] = void 0;
    var o = !0;
  } catch {
  }
  var s = nc.call(e);
  return o && (t ? e[Ve] = n : delete e[Ve]), s;
}
var oc = ac, ic = Object.prototype, sc = ic.toString;
function cc(e) {
  return sc.call(e);
}
var uc = cc, Vt = dt, fc = oc, lc = uc, pc = "[object Null]", vc = "[object Undefined]", Kt = Vt ? Vt.toStringTag : void 0;
function yc(e) {
  return e == null ? e === void 0 ? vc : pc : Kt && Kt in Object(e) ? fc(e) : lc(e);
}
var ht = yc;
function dc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vn = dc, hc = ht, gc = Vn, bc = "[object AsyncFunction]", _c = "[object Function]", mc = "[object GeneratorFunction]", $c = "[object Proxy]";
function Oc(e) {
  if (!gc(e))
    return !1;
  var t = hc(e);
  return t == _c || t == mc || t == bc || t == $c;
}
var Tc = Oc, wc = M, jc = wc["__core-js_shared__"], Sc = jc, Xr = Sc, Yt = function() {
  var e = /[^.]+$/.exec(Xr && Xr.keys && Xr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Pc(e) {
  return !!Yt && Yt in e;
}
var Cc = Pc, Ec = Function.prototype, xc = Ec.toString;
function Rc(e) {
  if (e != null) {
    try {
      return xc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kn = Rc, Ac = Tc, Ic = Cc, kc = Vn, Fc = Kn, Dc = /[\\^$.*+?()[\]{}|]/g, Mc = /^\[object .+?Constructor\]$/, Nc = Function.prototype, Lc = Object.prototype, Uc = Nc.toString, zc = Lc.hasOwnProperty, Bc = RegExp(
  "^" + Uc.call(zc).replace(Dc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gc(e) {
  if (!kc(e) || Ic(e))
    return !1;
  var t = Ac(e) ? Bc : Mc;
  return t.test(Fc(e));
}
var Wc = Gc;
function Vc(e, t) {
  return e == null ? void 0 : e[t];
}
var Kc = Vc, Yc = Wc, Hc = Kc;
function qc(e, t) {
  var n = Hc(e, t);
  return Yc(n) ? n : void 0;
}
var ee = qc, Jc = ee, Xc = M, Zc = Jc(Xc, "Map"), Qc = Zc, eu = ee;
eu(Object, "create");
var ru = ee;
(function() {
  try {
    var e = ru(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function tu(e) {
  return e != null && typeof e == "object";
}
var Yn = tu, nu = ht, au = Yn, ou = "[object Arguments]";
function iu(e) {
  return au(e) && nu(e) == ou;
}
var su = iu, Ht = su, cu = Yn, Hn = Object.prototype, uu = Hn.hasOwnProperty, fu = Hn.propertyIsEnumerable;
Ht(function() {
  return arguments;
}());
var tr = { exports: {} };
function lu() {
  return !1;
}
var pu = lu;
(function(e, t) {
  var n = M, o = pu, s = t && !t.nodeType && t, f = s && !0 && e && !e.nodeType && e, p = f && f.exports === s, l = p ? n.Buffer : void 0, c = l ? l.isBuffer : void 0, g = c || o;
  e.exports = g;
})(tr, tr.exports);
var qe = { exports: {} };
(function(e, t) {
  var n = Gn, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, p = f && n.process, l = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || p && p.binding && p.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(qe, qe.exports);
var qt = qe.exports;
qt && qt.isTypedArray;
tr.exports;
var ot = { exports: {} };
(function(e, t) {
  var n = M, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, p = f ? n.Buffer : void 0, l = p ? p.allocUnsafe : void 0;
  function c(g, h) {
    if (h)
      return g.slice();
    var $ = g.length, w = l ? l($) : new g.constructor($);
    return g.copy(w), w;
  }
  e.exports = c;
})(ot, ot.exports);
var vu = ee, yu = M, du = vu(yu, "DataView"), hu = du, gu = ee, bu = M, _u = gu(bu, "Promise"), mu = _u, $u = ee, Ou = M, Tu = $u(Ou, "Set"), wu = Tu, ju = ee, Su = M, Pu = ju(Su, "WeakMap"), Cu = Pu, it = hu, st = Qc, ct = mu, ut = wu, ft = Cu, qn = ht, le = Kn, Jt = "[object Map]", Eu = "[object Object]", Xt = "[object Promise]", Zt = "[object Set]", Qt = "[object WeakMap]", en = "[object DataView]", xu = le(it), Ru = le(st), Au = le(ct), Iu = le(ut), ku = le(ft), oe = qn;
(it && oe(new it(new ArrayBuffer(1))) != en || st && oe(new st()) != Jt || ct && oe(ct.resolve()) != Xt || ut && oe(new ut()) != Zt || ft && oe(new ft()) != Qt) && (oe = function(e) {
  var t = qn(e), n = t == Eu ? e.constructor : void 0, o = n ? le(n) : "";
  if (o)
    switch (o) {
      case xu:
        return en;
      case Ru:
        return Jt;
      case Au:
        return Xt;
      case Iu:
        return Zt;
      case ku:
        return Qt;
    }
  return t;
});
var Fu = M;
Fu.Uint8Array;
var rn = dt, tn = rn ? rn.prototype : void 0;
tn && tn.valueOf;
var nn = qe.exports;
nn && nn.isMap;
var an = qe.exports;
an && an.isSet;
ot.exports;
tr.exports;
var Du = Function.prototype, Mu = Du.toString;
Mu.call(Object);
const Nu = (e, t) => {
  const n = {}, o = Object.keys(e), s = o.length;
  let f = 0;
  for (; f < s; ) {
    const p = o[f];
    if (t.indexOf(p) > -1 || !Object.prototype.hasOwnProperty.call(e, p)) {
      f++;
      continue;
    }
    n[p] = e[p], f++;
  }
  return n;
};
var er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lu(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Uu = Lu, zu = typeof er == "object" && er && er.Object === Object && er, Jn = zu, Bu = Jn, Gu = typeof self == "object" && self && self.Object === Object && self, Wu = Bu || Gu || Function("return this")(), pe = Wu, Vu = pe, Ku = Vu.Symbol, cr = Ku, on = cr, Xn = Object.prototype, Yu = Xn.hasOwnProperty, Hu = Xn.toString, Ke = on ? on.toStringTag : void 0;
function qu(e) {
  var t = Yu.call(e, Ke), n = e[Ke];
  try {
    e[Ke] = void 0;
    var o = !0;
  } catch {
  }
  var s = Hu.call(e);
  return o && (t ? e[Ke] = n : delete e[Ke]), s;
}
var Ju = qu, Xu = Object.prototype, Zu = Xu.toString;
function Qu(e) {
  return Zu.call(e);
}
var ef = Qu, sn = cr, rf = Ju, tf = ef, nf = "[object Null]", af = "[object Undefined]", cn = sn ? sn.toStringTag : void 0;
function of(e) {
  return e == null ? e === void 0 ? af : nf : cn && cn in Object(e) ? rf(e) : tf(e);
}
var Je = of;
function sf(e) {
  return e != null && typeof e == "object";
}
var ve = sf, cf = Je, uf = ve, ff = "[object Arguments]";
function lf(e) {
  return uf(e) && cf(e) == ff;
}
var pf = lf, un = pf, vf = ve, Zn = Object.prototype, yf = Zn.hasOwnProperty, df = Zn.propertyIsEnumerable, hf = un(function() {
  return arguments;
}()) ? un : function(e) {
  return vf(e) && yf.call(e, "callee") && !df.call(e, "callee");
}, ur = hf, gf = Array.isArray, re = gf, nr = { exports: {} };
function bf() {
  return !1;
}
var _f = bf;
(function(e, t) {
  var n = pe, o = _f, s = t && !t.nodeType && t, f = s && !0 && e && !e.nodeType && e, p = f && f.exports === s, l = p ? n.Buffer : void 0, c = l ? l.isBuffer : void 0, g = c || o;
  e.exports = g;
})(nr, nr.exports);
var mf = 9007199254740991, $f = /^(?:0|[1-9]\d*)$/;
function Of(e, t) {
  var n = typeof e;
  return t = t == null ? mf : t, !!t && (n == "number" || n != "symbol" && $f.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var fr = Of, Tf = 9007199254740991;
function wf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tf;
}
var gt = wf, jf = Je, Sf = gt, Pf = ve, Cf = "[object Arguments]", Ef = "[object Array]", xf = "[object Boolean]", Rf = "[object Date]", Af = "[object Error]", If = "[object Function]", kf = "[object Map]", Ff = "[object Number]", Df = "[object Object]", Mf = "[object RegExp]", Nf = "[object Set]", Lf = "[object String]", Uf = "[object WeakMap]", zf = "[object ArrayBuffer]", Bf = "[object DataView]", Gf = "[object Float32Array]", Wf = "[object Float64Array]", Vf = "[object Int8Array]", Kf = "[object Int16Array]", Yf = "[object Int32Array]", Hf = "[object Uint8Array]", qf = "[object Uint8ClampedArray]", Jf = "[object Uint16Array]", Xf = "[object Uint32Array]", S = {};
S[Gf] = S[Wf] = S[Vf] = S[Kf] = S[Yf] = S[Hf] = S[qf] = S[Jf] = S[Xf] = !0;
S[Cf] = S[Ef] = S[zf] = S[xf] = S[Bf] = S[Rf] = S[Af] = S[If] = S[kf] = S[Ff] = S[Df] = S[Mf] = S[Nf] = S[Lf] = S[Uf] = !1;
function Zf(e) {
  return Pf(e) && Sf(e.length) && !!S[jf(e)];
}
var Qf = Zf;
function el(e) {
  return function(t) {
    return e(t);
  };
}
var rl = el, lt = { exports: {} };
(function(e, t) {
  var n = Jn, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, p = f && n.process, l = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || p && p.binding && p.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(lt, lt.exports);
var tl = Qf, nl = rl, fn = lt.exports, ln = fn && fn.isTypedArray, al = ln ? nl(ln) : tl, Qn = al, ol = Uu, il = ur, sl = re, cl = nr.exports, ul = fr, fl = Qn, ll = Object.prototype, pl = ll.hasOwnProperty;
function vl(e, t) {
  var n = sl(e), o = !n && il(e), s = !n && !o && cl(e), f = !n && !o && !s && fl(e), p = n || o || s || f, l = p ? ol(e.length, String) : [], c = l.length;
  for (var g in e)
    (t || pl.call(e, g)) && !(p && (g == "length" || s && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || ul(g, c))) && l.push(g);
  return l;
}
var ea = vl, yl = Object.prototype;
function dl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || yl;
  return e === n;
}
var bt = dl;
function hl(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ra = hl, gl = ra, bl = gl(Object.keys, Object), _l = bl, ml = bt, $l = _l, Ol = Object.prototype, Tl = Ol.hasOwnProperty;
function wl(e) {
  if (!ml(e))
    return $l(e);
  var t = [];
  for (var n in Object(e))
    Tl.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var jl = wl;
function Sl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var V = Sl, Pl = Je, Cl = V, El = "[object AsyncFunction]", xl = "[object Function]", Rl = "[object GeneratorFunction]", Al = "[object Proxy]";
function Il(e) {
  if (!Cl(e))
    return !1;
  var t = Pl(e);
  return t == xl || t == Rl || t == El || t == Al;
}
var _t = Il, kl = _t, Fl = gt;
function Dl(e) {
  return e != null && Fl(e.length) && !kl(e);
}
var lr = Dl, Ml = ea, Nl = jl, Ll = lr;
function Ul(e) {
  return Ll(e) ? Ml(e) : Nl(e);
}
var zl = Ul;
function Bl() {
  this.__data__ = [], this.size = 0;
}
var Gl = Bl;
function Wl(e, t) {
  return e === t || e !== e && t !== t;
}
var pr = Wl, Vl = pr;
function Kl(e, t) {
  for (var n = e.length; n--; )
    if (Vl(e[n][0], t))
      return n;
  return -1;
}
var vr = Kl, Yl = vr, Hl = Array.prototype, ql = Hl.splice;
function Jl(e) {
  var t = this.__data__, n = Yl(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : ql.call(t, n, 1), --this.size, !0;
}
var Xl = Jl, Zl = vr;
function Ql(e) {
  var t = this.__data__, n = Zl(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var ep = Ql, rp = vr;
function tp(e) {
  return rp(this.__data__, e) > -1;
}
var np = tp, ap = vr;
function op(e, t) {
  var n = this.__data__, o = ap(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
var ip = op, sp = Gl, cp = Xl, up = ep, fp = np, lp = ip;
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ye.prototype.clear = sp;
ye.prototype.delete = cp;
ye.prototype.get = up;
ye.prototype.has = fp;
ye.prototype.set = lp;
var yr = ye, pp = yr;
function vp() {
  this.__data__ = new pp(), this.size = 0;
}
var yp = vp;
function dp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var hp = dp;
function gp(e) {
  return this.__data__.get(e);
}
var bp = gp;
function _p(e) {
  return this.__data__.has(e);
}
var mp = _p, $p = pe, Op = $p["__core-js_shared__"], Tp = Op, Zr = Tp, pn = function() {
  var e = /[^.]+$/.exec(Zr && Zr.keys && Zr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wp(e) {
  return !!pn && pn in e;
}
var jp = wp, Sp = Function.prototype, Pp = Sp.toString;
function Cp(e) {
  if (e != null) {
    try {
      return Pp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ep = Cp, xp = _t, Rp = jp, Ap = V, Ip = Ep, kp = /[\\^$.*+?()[\]{}|]/g, Fp = /^\[object .+?Constructor\]$/, Dp = Function.prototype, Mp = Object.prototype, Np = Dp.toString, Lp = Mp.hasOwnProperty, Up = RegExp(
  "^" + Np.call(Lp).replace(kp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zp(e) {
  if (!Ap(e) || Rp(e))
    return !1;
  var t = xp(e) ? Up : Fp;
  return t.test(Ip(e));
}
var Bp = zp;
function Gp(e, t) {
  return e == null ? void 0 : e[t];
}
var Wp = Gp, Vp = Bp, Kp = Wp;
function Yp(e, t) {
  var n = Kp(e, t);
  return Vp(n) ? n : void 0;
}
var mt = Yp, Hp = mt, qp = pe, Jp = Hp(qp, "Map"), ta = Jp, Xp = mt, Zp = Xp(Object, "create"), dr = Zp, vn = dr;
function Qp() {
  this.__data__ = vn ? vn(null) : {}, this.size = 0;
}
var ev = Qp;
function rv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tv = rv, nv = dr, av = "__lodash_hash_undefined__", ov = Object.prototype, iv = ov.hasOwnProperty;
function sv(e) {
  var t = this.__data__;
  if (nv) {
    var n = t[e];
    return n === av ? void 0 : n;
  }
  return iv.call(t, e) ? t[e] : void 0;
}
var cv = sv, uv = dr, fv = Object.prototype, lv = fv.hasOwnProperty;
function pv(e) {
  var t = this.__data__;
  return uv ? t[e] !== void 0 : lv.call(t, e);
}
var vv = pv, yv = dr, dv = "__lodash_hash_undefined__";
function hv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = yv && t === void 0 ? dv : t, this;
}
var gv = hv, bv = ev, _v = tv, mv = cv, $v = vv, Ov = gv;
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = bv;
de.prototype.delete = _v;
de.prototype.get = mv;
de.prototype.has = $v;
de.prototype.set = Ov;
var Tv = de, yn = Tv, wv = yr, jv = ta;
function Sv() {
  this.size = 0, this.__data__ = {
    hash: new yn(),
    map: new (jv || wv)(),
    string: new yn()
  };
}
var Pv = Sv;
function Cv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ev = Cv, xv = Ev;
function Rv(e, t) {
  var n = e.__data__;
  return xv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var hr = Rv, Av = hr;
function Iv(e) {
  var t = Av(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var kv = Iv, Fv = hr;
function Dv(e) {
  return Fv(this, e).get(e);
}
var Mv = Dv, Nv = hr;
function Lv(e) {
  return Nv(this, e).has(e);
}
var Uv = Lv, zv = hr;
function Bv(e, t) {
  var n = zv(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
var Gv = Bv, Wv = Pv, Vv = kv, Kv = Mv, Yv = Uv, Hv = Gv;
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = Wv;
he.prototype.delete = Vv;
he.prototype.get = Kv;
he.prototype.has = Yv;
he.prototype.set = Hv;
var na = he, qv = yr, Jv = ta, Xv = na, Zv = 200;
function Qv(e, t) {
  var n = this.__data__;
  if (n instanceof qv) {
    var o = n.__data__;
    if (!Jv || o.length < Zv - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Xv(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
var ey = Qv, ry = yr, ty = yp, ny = hp, ay = bp, oy = mp, iy = ey;
function ge(e) {
  var t = this.__data__ = new ry(e);
  this.size = t.size;
}
ge.prototype.clear = ty;
ge.prototype.delete = ny;
ge.prototype.get = ay;
ge.prototype.has = oy;
ge.prototype.set = iy;
var sy = ge, cy = mt, uy = function() {
  try {
    var e = cy(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), aa = uy, dn = aa;
function fy(e, t, n) {
  t == "__proto__" && dn ? dn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var $t = fy, ly = $t, py = pr;
function vy(e, t, n) {
  (n !== void 0 && !py(e[t], n) || n === void 0 && !(t in e)) && ly(e, t, n);
}
var oa = vy;
function yy(e) {
  return function(t, n, o) {
    for (var s = -1, f = Object(t), p = o(t), l = p.length; l--; ) {
      var c = p[e ? l : ++s];
      if (n(f[c], c, f) === !1)
        break;
    }
    return t;
  };
}
var dy = yy, hy = dy, gy = hy(), by = gy, pt = { exports: {} };
(function(e, t) {
  var n = pe, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, p = f ? n.Buffer : void 0, l = p ? p.allocUnsafe : void 0;
  function c(g, h) {
    if (h)
      return g.slice();
    var $ = g.length, w = l ? l($) : new g.constructor($);
    return g.copy(w), w;
  }
  e.exports = c;
})(pt, pt.exports);
var _y = pe, my = _y.Uint8Array, $y = my, hn = $y;
function Oy(e) {
  var t = new e.constructor(e.byteLength);
  return new hn(t).set(new hn(e)), t;
}
var Ty = Oy, wy = Ty;
function jy(e, t) {
  var n = t ? wy(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Sy = jy;
function Py(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var Cy = Py, Ey = V, gn = Object.create, xy = function() {
  function e() {
  }
  return function(t) {
    if (!Ey(t))
      return {};
    if (gn)
      return gn(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), Ry = xy, Ay = ra, Iy = Ay(Object.getPrototypeOf, Object), ia = Iy, ky = Ry, Fy = ia, Dy = bt;
function My(e) {
  return typeof e.constructor == "function" && !Dy(e) ? ky(Fy(e)) : {};
}
var Ny = My, Ly = lr, Uy = ve;
function zy(e) {
  return Uy(e) && Ly(e);
}
var By = zy, Gy = Je, Wy = ia, Vy = ve, Ky = "[object Object]", Yy = Function.prototype, Hy = Object.prototype, sa = Yy.toString, qy = Hy.hasOwnProperty, Jy = sa.call(Object);
function Xy(e) {
  if (!Vy(e) || Gy(e) != Ky)
    return !1;
  var t = Wy(e);
  if (t === null)
    return !0;
  var n = qy.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && sa.call(n) == Jy;
}
var Zy = Xy;
function Qy(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ca = Qy, ed = $t, rd = pr, td = Object.prototype, nd = td.hasOwnProperty;
function ad(e, t, n) {
  var o = e[t];
  (!(nd.call(e, t) && rd(o, n)) || n === void 0 && !(t in e)) && ed(e, t, n);
}
var ua = ad, od = ua, id = $t;
function sd(e, t, n, o) {
  var s = !n;
  n || (n = {});
  for (var f = -1, p = t.length; ++f < p; ) {
    var l = t[f], c = o ? o(n[l], e[l], l, n, e) : void 0;
    c === void 0 && (c = e[l]), s ? id(n, l, c) : od(n, l, c);
  }
  return n;
}
var cd = sd;
function ud(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var fd = ud, ld = V, pd = bt, vd = fd, yd = Object.prototype, dd = yd.hasOwnProperty;
function hd(e) {
  if (!ld(e))
    return vd(e);
  var t = pd(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !dd.call(e, o)) || n.push(o);
  return n;
}
var gd = hd, bd = ea, _d = gd, md = lr;
function $d(e) {
  return md(e) ? bd(e, !0) : _d(e);
}
var fa = $d, Od = cd, Td = fa;
function wd(e) {
  return Od(e, Td(e));
}
var jd = wd, bn = oa, Sd = pt.exports, Pd = Sy, Cd = Cy, Ed = Ny, _n = ur, mn = re, xd = By, Rd = nr.exports, Ad = _t, Id = V, kd = Zy, Fd = Qn, $n = ca, Dd = jd;
function Md(e, t, n, o, s, f, p) {
  var l = $n(e, n), c = $n(t, n), g = p.get(c);
  if (g) {
    bn(e, n, g);
    return;
  }
  var h = f ? f(l, c, n + "", e, t, p) : void 0, $ = h === void 0;
  if ($) {
    var w = mn(c), P = !w && Rd(c), R = !w && !P && Fd(c);
    h = c, w || P || R ? mn(l) ? h = l : xd(l) ? h = Cd(l) : P ? ($ = !1, h = Sd(c, !0)) : R ? ($ = !1, h = Pd(c, !0)) : h = [] : kd(c) || _n(c) ? (h = l, _n(l) ? h = Dd(l) : (!Id(l) || Ad(l)) && (h = Ed(c))) : $ = !1;
  }
  $ && (p.set(c, h), s(h, c, o, f, p), p.delete(c)), bn(e, n, h);
}
var Nd = Md, Ld = sy, Ud = oa, zd = by, Bd = Nd, Gd = V, Wd = fa, Vd = ca;
function la(e, t, n, o, s) {
  e !== t && zd(t, function(f, p) {
    if (s || (s = new Ld()), Gd(f))
      Bd(e, t, p, n, la, o, s);
    else {
      var l = o ? o(Vd(e, p), f, p + "", e, t, s) : void 0;
      l === void 0 && (l = f), Ud(e, p, l);
    }
  }, Wd);
}
var Kd = la;
function Yd(e) {
  return e;
}
var pa = Yd;
function Hd(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var qd = Hd, Jd = qd, On = Math.max;
function Xd(e, t, n) {
  return t = On(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, f = On(o.length - t, 0), p = Array(f); ++s < f; )
      p[s] = o[t + s];
    s = -1;
    for (var l = Array(t + 1); ++s < t; )
      l[s] = o[s];
    return l[t] = n(p), Jd(e, this, l);
  };
}
var va = Xd;
function Zd(e) {
  return function() {
    return e;
  };
}
var Qd = Zd, eh = Qd, Tn = aa, rh = pa, th = Tn ? function(e, t) {
  return Tn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: eh(t),
    writable: !0
  });
} : rh, nh = th, ah = 800, oh = 16, ih = Date.now;
function sh(e) {
  var t = 0, n = 0;
  return function() {
    var o = ih(), s = oh - (o - n);
    if (n = o, s > 0) {
      if (++t >= ah)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var ch = sh, uh = nh, fh = ch, lh = fh(uh), ya = lh, ph = pa, vh = va, yh = ya;
function dh(e, t) {
  return yh(vh(e, t, ph), e + "");
}
var hh = dh, gh = pr, bh = lr, _h = fr, mh = V;
function $h(e, t, n) {
  if (!mh(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? bh(n) && _h(t, n.length) : o == "string" && t in n) ? gh(n[t], e) : !1;
}
var Oh = $h, Th = hh, wh = Oh;
function jh(e) {
  return Th(function(t, n) {
    var o = -1, s = n.length, f = s > 1 ? n[s - 1] : void 0, p = s > 2 ? n[2] : void 0;
    for (f = e.length > 3 && typeof f == "function" ? (s--, f) : void 0, p && wh(n[0], n[1], p) && (f = s < 3 ? void 0 : f, s = 1), t = Object(t); ++o < s; ) {
      var l = n[o];
      l && e(t, l, o, f);
    }
    return t;
  });
}
var Sh = jh, Ph = Kd, Ch = Sh, Eh = Ch(function(e, t, n) {
  Ph(e, t, n);
}), xh = Eh, Rh = Je, Ah = ve, Ih = "[object Symbol]";
function kh(e) {
  return typeof e == "symbol" || Ah(e) && Rh(e) == Ih;
}
var Ot = kh, Fh = re, Dh = Ot, Mh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nh = /^\w*$/;
function Lh(e, t) {
  if (Fh(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Dh(e) ? !0 : Nh.test(e) || !Mh.test(e) || t != null && e in Object(t);
}
var Uh = Lh, da = na, zh = "Expected a function";
function Tt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zh);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], f = n.cache;
    if (f.has(s))
      return f.get(s);
    var p = e.apply(this, o);
    return n.cache = f.set(s, p) || f, p;
  };
  return n.cache = new (Tt.Cache || da)(), n;
}
Tt.Cache = da;
var Bh = Tt, Gh = Bh, Wh = 500;
function Vh(e) {
  var t = Gh(e, function(o) {
    return n.size === Wh && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Kh = Vh, Yh = Kh, Hh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qh = /\\(\\)?/g, Jh = Yh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Hh, function(n, o, s, f) {
    t.push(s ? f.replace(qh, "$1") : o || n);
  }), t;
}), Xh = Jh;
function Zh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var Qh = Zh, wn = cr, eg = Qh, rg = re, tg = Ot, ng = 1 / 0, jn = wn ? wn.prototype : void 0, Sn = jn ? jn.toString : void 0;
function ha(e) {
  if (typeof e == "string")
    return e;
  if (rg(e))
    return eg(e, ha) + "";
  if (tg(e))
    return Sn ? Sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ng ? "-0" : t;
}
var ag = ha, og = ag;
function ig(e) {
  return e == null ? "" : og(e);
}
var sg = ig, cg = re, ug = Uh, fg = Xh, lg = sg;
function pg(e, t) {
  return cg(e) ? e : ug(e, t) ? [e] : fg(lg(e));
}
var gr = pg, vg = Ot, yg = 1 / 0;
function dg(e) {
  if (typeof e == "string" || vg(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yg ? "-0" : t;
}
var wt = dg, hg = gr, gg = wt;
function bg(e, t) {
  t = hg(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[gg(t[n++])];
  return n && n == o ? e : void 0;
}
var _g = bg, mg = ua, $g = gr, Og = fr, Pn = V, Tg = wt;
function wg(e, t, n, o) {
  if (!Pn(e))
    return e;
  t = $g(t, e);
  for (var s = -1, f = t.length, p = f - 1, l = e; l != null && ++s < f; ) {
    var c = Tg(t[s]), g = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (s != p) {
      var h = l[c];
      g = o ? o(h, c, l) : void 0, g === void 0 && (g = Pn(h) ? h : Og(t[s + 1]) ? [] : {});
    }
    mg(l, c, g), l = l[c];
  }
  return e;
}
var jg = wg, Sg = _g, Pg = jg, Cg = gr;
function Eg(e, t, n) {
  for (var o = -1, s = t.length, f = {}; ++o < s; ) {
    var p = t[o], l = Sg(e, p);
    n(l, p) && Pg(f, Cg(p, e), l);
  }
  return f;
}
var xg = Eg;
function Rg(e, t) {
  return e != null && t in Object(e);
}
var Ag = Rg, Ig = gr, kg = ur, Fg = re, Dg = fr, Mg = gt, Ng = wt;
function Lg(e, t, n) {
  t = Ig(t, e);
  for (var o = -1, s = t.length, f = !1; ++o < s; ) {
    var p = Ng(t[o]);
    if (!(f = e != null && n(e, p)))
      break;
    e = e[p];
  }
  return f || ++o != s ? f : (s = e == null ? 0 : e.length, !!s && Mg(s) && Dg(p, s) && (Fg(e) || kg(e)));
}
var Ug = Lg, zg = Ag, Bg = Ug;
function Gg(e, t) {
  return e != null && Bg(e, t, zg);
}
var Wg = Gg, Vg = xg, Kg = Wg;
function Yg(e, t) {
  return Vg(e, t, function(n, o) {
    return Kg(e, o);
  });
}
var Hg = Yg;
function qg(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var Jg = qg, Cn = cr, Xg = ur, Zg = re, En = Cn ? Cn.isConcatSpreadable : void 0;
function Qg(e) {
  return Zg(e) || Xg(e) || !!(En && e && e[En]);
}
var eb = Qg, rb = Jg, tb = eb;
function ga(e, t, n, o, s) {
  var f = -1, p = e.length;
  for (n || (n = tb), s || (s = []); ++f < p; ) {
    var l = e[f];
    t > 0 && n(l) ? t > 1 ? ga(l, t - 1, n, o, s) : rb(s, l) : o || (s[s.length] = l);
  }
  return s;
}
var nb = ga, ab = nb;
function ob(e) {
  var t = e == null ? 0 : e.length;
  return t ? ab(e, 1) : [];
}
var ib = ob, sb = ib, cb = va, ub = ya;
function fb(e) {
  return ub(cb(e, void 0, sb), e + "");
}
var lb = fb, pb = Hg, vb = lb, yb = vb(function(e, t) {
  return e == null ? {} : pb(e, t);
}), db = yb, ba = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function hb() {
  if (xn)
    return Ye;
  xn = 1;
  var e = W, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(l, c, g) {
    var h, $ = {}, w = null, P = null;
    g !== void 0 && (w = "" + g), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (h in c)
      o.call(c, h) && !f.hasOwnProperty(h) && ($[h] = c[h]);
    if (l && l.defaultProps)
      for (h in c = l.defaultProps, c)
        $[h] === void 0 && ($[h] = c[h]);
    return { $$typeof: t, type: l, key: w, ref: P, props: $, _owner: s.current };
  }
  return Ye.Fragment = n, Ye.jsx = p, Ye.jsxs = p, Ye;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function gb() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = W, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), R = Symbol.iterator, te = "@@iterator";
    function be(r) {
      if (r === null || typeof r != "object")
        return null;
      var a = R && r[R] || r[te];
      return typeof a == "function" ? a : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(r) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
          i[u - 1] = arguments[u];
        ne("error", r, i);
      }
    }
    function ne(r, a, i) {
      {
        var u = C.ReactDebugCurrentFrame, d = u.getStackAddendum();
        d !== "" && (a += "%s", i = i.concat([d]));
        var b = i.map(function(y) {
          return String(y);
        });
        b.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, b);
      }
    }
    var br = !1, _r = !1, mr = !1, $r = !1, Or = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Tr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === f || Or || r === s || r === g || r === h || $r || r === P || br || _r || mr || typeof r == "object" && r !== null && (r.$$typeof === w || r.$$typeof === $ || r.$$typeof === p || r.$$typeof === l || r.$$typeof === c || r.$$typeof === _e || r.getModuleId !== void 0));
    }
    function wr(r, a, i) {
      var u = r.displayName;
      if (u)
        return u;
      var d = a.displayName || a.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function E(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            var a = r;
            return me(a) + ".Consumer";
          case p:
            var i = r;
            return me(i._context) + ".Provider";
          case c:
            return wr(r, r.render, "ForwardRef");
          case $:
            var u = r.displayName || null;
            return u !== null ? u : E(r.type) || "Memo";
          case w: {
            var d = r, b = d._payload, y = d._init;
            try {
              return E(y(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, F = 0, $e, Oe, Te, we, je, Se, Pe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function jr() {
      {
        if (F === 0) {
          $e = console.log, Oe = console.info, Te = console.warn, we = console.error, je = console.group, Se = console.groupCollapsed, Pe = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        F++;
      }
    }
    function Sr() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: $e
            }),
            info: A({}, r, {
              value: Oe
            }),
            warn: A({}, r, {
              value: Te
            }),
            error: A({}, r, {
              value: we
            }),
            group: A({}, r, {
              value: je
            }),
            groupCollapsed: A({}, r, {
              value: Se
            }),
            groupEnd: A({}, r, {
              value: Pe
            })
          });
        }
        F < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = C.ReactCurrentDispatcher, Y;
    function N(r, a, i) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (d) {
            var u = d.stack.trim().match(/\n( *(at )?)/);
            Y = u && u[1] || "";
          }
        return `
` + Y + r;
      }
    }
    var H = !1, L;
    {
      var Pr = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Pr();
    }
    function Ee(r, a) {
      if (!r || H)
        return "";
      {
        var i = L.get(r);
        if (i !== void 0)
          return i;
      }
      var u;
      H = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = K.current, K.current = null, jr();
      try {
        if (a) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (x) {
              u = x;
            }
            Reflect.construct(r, [], y);
          } else {
            try {
              y.call();
            } catch (x) {
              u = x;
            }
            r.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            u = x;
          }
          r();
        }
      } catch (x) {
        if (x && u && typeof x.stack == "string") {
          for (var v = x.stack.split(`
`), T = u.stack.split(`
`), _ = v.length - 1, m = T.length - 1; _ >= 1 && m >= 0 && v[_] !== T[m]; )
            m--;
          for (; _ >= 1 && m >= 0; _--, m--)
            if (v[_] !== T[m]) {
              if (_ !== 1 || m !== 1)
                do
                  if (_--, m--, m < 0 || v[_] !== T[m]) {
                    var j = `
` + v[_].replace(" at new ", " at ");
                    return r.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", r.displayName)), typeof r == "function" && L.set(r, j), j;
                  }
                while (_ >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = b, Sr(), Error.prepareStackTrace = d;
      }
      var k = r ? r.displayName || r.name : "", Be = k ? N(k) : "";
      return typeof r == "function" && L.set(r, Be), Be;
    }
    function Cr(r, a, i) {
      return Ee(r, !1);
    }
    function Er(r) {
      var a = r.prototype;
      return !!(a && a.isReactComponent);
    }
    function U(r, a, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ee(r, Er(r));
      if (typeof r == "string")
        return N(r);
      switch (r) {
        case g:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return Cr(r.render);
          case $:
            return U(r.type, a, i);
          case w: {
            var u = r, d = u._payload, b = u._init;
            try {
              return U(b(d), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, xe = {}, Re = C.ReactDebugCurrentFrame;
    function B(r) {
      if (r) {
        var a = r._owner, i = U(r.type, r._source, a ? a.type : null);
        Re.setExtraStackFrame(i);
      } else
        Re.setExtraStackFrame(null);
    }
    function xr(r, a, i, u, d) {
      {
        var b = Function.call.bind(z);
        for (var y in r)
          if (b(r, y)) {
            var v = void 0;
            try {
              if (typeof r[y] != "function") {
                var T = Error((u || "React class") + ": " + i + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = r[y](a, y, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              v = _;
            }
            v && !(v instanceof Error) && (B(d), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, y, typeof v), B(null)), v instanceof Error && !(v.message in xe) && (xe[v.message] = !0, B(d), O("Failed %s type: %s", i, v.message), B(null));
          }
      }
    }
    var Rr = Array.isArray;
    function q(r) {
      return Rr(r);
    }
    function Ar(r) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function Ir(r) {
      try {
        return Ae(r), !1;
      } catch {
        return !0;
      }
    }
    function Ae(r) {
      return "" + r;
    }
    function Ie(r) {
      if (Ir(r))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(r)), Ae(r);
    }
    var D = C.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, Fe, J;
    J = {};
    function Fr(r) {
      if (z.call(r, "ref")) {
        var a = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Dr(r) {
      if (z.call(r, "key")) {
        var a = Object.getOwnPropertyDescriptor(r, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Mr(r, a) {
      if (typeof r.ref == "string" && D.current && a && D.current.stateNode !== a) {
        var i = E(D.current.type);
        J[i] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(D.current.type), r.ref), J[i] = !0);
      }
    }
    function Nr(r, a) {
      {
        var i = function() {
          ke || (ke = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Lr(r, a) {
      {
        var i = function() {
          Fe || (Fe = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ur = function(r, a, i, u, d, b, y) {
      var v = {
        $$typeof: t,
        type: r,
        key: a,
        ref: i,
        props: y,
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function zr(r, a, i, u, d) {
      {
        var b, y = {}, v = null, T = null;
        i !== void 0 && (Ie(i), v = "" + i), Dr(a) && (Ie(a.key), v = "" + a.key), Fr(a) && (T = a.ref, Mr(a, d));
        for (b in a)
          z.call(a, b) && !kr.hasOwnProperty(b) && (y[b] = a[b]);
        if (r && r.defaultProps) {
          var _ = r.defaultProps;
          for (b in _)
            y[b] === void 0 && (y[b] = _[b]);
        }
        if (v || T) {
          var m = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          v && Nr(y, m), T && Lr(y, m);
        }
        return Ur(r, v, T, d, u, D.current, y);
      }
    }
    var X = C.ReactCurrentOwner, De = C.ReactDebugCurrentFrame;
    function I(r) {
      if (r) {
        var a = r._owner, i = U(r.type, r._source, a ? a.type : null);
        De.setExtraStackFrame(i);
      } else
        De.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Me() {
      {
        if (X.current) {
          var r = E(X.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Br(r) {
      {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + a + ":" + i + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function Gr(r) {
      {
        var a = Me();
        if (!a) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function Le(r, a) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Gr(a);
        if (Ne[i])
          return;
        Ne[i] = !0;
        var u = "";
        r && r._owner && r._owner !== X.current && (u = " It was passed a child from " + E(r._owner.type) + "."), I(r), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), I(null);
      }
    }
    function Ue(r, a) {
      {
        if (typeof r != "object")
          return;
        if (q(r))
          for (var i = 0; i < r.length; i++) {
            var u = r[i];
            Q(u) && Le(u, a);
          }
        else if (Q(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var d = be(r);
          if (typeof d == "function" && d !== r.entries)
            for (var b = d.call(r), y; !(y = b.next()).done; )
              Q(y.value) && Le(y.value, a);
        }
      }
    }
    function Wr(r) {
      {
        var a = r.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === $))
          i = a.propTypes;
        else
          return;
        if (i) {
          var u = E(a);
          xr(i, r.props, "prop", u, r);
        } else if (a.PropTypes !== void 0 && !Z) {
          Z = !0;
          var d = E(a);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vr(r) {
      {
        for (var a = Object.keys(r.props), i = 0; i < a.length; i++) {
          var u = a[i];
          if (u !== "children" && u !== "key") {
            I(r), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), I(null);
            break;
          }
        }
        r.ref !== null && (I(r), O("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function ze(r, a, i, u, d, b) {
      {
        var y = Tr(r);
        if (!y) {
          var v = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Br(d);
          T ? v += T : v += Me();
          var _;
          r === null ? _ = "null" : q(r) ? _ = "array" : r !== void 0 && r.$$typeof === t ? (_ = "<" + (E(r.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof r, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, v);
        }
        var m = zr(r, a, i, d, b);
        if (m == null)
          return m;
        if (y) {
          var j = a.children;
          if (j !== void 0)
            if (u)
              if (q(j)) {
                for (var k = 0; k < j.length; k++)
                  Ue(j[k], r);
                Object.freeze && Object.freeze(j);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(j, r);
        }
        return r === o ? Vr(m) : Wr(m), m;
      }
    }
    function Kr(r, a, i) {
      return ze(r, a, i, !0);
    }
    function Yr(r, a, i) {
      return ze(r, a, i, !1);
    }
    var Hr = Yr, qr = Kr;
    He.Fragment = o, He.jsx = Hr, He.jsxs = qr;
  }()), He;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = hb() : e.exports = gb();
})(ba);
const An = ba.exports.jsx, _b = (e, t) => {
  const n = _a({
    theme: t.theme,
    setTheme: () => t.theme
  }), o = (c) => {
    const {
      theme: g,
      defaultTheme: h,
      onChange: $,
      children: w
    } = c, P = ma($);
    P.current = $;
    const [R, te] = qs(h || t.theme);
    $a(() => {
      var C;
      console.log("__DEV__:createThemeContext@useEffect", {
        theme: R
      }), (C = P.current) == null || C.call(P, R);
    }, [R]);
    const be = Oa((C) => {
      te((O) => {
        if (typeof C == "function") {
          const ne = C(O);
          return ne === null ? O : ne;
        } else
          return C;
      });
    }, [te]);
    return /* @__PURE__ */ An(n.Provider, {
      value: {
        theme: g || R,
        setTheme: be
      },
      children: w
    });
  }, s = (c) => {
    const g = Ta(n);
    if (g === void 0)
      throw new Error("Couldn't find a context object. Is your component inside ThemeProvider?");
    return wa(() => {
      const h = c || g.theme;
      return {
        ...t.theme === h ? e[h] : xh({}, e[t.theme], e[h]),
        theme: h,
        setTheme: g.setTheme
      };
    }, [g, c]);
  }, f = (c) => (g) => {
    const h = ($) => {
      const {
        theme: w,
        ...P
      } = $, R = s((c == null ? void 0 : c.theme) || w || (c == null ? void 0 : c.defaultTheme));
      return /* @__PURE__ */ An(g, {
        ...P,
        ...R
      });
    };
    return h.displayName = Vs(g), h;
  }, p = [...zl(e[t.theme]), "theme", "setTheme"];
  return [s, o, f, (c, g) => {
    const h = Nu(c, p);
    return Array.isArray(g) ? {
      ...h,
      ...db(c, g)
    } : h;
  }];
};
export {
  _b as createThemeContext
};
