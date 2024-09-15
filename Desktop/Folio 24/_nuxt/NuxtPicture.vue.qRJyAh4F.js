import {
  L as k,
  M as B,
  N as L,
  O as H,
  P as N,
  Q as C,
  R as D,
  m as A,
  S as y,
  U as T,
  V as Q,
  r as V,
  j as G,
  o as q,
  c as x,
  F as J,
  q as K,
  W as X,
  x as $,
  s as Y
} from './entry.BxA1UaYp.js';
function Z(e) {
  var t;
  (t = performance == null ? void 0 : performance.mark) == null ||
    t.call(performance, 'mark_feature_usage', { detail: { feature: e } });
}
function ee(e = '') {
  return e.split(/[?#]/).shift().split('/').pop().split('.').pop();
}
function v(e = '') {
  if (typeof e == 'number') return e;
  if (typeof e == 'string' && e.replace('px', '').match(/^\d+$/g))
    return Number.parseInt(e, 10);
}
function te(e = '') {
  if (e === void 0 || !e.length) return [];
  const t = new Set();
  for (const i of e.split(' ')) {
    const r = Number.parseInt(i.replace('x', ''));
    r && t.add(r);
  }
  return Array.from(t);
}
function re(e) {
  if (e.length === 0)
    throw new Error(
      '`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)'
    );
}
function ie(e) {
  const t = {};
  if (typeof e == 'string')
    for (const i of e.split(/[\s,]+/).filter((r) => r)) {
      const r = i.split(':');
      r.length !== 2
        ? (t['1px'] = r[0].trim())
        : (t[r[0].trim()] = r[1].trim());
    }
  else Object.assign(t, e);
  return t;
}
async function se(e, t) {
  return await ne(t).catch(
    (r) => (
      console.error('Failed to get image meta for ' + t, r + ''),
      { width: 0, height: 0, ratio: 0 }
    )
  );
}
async function ne(e) {
  if (typeof Image > 'u') throw new TypeError('Image not supported');
  return new Promise((t, i) => {
    const r = new Image();
    (r.onload = () => {
      const s = { width: r.width, height: r.height, ratio: r.width / r.height };
      t(s);
    }),
      (r.onerror = (s) => i(s)),
      (r.src = e);
  });
}
function oe(e) {
  const t = { options: e },
    i = (s, a = {}) => F(t, s, a),
    r = (s, a = {}, n = {}) =>
      i(s, { ...n, modifiers: N(a, n.modifiers || {}) }).url;
  for (const s in e.presets)
    r[s] = (a, n, c) => r(a, n, { ...e.presets[s], ...c });
  return (
    (r.options = e),
    (r.getImage = i),
    (r.getMeta = (s, a) => ae(t, s, a)),
    (r.getSizes = (s, a) => de(t, s, a)),
    (t.$img = r),
    r
  );
}
async function ae(e, t, i) {
  const r = F(e, t, { ...i });
  return typeof r.getMeta == 'function'
    ? await r.getMeta()
    : await se(e, r.url);
}
function F(e, t, i) {
  var f, h;
  if (t && typeof t != 'string')
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`
    );
  if (!t || t.startsWith('data:')) return { url: t };
  const { provider: r, defaults: s } = ce(e, i.provider || e.options.provider),
    a = le(e, i.preset);
  if (((t = k(t) ? t : B(t)), !r.supportsAlias)) {
    for (const m in e.options.alias)
      if (t.startsWith(m)) {
        const g = e.options.alias[m];
        g && (t = L(g, t.slice(m.length)));
      }
  }
  if (r.validateDomains && k(t)) {
    const m = H(t).host;
    if (!e.options.domains.find((g) => g === m)) return { url: t };
  }
  const n = N(i, a, s);
  n.modifiers = { ...n.modifiers };
  const c = n.modifiers.format;
  (f = n.modifiers) != null &&
    f.width &&
    (n.modifiers.width = v(n.modifiers.width)),
    (h = n.modifiers) != null &&
      h.height &&
      (n.modifiers.height = v(n.modifiers.height));
  const l = r.getImage(t, n, e);
  return (l.format = l.format || c || ''), l;
}
function ce(e, t) {
  const i = e.options.providers[t];
  if (!i) throw new Error('Unknown provider: ' + t);
  return i;
}
function le(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error('Unknown preset: ' + t);
  return e.options.presets[t];
}
function de(e, t, i) {
  var w, S, p, z, _;
  const r = v((w = i.modifiers) == null ? void 0 : w.width),
    s = v((S = i.modifiers) == null ? void 0 : S.height),
    a = ie(i.sizes),
    n =
      (p = i.densities) != null && p.trim()
        ? te(i.densities.trim())
        : e.options.densities;
  re(n);
  const c = r && s ? s / r : 0,
    l = [],
    f = [];
  if (Object.keys(a).length >= 1) {
    for (const o in a) {
      const d = I(o, String(a[o]), s, c, e);
      if (d !== void 0) {
        l.push({
          size: d.size,
          screenMaxWidth: d.screenMaxWidth,
          media: `(max-width: ${d.screenMaxWidth}px)`
        });
        for (const u of n)
          f.push({ width: d._cWidth * u, src: j(e, t, i, d, u) });
      }
    }
    ue(l);
  } else
    for (const o of n) {
      const d = Object.keys(a)[0];
      let u = d ? I(d, String(a[d]), s, c, e) : void 0;
      u === void 0 &&
        (u = {
          size: '',
          screenMaxWidth: 0,
          _cWidth: (z = i.modifiers) == null ? void 0 : z.width,
          _cHeight: (_ = i.modifiers) == null ? void 0 : _.height
        }),
        f.push({ width: o, src: j(e, t, i, u, o) });
    }
  fe(f);
  const h = f[f.length - 1],
    m = l.length
      ? l.map((o) => `${o.media ? o.media + ' ' : ''}${o.size}`).join(', ')
      : void 0,
    g = m ? 'w' : 'x',
    b = f.map((o) => `${o.src} ${o.width}${g}`).join(', ');
  return { sizes: m, srcset: b, src: h == null ? void 0 : h.src };
}
function I(e, t, i, r, s) {
  const a = (s.options.screens && s.options.screens[e]) || Number.parseInt(e),
    n = t.endsWith('vw');
  if ((!n && /^\d+$/.test(t) && (t = t + 'px'), !n && !t.endsWith('px')))
    return;
  let c = Number.parseInt(t);
  if (!a || !c) return;
  n && (c = Math.round((c / 100) * a));
  const l = r ? Math.round(c * r) : i;
  return { size: t, screenMaxWidth: a, _cWidth: c, _cHeight: l };
}
function j(e, t, i, r, s) {
  return e.$img(
    t,
    {
      ...i.modifiers,
      width: r._cWidth ? r._cWidth * s : void 0,
      height: r._cHeight ? r._cHeight * s : void 0
    },
    i
  );
}
function ue(e) {
  var i;
  e.sort((r, s) => r.screenMaxWidth - s.screenMaxWidth);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    s.media === t && e.splice(r, 1), (t = s.media);
  }
  for (let r = 0; r < e.length; r++)
    e[r].media = ((i = e[r + 1]) == null ? void 0 : i.media) || '';
}
function fe(e) {
  e.sort((i, r) => i.width - r.width);
  let t = null;
  for (let i = e.length - 1; i >= 0; i--) {
    const r = e[i];
    r.width === t && e.splice(i, 1), (t = r.width);
  }
}
const ge = (e, { modifiers: t, baseURL: i = '/_vercel/image' } = {}, r) => {
    const s = Object.values(r.options.screens || {}).sort((c, l) => c - l),
      a = s[s.length - 1] || 0;
    let n = Number((t == null ? void 0 : t.width) || 0);
    return (
      n ? s.includes(n) || (n = s.find((c) => c > n) || a) : (n = a),
      {
        url:
          i +
          '?' +
          C({
            url: e,
            w: String(n),
            q: String((t == null ? void 0 : t.quality) || '100')
          })
      }
    );
  },
  me = !0,
  he = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: ge, validateDomains: me },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  O = {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      mobile: 600,
      tablet: 800,
      desktop: 1200
    },
    presets: {},
    provider: 'vercel',
    domains: [],
    alias: {},
    densities: [1, 2],
    format: ['webp']
  };
O.providers = { vercel: { provider: he, defaults: {} } };
const P = () => {
    const e = D(),
      t = A();
    return (
      t.$img ||
      t._img ||
      (t._img = oe({
        ...O,
        nuxt: { baseURL: e.app.baseURL },
        runtimeConfig: e
      }))
    );
  },
  M = {
    src: { type: String, required: !1 },
    format: { type: String, required: !1 },
    quality: { type: [Number, String], required: !1 },
    background: { type: String, required: !1 },
    fit: { type: String, required: !1 },
    modifiers: { type: Object, required: !1 },
    preset: { type: String, required: !1 },
    provider: { type: String, required: !1 },
    sizes: { type: [Object, String], required: !1 },
    densities: { type: String, required: !1 },
    preload: { type: [Boolean, Object], required: !1 },
    width: { type: [String, Number], required: !1 },
    height: { type: [String, Number], required: !1 },
    alt: { type: String, required: !1 },
    referrerpolicy: { type: String, required: !1 },
    usemap: { type: String, required: !1 },
    longdesc: { type: String, required: !1 },
    ismap: { type: Boolean, required: !1 },
    loading: {
      type: String,
      required: !1,
      validator: (e) => ['lazy', 'eager'].includes(e)
    },
    crossorigin: {
      type: [Boolean, String],
      required: !1,
      validator: (e) => ['anonymous', 'use-credentials', '', !0, !1].includes(e)
    },
    decoding: {
      type: String,
      required: !1,
      validator: (e) => ['async', 'auto', 'sync'].includes(e)
    },
    nonce: { type: [String], required: !1 }
  },
  pe = (e) => {
    const t = y(() => ({ provider: e.provider, preset: e.preset })),
      i = y(() => ({
        width: v(e.width),
        height: v(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin:
          e.crossorigin === !0 ? 'anonymous' : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
        nonce: e.nonce
      })),
      r = P(),
      s = y(() => ({
        ...e.modifiers,
        width: v(e.width),
        height: v(e.height),
        format: e.format,
        quality: e.quality || r.options.quality,
        background: e.background,
        fit: e.fit
      }));
    return { options: t, attrs: i, modifiers: s };
  },
  ye = {
    ...M,
    legacyFormat: { type: String, default: null },
    imgAttrs: { type: Object, default: null }
  };
({ ...M });
const ve = ['type', 'sizes', 'srcset'],
  we = ['src', 'sizes', 'srcset'],
  be = T({
    __name: 'NuxtPicture',
    props: ye,
    emits: ['load', 'error'],
    setup(e, { emit: t }) {
      const i = e,
        r = Q(),
        s = t,
        a = !1,
        n = P(),
        { attrs: c, options: l, modifiers: f } = pe(i),
        h = y(() => ee(i.src)),
        m = y(() => ['png', 'webp', 'gif', 'svg'].includes(h.value)),
        g = y(() =>
          i.legacyFormat ? i.legacyFormat : m.value ? 'png' : 'jpeg'
        ),
        b = y(() => {
          var d, u;
          const o =
            ((d = i.format) == null ? void 0 : d.split(',')) ||
            (h.value === 'svg'
              ? ['svg']
              : (u = n.options.format) != null && u.length
              ? [...n.options.format]
              : ['webp']);
          return o[0] === 'svg'
            ? [{ src: i.src }]
            : (o.includes(g.value) && o.splice(o.indexOf(g.value), 1),
              o.push(g.value),
              o.map((W) => {
                const {
                  srcset: E,
                  sizes: R,
                  src: U
                } = n.getSizes(i.src, {
                  ...l.value,
                  sizes: i.sizes || n.options.screens,
                  densities: i.densities,
                  modifiers: { ...f.value, format: W }
                });
                return { src: U, type: `image/${W}`, sizes: R, srcset: E };
              }));
        }),
        w = y(() => b.value[b.value.length - 1]),
        S = { ...i.imgAttrs, 'data-nuxt-pic': '' };
      for (const o in r) o in M && !(o in S) && (S[o] = r[o]);
      const p = V(),
        _ = A().isHydrating;
      return (
        G(() => {
          p.value &&
            (p.value.complete &&
              _ &&
              (p.value.getAttribute('data-error')
                ? s('error', new Event('error'))
                : s('load', new Event('load'))),
            (p.value.onload = (o) => {
              s('load', o);
            }),
            (p.value.onerror = (o) => {
              s('error', o);
            }),
            Z('nuxt-picture'));
        }),
        (o, d) => (
          q(),
          x('picture', null, [
            (q(!0),
            x(
              J,
              null,
              K(
                b.value.slice(0, -1),
                (u) => (
                  q(),
                  x(
                    'source',
                    {
                      key: u.src,
                      type: u.type,
                      sizes: u.sizes,
                      srcset: u.srcset
                    },
                    null,
                    8,
                    ve
                  )
                )
              ),
              128
            )),
            w.value
              ? (q(),
                x(
                  'img',
                  X(
                    { key: 0, ref_key: 'imgEl', ref: p },
                    {
                      ...$(c),
                      ...($(a)
                        ? { onerror: "this.setAttribute('data-error', 1)" }
                        : {}),
                      ...S
                    },
                    {
                      src: w.value.src,
                      sizes: w.value.sizes,
                      srcset: w.value.srcset
                    }
                  ),
                  null,
                  16,
                  we
                ))
              : Y('', !0)
          ])
        )
      );
    }
  });
export { be as _ };
