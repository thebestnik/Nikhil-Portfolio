const nh = () => Promise.resolve().then(() => th), $r = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: Kr, jsx: d, jsxs: V } = $r;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function ss(t) {
  const e = t?.props?._fgT, n = typeof e == "function" || typeof e == "string" || typeof e == "object" && e !== null && "$$typeof" in e;
  return globalThis.__GLOBALS__.React.isValidElement(t) && n;
}
function Lt(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function rs(t) {
  const { _fgT: e, _fgS: n, _fgB: i, _fgD: s, ...o } = t.props;
  return globalThis.__GLOBALS__.React.createElement(e, {
    ...o,
    key: t.key
  }, o.children);
}
function Zt(t) {
  return ss(t) ? rs(t) : Lt(t) ? t.props.children : t;
}
const At = globalThis.__GLOBALS__.React.Children, Gr = {
  map(t, e, n) {
    return At.map(t, (i, s) => {
      const o = Zt(i);
      return Lt(i) ? null : e.call(n, o, s);
    });
  },
  forEach(t, e, n) {
    At.forEach(t, (i, s) => {
      if (Lt(i))
        return;
      const o = Zt(i);
      e.call(n, o, s);
    });
  },
  count(t) {
    let e = 0;
    return At.forEach(t, (n) => {
      Lt(n) || e++;
    }), e;
  },
  toArray(t) {
    const e = [];
    return At.forEach(t, (n) => {
      Lt(n) || e.push(Zt(n));
    }), e;
  },
  only(t) {
    const e = At.only(t);
    return Zt(e);
  }
}, me = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function zr(t) {
  if (t == null || typeof t != "object") return t;
  const e = Object.keys(t);
  let n = !1;
  for (let s = 0; s < me.length; s++)
    if (me[s] in t) {
      n = !0;
      break;
    }
  if (!n) return t;
  const i = {};
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    me.indexOf(o) === -1 && (i[o] = t[o]);
  }
  return i;
}
const Un = globalThis.__GLOBALS__.React.cloneElement, Xr = (t, ...e) => {
  if (ss(t)) {
    const n = rs(t), i = e[0];
    return i != null && typeof i == "object" && (e = [
      zr(i),
      ...e.slice(1)
    ]), Un(n, ...e);
  }
  return Un(t, ...e);
};
({
  ...globalThis.__GLOBALS__.React
});
const { Component: os, createContext: wt, createElement: re, createFactory: ih, createRef: sh, forwardRef: Qe, Fragment: as, isValidElement: Yr, lazy: rh, memo: oh, Profiler: ah, PureComponent: lh, startTransition: ch, StrictMode: uh, Suspense: hh, use: fh, useCallback: tn, useContext: B, useDebugValue: dh, useDeferredValue: ph, useEffect: $t, useId: en, useImperativeHandle: mh, useInsertionEffect: ls, useLayoutEffect: Zr, useMemo: ft, useReducer: gh, useRef: Z, useState: Bt, useSyncExternalStore: yh, useTransition: vh, version: xh, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: bh } = globalThis.__GLOBALS__.React, nn = wt({});
function sn(t) {
  const e = Z(null);
  return e.current === null && (e.current = t()), e.current;
}
const rn = typeof window < "u", cs = rn ? Zr : $t, he = /* @__PURE__ */ wt(null);
function on(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function an(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const q = (t, e, n) => n > e ? e : n < t ? t : n;
let ln = () => {
};
const J = {}, us = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function hs(t) {
  return typeof t == "object" && t !== null;
}
const fs = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function cn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (t) => t, qr = (t, e) => (n) => e(t(n)), Kt = (...t) => t.reduce(qr), Ft = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class un {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return on(this.subscriptions, e), () => an(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < s; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const X = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, K = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function ds(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ps = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Jr = 1e-7, Qr = 12;
function to(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = ps(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Jr && ++a < Qr);
  return r;
}
function Gt(t, e, n, i) {
  if (t === e && n === i)
    return G;
  const s = (o) => to(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : ps(s(o), e, i);
}
const ms = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, gs = (t) => (e) => 1 - t(1 - e), ys = /* @__PURE__ */ Gt(0.33, 1.53, 0.69, 0.99), hn = /* @__PURE__ */ gs(ys), vs = /* @__PURE__ */ ms(hn), xs = (t) => (t *= 2) < 1 ? 0.5 * hn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), fn = (t) => 1 - Math.sin(Math.acos(t)), bs = gs(fn), Ts = ms(fn), eo = /* @__PURE__ */ Gt(0.42, 0, 1, 1), no = /* @__PURE__ */ Gt(0, 0, 0.58, 1), ws = /* @__PURE__ */ Gt(0.42, 0, 0.58, 1), io = (t) => Array.isArray(t) && typeof t[0] != "number", Ps = (t) => Array.isArray(t) && typeof t[0] == "number", so = {
  linear: G,
  easeIn: eo,
  easeInOut: ws,
  easeOut: no,
  circIn: fn,
  circInOut: Ts,
  circOut: bs,
  backIn: hn,
  backInOut: vs,
  backOut: ys,
  anticipate: xs
}, ro = (t) => typeof t == "string", Wn = (t) => {
  if (Ps(t)) {
    ln(t.length === 4);
    const [e, n, i, s] = t;
    return Gt(e, n, i, s);
  } else if (ro(t))
    return so[t];
  return t;
}, qt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function oo(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    r.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, f = !1) => {
      const m = f && s ? n : i;
      return h && r.add(c), m.has(c) || m.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      i.delete(c), r.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, s) {
        o = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, o && (o = !1, u.process(c));
    }
  };
  return u;
}
const ao = 40;
function Cs(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = qt.reduce((v, C) => (v[C] = oo(o), v), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: f, render: p, postRender: m } = r, y = () => {
    const v = J.useManualTiming ? s.timestamp : performance.now();
    n = !1, J.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, ao), 1)), s.timestamp = v, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), f.process(s), p.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(y));
  }, x = () => {
    n = !0, i = !0, s.isProcessing || t(y);
  };
  return { schedule: qt.reduce((v, C) => {
    const T = r[C];
    return v[C] = (S, A = !1, P = !1) => (n || x(), T.schedule(S, A, P)), v;
  }, {}), cancel: (v) => {
    for (let C = 0; C < qt.length; C++)
      r[qt[C]].cancel(v);
  }, state: s, steps: r };
}
const { schedule: D, cancel: et, state: O, steps: ge } = /* @__PURE__ */ Cs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let ee;
function lo() {
  ee = void 0;
}
const U = {
  now: () => (ee === void 0 && U.set(O.isProcessing || J.useManualTiming ? O.timestamp : performance.now()), ee),
  set: (t) => {
    ee = t, queueMicrotask(lo);
  }
}, Ss = (t) => (e) => typeof e == "string" && e.startsWith(t), dn = /* @__PURE__ */ Ss("--"), co = /* @__PURE__ */ Ss("var(--"), pn = (t) => co(t) ? uo.test(t.split("/*")[0].trim()) : !1, uo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Pt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, jt = {
  ...Pt,
  transform: (t) => q(0, 1, t)
}, Jt = {
  ...Pt,
  default: 1
}, Rt = (t) => Math.round(t * 1e5) / 1e5, mn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ho(t) {
  return t == null;
}
const fo = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, gn = (t, e) => (n) => !!(typeof n == "string" && fo.test(n) && n.startsWith(t) || e && !ho(n) && Object.prototype.hasOwnProperty.call(n, e)), As = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(mn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, po = (t) => q(0, 255, t), ye = {
  ...Pt,
  transform: (t) => Math.round(po(t))
}, lt = {
  test: /* @__PURE__ */ gn("rgb", "red"),
  parse: /* @__PURE__ */ As("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + ye.transform(t) + ", " + ye.transform(e) + ", " + ye.transform(n) + ", " + Rt(jt.transform(i)) + ")"
};
function mo(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Ee = {
  test: /* @__PURE__ */ gn("#"),
  parse: mo,
  transform: lt.transform
}, zt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), tt = /* @__PURE__ */ zt("deg"), Y = /* @__PURE__ */ zt("%"), w = /* @__PURE__ */ zt("px"), go = /* @__PURE__ */ zt("vh"), yo = /* @__PURE__ */ zt("vw"), Hn = {
  ...Y,
  parse: (t) => Y.parse(t) / 100,
  transform: (t) => Y.transform(t * 100)
}, pt = {
  test: /* @__PURE__ */ gn("hsl", "hue"),
  parse: /* @__PURE__ */ As("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + Y.transform(Rt(e)) + ", " + Y.transform(Rt(n)) + ", " + Rt(jt.transform(i)) + ")"
}, k = {
  test: (t) => lt.test(t) || Ee.test(t) || pt.test(t),
  parse: (t) => lt.test(t) ? lt.parse(t) : pt.test(t) ? pt.parse(t) : Ee.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? lt.transform(t) : pt.transform(t),
  getAnimatableNone: (t) => {
    const e = k.parse(t);
    return e.alpha = 0, k.transform(e);
  }
}, vo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xo(t) {
  return isNaN(t) && typeof t == "string" && (t.match(mn)?.length || 0) + (t.match(vo)?.length || 0) > 0;
}
const Vs = "number", Ms = "color", bo = "var", To = "var(", $n = "${}", wo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _t(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(wo, (l) => (k.test(l) ? (i.color.push(o), s.push(Ms), n.push(k.parse(l))) : l.startsWith(To) ? (i.var.push(o), s.push(bo), n.push(l)) : (i.number.push(o), s.push(Vs), n.push(parseFloat(l))), ++o, $n)).split($n);
  return { values: n, split: a, indexes: i, types: s };
}
function Ds(t) {
  return _t(t).values;
}
function Ls(t) {
  const { split: e, types: n } = _t(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === Vs ? o += Rt(s[r]) : a === Ms ? o += k.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Po = (t) => typeof t == "number" ? 0 : k.test(t) ? k.getAnimatableNone(t) : t;
function Co(t) {
  const e = Ds(t);
  return Ls(t)(e.map(Po));
}
const nt = {
  test: xo,
  parse: Ds,
  createTransformer: Ls,
  getAnimatableNone: Co
};
function ve(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function So({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = ve(l, a, t + 1 / 3), o = ve(l, a, t), r = ve(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function oe(t, e) {
  return (n) => n > 0 ? e : t;
}
const L = (t, e, n) => t + (e - t) * n, xe = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, Ao = [Ee, lt, pt], Vo = (t) => Ao.find((e) => e.test(t));
function Kn(t) {
  const e = Vo(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === pt && (n = So(n)), n;
}
const Gn = (t, e) => {
  const n = Kn(t), i = Kn(e);
  if (!n || !i)
    return oe(t, e);
  const s = { ...n };
  return (o) => (s.red = xe(n.red, i.red, o), s.green = xe(n.green, i.green, o), s.blue = xe(n.blue, i.blue, o), s.alpha = L(n.alpha, i.alpha, o), lt.transform(s));
}, Re = /* @__PURE__ */ new Set(["none", "hidden"]);
function Mo(t, e) {
  return Re.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Do(t, e) {
  return (n) => L(t, e, n);
}
function yn(t) {
  return typeof t == "number" ? Do : typeof t == "string" ? pn(t) ? oe : k.test(t) ? Gn : Ro : Array.isArray(t) ? Es : typeof t == "object" ? k.test(t) ? Gn : Lo : oe;
}
function Es(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => yn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function Lo(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = yn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function Eo(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const o = e.types[s], r = t.indexes[o][i[o]], a = t.values[r] ?? 0;
    n[s] = a, i[o]++;
  }
  return n;
}
const Ro = (t, e) => {
  const n = nt.createTransformer(e), i = _t(t), s = _t(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Re.has(t) && !s.values.length || Re.has(e) && !i.values.length ? Mo(t, e) : Kt(Es(Eo(i, s), s.values), n) : oe(t, e);
};
function Rs(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? L(t, e, n) : yn(t)(t, e);
}
const ko = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => D.update(e, n),
    stop: () => et(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => O.isProcessing ? O.timestamp : U.now()
  };
}, ks = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += Math.round(t(o / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, ae = 2e4;
function vn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < ae; )
    e += n, i = t.next(e);
  return e >= ae ? 1 / 0 : e;
}
function No(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(vn(i), ae);
  return {
    type: "keyframes",
    ease: (o) => i.next(s * o).value / e,
    duration: /* @__PURE__ */ K(s)
  };
}
const Io = 5;
function Ns(t, e, n) {
  const i = Math.max(e - Io, 0);
  return ds(n - t(i), e - i);
}
const E = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, be = 1e-3;
function Oo({ duration: t = E.duration, bounce: e = E.bounce, velocity: n = E.velocity, mass: i = E.mass }) {
  let s, o, r = 1 - e;
  r = q(E.minDamping, E.maxDamping, r), t = q(E.minDuration, E.maxDuration, /* @__PURE__ */ K(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, f = c - n, p = ke(u, r), m = Math.exp(-h);
    return be - f / p * m;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, p = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), y = ke(Math.pow(u, 2), r);
    return (-s(u) + be > 0 ? -1 : 1) * ((f - p) * m) / y;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -be + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Fo(s, o, a);
  if (t = /* @__PURE__ */ X(t), isNaN(l))
    return {
      stiffness: E.stiffness,
      damping: E.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const Bo = 12;
function Fo(t, e, n) {
  let i = n;
  for (let s = 1; s < Bo; s++)
    i = i - t(i) / e(i);
  return i;
}
function ke(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const jo = ["duration", "bounce"], _o = ["stiffness", "damping", "mass"];
function zn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Uo(t) {
  let e = {
    velocity: E.velocity,
    stiffness: E.stiffness,
    damping: E.damping,
    mass: E.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!zn(t, _o) && zn(t, jo))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * q(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: E.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = Oo(t);
      e = {
        ...e,
        ...n,
        mass: E.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function le(t = E.visualDuration, e = E.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: p } = Uo({
    ...n,
    velocity: -/* @__PURE__ */ K(n.velocity || 0)
  }), m = f || 0, y = u / (2 * Math.sqrt(l * c)), x = r - o, g = /* @__PURE__ */ K(Math.sqrt(l / c)), b = Math.abs(x) < 5;
  i || (i = b ? E.restSpeed.granular : E.restSpeed.default), s || (s = b ? E.restDelta.granular : E.restDelta.default);
  let v;
  if (y < 1) {
    const T = ke(g, y);
    v = (S) => {
      const A = Math.exp(-y * g * S);
      return r - A * ((m + y * g * x) / T * Math.sin(T * S) + x * Math.cos(T * S));
    };
  } else if (y === 1)
    v = (T) => r - Math.exp(-g * T) * (x + (m + g * x) * T);
  else {
    const T = g * Math.sqrt(y * y - 1);
    v = (S) => {
      const A = Math.exp(-y * g * S), P = Math.min(T * S, 300);
      return r - A * ((m + y * g * x) * Math.sinh(P) + T * x * Math.cosh(P)) / T;
    };
  }
  const C = {
    calculatedDuration: p && h || null,
    next: (T) => {
      const S = v(T);
      if (p)
        a.done = T >= h;
      else {
        let A = T === 0 ? m : 0;
        y < 1 && (A = T === 0 ? /* @__PURE__ */ X(m) : Ns(v, T, S));
        const P = Math.abs(A) <= i, N = Math.abs(r - S) <= s;
        a.done = P && N;
      }
      return a.value = a.done ? r : S, a;
    },
    toString: () => {
      const T = Math.min(vn(C), ae), S = ks((A) => C.next(T * A).value, T, 30);
      return T + "ms " + S;
    },
    toTransition: () => {
    }
  };
  return C;
}
le.applyToOptions = (t) => {
  const e = No(t, 100, le);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ X(e.duration), t.type = "keyframes", t;
};
function Ne({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, p = (P) => a !== void 0 && P < a || l !== void 0 && P > l, m = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let y = n * e;
  const x = h + y, g = r === void 0 ? x : r(x);
  g !== x && (y = g - h);
  const b = (P) => -y * Math.exp(-P / i), v = (P) => g + b(P), C = (P) => {
    const N = b(P), j = v(P);
    f.done = Math.abs(N) <= u, f.value = f.done ? g : j;
  };
  let T, S;
  const A = (P) => {
    p(f.value) && (T = P, S = le({
      keyframes: [f.value, m(f.value)],
      velocity: Ns(v, P, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (P) => {
      let N = !1;
      return !S && T === void 0 && (N = !0, C(P), A(P)), T !== void 0 && P >= T ? S.next(P - T) : (!N && C(P), f);
    }
  };
}
function Wo(t, e, n) {
  const i = [], s = n || J.mix || Rs, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || G : e;
      a = Kt(l, a);
    }
    i.push(a);
  }
  return i;
}
function Ho(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (ln(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Wo(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ Ft(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(q(t[0], t[o - 1], c)) : u;
}
function $o(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ Ft(0, e, i);
    t.push(L(n, 1, s));
  }
}
function Ko(t) {
  const e = [0];
  return $o(e, t.length - 1), e;
}
function Go(t, e) {
  return t.map((n) => n * e);
}
function zo(t, e) {
  return t.map(() => e || ws).splice(0, t.length - 1);
}
function kt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = io(i) ? i.map(Wn) : Wn(i), o = {
    done: !1,
    value: e[0]
  }, r = Go(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ko(e),
    t
  ), a = Ho(r, e, {
    ease: Array.isArray(s) ? s : zo(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Xo = (t) => t !== null;
function xn(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const o = t.filter(Xo), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const Yo = {
  decay: Ne,
  inertia: Ne,
  tween: kt,
  keyframes: kt,
  spring: le
};
function Is(t) {
  typeof t.type == "string" && (t.type = Yo[t.type]);
}
class bn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const Zo = (t) => t / 100;
class Tn extends bn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== U.now() && this.tick(U.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Is(e);
    const { type: n = kt, repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || kt;
    l !== kt && typeof a[0] != "number" && (this.mixKeyframes = Kt(Zo, Rs(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = vn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: f, repeatDelay: p, type: m, onUpdate: y, finalKeyframe: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? g < 0 : g > s;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let v = this.currentTime, C = i;
    if (h) {
      const P = Math.min(this.currentTime, s) / a;
      let N = Math.floor(P), j = P % 1;
      !j && P >= 1 && (j = 1), j === 1 && N--, N = Math.min(N, h + 1), !!(N % 2) && (f === "reverse" ? (j = 1 - j, p && (j -= p / a)) : f === "mirror" && (C = r)), v = q(0, 1, j) * a;
    }
    const T = b ? { done: !1, value: c[0] } : C.next(v);
    o && (T.value = o(T.value));
    let { done: S } = T;
    !b && l !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return A && m !== Ne && (T.value = xn(c, this.options, x, this.speed)), y && y(T.value), A && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ K(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ K(e);
  }
  get time() {
    return /* @__PURE__ */ K(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ X(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(U.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ K(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = ko, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(U.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function qo(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const ct = (t) => t * 180 / Math.PI, Ie = (t) => {
  const e = ct(Math.atan2(t[1], t[0]));
  return Oe(e);
}, Jo = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Ie,
  rotateZ: Ie,
  skewX: (t) => ct(Math.atan(t[1])),
  skewY: (t) => ct(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Oe = (t) => (t = t % 360, t < 0 && (t += 360), t), Xn = Ie, Yn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Zn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Qo = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Yn,
  scaleY: Zn,
  scale: (t) => (Yn(t) + Zn(t)) / 2,
  rotateX: (t) => Oe(ct(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Oe(ct(Math.atan2(-t[2], t[0]))),
  rotateZ: Xn,
  rotate: Xn,
  skewX: (t) => ct(Math.atan(t[4])),
  skewY: (t) => ct(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Be(t) {
  return t.includes("scale") ? 1 : 0;
}
function Fe(t, e) {
  if (!t || t === "none")
    return Be(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Qo, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Jo, s = a;
  }
  if (!s)
    return Be(e);
  const o = i[e], r = s[1].split(",").map(ea);
  return typeof o == "function" ? o(r) : r[o];
}
const ta = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Fe(n, e);
};
function ea(t) {
  return parseFloat(t.trim());
}
const Ct = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], St = new Set(Ct), qn = (t) => t === Pt || t === w, na = /* @__PURE__ */ new Set(["x", "y", "z"]), ia = Ct.filter((t) => !na.has(t));
function sa(t) {
  const e = [];
  return ia.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const ut = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Fe(e, "x"),
  y: (t, { transform: e }) => Fe(e, "y")
};
ut.translateX = ut.x;
ut.translateY = ut.y;
const ht = /* @__PURE__ */ new Set();
let je = !1, _e = !1, Ue = !1;
function Os() {
  if (_e) {
    const t = Array.from(ht).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = sa(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([o, r]) => {
        i.getValue(o)?.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  _e = !1, je = !1, ht.forEach((t) => t.complete(Ue)), ht.clear();
}
function Bs() {
  ht.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (_e = !0);
  });
}
function ra() {
  Ue = !0, Bs(), Os(), Ue = !1;
}
class wn {
  constructor(e, n, i, s, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ht.add(this), je || (je = !0, D.read(Bs), D.resolveKeyframes(Os))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const o = s?.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (i && n) {
        const a = i.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), s && o === void 0 && s.set(e[0]);
    }
    qo(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ht.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ht.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const oa = (t) => t.startsWith("--");
function aa(t, e, n) {
  oa(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const la = /* @__PURE__ */ cn(() => window.ScrollTimeline !== void 0), ca = {};
function ua(t, e) {
  const n = /* @__PURE__ */ cn(t);
  return () => ca[e] ?? n();
}
const Fs = /* @__PURE__ */ ua(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Et = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Jn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Et([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Et([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Et([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Et([0.33, 1.53, 0.69, 0.99])
};
function js(t, e) {
  if (t)
    return typeof t == "function" ? Fs() ? ks(t, e) : "ease-out" : Ps(t) ? Et(t) : Array.isArray(t) ? t.map((n) => js(n, e) || Jn.easeOut) : Jn[t];
}
function ha(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const h = js(a, s);
  Array.isArray(h) && (c.easing = h);
  const f = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (f.pseudoElement = u), t.animate(c, f);
}
function _s(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function fa({ type: t, ...e }) {
  return _s(t) && Fs() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class da extends bn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, ln(typeof e.type != "string");
    const u = fa(e);
    this.animation = ha(n, i, s, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = xn(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : aa(n, i, c), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ K(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ K(e);
  }
  get time() {
    return /* @__PURE__ */ K(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ X(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && la() ? (this.animation.timeline = e, G) : n(this);
  }
}
const Us = {
  anticipate: xs,
  backInOut: vs,
  circInOut: Ts
};
function pa(t) {
  return t in Us;
}
function ma(t) {
  typeof t.ease == "string" && pa(t.ease) && (t.ease = Us[t.ease]);
}
const Qn = 10;
class ga extends da {
  constructor(e) {
    ma(e), Is(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new Tn({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ X(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Qn).value, a.sample(l).value, Qn), a.stop();
  }
}
const ti = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(nt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function ya(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function va(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = ti(s, e), a = ti(o, e);
  return !r || !a ? !1 : ya(t) || (n === "spring" || _s(n)) && i;
}
function We(t) {
  t.duration = 0, t.type = "keyframes";
}
const xa = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), ba = /* @__PURE__ */ cn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ta(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: o, type: r } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return ba() && n && xa.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && s !== "mirror" && o !== 0 && r !== "inertia";
}
const wa = 40;
class Pa extends bn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = U.now();
    const f = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: u,
      element: c,
      ...h
    }, p = c?.KeyframeResolver || wn;
    this.keyframeResolver = new p(a, (m, y, x) => this.onKeyframesResolved(m, y, f, !x), l, u, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = U.now(), va(e, o, r, a) || ((J.instantAnimations || !l) && c?.(xn(e, i, n)), e[0] = e[e.length - 1], We(i), i.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > wa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, p = !u && Ta(f) ? new ga({
      ...f,
      element: f.motionValue.owner.current
    }) : new Tn(f);
    p.finished.then(() => this.notifyFinished()).catch(G), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ra()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Ca = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Sa(t) {
  const e = Ca.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function Ws(t, e, n = 1) {
  const [i, s] = Sa(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return us(r) ? parseFloat(r) : r;
  }
  return pn(s) ? Ws(s, e, n + 1) : s;
}
function Pn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const Hs = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ct
]), Aa = {
  test: (t) => t === "auto",
  parse: (t) => t
}, $s = (t) => (e) => e.test(t), Ks = [Pt, w, Y, tt, yo, go, Aa], ei = (t) => Ks.find($s(t));
function Va(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || fs(t) : !0;
}
const Ma = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Da(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(mn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Ma.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const La = /\b([a-z-]*)\(.*?\)/gu, He = {
  ...nt,
  getAnimatableNone: (t) => {
    const e = t.match(La);
    return e ? e.map(Da).join(" ") : t;
  }
}, ni = {
  ...Pt,
  transform: Math.round
}, Ea = {
  rotate: tt,
  rotateX: tt,
  rotateY: tt,
  rotateZ: tt,
  scale: Jt,
  scaleX: Jt,
  scaleY: Jt,
  scaleZ: Jt,
  skew: tt,
  skewX: tt,
  skewY: tt,
  distance: w,
  translateX: w,
  translateY: w,
  translateZ: w,
  x: w,
  y: w,
  z: w,
  perspective: w,
  transformPerspective: w,
  opacity: jt,
  originX: Hn,
  originY: Hn,
  originZ: w
}, Cn = {
  // Border props
  borderWidth: w,
  borderTopWidth: w,
  borderRightWidth: w,
  borderBottomWidth: w,
  borderLeftWidth: w,
  borderRadius: w,
  radius: w,
  borderTopLeftRadius: w,
  borderTopRightRadius: w,
  borderBottomRightRadius: w,
  borderBottomLeftRadius: w,
  // Positioning props
  width: w,
  maxWidth: w,
  height: w,
  maxHeight: w,
  top: w,
  right: w,
  bottom: w,
  left: w,
  // Spacing props
  padding: w,
  paddingTop: w,
  paddingRight: w,
  paddingBottom: w,
  paddingLeft: w,
  margin: w,
  marginTop: w,
  marginRight: w,
  marginBottom: w,
  marginLeft: w,
  // Misc
  backgroundPositionX: w,
  backgroundPositionY: w,
  ...Ea,
  zIndex: ni,
  // SVG
  fillOpacity: jt,
  strokeOpacity: jt,
  numOctaves: ni
}, Ra = {
  ...Cn,
  // Color props
  color: k,
  backgroundColor: k,
  outlineColor: k,
  fill: k,
  stroke: k,
  // Border props
  borderColor: k,
  borderTopColor: k,
  borderRightColor: k,
  borderBottomColor: k,
  borderLeftColor: k,
  filter: He,
  WebkitFilter: He
}, Gs = (t) => Ra[t];
function zs(t, e) {
  let n = Gs(t);
  return n !== He && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const ka = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Na(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !ka.has(o) && _t(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = zs(n, s);
}
class Ia extends wn {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), pn(u))) {
        const c = Ws(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Hs.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = ei(s), a = ei(o);
    if (r !== a)
      if (qn(r) && qn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else ut[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || Va(e[s])) && i.push(s);
    i.length && Na(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ut[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, r = i[o];
    i[o] = ut[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Oa(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const s = n?.[t] ?? i.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const Xs = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Ys(t) {
  return hs(t) && "offsetHeight" in t;
}
const ii = 30, Ba = (t) => !isNaN(parseFloat(t));
class Fa {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = U.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = U.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ba(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new un());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), D.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = U.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ii)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ii);
    return ds(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function bt(t, e) {
  return new Fa(t, e);
}
const { schedule: Sn } = /* @__PURE__ */ Cs(queueMicrotask, !1), z = {
  x: !1,
  y: !1
};
function Zs() {
  return z.x || z.y;
}
function ja(t) {
  return t === "x" || t === "y" ? z[t] ? null : (z[t] = !0, () => {
    z[t] = !1;
  }) : z.x || z.y ? null : (z.x = z.y = !0, () => {
    z.x = z.y = !1;
  });
}
function qs(t, e) {
  const n = Oa(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function si(t) {
  return !(t.pointerType === "touch" || Zs());
}
function _a(t, e, n = {}) {
  const [i, s, o] = qs(t, n), r = (a) => {
    if (!si(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      si(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
const Js = (t, e) => e ? t === e ? !0 : Js(t, e.parentElement) : !1, An = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Ua = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Wa(t) {
  return Ua.has(t.tagName) || t.tabIndex !== -1;
}
const ne = /* @__PURE__ */ new WeakSet();
function ri(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Te(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ha = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = ri(() => {
    if (ne.has(n))
      return;
    Te(n, "down");
    const s = ri(() => {
      Te(n, "up");
    }), o = () => Te(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function oi(t) {
  return An(t) && !Zs();
}
function $a(t, e, n = {}) {
  const [i, s, o] = qs(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!oi(a))
      return;
    ne.add(l);
    const u = e(l, a), c = (p, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), ne.has(l) && ne.delete(l), oi(p) && typeof u == "function" && u(p, { success: m });
    }, h = (p) => {
      c(p, l === window || l === document || n.useGlobalTarget || Js(l, p.target));
    }, f = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), Ys(a) && (a.addEventListener("focus", (u) => Ha(u, s)), !Wa(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function Qs(t) {
  return hs(t) && "ownerSVGElement" in t;
}
function Ka(t) {
  return Qs(t) && t.tagName === "svg";
}
const F = (t) => !!(t && t.getVelocity), Ga = [...Ks, k, nt], za = (t) => Ga.find($s(t)), Vn = wt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ai(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Xa(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((s) => {
      const o = ai(s, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const o = i[s];
          typeof o == "function" ? o() : ai(t[s], null);
        }
      };
  };
}
function Ya(...t) {
  return tn(Xa(...t), t);
}
class Za extends os {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const i = n.offsetParent, s = Ys(i) && i.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = s - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function qa({ children: t, isPresent: e, anchorX: n, root: i }) {
  const s = en(), o = Z(null), r = Z({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = B(Vn), l = Ya(o, t?.ref);
  return ls(() => {
    const { width: u, height: c, top: h, left: f, right: p } = r.current;
    if (e || !o.current || !u || !c)
      return;
    const m = n === "left" ? `left: ${f}` : `right: ${p}`;
    o.current.dataset.motionPopId = s;
    const y = document.createElement("style");
    a && (y.nonce = a);
    const x = i ?? document.head;
    return x.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${m}px !important;
            top: ${h}px !important;
          }
        `), () => {
      x.contains(y) && x.removeChild(y);
    };
  }, [e]), d(Za, { isPresent: e, childRef: o, sizeRef: r, children: Xr(t, { ref: l }) });
}
const Ja = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: o, mode: r, anchorX: a, root: l }) => {
  const u = sn(Qa), c = en();
  let h = !0, f = ft(() => (h = !1, {
    id: c,
    initial: e,
    isPresent: n,
    custom: s,
    onExitComplete: (p) => {
      u.set(p, !0);
      for (const m of u.values())
        if (!m)
          return;
      i && i();
    },
    register: (p) => (u.set(p, !1), () => u.delete(p))
  }), [n, u, i]);
  return o && h && (f = { ...f }), ft(() => {
    u.forEach((p, m) => u.set(m, !1));
  }, [n]), $t(() => {
    !n && !u.size && i && i();
  }, [n]), r === "popLayout" && (t = d(qa, { isPresent: n, anchorX: a, root: l, children: t })), d(he.Provider, { value: f, children: t });
};
function Qa() {
  return /* @__PURE__ */ new Map();
}
function tr(t = !0) {
  const e = B(he);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = en();
  $t(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = tn(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const Qt = (t) => t.key || "";
function li(t) {
  const e = [];
  return Gr.forEach(t, (n) => {
    Yr(n) && e.push(n);
  }), e;
}
const Mn = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = tr(r), h = ft(() => li(t), [t]), f = r && !u ? [] : h.map(Qt), p = Z(!0), m = Z(h), y = sn(() => /* @__PURE__ */ new Map()), [x, g] = Bt(h), [b, v] = Bt(h);
  cs(() => {
    p.current = !1, m.current = h;
    for (let S = 0; S < b.length; S++) {
      const A = Qt(b[S]);
      f.includes(A) ? y.delete(A) : y.get(A) !== !0 && y.set(A, !1);
    }
  }, [b, f.length, f.join("-")]);
  const C = [];
  if (h !== x) {
    let S = [...h];
    for (let A = 0; A < b.length; A++) {
      const P = b[A], N = Qt(P);
      f.includes(N) || (S.splice(A, 0, P), C.push(P));
    }
    return o === "wait" && C.length && (S = C), v(li(S)), g(h), null;
  }
  const { forceRender: T } = B(nn);
  return d(Kr, { children: b.map((S) => {
    const A = Qt(S), P = r && !u ? !1 : h === b || f.includes(A), N = () => {
      if (y.has(A))
        y.set(A, !0);
      else
        return;
      let j = !0;
      y.forEach((Q) => {
        Q || (j = !1);
      }), j && (T?.(), v(m.current), r && c?.(), i && i());
    };
    return d(Ja, { isPresent: P, initial: !p.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: o, root: l, onExitComplete: P ? void 0 : N, anchorX: a, children: S }, A);
  }) });
}, er = wt({ strict: !1 }), ci = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Tt = {};
for (const t in ci)
  Tt[t] = {
    isEnabled: (e) => ci[t].some((n) => !!e[n])
  };
function tl(t) {
  for (const e in t)
    Tt[e] = {
      ...Tt[e],
      ...t[e]
    };
}
const el = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ce(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || el.has(t);
}
let nr = (t) => !ce(t);
function nl(t) {
  typeof t == "function" && (nr = (e) => e.startsWith("on") ? !ce(e) : t(e));
}
try {
  nl(require("@emotion/is-prop-valid").default);
} catch {
}
function il(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (nr(s) || n === !0 && ce(s) || !e && !ce(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const fe = /* @__PURE__ */ wt({});
function de(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ut(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Dn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ln = ["initial", ...Dn];
function pe(t) {
  return de(t.animate) || Ln.some((e) => Ut(t[e]));
}
function ir(t) {
  return !!(pe(t) || t.variants);
}
function sl(t, e) {
  if (pe(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Ut(n) ? n : void 0,
      animate: Ut(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function rl(t) {
  const { initial: e, animate: n } = sl(t, B(fe));
  return ft(() => ({ initial: e, animate: n }), [ui(e), ui(n)]);
}
function ui(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Wt = {};
function ol(t) {
  for (const e in t)
    Wt[e] = t[e], dn(e) && (Wt[e].isCSSVariable = !0);
}
function sr(t, { layout: e, layoutId: n }) {
  return St.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Wt[t] || t === "opacity");
}
const al = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ll = Ct.length;
function cl(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < ll; o++) {
    const r = Ct[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Xs(a, Cn[r]);
      if (!l) {
        s = !1;
        const c = al[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function En(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (St.has(l)) {
      r = !0;
      continue;
    } else if (dn(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Xs(u, Cn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = cl(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Rn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function rr(t, e, n) {
  for (const i in e)
    !F(e[i]) && !sr(i, n) && (t[i] = e[i]);
}
function ul({ transformTemplate: t }, e) {
  return ft(() => {
    const n = Rn();
    return En(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function hl(t, e) {
  const n = t.style || {}, i = {};
  return rr(i, n, t), Object.assign(i, ul(t, e)), i;
}
function fl(t, e) {
  const n = {}, i = hl(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const dl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ml(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? dl : pl;
  t[o.offset] = w.transform(-i);
  const r = w.transform(e), a = w.transform(n);
  t[o.array] = `${r} ${a}`;
}
function or(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (En(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && ml(h, s, o, r, !1);
}
const ar = () => ({
  ...Rn(),
  attrs: {}
}), lr = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function gl(t, e, n, i) {
  const s = ft(() => {
    const o = ar();
    return or(o, e, lr(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    rr(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
const yl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function kn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(yl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function vl(t, e, n, { latestValues: i }, s, o = !1) {
  const a = (kn(t) ? gl : fl)(e, i, s, t), l = il(e, typeof t == "string", o), u = t !== as ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = ft(() => F(c) ? c.get() : c, [c]);
  return re(t, {
    ...u,
    children: h
  });
}
function hi(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Nn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = hi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = hi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
function ie(t) {
  return F(t) ? t.get() : t;
}
function xl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: bl(n, i, s, t),
    renderState: e()
  };
}
function bl(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const f in o)
    s[f] = ie(o[f]);
  let { initial: r, animate: a } = t;
  const l = pe(t), u = ir(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !de(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let p = 0; p < f.length; p++) {
      const m = Nn(t, f[p]);
      if (m) {
        const { transitionEnd: y, transition: x, ...g } = m;
        for (const b in g) {
          let v = g[b];
          if (Array.isArray(v)) {
            const C = c ? v.length - 1 : 0;
            v = v[C];
          }
          v !== null && (s[b] = v);
        }
        for (const b in y)
          s[b] = y[b];
      }
    }
  }
  return s;
}
const cr = (t) => (e, n) => {
  const i = B(fe), s = B(he), o = () => xl(t, e, i, s);
  return n ? o() : sn(o);
};
function In(t, e, n) {
  const { style: i } = t, s = {};
  for (const o in i)
    (F(i[o]) || e.style && F(e.style[o]) || sr(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (s[o] = i[o]);
  return s;
}
const Tl = /* @__PURE__ */ cr({
  scrapeMotionValuesFromProps: In,
  createRenderState: Rn
});
function ur(t, e, n) {
  const i = In(t, e, n);
  for (const s in t)
    if (F(t[s]) || F(e[s])) {
      const o = Ct.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
const wl = /* @__PURE__ */ cr({
  scrapeMotionValuesFromProps: ur,
  createRenderState: ar
}), Pl = Symbol.for("motionComponentSymbol");
function mt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Cl(t, e, n) {
  return tn(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : mt(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const On = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Sl = "framerAppearId", hr = "data-" + On(Sl), fr = wt({});
function Al(t, e, n, i, s) {
  const { visualElement: o } = B(fe), r = B(er), a = B(he), l = B(Vn).reducedMotion, u = Z(null);
  i = i || r.renderer, !u.current && i && (u.current = i(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, h = B(fr);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && Vl(u.current, n, s, h);
  const f = Z(!1);
  ls(() => {
    c && f.current && c.update(n, a);
  });
  const p = n[hr], m = Z(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
  return cs(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), m.current && c.animationState && c.animationState.animateChanges());
  }), $t(() => {
    c && (!m.current && c.animationState && c.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(p);
    }), m.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Vl(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : dr(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && mt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function dr(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : dr(t.parent);
}
function we(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && tl(n);
  const s = kn(t) ? wl : Tl;
  function o(a, l) {
    let u;
    const c = {
      ...B(Vn),
      ...a,
      layoutId: Ml(a)
    }, { isStatic: h } = c, f = rl(a), p = s(a, h);
    if (!h && rn) {
      Dl();
      const m = Ll(c);
      u = m.MeasureLayout, f.visualElement = Al(t, p, c, i, m.ProjectionNode);
    }
    return V(fe.Provider, { value: f, children: [u && f.visualElement ? d(u, { visualElement: f.visualElement, ...c }) : null, vl(t, a, Cl(p, f.visualElement, l), p, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = Qe(o);
  return r[Pl] = t, r;
}
function Ml({ layoutId: t }) {
  const e = B(nn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Dl(t, e) {
  B(er).strict;
}
function Ll(t) {
  const { drag: e, layout: n } = Tt;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function El(t, e) {
  if (typeof Proxy > "u")
    return we;
  const n = /* @__PURE__ */ new Map(), i = (o, r) => we(o, r, t, e), s = (o, r) => i(o, r);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? i : (n.has(r) || n.set(r, we(r, void 0, t, e)), n.get(r))
  });
}
function pr({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Rl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function kl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Pe(t) {
  return t === void 0 || t === 1;
}
function $e({ scale: t, scaleX: e, scaleY: n }) {
  return !Pe(t) || !Pe(e) || !Pe(n);
}
function ot(t) {
  return $e(t) || mr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function mr(t) {
  return fi(t.x) || fi(t.y);
}
function fi(t) {
  return t && t !== "0%";
}
function ue(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function di(t, e, n, i, s) {
  return s !== void 0 && (t = ue(t, s, i)), ue(t, n, i) + e;
}
function Ke(t, e = 0, n = 1, i, s) {
  t.min = di(t.min, e, n, i, s), t.max = di(t.max, e, n, i, s);
}
function gr(t, { x: e, y: n }) {
  Ke(t.x, e.translate, e.scale, e.originPoint), Ke(t.y, n.translate, n.scale, n.originPoint);
}
const pi = 0.999999999999, mi = 1.0000000000001;
function Nl(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && yt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, gr(t, r)), i && ot(o.latestValues) && yt(t, o.latestValues));
  }
  e.x < mi && e.x > pi && (e.x = 1), e.y < mi && e.y > pi && (e.y = 1);
}
function gt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function gi(t, e, n, i, s = 0.5) {
  const o = L(t.min, t.max, s);
  Ke(t, e, n, o, i);
}
function yt(t, e) {
  gi(t.x, e.x, e.scaleX, e.scale, e.originX), gi(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function yr(t, e) {
  return pr(kl(t.getBoundingClientRect(), e));
}
function Il(t, e, n) {
  const i = yr(t, n), { scroll: s } = e;
  return s && (gt(i.x, s.offset.x), gt(i.y, s.offset.y)), i;
}
const yi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), vt = () => ({
  x: yi(),
  y: yi()
}), vi = () => ({ min: 0, max: 0 }), R = () => ({
  x: vi(),
  y: vi()
}), Ge = { current: null }, vr = { current: !1 };
function Ol() {
  if (vr.current = !0, !!rn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ge.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Ge.current = !1;
}
const Bl = /* @__PURE__ */ new WeakMap();
function Fl(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (F(s))
      t.addValue(i, s);
    else if (F(o))
      t.addValue(i, bt(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, bt(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const xi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class jl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = U.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, D.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = pe(n), this.isVariantNode = ir(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const p = h[f];
      l[f] !== void 0 && F(p) && p.set(l[f]);
    }
  }
  mount(e) {
    this.current = e, Bl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), vr.current || Ol(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ge.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), et(this.notifyUpdate), et(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = St.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && D.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Tt) {
      const n = Tt[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : R();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < xi.length; i++) {
      const s = xi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Fl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = bt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (us(i) || fs(i)) ? i = parseFloat(i) : !za(i) && nt.test(n) && (i = zs(e, n)), this.setBaseTarget(e, F(i) ? i.get() : i)), F(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const o = Nn(this.props, n, this.presenceContext?.custom);
      o && (i = o[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !F(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new un()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Sn.render(this.render);
  }
}
class xr extends jl {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ia;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    F(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function br(t, { style: e, vars: n }, i, s) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  s?.applyProjectionStyles(o, i);
  for (r in n)
    o.setProperty(r, n[r]);
}
function _l(t) {
  return window.getComputedStyle(t);
}
class Ul extends xr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = br;
  }
  readValueFromInstance(e, n) {
    if (St.has(n))
      return this.projection?.isProjecting ? Be(n) : ta(e, n);
    {
      const i = _l(e), s = (dn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return yr(e, n);
  }
  build(e, n, i) {
    En(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return In(e, n, i);
  }
}
const Tr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Wl(t, e, n, i) {
  br(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(Tr.has(s) ? s : On(s), e.attrs[s]);
}
class Hl extends xr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = R;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (St.has(n)) {
      const i = Gs(n);
      return i && i.default || 0;
    }
    return n = Tr.has(n) ? n : On(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return ur(e, n, i);
  }
  build(e, n, i) {
    or(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    Wl(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = lr(e.tagName), super.mount(e);
  }
}
const $l = (t, e) => kn(t) ? new Hl(e) : new Ul(e, {
  allowProjection: t !== as
});
function xt(t, e, n) {
  const i = t.getProps();
  return Nn(i, e, n !== void 0 ? n : i.custom, t);
}
const ze = (t) => Array.isArray(t);
function Kl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, bt(n));
}
function Gl(t) {
  return ze(t) ? t[t.length - 1] || 0 : t;
}
function zl(t, e) {
  const n = xt(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = Gl(o[r]);
    Kl(t, r, a);
  }
}
function Xl(t) {
  return !!(F(t) && t.add);
}
function Xe(t, e) {
  const n = t.getValue("willChange");
  if (Xl(n))
    return n.add(e);
  if (!n && J.WillChange) {
    const i = new J.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function wr(t) {
  return t.props[hr];
}
const Yl = (t) => t !== null;
function Zl(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(Yl), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[o];
}
const ql = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Jl = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ql = {
  type: "keyframes",
  duration: 0.8
}, tc = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ec = (t, { keyframes: e }) => e.length > 2 ? Ql : St.has(t) ? t.startsWith("scale") ? Jl(e[1]) : ql : tc;
function nc({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Bn = (t, e, n, i = {}, s, o) => (r) => {
  const a = Pn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ X(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  nc(a) || Object.assign(c, ec(t, c)), c.duration && (c.duration = /* @__PURE__ */ X(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ X(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (We(c), c.delay === 0 && (h = !0)), (J.instantAnimations || J.skipAnimations) && (h = !0, We(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = Zl(c.keyframes, a);
    if (f !== void 0) {
      D.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Tn(c) : new Pa(c);
};
function ic({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function Pr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  i && (o = i);
  const l = [], u = s && t.animationState && t.animationState.getState()[s];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), f = a[c];
    if (f === void 0 || u && ic(u, c))
      continue;
    const p = {
      delay: n,
      ...Pn(o || {}, c)
    }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(f) && f === m && !p.velocity)
      continue;
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = wr(t);
      if (g) {
        const b = window.MotionHandoffAnimation(g, c, D);
        b !== null && (p.startTime = b, y = !0);
      }
    }
    Xe(t, c), h.start(Bn(c, h, f, t.shouldReduceMotion && Hs.has(c) ? { type: !1 } : p, t, y));
    const x = h.animation;
    x && l.push(x);
  }
  return r && Promise.all(l).then(() => {
    D.update(() => {
      r && zl(t, r);
    });
  }), l;
}
function Cr(t, e, n, i = 0, s = 1) {
  const o = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, a = (r - 1) * i;
  return typeof n == "function" ? n(o, r) : s === 1 ? o * i : a - o * i;
}
function Ye(t, e, n = {}) {
  const i = xt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Pr(t, i, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = s;
    return sc(t, e, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function sc(t, e, n = 0, i = 0, s = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(Ye(l, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + Cr(t.variantChildren, l, i, s, o)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function rc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => Ye(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Ye(t, e, n);
  else {
    const s = typeof e == "function" ? xt(t, e, n.custom) : e;
    i = Promise.all(Pr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Sr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const oc = Ln.length;
function Ar(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Ar(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < oc; n++) {
    const i = Ln[n], s = t.props[i];
    (Ut(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const ac = [...Dn].reverse(), lc = Dn.length;
function cc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => rc(t, n, i)));
}
function uc(t) {
  let e = cc(t), n = bi(), i = !0;
  const s = (l) => (u, c) => {
    const h = xt(t, c, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: p, ...m } = h;
      u = { ...u, ...m, ...p };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = Ar(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let x = 0; x < lc; x++) {
      const g = ac[x], b = n[g], v = u[g] !== void 0 ? u[g] : c[g], C = Ut(v), T = g === l ? b.isActive : null;
      T === !1 && (m = x);
      let S = v === c[g] && v !== u[g] && C;
      if (S && i && t.manuallyAnimateOnMount && (S = !1), b.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !v && !b.prevProp || // Or if the prop doesn't define an animation
      de(v) || typeof v == "boolean")
        continue;
      const A = hc(b.prevProp, v);
      let P = A || // If we're making this variant active, we want to always make it active
      g === l && b.isActive && !S && C || // If we removed a higher-priority variant (i is in reverse order)
      x > m && C, N = !1;
      const j = Array.isArray(v) ? v : [v];
      let Q = j.reduce(s(g), {});
      T === !1 && (Q = {});
      const { prevResolvedValues: Fn = {} } = b, Wr = {
        ...Fn,
        ...Q
      }, jn = (I) => {
        P = !0, f.has(I) && (N = !0, f.delete(I)), b.needsAnimating[I] = !0;
        const W = t.getValue(I);
        W && (W.liveStyle = !1);
      };
      for (const I in Wr) {
        const W = Q[I], st = Fn[I];
        if (p.hasOwnProperty(I))
          continue;
        let dt = !1;
        ze(W) && ze(st) ? dt = !Sr(W, st) : dt = W !== st, dt ? W != null ? jn(I) : f.add(I) : W !== void 0 && f.has(I) ? jn(I) : b.protectedKeys[I] = !0;
      }
      b.prevProp = v, b.prevResolvedValues = Q, b.isActive && (p = { ...p, ...Q }), i && t.blockInitialAnimation && (P = !1);
      const _n = S && A;
      P && (!_n || N) && h.push(...j.map((I) => {
        const W = { type: g };
        if (typeof I == "string" && i && !_n && t.manuallyAnimateOnMount && t.parent) {
          const { parent: st } = t, dt = xt(st, I);
          if (st.enteringChildren && dt) {
            const { delayChildren: Hr } = dt.transition || {};
            W.delay = Cr(st.enteringChildren, t, Hr);
          }
        }
        return {
          animation: I,
          options: W
        };
      }));
    }
    if (f.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const g = xt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (x.transition = g.transition);
      }
      f.forEach((g) => {
        const b = t.getBaseTarget(g), v = t.getValue(g);
        v && (v.liveStyle = !0), x[g] = b ?? null;
      }), h.push({ animation: x });
    }
    let y = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = !1), i = !1, y ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    if (n[l].isActive === u)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(l, u)), n[l].isActive = u;
    const c = r(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = bi();
    }
  };
}
function hc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Sr(e, t) : !1;
}
function rt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function bi() {
  return {
    animate: rt(!0),
    whileInView: rt(),
    whileHover: rt(),
    whileTap: rt(),
    whileDrag: rt(),
    whileFocus: rt(),
    exit: rt()
  };
}
class it {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class fc extends it {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = uc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    de(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let dc = 0;
class pc extends it {
  constructor() {
    super(...arguments), this.id = dc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const mc = {
  animation: {
    Feature: fc
  },
  exit: {
    Feature: pc
  }
};
function Ht(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Xt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const gc = (t) => (e) => An(e) && t(e, Xt(e));
function Nt(t, e, n, i) {
  return Ht(t, e, gc(n), i);
}
const Vr = 1e-4, yc = 1 - Vr, vc = 1 + Vr, Mr = 0.01, xc = 0 - Mr, bc = 0 + Mr;
function _(t) {
  return t.max - t.min;
}
function Tc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ti(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = L(e.min, e.max, t.origin), t.scale = _(n) / _(e), t.translate = L(n.min, n.max, t.origin) - t.originPoint, (t.scale >= yc && t.scale <= vc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= xc && t.translate <= bc || isNaN(t.translate)) && (t.translate = 0);
}
function It(t, e, n, i) {
  Ti(t.x, e.x, n.x, i ? i.originX : void 0), Ti(t.y, e.y, n.y, i ? i.originY : void 0);
}
function wi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + _(e);
}
function wc(t, e, n) {
  wi(t.x, e.x, n.x), wi(t.y, e.y, n.y);
}
function Pi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + _(e);
}
function Ot(t, e, n) {
  Pi(t.x, e.x, n.x), Pi(t.y, e.y, n.y);
}
function $(t) {
  return [t("x"), t("y")];
}
const Dr = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ci = (t, e) => Math.abs(t - e);
function Pc(t, e) {
  const n = Ci(t.x, e.x), i = Ci(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Lr {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Se(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, m = Pc(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !m)
        return;
      const { point: y } = f, { timestamp: x } = O;
      this.history.push({ ...y, timestamp: x });
      const { onStart: g, onMove: b } = this.handlers;
      p || (g && g(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, p) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Ce(p, this.transformPagePoint), D.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, p) => {
      this.end();
      const { onEnd: m, onSessionEnd: y, resumeAnimation: x } = this.handlers;
      if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Se(f.type === "pointercancel" ? this.lastMoveEventInfo : Ce(p, this.transformPagePoint), this.history);
      this.startEvent && m && m(f, g), y && y(f, g);
    }, !An(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
    const a = Xt(e), l = Ce(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = O;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, Se(l, this.history)), this.removeListeners = Kt(Nt(this.contextWindow, "pointermove", this.handlePointerMove), Nt(this.contextWindow, "pointerup", this.handlePointerUp), Nt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), et(this.updatePoint);
  }
}
function Ce(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Si(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Se({ point: t }, e) {
  return {
    point: t,
    delta: Si(t, Er(e)),
    offset: Si(t, Cc(e)),
    velocity: Sc(e, 0.1)
  };
}
function Cc(t) {
  return t[0];
}
function Er(t) {
  return t[t.length - 1];
}
function Sc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Er(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ X(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ K(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Ac(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? L(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? L(n, t, i.max) : Math.min(t, n)), t;
}
function Ai(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Vc(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Ai(t.x, n, s),
    y: Ai(t.y, e, i)
  };
}
function Vi(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Mc(t, e) {
  return {
    x: Vi(t.x, e.x),
    y: Vi(t.y, e.y)
  };
}
function Dc(t, e) {
  let n = 0.5;
  const i = _(t), s = _(e);
  return s > i ? n = /* @__PURE__ */ Ft(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ Ft(t.min, t.max - s, e.min)), q(0, 1, n);
}
function Lc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Ze = 0.35;
function Ec(t = Ze) {
  return t === !1 ? t = 0 : t === !0 && (t = Ze), {
    x: Mi(t, "left", "right"),
    y: Mi(t, "top", "bottom")
  };
}
function Mi(t, e, n) {
  return {
    min: Di(t, e),
    max: Di(t, n)
  };
}
function Di(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Rc = /* @__PURE__ */ new WeakMap();
class kc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = R(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const o = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Xt(h).point);
    }, r = (h, f) => {
      const { drag: p, dragPropagation: m, onDragStart: y } = this.getProps();
      if (p && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = ja(p), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((g) => {
        let b = this.getAxisMotionValue(g).get() || 0;
        if (Y.test(b)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const C = v.layout.layoutBox[g];
            C && (b = _(C) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[g] = b;
      }), y && D.postRender(() => y(h, f)), Xe(this.visualElement, "transform");
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: p, dragDirectionLock: m, onDirectionLock: y, onDrag: x } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: g } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = Nc(g), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, g), this.updateAxis("y", f.point, g), this.visualElement.render(), x && x(h, f);
    }, l = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => $((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Lr(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: Dr(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !s || !i)
      return;
    const { velocity: r } = s;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && D.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !te(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = Ac(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && mt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Vc(i.layoutBox, e) : this.constraints = !1, this.elastic = Ec(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Lc(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !mt(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = Il(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Mc(s.layout.layoutBox, o);
    if (n) {
      const a = n(Rl(r));
      this.hasMutatedConstraints = !!a, a && (r = pr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = $((c) => {
      if (!te(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, p = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Xe(this.visualElement, e), i.start(Bn(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    $((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    $((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    $((n) => {
      const { drag: i } = this.getProps();
      if (!te(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - L(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!mt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    $((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Dc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), $((r) => {
      if (!te(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(L(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Rc.set(this.visualElement, this);
    const e = this.visualElement.current, n = Nt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      mt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), D.read(i);
    const r = Ht(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && ($((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = Ze, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function te(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Nc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Ic extends it {
  constructor(e) {
    super(e), this.removeGroupControls = G, this.removeListeners = G, this.controls = new kc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Li = (t) => (e, n) => {
  t && D.postRender(() => t(e, n));
};
class Oc extends it {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(e) {
    this.session = new Lr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Dr(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Li(e),
      onStart: Li(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && D.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Nt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const se = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ei(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Vt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (w.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Ei(t, e.target.x), i = Ei(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Bc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = nt.parse(t);
    if (s.length > 5)
      return i;
    const o = nt.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = L(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
let Ae = !1;
class Fc extends os {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    ol(jc), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), Ae && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), se.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, { projection: r } = i;
    return r && (r.isPresent = o, Ae = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || D.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Sn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    Ae = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Rr(t) {
  const [e, n] = tr(), i = B(nn);
  return d(Fc, { ...t, layoutGroup: i, switchLayoutGroup: B(fr), isPresent: e, safeToRemove: n });
}
const jc = {
  borderRadius: {
    ...Vt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Vt,
  borderTopRightRadius: Vt,
  borderBottomLeftRadius: Vt,
  borderBottomRightRadius: Vt,
  boxShadow: Bc
};
function _c(t, e, n) {
  const i = F(t) ? t : bt(t);
  return i.start(Bn("", i, e, n)), i.animation;
}
const Uc = (t, e) => t.depth - e.depth;
class Wc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    on(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    an(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Uc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Hc(t, e) {
  const n = U.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (et(i), t(o - e));
  };
  return D.setup(i, !0), () => et(i);
}
const kr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], $c = kr.length, Ri = (t) => typeof t == "string" ? parseFloat(t) : t, ki = (t) => typeof t == "number" || w.test(t);
function Kc(t, e, n, i, s, o) {
  s ? (t.opacity = L(0, n.opacity ?? 1, Gc(i)), t.opacityExit = L(e.opacity ?? 1, 0, zc(i))) : o && (t.opacity = L(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let r = 0; r < $c; r++) {
    const a = `border${kr[r]}Radius`;
    let l = Ni(e, a), u = Ni(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || ki(l) === ki(u) ? (t[a] = Math.max(L(Ri(l), Ri(u), i), 0), (Y.test(u) || Y.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, i));
}
function Ni(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Gc = /* @__PURE__ */ Nr(0, 0.5, bs), zc = /* @__PURE__ */ Nr(0.5, 0.95, G);
function Nr(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ Ft(t, e, i));
}
function Ii(t, e) {
  t.min = e.min, t.max = e.max;
}
function H(t, e) {
  Ii(t.x, e.x), Ii(t.y, e.y);
}
function Oi(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Bi(t, e, n, i, s) {
  return t -= e, t = ue(t, 1 / n, i), s !== void 0 && (t = ue(t, 1 / s, i)), t;
}
function Xc(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (Y.test(e) && (e = parseFloat(e), e = L(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = L(o.min, o.max, i);
  t === o && (a -= e), t.min = Bi(t.min, e, n, a, s), t.max = Bi(t.max, e, n, a, s);
}
function Fi(t, e, [n, i, s], o, r) {
  Xc(t, e[n], e[i], e[s], e.scale, o, r);
}
const Yc = ["x", "scaleX", "originX"], Zc = ["y", "scaleY", "originY"];
function ji(t, e, n, i) {
  Fi(t.x, e, Yc, n ? n.x : void 0, i ? i.x : void 0), Fi(t.y, e, Zc, n ? n.y : void 0, i ? i.y : void 0);
}
function _i(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ir(t) {
  return _i(t.x) && _i(t.y);
}
function Ui(t, e) {
  return t.min === e.min && t.max === e.max;
}
function qc(t, e) {
  return Ui(t.x, e.x) && Ui(t.y, e.y);
}
function Wi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Or(t, e) {
  return Wi(t.x, e.x) && Wi(t.y, e.y);
}
function Hi(t) {
  return _(t.x) / _(t.y);
}
function $i(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Jc {
  constructor() {
    this.members = [];
  }
  add(e) {
    on(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (an(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Qc(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = n?.z || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: p, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), p && (i += `skewX(${p}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Ve = ["", "X", "Y", "Z"], tu = 1e3;
let eu = 0;
function Me(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Br(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = wr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", D, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Br(i);
}
function Fr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e?.()) {
      this.id = eu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(su), this.nodes.forEach(lu), this.nodes.forEach(cu), this.nodes.forEach(ru);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wc());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new un()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = Qs(r) && !Ka(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        D.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const p = window.innerWidth;
          p !== h && (h = p, this.root.updateBlockedByResize = !0, c && c(), c = Hc(f, 250), se.hasAnimatedSinceResize && (se.hasAnimatedSinceResize = !1, this.nodes.forEach(zi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || pu, { onLayoutAnimationStart: y, onLayoutAnimationComplete: x } = u.getProps(), g = !this.targetLayout || !Or(this.targetLayout, p), b = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || b || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...Pn(m, "layout"),
            onPlay: y,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(c, b);
        } else
          h || zi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), et(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(uu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Br(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ki);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Gi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(au), this.nodes.forEach(nu), this.nodes.forEach(iu)) : this.nodes.forEach(Gi), this.clearAllSnapshots();
      const a = U.now();
      O.delta = q(0, 1e3 / 60, a - O.timestamp), O.timestamp = a, O.isProcessing = !0, ge.update.process(O), ge.preRender.process(O), ge.render.process(O), O.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Sn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ou), this.sharedNodes.forEach(hu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, D.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      D.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !_(this.snapshot.measuredBox.x) && !_(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = R(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ir(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || ot(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), mu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return R();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(gu))) {
        const { scroll: u } = this.root;
        u && (gt(a.x, u.offset.x), gt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = R();
      if (H(a, r), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && H(a, r), gt(a.x, c.offset.x), gt(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = R();
      H(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && yt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ot(c.latestValues) && yt(l, c.latestValues);
      }
      return ot(this.latestValues) && yt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = R();
      H(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ot(u.latestValues))
          continue;
        $e(u.latestValues) && u.updateSnapshot();
        const c = R(), h = u.measurePageBox();
        H(c, h), ji(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ot(this.latestValues) && ji(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== O.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = O.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = R(), this.relativeTargetOrigin = R(), Ot(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), H(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = R(), this.targetWithTransforms = R()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), wc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : H(this.target, this.layout.layoutBox), gr(this.target, this.targetDelta)) : H(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = R(), this.relativeTargetOrigin = R(), Ot(this.relativeTargetOrigin, this.target, f.target), H(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || $e(this.parent.latestValues) || mr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === O.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      H(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      Nl(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = R());
      const { target: p } = r;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Oi(this.prevProjectionDelta.x, this.projectionDelta.x), Oi(this.prevProjectionDelta.y, this.projectionDelta.y)), It(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !$i(this.projectionDelta.x, this.prevProjectionDelta.x) || !$i(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = vt(), this.projectionDelta = vt(), this.projectionDeltaWithTransform = vt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = vt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = R(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, y = p !== m, x = this.getStack(), g = !x || x.members.length <= 1, b = !!(y && !g && this.options.crossfade === !0 && !this.path.some(du));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (C) => {
        const T = C / 1e3;
        Xi(h.x, r.x, T), Xi(h.y, r.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ot(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), fu(this.relativeTarget, this.relativeTargetOrigin, f, T), v && qc(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = R()), H(v, this.relativeTarget)), y && (this.animationValues = c, Kc(c, u, this.latestValues, T, b, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = D.update(() => {
        se.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = bt(0)), this.currentAnimation = _c(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && jr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || R();
          const h = _(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = _(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        H(a, l), yt(a, c), It(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Jc()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Me("z", r, u, this.animationValues);
      for (let c = 0; c < Ve.length; c++)
        Me(`rotate${Ve[c]}`, r, u, this.animationValues), Me(`skew${Ve[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = ie(a?.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = ie(a?.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = Qc(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), r.transform = h;
      const { x: f, y: p } = this.projectionDelta;
      r.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in Wt) {
        if (c[m] === void 0)
          continue;
        const { correct: y, applyTo: x, isCSSVariable: g } = Wt[m], b = h === "none" ? c[m] : y(c[m], u);
        if (x) {
          const v = x.length;
          for (let C = 0; C < v; C++)
            r[x[C]] = b;
        } else
          g ? this.options.visualElement.renderState.vars[m] = b : r[m] = b;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? ie(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach(Ki), this.root.sharedNodes.clear();
    }
  };
}
function nu(t) {
  t.updateLayout();
}
function iu(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, o = e.source !== t.layout.source;
    s === "size" ? $((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = _(h);
      h.min = n[c].min, h.max = h.min + f;
    }) : jr(s, e.layoutBox, n) && $((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = _(n[c]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + f);
    });
    const r = vt();
    It(r, n, e.layoutBox);
    const a = vt();
    o ? It(a, t.applyTransform(i, !0), e.measuredBox) : It(a, n, e.layoutBox);
    const l = !Ir(r);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: f } = c;
        if (h && f) {
          const p = R();
          Ot(p, e.layoutBox, h.layoutBox);
          const m = R();
          Ot(m, n, f.layoutBox), Or(p, m) || (u = !0), c.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function su(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ru(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ou(t) {
  t.clearSnapshot();
}
function Ki(t) {
  t.clearMeasurements();
}
function Gi(t) {
  t.isLayoutDirty = !1;
}
function au(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function zi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function lu(t) {
  t.resolveTargetDelta();
}
function cu(t) {
  t.calcProjection();
}
function uu(t) {
  t.resetSkewAndRotation();
}
function hu(t) {
  t.removeLeadSnapshot();
}
function Xi(t, e, n) {
  t.translate = L(e.translate, 0, n), t.scale = L(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Yi(t, e, n, i) {
  t.min = L(e.min, n.min, i), t.max = L(e.max, n.max, i);
}
function fu(t, e, n, i) {
  Yi(t.x, e.x, n.x, i), Yi(t.y, e.y, n.y, i);
}
function du(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const pu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Zi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), qi = Zi("applewebkit/") && !Zi("chrome/") ? Math.round : G;
function Ji(t) {
  t.min = qi(t.min), t.max = qi(t.max);
}
function mu(t) {
  Ji(t.x), Ji(t.y);
}
function jr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Tc(Hi(e), Hi(n), 0.2);
}
function gu(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const yu = Fr({
  attachResizeListener: (t, e) => Ht(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), De = {
  current: void 0
}, _r = Fr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!De.current) {
      const t = new yu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), De.current = t;
    }
    return De.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), vu = {
  pan: {
    Feature: Oc
  },
  drag: {
    Feature: Ic,
    ProjectionNode: _r,
    MeasureLayout: Rr
  }
};
function Qi(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && D.postRender(() => o(e, Xt(e)));
}
class xu extends it {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = _a(e, (n, i) => (Qi(this.node, i, "Start"), (s) => Qi(this.node, s, "End"))));
  }
  unmount() {
  }
}
class bu extends it {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Kt(Ht(this.node.current, "focus", () => this.onFocus()), Ht(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ts(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && D.postRender(() => o(e, Xt(e)));
}
class Tu extends it {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = $a(e, (n, i) => (ts(this.node, i, "Start"), (s, { success: o }) => ts(this.node, s, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const qe = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), wu = (t) => {
  const e = qe.get(t.target);
  e && e(t);
}, Pu = (t) => {
  t.forEach(wu);
};
function Cu({ root: t, ...e }) {
  const n = t || document;
  Le.has(n) || Le.set(n, {});
  const i = Le.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Pu, { root: t, ...e })), i[s];
}
function Su(t, e, n) {
  const i = Cu(e);
  return qe.set(t, n), i.observe(t), () => {
    qe.delete(t), i.unobserve(t);
  };
}
const Au = {
  some: 0,
  all: 1
};
class Vu extends it {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Au[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Su(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Mu(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Mu({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Du = {
  inView: {
    Feature: Vu
  },
  tap: {
    Feature: Tu
  },
  focus: {
    Feature: bu
  },
  hover: {
    Feature: xu
  }
}, Lu = {
  layout: {
    ProjectionNode: _r,
    MeasureLayout: Rr
  }
}, Eu = {
  ...mc,
  ...Du,
  ...vu,
  ...Lu
}, M = /* @__PURE__ */ El(Eu, $l);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ku = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, i) => i ? i.toUpperCase() : n.toLowerCase()
), es = (t) => {
  const e = ku(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ur = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iu = Qe(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: o,
    iconNode: r,
    ...a
  }, l) => re(
    "svg",
    {
      ref: l,
      ...Nu,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: i ? Number(n) * 24 / Number(e) : n,
      className: Ur("lucide", s),
      ...a
    },
    [
      ...r.map(([u, c]) => re(u, c)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (t, e) => {
  const n = Qe(
    ({ className: i, ...s }, o) => re(Iu, {
      ref: o,
      iconNode: e,
      className: Ur(
        `lucide-${Ru(es(t))}`,
        `lucide-${t}`,
        i
      ),
      ...s
    })
  );
  return n.displayName = es(t), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Bu = Yt("chevron-down", Ou);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], ju = Yt("external-link", Fu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Uu = Yt("globe", _u);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Hu = Yt("search", Wu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ku = Yt("x", $u), at = {
  p14322600: "M14.2447 11.1859C16.194 11 18.7014 11 21.9428 11H22.0572C25.2972 11 27.8047 11 29.754 11.1859C31.7172 11.3747 33.266 11.7622 34.5107 12.6479C35.8056 13.5705 36.4321 14.7925 36.7251 16.3481C37 17.8015 37 19.6425 37 21.8935V22.1065C37 24.3575 37 26.1985 36.7251 27.6519C36.4321 29.2075 35.8056 30.4295 34.5107 31.3521C33.266 32.2378 31.7172 32.6253 29.7526 32.8141C27.8047 33 25.2972 33 22.0572 33H21.9428C18.7028 33 16.1953 33 14.246 32.8141C12.2828 32.6253 10.734 32.2378 9.4893 31.3521C8.19442 30.4295 7.56791 29.2075 7.27488 27.6519C7 26.1985 7 24.3575 7 22.1065V21.8935C7 19.6425 7 17.8015 7.27488 16.3481C7.56791 14.7925 8.19442 13.5705 9.4893 12.6479C10.734 11.7622 12.2828 11.3747 14.2474 11.1859M21.3847 17.6639C21.0284 17.423 20.5931 17.3345 20.1732 17.4177C19.7532 17.5008 19.3824 17.7489 19.1409 18.1081C18.9595 18.3792 18.8619 18.7014 18.8619 19.0307V24.9693C18.8617 25.2669 18.9409 25.5589 19.0909 25.8144C19.2409 26.0698 19.4562 26.2792 19.7138 26.4201C19.9715 26.561 20.2619 26.6283 20.5541 26.6148C20.8463 26.6013 21.1295 26.5074 21.3735 26.3432L25.8037 23.3995C26.0277 23.2512 26.212 23.0487 26.3399 22.81C26.4678 22.5713 26.5353 22.304 26.5364 22.0322C26.5375 21.7603 26.4722 21.4925 26.3462 21.2527C26.2203 21.013 26.0377 20.8088 25.8149 20.6587L21.3847 17.6639Z",
  p14f29e00: "M21.6667 0C23.8768 0 25.9964 0.877974 27.5592 2.44078C29.122 4.00358 30 6.1232 30 8.33333V21.6667C30 23.8768 29.122 25.9964 27.5592 27.5592C25.9964 29.122 23.8768 30 21.6667 30H8.33333C6.1232 30 4.00358 29.122 2.44078 27.5592C0.877974 25.9964 0 23.8768 0 21.6667V8.33333C0 6.1232 0.877974 4.00358 2.44078 2.44078C4.00358 0.877974 6.1232 0 8.33333 0H21.6667ZM15 8.33333C13.2319 8.33333 11.5362 9.03571 10.286 10.286C9.03571 11.5362 8.33333 13.2319 8.33333 15C8.33333 16.7681 9.03571 18.4638 10.286 19.714C11.5362 20.9643 13.2319 21.6667 15 21.6667C16.7681 21.6667 18.4638 20.9643 19.714 19.714C20.9643 18.4638 21.6667 16.7681 21.6667 15C21.6667 13.2319 20.9643 11.5362 19.714 10.286C18.4638 9.03571 16.7681 8.33333 15 8.33333ZM15 11.6667C15.8841 11.6667 16.7319 12.0179 17.357 12.643C17.9821 13.2681 18.3333 14.1159 18.3333 15C18.3333 15.8841 17.9821 16.7319 17.357 17.357C16.7319 17.9821 15.8841 18.3333 15 18.3333C14.1159 18.3333 13.2681 17.9821 12.643 17.357C12.0179 16.7319 11.6667 15.8841 11.6667 15C11.6667 14.1159 12.0179 13.2681 12.643 12.643C13.2681 12.0179 14.1159 11.6667 15 11.6667ZM22.5 5.83333C22.058 5.83333 21.634 6.00893 21.3215 6.32149C21.0089 6.63405 20.8333 7.05797 20.8333 7.5C20.8333 7.94203 21.0089 8.36595 21.3215 8.67851C21.634 8.99107 22.058 9.16667 22.5 9.16667C22.942 9.16667 23.366 8.99107 23.6785 8.67851C23.9911 8.36595 24.1667 7.94203 24.1667 7.5C24.1667 7.05797 23.9911 6.63405 23.6785 6.32149C23.366 6.00893 22.942 5.83333 22.5 5.83333Z",
  p1dcbabb2: "M37 22.0376C37 13.7368 30.28 7 22 7C13.72 7 7 13.7368 7 22.0376C7 29.3158 12.16 35.3759 19 36.7744V26.5489H16V22.0376H19V18.2782C19 15.3759 21.355 13.015 24.25 13.015H28V17.5263H25C24.175 17.5263 23.5 18.203 23.5 19.0301V22.0376H28V26.5489H23.5V37C31.075 36.2481 37 29.8421 37 22.0376Z",
  p2583c8c0: "M19.3293 0L0 8.95224L4.8158 27.2804L8.48115 26.8309L7.47433 15.3063L8.67792 14.7706L10.7562 26.5508L17.0198 25.7824L15.9066 13.0614L17.0987 12.53L19.3838 25.4923L25.7206 24.7138L24.5013 10.7706L25.7077 10.2334L28.2068 24.4093L34.4704 23.6381V3.79174L19.3293 0ZM19.7831 27.8004L20.102 29.6043L34.4704 32V25.9964L19.7917 27.8004H19.7831Z",
  p37350030: "M30.625 9H35.2257L25.1757 20.4358L37 36H27.7429L20.4871 26.5623L12.1943 36H7.58929L18.3379 23.764L7 9.00213H16.4929L23.0414 17.6269L30.625 9ZM29.0071 33.2591H31.5571L15.1 11.5983H12.3657L29.0071 33.2591Z",
  pe353000: "M33.3907 6C35.3387 6 36.9075 7.56338 37 9.40519V39L33.293 35.8743L31.2587 34.0376L29.0343 32.1143L29.96 35.1442H10.5169C8.57403 35.1442 7 33.6829 7 31.739V9.41138C7 7.56956 8.57506 6.00619 10.5231 6.00619H33.3803L33.3907 6ZM24.9158 13.8148H24.8722L24.5906 14.0891C27.4644 14.9162 28.8545 16.2052 28.8545 16.2052C27.0042 15.2864 25.3314 14.8244 23.6649 14.6367C22.4639 14.4542 21.2566 14.5511 20.2395 14.6367H19.9579C19.3086 14.6367 17.9236 14.9162 16.067 15.6515C15.4229 15.9309 15.0499 16.1135 15.0499 16.1135C15.0499 16.1135 16.4348 14.7326 19.4977 13.9973L19.3086 13.8148C19.3086 13.8148 16.9927 13.723 14.493 15.5607C14.493 15.5607 11.9932 19.8847 11.9932 25.2122C11.9932 25.2122 13.3782 27.6026 17.1777 27.6934C17.1777 27.6934 17.7345 26.9632 18.2925 26.3187C16.1605 25.6742 15.3273 24.3851 15.3273 24.3851C15.3273 24.3851 15.5164 24.4769 15.7927 24.6594H15.8738C15.9174 24.6594 15.9392 24.6811 15.96 24.7027V24.7131C15.9818 24.7347 16.0036 24.7502 16.041 24.7502C16.5013 24.9379 16.9553 25.1204 17.3294 25.3029C17.9787 25.5773 18.8068 25.8557 19.8239 26.0392C21.1122 26.2269 22.5886 26.3136 24.2717 26.0392C25.0997 25.8516 25.933 25.6742 26.7662 25.3029C27.3023 25.0286 27.9673 24.7553 28.6977 24.2882C28.6977 24.2882 27.8696 25.5772 25.6452 26.2218C26.1003 26.8612 26.7434 27.5964 26.7434 27.5964C30.547 27.5108 32.0244 25.1204 32.1055 25.2225C32.1055 19.9002 29.5891 15.571 29.5891 15.571C27.3273 13.9004 25.2057 13.8365 24.8327 13.8365L24.9086 13.8097L24.9158 13.8148ZM25.1486 19.8847C26.1231 19.8847 26.9075 20.7067 26.9075 21.7162C26.9075 22.7372 26.1179 23.5581 25.1486 23.5581C24.174 23.5581 23.3896 22.7362 23.3896 21.7266C23.3896 20.7056 24.1792 19.8847 25.1486 19.8847ZM18.8556 19.8847C19.8239 19.8847 20.6094 20.7067 20.6094 21.7162C20.6094 22.7372 19.8197 23.5581 18.8504 23.5581C17.8758 23.5581 17.0862 22.7362 17.0862 21.7266C17.0862 20.7056 17.8758 19.8847 18.8504 19.8847H18.8556Z"
}, Gu = {
  "RIOT GAMES": [
    { label: "Valorant" },
    { label: "League of Legends" },
    { label: "Teamfight Tactics" },
    { label: "Legends of Runeterra" },
    { label: "Wild Rift" }
  ],
  "GAME INFO": [
    { label: "Agents" },
    { label: "Maps" },
    { label: "Weapons" },
    { label: "Game Modes" },
    { label: "Rank System" }
  ],
  SUPPORT: [
    { label: "Help Center" },
    { label: "Submit a Ticket" },
    { label: "Player Support" },
    { label: "Bug Reports" }
  ],
  "OUR SOCIALS": [
    { label: "Twitter / X" },
    { label: "Instagram" },
    { label: "YouTube" },
    { label: "Discord" },
    { label: "Facebook" }
  ]
};
function Mt({
  label: t,
  external: e
}) {
  const [n, i] = Bt(!1), s = Gu[t], o = Z(null);
  return $t(() => {
    function r(a) {
      o.current && !o.current.contains(a.target) && i(!1);
    }
    return document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r);
  }, []), /* @__PURE__ */ V("div", { ref: o, className: "relative", children: [
    /* @__PURE__ */ V(
      "button",
      {
        onClick: () => s && i((r) => !r),
        className: "flex items-center gap-1 group",
        children: [
          /* @__PURE__ */ d("span", { className: "font-['Poppins',sans-serif] font-semibold text-[16px] text-white whitespace-nowrap group-hover:text-[#ff4655] transition-colors duration-200", children: t }),
          e ? /* @__PURE__ */ d(ju, { size: 14, className: "text-[#B7B7B7] group-hover:text-[#ff4655] transition-colors duration-200" }) : s ? /* @__PURE__ */ d(
            M.div,
            {
              animate: { rotate: n ? 180 : 0 },
              transition: { duration: 0.2 },
              children: /* @__PURE__ */ d(Bu, { size: 14, className: "text-[#B7B7B7] group-hover:text-[#ff4655] transition-colors duration-200" })
            }
          ) : null
        ]
      }
    ),
    /* @__PURE__ */ d(Mn, { children: n && s && /* @__PURE__ */ d(
      M.div,
      {
        initial: { opacity: 0, y: -8, scaleY: 0.9 },
        animate: { opacity: 1, y: 0, scaleY: 1 },
        exit: { opacity: 0, y: -8, scaleY: 0.9 },
        transition: { duration: 0.18, ease: "easeOut" },
        style: { transformOrigin: "top" },
        className: "absolute top-full left-0 mt-3 min-w-[200px] bg-[rgba(15,15,15,0.97)] border border-[#ff4655]/30 rounded-lg overflow-hidden z-50 shadow-[0_8px_32px_rgba(255,70,85,0.2)]",
        children: s.map((r, a) => /* @__PURE__ */ d(
          M.button,
          {
            initial: { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: a * 0.04 },
            className: "w-full text-left px-5 py-3 text-white/80 hover:text-white hover:bg-[#ff4655]/10 font-['Poppins',sans-serif] text-[14px] font-medium transition-colors duration-150 border-b border-white/5 last:border-0",
            children: r.label
          },
          r.label
        ))
      }
    ) })
  ] });
}
function zu() {
  const [t, e] = Bt(!1), n = ["MEDIA", "NEWS", "MY CARD"];
  return /* @__PURE__ */ d(
    M.nav,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "fixed top-0 left-0 right-0 z-50 h-[80px] bg-[rgba(0,0,0,0.85)] backdrop-blur-md border-b border-white/10 flex items-center",
      children: /* @__PURE__ */ V("div", { className: "flex items-center justify-between w-full px-8", children: [
        /* @__PURE__ */ V("div", { className: "flex items-center gap-3 shrink-0", children: [
          /* @__PURE__ */ d("div", { className: "h-8 w-8", children: /* @__PURE__ */ d("svg", { fill: "none", viewBox: "0 0 34.4704 32", className: "h-full w-full", children: /* @__PURE__ */ d("path", { d: at.p2583c8c0, fill: "#E6E6E6" }) }) }),
          /* @__PURE__ */ V("div", { className: "font-['Poppins',sans-serif] font-semibold text-[16px] text-white leading-tight", children: [
            /* @__PURE__ */ d("div", { children: "RIOT" }),
            /* @__PURE__ */ d("div", { children: "GAMES" })
          ] })
        ] }),
        /* @__PURE__ */ V("div", { className: "flex items-center gap-7", children: [
          /* @__PURE__ */ d(Mt, { label: "RIOT GAMES" }),
          /* @__PURE__ */ d(Mt, { label: "GAME INFO" }),
          n.slice(0, 2).map((i) => /* @__PURE__ */ d(
            "button",
            {
              className: "font-['Poppins',sans-serif] font-semibold text-[16px] text-white hover:text-[#ff4655] transition-colors duration-200 whitespace-nowrap",
              children: i
            },
            i
          )),
          /* @__PURE__ */ d(Mt, { label: "SUPPORT" }),
          /* @__PURE__ */ d(Mt, { label: "OUR SOCIALS" }),
          /* @__PURE__ */ d(Mt, { label: "ESPORTS", external: !0 }),
          /* @__PURE__ */ d("button", { className: "font-['Poppins',sans-serif] font-semibold text-[16px] text-white hover:text-[#ff4655] transition-colors duration-200 whitespace-nowrap", children: "MY CARD" })
        ] }),
        /* @__PURE__ */ V("div", { className: "flex items-center gap-4 shrink-0", children: [
          /* @__PURE__ */ d(Mn, { mode: "wait", children: t ? /* @__PURE__ */ d(
            M.div,
            {
              initial: { width: 0, opacity: 0 },
              animate: { width: 200, opacity: 1 },
              exit: { width: 0, opacity: 0 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ d(
                "input",
                {
                  autoFocus: !0,
                  className: "bg-white/10 text-white placeholder-white/40 rounded-lg px-3 py-2 text-sm w-full outline-none border border-white/20 focus:border-[#ff4655]/50",
                  placeholder: "Search..."
                }
              )
            },
            "search-input"
          ) : null }),
          /* @__PURE__ */ d(
            "button",
            {
              onClick: () => e((i) => !i),
              className: "text-white/70 hover:text-white transition-colors",
              children: t ? /* @__PURE__ */ d(Ku, { size: 20 }) : /* @__PURE__ */ d(Hu, { size: 20 })
            }
          ),
          /* @__PURE__ */ d("button", { className: "text-white/70 hover:text-white transition-colors", children: /* @__PURE__ */ d(Uu, { size: 20 }) }),
          /* @__PURE__ */ d(
            M.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.97 },
              className: "bg-gradient-to-r from-[#ff4655] to-[#ff3d46] text-[#252525] font-['Poppins',sans-serif] font-bold text-[14px] px-5 py-2.5 rounded-xl hover:brightness-110 transition-all duration-200 shadow-[0_4px_16px_rgba(255,70,85,0.4)]",
              children: "PLAY NOW"
            }
          )
        ] })
      ] })
    }
  );
}
const Xu = "/_components/v2/d4de6d29a4cef8e4cb32049a01507ea9a06920cd/8b0566d6414bfaee20f3b431f3e3669f88e94c70.8b0566d6.png";
function Yu() {
  return /* @__PURE__ */ V("section", { className: "relative min-h-screen overflow-hidden bg-gradient-to-l from-[rgba(69,81,98,0.7)] via-[rgba(25,25,25,0.8)] to-[#191919]", children: [
    /* @__PURE__ */ d(
      M.div,
      {
        animate: { opacity: [0.3, 0.6, 0.3] },
        transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
        className: "absolute right-[10%] top-[20%] w-[600px] h-[600px] rounded-full bg-[#ff4655]/10 blur-[120px] pointer-events-none"
      }
    ),
    /* @__PURE__ */ d(
      M.div,
      {
        animate: { opacity: [0.2, 0.4, 0.2] },
        transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut", delay: 1 },
        className: "absolute left-[5%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-[#455162]/30 blur-[100px] pointer-events-none"
      }
    ),
    /* @__PURE__ */ d(
      M.div,
      {
        initial: { opacity: 0, x: 80 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 1, ease: "easeOut", delay: 0.3 },
        className: "absolute inset-0 pointer-events-none",
        children: /* @__PURE__ */ d(
          M.img,
          {
            src: Xu,
            alt: "Jett",
            animate: { y: [0, -18, 0] },
            transition: { duration: 5, repeat: 1 / 0, ease: "easeInOut" },
            className: "absolute h-full object-cover object-top w-full",
            style: { objectPosition: "center top" }
          }
        )
      }
    ),
    /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gradient-to-r from-[#191919] via-[rgba(25,25,25,0.7)] to-transparent pointer-events-none" }),
    /* @__PURE__ */ V("div", { className: "relative z-10 pt-[160px] pl-[100px] max-w-[780px]", children: [
      /* @__PURE__ */ d(
        M.div,
        {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
          transition: { duration: 0.6, delay: 0.5 },
          style: { transformOrigin: "left" },
          className: "w-[113px] h-[2px] bg-[#931717] mb-4"
        }
      ),
      /* @__PURE__ */ V(
        M.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.6 },
          className: "flex gap-2 mb-2",
          children: [
            /* @__PURE__ */ d("div", { className: "w-2 h-2 rounded-full bg-[#931717]" }),
            /* @__PURE__ */ d("div", { className: "w-2 h-2 rounded-full bg-[#931717]" }),
            /* @__PURE__ */ d("div", { className: "w-1 h-1 rounded-full bg-[#931717] mt-0.5" })
          ]
        }
      ),
      /* @__PURE__ */ d(
        M.h1,
        {
          initial: { opacity: 0, x: -60 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
          className: "font-['Poppins',sans-serif] font-extrabold italic text-[100px] text-white leading-none tracking-[-8px] mb-4 drop-shadow-[0_4px_24px_rgba(255,70,85,0.3)]",
          children: "JETT"
        }
      ),
      /* @__PURE__ */ d(
        M.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.7 },
          className: "font-['Poppins',sans-serif] font-medium text-[20px] text-white/90 leading-[1.5] max-w-[600px] mb-10",
          children: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them."
        }
      ),
      /* @__PURE__ */ V(
        M.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.9 },
          className: "flex items-center gap-4",
          children: [
            /* @__PURE__ */ d(
              M.button,
              {
                whileHover: { scale: 1.06, boxShadow: "0 8px 32px rgba(255,70,85,0.5)" },
                whileTap: { scale: 0.97 },
                className: "bg-gradient-to-r from-[#ff6d5e] to-[#ff3d46] text-[#252525] font-['Poppins',sans-serif] font-bold text-[16px] px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(255,70,85,0.4)] transition-all",
                children: "PLAY NOW"
              }
            ),
            /* @__PURE__ */ d(
              M.button,
              {
                whileHover: { scale: 1.04, borderColor: "#ff4655" },
                whileTap: { scale: 0.97 },
                className: "border border-white/30 text-white font-['Poppins',sans-serif] font-semibold text-[16px] px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all",
                children: "VIEW ABILITIES"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ V(
      M.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2 },
        className: "absolute top-[140px] right-[180px] z-10 text-right",
        children: [
          /* @__PURE__ */ d("div", { className: "w-[51px] h-[7px] bg-[#C02020] rounded-full ml-auto mb-1" }),
          /* @__PURE__ */ d("span", { className: "font-['Poppins',sans-serif] font-semibold text-[#c02020] text-[60px] leading-none tracking-[-4px]", children: "11." })
        ]
      }
    ),
    /* @__PURE__ */ V(
      M.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1 },
        whileHover: { scale: 1.05, boxShadow: "0 0 24px rgba(175,51,51,0.5)" },
        className: "absolute bottom-[120px] left-[100px] z-10 border-2 border-[#af3333] bg-[rgba(0,0,0,0.4)] w-[133px] h-[133px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all",
        children: [
          /* @__PURE__ */ d("div", { className: "w-[34px] h-[34px] relative", children: /* @__PURE__ */ V("svg", { viewBox: "0 0 30 30", className: "size-full", children: [
            /* @__PURE__ */ d("path", { d: "M15 15 L4 4 L15 15 L26 4 L15 15 L26 26 L15 15 L4 26 Z", fill: "#AF3333" }),
            /* @__PURE__ */ d("line", { x1: "4.76", y1: "3.93", x2: "26.44", y2: "25.61", stroke: "black", strokeWidth: "3" }),
            /* @__PURE__ */ d("line", { x1: "25.68", y1: "3.75", x2: "4.01", y2: "25.43", stroke: "black", strokeWidth: "3" }),
            /* @__PURE__ */ d("path", { d: "M0 0 L30 0 L30 30 L0 30 Z", fill: "#AF3333", fillOpacity: "0.6" }),
            /* @__PURE__ */ d("line", { x1: "4.76", y1: "3.93", x2: "26.44", y2: "25.61", stroke: "black", strokeWidth: "3" }),
            /* @__PURE__ */ d("line", { x1: "25.68", y1: "3.75", x2: "4.01", y2: "25.43", stroke: "black", strokeWidth: "3" })
          ] }) }),
          /* @__PURE__ */ d("span", { className: "font-['Poppins',sans-serif] font-semibold text-[14px] text-white tracking-[-0.9px]", children: "ROLE" }),
          /* @__PURE__ */ d("span", { className: "font-['Poppins',sans-serif] font-semibold text-[16px] text-[#af3333] tracking-[-1px]", children: "DUELIST" })
        ]
      }
    ),
    /* @__PURE__ */ d(
      M.div,
      {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { duration: 1, delay: 1.1, ease: "easeOut" },
        style: { transformOrigin: "left" },
        className: "absolute bottom-[80px] left-[100px] w-[764px] h-[3px] bg-[#931717] rounded-full"
      }
    ),
    /* @__PURE__ */ V(
      M.div,
      {
        animate: { y: [0, 8, 0] },
        transition: { duration: 1.5, repeat: 1 / 0 },
        className: "absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10",
        children: [
          /* @__PURE__ */ d("span", { className: "font-['Poppins',sans-serif] text-[12px] text-white/40", children: "SCROLL" }),
          /* @__PURE__ */ d("div", { className: "w-[1px] h-[30px] bg-gradient-to-b from-white/40 to-transparent" })
        ]
      }
    )
  ] });
}
const Je = "/_components/v2/d4de6d29a4cef8e4cb32049a01507ea9a06920cd/17b009e51744757277b0ee39303d2fff4d9cd1ea.17b009e5.png", ns = "/_components/v2/d4de6d29a4cef8e4cb32049a01507ea9a06920cd/a20e3b8f3f384f8a541f30d16d93f9fba784287b.a20e3b8f.png", is = [
  {
    key: "C",
    name: "CLOUDBURST",
    type: "BASIC",
    color: "#4a9eff",
    description: "Instantly throw a projectile that expands into a brief cloud of fog upon hitting the ground or a surface. Hold to curve the smoke in the direction of your crosshair.",
    image: Je
  },
  {
    key: "Q",
    name: "UPDRAFT",
    type: "BASIC",
    color: "#ff4655",
    description: "INSTANTLY propel Jett high into the air. Use this ability to reach elevated positions or to dodge incoming fire with a burst of vertical movement.",
    image: ns
  },
  {
    key: "E",
    name: "TAILWIND",
    type: "SIGNATURE",
    color: "#ffd700",
    description: "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will dash forward. Jett's signature ability that defines her kit.",
    image: Je
  },
  {
    key: "X",
    name: "BLADE STORM",
    type: "ULTIMATE",
    color: "#ff4655",
    description: "Equip a set of highly accurate throwing knives that recharge on kills. Left click to throw a single knife. Right click to throw all remaining knives at once.",
    image: ns
  }
];
function Zu({
  ability: t,
  index: e,
  active: n,
  onClick: i
}) {
  return /* @__PURE__ */ V(
    M.button,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { delay: e * 0.1, duration: 0.5 },
      whileHover: { y: -6 },
      onClick: i,
      className: `relative flex flex-col items-start p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left w-full ${n ? "bg-[rgba(255,70,85,0.1)] border-[#ff4655]/60 shadow-[0_0_30px_rgba(255,70,85,0.2)]" : "bg-[rgba(255,255,255,0.03)] border-white/10 hover:border-white/30 hover:bg-[rgba(255,255,255,0.06)]"}`,
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "w-10 h-10 rounded-lg flex items-center justify-center font-['Poppins',sans-serif] font-bold text-[16px] mb-3",
            style: {
              backgroundColor: n ? t.color + "33" : "rgba(255,255,255,0.08)",
              color: n ? t.color : "white",
              border: `1.5px solid ${n ? t.color : "rgba(255,255,255,0.15)"}`
            },
            children: t.key
          }
        ),
        /* @__PURE__ */ d(
          "div",
          {
            className: "font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[2px] mb-1",
            style: { color: t.color },
            children: t.type
          }
        ),
        /* @__PURE__ */ d("div", { className: "font-['Poppins',sans-serif] font-black text-white text-[18px] tracking-[-0.5px] mb-2", children: t.name }),
        /* @__PURE__ */ d("p", { className: "font-['Poppins',sans-serif] text-white/50 text-[13px] leading-[1.6] line-clamp-3", children: t.description }),
        n && /* @__PURE__ */ d(
          M.div,
          {
            layoutId: "active-indicator",
            className: "absolute bottom-0 left-6 right-6 h-[2px] rounded-full",
            style: { backgroundColor: t.color }
          }
        )
      ]
    }
  );
}
function qu() {
  const [t, e] = Bt(1), n = is[t];
  return /* @__PURE__ */ V("section", { className: "relative bg-[#191919] overflow-hidden py-24 px-[100px]", children: [
    /* @__PURE__ */ d("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]", children: /* @__PURE__ */ d("img", { src: Je, alt: "", className: "w-full object-cover" }) }),
    /* @__PURE__ */ d(
      M.div,
      {
        animate: { opacity: [0.2, 0.5, 0.2] },
        transition: { duration: 5, repeat: 1 / 0 },
        className: "absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none",
        style: { backgroundColor: n.color + "22" }
      }
    ),
    /* @__PURE__ */ V(
      M.div,
      {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        className: "mb-12",
        children: [
          /* @__PURE__ */ V("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ d("div", { className: "w-10 h-[3px] bg-[#ff4655] rounded-full" }),
            /* @__PURE__ */ d("span", { className: "font-['Poppins',sans-serif] text-[#ff4655] text-[12px] font-semibold tracking-[3px]", children: "VALORANT AGENT" })
          ] }),
          /* @__PURE__ */ V("h2", { className: "font-['Poppins',sans-serif] font-black text-white text-[64px] tracking-[-4px] leading-none", children: [
            "SPECIAL",
            /* @__PURE__ */ d("br", {}),
            /* @__PURE__ */ d("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40", children: "ABILITIES" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ V("div", { className: "flex gap-12 items-start", children: [
      /* @__PURE__ */ d("div", { className: "flex flex-col gap-4 w-[420px] shrink-0", children: is.map((i, s) => /* @__PURE__ */ d(
        Zu,
        {
          ability: i,
          index: s,
          active: t === s,
          onClick: () => e(s)
        },
        i.name
      )) }),
      /* @__PURE__ */ d("div", { className: "flex-1 min-h-[500px] relative", children: /* @__PURE__ */ d(Mn, { mode: "wait", children: /* @__PURE__ */ V(
        M.div,
        {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -40 },
          transition: { duration: 0.35 },
          className: "h-full",
          children: [
            /* @__PURE__ */ V("div", { className: "relative rounded-2xl overflow-hidden mb-6", style: { height: 360 }, children: [
              /* @__PURE__ */ d(
                "img",
                {
                  src: n.image,
                  alt: n.name,
                  className: "absolute inset-0 w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ d("div", { className: "absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" }),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center font-['Poppins',sans-serif] font-bold text-[24px]",
                  style: {
                    backgroundColor: n.color + "33",
                    color: n.color,
                    border: `2px solid ${n.color}`,
                    backdropFilter: "blur(8px)"
                  },
                  children: n.key
                }
              ),
              /* @__PURE__ */ V("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
                /* @__PURE__ */ d(
                  "div",
                  {
                    className: "font-['Poppins',sans-serif] text-[11px] font-semibold tracking-[3px] mb-1",
                    style: { color: n.color },
                    children: n.type
                  }
                ),
                /* @__PURE__ */ d("h3", { className: "font-['Poppins',sans-serif] font-black text-white text-[36px] tracking-[-1.5px] leading-none", children: n.name })
              ] })
            ] }),
            /* @__PURE__ */ V("div", { className: "bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-2xl p-6", children: [
              /* @__PURE__ */ d("p", { className: "font-['Poppins',sans-serif] text-white/80 text-[16px] leading-[1.7]", children: n.description }),
              /* @__PURE__ */ d(
                M.div,
                {
                  className: "h-[2px] rounded-full mt-4",
                  style: { backgroundColor: n.color },
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.5, delay: 0.2 },
                  layoutId: "desc-line"
                }
              )
            ] })
          ]
        },
        n.name
      ) }) })
    ] })
  ] });
}
function Dt({ children: t }) {
  return /* @__PURE__ */ d(
    M.button,
    {
      whileHover: { scale: 1.12, y: -3 },
      whileTap: { scale: 0.95 },
      className: "w-11 h-11 rounded-[8px] bg-[#373737] flex items-center justify-center hover:bg-[#ff4655]/20 hover:border hover:border-[#ff4655]/40 transition-all",
      children: t
    }
  );
}
function Ju() {
  return /* @__PURE__ */ V("footer", { className: "bg-black pt-12 pb-0", children: [
    /* @__PURE__ */ d(
      M.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className: "bg-[#2a2a2a] py-5 flex items-center justify-center mb-10",
        children: /* @__PURE__ */ d(
          M.button,
          {
            whileHover: { scale: 1.02, backgroundColor: "#333" },
            className: "bg-[#373737] text-white font-['Poppins',sans-serif] font-semibold text-[16px] px-16 py-4 rounded-[20px] transition-all",
            children: "DOWNLOAD RIOT MOBILE COMPANION APP"
          }
        )
      }
    ),
    /* @__PURE__ */ V("div", { className: "flex items-center justify-center gap-6 mb-10", children: [
      /* @__PURE__ */ d(Dt, { children: /* @__PURE__ */ d("svg", { viewBox: "0 0 44 44", className: "w-11 h-11", children: /* @__PURE__ */ d("path", { d: at.p14322600, fill: "white" }) }) }),
      /* @__PURE__ */ d(Dt, { children: /* @__PURE__ */ d("svg", { viewBox: "0 0 30 30", className: "w-6 h-6", children: /* @__PURE__ */ d("path", { d: at.p14f29e00, fill: "white" }) }) }),
      /* @__PURE__ */ d(Dt, { children: /* @__PURE__ */ d("svg", { viewBox: "0 0 44 44", className: "w-11 h-11", children: /* @__PURE__ */ d("path", { d: at.p37350030, fill: "white" }) }) }),
      /* @__PURE__ */ d(Dt, { children: /* @__PURE__ */ d("svg", { viewBox: "0 0 44 44", className: "w-11 h-11", children: /* @__PURE__ */ d("path", { d: at.p1dcbabb2, fill: "white" }) }) }),
      /* @__PURE__ */ d(Dt, { children: /* @__PURE__ */ d("svg", { viewBox: "0 0 44 44", className: "w-11 h-11", children: /* @__PURE__ */ d("path", { d: at.pe353000, fill: "white" }) }) })
    ] }),
    /* @__PURE__ */ V("div", { className: "flex items-center justify-center gap-3 mb-4 opacity-50", children: [
      /* @__PURE__ */ d("div", { className: "h-8 w-8", children: /* @__PURE__ */ d("svg", { fill: "none", viewBox: "0 0 34.4704 32", className: "h-full w-full", children: /* @__PURE__ */ d("path", { d: at.p2583c8c0, fill: "#E6E6E6" }) }) }),
      /* @__PURE__ */ V("div", { className: "font-['Poppins',sans-serif] font-semibold text-[16px] text-white leading-tight", children: [
        /* @__PURE__ */ d("div", { children: "RIOT" }),
        /* @__PURE__ */ d("div", { children: "GAMES" })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "flex items-center justify-center gap-10 mb-6", children: ["PRIVACY NOTICE", "TERMS OF SERVICE", "COOKIE PREFERENCES"].map((t) => /* @__PURE__ */ d(
      M.button,
      {
        whileHover: { color: "#ff4655" },
        className: "font-['Poppins',sans-serif] text-[13px] text-white/60 hover:text-[#ff4655] transition-colors",
        children: t
      },
      t
    )) }),
    /* @__PURE__ */ V("div", { className: "text-center pb-10 text-white/40 font-['Poppins',sans-serif] text-[13px] leading-[1.6]", children: [
      /* @__PURE__ */ d("p", { children: "@ 2020-2026 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademark," }),
      /* @__PURE__ */ d("p", { children: "service marks, and/or registered trademarks of Riot Games, Inc." })
    ] })
  ] });
}
function Qu() {
  return /* @__PURE__ */ V("div", { className: "bg-[#191919] min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ d(zu, {}),
    /* @__PURE__ */ d(Yu, {}),
    /* @__PURE__ */ d(qu, {}),
    /* @__PURE__ */ d(Ju, {})
  ] });
}
const th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qu
}, Symbol.toStringTag, { value: "Module" }));
export {
  nh as Code0_8
};
