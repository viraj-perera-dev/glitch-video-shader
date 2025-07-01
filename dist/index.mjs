import ne, { useRef as m, useState as X, useEffect as ae } from "react";
import * as x from "three";
import { extend as se, useFrame as ue } from "@react-three/fiber";
import { shaderMaterial as ce } from "@react-three/drei";
var F = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function ie() {
  if (Z) return M;
  Z = 1;
  var i = Symbol.for("react.transitional.element"), k = Symbol.for("react.fragment");
  function g(h, o, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      c = {};
      for (var v in o)
        v !== "key" && (c[v] = o[v]);
    } else c = o;
    return o = c.ref, {
      $$typeof: i,
      type: h,
      key: d,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return M.Fragment = k, M.jsx = g, M.jsxs = g, M;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function le() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case Y:
          return "Profiler";
        case E:
          return "StrictMode";
        case f:
          return "Suspense";
        case j:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case b:
            return "Portal";
          case u:
            return (e.displayName || "Context") + ".Provider";
          case s:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case A:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case D:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function k(e) {
      return "" + e;
    }
    function g(e) {
      try {
        k(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), k(e);
      }
    }
    function h(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, r) {
      function t() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function y() {
      var e = i(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function w(e, r, t, n, R, l, L, V) {
      return t = l.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: l,
        _owner: R
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function C(e, r, t, n, R, l, L, V) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (te(a)) {
            for (n = 0; n < a.length; n++)
              T(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(a);
      if (H.call(r, "key")) {
        a = i(e);
        var S = Object.keys(r).filter(function(oe) {
          return oe !== "key";
        });
        n = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", B[a + n] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          S,
          a
        ), B[a + n] = !0);
      }
      if (a = null, t !== void 0 && (g(t), a = "" + t), d(r) && (g(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var $ in r)
          $ !== "key" && (t[$] = r[$]);
      } else t = r;
      return a && v(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), w(
        e,
        a,
        l,
        R,
        o(),
        t,
        L,
        V
      );
    }
    function T(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var p = ne, O = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), u = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), U = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, te = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var W, q = {}, z = p["react-stack-bottom-frame"].bind(
      p,
      c
    )(), J = I(h(c)), B = {};
    N.Fragment = _, N.jsx = function(e, r, t, n, R) {
      var l = 1e4 > U.recentlyCreatedOwnerStacks++;
      return C(
        e,
        r,
        t,
        !1,
        n,
        R,
        l ? Error("react-stack-top-frame") : z,
        l ? I(h(e)) : J
      );
    }, N.jsxs = function(e, r, t, n, R) {
      var l = 1e4 > U.recentlyCreatedOwnerStacks++;
      return C(
        e,
        r,
        t,
        !0,
        n,
        R,
        l ? Error("react-stack-top-frame") : z,
        l ? I(h(e)) : J
      );
    };
  }()), N;
}
var K;
function fe() {
  return K || (K = 1, process.env.NODE_ENV === "production" ? F.exports = ie() : F.exports = le()), F.exports;
}
var G = fe();
const me = `
  uniform vec2 uMousePos;
  uniform float uHoverProgress;

  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec3 pos = position;

    float dist = distance(uv, uMousePos);
    float radius = 0.3;
    float height = 0.4;
    float falloff = smoothstep(radius, 0.0, dist);

    pos.z += falloff * height * uHoverProgress;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`, de = `
// Fragment Shader: glitch color shifts with mask near mouse
uniform sampler2D tMap;
uniform sampler2D tMouseComputation;
uniform float uHoverProgress;
uniform float uDisplacement;
uniform float uShift;
uniform vec2 uMousePos; // Mouse position in UV coords
varying vec2 vUv;

float circle(vec2 uv, vec2 center, float radius, float edge) {
  float dist = distance(uv, center);
  return smoothstep(radius, radius - edge, dist);
}

void main() {
  vec2 uv = vUv;
  vec4 displacement = texture2D(tMouseComputation, uv);

  // Mask to limit glitch effect near mouse
  float mask = circle(uv, uMousePos, 0.3, 0.1);

  // Displacement vector scaled by hover progress and mask
  vec2 disp = displacement.rg * uHoverProgress * mask * 0.03 * uDisplacement;

  // Sample red, green, blue channels with slight shifts for glitch
  vec4 colorR = texture2D(tMap, uv - disp - vec2(displacement.g * 0.01 * uShift, 0.0));
  vec4 colorG = texture2D(tMap, uv - disp);
  vec4 colorB = texture2D(tMap, uv - disp - vec2(displacement.r * 0.01 * uShift, 0.0));

  gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
}
`, ve = ce(
  {
    tMap: null,
    tMouseComputation: null,
    uHoverProgress: 0,
    uDisplacement: 1,
    uShift: 1,
    uMousePos: new x.Vector2(0.5, 0.5)
  },
  me,
  de
);
se({ GlitchMaterial: ve });
function ge({ videoSrc: i = "/video3.mp4", noiseTextureSrc: k = "/noise5.jpg", height: g = 4, width: h = 4 }) {
  const o = m(), c = m(), d = m(null), v = m(), [y, w] = X(!1), [C, T] = X(!1), p = m(0), O = m(Date.now()), b = m(null), _ = m([0.5, 0.5]), E = m([0.5, 0.5]);
  ae(() => {
    const s = document.createElement("video");
    s.src = i, s.crossOrigin = "anonymous", s.loop = !0, s.muted = !0, s.playsInline = !0, s.autoplay = !0, s.play(), c.current = s;
    const u = new x.VideoTexture(s);
    u.minFilter = x.LinearFilter, u.magFilter = x.LinearFilter, u.format = x.RGBFormat, o.current && (o.current.tMap = u), new x.TextureLoader().load(k, (f) => {
      d.current = f, o.current && (o.current.tMouseComputation = d.current);
    });
  }, [i]);
  const Y = (s) => {
    const u = v.current.geometry, P = u.parameters.width, f = u.parameters.height, j = (s.point.x + P / 2) / P, A = (s.point.y + f / 2) / f;
    _.current = [j, A];
    const D = Date.now();
    !y && !C && (T(!0), b.current = setTimeout(() => {
      w(!0), T(!1);
    }, 200)), O.current = D;
  };
  return ue((s, u) => {
    if (!o.current) return;
    const P = Date.now();
    y && P - O.current > 300 && (w(!1), T(!1), b.current && clearTimeout(b.current));
    const f = 2;
    E.current[0] += (_.current[0] - E.current[0]) * u * f, E.current[1] += (_.current[1] - E.current[1]) * u * f, o.current.uMousePos = new x.Vector2(
      E.current[0],
      E.current[1]
    );
    const j = y ? 1 : 0, A = 3;
    p.current += (j - p.current) * u * A, o.current.uHoverProgress = p.current;
  }), /* @__PURE__ */ G.jsxs(
    "mesh",
    {
      ref: v,
      onPointerEnter: () => w(!0),
      onPointerLeave: () => {
        w(!1), T(!1), b.current && clearTimeout(b.current);
      },
      onPointerMove: Y,
      children: [
        /* @__PURE__ */ G.jsx("planeGeometry", { args: [h, g] }),
        /* @__PURE__ */ G.jsx(
          "glitchMaterial",
          {
            ref: o,
            uDisplacement: 1,
            uShift: 1
          }
        )
      ]
    }
  );
}
export {
  ge as GlitchVideo
};
