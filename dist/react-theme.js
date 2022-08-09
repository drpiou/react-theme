import J, { createContext as Oa, useRef as Ta, useEffect as ja, useCallback as wa, useContext as Pa, useMemo as Sa } from "react";
var dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xa = typeof dr == "object" && dr && dr.Object === Object && dr, Dn = xa, Ca = Dn, Ea = typeof self == "object" && self && self.Object === Object && self, Ra = Ca || Ea || Function("return this")(), Y = Ra, Aa = Y, Ia = Aa.Symbol, mr = Ia, Pt = mr, Fn = Object.prototype, ka = Fn.hasOwnProperty, Da = Fn.toString, He = Pt ? Pt.toStringTag : void 0;
function Fa(e) {
  var r = ka.call(e, He), t = e[He];
  try {
    e[He] = void 0;
    var o = !0;
  } catch {
  }
  var s = Da.call(e);
  return o && (r ? e[He] = t : delete e[He]), s;
}
var Ma = Fa, Na = Object.prototype, La = Na.toString;
function Ua(e) {
  return La.call(e);
}
var Ba = Ua, St = mr, za = Ma, Ga = Ba, Wa = "[object Null]", Va = "[object Undefined]", xt = St ? St.toStringTag : void 0;
function Ya(e) {
  return e == null ? e === void 0 ? Va : Wa : xt && xt in Object(e) ? za(e) : Ga(e);
}
var pt = Ya;
function Ka(e) {
  return e != null && typeof e == "object";
}
var Mn = Ka, Ha = Function.prototype, qa = Ha.toString;
qa.call(Object);
var Ja = pt, Xa = Mn, Za = "[object Arguments]";
function Qa(e) {
  return Xa(e) && Ja(e) == Za;
}
var eo = Qa, Ct = eo, ro = Mn, Nn = Object.prototype, to = Nn.hasOwnProperty, no = Nn.propertyIsEnumerable;
Ct(function() {
  return arguments;
}());
var _r = { exports: {} };
function ao() {
  return !1;
}
var oo = ao;
(function(e, r) {
  var t = Y, o = oo, s = r && !r.nodeType && r, c = s && !0 && e && !e.nodeType && e, v = c && c.exports === s, u = v ? t.Buffer : void 0, f = u ? u.isBuffer : void 0, y = f || o;
  e.exports = y;
})(_r, _r.exports);
var Qr = { exports: {} };
(function(e, r) {
  var t = Dn, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, c = s && s.exports === o, v = c && t.process, u = function() {
    try {
      var f = s && s.require && s.require("util").types;
      return f || v && v.binding && v.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Qr, Qr.exports);
var Et = Qr.exports;
Et && Et.isTypedArray;
_r.exports;
function io(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Ln = io, so = pt, co = Ln, uo = "[object AsyncFunction]", fo = "[object Function]", lo = "[object GeneratorFunction]", vo = "[object Proxy]";
function po(e) {
  if (!co(e))
    return !1;
  var r = so(e);
  return r == fo || r == lo || r == uo || r == vo;
}
var yo = po;
function ho() {
  this.__data__ = [], this.size = 0;
}
var go = ho;
function _o(e, r) {
  return e === r || e !== e && r !== r;
}
var bo = _o, $o = bo;
function mo(e, r) {
  for (var t = e.length; t--; )
    if ($o(e[t][0], r))
      return t;
  return -1;
}
var Or = mo, Oo = Or, To = Array.prototype, jo = To.splice;
function wo(e) {
  var r = this.__data__, t = Oo(r, e);
  if (t < 0)
    return !1;
  var o = r.length - 1;
  return t == o ? r.pop() : jo.call(r, t, 1), --this.size, !0;
}
var Po = wo, So = Or;
function xo(e) {
  var r = this.__data__, t = So(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Co = xo, Eo = Or;
function Ro(e) {
  return Eo(this.__data__, e) > -1;
}
var Ao = Ro, Io = Or;
function ko(e, r) {
  var t = this.__data__, o = Io(t, e);
  return o < 0 ? (++this.size, t.push([e, r])) : t[o][1] = r, this;
}
var Do = ko, Fo = go, Mo = Po, No = Co, Lo = Ao, Uo = Do;
function ge(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
ge.prototype.clear = Fo;
ge.prototype.delete = Mo;
ge.prototype.get = No;
ge.prototype.has = Lo;
ge.prototype.set = Uo;
var Bo = ge, zo = Y, Go = zo["__core-js_shared__"], Wo = Go, Hr = Wo, Rt = function() {
  var e = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vo(e) {
  return !!Rt && Rt in e;
}
var Yo = Vo, Ko = Function.prototype, Ho = Ko.toString;
function qo(e) {
  if (e != null) {
    try {
      return Ho.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Un = qo, Jo = yo, Xo = Yo, Zo = Ln, Qo = Un, ei = /[\\^$.*+?()[\]{}|]/g, ri = /^\[object .+?Constructor\]$/, ti = Function.prototype, ni = Object.prototype, ai = ti.toString, oi = ni.hasOwnProperty, ii = RegExp(
  "^" + ai.call(oi).replace(ei, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function si(e) {
  if (!Zo(e) || Xo(e))
    return !1;
  var r = Jo(e) ? ii : ri;
  return r.test(Qo(e));
}
var ci = si;
function ui(e, r) {
  return e == null ? void 0 : e[r];
}
var fi = ui, li = ci, vi = fi;
function pi(e, r) {
  var t = vi(e, r);
  return li(t) ? t : void 0;
}
var _e = pi, di = _e, yi = Y, hi = di(yi, "Map"), Bn = hi, gi = _e, _i = gi(Object, "create"), Tr = _i, At = Tr;
function bi() {
  this.__data__ = At ? At(null) : {}, this.size = 0;
}
var $i = bi;
function mi(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Oi = mi, Ti = Tr, ji = "__lodash_hash_undefined__", wi = Object.prototype, Pi = wi.hasOwnProperty;
function Si(e) {
  var r = this.__data__;
  if (Ti) {
    var t = r[e];
    return t === ji ? void 0 : t;
  }
  return Pi.call(r, e) ? r[e] : void 0;
}
var xi = Si, Ci = Tr, Ei = Object.prototype, Ri = Ei.hasOwnProperty;
function Ai(e) {
  var r = this.__data__;
  return Ci ? r[e] !== void 0 : Ri.call(r, e);
}
var Ii = Ai, ki = Tr, Di = "__lodash_hash_undefined__";
function Fi(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ki && r === void 0 ? Di : r, this;
}
var Mi = Fi, Ni = $i, Li = Oi, Ui = xi, Bi = Ii, zi = Mi;
function be(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
be.prototype.clear = Ni;
be.prototype.delete = Li;
be.prototype.get = Ui;
be.prototype.has = Bi;
be.prototype.set = zi;
var Gi = be, It = Gi, Wi = Bo, Vi = Bn;
function Yi() {
  this.size = 0, this.__data__ = {
    hash: new It(),
    map: new (Vi || Wi)(),
    string: new It()
  };
}
var Ki = Yi;
function Hi(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var qi = Hi, Ji = qi;
function Xi(e, r) {
  var t = e.__data__;
  return Ji(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var jr = Xi, Zi = jr;
function Qi(e) {
  var r = Zi(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var es = Qi, rs = jr;
function ts(e) {
  return rs(this, e).get(e);
}
var ns = ts, as = jr;
function os(e) {
  return as(this, e).has(e);
}
var is = os, ss = jr;
function cs(e, r) {
  var t = ss(this, e), o = t.size;
  return t.set(e, r), this.size += t.size == o ? 0 : 1, this;
}
var us = cs, fs = Ki, ls = es, vs = ns, ps = is, ds = us;
function $e(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
$e.prototype.clear = fs;
$e.prototype.delete = ls;
$e.prototype.get = vs;
$e.prototype.has = ps;
$e.prototype.set = ds;
var ys = $e, hs = Y;
hs.Uint8Array;
var kt = mr, Dt = kt ? kt.prototype : void 0;
Dt && Dt.valueOf;
var gs = _e, _s = Y, bs = gs(_s, "DataView"), $s = bs, ms = _e, Os = Y, Ts = ms(Os, "Promise"), js = Ts, ws = _e, Ps = Y, Ss = ws(Ps, "Set"), xs = Ss, Cs = _e, Es = Y, Rs = Cs(Es, "WeakMap"), As = Rs, et = $s, rt = Bn, tt = js, nt = xs, at = As, zn = pt, me = Un, Ft = "[object Map]", Is = "[object Object]", Mt = "[object Promise]", Nt = "[object Set]", Lt = "[object WeakMap]", Ut = "[object DataView]", ks = me(et), Ds = me(rt), Fs = me(tt), Ms = me(nt), Ns = me(at), de = zn;
(et && de(new et(new ArrayBuffer(1))) != Ut || rt && de(new rt()) != Ft || tt && de(tt.resolve()) != Mt || nt && de(new nt()) != Nt || at && de(new at()) != Lt) && (de = function(e) {
  var r = zn(e), t = r == Is ? e.constructor : void 0, o = t ? me(t) : "";
  if (o)
    switch (o) {
      case ks:
        return Ut;
      case Ds:
        return Ft;
      case Fs:
        return Mt;
      case Ms:
        return Nt;
      case Ns:
        return Lt;
    }
  return r;
});
_r.exports;
var Gn = ys, Ls = "Expected a function";
function dt(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Ls);
  var t = function() {
    var o = arguments, s = r ? r.apply(this, o) : o[0], c = t.cache;
    if (c.has(s))
      return c.get(s);
    var v = e.apply(this, o);
    return t.cache = c.set(s, v) || c, v;
  };
  return t.cache = new (dt.Cache || Gn)(), t;
}
dt.Cache = Gn;
var Us = dt, Bs = Us, zs = 500;
function Gs(e) {
  var r = Bs(e, function(o) {
    return t.size === zs && t.clear(), o;
  }), t = r.cache;
  return r;
}
var Ws = Gs, Vs = Ws, Ys = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ks = /\\(\\)?/g;
Vs(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Ys, function(t, o, s, c) {
    r.push(s ? c.replace(Ks, "$1") : o || t);
  }), r;
});
var Bt = mr, zt = Bt ? Bt.prototype : void 0;
zt && zt.toString;
const Hs = (e) => e.displayName || e.name || void 0;
var Wn = { exports: {} }, qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function qs() {
  if (Gt)
    return qe;
  Gt = 1;
  var e = J, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(u, f, y) {
    var d, $ = {}, T = null, E = null;
    y !== void 0 && (T = "" + y), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (d in f)
      o.call(f, d) && !c.hasOwnProperty(d) && ($[d] = f[d]);
    if (u && u.defaultProps)
      for (d in f = u.defaultProps, f)
        $[d] === void 0 && ($[d] = f[d]);
    return { $$typeof: r, type: u, key: T, ref: E, props: $, _owner: s.current };
  }
  return qe.Fragment = t, qe.jsx = v, qe.jsxs = v, qe;
}
var yr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function Js() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = J, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), D = Symbol.iterator, Z = "@@iterator";
    function ce(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = D && n[D] || n[Z];
      return typeof i == "function" ? i : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(n) {
      {
        for (var i = arguments.length, p = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++)
          p[g - 1] = arguments[g];
        S("error", n, p);
      }
    }
    function S(n, i, p) {
      {
        var g = F.ReactDebugCurrentFrame, _ = g.getStackAddendum();
        _ !== "" && (i += "%s", p = p.concat([_]));
        var j = p.map(function(m) {
          return String(m);
        });
        j.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, j);
      }
    }
    var er = !1, Dr = !1, Fr = !1, K = !1, M = !1, rr;
    rr = Symbol.for("react.module.reference");
    function Mr(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === c || M || n === s || n === y || n === d || K || n === E || er || Dr || Fr || typeof n == "object" && n !== null && (n.$$typeof === T || n.$$typeof === $ || n.$$typeof === v || n.$$typeof === u || n.$$typeof === f || n.$$typeof === rr || n.getModuleId !== void 0));
    }
    function Nr(n, i, p) {
      var g = n.displayName;
      if (g)
        return g;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? p + "(" + _ + ")" : p;
    }
    function tr(n) {
      return n.displayName || "Context";
    }
    function N(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case y:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            var i = n;
            return tr(i) + ".Consumer";
          case v:
            var p = n;
            return tr(p._context) + ".Provider";
          case f:
            return Nr(n, n.render, "ForwardRef");
          case $:
            var g = n.displayName || null;
            return g !== null ? g : N(n.type) || "Memo";
          case T: {
            var _ = n, j = _._payload, m = _._init;
            try {
              return N(m(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, U = 0, Ce, Ee, Re, Ae, Ie, ke, De;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function Lr() {
      {
        if (U === 0) {
          Ce = console.log, Ee = console.info, Re = console.warn, Ae = console.error, Ie = console.group, ke = console.groupCollapsed, De = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        U++;
      }
    }
    function Ur() {
      {
        if (U--, U === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, n, {
              value: Ce
            }),
            info: k({}, n, {
              value: Ee
            }),
            warn: k({}, n, {
              value: Re
            }),
            error: k({}, n, {
              value: Ae
            }),
            group: k({}, n, {
              value: Ie
            }),
            groupCollapsed: k({}, n, {
              value: ke
            }),
            groupEnd: k({}, n, {
              value: De
            })
          });
        }
        U < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = F.ReactCurrentDispatcher, ee;
    function z(n, i, p) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (_) {
            var g = _.stack.trim().match(/\n( *(at )?)/);
            ee = g && g[1] || "";
          }
        return `
` + ee + n;
      }
    }
    var re = !1, G;
    {
      var Br = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Br();
    }
    function Me(n, i) {
      if (!n || re)
        return "";
      {
        var p = G.get(n);
        if (p !== void 0)
          return p;
      }
      var g;
      re = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Q.current, Q.current = null, Lr();
      try {
        if (i) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (V) {
              g = V;
            }
            Reflect.construct(n, [], m);
          } else {
            try {
              m.call();
            } catch (V) {
              g = V;
            }
            n.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            g = V;
          }
          n();
        }
      } catch (V) {
        if (V && g && typeof V.stack == "string") {
          for (var O = V.stack.split(`
`), x = g.stack.split(`
`), A = O.length - 1, I = x.length - 1; A >= 1 && I >= 0 && O[A] !== x[I]; )
            I--;
          for (; A >= 1 && I >= 0; A--, I--)
            if (O[A] !== x[I]) {
              if (A !== 1 || I !== 1)
                do
                  if (A--, I--, I < 0 || O[A] !== x[I]) {
                    var L = `
` + O[A].replace(" at new ", " at ");
                    return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), typeof n == "function" && G.set(n, L), L;
                  }
                while (A >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = j, Ur(), Error.prepareStackTrace = _;
      }
      var pe = n ? n.displayName || n.name : "", wt = pe ? z(pe) : "";
      return typeof n == "function" && G.set(n, wt), wt;
    }
    function nr(n, i, p) {
      return Me(n, !1);
    }
    function zr(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function W(n, i, p) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Me(n, zr(n));
      if (typeof n == "string")
        return z(n);
      switch (n) {
        case y:
          return z("Suspense");
        case d:
          return z("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            return nr(n.render);
          case $:
            return W(n.type, i, p);
          case T: {
            var g = n, _ = g._payload, j = g._init;
            try {
              return W(j(_), i, p);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Ne = {}, ne = F.ReactDebugCurrentFrame;
    function ue(n) {
      if (n) {
        var i = n._owner, p = W(n.type, n._source, i ? i.type : null);
        ne.setExtraStackFrame(p);
      } else
        ne.setExtraStackFrame(null);
    }
    function ae(n, i, p, g, _) {
      {
        var j = Function.call.bind(te);
        for (var m in n)
          if (j(n, m)) {
            var O = void 0;
            try {
              if (typeof n[m] != "function") {
                var x = Error((g || "React class") + ": " + p + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              O = n[m](i, m, g, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              O = A;
            }
            O && !(O instanceof Error) && (ue(_), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", p, m, typeof O), ue(null)), O instanceof Error && !(O.message in Ne) && (Ne[O.message] = !0, ue(_), R("Failed %s type: %s", p, O.message), ue(null));
          }
      }
    }
    var Le = Array.isArray;
    function Ue(n) {
      return Le(n);
    }
    function ar(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, p = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return p;
      }
    }
    function or(n) {
      try {
        return fe(n), !1;
      } catch {
        return !0;
      }
    }
    function fe(n) {
      return "" + n;
    }
    function ir(n) {
      if (or(n))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(n)), fe(n);
    }
    var oe = F.ReactCurrentOwner, Gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, cr, Be;
    Be = {};
    function Wr(n) {
      if (te.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function ze(n) {
      if (te.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function ur(n, i) {
      if (typeof n.ref == "string" && oe.current && i && oe.current.stateNode !== i) {
        var p = N(oe.current.type);
        Be[p] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(oe.current.type), n.ref), Be[p] = !0);
      }
    }
    function H(n, i) {
      {
        var p = function() {
          sr || (sr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        p.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function Ge(n, i) {
      {
        var p = function() {
          cr || (cr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        p.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var We = function(n, i, p, g, _, j, m) {
      var O = {
        $$typeof: r,
        type: n,
        key: i,
        ref: p,
        props: m,
        _owner: j
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function fr(n, i, p, g, _) {
      {
        var j, m = {}, O = null, x = null;
        p !== void 0 && (ir(p), O = "" + p), ze(i) && (ir(i.key), O = "" + i.key), Wr(i) && (x = i.ref, ur(i, _));
        for (j in i)
          te.call(i, j) && !Gr.hasOwnProperty(j) && (m[j] = i[j]);
        if (n && n.defaultProps) {
          var A = n.defaultProps;
          for (j in A)
            m[j] === void 0 && (m[j] = A[j]);
        }
        if (O || x) {
          var I = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          O && H(m, I), x && Ge(m, I);
        }
        return We(n, O, x, _, g, oe.current, m);
      }
    }
    var Ve = F.ReactCurrentOwner, Ye = F.ReactDebugCurrentFrame;
    function q(n) {
      if (n) {
        var i = n._owner, p = W(n.type, n._source, i ? i.type : null);
        Ye.setExtraStackFrame(p);
      } else
        Ye.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ve(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function lr() {
      {
        if (Ve.current) {
          var n = N(Ve.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Vr(n) {
      {
        if (n !== void 0) {
          var i = n.fileName.replace(/^.*[\\\/]/, ""), p = n.lineNumber;
          return `

Check your code at ` + i + ":" + p + ".";
        }
        return "";
      }
    }
    var Ke = {};
    function Yr(n) {
      {
        var i = lr();
        if (!i) {
          var p = typeof n == "string" ? n : n.displayName || n.name;
          p && (i = `

Check the top-level render call using <` + p + ">.");
        }
        return i;
      }
    }
    function vr(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var p = Yr(i);
        if (Ke[p])
          return;
        Ke[p] = !0;
        var g = "";
        n && n._owner && n._owner !== Ve.current && (g = " It was passed a child from " + N(n._owner.type) + "."), q(n), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, g), q(null);
      }
    }
    function pr(n, i) {
      {
        if (typeof n != "object")
          return;
        if (Ue(n))
          for (var p = 0; p < n.length; p++) {
            var g = n[p];
            ve(g) && vr(g, i);
          }
        else if (ve(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = ce(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var j = _.call(n), m; !(m = j.next()).done; )
              ve(m.value) && vr(m.value, i);
        }
      }
    }
    function Kr(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var p;
        if (typeof i == "function")
          p = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || i.$$typeof === $))
          p = i.propTypes;
        else
          return;
        if (p) {
          var g = N(i);
          ae(p, n.props, "prop", g, n);
        } else if (i.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = N(i);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function a(n) {
      {
        for (var i = Object.keys(n.props), p = 0; p < i.length; p++) {
          var g = i[p];
          if (g !== "children" && g !== "key") {
            q(n), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), q(null);
            break;
          }
        }
        n.ref !== null && (q(n), R("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function l(n, i, p, g, _, j) {
      {
        var m = Mr(n);
        if (!m) {
          var O = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = Vr(_);
          x ? O += x : O += lr();
          var A;
          n === null ? A = "null" : Ue(n) ? A = "array" : n !== void 0 && n.$$typeof === r ? (A = "<" + (N(n.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : A = typeof n, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, O);
        }
        var I = fr(n, i, p, _, j);
        if (I == null)
          return I;
        if (m) {
          var L = i.children;
          if (L !== void 0)
            if (g)
              if (Ue(L)) {
                for (var pe = 0; pe < L.length; pe++)
                  pr(L[pe], n);
                Object.freeze && Object.freeze(L);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pr(L, n);
        }
        return n === o ? a(I) : Kr(I), I;
      }
    }
    function h(n, i, p) {
      return l(n, i, p, !0);
    }
    function b(n, i, p) {
      return l(n, i, p, !1);
    }
    var w = b, P = h;
    yr.Fragment = o, yr.jsx = w, yr.jsxs = P;
  }()), yr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = qs() : e.exports = Js();
})(Wn);
Wn.exports.jsx;
const Xs = () => {
  const e = J.useRef(!1);
  return J.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, Zs = (e) => {
  const r = Xs(), [t, o] = J.useState(e), s = J.useCallback(
    (c) => {
      r.current && o(c);
    },
    [r]
  );
  return [t, s];
};
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qs = typeof hr == "object" && hr && hr.Object === Object && hr, Vn = Qs, ec = Vn, rc = typeof self == "object" && self && self.Object === Object && self, tc = ec || rc || Function("return this")(), B = tc, nc = B, ac = nc.Symbol, yt = ac, Vt = yt, Yn = Object.prototype, oc = Yn.hasOwnProperty, ic = Yn.toString, Je = Vt ? Vt.toStringTag : void 0;
function sc(e) {
  var r = oc.call(e, Je), t = e[Je];
  try {
    e[Je] = void 0;
    var o = !0;
  } catch {
  }
  var s = ic.call(e);
  return o && (r ? e[Je] = t : delete e[Je]), s;
}
var cc = sc, uc = Object.prototype, fc = uc.toString;
function lc(e) {
  return fc.call(e);
}
var vc = lc, Yt = yt, pc = cc, dc = vc, yc = "[object Null]", hc = "[object Undefined]", Kt = Yt ? Yt.toStringTag : void 0;
function gc(e) {
  return e == null ? e === void 0 ? hc : yc : Kt && Kt in Object(e) ? pc(e) : dc(e);
}
var ht = gc;
function _c(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Kn = _c, bc = ht, $c = Kn, mc = "[object AsyncFunction]", Oc = "[object Function]", Tc = "[object GeneratorFunction]", jc = "[object Proxy]";
function wc(e) {
  if (!$c(e))
    return !1;
  var r = bc(e);
  return r == Oc || r == Tc || r == mc || r == jc;
}
var Pc = wc, Sc = B, xc = Sc["__core-js_shared__"], Cc = xc, qr = Cc, Ht = function() {
  var e = /[^.]+$/.exec(qr && qr.keys && qr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ec(e) {
  return !!Ht && Ht in e;
}
var Rc = Ec, Ac = Function.prototype, Ic = Ac.toString;
function kc(e) {
  if (e != null) {
    try {
      return Ic.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Hn = kc, Dc = Pc, Fc = Rc, Mc = Kn, Nc = Hn, Lc = /[\\^$.*+?()[\]{}|]/g, Uc = /^\[object .+?Constructor\]$/, Bc = Function.prototype, zc = Object.prototype, Gc = Bc.toString, Wc = zc.hasOwnProperty, Vc = RegExp(
  "^" + Gc.call(Wc).replace(Lc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yc(e) {
  if (!Mc(e) || Fc(e))
    return !1;
  var r = Dc(e) ? Vc : Uc;
  return r.test(Nc(e));
}
var Kc = Yc;
function Hc(e, r) {
  return e == null ? void 0 : e[r];
}
var qc = Hc, Jc = Kc, Xc = qc;
function Zc(e, r) {
  var t = Xc(e, r);
  return Jc(t) ? t : void 0;
}
var ie = Zc, Qc = ie, eu = B, ru = Qc(eu, "Map"), tu = ru, nu = ie;
nu(Object, "create");
var au = ie;
(function() {
  try {
    var e = au(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function ou(e) {
  return e != null && typeof e == "object";
}
var qn = ou, iu = ht, su = qn, cu = "[object Arguments]";
function uu(e) {
  return su(e) && iu(e) == cu;
}
var fu = uu, qt = fu, lu = qn, Jn = Object.prototype, vu = Jn.hasOwnProperty, pu = Jn.propertyIsEnumerable;
qt(function() {
  return arguments;
}());
var br = { exports: {} };
function du() {
  return !1;
}
var yu = du;
(function(e, r) {
  var t = B, o = yu, s = r && !r.nodeType && r, c = s && !0 && e && !e.nodeType && e, v = c && c.exports === s, u = v ? t.Buffer : void 0, f = u ? u.isBuffer : void 0, y = f || o;
  e.exports = y;
})(br, br.exports);
var Ze = { exports: {} };
(function(e, r) {
  var t = Vn, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, c = s && s.exports === o, v = c && t.process, u = function() {
    try {
      var f = s && s.require && s.require("util").types;
      return f || v && v.binding && v.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Ze, Ze.exports);
var Jt = Ze.exports;
Jt && Jt.isTypedArray;
br.exports;
var ot = { exports: {} };
(function(e, r) {
  var t = B, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, c = s && s.exports === o, v = c ? t.Buffer : void 0, u = v ? v.allocUnsafe : void 0;
  function f(y, d) {
    if (d)
      return y.slice();
    var $ = y.length, T = u ? u($) : new y.constructor($);
    return y.copy(T), T;
  }
  e.exports = f;
})(ot, ot.exports);
var hu = ie, gu = B, _u = hu(gu, "DataView"), bu = _u, $u = ie, mu = B, Ou = $u(mu, "Promise"), Tu = Ou, ju = ie, wu = B, Pu = ju(wu, "Set"), Su = Pu, xu = ie, Cu = B, Eu = xu(Cu, "WeakMap"), Ru = Eu, it = bu, st = tu, ct = Tu, ut = Su, ft = Ru, Xn = ht, Oe = Hn, Xt = "[object Map]", Au = "[object Object]", Zt = "[object Promise]", Qt = "[object Set]", en = "[object WeakMap]", rn = "[object DataView]", Iu = Oe(it), ku = Oe(st), Du = Oe(ct), Fu = Oe(ut), Mu = Oe(ft), ye = Xn;
(it && ye(new it(new ArrayBuffer(1))) != rn || st && ye(new st()) != Xt || ct && ye(ct.resolve()) != Zt || ut && ye(new ut()) != Qt || ft && ye(new ft()) != en) && (ye = function(e) {
  var r = Xn(e), t = r == Au ? e.constructor : void 0, o = t ? Oe(t) : "";
  if (o)
    switch (o) {
      case Iu:
        return rn;
      case ku:
        return Xt;
      case Du:
        return Zt;
      case Fu:
        return Qt;
      case Mu:
        return en;
    }
  return r;
});
var Nu = B;
Nu.Uint8Array;
var tn = yt, nn = tn ? tn.prototype : void 0;
nn && nn.valueOf;
var an = Ze.exports;
an && an.isMap;
var on = Ze.exports;
on && on.isSet;
ot.exports;
br.exports;
var Lu = Function.prototype, Uu = Lu.toString;
Uu.call(Object);
const Bu = (e, r) => {
  const t = {}, o = Object.keys(e), s = o.length;
  let c = 0;
  for (; c < s; ) {
    const v = o[c];
    if (r.indexOf(v) > -1 || !Object.prototype.hasOwnProperty.call(e, v)) {
      c++;
      continue;
    }
    t[v] = e[v], c++;
  }
  return t;
};
var gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zu(e, r) {
  for (var t = -1, o = Array(e); ++t < e; )
    o[t] = r(t);
  return o;
}
var Gu = zu, Wu = typeof gr == "object" && gr && gr.Object === Object && gr, Zn = Wu, Vu = Zn, Yu = typeof self == "object" && self && self.Object === Object && self, Ku = Vu || Yu || Function("return this")(), Te = Ku, Hu = Te, qu = Hu.Symbol, wr = qu, sn = wr, Qn = Object.prototype, Ju = Qn.hasOwnProperty, Xu = Qn.toString, Xe = sn ? sn.toStringTag : void 0;
function Zu(e) {
  var r = Ju.call(e, Xe), t = e[Xe];
  try {
    e[Xe] = void 0;
    var o = !0;
  } catch {
  }
  var s = Xu.call(e);
  return o && (r ? e[Xe] = t : delete e[Xe]), s;
}
var Qu = Zu, ef = Object.prototype, rf = ef.toString;
function tf(e) {
  return rf.call(e);
}
var nf = tf, cn = wr, af = Qu, of = nf, sf = "[object Null]", cf = "[object Undefined]", un = cn ? cn.toStringTag : void 0;
function uf(e) {
  return e == null ? e === void 0 ? cf : sf : un && un in Object(e) ? af(e) : of(e);
}
var Qe = uf;
function ff(e) {
  return e != null && typeof e == "object";
}
var je = ff, lf = Qe, vf = je, pf = "[object Arguments]";
function df(e) {
  return vf(e) && lf(e) == pf;
}
var yf = df, fn = yf, hf = je, ea = Object.prototype, gf = ea.hasOwnProperty, _f = ea.propertyIsEnumerable, bf = fn(function() {
  return arguments;
}()) ? fn : function(e) {
  return hf(e) && gf.call(e, "callee") && !_f.call(e, "callee");
}, Pr = bf, $f = Array.isArray, se = $f, $r = { exports: {} };
function mf() {
  return !1;
}
var Of = mf;
(function(e, r) {
  var t = Te, o = Of, s = r && !r.nodeType && r, c = s && !0 && e && !e.nodeType && e, v = c && c.exports === s, u = v ? t.Buffer : void 0, f = u ? u.isBuffer : void 0, y = f || o;
  e.exports = y;
})($r, $r.exports);
var Tf = 9007199254740991, jf = /^(?:0|[1-9]\d*)$/;
function wf(e, r) {
  var t = typeof e;
  return r = r == null ? Tf : r, !!r && (t == "number" || t != "symbol" && jf.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Sr = wf, Pf = 9007199254740991;
function Sf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pf;
}
var gt = Sf, xf = Qe, Cf = gt, Ef = je, Rf = "[object Arguments]", Af = "[object Array]", If = "[object Boolean]", kf = "[object Date]", Df = "[object Error]", Ff = "[object Function]", Mf = "[object Map]", Nf = "[object Number]", Lf = "[object Object]", Uf = "[object RegExp]", Bf = "[object Set]", zf = "[object String]", Gf = "[object WeakMap]", Wf = "[object ArrayBuffer]", Vf = "[object DataView]", Yf = "[object Float32Array]", Kf = "[object Float64Array]", Hf = "[object Int8Array]", qf = "[object Int16Array]", Jf = "[object Int32Array]", Xf = "[object Uint8Array]", Zf = "[object Uint8ClampedArray]", Qf = "[object Uint16Array]", el = "[object Uint32Array]", C = {};
C[Yf] = C[Kf] = C[Hf] = C[qf] = C[Jf] = C[Xf] = C[Zf] = C[Qf] = C[el] = !0;
C[Rf] = C[Af] = C[Wf] = C[If] = C[Vf] = C[kf] = C[Df] = C[Ff] = C[Mf] = C[Nf] = C[Lf] = C[Uf] = C[Bf] = C[zf] = C[Gf] = !1;
function rl(e) {
  return Ef(e) && Cf(e.length) && !!C[xf(e)];
}
var tl = rl;
function nl(e) {
  return function(r) {
    return e(r);
  };
}
var al = nl, lt = { exports: {} };
(function(e, r) {
  var t = Zn, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, c = s && s.exports === o, v = c && t.process, u = function() {
    try {
      var f = s && s.require && s.require("util").types;
      return f || v && v.binding && v.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(lt, lt.exports);
var ol = tl, il = al, ln = lt.exports, vn = ln && ln.isTypedArray, sl = vn ? il(vn) : ol, ra = sl, cl = Gu, ul = Pr, fl = se, ll = $r.exports, vl = Sr, pl = ra, dl = Object.prototype, yl = dl.hasOwnProperty;
function hl(e, r) {
  var t = fl(e), o = !t && ul(e), s = !t && !o && ll(e), c = !t && !o && !s && pl(e), v = t || o || s || c, u = v ? cl(e.length, String) : [], f = u.length;
  for (var y in e)
    (r || yl.call(e, y)) && !(v && (y == "length" || s && (y == "offset" || y == "parent") || c && (y == "buffer" || y == "byteLength" || y == "byteOffset") || vl(y, f))) && u.push(y);
  return u;
}
var ta = hl, gl = Object.prototype;
function _l(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || gl;
  return e === t;
}
var _t = _l;
function bl(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var na = bl, $l = na, ml = $l(Object.keys, Object), Ol = ml, Tl = _t, jl = Ol, wl = Object.prototype, Pl = wl.hasOwnProperty;
function Sl(e) {
  if (!Tl(e))
    return jl(e);
  var r = [];
  for (var t in Object(e))
    Pl.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var xl = Sl;
function Cl(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var X = Cl, El = Qe, Rl = X, Al = "[object AsyncFunction]", Il = "[object Function]", kl = "[object GeneratorFunction]", Dl = "[object Proxy]";
function Fl(e) {
  if (!Rl(e))
    return !1;
  var r = El(e);
  return r == Il || r == kl || r == Al || r == Dl;
}
var bt = Fl, Ml = bt, Nl = gt;
function Ll(e) {
  return e != null && Nl(e.length) && !Ml(e);
}
var xr = Ll, Ul = ta, Bl = xl, zl = xr;
function Gl(e) {
  return zl(e) ? Ul(e) : Bl(e);
}
var Wl = Gl;
function Vl() {
  this.__data__ = [], this.size = 0;
}
var Yl = Vl;
function Kl(e, r) {
  return e === r || e !== e && r !== r;
}
var Cr = Kl, Hl = Cr;
function ql(e, r) {
  for (var t = e.length; t--; )
    if (Hl(e[t][0], r))
      return t;
  return -1;
}
var Er = ql, Jl = Er, Xl = Array.prototype, Zl = Xl.splice;
function Ql(e) {
  var r = this.__data__, t = Jl(r, e);
  if (t < 0)
    return !1;
  var o = r.length - 1;
  return t == o ? r.pop() : Zl.call(r, t, 1), --this.size, !0;
}
var ev = Ql, rv = Er;
function tv(e) {
  var r = this.__data__, t = rv(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var nv = tv, av = Er;
function ov(e) {
  return av(this.__data__, e) > -1;
}
var iv = ov, sv = Er;
function cv(e, r) {
  var t = this.__data__, o = sv(t, e);
  return o < 0 ? (++this.size, t.push([e, r])) : t[o][1] = r, this;
}
var uv = cv, fv = Yl, lv = ev, vv = nv, pv = iv, dv = uv;
function we(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
we.prototype.clear = fv;
we.prototype.delete = lv;
we.prototype.get = vv;
we.prototype.has = pv;
we.prototype.set = dv;
var Rr = we, yv = Rr;
function hv() {
  this.__data__ = new yv(), this.size = 0;
}
var gv = hv;
function _v(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var bv = _v;
function $v(e) {
  return this.__data__.get(e);
}
var mv = $v;
function Ov(e) {
  return this.__data__.has(e);
}
var Tv = Ov, jv = Te, wv = jv["__core-js_shared__"], Pv = wv, Jr = Pv, pn = function() {
  var e = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Sv(e) {
  return !!pn && pn in e;
}
var xv = Sv, Cv = Function.prototype, Ev = Cv.toString;
function Rv(e) {
  if (e != null) {
    try {
      return Ev.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Av = Rv, Iv = bt, kv = xv, Dv = X, Fv = Av, Mv = /[\\^$.*+?()[\]{}|]/g, Nv = /^\[object .+?Constructor\]$/, Lv = Function.prototype, Uv = Object.prototype, Bv = Lv.toString, zv = Uv.hasOwnProperty, Gv = RegExp(
  "^" + Bv.call(zv).replace(Mv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wv(e) {
  if (!Dv(e) || kv(e))
    return !1;
  var r = Iv(e) ? Gv : Nv;
  return r.test(Fv(e));
}
var Vv = Wv;
function Yv(e, r) {
  return e == null ? void 0 : e[r];
}
var Kv = Yv, Hv = Vv, qv = Kv;
function Jv(e, r) {
  var t = qv(e, r);
  return Hv(t) ? t : void 0;
}
var $t = Jv, Xv = $t, Zv = Te, Qv = Xv(Zv, "Map"), aa = Qv, ep = $t, rp = ep(Object, "create"), Ar = rp, dn = Ar;
function tp() {
  this.__data__ = dn ? dn(null) : {}, this.size = 0;
}
var np = tp;
function ap(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var op = ap, ip = Ar, sp = "__lodash_hash_undefined__", cp = Object.prototype, up = cp.hasOwnProperty;
function fp(e) {
  var r = this.__data__;
  if (ip) {
    var t = r[e];
    return t === sp ? void 0 : t;
  }
  return up.call(r, e) ? r[e] : void 0;
}
var lp = fp, vp = Ar, pp = Object.prototype, dp = pp.hasOwnProperty;
function yp(e) {
  var r = this.__data__;
  return vp ? r[e] !== void 0 : dp.call(r, e);
}
var hp = yp, gp = Ar, _p = "__lodash_hash_undefined__";
function bp(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = gp && r === void 0 ? _p : r, this;
}
var $p = bp, mp = np, Op = op, Tp = lp, jp = hp, wp = $p;
function Pe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
Pe.prototype.clear = mp;
Pe.prototype.delete = Op;
Pe.prototype.get = Tp;
Pe.prototype.has = jp;
Pe.prototype.set = wp;
var Pp = Pe, yn = Pp, Sp = Rr, xp = aa;
function Cp() {
  this.size = 0, this.__data__ = {
    hash: new yn(),
    map: new (xp || Sp)(),
    string: new yn()
  };
}
var Ep = Cp;
function Rp(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Ap = Rp, Ip = Ap;
function kp(e, r) {
  var t = e.__data__;
  return Ip(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var Ir = kp, Dp = Ir;
function Fp(e) {
  var r = Dp(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Mp = Fp, Np = Ir;
function Lp(e) {
  return Np(this, e).get(e);
}
var Up = Lp, Bp = Ir;
function zp(e) {
  return Bp(this, e).has(e);
}
var Gp = zp, Wp = Ir;
function Vp(e, r) {
  var t = Wp(this, e), o = t.size;
  return t.set(e, r), this.size += t.size == o ? 0 : 1, this;
}
var Yp = Vp, Kp = Ep, Hp = Mp, qp = Up, Jp = Gp, Xp = Yp;
function Se(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
Se.prototype.clear = Kp;
Se.prototype.delete = Hp;
Se.prototype.get = qp;
Se.prototype.has = Jp;
Se.prototype.set = Xp;
var oa = Se, Zp = Rr, Qp = aa, ed = oa, rd = 200;
function td(e, r) {
  var t = this.__data__;
  if (t instanceof Zp) {
    var o = t.__data__;
    if (!Qp || o.length < rd - 1)
      return o.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new ed(o);
  }
  return t.set(e, r), this.size = t.size, this;
}
var nd = td, ad = Rr, od = gv, id = bv, sd = mv, cd = Tv, ud = nd;
function xe(e) {
  var r = this.__data__ = new ad(e);
  this.size = r.size;
}
xe.prototype.clear = od;
xe.prototype.delete = id;
xe.prototype.get = sd;
xe.prototype.has = cd;
xe.prototype.set = ud;
var fd = xe, ld = $t, vd = function() {
  try {
    var e = ld(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ia = vd, hn = ia;
function pd(e, r, t) {
  r == "__proto__" && hn ? hn(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var mt = pd, dd = mt, yd = Cr;
function hd(e, r, t) {
  (t !== void 0 && !yd(e[r], t) || t === void 0 && !(r in e)) && dd(e, r, t);
}
var sa = hd;
function gd(e) {
  return function(r, t, o) {
    for (var s = -1, c = Object(r), v = o(r), u = v.length; u--; ) {
      var f = v[e ? u : ++s];
      if (t(c[f], f, c) === !1)
        break;
    }
    return r;
  };
}
var _d = gd, bd = _d, $d = bd(), md = $d, vt = { exports: {} };
(function(e, r) {
  var t = Te, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, c = s && s.exports === o, v = c ? t.Buffer : void 0, u = v ? v.allocUnsafe : void 0;
  function f(y, d) {
    if (d)
      return y.slice();
    var $ = y.length, T = u ? u($) : new y.constructor($);
    return y.copy(T), T;
  }
  e.exports = f;
})(vt, vt.exports);
var Od = Te, Td = Od.Uint8Array, jd = Td, gn = jd;
function wd(e) {
  var r = new e.constructor(e.byteLength);
  return new gn(r).set(new gn(e)), r;
}
var Pd = wd, Sd = Pd;
function xd(e, r) {
  var t = r ? Sd(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Cd = xd;
function Ed(e, r) {
  var t = -1, o = e.length;
  for (r || (r = Array(o)); ++t < o; )
    r[t] = e[t];
  return r;
}
var Rd = Ed, Ad = X, _n = Object.create, Id = function() {
  function e() {
  }
  return function(r) {
    if (!Ad(r))
      return {};
    if (_n)
      return _n(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), kd = Id, Dd = na, Fd = Dd(Object.getPrototypeOf, Object), ca = Fd, Md = kd, Nd = ca, Ld = _t;
function Ud(e) {
  return typeof e.constructor == "function" && !Ld(e) ? Md(Nd(e)) : {};
}
var Bd = Ud, zd = xr, Gd = je;
function Wd(e) {
  return Gd(e) && zd(e);
}
var Vd = Wd, Yd = Qe, Kd = ca, Hd = je, qd = "[object Object]", Jd = Function.prototype, Xd = Object.prototype, ua = Jd.toString, Zd = Xd.hasOwnProperty, Qd = ua.call(Object);
function ey(e) {
  if (!Hd(e) || Yd(e) != qd)
    return !1;
  var r = Kd(e);
  if (r === null)
    return !0;
  var t = Zd.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && ua.call(t) == Qd;
}
var ry = ey;
function ty(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var fa = ty, ny = mt, ay = Cr, oy = Object.prototype, iy = oy.hasOwnProperty;
function sy(e, r, t) {
  var o = e[r];
  (!(iy.call(e, r) && ay(o, t)) || t === void 0 && !(r in e)) && ny(e, r, t);
}
var la = sy, cy = la, uy = mt;
function fy(e, r, t, o) {
  var s = !t;
  t || (t = {});
  for (var c = -1, v = r.length; ++c < v; ) {
    var u = r[c], f = o ? o(t[u], e[u], u, t, e) : void 0;
    f === void 0 && (f = e[u]), s ? uy(t, u, f) : cy(t, u, f);
  }
  return t;
}
var ly = fy;
function vy(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var py = vy, dy = X, yy = _t, hy = py, gy = Object.prototype, _y = gy.hasOwnProperty;
function by(e) {
  if (!dy(e))
    return hy(e);
  var r = yy(e), t = [];
  for (var o in e)
    o == "constructor" && (r || !_y.call(e, o)) || t.push(o);
  return t;
}
var $y = by, my = ta, Oy = $y, Ty = xr;
function jy(e) {
  return Ty(e) ? my(e, !0) : Oy(e);
}
var va = jy, wy = ly, Py = va;
function Sy(e) {
  return wy(e, Py(e));
}
var xy = Sy, bn = sa, Cy = vt.exports, Ey = Cd, Ry = Rd, Ay = Bd, $n = Pr, mn = se, Iy = Vd, ky = $r.exports, Dy = bt, Fy = X, My = ry, Ny = ra, On = fa, Ly = xy;
function Uy(e, r, t, o, s, c, v) {
  var u = On(e, t), f = On(r, t), y = v.get(f);
  if (y) {
    bn(e, t, y);
    return;
  }
  var d = c ? c(u, f, t + "", e, r, v) : void 0, $ = d === void 0;
  if ($) {
    var T = mn(f), E = !T && ky(f), D = !T && !E && Ny(f);
    d = f, T || E || D ? mn(u) ? d = u : Iy(u) ? d = Ry(u) : E ? ($ = !1, d = Cy(f, !0)) : D ? ($ = !1, d = Ey(f, !0)) : d = [] : My(f) || $n(f) ? (d = u, $n(u) ? d = Ly(u) : (!Fy(u) || Dy(u)) && (d = Ay(f))) : $ = !1;
  }
  $ && (v.set(f, d), s(d, f, o, c, v), v.delete(f)), bn(e, t, d);
}
var By = Uy, zy = fd, Gy = sa, Wy = md, Vy = By, Yy = X, Ky = va, Hy = fa;
function pa(e, r, t, o, s) {
  e !== r && Wy(r, function(c, v) {
    if (s || (s = new zy()), Yy(c))
      Vy(e, r, v, t, pa, o, s);
    else {
      var u = o ? o(Hy(e, v), c, v + "", e, r, s) : void 0;
      u === void 0 && (u = c), Gy(e, v, u);
    }
  }, Ky);
}
var qy = pa;
function Jy(e) {
  return e;
}
var da = Jy;
function Xy(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var Zy = Xy, Qy = Zy, Tn = Math.max;
function eh(e, r, t) {
  return r = Tn(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var o = arguments, s = -1, c = Tn(o.length - r, 0), v = Array(c); ++s < c; )
      v[s] = o[r + s];
    s = -1;
    for (var u = Array(r + 1); ++s < r; )
      u[s] = o[s];
    return u[r] = t(v), Qy(e, this, u);
  };
}
var ya = eh;
function rh(e) {
  return function() {
    return e;
  };
}
var th = rh, nh = th, jn = ia, ah = da, oh = jn ? function(e, r) {
  return jn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: nh(r),
    writable: !0
  });
} : ah, ih = oh, sh = 800, ch = 16, uh = Date.now;
function fh(e) {
  var r = 0, t = 0;
  return function() {
    var o = uh(), s = ch - (o - t);
    if (t = o, s > 0) {
      if (++r >= sh)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var lh = fh, vh = ih, ph = lh, dh = ph(vh), ha = dh, yh = da, hh = ya, gh = ha;
function _h(e, r) {
  return gh(hh(e, r, yh), e + "");
}
var bh = _h, $h = Cr, mh = xr, Oh = Sr, Th = X;
function jh(e, r, t) {
  if (!Th(t))
    return !1;
  var o = typeof r;
  return (o == "number" ? mh(t) && Oh(r, t.length) : o == "string" && r in t) ? $h(t[r], e) : !1;
}
var wh = jh, Ph = bh, Sh = wh;
function xh(e) {
  return Ph(function(r, t) {
    var o = -1, s = t.length, c = s > 1 ? t[s - 1] : void 0, v = s > 2 ? t[2] : void 0;
    for (c = e.length > 3 && typeof c == "function" ? (s--, c) : void 0, v && Sh(t[0], t[1], v) && (c = s < 3 ? void 0 : c, s = 1), r = Object(r); ++o < s; ) {
      var u = t[o];
      u && e(r, u, o, c);
    }
    return r;
  });
}
var Ch = xh, Eh = qy, Rh = Ch, Ah = Rh(function(e, r, t) {
  Eh(e, r, t);
}), Ih = Ah, kh = Qe, Dh = je, Fh = "[object Symbol]";
function Mh(e) {
  return typeof e == "symbol" || Dh(e) && kh(e) == Fh;
}
var Ot = Mh, Nh = se, Lh = Ot, Uh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bh = /^\w*$/;
function zh(e, r) {
  if (Nh(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || Lh(e) ? !0 : Bh.test(e) || !Uh.test(e) || r != null && e in Object(r);
}
var Gh = zh, ga = oa, Wh = "Expected a function";
function Tt(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Wh);
  var t = function() {
    var o = arguments, s = r ? r.apply(this, o) : o[0], c = t.cache;
    if (c.has(s))
      return c.get(s);
    var v = e.apply(this, o);
    return t.cache = c.set(s, v) || c, v;
  };
  return t.cache = new (Tt.Cache || ga)(), t;
}
Tt.Cache = ga;
var Vh = Tt, Yh = Vh, Kh = 500;
function Hh(e) {
  var r = Yh(e, function(o) {
    return t.size === Kh && t.clear(), o;
  }), t = r.cache;
  return r;
}
var qh = Hh, Jh = qh, Xh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zh = /\\(\\)?/g, Qh = Jh(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Xh, function(t, o, s, c) {
    r.push(s ? c.replace(Zh, "$1") : o || t);
  }), r;
}), eg = Qh;
function rg(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length, s = Array(o); ++t < o; )
    s[t] = r(e[t], t, e);
  return s;
}
var tg = rg, wn = wr, ng = tg, ag = se, og = Ot, ig = 1 / 0, Pn = wn ? wn.prototype : void 0, Sn = Pn ? Pn.toString : void 0;
function _a(e) {
  if (typeof e == "string")
    return e;
  if (ag(e))
    return ng(e, _a) + "";
  if (og(e))
    return Sn ? Sn.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -ig ? "-0" : r;
}
var sg = _a, cg = sg;
function ug(e) {
  return e == null ? "" : cg(e);
}
var fg = ug, lg = se, vg = Gh, pg = eg, dg = fg;
function yg(e, r) {
  return lg(e) ? e : vg(e, r) ? [e] : pg(dg(e));
}
var kr = yg, hg = Ot, gg = 1 / 0;
function _g(e) {
  if (typeof e == "string" || hg(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -gg ? "-0" : r;
}
var jt = _g, bg = kr, $g = jt;
function mg(e, r) {
  r = bg(r, e);
  for (var t = 0, o = r.length; e != null && t < o; )
    e = e[$g(r[t++])];
  return t && t == o ? e : void 0;
}
var Og = mg, Tg = la, jg = kr, wg = Sr, xn = X, Pg = jt;
function Sg(e, r, t, o) {
  if (!xn(e))
    return e;
  r = jg(r, e);
  for (var s = -1, c = r.length, v = c - 1, u = e; u != null && ++s < c; ) {
    var f = Pg(r[s]), y = t;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (s != v) {
      var d = u[f];
      y = o ? o(d, f, u) : void 0, y === void 0 && (y = xn(d) ? d : wg(r[s + 1]) ? [] : {});
    }
    Tg(u, f, y), u = u[f];
  }
  return e;
}
var xg = Sg, Cg = Og, Eg = xg, Rg = kr;
function Ag(e, r, t) {
  for (var o = -1, s = r.length, c = {}; ++o < s; ) {
    var v = r[o], u = Cg(e, v);
    t(u, v) && Eg(c, Rg(v, e), u);
  }
  return c;
}
var Ig = Ag;
function kg(e, r) {
  return e != null && r in Object(e);
}
var Dg = kg, Fg = kr, Mg = Pr, Ng = se, Lg = Sr, Ug = gt, Bg = jt;
function zg(e, r, t) {
  r = Fg(r, e);
  for (var o = -1, s = r.length, c = !1; ++o < s; ) {
    var v = Bg(r[o]);
    if (!(c = e != null && t(e, v)))
      break;
    e = e[v];
  }
  return c || ++o != s ? c : (s = e == null ? 0 : e.length, !!s && Ug(s) && Lg(v, s) && (Ng(e) || Mg(e)));
}
var Gg = zg, Wg = Dg, Vg = Gg;
function Yg(e, r) {
  return e != null && Vg(e, r, Wg);
}
var Kg = Yg, Hg = Ig, qg = Kg;
function Jg(e, r) {
  return Hg(e, r, function(t, o) {
    return qg(e, o);
  });
}
var Xg = Jg;
function Zg(e, r) {
  for (var t = -1, o = r.length, s = e.length; ++t < o; )
    e[s + t] = r[t];
  return e;
}
var Qg = Zg, Cn = wr, e_ = Pr, r_ = se, En = Cn ? Cn.isConcatSpreadable : void 0;
function t_(e) {
  return r_(e) || e_(e) || !!(En && e && e[En]);
}
var n_ = t_, a_ = Qg, o_ = n_;
function ba(e, r, t, o, s) {
  var c = -1, v = e.length;
  for (t || (t = o_), s || (s = []); ++c < v; ) {
    var u = e[c];
    r > 0 && t(u) ? r > 1 ? ba(u, r - 1, t, o, s) : a_(s, u) : o || (s[s.length] = u);
  }
  return s;
}
var i_ = ba, s_ = i_;
function c_(e) {
  var r = e == null ? 0 : e.length;
  return r ? s_(e, 1) : [];
}
var u_ = c_, f_ = u_, l_ = ya, v_ = ha;
function p_(e) {
  return v_(l_(e, void 0, f_), e + "");
}
var d_ = p_, y_ = Xg, h_ = d_, g_ = h_(function(e, r) {
  return e == null ? {} : y_(e, r);
}), __ = g_, $a = { exports: {} }, he = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xr, Rn;
function ma() {
  if (Rn)
    return Xr;
  Rn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function o(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var v = {}, u = 0; u < 10; u++)
        v["_" + String.fromCharCode(u)] = u;
      var f = Object.getOwnPropertyNames(v).map(function(d) {
        return v[d];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        y[d] = d;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xr = s() ? Object.assign : function(c, v) {
    for (var u, f = o(c), y, d = 1; d < arguments.length; d++) {
      u = Object(arguments[d]);
      for (var $ in u)
        r.call(u, $) && (f[$] = u[$]);
      if (e) {
        y = e(u);
        for (var T = 0; T < y.length; T++)
          t.call(u, y[T]) && (f[y[T]] = u[y[T]]);
      }
    }
    return f;
  }, Xr;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function b_() {
  if (An)
    return he;
  An = 1, ma();
  var e = J, r = 60103;
  if (he.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    r = t("react.element"), he.Fragment = t("react.fragment");
  }
  var o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(u, f, y) {
    var d, $ = {}, T = null, E = null;
    y !== void 0 && (T = "" + y), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (d in f)
      s.call(f, d) && !c.hasOwnProperty(d) && ($[d] = f[d]);
    if (u && u.defaultProps)
      for (d in f = u.defaultProps, f)
        $[d] === void 0 && ($[d] = f[d]);
    return { $$typeof: r, type: u, key: T, ref: E, props: $, _owner: o.current };
  }
  return he.jsx = v, he.jsxs = v, he;
}
var Zr = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function $_() {
  return In || (In = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = J, t = ma(), o = 60103, s = 60106;
      e.Fragment = 60107;
      var c = 60108, v = 60114, u = 60109, f = 60110, y = 60112, d = 60113, $ = 60120, T = 60115, E = 60116, D = 60121, Z = 60122, ce = 60117, F = 60129, R = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var S = Symbol.for;
        o = S("react.element"), s = S("react.portal"), e.Fragment = S("react.fragment"), c = S("react.strict_mode"), v = S("react.profiler"), u = S("react.provider"), f = S("react.context"), y = S("react.forward_ref"), d = S("react.suspense"), $ = S("react.suspense_list"), T = S("react.memo"), E = S("react.lazy"), D = S("react.block"), Z = S("react.server.block"), ce = S("react.fundamental"), S("react.scope"), S("react.opaque.id"), F = S("react.debug_trace_mode"), S("react.offscreen"), R = S("react.legacy_hidden");
      }
      var er = typeof Symbol == "function" && Symbol.iterator, Dr = "@@iterator";
      function Fr(a) {
        if (a === null || typeof a != "object")
          return null;
        var l = er && a[er] || a[Dr];
        return typeof l == "function" ? l : null;
      }
      var K = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function M(a) {
        {
          for (var l = arguments.length, h = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
            h[b - 1] = arguments[b];
          rr("error", a, h);
        }
      }
      function rr(a, l, h) {
        {
          var b = K.ReactDebugCurrentFrame, w = b.getStackAddendum();
          w !== "" && (l += "%s", h = h.concat([w]));
          var P = h.map(function(n) {
            return "" + n;
          });
          P.unshift("Warning: " + l), Function.prototype.apply.call(console[a], console, P);
        }
      }
      var Mr = !1;
      function Nr(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === e.Fragment || a === v || a === F || a === c || a === d || a === $ || a === R || Mr || typeof a == "object" && a !== null && (a.$$typeof === E || a.$$typeof === T || a.$$typeof === u || a.$$typeof === f || a.$$typeof === y || a.$$typeof === ce || a.$$typeof === D || a[0] === Z));
      }
      function tr(a, l, h) {
        var b = l.displayName || l.name || "";
        return a.displayName || (b !== "" ? h + "(" + b + ")" : h);
      }
      function N(a) {
        return a.displayName || "Context";
      }
      function k(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && M("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case e.Fragment:
            return "Fragment";
          case s:
            return "Portal";
          case v:
            return "Profiler";
          case c:
            return "StrictMode";
          case d:
            return "Suspense";
          case $:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case f:
              var l = a;
              return N(l) + ".Consumer";
            case u:
              var h = a;
              return N(h._context) + ".Provider";
            case y:
              return tr(a, a.render, "ForwardRef");
            case T:
              return k(a.type);
            case D:
              return k(a._render);
            case E: {
              var b = a, w = b._payload, P = b._init;
              try {
                return k(P(w));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var U = 0, Ce, Ee, Re, Ae, Ie, ke, De;
      function Fe() {
      }
      Fe.__reactDisabledLog = !0;
      function Lr() {
        {
          if (U === 0) {
            Ce = console.log, Ee = console.info, Re = console.warn, Ae = console.error, Ie = console.group, ke = console.groupCollapsed, De = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: Fe,
              writable: !0
            };
            Object.defineProperties(console, {
              info: a,
              log: a,
              warn: a,
              error: a,
              group: a,
              groupCollapsed: a,
              groupEnd: a
            });
          }
          U++;
        }
      }
      function Ur() {
        {
          if (U--, U === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, a, {
                value: Ce
              }),
              info: t({}, a, {
                value: Ee
              }),
              warn: t({}, a, {
                value: Re
              }),
              error: t({}, a, {
                value: Ae
              }),
              group: t({}, a, {
                value: Ie
              }),
              groupCollapsed: t({}, a, {
                value: ke
              }),
              groupEnd: t({}, a, {
                value: De
              })
            });
          }
          U < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Q = K.ReactCurrentDispatcher, ee;
      function z(a, l, h) {
        {
          if (ee === void 0)
            try {
              throw Error();
            } catch (w) {
              var b = w.stack.trim().match(/\n( *(at )?)/);
              ee = b && b[1] || "";
            }
          return `
` + ee + a;
        }
      }
      var re = !1, G;
      {
        var Br = typeof WeakMap == "function" ? WeakMap : Map;
        G = new Br();
      }
      function Me(a, l) {
        if (!a || re)
          return "";
        {
          var h = G.get(a);
          if (h !== void 0)
            return h;
        }
        var b;
        re = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var P;
        P = Q.current, Q.current = null, Lr();
        try {
          if (l) {
            var n = function() {
              throw Error();
            };
            if (Object.defineProperty(n.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(n, []);
              } catch (x) {
                b = x;
              }
              Reflect.construct(a, [], n);
            } else {
              try {
                n.call();
              } catch (x) {
                b = x;
              }
              a.call(n.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              b = x;
            }
            a();
          }
        } catch (x) {
          if (x && b && typeof x.stack == "string") {
            for (var i = x.stack.split(`
`), p = b.stack.split(`
`), g = i.length - 1, _ = p.length - 1; g >= 1 && _ >= 0 && i[g] !== p[_]; )
              _--;
            for (; g >= 1 && _ >= 0; g--, _--)
              if (i[g] !== p[_]) {
                if (g !== 1 || _ !== 1)
                  do
                    if (g--, _--, _ < 0 || i[g] !== p[_]) {
                      var j = `
` + i[g].replace(" at new ", " at ");
                      return typeof a == "function" && G.set(a, j), j;
                    }
                  while (g >= 1 && _ >= 0);
                break;
              }
          }
        } finally {
          re = !1, Q.current = P, Ur(), Error.prepareStackTrace = w;
        }
        var m = a ? a.displayName || a.name : "", O = m ? z(m) : "";
        return typeof a == "function" && G.set(a, O), O;
      }
      function nr(a, l, h) {
        return Me(a, !1);
      }
      function zr(a) {
        var l = a.prototype;
        return !!(l && l.isReactComponent);
      }
      function W(a, l, h) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return Me(a, zr(a));
        if (typeof a == "string")
          return z(a);
        switch (a) {
          case d:
            return z("Suspense");
          case $:
            return z("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case y:
              return nr(a.render);
            case T:
              return W(a.type, l, h);
            case D:
              return nr(a._render);
            case E: {
              var b = a, w = b._payload, P = b._init;
              try {
                return W(P(w), l, h);
              } catch {
              }
            }
          }
        return "";
      }
      var te = {}, Ne = K.ReactDebugCurrentFrame;
      function ne(a) {
        if (a) {
          var l = a._owner, h = W(a.type, a._source, l ? l.type : null);
          Ne.setExtraStackFrame(h);
        } else
          Ne.setExtraStackFrame(null);
      }
      function ue(a, l, h, b, w) {
        {
          var P = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var n in a)
            if (P(a, n)) {
              var i = void 0;
              try {
                if (typeof a[n] != "function") {
                  var p = Error((b || "React class") + ": " + h + " type `" + n + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[n] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw p.name = "Invariant Violation", p;
                }
                i = a[n](l, n, b, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (g) {
                i = g;
              }
              i && !(i instanceof Error) && (ne(w), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", h, n, typeof i), ne(null)), i instanceof Error && !(i.message in te) && (te[i.message] = !0, ne(w), M("Failed %s type: %s", h, i.message), ne(null));
            }
        }
      }
      var ae = K.ReactCurrentOwner, Le = Object.prototype.hasOwnProperty, Ue = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ar, or, fe;
      fe = {};
      function ir(a) {
        if (Le.call(a, "ref")) {
          var l = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function oe(a) {
        if (Le.call(a, "key")) {
          var l = Object.getOwnPropertyDescriptor(a, "key").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function Gr(a, l) {
        if (typeof a.ref == "string" && ae.current && l && ae.current.stateNode !== l) {
          var h = k(ae.current.type);
          fe[h] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(ae.current.type), a.ref), fe[h] = !0);
        }
      }
      function sr(a, l) {
        {
          var h = function() {
            ar || (ar = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
          };
          h.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: h,
            configurable: !0
          });
        }
      }
      function cr(a, l) {
        {
          var h = function() {
            or || (or = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
          };
          h.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: h,
            configurable: !0
          });
        }
      }
      var Be = function(a, l, h, b, w, P, n) {
        var i = {
          $$typeof: o,
          type: a,
          key: l,
          ref: h,
          props: n,
          _owner: P
        };
        return i._store = {}, Object.defineProperty(i._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(i, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.defineProperty(i, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: w
        }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
      };
      function Wr(a, l, h, b, w) {
        {
          var P, n = {}, i = null, p = null;
          h !== void 0 && (i = "" + h), oe(l) && (i = "" + l.key), ir(l) && (p = l.ref, Gr(l, w));
          for (P in l)
            Le.call(l, P) && !Ue.hasOwnProperty(P) && (n[P] = l[P]);
          if (a && a.defaultProps) {
            var g = a.defaultProps;
            for (P in g)
              n[P] === void 0 && (n[P] = g[P]);
          }
          if (i || p) {
            var _ = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            i && sr(n, _), p && cr(n, _);
          }
          return Be(a, i, p, w, b, ae.current, n);
        }
      }
      var ze = K.ReactCurrentOwner, ur = K.ReactDebugCurrentFrame;
      function H(a) {
        if (a) {
          var l = a._owner, h = W(a.type, a._source, l ? l.type : null);
          ur.setExtraStackFrame(h);
        } else
          ur.setExtraStackFrame(null);
      }
      var Ge;
      Ge = !1;
      function We(a) {
        return typeof a == "object" && a !== null && a.$$typeof === o;
      }
      function fr() {
        {
          if (ze.current) {
            var a = k(ze.current.type);
            if (a)
              return `

Check the render method of \`` + a + "`.";
          }
          return "";
        }
      }
      function Ve(a) {
        {
          if (a !== void 0) {
            var l = a.fileName.replace(/^.*[\\\/]/, ""), h = a.lineNumber;
            return `

Check your code at ` + l + ":" + h + ".";
          }
          return "";
        }
      }
      var Ye = {};
      function q(a) {
        {
          var l = fr();
          if (!l) {
            var h = typeof a == "string" ? a : a.displayName || a.name;
            h && (l = `

Check the top-level render call using <` + h + ">.");
          }
          return l;
        }
      }
      function le(a, l) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var h = q(l);
          if (Ye[h])
            return;
          Ye[h] = !0;
          var b = "";
          a && a._owner && a._owner !== ze.current && (b = " It was passed a child from " + k(a._owner.type) + "."), H(a), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, b), H(null);
        }
      }
      function ve(a, l) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var h = 0; h < a.length; h++) {
              var b = a[h];
              We(b) && le(b, l);
            }
          else if (We(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var w = Fr(a);
            if (typeof w == "function" && w !== a.entries)
              for (var P = w.call(a), n; !(n = P.next()).done; )
                We(n.value) && le(n.value, l);
          }
        }
      }
      function lr(a) {
        {
          var l = a.type;
          if (l == null || typeof l == "string")
            return;
          var h;
          if (typeof l == "function")
            h = l.propTypes;
          else if (typeof l == "object" && (l.$$typeof === y || l.$$typeof === T))
            h = l.propTypes;
          else
            return;
          if (h) {
            var b = k(l);
            ue(h, a.props, "prop", b, a);
          } else if (l.PropTypes !== void 0 && !Ge) {
            Ge = !0;
            var w = k(l);
            M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Vr(a) {
        {
          for (var l = Object.keys(a.props), h = 0; h < l.length; h++) {
            var b = l[h];
            if (b !== "children" && b !== "key") {
              H(a), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), H(null);
              break;
            }
          }
          a.ref !== null && (H(a), M("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
        }
      }
      function Ke(a, l, h, b, w, P) {
        {
          var n = Nr(a);
          if (!n) {
            var i = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var p = Ve(w);
            p ? i += p : i += fr();
            var g;
            a === null ? g = "null" : Array.isArray(a) ? g = "array" : a !== void 0 && a.$$typeof === o ? (g = "<" + (k(a.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof a, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
          }
          var _ = Wr(a, l, h, w, P);
          if (_ == null)
            return _;
          if (n) {
            var j = l.children;
            if (j !== void 0)
              if (b)
                if (Array.isArray(j)) {
                  for (var m = 0; m < j.length; m++)
                    ve(j[m], a);
                  Object.freeze && Object.freeze(j);
                } else
                  M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ve(j, a);
          }
          return a === e.Fragment ? Vr(_) : lr(_), _;
        }
      }
      function Yr(a, l, h) {
        return Ke(a, l, h, !0);
      }
      function vr(a, l, h) {
        return Ke(a, l, h, !1);
      }
      var pr = vr, Kr = Yr;
      e.jsx = pr, e.jsxs = Kr;
    }();
  }(Zr)), Zr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = b_() : e.exports = $_();
})($a);
const kn = $a.exports.jsx, O_ = (e, r) => {
  const t = Oa({
    theme: r.theme,
    setTheme: () => r.theme
  }), o = (f) => {
    const {
      theme: y,
      defaultTheme: d,
      onChange: $,
      children: T
    } = f, E = Ta($);
    E.current = $;
    const [D, Z] = Zs(d || r.theme);
    ja(() => {
      var F;
      console.log("__DEV__:createThemeContext@useEffect", {
        theme: D
      }), (F = E.current) == null || F.call(E, D);
    }, [D]);
    const ce = wa((F) => {
      Z((R) => {
        if (typeof F == "function") {
          const S = F(R);
          return S === null ? R : S;
        } else
          return F;
      });
    }, [Z]);
    return /* @__PURE__ */ kn(t.Provider, {
      value: {
        theme: y || D,
        setTheme: ce
      },
      children: T
    });
  }, s = (f) => {
    const y = Pa(t);
    if (y === void 0)
      throw new Error("Couldn't find a context object. Is your component inside ThemeProvider?");
    return Sa(() => {
      const d = f || y.theme;
      return {
        ...r.theme === d ? e[d] : Ih({}, e[r.theme], e[d]),
        theme: d,
        setTheme: y.setTheme
      };
    }, [y, f]);
  }, c = (f) => (y) => {
    const d = ($) => {
      const {
        theme: T,
        ...E
      } = $, D = s((f == null ? void 0 : f.theme) || T || (f == null ? void 0 : f.defaultTheme));
      return /* @__PURE__ */ kn(y, {
        ...E,
        ...D
      });
    };
    return d.displayName = Hs(y), d;
  }, v = [...Wl(e[r.theme]), "theme", "setTheme"];
  return [s, o, c, (f, y) => {
    const d = Bu(f, v);
    return Array.isArray(y) ? {
      ...d,
      ...__(f, y)
    } : d;
  }];
};
export {
  O_ as createThemeContext
};
