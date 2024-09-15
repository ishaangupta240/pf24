import {
  r as o,
  y as X,
  o as b,
  c as L,
  b as O,
  w as ne,
  a as i,
  z as re,
  t as H,
  d as Z,
  A as fe,
  B as K,
  e as le,
  _ as W,
  C as G,
  j as Y,
  H as ee,
  D as ce,
  p as ve,
  f as he,
  E as ge,
  F,
  q as U,
  v as M,
  G as ye,
  l as D,
  m as q,
  h as J,
  g as xe,
  i as ie,
  I as _e,
  x as ue,
  n as de,
  u as we
} from './entry.BxA1UaYp.js';
import { _ as be } from './Cta.BvZR80B0.js';
import { _ as pe } from './NuxtPicture.vue.qRJyAh4F.js';
import { u as te } from './state.BQQ0NCYv.js';
import { d as ae } from './projects.BAYTZuxw.js';
const je = { class: 'not-hover' },
  ke = ['href', 'data-url', 'data-index'],
  Ee = { class: 'max-ds:pr-[10px] ds:mr-20' },
  Ne = { class: 'max-ds:block max-ds:pr-[10px]' },
  Le = { class: 'secondary' },
  $e = i('span', { class: 'max-ds:hidden' }, 'Agency.', -1),
  Ie = i(
    'span',
    { class: 'w-[1.6rem] h-[1px] -rotate-45 bg-[var(--color-border)] mx-10' },
    null,
    -1
  ),
  Pe = { class: 'secondary' },
  Se = i('span', { class: 'max-ds:hidden' }, 'Year.', -1),
  Te = {
    class:
      'flex max-ds:flex-col max-ds:items-center items-start justify-between mt-20 ds:mt-60'
  },
  Ce = {
    __name: 'ProjectMain',
    props: { data: { type: Object, default: () => {} } },
    setup(e, { expose: a }) {
      const t = o(null),
        u = o(null),
        r = o(null),
        s = o(null);
      a({ title: t, info: u, description: r, link: s });
      const m = X(),
        d = (p) => {
          const h = p.currentTarget.dataset.url,
            g = document.querySelectorAll(
              '[data-projects-images] .project-image'
            );
          m.setUrl('/single-project', g[p.currentTarget.dataset.index]),
            K({ path: h });
        };
      return (p, h) => {
        const g = le,
          f = be;
        return (
          b(),
          L('div', je, [
            O(
              g,
              {
                to: {
                  name: 'projects-single',
                  params: { single: e.data.slug }
                },
                custom: ''
              },
              {
                default: ne(({ href: x }) => [
                  i(
                    'a',
                    {
                      href: x,
                      'data-url': x,
                      'data-index': e.data.id,
                      tabindex: '-1',
                      onClick: re(d, ['prevent'])
                    },
                    [
                      i(
                        'h2',
                        {
                          ref_key: 'title',
                          ref: t,
                          class:
                            'primary text-center text-lg leading-[0.8] ds:leading-[1.3] ds:text-xxl font-saf-ri ds:whitespace-nowrap | not-hover'
                        },
                        [
                          i('span', Ee, H(e.data.mainInfo.title.first), 1),
                          i('span', Ne, H(e.data.mainInfo.title.second), 1)
                        ],
                        512
                      )
                    ],
                    8,
                    ke
                  )
                ]),
                _: 1
              },
              8,
              ['to']
            ),
            i(
              'div',
              {
                ref_key: 'info',
                ref: u,
                class:
                  'flex items-center justify-center mt-20 text-xs ds:text-sm uppercase'
              },
              [
                i('span', Le, [$e, Z(' ' + H(e.data.meta.agency), 1)]),
                Ie,
                i('span', Pe, [Se, Z(' ' + H(e.data.meta.year), 1)])
              ],
              512
            ),
            i('div', Te, [
              i(
                'p',
                {
                  ref_key: 'description',
                  ref: r,
                  class: fe([
                    'secondary text-sm ds:text-md2 w-[30rem] font-saf-r ml-10',
                    [e.data.id === 0 && 'max-ds:ml-40']
                  ])
                },
                H(e.data.mainInfo.description),
                3
              ),
              O(
                f,
                {
                  ref_key: 'link',
                  ref: s,
                  link: e.data.mainInfo.link,
                  label: 'Visit',
                  target: '_blank',
                  class: 'max-ds:mt-20 ds:col-start-5',
                  tabindex: '-1'
                },
                null,
                8,
                ['link']
              )
            ])
          ])
        );
      };
    }
  },
  me = (e) => (ve('data-v-4ca2746f'), (e = e()), he(), e),
  ze = ce(
    '<svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | w-full" data-v-4ca2746f><path class="stroke-current" d="M8.54736 16.6364L1.38827 8.26321L7.83145 0.727323" data-v-4ca2746f></path><path class="stroke-current" d="M1.38817 8.28388L30.0245 8.28387" data-v-4ca2746f></path></svg><svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | absolute w-full" data-v-4ca2746f><path class="stroke-current" d="M8.54736 16.6364L1.38827 8.26321L7.83145 0.727323" data-v-4ca2746f></path><path class="stroke-current" d="M1.38817 8.28388L30.0245 8.28387" data-v-4ca2746f></path></svg>',
    2
  ),
  Oe = [ze],
  Ae = ce(
    '<svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | w-full" data-v-4ca2746f><path class="stroke-current" d="M21.7229 0.363708L28.882 8.73691L22.4388 16.2728" data-v-4ca2746f></path><path class="stroke-current" d="M28.8821 8.71619L0.245728 8.71619" data-v-4ca2746f></path></svg><svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | absolute w-full" data-v-4ca2746f><path class="stroke-current" d="M21.7229 0.363708L28.882 8.73691L22.4388 16.2728" data-v-4ca2746f></path><path class="stroke-current" d="M28.8821 8.71619L0.245728 8.71619" data-v-4ca2746f></path></svg>',
    2
  ),
  He = [Ae],
  Me = me(() =>
    i(
      'circle',
      {
        cx: '140',
        cy: '140',
        r: '139.5',
        class: 'stroke-border | circle__border'
      },
      null,
      -1
    )
  ),
  De = me(() =>
    i(
      'circle',
      {
        cx: '140',
        cy: '140',
        r: '139.5',
        class: 'stroke-primary | circle__progress'
      },
      null,
      -1
    )
  ),
  qe = [Me, De],
  Be = {
    __name: 'ProjectNav',
    props: { total: { type: Number, default: 1 } },
    setup(e, { expose: a }) {
      const t = e,
        { setupSoundInteraction: u } = G(),
        r = o(null),
        s = o(null),
        m = o(null),
        d = o(null),
        p = o(null),
        h = o(null),
        g = o(null),
        f = o(null),
        x = o(null),
        c = o(null);
      a({
        projectLabel: r,
        projectCounter: s,
        zeroNumb: m,
        count: d,
        rightNumbers: p,
        projectNumber: h,
        divider: g,
        btnPrev: f,
        btnNext: x,
        circle: c
      });
      function n(l, v) {
        const $ = document.createElement('span');
        ($.textContent = t.total - 1 + v),
          $.classList.add('spanEl'),
          l.appendChild($);
        for (let k = 1; k < t.total + v; k++) {
          const P = document.createElement('span');
          P.classList.add('spanEl'), (P.textContent = k), l.appendChild(P);
        }
        const w = document.createElement('span');
        (w.textContent = 1), w.classList.add('spanEl'), l.appendChild(w);
      }
      return (
        Y(() => {
          p.value &&
            (n(p.value, 1),
            u(x.value, 'mouseenter', ee),
            u(f.value, 'mouseenter', ee));
        }),
        (l, v) => (
          b(),
          L('div', null, [
            i(
              'span',
              {
                ref_key: 'projectLabel',
                ref: r,
                class:
                  'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm'
              },
              'Project',
              512
            ),
            i(
              'div',
              { ref_key: 'projectCounter', ref: s },
              [
                i(
                  'span',
                  {
                    ref_key: 'zeroNumb',
                    ref: m,
                    class:
                      'primary font-saf-m text-[4rem] ds:text-[8rem] leading-[0.8] block mr-[2.5rem] ds:mr-60'
                  },
                  '0',
                  512
                ),
                i(
                  'div',
                  {
                    ref_key: 'count',
                    ref: d,
                    class:
                      'primary font-saf-m text-[4rem] ds:text-[8rem] leading-[0.8] ds:leading-[6.4rem] ml-[2.5rem] ds:ml-[6rem] overflow-hidden'
                  },
                  [
                    i(
                      'div',
                      {
                        ref_key: 'rightNumbers',
                        ref: p,
                        class:
                          'w-20 h-[3.12rem] ds:h-[6.4rem] ds:w-[4.4rem] flex flex-col'
                      },
                      null,
                      512
                    )
                  ],
                  512
                )
              ],
              512
            ),
            i(
              'span',
              {
                ref_key: 'projectNumber',
                ref: h,
                class:
                  'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm'
              },
              'Number',
              512
            ),
            i(
              'span',
              {
                ref_key: 'divider',
                ref: g,
                class:
                  'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10rem] bg-border scale-[var(--scaleDivider)] -rotate-45 h-[1px] ds:w-[22rem]'
              },
              null,
              512
            ),
            i(
              'button',
              {
                ref_key: 'btnPrev',
                ref: f,
                class:
                  'cta | primary absolute left-10 ds:left-30 top-1/2 transform -translate-y-1/2 w-20 ds:w-30 z-[2] cursor-pointer overflow-hidden',
                'aria-label': 'Previous project'
              },
              Oe,
              512
            ),
            i(
              'button',
              {
                ref_key: 'btnNext',
                ref: x,
                class:
                  'cta | primary absolute right-10 ds:right-30 top-1/2 transform -translate-y-1/2 w-20 ds:w-30 z-[2] cursor-pointer overflow-hidden',
                'aria-label': 'Next project'
              },
              He,
              512
            ),
            (b(),
            L(
              'svg',
              {
                ref_key: 'circle',
                ref: c,
                width: '280',
                height: '280',
                viewBox: '0 0 280 280',
                fill: 'none',
                class:
                  'circle w-full h-full ds:w-[28rem] ds:h-[28rem] absolute left-0 top-0 z-[0]'
              },
              qe,
              512
            ))
          ])
        )
      );
    }
  },
  Ve = W(Be, [['__scopeId', 'data-v-4ca2746f']]),
  Fe = { 'data-projects-images': '' },
  Ue = ['href', 'data-url', 'data-flip-id'],
  Ye = {
    __name: 'ProjectImage',
    props: {
      data: { type: Object, default: () => {} },
      path: { type: String, default: '' },
      index: { type: Number, default: 0 },
      projectClass: { type: String, default: '' }
    },
    setup(e, { expose: a }) {
      const t = X(),
        { setupSoundInteraction: u } = G(),
        r = o([]),
        s = (m) => {
          const d = m.currentTarget.dataset.url;
          t.setUrl('/single-project', m.currentTarget), K({ path: d });
        };
      return (
        Y(() => {
          r.value.forEach((d) => {
            u(d, 'mouseenter', ge);
          });
        }),
        a({ projectLink: r }),
        (m, d) => {
          const p = pe,
            h = le;
          return (
            b(),
            L('div', Fe, [
              (b(!0),
              L(
                F,
                null,
                U(
                  e.data,
                  (g, f) => (
                    b(),
                    M(
                      h,
                      {
                        key: f,
                        to: {
                          name: 'projects-single',
                          params: { single: g.slug }
                        },
                        custom: ''
                      },
                      {
                        default: ne(({ href: x }) => [
                          i(
                            'a',
                            {
                              ref_for: !0,
                              ref_key: 'projectLink',
                              ref: r,
                              'data-image': '',
                              href: x,
                              'data-url': x,
                              'data-flip-id': f,
                              tabindex: '-1',
                              class:
                                'project-image block rounded-full opacity-0 first:opacity-100 absolute z-[1] w-full h-full pointer-events-none',
                              style: ye(
                                `background-color: rgba(${g.mainInfo.colors.colorHover}, var(--alphaBg));`
                              ),
                              onClick: re(s, ['prevent'])
                            },
                            [
                              (b(),
                              M(
                                p,
                                {
                                  key: f,
                                  src: `${e.path}/${g.mainInfo.cover.image}`,
                                  sizes: 'mobile:50vw',
                                  quality: 100,
                                  loading: 'lazy',
                                  class:
                                    'pointer-events-none image rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem]',
                                  'img-attrs': {
                                    class:
                                      'rounded-full object-cover w-full h-full to-load',
                                    alt: g.mainInfo.cover.altImage
                                  }
                                },
                                null,
                                8,
                                ['src', 'img-attrs']
                              ))
                            ],
                            12,
                            Ue
                          )
                        ]),
                        _: 2
                      },
                      1032,
                      ['to']
                    )
                  )
                ),
                128
              ))
            ])
          );
        }
      );
    }
  },
  Re = W(Ye, [['__scopeId', 'data-v-d623315d']]),
  oe = (e, a, t) => (1 - t) * e + t * a,
  Xe = (e, a, t, u) => Math.hypot(t - e, u - a),
  se = (e) => {
    let a = 0,
      t = 0;
    e || (e = window.event);
    const u = document.body,
      r = document.documentElement;
    return (
      e.touches
        ? e.touches.length > 0 &&
          ((a = e.touches[0].pageX), (t = e.touches[0].pageY))
        : e.pageX || e.pageY
        ? ((a = e.pageX), (t = e.pageY))
        : (e.clientX || e.clientY) &&
          ((a = e.clientX + u.scrollLeft + r.scrollLeft),
          (t = e.clientY + u.scrollTop + r.scrollTop)),
      { x: a, y: t }
    );
  },
  Ke = (e, a) => Xe(e.x, e.y, a.x, a.y),
  We = () => {
    const e = o({ x: 0, y: 0 }),
      a = o({ ...e.value }),
      t = o({ ...e.value }),
      u = (r) => {
        r.touches ? (e.value = se(r.touches[0])) : (e.value = se(r));
      };
    return (
      Y(() => {
        window.addEventListener('mousemove', u),
          window.addEventListener('touchmove', u);
      }),
      D(() => {
        window.removeEventListener('mousemove', u),
          window.removeEventListener('touchmove', u);
      }),
      { mousePos: e, cacheMousePos: a, lastMousePos: t }
    );
  },
  Ge = (e) => {
    const { $gsap: a } = q(),
      t = o(null),
      u = o(null),
      r = { scale: 1, x: 0, y: 0, opacity: 0 },
      s = o(null),
      m = o(null),
      d = () => {
        m.value = t.value.getBoundingClientRect();
      },
      p = () => {
        a.set(t.value, r), d();
      },
      h = () => {
        window.addEventListener('resize', p);
      };
    return (
      (t.value = e),
      (u.value = t.value.querySelector('.content__img-inner')),
      d(),
      h(),
      D(() => {
        window.removeEventListener('resize', p);
      }),
      { el: t, inner: u, rect: m, timeline: s, resize: p, getRect: d }
    );
  },
  Je = (e, a, t, u) => {
    const r = o([]),
      s = o(0),
      m = o(0),
      d = o(1),
      p = o(0),
      h = o(!0),
      g = 80,
      f = o(!1),
      { $gsap: x } = q(),
      c = J(),
      n = [...e.querySelectorAll('.content__img')];
    (r.value = n.map((_) => Ge(_))), (s.value = r.value.length);
    const l = () => {
        p.value++, (h.value = !1);
      },
      v = () => {
        p.value--, p.value === 0 && (h.value = !0);
      },
      $ = () => {
        if (f.value) return;
        ++d.value, (m.value = m.value < s.value - 1 ? m.value + 1 : 0);
        const _ = r.value[m.value];
        x.killTweensOf(_.el),
          (_.timeline = x
            .timeline({ onStart: l, onComplete: v })
            .fromTo(
              _.el,
              {
                opacity: 1,
                scale: 0,
                zIndex: d.value,
                x: t.value.x - _.rect.width / 2,
                y: t.value.y - _.rect.height / 2
              },
              {
                duration: 0.4,
                ease: 'power1',
                scale: 1,
                x: a.value.x - _.rect.width / 2,
                y: a.value.y - _.rect.height / 2
              },
              0
            )
            .fromTo(
              _.inner,
              { scale: 2.8, filter: 'brightness(150%)' },
              {
                duration: 0.4,
                ease: 'power1',
                scale: 1,
                filter: 'brightness(100%)'
              },
              0
            )
            .to(
              _.el,
              { duration: 0.4, ease: 'power2', opacity: 0, scale: 0.2 },
              0.45
            ));
      },
      w = () => {
        const _ = Ke(a.value, u.value);
        (t.value.x = oe(t.value.x || a.value.x, a.value.x, 0.1)),
          (t.value.y = oe(t.value.y || a.value.y, a.value.y, 0.1)),
          _ > g && ($(), (u.value = { ...a.value })),
          h.value && d.value !== 1 && (d.value = 1),
          requestAnimationFrame(w);
      },
      k = () => {
        (t.value = { ...a.value }),
          requestAnimationFrame(w),
          window.removeEventListener('mousemove', k);
      },
      P = () => {
        f.value = !0;
      },
      R = () => {
        f.value = !1;
      },
      I = () => {
        document.querySelectorAll('.not-hover').forEach((B) => {
          B.addEventListener('mouseover', P), B.addEventListener('mouseout', R);
        });
      };
    return (
      setTimeout(
        () => {
          window.addEventListener('mousemove', k), I();
        },
        c.isLoaded ? 4e3 : 1e3
      ),
      {
        images: r,
        imagesTotal: s,
        imgPosition: m,
        zIndexVal: d,
        activeImagesCount: p,
        isIdle: h
      }
    );
  },
  Qe = {
    __name: 'ProjectTrail',
    props: {
      data: { type: Object, default: () => {} },
      path: { type: String, default: '' }
    },
    setup(e) {
      const { $gsap: a } = q(),
        t = o(null),
        { mousePos: u, cacheMousePos: r, lastMousePos: s } = We(),
        m = a.matchMedia(),
        d = 1024;
      return (
        Y(() => {
          t.value &&
            m.add(
              {
                isDesktop: `(min-width: ${d}px)`,
                isTouch: '(hover: none), (pointer: coarse)'
              },
              (p) => {
                const { isTouch: h } = p.conditions;
                h || Je(t.value, u, r, s);
              }
            );
        }),
        D(() => {
          m.revert();
        }),
        (p, h) => {
          const g = pe;
          return (
            b(),
            L(
              'div',
              { ref_key: 'imageElement', ref: t, class: 'content' },
              [
                (b(!0),
                L(
                  F,
                  null,
                  U(
                    e.data,
                    (f, x) => (
                      b(),
                      M(
                        g,
                        {
                          key: x,
                          src: `${e.path}/single/${f.image}`,
                          sizes: '(max-width: 600px) 128px, 256px',
                          quality: 90,
                          class: 'content__img',
                          'img-attrs': { class: 'content__img-inner', alt: '' }
                        },
                        null,
                        8,
                        ['src']
                      )
                    )
                  ),
                  128
                )),
                (b(!0),
                L(
                  F,
                  null,
                  U(
                    e.data,
                    (f, x) => (
                      b(),
                      M(
                        g,
                        {
                          key: x,
                          src: `${e.path}/single/${f.image}`,
                          sizes: '(max-width: 600px) 128px, 256px',
                          quality: 90,
                          class: 'content__img',
                          'img-attrs': { class: 'content__img-inner', alt: '' }
                        },
                        null,
                        8,
                        ['src']
                      )
                    )
                  ),
                  128
                ))
              ],
              512
            )
          );
        }
      );
    }
  },
  Ze = W(Qe, [['__scopeId', 'data-v-201f33a8']]),
  et = {
    class:
      'absolute left-20 bottom-20 ds:-left-[2rem] ds:-bottom-[6rem] ds:p-100 | not-hover'
  },
  tt = {
    __name: 'Projects',
    props: { data: { type: Object, default: () => {} } },
    setup(e, { expose: a }) {
      const { $gsap: t, $Observer: u } = q(),
        r = e,
        { transitionState: s } = de(),
        { playSoundDirectly: m } = G(),
        d = xe(),
        p = J(),
        h = X(),
        g = t.matchMedia(),
        f = 1024,
        x = o(null),
        c = o(null),
        n = o([]),
        l = o(null);
      a({ projectItem: n, projectNav: c, projectsImages: l });
      const v = o(0);
      let $ = !1,
        w = [],
        k = [];
      const P = r.data.projects.filter((y) => y.featured).length,
        R = t.utils.wrap(0, P);
      let I,
        _ = 1;
      function B(y) {
        var S;
        if (
          ((y.code === 'ArrowUp' || y.code === 'ArrowLeft') &&
            !I &&
            (z(v.value - 1, -1),
            document.activeElement && document.activeElement.blur()),
          (y.code === 'ArrowDown' || y.code === 'ArrowRight') &&
            !I &&
            (z(v.value + 1, 1),
            document.activeElement && document.activeElement.blur()),
          y.code === 'Space' && !I)
        ) {
          const T =
            (S = l.value) == null
              ? void 0
              : S.$el.querySelectorAll('.project-image');
          h.setUrl('/single-project', T[v.value]),
            K({ path: `/projects/${r.data.projects[v.value].slug}` });
        }
      }
      function z(y, S) {
        (I = !0),
          ($ = !1),
          S === 1 ? _++ : _--,
          t.set([c.value.btnNext, c.value.btnPrev], { disabled: !0 }),
          (y = R(y));
        const T = t.timeline({
            defaults: { duration: 1, ease: 'sine.out' },
            onComplete: () => {}
          }),
          A = 880 - 880 / P - (880 / P) * y,
          C = w[v.value],
          j = k[v.value],
          E = w[y],
          N = k[y];
        (te().value = y),
          j.classList.contains('active') && j.classList.remove('active'),
          N.classList.add('active'),
          T.set(E.$el, { pointerEvents: 'auto' })
            .set(j, { zIndex: -1 }, 0)
            .set(j, { pointerEvents: 'none', scale: 1 }, 0.5)
            .set(N, { pointerEvents: 'all', scale: 1, zIndex: 2 }, 0)
            .to(
              c.value.rightNumbers,
              {
                yPercent: -100 * _,
                ease: 'power3.out',
                onComplete: () => {
                  _ === 6 &&
                    ((_ = 1), t.set(c.value.rightNumbers, { yPercent: -100 })),
                    _ === 0 &&
                      ((_ = 5),
                      t.set(c.value.rightNumbers, { yPercent: -500 }));
                }
              },
              0
            )
            .to(c.value.circle, { '--dashOffset': A, ease: 'power3.out' }, 0)
            .to(
              [C.$el],
              { duration: 0.3, opacity: 0, pointerEvents: 'none' },
              0
            )
            .to(j, { opacity: 0, scale: 1, duration: 0.6, ease: 'sine.out' }, 0)
            .to([E.$el], { opacity: 1, duration: 0.3, pointerEvents: 'all' }, 0)
            .clipTitle(
              E.title,
              { duration: 1.2, stagger: -0.04, yPercent: 0, x: -30 },
              0
            )
            .clipText(
              E.info.querySelectorAll('span:first-child, span:last-child'),
              { duration: 0.8, stagger: 0.03 },
              0.2
            )
            .from(
              E.info.querySelector('span:nth-child(2)'),
              { scale: 0, transformOrigin: 'center bottom', duration: 0.6 },
              0.2
            )
            .clipDescription(E.description, { duration: 0.8 }, 0.3)
            .from(
              E.link.$el,
              {
                yPercent: 50,
                opacity: 0,
                z: 0,
                duration: 0.8,
                ease: 'power3.out',
                onComplete: () => {
                  (I = !1),
                    ($ = !0),
                    c.value &&
                      t.set([c.value.btnNext, c.value.btnPrev], {
                        disabled: !1
                      });
                }
              },
              0.3
            )
            .to(
              N,
              {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'sine.out',
                willChange: 'transform'
              },
              0
            )
            .timeScale(0.8),
          d.setColor(
            w[y].$el.dataset.color1.split(','),
            w[y].$el.dataset.color2.split(','),
            w[y].$el.dataset.color3.split(',')
          ),
          (v.value = y);
      }
      function Q(y) {
        B(y);
      }
      return (
        ie(
          () => [p.isLoaded, s.transitionComplete],
          ([y, S], [T, A]) => {
            if (
              (y !== T &&
                g.add(
                  {
                    isDesktop: `(min-width: ${f}px)`,
                    isMobile: `(max-width: ${f - 1}px)`
                  },
                  (C) => {
                    const { isDesktop: j } = C.conditions;
                    t.set(c.value.rightNumbers, { yPercent: -500 });
                  }
                ),
              S !== A)
            ) {
              if (!x.value) return;
              (w = n.value),
                (k = t.utils.toArray(l.value.projectLink)),
                (te().value = 0),
                d.setColor(
                  w[0].$el.dataset.color1.split(','),
                  w[0].$el.dataset.color2.split(','),
                  w[0].$el.dataset.color3.split(',')
                ),
                g.add(
                  {
                    isDesktop: `(min-width: ${f}px)`,
                    isMobile: `(max-width: ${f - 1}px)`,
                    isTouch: '(hover: none), (pointer: coarse)'
                  },
                  (C) => {
                    const { isDesktop: j, isTouch: E } = C.conditions;
                    setTimeout(() => {
                      $ = !0;
                    }, 1e3),
                      w.forEach((N) => {
                        t.set(N.$el, {
                          x: 0,
                          yPercent: j ? -50 : 0,
                          y: j ? 0 : '-18rem',
                          xPercent: -50,
                          pointerEvents: 'none'
                        });
                        const V = N.title;
                        V.addEventListener('mouseenter', () => {
                          if (!$ || E) return;
                          t
                            .timeline({
                              defaults: { duration: 1, ease: 'power3.out' }
                            })
                            .fromTo(
                              V.querySelectorAll('.char'),
                              { x: -30, clipPath: 'inset(0% 100% 120% -5%)' },
                              {
                                x: 0,
                                duration: 1.2,
                                stagger: -0.04,
                                yPercent: 0,
                                clipPath: 'inset(0% -100% -100% -5%)',
                                overwrite: !0
                              },
                              0
                            ),
                            m(_e);
                        });
                      }),
                      (w[0].$el.style.pointerEvents = 'auto'),
                      k[0].classList.add('active'),
                      (k[0].style.pointerEvents = 'auto'),
                      u.create({
                        type: 'wheel,touch,pointer',
                        preventDefault: !0,
                        wheelSpeed: -1,
                        onUp: () => {
                          I || z(v.value + 1, 1);
                        },
                        onDown: () => {
                          I || z(v.value - 1, -1);
                        },
                        tolerance: 100
                      }),
                      document.addEventListener('keydown', Q),
                      c.value.btnNext.addEventListener('click', () =>
                        z(v.value + 1, 1)
                      ),
                      c.value.btnPrev.addEventListener('click', () =>
                        z(v.value - 1, -1)
                      );
                  }
                );
            }
          }
        ),
        D(() => {
          (I = !1), document.removeEventListener('keydown', Q), g.revert();
        }),
        (y, S) => {
          var E;
          const T = Ce,
            A = Ve,
            C = Re,
            j = Ze;
          return (
            b(),
            L(
              'div',
              { ref_key: 'projectsWrp', ref: x, 'data-home-projects': '' },
              [
                (b(!0),
                L(
                  F,
                  null,
                  U(
                    e.data.projects.slice(0, 5),
                    (N, V) => (
                      b(),
                      M(
                        T,
                        {
                          key: V,
                          ref_for: !0,
                          ref_key: 'projectItem',
                          ref: n,
                          data: N,
                          'data-color1': N.mainInfo.colors.color1,
                          'data-color2': N.mainInfo.colors.color2,
                          'data-color3': N.mainInfo.colors.colorBg,
                          class:
                            'project-item absolute transform -translate-x-1/2 left-1/2 top-1/2 opacity-0 first:opacity-[var(--opacity)] ds:pb-100 ds:top-1/2 will-change-transform'
                        },
                        null,
                        8,
                        ['data', 'data-color1', 'data-color2', 'data-color3']
                      )
                    )
                  ),
                  128
                )),
                i('div', et, [
                  O(
                    A,
                    {
                      ref_key: 'projectNav',
                      ref: c,
                      total: 5,
                      class:
                        'w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] relative flex flex-col p-[1.2rem] ds:p-30 text-center uppercase justify-between items-center'
                    },
                    null,
                    512
                  )
                ]),
                O(
                  C,
                  {
                    ref_key: 'projectsImages',
                    ref: l,
                    data: e.data.projects,
                    path: e.data.imagesPath,
                    class:
                      'w-[14rem] h-[14rem] bottom-20 right-20 ds:w-[28rem] ds:h-[28rem] rounded-full absolute ds:right-80 ds:bottom-40 overflow-hidden | not-hover'
                  },
                  null,
                  8,
                  ['data', 'path']
                ),
                O(
                  j,
                  {
                    data:
                      (E = e.data.projects[ue(v)]) == null ? void 0 : E.gallery,
                    path: e.data.imagesPath
                  },
                  null,
                  8,
                  ['data', 'path']
                )
              ],
              512
            )
          );
        }
      );
    }
  },
  at = {
    class:
      'block text-xxs absolute top-[10rem] left-[2rem] ds:left-80 ds:top-1/2 ds:transform ds:-translate-y-1/2 ds:pb-[19rem]'
  },
  ot = {
    class:
      'block text-xxs absolute right-20 max-ds:hidden max-ds:bottom-20 ds:right-80 ds:top-1/2 ds:transform ds:-translate-y-1/2 ds:pb-[19rem]'
  },
  ut = {
    __name: 'index',
    setup(e) {
      const { $gsap: a } = q();
      we({
        title: 'Federico Pian - Creative Developer',
        meta: [
          {
            name: 'description',
            content:
              'Federico Pian is a creative developer and co-founder at Overpx Studio'
          }
        ]
      });
      const { transitionState: t } = de(),
        u = J(),
        r = o(null),
        s = o(null),
        m = o(null),
        d = o(null),
        p = o(null),
        h = o(null);
      let g = !1;
      const f = ae.projects.filter((c) => c.featured).length,
        x = (c, n, l) => {
          g = !0;
          const v = a.timeline({ defaults: { duration: n, ease: c } });
          a.set(r.value, { opacity: 1 }),
            l
              ? v
                  .from(
                    s.value.projectNav.count,
                    { yPercent: -50, willChange: 'transform' },
                    0
                  )
                  .from(
                    s.value.projectNav.zeroNumb,
                    { yPercent: 50, willChange: 'transform' },
                    0
                  )
                  .to(s.value.projectNav.rightNumbers, { yPercent: -100 }, 0)
                  .to(
                    s.value.projectNav.circle,
                    { '--dashOffset': 880 - 880 / f },
                    0
                  )
                  .to(
                    document.documentElement,
                    { '--opacity': 1, duration: 0.6, ease: 'sine.out' },
                    n / 2
                  )
              : (a.set(s.value.projectNav.rightNumbers, { yPercent: -100 }),
                v
                  .fromTo(
                    [s.value.projectNav.zeroNumb, s.value.projectNav.count],
                    { yPercent: 120, z: 0, clipPath: 'inset(0% 0 120% 0)' },
                    {
                      yPercent: 0,
                      z: 0,
                      clipPath: 'inset(0% 0 0% 0)',
                      ease: 'power3.out',
                      stagger: 0.1,
                      duration: 0.8
                    },
                    0.4
                  )
                  .fromTo(
                    document.querySelectorAll('[data-fede-preloader] span'),
                    { yPercent: 200, z: 0, clipPath: 'inset(0% 0 120% 0)' },
                    {
                      yPercent: 0,
                      z: 0,
                      clipPath: 'inset(0% 0 0% 0)',
                      ease: 'power3.out',
                      stagger: 0.05,
                      duration: 1
                    },
                    n / 2
                  )
                  .fromTo(
                    s.value.projectNav.circle,
                    { '--dashOffsetBorder': 880 },
                    { '--dashOffsetBorder': 0 },
                    n / 2
                  )
                  .fromTo(
                    s.value.projectNav.circle,
                    { '--dashOffset': 880 },
                    { '--dashOffset': 880 - 880 / f },
                    n / 2 + 0.2
                  )),
            v
              .to(
                s.value.projectNav.divider,
                { '--scaleDivider': 1 },
                l ? 0 : n / 2
              )
              .from(
                s.value.projectNav.btnPrev,
                {
                  xPercent: -50,
                  opacity: 0,
                  duration: l ? n / 2 : n,
                  ease: l ? 'expo.out' : c,
                  willChange: 'transform'
                },
                n / 2
              )
              .from(
                s.value.projectNav.btnNext,
                {
                  xPercent: 50,
                  opacity: 0,
                  duration: l ? n / 2 : n,
                  ease: l ? 'expo.out' : c,
                  willChange: 'transform'
                },
                n / 2
              )
              .from(
                s.value.projectNav.projectLabel,
                {
                  yPercent: -50,
                  opacity: 0,
                  duration: l ? n / 2 : n,
                  ease: l ? 'expo.out' : c,
                  willChange: 'transform'
                },
                n / 2
              )
              .from(
                s.value.projectNav.projectNumber,
                {
                  yPercent: 50,
                  opacity: 0,
                  duration: l ? n / 2 : n,
                  ease: l ? 'expo.out' : c,
                  willChange: 'transform'
                },
                n / 2
              )
              .clipTitle(
                s.value.projectItem[0].title,
                { duration: 1.4, stagger: -0.06, yPercent: 0, x: -30 },
                l ? n / 2 : 0
              )
              .clipText(
                s.value.projectItem[0].info.querySelectorAll(
                  'span:first-child, span:last-child'
                ),
                { duration: 0.8, stagger: 0.03 },
                l ? n / 2 + 0.4 : 0.4
              )
              .from(
                s.value.projectItem[0].info.querySelector('span:nth-child(2)'),
                { scale: 0, duration: 0.6 },
                l ? n / 2 + 0.4 : 0.4
              )
              .clipDescription(
                s.value.projectItem[0].description,
                { duration: 0.8 },
                l ? n / 2 + 0.6 : 0.6
              )
              .fromTo(
                s.value.projectItem[0].link.$el,
                { yPercent: 50, opacity: 0, z: 0 },
                {
                  yPercent: 0,
                  z: 0,
                  opacity: 1,
                  duration: 1,
                  ease: 'power3.out'
                },
                l ? n / 2 + 0.4 : 0.4
              )
              .fromTo(
                [m.value, d.value, p.value],
                {
                  yPercent: 120,
                  opacity: 0,
                  z: 0,
                  clipPath: 'inset(0% -10px 120% 0)'
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  z: 0,
                  clipPath: 'inset(0% -10px 0% 0)',
                  duration: 1,
                  ease: 'power3.out',
                  stagger: 0.05
                },
                l ? n / 2 + 0.2 : 0.2
              )
              .fromTo(
                s.value.projectsImages.$el,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' },
                l ? n / 2 : 0
              );
        };
      return (
        ie(
          () => [u.isLoaded, t.transitionComplete],
          ([c, n], [l, v]) => {
            if (c !== l) {
              if (!r.value) return;
              h.value = a.context(() => {
                x('expo.inOut', 3, !0);
              });
            }
            if (n !== v) {
              if (!r.value) return;
              h.value = a.context(() => {
                a.set(document.documentElement, {
                  '--color-primary': 'rgb(23, 25, 26)',
                  '--color-secondary': 'rgb(80, 80, 80)',
                  '--color-border': 'rgba(0,0,0,0.2)'
                }),
                  a.set(r.value, { opacity: 1 }),
                  g || x('power3.out', 1, !1);
              });
            }
          }
        ),
        D(() => {
          r.value && h.value.revert();
        }),
        (c, n) => {
          const l = tt;
          return (
            b(),
            L(
              'section',
              {
                ref_key: 'home',
                ref: r,
                class:
                  'fixed z-[1] top-0 left-0 w-full h-full overflow-hidden opacity-0'
              },
              [
                O(
                  l,
                  { ref_key: 'homeProjects', ref: s, data: ue(ae) },
                  null,
                  8,
                  ['data']
                ),
                i('span', at, [
                  i(
                    'span',
                    {
                      ref_key: 'portfolioLabel',
                      ref: m,
                      class: 'block font-saf-ri'
                    },
                    'portfolio 2024',
                    512
                  )
                ]),
                i('span', ot, [
                  i(
                    'span',
                    {
                      ref_key: 'scrollLabel',
                      ref: d,
                      class: 'block font-saf-ri'
                    },
                    'scroll',
                    512
                  )
                ]),
                i(
                  'span',
                  {
                    ref_key: 'swipeLabel',
                    ref: p,
                    class: 'text-xxs ds:hidden absolute right-20 top-[10rem]'
                  },
                  'swipe to discover',
                  512
                )
              ],
              512
            )
          );
        }
      );
    }
  };
export { ut as default };
