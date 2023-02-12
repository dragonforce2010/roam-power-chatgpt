!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : ((t = t || self).isvParser = e());
})(this, function () {
  'use strict';
  var t =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var r = function (t) {
      return t && t.Math == Math && t;
    },
    n =
      r('object' == typeof globalThis && globalThis) ||
      r('object' == typeof window && window) ||
      r('object' == typeof self && self) ||
      r('object' == typeof t && t) ||
      (function () {
        return this;
      })() ||
      Function('return this')(),
    o = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    i = !o(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    c = {}.propertyIsEnumerable,
    u = Object.getOwnPropertyDescriptor,
    a = {
      f:
        u && !c.call({ 1: 2 }, 1)
          ? function (t) {
              var e = u(this, t);
              return !!e && e.enumerable;
            }
          : c,
    },
    f = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    l = {}.toString,
    s = function (t) {
      return l.call(t).slice(8, -1);
    },
    p = ''.split,
    y = o(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == s(t) ? p.call(t, '') : Object(t);
        }
      : Object,
    d = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    h = function (t) {
      return y(d(t));
    },
    v = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    },
    g = function (t, e) {
      if (!v(t)) return t;
      var r, n;
      if (e && 'function' == typeof (r = t.toString) && !v((n = r.call(t))))
        return n;
      if ('function' == typeof (r = t.valueOf) && !v((n = r.call(t)))) return n;
      if (!e && 'function' == typeof (r = t.toString) && !v((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    },
    b = {}.hasOwnProperty,
    m = function (t, e) {
      return b.call(t, e);
    },
    O = n.document,
    w = v(O) && v(O.createElement),
    S = function (t) {
      return w ? O.createElement(t) : {};
    },
    j =
      !i &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(S('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    T = Object.getOwnPropertyDescriptor,
    P = {
      f: i
        ? T
        : function (t, e) {
            if (((t = h(t)), (e = g(e, !0)), j))
              try {
                return T(t, e);
              } catch (t) {}
            if (m(t, e)) return f(!a.f.call(t, e), t[e]);
          },
    },
    A = /#|\.prototype\./,
    E = function (t, e) {
      var r = k[x(t)];
      return r == C || (r != L && ('function' == typeof e ? o(e) : !!e));
    },
    x = (E.normalize = function (t) {
      return String(t).replace(A, '.').toLowerCase();
    }),
    k = (E.data = {}),
    L = (E.NATIVE = 'N'),
    C = (E.POLYFILL = 'P'),
    _ = E,
    M = {},
    I = function (t, e, r) {
      if (
        ((function (t) {
          if ('function' != typeof t)
            throw TypeError(String(t) + ' is not a function');
        })(t),
        void 0 === e)
      )
        return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    R = function (t) {
      if (!v(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    },
    N = Object.defineProperty,
    D = {
      f: i
        ? N
        : function (t, e, r) {
            if ((R(t), (e = g(e, !0)), R(r), j))
              try {
                return N(t, e, r);
              } catch (t) {}
            if ('get' in r || 'set' in r)
              throw TypeError('Accessors not supported');
            return 'value' in r && (t[e] = r.value), t;
          },
    },
    F = i
      ? function (t, e, r) {
          return D.f(t, e, f(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        },
    G = P.f,
    V = function (t) {
      var e = function (e, r, n) {
        if (this instanceof t) {
          switch (arguments.length) {
            case 0:
              return new t();
            case 1:
              return new t(e);
            case 2:
              return new t(e, r);
          }
          return new t(e, r, n);
        }
        return t.apply(this, arguments);
      };
      return (e.prototype = t.prototype), e;
    },
    B = function (t, e) {
      var r,
        o,
        i,
        c,
        u,
        a,
        f,
        l,
        s = t.target,
        p = t.global,
        y = t.stat,
        d = t.proto,
        h = p ? n : y ? n[s] : (n[s] || {}).prototype,
        v = p ? M : M[s] || (M[s] = {}),
        g = v.prototype;
      for (i in e)
        (r = !_(p ? i : s + (y ? '.' : '#') + i, t.forced) && h && m(h, i)),
          (u = v[i]),
          r && (a = t.noTargetGet ? (l = G(h, i)) && l.value : h[i]),
          (c = r && a ? a : e[i]),
          (r && typeof u == typeof c) ||
            ((f =
              t.bind && r
                ? I(c, n)
                : t.wrap && r
                ? V(c)
                : d && 'function' == typeof c
                ? I(Function.call, c)
                : c),
            (t.sham || (c && c.sham) || (u && u.sham)) && F(f, 'sham', !0),
            (v[i] = f),
            d &&
              (m(M, (o = s + 'Prototype')) || F(M, o, {}),
              (M[o][i] = c),
              t.real && g && !g[i] && F(g, i, c)));
    };
  B(
    { target: 'Object', stat: !0, forced: !i, sham: !i },
    { defineProperty: D.f }
  );
  var W = e(function (t) {
      var e = M.Object,
        r = (t.exports = function (t, r, n) {
          return e.defineProperty(t, r, n);
        });
      e.defineProperty.sham && (r.sham = !0);
    }),
    z = W,
    H = Math.ceil,
    K = Math.floor,
    U = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? K : H)(t);
    },
    J = Math.min,
    q = function (t) {
      return t > 0 ? J(U(t), 9007199254740991) : 0;
    },
    Y = Math.max,
    Q = Math.min,
    X = function (t) {
      return function (e, r, n) {
        var o,
          i = h(e),
          c = q(i.length),
          u = (function (t, e) {
            var r = U(t);
            return r < 0 ? Y(r + e, 0) : Q(r, e);
          })(n, c);
        if (t && r != r) {
          for (; c > u; ) if ((o = i[u++]) != o) return !0;
        } else
          for (; c > u; u++)
            if ((t || u in i) && i[u] === r) return t || u || 0;
        return !t && -1;
      };
    },
    Z = { includes: X(!0), indexOf: X(!1) },
    $ = {},
    tt = Z.indexOf,
    et = function (t, e) {
      var r,
        n = h(t),
        o = 0,
        i = [];
      for (r in n) !m($, r) && m(n, r) && i.push(r);
      for (; e.length > o; ) m(n, (r = e[o++])) && (~tt(i, r) || i.push(r));
      return i;
    },
    rt = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ],
    nt =
      Object.keys ||
      function (t) {
        return et(t, rt);
      },
    ot = i
      ? Object.defineProperties
      : function (t, e) {
          R(t);
          for (var r, n = nt(e), o = n.length, i = 0; o > i; )
            D.f(t, (r = n[i++]), e[r]);
          return t;
        };
  B(
    { target: 'Object', stat: !0, forced: !i, sham: !i },
    { defineProperties: ot }
  );
  var it = e(function (t) {
      var e = M.Object,
        r = (t.exports = function (t, r) {
          return e.defineProperties(t, r);
        });
      e.defineProperties.sham && (r.sham = !0);
    }),
    ct = function (t) {
      return 'function' == typeof t ? t : void 0;
    },
    ut = function (t, e) {
      return arguments.length < 2
        ? ct(M[t]) || ct(n[t])
        : (M[t] && M[t][e]) || (n[t] && n[t][e]);
    },
    at = rt.concat('length', 'prototype'),
    ft = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return et(t, at);
        },
    },
    lt = { f: Object.getOwnPropertySymbols },
    st =
      ut('Reflect', 'ownKeys') ||
      function (t) {
        var e = ft.f(R(t)),
          r = lt.f;
        return r ? e.concat(r(t)) : e;
      },
    pt = function (t, e, r) {
      var n = g(e);
      n in t ? D.f(t, n, f(0, r)) : (t[n] = r);
    };
  B(
    { target: 'Object', stat: !0, sham: !i },
    {
      getOwnPropertyDescriptors: function (t) {
        for (
          var e, r, n = h(t), o = P.f, i = st(n), c = {}, u = 0;
          i.length > u;

        )
          void 0 !== (r = o(n, (e = i[u++]))) && pt(c, e, r);
        return c;
      },
    }
  );
  var yt = M.Object.getOwnPropertyDescriptors,
    dt = P.f,
    ht = o(function () {
      dt(1);
    });
  B(
    { target: 'Object', stat: !0, forced: !i || ht, sham: !i },
    {
      getOwnPropertyDescriptor: function (t, e) {
        return dt(h(t), e);
      },
    }
  );
  var vt,
    gt = e(function (t) {
      var e = M.Object,
        r = (t.exports = function (t, r) {
          return e.getOwnPropertyDescriptor(t, r);
        });
      e.getOwnPropertyDescriptor.sham && (r.sham = !0);
    }),
    bt =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        return !String(Symbol());
      }),
    mt = bt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Ot =
      Array.isArray ||
      function (t) {
        return 'Array' == s(t);
      },
    wt = function (t) {
      return Object(d(t));
    },
    St = ut('document', 'documentElement'),
    jt =
      n['__core-js_shared__'] ||
      (function (t, e) {
        try {
          F(n, t, e);
        } catch (r) {
          n[t] = e;
        }
        return e;
      })('__core-js_shared__', {}),
    Tt = e(function (t) {
      (t.exports = function (t, e) {
        return jt[t] || (jt[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.8.2',
        mode: 'pure',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      });
    }),
    Pt = 0,
    At = Math.random(),
    Et = function (t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++Pt + At).toString(36)
      );
    },
    xt = Tt('keys'),
    kt = function (t) {
      return xt[t] || (xt[t] = Et(t));
    },
    Lt = kt('IE_PROTO'),
    Ct = function () {},
    _t = function (t) {
      return '<script>' + t + '</script>';
    },
    Mt = function () {
      try {
        vt = document.domain && new ActiveXObject('htmlfile');
      } catch (t) {}
      var t, e;
      Mt = vt
        ? (function (t) {
            t.write(_t('')), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(vt)
        : (((e = S('iframe')).style.display = 'none'),
          St.appendChild(e),
          (e.src = String('javascript:')),
          (t = e.contentWindow.document).open(),
          t.write(_t('document.F=Object')),
          t.close(),
          t.F);
      for (var r = rt.length; r--; ) delete Mt.prototype[rt[r]];
      return Mt();
    };
  $[Lt] = !0;
  var It =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((Ct.prototype = R(t)),
              (r = new Ct()),
              (Ct.prototype = null),
              (r[Lt] = t))
            : (r = Mt()),
          void 0 === e ? r : ot(r, e)
        );
      },
    Rt = ft.f,
    Nt = {}.toString,
    Dt =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    Ft = {
      f: function (t) {
        return Dt && '[object Window]' == Nt.call(t)
          ? (function (t) {
              try {
                return Rt(t);
              } catch (t) {
                return Dt.slice();
              }
            })(t)
          : Rt(h(t));
      },
    },
    Gt = function (t, e, r, n) {
      n && n.enumerable ? (t[e] = r) : F(t, e, r);
    },
    Vt = Tt('wks'),
    Bt = n.Symbol,
    Wt = mt ? Bt : (Bt && Bt.withoutSetter) || Et,
    zt = function (t) {
      return (
        m(Vt, t) ||
          (bt && m(Bt, t) ? (Vt[t] = Bt[t]) : (Vt[t] = Wt('Symbol.' + t))),
        Vt[t]
      );
    },
    Ht = { f: zt },
    Kt = D.f,
    Ut = {};
  Ut[zt('toStringTag')] = 'z';
  var Jt = '[object z]' === String(Ut),
    qt = zt('toStringTag'),
    Yt =
      'Arguments' ==
      s(
        (function () {
          return arguments;
        })()
      ),
    Qt = Jt
      ? s
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), qt))
            ? r
            : Yt
            ? s(e)
            : 'Object' == (n = s(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : n;
        },
    Xt = Jt
      ? {}.toString
      : function () {
          return '[object ' + Qt(this) + ']';
        },
    Zt = D.f,
    $t = zt('toStringTag'),
    te = function (t, e, r, n) {
      if (t) {
        var o = r ? t : t.prototype;
        m(o, $t) || Zt(o, $t, { configurable: !0, value: e }),
          n && !Jt && F(o, 'toString', Xt);
      }
    },
    ee = Function.toString;
  'function' != typeof jt.inspectSource &&
    (jt.inspectSource = function (t) {
      return ee.call(t);
    });
  var re,
    ne,
    oe,
    ie = jt.inspectSource,
    ce = n.WeakMap,
    ue = 'function' == typeof ce && /native code/.test(ie(ce)),
    ae = n.WeakMap;
  if (ue) {
    var fe = jt.state || (jt.state = new ae()),
      le = fe.get,
      se = fe.has,
      pe = fe.set;
    (re = function (t, e) {
      return (e.facade = t), pe.call(fe, t, e), e;
    }),
      (ne = function (t) {
        return le.call(fe, t) || {};
      }),
      (oe = function (t) {
        return se.call(fe, t);
      });
  } else {
    var ye = kt('state');
    ($[ye] = !0),
      (re = function (t, e) {
        return (e.facade = t), F(t, ye, e), e;
      }),
      (ne = function (t) {
        return m(t, ye) ? t[ye] : {};
      }),
      (oe = function (t) {
        return m(t, ye);
      });
  }
  var de = {
      set: re,
      get: ne,
      has: oe,
      enforce: function (t) {
        return oe(t) ? ne(t) : re(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!v(e) || (r = ne(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return r;
        };
      },
    },
    he = zt('species'),
    ve = function (t, e) {
      var r;
      return (
        Ot(t) &&
          ('function' != typeof (r = t.constructor) ||
          (r !== Array && !Ot(r.prototype))
            ? v(r) && null === (r = r[he]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    },
    ge = [].push,
    be = function (t) {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        o = 4 == t,
        i = 6 == t,
        c = 7 == t,
        u = 5 == t || i;
      return function (a, f, l, s) {
        for (
          var p,
            d,
            h = wt(a),
            v = y(h),
            g = I(f, l, 3),
            b = q(v.length),
            m = 0,
            O = s || ve,
            w = e ? O(a, b) : r || c ? O(a, 0) : void 0;
          b > m;
          m++
        )
          if ((u || m in v) && ((d = g((p = v[m]), m, h)), t))
            if (e) w[m] = d;
            else if (d)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return p;
                case 6:
                  return m;
                case 2:
                  ge.call(w, p);
              }
            else
              switch (t) {
                case 4:
                  return !1;
                case 7:
                  ge.call(w, p);
              }
        return i ? -1 : n || o ? o : w;
      };
    },
    me = {
      forEach: be(0),
      map: be(1),
      filter: be(2),
      some: be(3),
      every: be(4),
      find: be(5),
      findIndex: be(6),
      filterOut: be(7),
    },
    Oe = me.forEach,
    we = kt('hidden'),
    Se = zt('toPrimitive'),
    je = de.set,
    Te = de.getterFor('Symbol'),
    Pe = Object.prototype,
    Ae = n.Symbol,
    Ee = ut('JSON', 'stringify'),
    xe = P.f,
    ke = D.f,
    Le = Ft.f,
    Ce = a.f,
    _e = Tt('symbols'),
    Me = Tt('op-symbols'),
    Ie = Tt('string-to-symbol-registry'),
    Re = Tt('symbol-to-string-registry'),
    Ne = Tt('wks'),
    De = n.QObject,
    Fe = !De || !De.prototype || !De.prototype.findChild,
    Ge =
      i &&
      o(function () {
        return (
          7 !=
          It(
            ke({}, 'a', {
              get: function () {
                return ke(this, 'a', { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (t, e, r) {
            var n = xe(Pe, e);
            n && delete Pe[e], ke(t, e, r), n && t !== Pe && ke(Pe, e, n);
          }
        : ke,
    Ve = function (t, e) {
      var r = (_e[t] = It(Ae.prototype));
      return (
        je(r, { type: 'Symbol', tag: t, description: e }),
        i || (r.description = e),
        r
      );
    },
    Be = mt
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          return Object(t) instanceof Ae;
        },
    We = function (t, e, r) {
      t === Pe && We(Me, e, r), R(t);
      var n = g(e, !0);
      return (
        R(r),
        m(_e, n)
          ? (r.enumerable
              ? (m(t, we) && t[we][n] && (t[we][n] = !1),
                (r = It(r, { enumerable: f(0, !1) })))
              : (m(t, we) || ke(t, we, f(1, {})), (t[we][n] = !0)),
            Ge(t, n, r))
          : ke(t, n, r)
      );
    },
    ze = function (t, e) {
      R(t);
      var r = h(e),
        n = nt(r).concat(Je(r));
      return (
        Oe(n, function (e) {
          (i && !He.call(r, e)) || We(t, e, r[e]);
        }),
        t
      );
    },
    He = function (t) {
      var e = g(t, !0),
        r = Ce.call(this, e);
      return (
        !(this === Pe && m(_e, e) && !m(Me, e)) &&
        (!(r || !m(this, e) || !m(_e, e) || (m(this, we) && this[we][e])) || r)
      );
    },
    Ke = function (t, e) {
      var r = h(t),
        n = g(e, !0);
      if (r !== Pe || !m(_e, n) || m(Me, n)) {
        var o = xe(r, n);
        return (
          !o || !m(_e, n) || (m(r, we) && r[we][n]) || (o.enumerable = !0), o
        );
      }
    },
    Ue = function (t) {
      var e = Le(h(t)),
        r = [];
      return (
        Oe(e, function (t) {
          m(_e, t) || m($, t) || r.push(t);
        }),
        r
      );
    },
    Je = function (t) {
      var e = t === Pe,
        r = Le(e ? Me : h(t)),
        n = [];
      return (
        Oe(r, function (t) {
          !m(_e, t) || (e && !m(Pe, t)) || n.push(_e[t]);
        }),
        n
      );
    };
  if (
    (bt ||
      (Gt(
        (Ae = function () {
          if (this instanceof Ae)
            throw TypeError('Symbol is not a constructor');
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = Et(t),
            r = function (t) {
              this === Pe && r.call(Me, t),
                m(this, we) && m(this[we], e) && (this[we][e] = !1),
                Ge(this, e, f(1, t));
            };
          return i && Fe && Ge(Pe, e, { configurable: !0, set: r }), Ve(e, t);
        }).prototype,
        'toString',
        function () {
          return Te(this).tag;
        }
      ),
      Gt(Ae, 'withoutSetter', function (t) {
        return Ve(Et(t), t);
      }),
      (a.f = He),
      (D.f = We),
      (P.f = Ke),
      (ft.f = Ft.f = Ue),
      (lt.f = Je),
      (Ht.f = function (t) {
        return Ve(zt(t), t);
      }),
      i &&
        ke(Ae.prototype, 'description', {
          configurable: !0,
          get: function () {
            return Te(this).description;
          },
        })),
    B({ global: !0, wrap: !0, forced: !bt, sham: !bt }, { Symbol: Ae }),
    Oe(nt(Ne), function (t) {
      !(function (t) {
        var e = M.Symbol || (M.Symbol = {});
        m(e, t) || Kt(e, t, { value: Ht.f(t) });
      })(t);
    }),
    B(
      { target: 'Symbol', stat: !0, forced: !bt },
      {
        for: function (t) {
          var e = String(t);
          if (m(Ie, e)) return Ie[e];
          var r = Ae(e);
          return (Ie[e] = r), (Re[r] = e), r;
        },
        keyFor: function (t) {
          if (!Be(t)) throw TypeError(t + ' is not a symbol');
          if (m(Re, t)) return Re[t];
        },
        useSetter: function () {
          Fe = !0;
        },
        useSimple: function () {
          Fe = !1;
        },
      }
    ),
    B(
      { target: 'Object', stat: !0, forced: !bt, sham: !i },
      {
        create: function (t, e) {
          return void 0 === e ? It(t) : ze(It(t), e);
        },
        defineProperty: We,
        defineProperties: ze,
        getOwnPropertyDescriptor: Ke,
      }
    ),
    B(
      { target: 'Object', stat: !0, forced: !bt },
      { getOwnPropertyNames: Ue, getOwnPropertySymbols: Je }
    ),
    B(
      {
        target: 'Object',
        stat: !0,
        forced: o(function () {
          lt.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return lt.f(wt(t));
        },
      }
    ),
    Ee)
  ) {
    var qe =
      !bt ||
      o(function () {
        var t = Ae();
        return (
          '[null]' != Ee([t]) || '{}' != Ee({ a: t }) || '{}' != Ee(Object(t))
        );
      });
    B(
      { target: 'JSON', stat: !0, forced: qe },
      {
        stringify: function (t, e, r) {
          for (var n, o = [t], i = 1; arguments.length > i; )
            o.push(arguments[i++]);
          if (((n = e), (v(e) || void 0 !== t) && !Be(t)))
            return (
              Ot(e) ||
                (e = function (t, e) {
                  if (
                    ('function' == typeof n && (e = n.call(this, t, e)), !Be(e))
                  )
                    return e;
                }),
              (o[1] = e),
              Ee.apply(null, o)
            );
        },
      }
    );
  }
  Ae.prototype[Se] || F(Ae.prototype, Se, Ae.prototype.valueOf),
    te(Ae, 'Symbol'),
    ($[we] = !0);
  var Ye = M.Object.getOwnPropertySymbols,
    Qe = o(function () {
      nt(1);
    });
  B(
    { target: 'Object', stat: !0, forced: Qe },
    {
      keys: function (t) {
        return nt(wt(t));
      },
    }
  );
  var Xe = M.Object.keys,
    Ze = Object.defineProperty,
    $e = {},
    tr = function (t) {
      throw t;
    },
    er = function (t, e) {
      if (m($e, t)) return $e[t];
      e || (e = {});
      var r = [][t],
        n = !!m(e, 'ACCESSORS') && e.ACCESSORS,
        c = m(e, 0) ? e[0] : tr,
        u = m(e, 1) ? e[1] : void 0;
      return ($e[t] =
        !!r &&
        !o(function () {
          if (n && !i) return !0;
          var t = { length: -1 };
          n ? Ze(t, 1, { enumerable: !0, get: tr }) : (t[1] = 1),
            r.call(t, c, u);
        }));
    },
    rr = Z.includes,
    nr = er('indexOf', { ACCESSORS: !0, 1: 0 });
  B(
    { target: 'Array', proto: !0, forced: !nr },
    {
      includes: function (t) {
        return rr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var or = function (t) {
      return M[t + 'Prototype'];
    },
    ir = or('Array').includes,
    cr = zt('match'),
    ur = function (t) {
      if (
        (function (t) {
          var e;
          return v(t) && (void 0 !== (e = t[cr]) ? !!e : 'RegExp' == s(t));
        })(t)
      )
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    ar = zt('match');
  B(
    {
      target: 'String',
      proto: !0,
      forced: !(function (t) {
        var e = /./;
        try {
          '/./'[t](e);
        } catch (r) {
          try {
            return (e[ar] = !1), '/./'[t](e);
          } catch (t) {}
        }
        return !1;
      })('includes'),
    },
    {
      includes: function (t) {
        return !!~String(d(this)).indexOf(
          ur(t),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var fr = or('String').includes,
    lr = Array.prototype,
    sr = String.prototype,
    pr = function (t) {
      var e = t.includes;
      return t === lr || (t instanceof Array && e === lr.includes)
        ? ir
        : 'string' == typeof t ||
          t === sr ||
          (t instanceof String && e === sr.includes)
        ? fr
        : e;
    },
    yr = W;
  var dr,
    hr,
    vr = function (t, e, r) {
      return (
        e in t
          ? yr(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    },
    gr = ut('navigator', 'userAgent') || '',
    br = n.process,
    mr = br && br.versions,
    Or = mr && mr.v8;
  Or
    ? (hr = (dr = Or.split('.'))[0] + dr[1])
    : gr &&
      (!(dr = gr.match(/Edge\/(\d+)/)) || dr[1] >= 74) &&
      (dr = gr.match(/Chrome\/(\d+)/)) &&
      (hr = dr[1]);
  var wr = hr && +hr,
    Sr = zt('species'),
    jr = function (t) {
      return (
        wr >= 51 ||
        !o(function () {
          var e = [];
          return (
            ((e.constructor = {})[Sr] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    Tr = zt('isConcatSpreadable'),
    Pr =
      wr >= 51 ||
      !o(function () {
        var t = [];
        return (t[Tr] = !1), t.concat()[0] !== t;
      }),
    Ar = jr('concat'),
    Er = function (t) {
      if (!v(t)) return !1;
      var e = t[Tr];
      return void 0 !== e ? !!e : Ot(t);
    };
  B(
    { target: 'Array', proto: !0, forced: !Pr || !Ar },
    {
      concat: function (t) {
        var e,
          r,
          n,
          o,
          i,
          c = wt(this),
          u = ve(c, 0),
          a = 0;
        for (e = -1, n = arguments.length; e < n; e++)
          if (Er((i = -1 === e ? c : arguments[e]))) {
            if (a + (o = q(i.length)) > 9007199254740991)
              throw TypeError('Maximum allowed index exceeded');
            for (r = 0; r < o; r++, a++) r in i && pt(u, a, i[r]);
          } else {
            if (a >= 9007199254740991)
              throw TypeError('Maximum allowed index exceeded');
            pt(u, a++, i);
          }
        return (u.length = a), u;
      },
    }
  );
  var xr,
    kr,
    Lr,
    Cr = or('Array').concat,
    _r = Array.prototype,
    Mr = function (t) {
      var e = t.concat;
      return t === _r || (t instanceof Array && e === _r.concat) ? Cr : e;
    },
    Ir = !o(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    Rr = kt('IE_PROTO'),
    Nr = Object.prototype,
    Dr = Ir
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = wt(t)),
            m(t, Rr)
              ? t[Rr]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Nr
              : null
          );
        },
    Fr = (zt('iterator'), !1);
  [].keys &&
    ('next' in (Lr = [].keys())
      ? (kr = Dr(Dr(Lr))) !== Object.prototype && (xr = kr)
      : (Fr = !0)),
    null == xr && (xr = {});
  var Gr = { IteratorPrototype: xr, BUGGY_SAFARI_ITERATORS: Fr },
    Vr = Gr.IteratorPrototype,
    Br =
      (Object.setPrototypeOf ||
        ('__proto__' in {} &&
          (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
          })()),
      Gr.IteratorPrototype),
    Wr = Gr.BUGGY_SAFARI_ITERATORS,
    zr = zt('iterator'),
    Hr = de.set,
    Kr = de.getterFor('Array Iterator'),
    Ur =
      ((function (t, e, r, n, o, i, c) {
        !(function (t, e, r) {
          var n = e + ' Iterator';
          (t.prototype = It(Vr, { next: f(1, r) })), te(t, n, !1, !0);
        })(r, e, n);
        var u,
          a,
          l,
          s = function (t) {
            if (t === o && v) return v;
            if (!Wr && t in d) return d[t];
            switch (t) {
              case 'keys':
              case 'values':
              case 'entries':
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this);
            };
          },
          p = e + ' Iterator',
          y = !1,
          d = t.prototype,
          h = d[zr] || d['@@iterator'] || (o && d[o]),
          v = (!Wr && h) || s(o),
          g = ('Array' == e && d.entries) || h;
        if (
          (g &&
            ((u = Dr(g.call(new t()))),
            Br !== Object.prototype && u.next && te(u, p, !0, !0)),
          'values' == o &&
            h &&
            'values' !== h.name &&
            ((y = !0),
            (v = function () {
              return h.call(this);
            })),
          c && d[zr] !== v && F(d, zr, v),
          o)
        )
          if (
            ((a = {
              values: s('values'),
              keys: i ? v : s('keys'),
              entries: s('entries'),
            }),
            c)
          )
            for (l in a) (Wr || y || !(l in d)) && Gt(d, l, a[l]);
          else B({ target: e, proto: !0, forced: Wr || y }, a);
      })(
        Array,
        'Array',
        function (t, e) {
          Hr(this, { type: 'Array Iterator', target: h(t), index: 0, kind: e });
        },
        function () {
          var t = Kr(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
          return !e || n >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : 'keys' == r
            ? { value: n, done: !1 }
            : 'values' == r
            ? { value: e[n], done: !1 }
            : { value: [n, e[n]], done: !1 };
        },
        'values'
      ),
      zt('toStringTag'));
  for (var Jr in {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  }) {
    var qr = n[Jr],
      Yr = qr && qr.prototype;
    Yr && Qt(Yr) !== Ur && F(Yr, Ur, Jr);
  }
  var Qr,
    Xr,
    Zr = me.forEach,
    $r =
      !!(Xr = []['forEach']) &&
      o(function () {
        Xr.call(
          null,
          Qr ||
            function () {
              throw 1;
            },
          1
        );
      }),
    tn = er('forEach'),
    en =
      $r && tn
        ? [].forEach
        : function (t) {
            return Zr(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  B({ target: 'Array', proto: !0, forced: [].forEach != en }, { forEach: en });
  var rn = or('Array').forEach,
    nn = Array.prototype,
    on = { DOMTokenList: !0, NodeList: !0 },
    cn = function (t) {
      var e = t.forEach;
      return t === nn ||
        (t instanceof Array && e === nn.forEach) ||
        on.hasOwnProperty(Qt(t))
        ? rn
        : e;
    },
    un = me.filter,
    an = jr('filter'),
    fn = er('filter');
  B(
    { target: 'Array', proto: !0, forced: !an || !fn },
    {
      filter: function (t) {
        return un(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var ln = or('Array').filter,
    sn = Array.prototype,
    pn = function (t) {
      var e = t.filter;
      return t === sn || (t instanceof Array && e === sn.filter) ? ln : e;
    },
    yn = me.map,
    dn = jr('map'),
    hn = er('map');
  B(
    { target: 'Array', proto: !0, forced: !dn || !hn },
    {
      map: function (t) {
        return yn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var vn = or('Array').map,
    gn = Array.prototype,
    bn = function (t) {
      var e = t.map;
      return t === gn || (t instanceof Array && e === gn.map) ? vn : e;
    };
  function mn(t, e) {
    var r = Xe(t);
    if (Ye) {
      var n = Ye(t);
      e &&
        (n = pn(n).call(n, function (e) {
          return gt(t, e).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function On(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r,
        n = null != arguments[e] ? arguments[e] : {};
      if (e % 2)
        cn((r = mn(Object(n), !0))).call(r, function (e) {
          vr(t, e, n[e]);
        });
      else if (yt) it(t, yt(n));
      else {
        var o;
        cn((o = mn(Object(n)))).call(o, function (e) {
          z(t, e, gt(n, e));
        });
      }
    }
    return t;
  }
  var wn = function (t) {
      return { type: 'text', content: { text: t } };
    },
    Sn = function (t, e, r) {
      return On(On({}, r), {}, { type: 'card', content: { code: t, data: e } });
    },
    jn = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    Tn = !jn(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    Pn = function (t) {
      return t && t.Math == Math && t;
    },
    An =
      Pn('object' == typeof globalThis && globalThis) ||
      Pn('object' == typeof window && window) ||
      Pn('object' == typeof self && self) ||
      Pn('object' == typeof t && t) ||
      (function () {
        return this;
      })() ||
      Function('return this')(),
    En = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    },
    xn = An.document,
    kn = En(xn) && En(xn.createElement),
    Ln =
      !Tn &&
      !jn(function () {
        return (
          7 !=
          Object.defineProperty(
            ((t = 'div'), kn ? xn.createElement(t) : {}),
            'a',
            {
              get: function () {
                return 7;
              },
            }
          ).a
        );
        var t;
      }),
    Cn = function (t) {
      if (!En(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    },
    _n = Object.defineProperty,
    Mn = {
      f: Tn
        ? _n
        : function (t, e, r) {
            if (
              (Cn(t),
              (e = (function (t, e) {
                if (!En(t)) return t;
                var r, n;
                if (
                  e &&
                  'function' == typeof (r = t.toString) &&
                  !En((n = r.call(t)))
                )
                  return n;
                if (
                  'function' == typeof (r = t.valueOf) &&
                  !En((n = r.call(t)))
                )
                  return n;
                if (
                  !e &&
                  'function' == typeof (r = t.toString) &&
                  !En((n = r.call(t)))
                )
                  return n;
                throw TypeError("Can't convert object to primitive value");
              })(e, !0)),
              Cn(r),
              Ln)
            )
              try {
                return _n(t, e, r);
              } catch (t) {}
            if ('get' in r || 'set' in r)
              throw TypeError('Accessors not supported');
            return 'value' in r && (t[e] = r.value), t;
          },
    }.f,
    In = Function.prototype,
    Rn = In.toString,
    Nn = /^\s*function ([^ (]*)/;
  function Dn(t) {
    var e = t.means,
      r = e.type,
      n = {
        name: t.name,
        type: r,
        logParams: { code: t.code, scene: t.scene },
      };
    switch (r) {
      case 'url':
        n.url = e.content;
        break;
      case 'card':
        n.card = e;
        break;
      default:
        n.text = e.content;
    }
    return n;
  }
  function Fn(t) {
    var e,
      r,
      n = t.Content,
      o = n.Code,
      i = n.Data,
      c = t.Context;
    try {
      e = JSON.parse(i);
    } catch (t) {
      console.log('parse card data error:', t), (e = {});
    }
    return 'dynamic_shortcuts' === o
      ? {
          type: 'quick-replies',
          content: { list: bn((r = e.shortcuts)).call(r, Dn) },
          context: c,
        }
      : Sn(o, e, { context: c });
  }
  function Gn(t, e) {
    var r = Xe(t);
    if (Ye) {
      var n = Ye(t);
      e &&
        (n = pn(n).call(n, function (e) {
          return gt(t, e).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Vn(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r,
        n = null != arguments[e] ? arguments[e] : {};
      if (e % 2)
        cn((r = Gn(Object(n), !0))).call(r, function (e) {
          vr(t, e, n[e]);
        });
      else if (yt) it(t, yt(n));
      else {
        var o;
        cn((o = Gn(Object(n)))).call(o, function (e) {
          z(t, e, gt(n, e));
        });
      }
    }
    return t;
  }
  Tn &&
    !('name' in In) &&
    Mn(In, 'name', {
      configurable: !0,
      get: function () {
        try {
          return Rn.call(this).match(Nn)[1];
        } catch (t) {
          return '';
        }
      },
    });
  return function (t) {
    var e,
      r = t.data,
      n = t.noAnswer,
      o = void 0 === n ? [wn('抱歉，您的问题我暂时答不上来。')] : n,
      i = t.associateTitle,
      c = void 0 === i ? '您可能还想问' : i,
      u = t.parseMachineRead,
      a = t.evaluableCodeList,
      f = void 0 === a ? ['knowledge'] : a,
      l = t.parseBotFramework,
      s = r.MessageId,
      p = [];
    return 'SessionBusy' === r.ErrorCode
      ? [{ type: 'system', content: { text: '抱歉，目前服务忙，等稍后' } }]
      : (cn((e = r.Messages)).call(e, function (t) {
          var e, n;
          switch (t.Type.toLowerCase()) {
            case 'text':
              var i = t.Text;
              switch (t.Text.AnswerSource) {
                case 'BotFramework':
                  p = Mr(p).call(
                    p,
                    (function (t, e) {
                      if ('{' !== t[0]) return wn(t);
                      try {
                        var r,
                          n = JSON.parse(t);
                        return e && e(n)
                          ? e(n)
                          : n.broadcast
                          ? wn(n.broadcast)
                          : [
                              wn(n.reply),
                              Sn('slot', {
                                hideShortcuts: !0,
                                multiLine: !0,
                                list: bn((r = n.list)).call(r, function (t) {
                                  return { title: t };
                                }),
                              }),
                            ];
                      } catch (e) {
                        return console.error(e), wn(t);
                      }
                    })(i.Content, l)
                  );
                  break;
                case 'MACHINE_READ':
                  u && (p = Mr(p).call(p, u(i)));
                  break;
                case 'NO_ANSWER':
                  p = Mr(p).call(p, o);
                  break;
                default:
                  p.push(wn(i.Content));
              }
              break;
            case 'recommend':
              p = Mr(p).call(
                p,
                ((n = t.Recommends),
                [
                  wn('请问您是否想要咨询以下问题？'),
                  Sn('recommend', {
                    list: bn(n).call(n, function (t) {
                      return { title: t.Title, url: t.Url };
                    }),
                  }),
                ])
              );
              break;
            case 'knowledge':
              p = Mr(p).call(
                p,
                (function (t, e, r) {
                  var n,
                    o = t.RelatedKnowledges
                      ? bn((n = t.RelatedKnowledges)).call(n, function (t) {
                          return { showTitle: t.Title };
                        })
                      : [],
                    i = [
                      Sn('knowledge', { text: t.Content, childKnowledges: o }),
                    ];
                  if (e) {
                    var c = pn(e).call(e, function (e) {
                      return e.Title !== t.Title;
                    });
                    c.length &&
                      i.push(
                        Sn('recommend', {
                          title: r,
                          list: bn(c).call(c, function (t) {
                            return { title: t.Title };
                          }),
                        })
                      );
                  }
                  return i;
                })(t.Knowledge, r.Associate, c)
              );
              break;
            case 'option':
              p = Mr(p).call(
                p,
                (function (t, e) {
                  return Sn('recommend', {
                    title: t || '为您推荐以下问题',
                    list: bn(e).call(e, function (t) {
                      return { title: t.ShowText, text: t.RtnText };
                    }),
                  });
                })(t.Title, t.Options)
              );
              break;
            case 'cardanswer':
              p = Mr(p).call(p, bn((e = t.CardList)).call(e, Fn));
              break;
            default:
              console.log(t);
          }
        }),
        bn(p).call(p, function (t, e) {
          var n;
          return Vn(
            Vn({}, t),
            {},
            {
              _id: Mr((n = ''.concat(s, '__'))).call(n, e),
              meta: {
                evaluable: pr(f).call(f, t.content.code),
                chatUuid: s,
                sid: r.SessionId,
              },
            }
          );
        }));
  };
});
