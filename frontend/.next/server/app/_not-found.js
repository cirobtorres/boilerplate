(() => {
  var e = {};
  (e.id = 165),
    (e.ids = [165]),
    (e.modules = {
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      5528: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\action-async-storage.external.js");
      },
      1877: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\request-async-storage.external.js");
      },
      5319: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");
      },
      5168: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          });
        var r = n(7096),
          s = n(6132),
          o = n(7284),
          i = n.n(o),
          a = n(2564),
          l = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => a[e]);
        n.d(t, l);
        let d = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(n.t.bind(n, 9291, 23)),
                    "next/dist/client/components/not-found-error",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 9113)),
                "D:\\Vscode-Projects\\blog\\frontend\\src\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(n.t.bind(n, 9291, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [],
          u = "/_not-found",
          p = { require: n, loadChunk: () => Promise.resolve() },
          m = new r.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/_not-found",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      7366: (e, t, n) => {
        Promise.resolve().then(n.t.bind(n, 3579, 23)),
          Promise.resolve().then(n.t.bind(n, 619, 23)),
          Promise.resolve().then(n.t.bind(n, 1459, 23)),
          Promise.resolve().then(n.t.bind(n, 3456, 23)),
          Promise.resolve().then(n.t.bind(n, 847, 23)),
          Promise.resolve().then(n.t.bind(n, 7303, 23));
      },
      8881: (e, t, n) => {
        Promise.resolve().then(n.t.bind(n, 233, 23));
      },
      9113: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => u, metadata: () => c });
        var r = n(4656),
          s = n(186),
          o = n.n(s),
          i = n(73),
          a = n.n(i),
          l = n(554),
          d = n.n(l);
        n(4315);
        let c = { title: "CHANGE-ME", description: "CHANGE-ME" };
        function u({ children: e }) {
          return (0, r.jsxs)("html", {
            lang: "pt",
            children: [
              r.jsx(a(), {
                children: r.jsx("link", {
                  rel: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css",
                  href: "stylesheet",
                }),
              }),
              (0, r.jsxs)("body", {
                className: o().className,
                children: [
                  e,
                  r.jsx(d(), {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js",
                  }),
                ],
              }),
            ],
          });
        }
      },
      4315: () => {},
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [271, 494], () => n(5168));
  module.exports = r;
})();
