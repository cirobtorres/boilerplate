"use strict";
(exports.id = 271),
  (exports.ids = [271]),
  (exports.modules = {
    5753: (e, t, r) => {
      r.r(t),
        r.d(t, {
          DiagConsoleLogger: () => D,
          DiagLogLevel: () => n,
          INVALID_SPANID: () => es,
          INVALID_SPAN_CONTEXT: () => ed,
          INVALID_TRACEID: () => el,
          ProxyTracer: () => eC,
          ProxyTracerProvider: () => eI,
          ROOT_CONTEXT: () => M,
          SamplingDecision: () => i,
          SpanKind: () => u,
          SpanStatusCode: () => c,
          TraceFlags: () => a,
          ValueType: () => o,
          baggageEntryMetadataFromString: () => A,
          context: () => eB,
          createContextKey: () => I,
          createNoopMeter: () => J,
          createTraceState: () => eV,
          default: () => e0,
          defaultTextMapGetter: () => Z,
          defaultTextMapSetter: () => ee,
          diag: () => eG,
          isSpanContextValid: () => eR,
          isValidSpanId: () => eO,
          isValidTraceId: () => em,
          metrics: () => eF,
          propagation: () => eQ,
          trace: () => eZ,
        });
      var n,
        o,
        a,
        i,
        u,
        c,
        s = "object" == typeof globalThis ? globalThis : global,
        l = "1.4.1",
        d = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
        p = (function (e) {
          var t = new Set([e]),
            r = new Set(),
            n = e.match(d);
          if (!n)
            return function () {
              return !1;
            };
          var o = {
            major: +n[1],
            minor: +n[2],
            patch: +n[3],
            prerelease: n[4],
          };
          if (null != o.prerelease)
            return function (t) {
              return t === e;
            };
          function a(e) {
            return r.add(e), !1;
          }
          return function (e) {
            if (t.has(e)) return !0;
            if (r.has(e)) return !1;
            var n = e.match(d);
            if (!n) return a(e);
            var i = {
              major: +n[1],
              minor: +n[2],
              patch: +n[3],
              prerelease: n[4],
            };
            return null != i.prerelease || o.major !== i.major
              ? a(e)
              : 0 === o.major
                ? o.minor === i.minor && o.patch <= i.patch
                  ? (t.add(e), !0)
                  : a(e)
                : o.minor <= i.minor
                  ? (t.add(e), !0)
                  : a(e);
          };
        })(l),
        f = Symbol.for("opentelemetry.js.api." + l.split(".")[0]);
      function g(e, t, r, n) {
        void 0 === n && (n = !1);
        var o,
          a = (s[f] = null !== (o = s[f]) && void 0 !== o ? o : { version: l });
        if (!n && a[e]) {
          var i = Error(
            "@opentelemetry/api: Attempted duplicate registration of API: " + e
          );
          return r.error(i.stack || i.message), !1;
        }
        if (a.version !== l) {
          var i = Error(
            "@opentelemetry/api: Registration of version v" +
              a.version +
              " for " +
              e +
              " does not match previously registered API v" +
              l
          );
          return r.error(i.stack || i.message), !1;
        }
        return (
          (a[e] = t),
          r.debug(
            "@opentelemetry/api: Registered a global for " + e + " v" + l + "."
          ),
          !0
        );
      }
      function v(e) {
        var t,
          r,
          n = null === (t = s[f]) || void 0 === t ? void 0 : t.version;
        if (n && p(n))
          return null === (r = s[f]) || void 0 === r ? void 0 : r[e];
      }
      function _(e, t) {
        t.debug(
          "@opentelemetry/api: Unregistering a global for " + e + " v" + l + "."
        );
        var r = s[f];
        r && delete r[e];
      }
      var h = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              i.push(n.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
        b = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, o = 0, a = t.length; o < a; o++)
              (!n && o in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        y = (function () {
          function e(e) {
            this._namespace = e.namespace || "DiagComponentLogger";
          }
          return (
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return S("debug", this._namespace, e);
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return S("error", this._namespace, e);
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return S("info", this._namespace, e);
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return S("warn", this._namespace, e);
            }),
            (e.prototype.verbose = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return S("verbose", this._namespace, e);
            }),
            e
          );
        })();
      function S(e, t, r) {
        var n = v("diag");
        if (n) return r.unshift(t), n[e].apply(n, b([], h(r), !1));
      }
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.ERROR = 30)] = "ERROR"),
          (e[(e.WARN = 50)] = "WARN"),
          (e[(e.INFO = 60)] = "INFO"),
          (e[(e.DEBUG = 70)] = "DEBUG"),
          (e[(e.VERBOSE = 80)] = "VERBOSE"),
          (e[(e.ALL = 9999)] = "ALL");
      })(n || (n = {}));
      var E = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              i.push(n.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
        m = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, o = 0, a = t.length; o < a; o++)
              (!n && o in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        O = (function () {
          function e() {
            function e(e) {
              return function () {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                var n = v("diag");
                if (n) return n[e].apply(n, m([], E(t), !1));
              };
            }
            var t = this;
            (t.setLogger = function (e, r) {
              if ((void 0 === r && (r = { logLevel: n.INFO }), e === t)) {
                var o,
                  a,
                  i,
                  u = Error(
                    "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
                  );
                return (
                  t.error(
                    null !== (o = u.stack) && void 0 !== o ? o : u.message
                  ),
                  !1
                );
              }
              "number" == typeof r && (r = { logLevel: r });
              var c = v("diag"),
                s = (function (e, t) {
                  function r(r, n) {
                    var o = t[r];
                    return "function" == typeof o && e >= n
                      ? o.bind(t)
                      : function () {};
                  }
                  return (
                    e < n.NONE ? (e = n.NONE) : e > n.ALL && (e = n.ALL),
                    (t = t || {}),
                    {
                      error: r("error", n.ERROR),
                      warn: r("warn", n.WARN),
                      info: r("info", n.INFO),
                      debug: r("debug", n.DEBUG),
                      verbose: r("verbose", n.VERBOSE),
                    }
                  );
                })(null !== (a = r.logLevel) && void 0 !== a ? a : n.INFO, e);
              if (c && !r.suppressOverrideMessage) {
                var l =
                  null !== (i = Error().stack) && void 0 !== i
                    ? i
                    : "<failed to generate stacktrace>";
                c.warn("Current logger will be overwritten from " + l),
                  s.warn(
                    "Current logger will overwrite one already registered from " +
                      l
                  );
              }
              return g("diag", s, t, !0);
            }),
              (t.disable = function () {
                _("diag", t);
              }),
              (t.createComponentLogger = function (e) {
                return new y(e);
              }),
              (t.verbose = e("verbose")),
              (t.debug = e("debug")),
              (t.info = e("info")),
              (t.warn = e("warn")),
              (t.error = e("error"));
          }
          return (
            (e.instance = function () {
              return (
                this._instance || (this._instance = new e()), this._instance
              );
            }),
            e
          );
        })(),
        R = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              i.push(n.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
        T = function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
        P = (function () {
          function e(e) {
            this._entries = e ? new Map(e) : new Map();
          }
          return (
            (e.prototype.getEntry = function (e) {
              var t = this._entries.get(e);
              if (t) return Object.assign({}, t);
            }),
            (e.prototype.getAllEntries = function () {
              return Array.from(this._entries.entries()).map(function (e) {
                var t = R(e, 2);
                return [t[0], t[1]];
              });
            }),
            (e.prototype.setEntry = function (t, r) {
              var n = new e(this._entries);
              return n._entries.set(t, r), n;
            }),
            (e.prototype.removeEntry = function (t) {
              var r = new e(this._entries);
              return r._entries.delete(t), r;
            }),
            (e.prototype.removeEntries = function () {
              for (var t, r, n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o];
              var a = new e(this._entries);
              try {
                for (var i = T(n), u = i.next(); !u.done; u = i.next()) {
                  var c = u.value;
                  a._entries.delete(c);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  u && !u.done && (r = i.return) && r.call(i);
                } finally {
                  if (t) throw t.error;
                }
              }
              return a;
            }),
            (e.prototype.clear = function () {
              return new e();
            }),
            e
          );
        })(),
        N = Symbol("BaggageEntryMetadata"),
        x = O.instance();
      function C(e) {
        return void 0 === e && (e = {}), new P(new Map(Object.entries(e)));
      }
      function A(e) {
        return (
          "string" != typeof e &&
            (x.error(
              "Cannot create baggage metadata from unknown type: " + typeof e
            ),
            (e = "")),
          {
            __TYPE__: N,
            toString: function () {
              return e;
            },
          }
        );
      }
      function I(e) {
        return Symbol.for(e);
      }
      var M = new (function e(t) {
          var r = this;
          (r._currentContext = t ? new Map(t) : new Map()),
            (r.getValue = function (e) {
              return r._currentContext.get(e);
            }),
            (r.setValue = function (t, n) {
              var o = new e(r._currentContext);
              return o._currentContext.set(t, n), o;
            }),
            (r.deleteValue = function (t) {
              var n = new e(r._currentContext);
              return n._currentContext.delete(t), n;
            });
        })(),
        w = [
          { n: "error", c: "error" },
          { n: "warn", c: "warn" },
          { n: "info", c: "info" },
          { n: "debug", c: "debug" },
          { n: "verbose", c: "trace" },
        ],
        D = function () {
          for (var e = 0; e < w.length; e++)
            this[w[e].n] = (function (e) {
              return function () {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                if (console) {
                  var n = console[e];
                  if (
                    ("function" != typeof n && (n = console.log),
                    "function" == typeof n)
                  )
                    return n.apply(console, t);
                }
              };
            })(w[e].c);
        },
        L = (function () {
          var e = function (t, r) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(t, r);
          };
          return function (t, r) {
            if ("function" != typeof r && null !== r)
              throw TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        j = (function () {
          function e() {}
          return (
            (e.prototype.createHistogram = function (e, t) {
              return W;
            }),
            (e.prototype.createCounter = function (e, t) {
              return K;
            }),
            (e.prototype.createUpDownCounter = function (e, t) {
              return Y;
            }),
            (e.prototype.createObservableGauge = function (e, t) {
              return z;
            }),
            (e.prototype.createObservableCounter = function (e, t) {
              return q;
            }),
            (e.prototype.createObservableUpDownCounter = function (e, t) {
              return Q;
            }),
            (e.prototype.addBatchObservableCallback = function (e, t) {}),
            (e.prototype.removeBatchObservableCallback = function (e) {}),
            e
          );
        })(),
        V = function () {},
        B = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return L(t, e), (t.prototype.add = function (e, t) {}), t;
        })(V),
        G = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return L(t, e), (t.prototype.add = function (e, t) {}), t;
        })(V),
        U = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return L(t, e), (t.prototype.record = function (e, t) {}), t;
        })(V),
        H = (function () {
          function e() {}
          return (
            (e.prototype.addCallback = function (e) {}),
            (e.prototype.removeCallback = function (e) {}),
            e
          );
        })(),
        F = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return L(t, e), t;
        })(H),
        k = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return L(t, e), t;
        })(H),
        $ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return L(t, e), t;
        })(H),
        X = new j(),
        K = new B(),
        W = new U(),
        Y = new G(),
        q = new F(),
        z = new k(),
        Q = new $();
      function J() {
        return X;
      }
      !(function (e) {
        (e[(e.INT = 0)] = "INT"), (e[(e.DOUBLE = 1)] = "DOUBLE");
      })(o || (o = {}));
      var Z = {
          get: function (e, t) {
            if (null != e) return e[t];
          },
          keys: function (e) {
            return null == e ? [] : Object.keys(e);
          },
        },
        ee = {
          set: function (e, t, r) {
            null != e && (e[t] = r);
          },
        },
        et = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              i.push(n.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
        er = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, o = 0, a = t.length; o < a; o++)
              (!n && o in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        en = (function () {
          function e() {}
          return (
            (e.prototype.active = function () {
              return M;
            }),
            (e.prototype.with = function (e, t, r) {
              for (var n = [], o = 3; o < arguments.length; o++)
                n[o - 3] = arguments[o];
              return t.call.apply(t, er([r], et(n), !1));
            }),
            (e.prototype.bind = function (e, t) {
              return t;
            }),
            (e.prototype.enable = function () {
              return this;
            }),
            (e.prototype.disable = function () {
              return this;
            }),
            e
          );
        })(),
        eo = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
              i.push(n.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
        ea = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, o = 0, a = t.length; o < a; o++)
              (!n && o in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        ei = "context",
        eu = new en(),
        ec = (function () {
          function e() {}
          return (
            (e.getInstance = function () {
              return (
                this._instance || (this._instance = new e()), this._instance
              );
            }),
            (e.prototype.setGlobalContextManager = function (e) {
              return g(ei, e, O.instance());
            }),
            (e.prototype.active = function () {
              return this._getContextManager().active();
            }),
            (e.prototype.with = function (e, t, r) {
              for (var n, o = [], a = 3; a < arguments.length; a++)
                o[a - 3] = arguments[a];
              return (n = this._getContextManager()).with.apply(
                n,
                ea([e, t, r], eo(o), !1)
              );
            }),
            (e.prototype.bind = function (e, t) {
              return this._getContextManager().bind(e, t);
            }),
            (e.prototype._getContextManager = function () {
              return v(ei) || eu;
            }),
            (e.prototype.disable = function () {
              this._getContextManager().disable(), _(ei, O.instance());
            }),
            e
          );
        })();
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"), (e[(e.SAMPLED = 1)] = "SAMPLED");
      })(a || (a = {}));
      var es = "0000000000000000",
        el = "00000000000000000000000000000000",
        ed = { traceId: el, spanId: es, traceFlags: a.NONE },
        ep = (function () {
          function e(e) {
            void 0 === e && (e = ed), (this._spanContext = e);
          }
          return (
            (e.prototype.spanContext = function () {
              return this._spanContext;
            }),
            (e.prototype.setAttribute = function (e, t) {
              return this;
            }),
            (e.prototype.setAttributes = function (e) {
              return this;
            }),
            (e.prototype.addEvent = function (e, t) {
              return this;
            }),
            (e.prototype.setStatus = function (e) {
              return this;
            }),
            (e.prototype.updateName = function (e) {
              return this;
            }),
            (e.prototype.end = function (e) {}),
            (e.prototype.isRecording = function () {
              return !1;
            }),
            (e.prototype.recordException = function (e, t) {}),
            e
          );
        })(),
        ef = I("OpenTelemetry Context Key SPAN");
      function eg(e) {
        return e.getValue(ef) || void 0;
      }
      function ev() {
        return eg(ec.getInstance().active());
      }
      function e_(e, t) {
        return e.setValue(ef, t);
      }
      function eh(e) {
        return e.deleteValue(ef);
      }
      function eb(e, t) {
        return e_(e, new ep(t));
      }
      function ey(e) {
        var t;
        return null === (t = eg(e)) || void 0 === t ? void 0 : t.spanContext();
      }
      var eS = /^([0-9a-f]{32})$/i,
        eE = /^[0-9a-f]{16}$/i;
      function em(e) {
        return eS.test(e) && e !== el;
      }
      function eO(e) {
        return eE.test(e) && e !== es;
      }
      function eR(e) {
        return em(e.traceId) && eO(e.spanId);
      }
      function eT(e) {
        return new ep(e);
      }
      var eP = ec.getInstance(),
        eN = (function () {
          function e() {}
          return (
            (e.prototype.startSpan = function (e, t, r) {
              if (
                (void 0 === r && (r = eP.active()), null == t ? void 0 : t.root)
              )
                return new ep();
              var n = r && ey(r);
              return "object" == typeof n &&
                "string" == typeof n.spanId &&
                "string" == typeof n.traceId &&
                "number" == typeof n.traceFlags &&
                eR(n)
                ? new ep(n)
                : new ep();
            }),
            (e.prototype.startActiveSpan = function (e, t, r, n) {
              if (!(arguments.length < 2)) {
                2 == arguments.length
                  ? (i = t)
                  : 3 == arguments.length
                    ? ((o = t), (i = r))
                    : ((o = t), (a = r), (i = n));
                var o,
                  a,
                  i,
                  u = null != a ? a : eP.active(),
                  c = this.startSpan(e, o, u),
                  s = e_(u, c);
                return eP.with(s, i, void 0, c);
              }
            }),
            e
          );
        })(),
        ex = new eN(),
        eC = (function () {
          function e(e, t, r, n) {
            (this._provider = e),
              (this.name = t),
              (this.version = r),
              (this.options = n);
          }
          return (
            (e.prototype.startSpan = function (e, t, r) {
              return this._getTracer().startSpan(e, t, r);
            }),
            (e.prototype.startActiveSpan = function (e, t, r, n) {
              var o = this._getTracer();
              return Reflect.apply(o.startActiveSpan, o, arguments);
            }),
            (e.prototype._getTracer = function () {
              if (this._delegate) return this._delegate;
              var e = this._provider.getDelegateTracer(
                this.name,
                this.version,
                this.options
              );
              return e ? ((this._delegate = e), this._delegate) : ex;
            }),
            e
          );
        })(),
        eA = new ((function () {
          function e() {}
          return (
            (e.prototype.getTracer = function (e, t, r) {
              return new eN();
            }),
            e
          );
        })())(),
        eI = (function () {
          function e() {}
          return (
            (e.prototype.getTracer = function (e, t, r) {
              var n;
              return null !== (n = this.getDelegateTracer(e, t, r)) &&
                void 0 !== n
                ? n
                : new eC(this, e, t, r);
            }),
            (e.prototype.getDelegate = function () {
              var e;
              return null !== (e = this._delegate) && void 0 !== e ? e : eA;
            }),
            (e.prototype.setDelegate = function (e) {
              this._delegate = e;
            }),
            (e.prototype.getDelegateTracer = function (e, t, r) {
              var n;
              return null === (n = this._delegate) || void 0 === n
                ? void 0
                : n.getTracer(e, t, r);
            }),
            e
          );
        })();
      (function (e) {
        (e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
          (e[(e.RECORD = 1)] = "RECORD"),
          (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED");
      })(i || (i = {})),
        (function (e) {
          (e[(e.INTERNAL = 0)] = "INTERNAL"),
            (e[(e.SERVER = 1)] = "SERVER"),
            (e[(e.CLIENT = 2)] = "CLIENT"),
            (e[(e.PRODUCER = 3)] = "PRODUCER"),
            (e[(e.CONSUMER = 4)] = "CONSUMER");
        })(u || (u = {})),
        (function (e) {
          (e[(e.UNSET = 0)] = "UNSET"),
            (e[(e.OK = 1)] = "OK"),
            (e[(e.ERROR = 2)] = "ERROR");
        })(c || (c = {}));
      var eM = "[_0-9a-z-*/]",
        ew = RegExp(
          "^(?:[a-z]" +
            eM +
            "{0,255}|" +
            ("[a-z0-9]" + eM) +
            "{0,240}@[a-z]" +
            eM +
            "{0,13})$"
        ),
        eD = /^[ -~]{0,255}[!-~]$/,
        eL = /,|=/,
        ej = (function () {
          function e(e) {
            (this._internalState = new Map()), e && this._parse(e);
          }
          return (
            (e.prototype.set = function (e, t) {
              var r = this._clone();
              return (
                r._internalState.has(e) && r._internalState.delete(e),
                r._internalState.set(e, t),
                r
              );
            }),
            (e.prototype.unset = function (e) {
              var t = this._clone();
              return t._internalState.delete(e), t;
            }),
            (e.prototype.get = function (e) {
              return this._internalState.get(e);
            }),
            (e.prototype.serialize = function () {
              var e = this;
              return this._keys()
                .reduce(function (t, r) {
                  return t.push(r + "=" + e.get(r)), t;
                }, [])
                .join(",");
            }),
            (e.prototype._parse = function (e) {
              !(e.length > 512) &&
                ((this._internalState = e
                  .split(",")
                  .reverse()
                  .reduce(function (e, t) {
                    var r = t.trim(),
                      n = r.indexOf("=");
                    if (-1 !== n) {
                      var o = r.slice(0, n),
                        a = r.slice(n + 1, t.length);
                      ew.test(o) && eD.test(a) && !eL.test(a) && e.set(o, a);
                    }
                    return e;
                  }, new Map())),
                this._internalState.size > 32 &&
                  (this._internalState = new Map(
                    Array.from(this._internalState.entries())
                      .reverse()
                      .slice(0, 32)
                  )));
            }),
            (e.prototype._keys = function () {
              return Array.from(this._internalState.keys()).reverse();
            }),
            (e.prototype._clone = function () {
              var t = new e();
              return (t._internalState = new Map(this._internalState)), t;
            }),
            e
          );
        })();
      function eV(e) {
        return new ej(e);
      }
      var eB = ec.getInstance(),
        eG = O.instance(),
        eU = new ((function () {
          function e() {}
          return (
            (e.prototype.getMeter = function (e, t, r) {
              return X;
            }),
            e
          );
        })())(),
        eH = "metrics",
        eF = (function () {
          function e() {}
          return (
            (e.getInstance = function () {
              return (
                this._instance || (this._instance = new e()), this._instance
              );
            }),
            (e.prototype.setGlobalMeterProvider = function (e) {
              return g(eH, e, O.instance());
            }),
            (e.prototype.getMeterProvider = function () {
              return v(eH) || eU;
            }),
            (e.prototype.getMeter = function (e, t, r) {
              return this.getMeterProvider().getMeter(e, t, r);
            }),
            (e.prototype.disable = function () {
              _(eH, O.instance());
            }),
            e
          );
        })().getInstance(),
        ek = (function () {
          function e() {}
          return (
            (e.prototype.inject = function (e, t) {}),
            (e.prototype.extract = function (e, t) {
              return e;
            }),
            (e.prototype.fields = function () {
              return [];
            }),
            e
          );
        })(),
        e$ = I("OpenTelemetry Baggage Key");
      function eX(e) {
        return e.getValue(e$) || void 0;
      }
      function eK() {
        return eX(ec.getInstance().active());
      }
      function eW(e, t) {
        return e.setValue(e$, t);
      }
      function eY(e) {
        return e.deleteValue(e$);
      }
      var eq = "propagation",
        ez = new ek(),
        eQ = (function () {
          function e() {
            (this.createBaggage = C),
              (this.getBaggage = eX),
              (this.getActiveBaggage = eK),
              (this.setBaggage = eW),
              (this.deleteBaggage = eY);
          }
          return (
            (e.getInstance = function () {
              return (
                this._instance || (this._instance = new e()), this._instance
              );
            }),
            (e.prototype.setGlobalPropagator = function (e) {
              return g(eq, e, O.instance());
            }),
            (e.prototype.inject = function (e, t, r) {
              return (
                void 0 === r && (r = ee),
                this._getGlobalPropagator().inject(e, t, r)
              );
            }),
            (e.prototype.extract = function (e, t, r) {
              return (
                void 0 === r && (r = Z),
                this._getGlobalPropagator().extract(e, t, r)
              );
            }),
            (e.prototype.fields = function () {
              return this._getGlobalPropagator().fields();
            }),
            (e.prototype.disable = function () {
              _(eq, O.instance());
            }),
            (e.prototype._getGlobalPropagator = function () {
              return v(eq) || ez;
            }),
            e
          );
        })().getInstance(),
        eJ = "trace",
        eZ = (function () {
          function e() {
            (this._proxyTracerProvider = new eI()),
              (this.wrapSpanContext = eT),
              (this.isSpanContextValid = eR),
              (this.deleteSpan = eh),
              (this.getSpan = eg),
              (this.getActiveSpan = ev),
              (this.getSpanContext = ey),
              (this.setSpan = e_),
              (this.setSpanContext = eb);
          }
          return (
            (e.getInstance = function () {
              return (
                this._instance || (this._instance = new e()), this._instance
              );
            }),
            (e.prototype.setGlobalTracerProvider = function (e) {
              var t = g(eJ, this._proxyTracerProvider, O.instance());
              return t && this._proxyTracerProvider.setDelegate(e), t;
            }),
            (e.prototype.getTracerProvider = function () {
              return v(eJ) || this._proxyTracerProvider;
            }),
            (e.prototype.getTracer = function (e, t) {
              return this.getTracerProvider().getTracer(e, t);
            }),
            (e.prototype.disable = function () {
              _(eJ, O.instance()), (this._proxyTracerProvider = new eI());
            }),
            e
          );
        })().getInstance();
      let e0 = {
        context: eB,
        diag: eG,
        metrics: eF,
        propagation: eQ,
        trace: eZ,
      };
    },
    8775: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          prefixes: function () {
            return o;
          },
          bootstrap: function () {
            return u;
          },
          wait: function () {
            return c;
          },
          error: function () {
            return s;
          },
          warn: function () {
            return l;
          },
          ready: function () {
            return d;
          },
          info: function () {
            return p;
          },
          event: function () {
            return f;
          },
          trace: function () {
            return g;
          },
          warnOnce: function () {
            return _;
          },
        });
      let n = r(6106),
        o = {
          wait: (0, n.white)((0, n.bold)("○")),
          error: (0, n.red)((0, n.bold)("⨯")),
          warn: (0, n.yellow)((0, n.bold)("⚠")),
          ready: "▲",
          info: (0, n.white)((0, n.bold)(" ")),
          event: (0, n.green)((0, n.bold)("✓")),
          trace: (0, n.magenta)((0, n.bold)("\xbb")),
        },
        a = { log: "log", warn: "warn", error: "error" };
      function i(e, ...t) {
        ("" === t[0] || void 0 === t[0]) && 1 === t.length && t.shift();
        let r = e in a ? a[e] : "log",
          n = o[e];
        0 === t.length ? console[r]("") : console[r](" " + n, ...t);
      }
      function u(...e) {
        console.log(" ", ...e);
      }
      function c(...e) {
        i("wait", ...e);
      }
      function s(...e) {
        i("error", ...e);
      }
      function l(...e) {
        i("warn", ...e);
      }
      function d(...e) {
        i("ready", ...e);
      }
      function p(...e) {
        i("info", ...e);
      }
      function f(...e) {
        i("event", ...e);
      }
      function g(...e) {
        i("trace", ...e);
      }
      let v = new Set();
      function _(...e) {
        v.has(e[0]) || (v.add(e.join(" ")), l(...e));
      }
    },
    2236: (e, t) => {
      function r(e, t) {
        if (e.isStaticGeneration && e.experimental.ppr) {
          if (!e.postpone)
            throw Error(
              "Invariant: PPR is enabled but the postpone API is unavailable"
            );
          (e.postponeWasTriggered = !0),
            e.postpone(
              "This page needs to bail out of prerendering at this point because it used " +
                t +
                ". React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error"
            );
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "maybePostpone", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4389: (e) => {
      (() => {
        var t = {
            491: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ContextAPI = void 0);
              let n = r(223),
                o = r(172),
                a = r(930),
                i = "context",
                u = new n.NoopContextManager();
              class c {
                constructor() {}
                static getInstance() {
                  return (
                    this._instance || (this._instance = new c()), this._instance
                  );
                }
                setGlobalContextManager(e) {
                  return (0, o.registerGlobal)(i, e, a.DiagAPI.instance());
                }
                active() {
                  return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                  return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                  return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                  return (0, o.getGlobal)(i) || u;
                }
                disable() {
                  this._getContextManager().disable(),
                    (0, o.unregisterGlobal)(i, a.DiagAPI.instance());
                }
              }
              t.ContextAPI = c;
            },
            930: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.DiagAPI = void 0);
              let n = r(56),
                o = r(912),
                a = r(957),
                i = r(172);
              class u {
                constructor() {
                  function e(e) {
                    return function (...t) {
                      let r = (0, i.getGlobal)("diag");
                      if (r) return r[e](...t);
                    };
                  }
                  let t = this;
                  (t.setLogger = (e, r = { logLevel: a.DiagLogLevel.INFO }) => {
                    var n, u, c;
                    if (e === t) {
                      let e = Error(
                        "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
                      );
                      return (
                        t.error(
                          null !== (n = e.stack) && void 0 !== n ? n : e.message
                        ),
                        !1
                      );
                    }
                    "number" == typeof r && (r = { logLevel: r });
                    let s = (0, i.getGlobal)("diag"),
                      l = (0, o.createLogLevelDiagLogger)(
                        null !== (u = r.logLevel) && void 0 !== u
                          ? u
                          : a.DiagLogLevel.INFO,
                        e
                      );
                    if (s && !r.suppressOverrideMessage) {
                      let e =
                        null !== (c = Error().stack) && void 0 !== c
                          ? c
                          : "<failed to generate stacktrace>";
                      s.warn(`Current logger will be overwritten from ${e}`),
                        l.warn(
                          `Current logger will overwrite one already registered from ${e}`
                        );
                    }
                    return (0, i.registerGlobal)("diag", l, t, !0);
                  }),
                    (t.disable = () => {
                      (0, i.unregisterGlobal)("diag", t);
                    }),
                    (t.createComponentLogger = (e) =>
                      new n.DiagComponentLogger(e)),
                    (t.verbose = e("verbose")),
                    (t.debug = e("debug")),
                    (t.info = e("info")),
                    (t.warn = e("warn")),
                    (t.error = e("error"));
                }
                static instance() {
                  return (
                    this._instance || (this._instance = new u()), this._instance
                  );
                }
              }
              t.DiagAPI = u;
            },
            653: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.MetricsAPI = void 0);
              let n = r(660),
                o = r(172),
                a = r(930),
                i = "metrics";
              class u {
                constructor() {}
                static getInstance() {
                  return (
                    this._instance || (this._instance = new u()), this._instance
                  );
                }
                setGlobalMeterProvider(e) {
                  return (0, o.registerGlobal)(i, e, a.DiagAPI.instance());
                }
                getMeterProvider() {
                  return (0, o.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                  return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                  (0, o.unregisterGlobal)(i, a.DiagAPI.instance());
                }
              }
              t.MetricsAPI = u;
            },
            181: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.PropagationAPI = void 0);
              let n = r(172),
                o = r(874),
                a = r(194),
                i = r(277),
                u = r(369),
                c = r(930),
                s = "propagation",
                l = new o.NoopTextMapPropagator();
              class d {
                constructor() {
                  (this.createBaggage = u.createBaggage),
                    (this.getBaggage = i.getBaggage),
                    (this.getActiveBaggage = i.getActiveBaggage),
                    (this.setBaggage = i.setBaggage),
                    (this.deleteBaggage = i.deleteBaggage);
                }
                static getInstance() {
                  return (
                    this._instance || (this._instance = new d()), this._instance
                  );
                }
                setGlobalPropagator(e) {
                  return (0, n.registerGlobal)(s, e, c.DiagAPI.instance());
                }
                inject(e, t, r = a.defaultTextMapSetter) {
                  return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = a.defaultTextMapGetter) {
                  return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                  return this._getGlobalPropagator().fields();
                }
                disable() {
                  (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                  return (0, n.getGlobal)(s) || l;
                }
              }
              t.PropagationAPI = d;
            },
            997: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TraceAPI = void 0);
              let n = r(172),
                o = r(846),
                a = r(139),
                i = r(607),
                u = r(930),
                c = "trace";
              class s {
                constructor() {
                  (this._proxyTracerProvider = new o.ProxyTracerProvider()),
                    (this.wrapSpanContext = a.wrapSpanContext),
                    (this.isSpanContextValid = a.isSpanContextValid),
                    (this.deleteSpan = i.deleteSpan),
                    (this.getSpan = i.getSpan),
                    (this.getActiveSpan = i.getActiveSpan),
                    (this.getSpanContext = i.getSpanContext),
                    (this.setSpan = i.setSpan),
                    (this.setSpanContext = i.setSpanContext);
                }
                static getInstance() {
                  return (
                    this._instance || (this._instance = new s()), this._instance
                  );
                }
                setGlobalTracerProvider(e) {
                  let t = (0, n.registerGlobal)(
                    c,
                    this._proxyTracerProvider,
                    u.DiagAPI.instance()
                  );
                  return t && this._proxyTracerProvider.setDelegate(e), t;
                }
                getTracerProvider() {
                  return (0, n.getGlobal)(c) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                  return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                  (0, n.unregisterGlobal)(c, u.DiagAPI.instance()),
                    (this._proxyTracerProvider = new o.ProxyTracerProvider());
                }
              }
              t.TraceAPI = s;
            },
            277: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.deleteBaggage =
                  t.setBaggage =
                  t.getActiveBaggage =
                  t.getBaggage =
                    void 0);
              let n = r(491),
                o = r(780),
                a = (0, o.createContextKey)("OpenTelemetry Baggage Key");
              function i(e) {
                return e.getValue(a) || void 0;
              }
              (t.getBaggage = i),
                (t.getActiveBaggage = function () {
                  return i(n.ContextAPI.getInstance().active());
                }),
                (t.setBaggage = function (e, t) {
                  return e.setValue(a, t);
                }),
                (t.deleteBaggage = function (e) {
                  return e.deleteValue(a);
                });
            },
            993: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.BaggageImpl = void 0);
              class r {
                constructor(e) {
                  this._entries = e ? new Map(e) : new Map();
                }
                getEntry(e) {
                  let t = this._entries.get(e);
                  if (t) return Object.assign({}, t);
                }
                getAllEntries() {
                  return Array.from(this._entries.entries()).map(([e, t]) => [
                    e,
                    t,
                  ]);
                }
                setEntry(e, t) {
                  let n = new r(this._entries);
                  return n._entries.set(e, t), n;
                }
                removeEntry(e) {
                  let t = new r(this._entries);
                  return t._entries.delete(e), t;
                }
                removeEntries(...e) {
                  let t = new r(this._entries);
                  for (let r of e) t._entries.delete(r);
                  return t;
                }
                clear() {
                  return new r();
                }
              }
              t.BaggageImpl = r;
            },
            830: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.baggageEntryMetadataSymbol = void 0),
                (t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata"));
            },
            369: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.baggageEntryMetadataFromString = t.createBaggage = void 0);
              let n = r(930),
                o = r(993),
                a = r(830),
                i = n.DiagAPI.instance();
              (t.createBaggage = function (e = {}) {
                return new o.BaggageImpl(new Map(Object.entries(e)));
              }),
                (t.baggageEntryMetadataFromString = function (e) {
                  return (
                    "string" != typeof e &&
                      (i.error(
                        `Cannot create baggage metadata from unknown type: ${typeof e}`
                      ),
                      (e = "")),
                    {
                      __TYPE__: a.baggageEntryMetadataSymbol,
                      toString: () => e,
                    }
                  );
                });
            },
            67: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.context = void 0);
              let n = r(491);
              t.context = n.ContextAPI.getInstance();
            },
            223: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NoopContextManager = void 0);
              let n = r(780);
              class o {
                active() {
                  return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                  return t.call(r, ...n);
                }
                bind(e, t) {
                  return t;
                }
                enable() {
                  return this;
                }
                disable() {
                  return this;
                }
              }
              t.NoopContextManager = o;
            },
            780: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ROOT_CONTEXT = t.createContextKey = void 0),
                (t.createContextKey = function (e) {
                  return Symbol.for(e);
                });
              class r {
                constructor(e) {
                  let t = this;
                  (t._currentContext = e ? new Map(e) : new Map()),
                    (t.getValue = (e) => t._currentContext.get(e)),
                    (t.setValue = (e, n) => {
                      let o = new r(t._currentContext);
                      return o._currentContext.set(e, n), o;
                    }),
                    (t.deleteValue = (e) => {
                      let n = new r(t._currentContext);
                      return n._currentContext.delete(e), n;
                    });
                }
              }
              t.ROOT_CONTEXT = new r();
            },
            506: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.diag = void 0);
              let n = r(930);
              t.diag = n.DiagAPI.instance();
            },
            56: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.DiagComponentLogger = void 0);
              let n = r(172);
              class o {
                constructor(e) {
                  this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                  return a("debug", this._namespace, e);
                }
                error(...e) {
                  return a("error", this._namespace, e);
                }
                info(...e) {
                  return a("info", this._namespace, e);
                }
                warn(...e) {
                  return a("warn", this._namespace, e);
                }
                verbose(...e) {
                  return a("verbose", this._namespace, e);
                }
              }
              function a(e, t, r) {
                let o = (0, n.getGlobal)("diag");
                if (o) return r.unshift(t), o[e](...r);
              }
              t.DiagComponentLogger = o;
            },
            972: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.DiagConsoleLogger = void 0);
              let r = [
                { n: "error", c: "error" },
                { n: "warn", c: "warn" },
                { n: "info", c: "info" },
                { n: "debug", c: "debug" },
                { n: "verbose", c: "trace" },
              ];
              class n {
                constructor() {
                  for (let e = 0; e < r.length; e++)
                    this[r[e].n] = (function (e) {
                      return function (...t) {
                        if (console) {
                          let r = console[e];
                          if (
                            ("function" != typeof r && (r = console.log),
                            "function" == typeof r)
                          )
                            return r.apply(console, t);
                        }
                      };
                    })(r[e].c);
                }
              }
              t.DiagConsoleLogger = n;
            },
            912: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.createLogLevelDiagLogger = void 0);
              let n = r(957);
              t.createLogLevelDiagLogger = function (e, t) {
                function r(r, n) {
                  let o = t[r];
                  return "function" == typeof o && e >= n
                    ? o.bind(t)
                    : function () {};
                }
                return (
                  e < n.DiagLogLevel.NONE
                    ? (e = n.DiagLogLevel.NONE)
                    : e > n.DiagLogLevel.ALL && (e = n.DiagLogLevel.ALL),
                  (t = t || {}),
                  {
                    error: r("error", n.DiagLogLevel.ERROR),
                    warn: r("warn", n.DiagLogLevel.WARN),
                    info: r("info", n.DiagLogLevel.INFO),
                    debug: r("debug", n.DiagLogLevel.DEBUG),
                    verbose: r("verbose", n.DiagLogLevel.VERBOSE),
                  }
                );
              };
            },
            957: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.DiagLogLevel = void 0),
                (function (e) {
                  (e[(e.NONE = 0)] = "NONE"),
                    (e[(e.ERROR = 30)] = "ERROR"),
                    (e[(e.WARN = 50)] = "WARN"),
                    (e[(e.INFO = 60)] = "INFO"),
                    (e[(e.DEBUG = 70)] = "DEBUG"),
                    (e[(e.VERBOSE = 80)] = "VERBOSE"),
                    (e[(e.ALL = 9999)] = "ALL");
                })(t.DiagLogLevel || (t.DiagLogLevel = {}));
            },
            172: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0);
              let n = r(200),
                o = r(521),
                a = r(130),
                i = o.VERSION.split(".")[0],
                u = Symbol.for(`opentelemetry.js.api.${i}`),
                c = n._globalThis;
              (t.registerGlobal = function (e, t, r, n = !1) {
                var a;
                let i = (c[u] =
                  null !== (a = c[u]) && void 0 !== a
                    ? a
                    : { version: o.VERSION });
                if (!n && i[e]) {
                  let t = Error(
                    `@opentelemetry/api: Attempted duplicate registration of API: ${e}`
                  );
                  return r.error(t.stack || t.message), !1;
                }
                if (i.version !== o.VERSION) {
                  let t = Error(
                    `@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${o.VERSION}`
                  );
                  return r.error(t.stack || t.message), !1;
                }
                return (
                  (i[e] = t),
                  r.debug(
                    `@opentelemetry/api: Registered a global for ${e} v${o.VERSION}.`
                  ),
                  !0
                );
              }),
                (t.getGlobal = function (e) {
                  var t, r;
                  let n =
                    null === (t = c[u]) || void 0 === t ? void 0 : t.version;
                  if (n && (0, a.isCompatible)(n))
                    return null === (r = c[u]) || void 0 === r ? void 0 : r[e];
                }),
                (t.unregisterGlobal = function (e, t) {
                  t.debug(
                    `@opentelemetry/api: Unregistering a global for ${e} v${o.VERSION}.`
                  );
                  let r = c[u];
                  r && delete r[e];
                });
            },
            130: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.isCompatible = t._makeCompatibilityCheck = void 0);
              let n = r(521),
                o = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
              function a(e) {
                let t = new Set([e]),
                  r = new Set(),
                  n = e.match(o);
                if (!n) return () => !1;
                let a = {
                  major: +n[1],
                  minor: +n[2],
                  patch: +n[3],
                  prerelease: n[4],
                };
                if (null != a.prerelease)
                  return function (t) {
                    return t === e;
                  };
                function i(e) {
                  return r.add(e), !1;
                }
                return function (e) {
                  if (t.has(e)) return !0;
                  if (r.has(e)) return !1;
                  let n = e.match(o);
                  if (!n) return i(e);
                  let u = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4],
                  };
                  return null != u.prerelease || a.major !== u.major
                    ? i(e)
                    : 0 === a.major
                      ? a.minor === u.minor && a.patch <= u.patch
                        ? (t.add(e), !0)
                        : i(e)
                      : a.minor <= u.minor
                        ? (t.add(e), !0)
                        : i(e);
                };
              }
              (t._makeCompatibilityCheck = a), (t.isCompatible = a(n.VERSION));
            },
            886: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.metrics = void 0);
              let n = r(653);
              t.metrics = n.MetricsAPI.getInstance();
            },
            901: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ValueType = void 0),
                (function (e) {
                  (e[(e.INT = 0)] = "INT"), (e[(e.DOUBLE = 1)] = "DOUBLE");
                })(t.ValueType || (t.ValueType = {}));
            },
            102: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.createNoopMeter =
                  t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
                  t.NOOP_OBSERVABLE_GAUGE_METRIC =
                  t.NOOP_OBSERVABLE_COUNTER_METRIC =
                  t.NOOP_UP_DOWN_COUNTER_METRIC =
                  t.NOOP_HISTOGRAM_METRIC =
                  t.NOOP_COUNTER_METRIC =
                  t.NOOP_METER =
                  t.NoopObservableUpDownCounterMetric =
                  t.NoopObservableGaugeMetric =
                  t.NoopObservableCounterMetric =
                  t.NoopObservableMetric =
                  t.NoopHistogramMetric =
                  t.NoopUpDownCounterMetric =
                  t.NoopCounterMetric =
                  t.NoopMetric =
                  t.NoopMeter =
                    void 0);
              class r {
                constructor() {}
                createHistogram(e, r) {
                  return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                  return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                  return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                  return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                  return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                  return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
              }
              t.NoopMeter = r;
              class n {}
              t.NoopMetric = n;
              class o extends n {
                add(e, t) {}
              }
              t.NoopCounterMetric = o;
              class a extends n {
                add(e, t) {}
              }
              t.NoopUpDownCounterMetric = a;
              class i extends n {
                record(e, t) {}
              }
              t.NoopHistogramMetric = i;
              class u {
                addCallback(e) {}
                removeCallback(e) {}
              }
              t.NoopObservableMetric = u;
              class c extends u {}
              t.NoopObservableCounterMetric = c;
              class s extends u {}
              t.NoopObservableGaugeMetric = s;
              class l extends u {}
              (t.NoopObservableUpDownCounterMetric = l),
                (t.NOOP_METER = new r()),
                (t.NOOP_COUNTER_METRIC = new o()),
                (t.NOOP_HISTOGRAM_METRIC = new i()),
                (t.NOOP_UP_DOWN_COUNTER_METRIC = new a()),
                (t.NOOP_OBSERVABLE_COUNTER_METRIC = new c()),
                (t.NOOP_OBSERVABLE_GAUGE_METRIC = new s()),
                (t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new l()),
                (t.createNoopMeter = function () {
                  return t.NOOP_METER;
                });
            },
            660: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0);
              let n = r(102);
              class o {
                getMeter(e, t, r) {
                  return n.NOOP_METER;
                }
              }
              (t.NoopMeterProvider = o), (t.NOOP_METER_PROVIDER = new o());
            },
            200: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      "default" === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, "__esModule", { value: !0 }),
                o(r(46), t);
            },
            651: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t._globalThis = void 0),
                (t._globalThis =
                  "object" == typeof globalThis ? globalThis : global);
            },
            46: function (e, t, r) {
              var n =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, r, n) {
                        void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                              return t[r];
                            },
                          });
                      }
                    : function (e, t, r, n) {
                        void 0 === n && (n = r), (e[n] = t[r]);
                      }),
                o =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var r in e)
                      "default" === r ||
                        Object.prototype.hasOwnProperty.call(t, r) ||
                        n(t, e, r);
                  };
              Object.defineProperty(t, "__esModule", { value: !0 }),
                o(r(651), t);
            },
            939: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.propagation = void 0);
              let n = r(181);
              t.propagation = n.PropagationAPI.getInstance();
            },
            874: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NoopTextMapPropagator = void 0);
              class r {
                inject(e, t) {}
                extract(e, t) {
                  return e;
                }
                fields() {
                  return [];
                }
              }
              t.NoopTextMapPropagator = r;
            },
            194: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.defaultTextMapSetter = t.defaultTextMapGetter = void 0),
                (t.defaultTextMapGetter = {
                  get(e, t) {
                    if (null != e) return e[t];
                  },
                  keys: (e) => (null == e ? [] : Object.keys(e)),
                }),
                (t.defaultTextMapSetter = {
                  set(e, t, r) {
                    null != e && (e[t] = r);
                  },
                });
            },
            845: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.trace = void 0);
              let n = r(997);
              t.trace = n.TraceAPI.getInstance();
            },
            403: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NonRecordingSpan = void 0);
              let n = r(476);
              class o {
                constructor(e = n.INVALID_SPAN_CONTEXT) {
                  this._spanContext = e;
                }
                spanContext() {
                  return this._spanContext;
                }
                setAttribute(e, t) {
                  return this;
                }
                setAttributes(e) {
                  return this;
                }
                addEvent(e, t) {
                  return this;
                }
                setStatus(e) {
                  return this;
                }
                updateName(e) {
                  return this;
                }
                end(e) {}
                isRecording() {
                  return !1;
                }
                recordException(e, t) {}
              }
              t.NonRecordingSpan = o;
            },
            614: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NoopTracer = void 0);
              let n = r(491),
                o = r(607),
                a = r(403),
                i = r(139),
                u = n.ContextAPI.getInstance();
              class c {
                startSpan(e, t, r = u.active()) {
                  let n = !!(null == t ? void 0 : t.root);
                  if (n) return new a.NonRecordingSpan();
                  let c = r && (0, o.getSpanContext)(r);
                  return "object" == typeof c &&
                    "string" == typeof c.spanId &&
                    "string" == typeof c.traceId &&
                    "number" == typeof c.traceFlags &&
                    (0, i.isSpanContextValid)(c)
                    ? new a.NonRecordingSpan(c)
                    : new a.NonRecordingSpan();
                }
                startActiveSpan(e, t, r, n) {
                  let a, i, c;
                  if (arguments.length < 2) return;
                  2 == arguments.length
                    ? (c = t)
                    : 3 == arguments.length
                      ? ((a = t), (c = r))
                      : ((a = t), (i = r), (c = n));
                  let s = null != i ? i : u.active(),
                    l = this.startSpan(e, a, s),
                    d = (0, o.setSpan)(s, l);
                  return u.with(d, c, void 0, l);
                }
              }
              t.NoopTracer = c;
            },
            124: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.NoopTracerProvider = void 0);
              let n = r(614);
              class o {
                getTracer(e, t, r) {
                  return new n.NoopTracer();
                }
              }
              t.NoopTracerProvider = o;
            },
            125: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ProxyTracer = void 0);
              let n = r(614),
                o = new n.NoopTracer();
              class a {
                constructor(e, t, r, n) {
                  (this._provider = e),
                    (this.name = t),
                    (this.version = r),
                    (this.options = n);
                }
                startSpan(e, t, r) {
                  return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                  let o = this._getTracer();
                  return Reflect.apply(o.startActiveSpan, o, arguments);
                }
                _getTracer() {
                  if (this._delegate) return this._delegate;
                  let e = this._provider.getDelegateTracer(
                    this.name,
                    this.version,
                    this.options
                  );
                  return e ? ((this._delegate = e), this._delegate) : o;
                }
              }
              t.ProxyTracer = a;
            },
            846: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ProxyTracerProvider = void 0);
              let n = r(125),
                o = r(124),
                a = new o.NoopTracerProvider();
              class i {
                getTracer(e, t, r) {
                  var o;
                  return null !== (o = this.getDelegateTracer(e, t, r)) &&
                    void 0 !== o
                    ? o
                    : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                  var e;
                  return null !== (e = this._delegate) && void 0 !== e ? e : a;
                }
                setDelegate(e) {
                  this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                  var n;
                  return null === (n = this._delegate) || void 0 === n
                    ? void 0
                    : n.getTracer(e, t, r);
                }
              }
              t.ProxyTracerProvider = i;
            },
            996: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.SamplingDecision = void 0),
                (function (e) {
                  (e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
                    (e[(e.RECORD = 1)] = "RECORD"),
                    (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED");
                })(t.SamplingDecision || (t.SamplingDecision = {}));
            },
            607: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.getSpanContext =
                  t.setSpanContext =
                  t.deleteSpan =
                  t.setSpan =
                  t.getActiveSpan =
                  t.getSpan =
                    void 0);
              let n = r(780),
                o = r(403),
                a = r(491),
                i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
              function u(e) {
                return e.getValue(i) || void 0;
              }
              function c(e, t) {
                return e.setValue(i, t);
              }
              (t.getSpan = u),
                (t.getActiveSpan = function () {
                  return u(a.ContextAPI.getInstance().active());
                }),
                (t.setSpan = c),
                (t.deleteSpan = function (e) {
                  return e.deleteValue(i);
                }),
                (t.setSpanContext = function (e, t) {
                  return c(e, new o.NonRecordingSpan(t));
                }),
                (t.getSpanContext = function (e) {
                  var t;
                  return null === (t = u(e)) || void 0 === t
                    ? void 0
                    : t.spanContext();
                });
            },
            325: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TraceStateImpl = void 0);
              let n = r(564);
              class o {
                constructor(e) {
                  (this._internalState = new Map()), e && this._parse(e);
                }
                set(e, t) {
                  let r = this._clone();
                  return (
                    r._internalState.has(e) && r._internalState.delete(e),
                    r._internalState.set(e, t),
                    r
                  );
                }
                unset(e) {
                  let t = this._clone();
                  return t._internalState.delete(e), t;
                }
                get(e) {
                  return this._internalState.get(e);
                }
                serialize() {
                  return this._keys()
                    .reduce((e, t) => (e.push(t + "=" + this.get(t)), e), [])
                    .join(",");
                }
                _parse(e) {
                  !(e.length > 512) &&
                    ((this._internalState = e
                      .split(",")
                      .reverse()
                      .reduce((e, t) => {
                        let r = t.trim(),
                          o = r.indexOf("=");
                        if (-1 !== o) {
                          let a = r.slice(0, o),
                            i = r.slice(o + 1, t.length);
                          (0, n.validateKey)(a) &&
                            (0, n.validateValue)(i) &&
                            e.set(a, i);
                        }
                        return e;
                      }, new Map())),
                    this._internalState.size > 32 &&
                      (this._internalState = new Map(
                        Array.from(this._internalState.entries())
                          .reverse()
                          .slice(0, 32)
                      )));
                }
                _keys() {
                  return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                  let e = new o();
                  return (e._internalState = new Map(this._internalState)), e;
                }
              }
              t.TraceStateImpl = o;
            },
            564: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.validateValue = t.validateKey = void 0);
              let r = "[_0-9a-z-*/]",
                n = `[a-z]${r}{0,255}`,
                o = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`,
                a = RegExp(`^(?:${n}|${o})$`),
                i = /^[ -~]{0,255}[!-~]$/,
                u = /,|=/;
              (t.validateKey = function (e) {
                return a.test(e);
              }),
                (t.validateValue = function (e) {
                  return i.test(e) && !u.test(e);
                });
            },
            98: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.createTraceState = void 0);
              let n = r(325);
              t.createTraceState = function (e) {
                return new n.TraceStateImpl(e);
              };
            },
            476: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.INVALID_SPAN_CONTEXT =
                  t.INVALID_TRACEID =
                  t.INVALID_SPANID =
                    void 0);
              let n = r(475);
              (t.INVALID_SPANID = "0000000000000000"),
                (t.INVALID_TRACEID = "00000000000000000000000000000000"),
                (t.INVALID_SPAN_CONTEXT = {
                  traceId: t.INVALID_TRACEID,
                  spanId: t.INVALID_SPANID,
                  traceFlags: n.TraceFlags.NONE,
                });
            },
            357: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.SpanKind = void 0),
                (function (e) {
                  (e[(e.INTERNAL = 0)] = "INTERNAL"),
                    (e[(e.SERVER = 1)] = "SERVER"),
                    (e[(e.CLIENT = 2)] = "CLIENT"),
                    (e[(e.PRODUCER = 3)] = "PRODUCER"),
                    (e[(e.CONSUMER = 4)] = "CONSUMER");
                })(t.SpanKind || (t.SpanKind = {}));
            },
            139: (e, t, r) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.wrapSpanContext =
                  t.isSpanContextValid =
                  t.isValidSpanId =
                  t.isValidTraceId =
                    void 0);
              let n = r(476),
                o = r(403),
                a = /^([0-9a-f]{32})$/i,
                i = /^[0-9a-f]{16}$/i;
              function u(e) {
                return a.test(e) && e !== n.INVALID_TRACEID;
              }
              function c(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
              }
              (t.isValidTraceId = u),
                (t.isValidSpanId = c),
                (t.isSpanContextValid = function (e) {
                  return u(e.traceId) && c(e.spanId);
                }),
                (t.wrapSpanContext = function (e) {
                  return new o.NonRecordingSpan(e);
                });
            },
            847: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.SpanStatusCode = void 0),
                (function (e) {
                  (e[(e.UNSET = 0)] = "UNSET"),
                    (e[(e.OK = 1)] = "OK"),
                    (e[(e.ERROR = 2)] = "ERROR");
                })(t.SpanStatusCode || (t.SpanStatusCode = {}));
            },
            475: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TraceFlags = void 0),
                (function (e) {
                  (e[(e.NONE = 0)] = "NONE"), (e[(e.SAMPLED = 1)] = "SAMPLED");
                })(t.TraceFlags || (t.TraceFlags = {}));
            },
            521: (e, t) => {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.VERSION = void 0),
                (t.VERSION = "1.6.0");
            },
          },
          r = {};
        function n(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var a = (r[e] = { exports: {} }),
            i = !0;
          try {
            t[e].call(a.exports, a, a.exports, n), (i = !1);
          } finally {
            i && delete r[e];
          }
          return a.exports;
        }
        n.ab = __dirname + "/";
        var o = {};
        (() => {
          Object.defineProperty(o, "__esModule", { value: !0 }),
            (o.trace =
              o.propagation =
              o.metrics =
              o.diag =
              o.context =
              o.INVALID_SPAN_CONTEXT =
              o.INVALID_TRACEID =
              o.INVALID_SPANID =
              o.isValidSpanId =
              o.isValidTraceId =
              o.isSpanContextValid =
              o.createTraceState =
              o.TraceFlags =
              o.SpanStatusCode =
              o.SpanKind =
              o.SamplingDecision =
              o.ProxyTracerProvider =
              o.ProxyTracer =
              o.defaultTextMapSetter =
              o.defaultTextMapGetter =
              o.ValueType =
              o.createNoopMeter =
              o.DiagLogLevel =
              o.DiagConsoleLogger =
              o.ROOT_CONTEXT =
              o.createContextKey =
              o.baggageEntryMetadataFromString =
                void 0);
          var e = n(369);
          Object.defineProperty(o, "baggageEntryMetadataFromString", {
            enumerable: !0,
            get: function () {
              return e.baggageEntryMetadataFromString;
            },
          });
          var t = n(780);
          Object.defineProperty(o, "createContextKey", {
            enumerable: !0,
            get: function () {
              return t.createContextKey;
            },
          }),
            Object.defineProperty(o, "ROOT_CONTEXT", {
              enumerable: !0,
              get: function () {
                return t.ROOT_CONTEXT;
              },
            });
          var r = n(972);
          Object.defineProperty(o, "DiagConsoleLogger", {
            enumerable: !0,
            get: function () {
              return r.DiagConsoleLogger;
            },
          });
          var a = n(957);
          Object.defineProperty(o, "DiagLogLevel", {
            enumerable: !0,
            get: function () {
              return a.DiagLogLevel;
            },
          });
          var i = n(102);
          Object.defineProperty(o, "createNoopMeter", {
            enumerable: !0,
            get: function () {
              return i.createNoopMeter;
            },
          });
          var u = n(901);
          Object.defineProperty(o, "ValueType", {
            enumerable: !0,
            get: function () {
              return u.ValueType;
            },
          });
          var c = n(194);
          Object.defineProperty(o, "defaultTextMapGetter", {
            enumerable: !0,
            get: function () {
              return c.defaultTextMapGetter;
            },
          }),
            Object.defineProperty(o, "defaultTextMapSetter", {
              enumerable: !0,
              get: function () {
                return c.defaultTextMapSetter;
              },
            });
          var s = n(125);
          Object.defineProperty(o, "ProxyTracer", {
            enumerable: !0,
            get: function () {
              return s.ProxyTracer;
            },
          });
          var l = n(846);
          Object.defineProperty(o, "ProxyTracerProvider", {
            enumerable: !0,
            get: function () {
              return l.ProxyTracerProvider;
            },
          });
          var d = n(996);
          Object.defineProperty(o, "SamplingDecision", {
            enumerable: !0,
            get: function () {
              return d.SamplingDecision;
            },
          });
          var p = n(357);
          Object.defineProperty(o, "SpanKind", {
            enumerable: !0,
            get: function () {
              return p.SpanKind;
            },
          });
          var f = n(847);
          Object.defineProperty(o, "SpanStatusCode", {
            enumerable: !0,
            get: function () {
              return f.SpanStatusCode;
            },
          });
          var g = n(475);
          Object.defineProperty(o, "TraceFlags", {
            enumerable: !0,
            get: function () {
              return g.TraceFlags;
            },
          });
          var v = n(98);
          Object.defineProperty(o, "createTraceState", {
            enumerable: !0,
            get: function () {
              return v.createTraceState;
            },
          });
          var _ = n(139);
          Object.defineProperty(o, "isSpanContextValid", {
            enumerable: !0,
            get: function () {
              return _.isSpanContextValid;
            },
          }),
            Object.defineProperty(o, "isValidTraceId", {
              enumerable: !0,
              get: function () {
                return _.isValidTraceId;
              },
            }),
            Object.defineProperty(o, "isValidSpanId", {
              enumerable: !0,
              get: function () {
                return _.isValidSpanId;
              },
            });
          var h = n(476);
          Object.defineProperty(o, "INVALID_SPANID", {
            enumerable: !0,
            get: function () {
              return h.INVALID_SPANID;
            },
          }),
            Object.defineProperty(o, "INVALID_TRACEID", {
              enumerable: !0,
              get: function () {
                return h.INVALID_TRACEID;
              },
            }),
            Object.defineProperty(o, "INVALID_SPAN_CONTEXT", {
              enumerable: !0,
              get: function () {
                return h.INVALID_SPAN_CONTEXT;
              },
            });
          let b = n(67);
          Object.defineProperty(o, "context", {
            enumerable: !0,
            get: function () {
              return b.context;
            },
          });
          let y = n(506);
          Object.defineProperty(o, "diag", {
            enumerable: !0,
            get: function () {
              return y.diag;
            },
          });
          let S = n(886);
          Object.defineProperty(o, "metrics", {
            enumerable: !0,
            get: function () {
              return S.metrics;
            },
          });
          let E = n(939);
          Object.defineProperty(o, "propagation", {
            enumerable: !0,
            get: function () {
              return E.propagation;
            },
          });
          let m = n(845);
          Object.defineProperty(o, "trace", {
            enumerable: !0,
            get: function () {
              return m.trace;
            },
          }),
            (o.default = {
              context: b.context,
              diag: y.diag,
              metrics: S.metrics,
              propagation: E.propagation,
              trace: m.trace,
            });
        })(),
          (e.exports = o);
      })();
    },
    9368: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          NEXT_QUERY_PARAM_PREFIX: function () {
            return r;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return n;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return o;
          },
          NEXT_DID_POSTPONE_HEADER: function () {
            return a;
          },
          RSC_PREFETCH_SUFFIX: function () {
            return i;
          },
          RSC_SUFFIX: function () {
            return u;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return c;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return s;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return l;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return d;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return p;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return f;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return g;
          },
          CACHE_ONE_YEAR: function () {
            return v;
          },
          MIDDLEWARE_FILENAME: function () {
            return _;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return h;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return b;
          },
          PAGES_DIR_ALIAS: function () {
            return y;
          },
          DOT_NEXT_ALIAS: function () {
            return S;
          },
          ROOT_DIR_ALIAS: function () {
            return E;
          },
          APP_DIR_ALIAS: function () {
            return m;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return O;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return R;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return T;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return P;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return N;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return x;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return C;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return A;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return I;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return M;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return w;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return D;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return L;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return j;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return V;
          },
          NON_STANDARD_NODE_ENV: function () {
            return B;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return G;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return U;
          },
          ESLINT_PROMPT_VALUES: function () {
            return H;
          },
          SERVER_RUNTIME: function () {
            return F;
          },
          WEBPACK_LAYERS: function () {
            return $;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return X;
          },
        });
      let r = "nxtP",
        n = "x-prerender-revalidate",
        o = "x-prerender-revalidate-if-generated",
        a = "x-nextjs-postponed",
        i = ".prefetch.rsc",
        u = ".rsc",
        c = "x-next-cache-tags",
        s = "x-next-cache-soft-tags",
        l = "x-next-revalidated-tags",
        d = "x-next-revalidate-tag-token",
        p = 256,
        f = 1024,
        g = "_N_T_",
        v = 31536e3,
        _ = "middleware",
        h = `(?:src/)?${_}`,
        b = "instrumentation",
        y = "private-next-pages",
        S = "private-dot-next",
        E = "private-next-root-dir",
        m = "private-next-app-dir",
        O = "next/dist/build/webpack/loaders/next-flight-loader/module-proxy",
        R = "private-next-rsc-action-validate",
        T = "private-next-rsc-action-proxy",
        P = "private-next-rsc-action-encryption",
        N = "private-next-rsc-action-client-wrapper",
        x =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        C =
          "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        A =
          "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        I =
          "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        M =
          "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        w =
          "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        D =
          "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        L =
          "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        j =
          "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        V =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        B =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        G =
          "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        U = ["app", "pages", "components", "lib", "src"],
        H = [
          {
            title: "Strict",
            recommended: !0,
            config: { extends: "next/core-web-vitals" },
          },
          { title: "Base", config: { extends: "next" } },
          { title: "Cancel", config: null },
        ],
        F = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs",
        },
        k = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
          appMetadataRoute: "app-metadata-route",
          appRouteHandler: "app-route-handler",
        },
        $ = {
          ...k,
          GROUP: {
            server: [
              k.reactServerComponents,
              k.actionBrowser,
              k.appMetadataRoute,
              k.appRouteHandler,
            ],
            nonClientServerTarget: [k.middleware, k.api],
            app: [
              k.reactServerComponents,
              k.actionBrowser,
              k.appMetadataRoute,
              k.appRouteHandler,
              k.serverSideRendering,
              k.appPagesBrowser,
            ],
          },
        },
        X = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__",
        };
    },
    6106: (e, t) => {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          reset: function () {
            return c;
          },
          bold: function () {
            return s;
          },
          dim: function () {
            return l;
          },
          italic: function () {
            return d;
          },
          underline: function () {
            return p;
          },
          inverse: function () {
            return f;
          },
          hidden: function () {
            return g;
          },
          strikethrough: function () {
            return v;
          },
          black: function () {
            return _;
          },
          red: function () {
            return h;
          },
          green: function () {
            return b;
          },
          yellow: function () {
            return y;
          },
          blue: function () {
            return S;
          },
          magenta: function () {
            return E;
          },
          purple: function () {
            return m;
          },
          cyan: function () {
            return O;
          },
          white: function () {
            return R;
          },
          gray: function () {
            return T;
          },
          bgBlack: function () {
            return P;
          },
          bgRed: function () {
            return N;
          },
          bgGreen: function () {
            return x;
          },
          bgYellow: function () {
            return C;
          },
          bgBlue: function () {
            return A;
          },
          bgMagenta: function () {
            return I;
          },
          bgCyan: function () {
            return M;
          },
          bgWhite: function () {
            return w;
          },
        });
      let { env: n, stdout: o } =
          (null == (r = globalThis) ? void 0 : r.process) ?? {},
        a =
          n &&
          !n.NO_COLOR &&
          (n.FORCE_COLOR ||
            ((null == o ? void 0 : o.isTTY) && !n.CI && "dumb" !== n.TERM)),
        i = (e, t, r, n) => {
          let o = e.substring(0, n) + r,
            a = e.substring(n + t.length),
            u = a.indexOf(t);
          return ~u ? o + i(a, t, r, u) : o + a;
        },
        u =
          (e, t, r = e) =>
          (n) => {
            let o = "" + n,
              a = o.indexOf(t, e.length);
            return ~a ? e + i(o, t, r, a) + t : e + o + t;
          },
        c = a ? (e) => `\x1b[0m${e}\x1b[0m` : String,
        s = a ? u("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
        l = a ? u("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
        d = a ? u("\x1b[3m", "\x1b[23m") : String,
        p = a ? u("\x1b[4m", "\x1b[24m") : String,
        f = a ? u("\x1b[7m", "\x1b[27m") : String,
        g = a ? u("\x1b[8m", "\x1b[28m") : String,
        v = a ? u("\x1b[9m", "\x1b[29m") : String,
        _ = a ? u("\x1b[30m", "\x1b[39m") : String,
        h = a ? u("\x1b[31m", "\x1b[39m") : String,
        b = a ? u("\x1b[32m", "\x1b[39m") : String,
        y = a ? u("\x1b[33m", "\x1b[39m") : String,
        S = a ? u("\x1b[34m", "\x1b[39m") : String,
        E = a ? u("\x1b[35m", "\x1b[39m") : String,
        m = a ? u("\x1b[38;2;173;127;168m", "\x1b[39m") : String,
        O = a ? u("\x1b[36m", "\x1b[39m") : String,
        R = a ? u("\x1b[37m", "\x1b[39m") : String,
        T = a ? u("\x1b[90m", "\x1b[39m") : String,
        P = a ? u("\x1b[40m", "\x1b[49m") : String,
        N = a ? u("\x1b[41m", "\x1b[49m") : String,
        x = a ? u("\x1b[42m", "\x1b[49m") : String,
        C = a ? u("\x1b[43m", "\x1b[49m") : String,
        A = a ? u("\x1b[44m", "\x1b[49m") : String,
        I = a ? u("\x1b[45m", "\x1b[49m") : String,
        M = a ? u("\x1b[46m", "\x1b[49m") : String,
        w = a ? u("\x1b[47m", "\x1b[49m") : String;
    },
    6132: (e, t) => {
      var r;
      Object.defineProperty(t, "x", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
        (function (e) {
          (e.PAGES = "PAGES"),
            (e.PAGES_API = "PAGES_API"),
            (e.APP_PAGE = "APP_PAGE"),
            (e.APP_ROUTE = "APP_ROUTE");
        })(r || (r = {}));
    },
    1040: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          validateTags: function () {
            return s;
          },
          addImplicitTags: function () {
            return d;
          },
          patchFetch: function () {
            return f;
          },
        });
      let n = r(4875),
        o = r(4640),
        a = r(9368),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = c(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, a, i)
                : (n[a] = e[a]);
            }
          return (n.default = e), r && r.set(e, n), n;
        })(r(8775)),
        u = r(2236);
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (c = function (e) {
          return e ? r : t;
        })(e);
      }
      function s(e, t) {
        let r = [],
          n = [];
        for (let t of e)
          "string" != typeof t
            ? n.push({ tag: t, reason: "invalid type, must be a string" })
            : t.length > a.NEXT_CACHE_TAG_MAX_LENGTH
              ? n.push({
                  tag: t,
                  reason: `exceeded max length of ${a.NEXT_CACHE_TAG_MAX_LENGTH}`,
                })
              : r.push(t);
        if (n.length > 0)
          for (let { tag: e, reason: r } of (console.warn(
            `Warning: invalid tags passed to ${t}: `
          ),
          n))
            console.log(`tag: "${e}" ${r}`);
        return r;
      }
      let l = (e) => {
        let t = ["/layout"];
        if (e.startsWith("/")) {
          let r = e.split("/");
          for (let e = 1; e < r.length + 1; e++) {
            let n = r.slice(0, e).join("/");
            n &&
              (n.endsWith("/page") ||
                n.endsWith("/route") ||
                (n = `${n}${n.endsWith("/") ? "" : "/"}layout`),
              t.push(n));
          }
        }
        return t;
      };
      function d(e) {
        var t, r;
        let n = [],
          { pagePath: o, urlPathname: i } = e;
        if ((Array.isArray(e.tags) || (e.tags = []), o)) {
          let r = l(o);
          for (let o of r)
            (o = `${a.NEXT_CACHE_IMPLICIT_TAG_ID}${o}`),
              (null == (t = e.tags) ? void 0 : t.includes(o)) || e.tags.push(o),
              n.push(o);
        }
        if (i) {
          let t = new URL(i, "http://n").pathname,
            o = `${a.NEXT_CACHE_IMPLICIT_TAG_ID}${t}`;
          (null == (r = e.tags) ? void 0 : r.includes(o)) || e.tags.push(o),
            n.push(o);
        }
        return n;
      }
      function p(e, t) {
        if (!e) return;
        e.fetchMetrics || (e.fetchMetrics = []);
        let r = ["url", "status", "method"];
        e.fetchMetrics.some((e) => r.every((r) => e[r] === t[r])) ||
          e.fetchMetrics.push({
            url: t.url,
            cacheStatus: t.cacheStatus,
            cacheReason: t.cacheReason,
            status: t.status,
            method: t.method,
            start: t.start,
            end: Date.now(),
            idx: e.nextFetchId || 0,
          });
      }
      function f({ serverHooks: e, staticGenerationAsyncStorage: t }) {
        if (
          (globalThis._nextOriginalFetch ||
            (globalThis._nextOriginalFetch = globalThis.fetch),
          globalThis.fetch.__nextPatched)
        )
          return;
        let { DynamicServerError: r } = e,
          c = globalThis._nextOriginalFetch;
        (globalThis.fetch = async (e, l) => {
          var f, g;
          let v;
          try {
            ((v = new URL(e instanceof Request ? e.url : e)).username = ""),
              (v.password = "");
          } catch {
            v = void 0;
          }
          let _ = (null == v ? void 0 : v.href) ?? "",
            h = Date.now(),
            b =
              (null == l
                ? void 0
                : null == (f = l.method)
                  ? void 0
                  : f.toUpperCase()) || "GET",
            y =
              (null == (g = null == l ? void 0 : l.next)
                ? void 0
                : g.internal) === !0;
          return await (0, o.getTracer)().trace(
            y ? n.NextNodeServerSpan.internalFetch : n.AppRenderSpan.fetch,
            {
              kind: o.SpanKind.CLIENT,
              spanName: ["fetch", b, _].filter(Boolean).join(" "),
              attributes: {
                "http.url": _,
                "http.method": b,
                "net.peer.name": null == v ? void 0 : v.hostname,
                "net.peer.port": (null == v ? void 0 : v.port) || void 0,
              },
            },
            async () => {
              var n;
              let o, f, g;
              let v =
                  t.getStore() ||
                  (null == fetch.__nextGetStaticStore
                    ? void 0
                    : fetch.__nextGetStaticStore.call(fetch)),
                b = e && "object" == typeof e && "string" == typeof e.method,
                S = (t) => (b ? e[t] : null) || (null == l ? void 0 : l[t]);
              if (!v || y || v.isDraftMode) return c(e, l);
              let E = (t) => {
                  var r, n, o;
                  return void 0 !==
                    (null == l ? void 0 : null == (r = l.next) ? void 0 : r[t])
                    ? null == l
                      ? void 0
                      : null == (n = l.next)
                        ? void 0
                        : n[t]
                    : b
                      ? null == (o = e.next)
                        ? void 0
                        : o[t]
                      : void 0;
                },
                m = E("revalidate"),
                O = s(E("tags") || [], `fetch ${e.toString()}`);
              if (Array.isArray(O))
                for (let e of (v.tags || (v.tags = []), O))
                  v.tags.includes(e) || v.tags.push(e);
              let R = d(v),
                T = "only-cache" === v.fetchCache,
                P = "force-cache" === v.fetchCache,
                N = "default-cache" === v.fetchCache,
                x = "default-no-store" === v.fetchCache,
                C = "only-no-store" === v.fetchCache,
                A = "force-no-store" === v.fetchCache,
                I = S("cache"),
                M = "";
              "string" == typeof I &&
                void 0 !== m &&
                (i.warn(
                  `fetch for ${_} on ${v.urlPathname} specified "cache: ${I}" and "revalidate: ${m}", only one should be specified.`
                ),
                (I = void 0)),
                "force-cache" === I
                  ? (m = !1)
                  : ("no-cache" === I || "no-store" === I || A || C) && (m = 0),
                ("no-cache" === I || "no-store" === I) && (M = `cache: ${I}`),
                ("number" == typeof m || !1 === m) && (g = m);
              let w = S("headers"),
                D =
                  "function" == typeof (null == w ? void 0 : w.get)
                    ? w
                    : new Headers(w || {}),
                L = D.get("authorization") || D.get("cookie"),
                j = !["get", "head"].includes(
                  (null == (n = S("method")) ? void 0 : n.toLowerCase()) ||
                    "get"
                ),
                V = (L || j) && 0 === v.revalidate;
              if ((A && (M = "fetchCache = force-no-store"), C)) {
                if (
                  "force-cache" === I ||
                  (void 0 !== g && (!1 === g || g > 0))
                )
                  throw Error(
                    `cache: 'force-cache' used on fetch for ${_} with 'export const fetchCache = 'only-no-store'`
                  );
                M = "fetchCache = only-no-store";
              }
              if (T && "no-store" === I)
                throw Error(
                  `cache: 'no-store' used on fetch for ${_} with 'export const fetchCache = 'only-cache'`
                );
              P &&
                (void 0 === m || 0 === m) &&
                ((M = "fetchCache = force-cache"), (g = !1)),
                void 0 === g
                  ? N
                    ? ((g = !1), (M = "fetchCache = default-cache"))
                    : V
                      ? ((g = 0), (M = "auto no cache"))
                      : x
                        ? ((g = 0), (M = "fetchCache = default-no-store"))
                        : ((M = "auto cache"),
                          (g =
                            "boolean" != typeof v.revalidate &&
                            void 0 !== v.revalidate &&
                            v.revalidate))
                  : M || (M = `revalidate: ${g}`),
                !V &&
                  (void 0 === v.revalidate ||
                    ("number" == typeof g &&
                      (!1 === v.revalidate ||
                        ("number" == typeof v.revalidate &&
                          g < v.revalidate)))) &&
                  (0 === g && (0, u.maybePostpone)(v, "revalidate: 0"),
                  (v.revalidate = g));
              let B = ("number" == typeof g && g > 0) || !1 === g;
              if (v.incrementalCache && B)
                try {
                  o = await v.incrementalCache.fetchCacheKey(_, b ? e : l);
                } catch (t) {
                  console.error("Failed to generate cache key for", e);
                }
              let G = v.nextFetchId ?? 1;
              v.nextFetchId = G + 1;
              let U = "number" != typeof g ? a.CACHE_ONE_YEAR : g,
                H = async (t, r) => {
                  let n = [
                    "cache",
                    "credentials",
                    "headers",
                    "integrity",
                    "keepalive",
                    "method",
                    "mode",
                    "redirect",
                    "referrer",
                    "referrerPolicy",
                    "window",
                    "duplex",
                    ...(t ? [] : ["signal"]),
                  ];
                  if (b) {
                    let t = e,
                      r = { body: t._ogBody || t.body };
                    for (let e of n) r[e] = t[e];
                    e = new Request(t.url, r);
                  } else if (l) {
                    let e = l;
                    for (let t of ((l = { body: l._ogBody || l.body }), n))
                      l[t] = e[t];
                  }
                  let a = {
                    ...l,
                    next: {
                      ...(null == l ? void 0 : l.next),
                      fetchType: "origin",
                      fetchIdx: G,
                    },
                  };
                  return c(e, a).then(async (n) => {
                    if (
                      (t ||
                        p(v, {
                          start: h,
                          url: _,
                          cacheReason: r || M,
                          cacheStatus: 0 === g || r ? "skip" : "miss",
                          status: n.status,
                          method: a.method || "GET",
                        }),
                      200 === n.status && v.incrementalCache && o && B)
                    ) {
                      let t = Buffer.from(await n.arrayBuffer());
                      try {
                        await v.incrementalCache.set(
                          o,
                          {
                            kind: "FETCH",
                            data: {
                              headers: Object.fromEntries(n.headers.entries()),
                              body: t.toString("base64"),
                              status: n.status,
                              url: n.url,
                            },
                            revalidate: U,
                          },
                          {
                            fetchCache: !0,
                            revalidate: g,
                            fetchUrl: _,
                            fetchIdx: G,
                            tags: O,
                          }
                        );
                      } catch (t) {
                        console.warn("Failed to set fetch cache", e, t);
                      }
                      let r = new Response(t, {
                        headers: new Headers(n.headers),
                        status: n.status,
                      });
                      return (
                        Object.defineProperty(r, "url", { value: n.url }), r
                      );
                    }
                    return n;
                  });
                },
                F = () => Promise.resolve();
              if (o && v.incrementalCache) {
                F = await v.incrementalCache.lock(o);
                let e = v.isOnDemandRevalidate
                  ? null
                  : await v.incrementalCache.get(o, {
                      kindHint: "fetch",
                      revalidate: g,
                      fetchUrl: _,
                      fetchIdx: G,
                      tags: O,
                      softTags: R,
                    });
                if (
                  (e
                    ? await F()
                    : (f = "cache-control: no-cache (hard refresh)"),
                  (null == e ? void 0 : e.value) &&
                    "FETCH" === e.value.kind &&
                    !(v.isRevalidate && e.isStale))
                ) {
                  e.isStale &&
                    (v.pendingRevalidates || (v.pendingRevalidates = []),
                    v.pendingRevalidates.push(H(!0).catch(console.error)));
                  let t = e.value.data;
                  p(v, {
                    start: h,
                    url: _,
                    cacheReason: M,
                    cacheStatus: "hit",
                    status: t.status || 200,
                    method: (null == l ? void 0 : l.method) || "GET",
                  });
                  let r = new Response(Buffer.from(t.body, "base64"), {
                    headers: t.headers,
                    status: t.status,
                  });
                  return (
                    Object.defineProperty(r, "url", {
                      value: e.value.data.url,
                    }),
                    r
                  );
                }
              }
              if (v.isStaticGeneration && l && "object" == typeof l) {
                let { cache: t } = l;
                if ("no-store" === t) {
                  let t = `no-store fetch ${e}${
                      v.urlPathname ? ` ${v.urlPathname}` : ""
                    }`,
                    n = new r(t);
                  (v.dynamicUsageErr = n),
                    (v.dynamicUsageStack = n.stack),
                    (v.dynamicUsageDescription = t),
                    (0, u.maybePostpone)(v, t),
                    (v.revalidate = 0);
                }
                let n = "next" in l,
                  { next: o = {} } = l;
                if (
                  "number" == typeof o.revalidate &&
                  (void 0 === v.revalidate ||
                    ("number" == typeof v.revalidate &&
                      o.revalidate < v.revalidate))
                ) {
                  let t = v.forceDynamic;
                  if (!t && 0 === o.revalidate) {
                    let t = `revalidate: 0 fetch ${e}${
                        v.urlPathname ? ` ${v.urlPathname}` : ""
                      }`,
                      n = new r(t);
                    (v.dynamicUsageErr = n),
                      (v.dynamicUsageStack = n.stack),
                      (v.dynamicUsageDescription = t),
                      (0, u.maybePostpone)(v, t);
                  }
                  (t && 0 === o.revalidate) || (v.revalidate = o.revalidate);
                }
                n && delete l.next;
              }
              return H(!1, f).finally(F);
            }
          );
        }),
          (globalThis.fetch.__nextGetStaticStore = () => t),
          (globalThis.fetch.__nextPatched = !0);
      }
    },
    4875: (e, t) => {
      var r, n, o, a, i, u, c, s, l, d, p;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          NextVanillaSpanAllowlist: function () {
            return f;
          },
          BaseServerSpan: function () {
            return r;
          },
          LoadComponentsSpan: function () {
            return n;
          },
          NextServerSpan: function () {
            return o;
          },
          NextNodeServerSpan: function () {
            return a;
          },
          StartServerSpan: function () {
            return i;
          },
          RenderSpan: function () {
            return u;
          },
          RouterSpan: function () {
            return s;
          },
          AppRenderSpan: function () {
            return c;
          },
          NodeSpan: function () {
            return l;
          },
          AppRouteRouteHandlersSpan: function () {
            return d;
          },
          ResolveMetadataSpan: function () {
            return p;
          },
        }),
        (function (e) {
          (e.handleRequest = "BaseServer.handleRequest"),
            (e.run = "BaseServer.run"),
            (e.pipe = "BaseServer.pipe"),
            (e.getStaticHTML = "BaseServer.getStaticHTML"),
            (e.render = "BaseServer.render"),
            (e.renderToResponseWithComponents =
              "BaseServer.renderToResponseWithComponents"),
            (e.renderToResponse = "BaseServer.renderToResponse"),
            (e.renderToHTML = "BaseServer.renderToHTML"),
            (e.renderError = "BaseServer.renderError"),
            (e.renderErrorToResponse = "BaseServer.renderErrorToResponse"),
            (e.renderErrorToHTML = "BaseServer.renderErrorToHTML"),
            (e.render404 = "BaseServer.render404");
        })(r || (r = {})),
        (function (e) {
          (e.loadDefaultErrorComponents =
            "LoadComponents.loadDefaultErrorComponents"),
            (e.loadComponents = "LoadComponents.loadComponents");
        })(n || (n = {})),
        (function (e) {
          (e.getRequestHandler = "NextServer.getRequestHandler"),
            (e.getServer = "NextServer.getServer"),
            (e.getServerRequestHandler = "NextServer.getServerRequestHandler"),
            (e.createServer = "createServer.createServer");
        })(o || (o = {})),
        (function (e) {
          (e.compression = "NextNodeServer.compression"),
            (e.getBuildId = "NextNodeServer.getBuildId"),
            (e.generateStaticRoutes = "NextNodeServer.generateStaticRoutes"),
            (e.generateFsStaticRoutes =
              "NextNodeServer.generateFsStaticRoutes"),
            (e.generatePublicRoutes = "NextNodeServer.generatePublicRoutes"),
            (e.generateImageRoutes =
              "NextNodeServer.generateImageRoutes.route"),
            (e.sendRenderResult = "NextNodeServer.sendRenderResult"),
            (e.proxyRequest = "NextNodeServer.proxyRequest"),
            (e.runApi = "NextNodeServer.runApi"),
            (e.render = "NextNodeServer.render"),
            (e.renderHTML = "NextNodeServer.renderHTML"),
            (e.imageOptimizer = "NextNodeServer.imageOptimizer"),
            (e.getPagePath = "NextNodeServer.getPagePath"),
            (e.getRoutesManifest = "NextNodeServer.getRoutesManifest"),
            (e.findPageComponents = "NextNodeServer.findPageComponents"),
            (e.getFontManifest = "NextNodeServer.getFontManifest"),
            (e.getServerComponentManifest =
              "NextNodeServer.getServerComponentManifest"),
            (e.getRequestHandler = "NextNodeServer.getRequestHandler"),
            (e.renderToHTML = "NextNodeServer.renderToHTML"),
            (e.renderError = "NextNodeServer.renderError"),
            (e.renderErrorToHTML = "NextNodeServer.renderErrorToHTML"),
            (e.render404 = "NextNodeServer.render404"),
            (e.route = "route"),
            (e.onProxyReq = "onProxyReq"),
            (e.apiResolver = "apiResolver"),
            (e.internalFetch = "internalFetch");
        })(a || (a = {})),
        ((i || (i = {})).startServer = "startServer.startServer"),
        (function (e) {
          (e.getServerSideProps = "Render.getServerSideProps"),
            (e.getStaticProps = "Render.getStaticProps"),
            (e.renderToString = "Render.renderToString"),
            (e.renderDocument = "Render.renderDocument"),
            (e.createBodyResult = "Render.createBodyResult");
        })(u || (u = {})),
        (function (e) {
          (e.renderToString = "AppRender.renderToString"),
            (e.renderToReadableStream = "AppRender.renderToReadableStream"),
            (e.getBodyResult = "AppRender.getBodyResult"),
            (e.fetch = "AppRender.fetch");
        })(c || (c = {})),
        ((s || (s = {})).executeRoute = "Router.executeRoute"),
        ((l || (l = {})).runHandler = "Node.runHandler"),
        ((d || (d = {})).runHandler = "AppRouteRouteHandlers.runHandler"),
        (function (e) {
          (e.generateMetadata = "ResolveMetadata.generateMetadata"),
            (e.generateViewport = "ResolveMetadata.generateViewport");
        })(p || (p = {}));
      let f = [
        "BaseServer.handleRequest",
        "Render.getServerSideProps",
        "Render.getStaticProps",
        "AppRender.fetch",
        "AppRender.getBodyResult",
        "Render.renderDocument",
        "Node.runHandler",
        "AppRouteRouteHandlers.runHandler",
        "ResolveMetadata.generateMetadata",
        "ResolveMetadata.generateViewport",
      ];
    },
    4640: (e, t, r) => {
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getTracer: function () {
            return b;
          },
          SpanStatusCode: function () {
            return c;
          },
          SpanKind: function () {
            return s;
          },
        });
      let o = r(4875);
      try {
        n = r(5753);
      } catch (e) {
        n = r(4389);
      }
      let {
          context: a,
          propagation: i,
          trace: u,
          SpanStatusCode: c,
          SpanKind: s,
          ROOT_CONTEXT: l,
        } = n,
        d = (e) =>
          null !== e && "object" == typeof e && "function" == typeof e.then,
        p = (e, t) => {
          (null == t ? void 0 : t.bubble) === !0
            ? e.setAttribute("next.bubble", !0)
            : (t && e.recordException(t),
              e.setStatus({
                code: c.ERROR,
                message: null == t ? void 0 : t.message,
              })),
            e.end();
        },
        f = new Map(),
        g = n.createContextKey("next.rootSpanId"),
        v = 0,
        _ = () => v++;
      class h {
        getTracerInstance() {
          return u.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return a;
        }
        getActiveScopeSpan() {
          return u.getSpan(null == a ? void 0 : a.active());
        }
        withPropagatedContext(e, t) {
          if (a.active() !== l) return t();
          let r = i.extract(l, e.headers);
          return a.with(r, t);
        }
        trace(...e) {
          var t;
          let [r, n, i] = e,
            { fn: c, options: s } =
              "function" == typeof n
                ? { fn: n, options: {} }
                : { fn: i, options: { ...n } };
          if (
            (!o.NextVanillaSpanAllowlist.includes(r) &&
              "1" !== process.env.NEXT_OTEL_VERBOSE) ||
            s.hideSpan
          )
            return c();
          let v = s.spanName ?? r,
            h = this.getSpanContext(
              (null == s ? void 0 : s.parentSpan) ?? this.getActiveScopeSpan()
            ),
            b = !1;
          h
            ? (null == (t = u.getSpanContext(h)) ? void 0 : t.isRemote) &&
              (b = !0)
            : ((h = l), (b = !0));
          let y = _();
          return (
            (s.attributes = {
              "next.span_name": v,
              "next.span_type": r,
              ...s.attributes,
            }),
            a.with(h.setValue(g, y), () =>
              this.getTracerInstance().startActiveSpan(v, s, (e) => {
                let t = () => {
                  f.delete(y);
                };
                b && f.set(y, new Map(Object.entries(s.attributes ?? {})));
                try {
                  if (c.length > 1) return c(e, (t) => p(e, t));
                  let r = c(e);
                  return (
                    d(r)
                      ? r
                          .then(
                            () => e.end(),
                            (t) => p(e, t)
                          )
                          .finally(t)
                      : (e.end(), t()),
                    r
                  );
                } catch (r) {
                  throw (p(e, r), t(), r);
                }
              })
            )
          );
        }
        wrap(...e) {
          let t = this,
            [r, n, i] = 3 === e.length ? e : [e[0], {}, e[1]];
          return o.NextVanillaSpanAllowlist.includes(r) ||
            "1" === process.env.NEXT_OTEL_VERBOSE
            ? function () {
                let e = n;
                "function" == typeof e &&
                  "function" == typeof i &&
                  (e = e.apply(this, arguments));
                let o = arguments.length - 1,
                  u = arguments[o];
                if ("function" != typeof u)
                  return t.trace(r, e, () => i.apply(this, arguments));
                {
                  let n = t.getContext().bind(a.active(), u);
                  return t.trace(
                    r,
                    e,
                    (e, t) => (
                      (arguments[o] = function (e) {
                        return null == t || t(e), n.apply(this, arguments);
                      }),
                      i.apply(this, arguments)
                    )
                  );
                }
              }
            : i;
        }
        startSpan(...e) {
          let [t, r] = e,
            n = this.getSpanContext(
              (null == r ? void 0 : r.parentSpan) ?? this.getActiveScopeSpan()
            );
          return this.getTracerInstance().startSpan(t, r, n);
        }
        getSpanContext(e) {
          let t = e ? u.setSpan(a.active(), e) : void 0;
          return t;
        }
        getRootSpanAttributes() {
          let e = a.active().getValue(g);
          return f.get(e);
        }
      }
      let b = (() => {
        let e = new h();
        return () => e;
      })();
    },
  });
