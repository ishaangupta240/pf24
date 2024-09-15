import { _ as Me } from './NuxtPicture.vue.qRJyAh4F.js';
import {
  _ as ae,
  o as j,
  c as N,
  a as r,
  b as W,
  G as ne,
  t as J,
  p as re,
  f as se,
  C as pe,
  r as l,
  j as oe,
  H as ie,
  D as ve,
  m as le,
  g as qe,
  y as Fe,
  i as he,
  k as O,
  B as ce,
  l as ye,
  F as Q,
  q as de,
  n as be,
  E as Be,
  v as ue,
  s as me,
  h as Ye,
  u as Re,
  x as He
} from './entry.BxA1UaYp.js';
import { u as fe } from './state.BQQ0NCYv.js';
import { d as Ve } from './projects.BAYTZuxw.js';
const ge = (a) => (re('data-v-c0599840'), (a = a()), se(), a),
  Ue = ['data-color1', 'data-color2', 'data-color3', 'href', 'data-url'],
  Xe = ['data-flip-id'],
  Ke = {
    'data-item-content': '',
    class:
      'opacity-[var(--opacity)] translate-x-[var(--translateX)] translate-y-[var(--translateY)] text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30 absolute top-0 left-full ds:top-full ds:left-0 overflow-hidden pointer-events-none'
  },
  Ge = ge(() =>
    r(
      'span',
      {
        'data-bg-item': '',
        class:
          'w-[13.4rem] h-[13.4rem] ds:w-[27rem] ds:h-[27rem] bg-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'
      },
      null,
      -1
    )
  ),
  Je = { class: 'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm' },
  Qe = {
    class:
      'primary font-saf-ri title text-[2rem] max-ds:tracking-tighter !leading-[0.8] ds:text-[3.6rem] tracking-tighter'
  },
  We = { class: 'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm' },
  Ze = {
    ref: 'itemCircles',
    class:
      'circles-dec absolute left-0 top-1/2 -translate-y-1/2 -rotate-45 pointer-events-none w-full h-full'
  },
  et = ge(() =>
    r(
      'div',
      {
        class:
          'circles-dec__inner flex items-center justify-between pointer-events-none w-full h-full'
      },
      [
        r('span', {
          class:
            'bg-secondary w-[0.2rem] h-[0.2rem] ds:w-[0.4rem] ds:h-[0.4rem] rounded-full shrink-0'
        }),
        r('span', {
          class:
            'bg-secondary w-[0.2rem] h-[0.2rem] ds:w-[0.4rem] ds:h-[0.4rem] rounded-full shrink-0'
        })
      ],
      -1
    )
  ),
  tt = [et],
  at = {
    __name: 'ListItem',
    props: {
      item: { type: Object, default: () => {} },
      data: { type: Object, default: () => {} }
    },
    setup(a) {
      return (C, L) => {
        const e = Me;
        return (
          j(),
          N(
            'a',
            {
              'data-color1': a.item.mainInfo.colors.color1,
              'data-color2': a.item.mainInfo.colors.color2,
              'data-color3': a.item.mainInfo.colors.colorBg,
              href: `/projects/${a.item.slug}`,
              'data-image': '',
              'data-url': `/projects/${a.item.slug}`,
              class: 'item-link w-[28rem] h-[14rem] ds:h-[56rem]',
              style: ne(
                `--color1: rgb(${a.item.mainInfo.colors.color1}); --color2: rgb(${a.item.mainInfo.colors.color2}); --colorHover: rgb(${a.item.mainInfo.colors.colorHover})`
              )
            },
            [
              r(
                'div',
                {
                  class:
                    'project-item w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] relative will-change-transform',
                  'data-flip-id': a.item.id
                },
                [
                  W(
                    e,
                    {
                      src: `${a.data.imagesPath}/${a.item.mainInfo.cover.image}`,
                      class:
                        'image overflow-hidden relative rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] block backface-hidden',
                      sizes: 'mobile:50vw',
                      'data-flip-id': a.item.id,
                      quality: 90,
                      'img-attrs': {
                        class:
                          'rounded-full object-cover w-auto h-full to-load flex-shrink-0 aspect-[1/1] block',
                        alt: a.item.mainInfo.cover.altImage
                      },
                      style: ne(
                        `background-color: rgba(${a.item.mainInfo.colors.colorHover}, var(--alphaBg));`
                      )
                    },
                    null,
                    8,
                    ['src', 'data-flip-id', 'img-attrs', 'style']
                  ),
                  r('div', Ke, [
                    Ge,
                    r('span', Je, 'N. ' + J(a.item.number), 1),
                    r('p', Qe, [
                      r(
                        'span',
                        { ref: 'titleFirst', class: 'block' },
                        J(a.item.mainInfo.title.first),
                        513
                      ),
                      r(
                        'span',
                        { ref: 'titleSecond', class: 'block' },
                        J(a.item.mainInfo.title.second),
                        513
                      )
                    ]),
                    r('span', We, 'Y. ' + J(a.item.meta.year), 1),
                    r('div', Ze, tt, 512)
                  ])
                ],
                8,
                Xe
              )
            ],
            12,
            Ue
          )
        );
      };
    }
  },
  rt = ae(at, [['__scopeId', 'data-v-c0599840']]),
  xe = (a) => (re('data-v-6bca4112'), (a = a()), se(), a),
  st = {
    class:
      'opacity-100 w-[13.5rem] h-[13.5rem] ds:w-[28rem] ds:h-[28rem] fixed left-20 bottom-20 ds:left-80 ds:bottom-40 flex flex-col p-[1.2rem] ds:p-30 text-center uppercase justify-between items-center z-[10]'
  },
  ot = ve(
    '<svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | w-full pointer-events-none" data-v-6bca4112><path d="M8.54736 16.6364L1.38827 8.26321L7.83145 0.727323" class="stroke-current" data-v-6bca4112></path><path d="M1.38817 8.28388L30.0245 8.28387" class="stroke-current" data-v-6bca4112></path></svg><svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | absolute w-full pointer-events-none" data-v-6bca4112><path d="M8.54736 16.6364L1.38827 8.26321L7.83145 0.727323" class="stroke-current" data-v-6bca4112></path><path d="M1.38817 8.28388L30.0245 8.28387" class="stroke-current" data-v-6bca4112></path></svg>',
    2
  ),
  lt = [ot],
  nt = ve(
    '<svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | w-full pointer-events-none" data-v-6bca4112><path d="M21.7229 0.363708L28.882 8.73691L22.4388 16.2728" class="stroke-primary" data-v-6bca4112></path><path d="M28.8821 8.71619L0.245728 8.71619" class="stroke-primary" data-v-6bca4112></path></svg><svg width="30" height="17" viewBox="0 0 30 17" fill="none" class="icon-svg | absolute w-full pointer-events-none" data-v-6bca4112><path d="M21.7229 0.363708L28.882 8.73691L22.4388 16.2728" class="stroke-primary" data-v-6bca4112></path><path d="M28.8821 8.71619L0.245728 8.71619" class="stroke-primary" data-v-6bca4112></path></svg>',
    2
  ),
  it = [nt],
  ct = xe(() =>
    r(
      'circle',
      {
        cx: '140',
        cy: '140',
        r: '139.5',
        stroke: 'var(--color-primary)',
        class: 'circle__border'
      },
      null,
      -1
    )
  ),
  dt = xe(() =>
    r(
      'circle',
      {
        class: 'circle-border stroke-border',
        cx: '140',
        cy: '140',
        r: '139.5'
      },
      null,
      -1
    )
  ),
  ut = [ct, dt],
  mt = {
    __name: 'Nav',
    props: { total: { type: Number, default: 1 } },
    setup(a, { expose: C }) {
      const L = a,
        { $gsap: e } = le(),
        { setupSoundInteraction: g } = pe(),
        h = l(null),
        S = l(null),
        _ = l(null),
        y = l(null),
        z = l(null),
        I = l(null),
        b = l(null),
        n = l(null),
        s = l(null),
        u = l(null),
        c = l(null);
      C({
        leftNumbers: u,
        rightNumbers: c,
        projectLabel: h,
        projectCounter: S,
        zeroNumb: _,
        count: y,
        projectNumber: z,
        divider: I,
        btnPrev: b,
        btnNext: n,
        circle: s
      });
      function w(d, m) {
        const D = document.createElement('span');
        (D.textContent = L.total - 1 + m), D.classList.add('spanEl');
        for (let M = 1 + m; M < L.total + m; M++) {
          const q = document.createElement('span');
          q.classList.add('spanEl'),
            (q.textContent = M),
            M % 2 === 1 - m && d.appendChild(q),
            e.set(q, { position: 'absolute', top: '0', left: '0' });
        }
        const B = document.createElement('span');
        (B.textContent = 1 + m), B.classList.add('spanEl');
      }
      return (
        oe(() => {
          u.value &&
            (w(u.value, 0),
            w(c.value, 1),
            g(n.value, 'mouseenter', ie),
            g(b.value, 'mouseenter', ie));
        }),
        (d, m) => (
          j(),
          N('div', st, [
            r(
              'span',
              {
                ref_key: 'projectLabel',
                ref: h,
                class:
                  'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm'
              },
              'Projects',
              512
            ),
            r(
              'div',
              { ref_key: 'projectCounter', ref: S },
              [
                r(
                  'div',
                  {
                    ref_key: 'zeroNumb',
                    ref: _,
                    class:
                      'primary font-saf-m text-[4rem] ds:text-[8rem] leading-[0.8] mr-[2.5rem] ds:mr-50'
                  },
                  [
                    r(
                      'div',
                      {
                        ref_key: 'leftNumbers',
                        ref: u,
                        class: 'w-30 h-[3.12rem] ds:h-[6.4rem] ds:w-[4.4rem]'
                      },
                      null,
                      512
                    )
                  ],
                  512
                ),
                r(
                  'div',
                  {
                    ref_key: 'count',
                    ref: y,
                    class:
                      'primary font-saf-m text-[4rem] ds:text-[8rem] leading-[0.8] ml-[2.5rem] ds:ml-50'
                  },
                  [
                    r(
                      'div',
                      {
                        ref_key: 'rightNumbers',
                        ref: c,
                        class: 'w-30 h-[3.12rem] ds:h-[6.4rem] ds:w-[4.4rem]'
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
            r(
              'span',
              {
                ref_key: 'projectNumber',
                ref: z,
                class:
                  'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm'
              },
              'Navigation',
              512
            ),
            r(
              'span',
              {
                ref_key: 'divider',
                ref: I,
                class:
                  'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10rem] bg-border scale-[var(--scaleDivider)] -rotate-45 h-[1px] ds:w-[22rem]'
              },
              null,
              512
            ),
            r(
              'button',
              {
                ref_key: 'btnPrev',
                ref: b,
                class:
                  'cta primary absolute left-10 ds:left-30 top-1/2 transform -translate-y-1/2 w-20 ds:w-30 z-[2] overflow-hidden',
                'aria-label': 'Previous project'
              },
              lt,
              512
            ),
            r(
              'button',
              {
                ref_key: 'btnNext',
                ref: n,
                class:
                  'cta primary absolute right-10 ds:right-30 top-1/2 transform -translate-y-1/2 w-20 ds:w-30 z-[2] overflow-hidden',
                'aria-label': 'Next project'
              },
              it,
              512
            ),
            (j(),
            N(
              'svg',
              {
                ref_key: 'circle',
                ref: s,
                width: '280',
                height: '280',
                viewBox: '0 0 280 280',
                fill: 'none',
                class:
                  'circle w-full h-full ds:w-[28rem] ds:h-[28rem] absolute left-0 top-0 z-[0]'
              },
              ut,
              512
            ))
          ])
        )
      );
    }
  },
  ft = ae(mt, [['__scopeId', 'data-v-6bca4112']]),
  pt = (a) => (re('data-v-eb81676b'), (a = a()), se(), a),
  vt = { class: 'gallery-list' },
  ht = pt(() => r('div', { class: 'drag-proxy' }, null, -1)),
  yt = {
    __name: 'List',
    props: { data: { type: Object, default: () => {} } },
    setup(a, { expose: C }) {
      const L = a,
        { $gsap: e, $ScrollTrigger: g, $Draggable: h, $Flip: S } = le(),
        _ = qe(),
        y = Fe(),
        { transitionState: z } = be(),
        { playSoundDirectly: I } = pe(),
        b = l(null),
        n = l(null),
        s = l(null),
        u = l(null);
      C({ projectsList: b, projectsNav: n, listOne: s, listTwo: u });
      let c;
      function w(p) {
        c.forEach((P) => {
          const T = parseInt(P.getAttribute('data-flip-id')),
            o = parseInt(p.code.replace('Digit', ''));
          if (g.isInViewport(P) && T + 1 === o) {
            const f = P.dataset.url;
            y.setUrl('/single-project', P), ce({ path: f });
          }
        });
      }
      function d(p) {
        w(p);
      }
      const m = (p, P = 0) => {
        const T = [...p.children];
        for (let o = 0; o <= P - 1; ++o) {
          const f = T[o].cloneNode(!0);
          f.classList.add('item-cloned'), p.appendChild(f);
        }
      };
      function D(p, P, T) {
        const o = e.timeline({ paused: !0 }),
          f = e.timeline({
            paused: !0,
            repeat: -1,
            onRepeat() {
              this._time === this._dur && (this._tTime += this._dur - 0.01);
            },
            onReverseComplete() {
              this.totalTime(this.rawTime() + this.duration() * 100);
            }
          }),
          x = P * p.length;
        let k;
        return (
          p
            .concat(p)
            .concat(p)
            .forEach((Y, R) => {
              const H = T(p[R % p.length]);
              o.add(H, R * P), k || (k = H.duration());
            }),
          f.fromTo(
            o,
            { time: x + k / 2 },
            { time: '+=' + x, duration: x, ease: 'none' }
          ),
          f
        );
      }
      let B = !1;
      const M = e.matchMedia(),
        q = 1024;
      return (
        he(
          () => z.transitionComplete,
          (p, P) => {
            if (p !== P) {
              if (!b.value) return;
              M.add(
                {
                  isDesktop: `(min-width: ${q}px)`,
                  isMobile: `(max-width: ${q - 1}px)`,
                  isTouch: '(hover: none), (pointer: coarse)'
                },
                (T) => {
                  const { isDesktop: o, isTouch: f } = T.conditions;
                  m(s.value, 4),
                    m(s.value, 4),
                    m(s.value, 4),
                    m(u.value, 4),
                    m(u.value, 4),
                    m(u.value, 4),
                    m(n.value.leftNumbers, 4),
                    m(n.value.leftNumbers, 4),
                    m(n.value.leftNumbers, 4),
                    m(n.value.rightNumbers, 4),
                    m(n.value.rightNumbers, 4),
                    m(n.value.rightNumbers, 4),
                    (c = e.utils.toArray(b.value.querySelectorAll('.item-or'))),
                    O().value ||
                      _.setColor(
                        c[0].getAttribute('data-color1').split(','),
                        c[0].getAttribute('data-color2').split(','),
                        c[0].getAttribute('data-color3').split(',')
                      ),
                    c.forEach((t) => {
                      const i = t.querySelector('[data-bg-item]'),
                        v = t.querySelector('.circles-dec__inner'),
                        A = t.querySelector('.image img');
                      t.addEventListener('mouseenter', () => {
                        if (!B || f) return;
                        const X = t.getAttribute('data-color1').split(','),
                          ee = t.getAttribute('data-color2').split(','),
                          De = t.getAttribute('data-color3').split(',');
                        _.setColor(X, ee, De);
                        const te = t.getAttribute('data-flip-id');
                        e.set(document.documentElement, {
                          '--color-primary': `rgba(${L.data.projects[te].mainInfo.colors.colorPrimary})`,
                          '--color-secondary': `rgba(${L.data.projects[te].mainInfo.colors.colorSecondary})`,
                          '--color-border': `rgba(${L.data.projects[te].mainInfo.colors.colorBorder})`
                        }),
                          e.to(A, {
                            scale: 1.1,
                            ease: 'power3.out',
                            duration: 1,
                            willChange: 'transform'
                          }),
                          e.to(i, {
                            scale: 0.96,
                            ease: 'power3.out',
                            duration: 1
                          }),
                          e.to(v, {
                            scale: 0.98,
                            rotation: 180,
                            ease: 'power3.out',
                            duration: 1
                          }),
                          I(Be);
                      }),
                        t.addEventListener('mouseleave', () => {
                          f ||
                            (e.to(A, {
                              scale: 1,
                              ease: 'power3.out',
                              duration: 1,
                              willChange: 'transform'
                            }),
                            e.to(i, {
                              scale: 1,
                              ease: 'power3.out',
                              duration: 1
                            }),
                            e.to(v, {
                              scale: 1,
                              rotation: 0,
                              ease: 'power3.out',
                              duration: 1
                            }));
                        }),
                        t.addEventListener('click', (X) => {
                          X.preventDefault();
                          const ee = X.currentTarget.dataset.url;
                          y.setUrl('/single-project', X.currentTarget),
                            ce({ path: ee });
                        });
                    });
                  let x = 0;
                  const k = 500,
                    Y = 500,
                    R = 0.6,
                    H = 1;
                  e.set('.item', {
                    yPercent: o ? k : 0,
                    xPercent: o ? 0 : Y,
                    opacity: H,
                    scale: R
                  });
                  const F = 0.1,
                    _e = e.utils.snap(F),
                    we = e.utils.toArray(s.value.querySelectorAll('.item')),
                    ke = e.utils.toArray(u.value.querySelectorAll('.item')),
                    Le = e.utils.toArray(n.value.leftNumbers.children),
                    Pe = e.utils.toArray(n.value.rightNumbers.children),
                    je = (t) => {
                      const i = e.timeline();
                      return (
                        i
                          .fromTo(
                            t,
                            { scale: R, opacity: H },
                            {
                              scale: 1,
                              opacity: 1,
                              duration: 0.5,
                              yoyo: !0,
                              repeat: 1,
                              ease: 'power1.in',
                              immediateRender: !1
                            },
                            0
                          )
                          .fromTo(
                            t,
                            { y: 0, yPercent: o ? k : 0, xPercent: o ? 0 : Y },
                            {
                              y: 0,
                              yPercent: o ? -k : 0,
                              xPercent: o ? 0 : -Y,
                              duration: 1,
                              ease: 'none',
                              immediateRender: !1
                            },
                            0
                          )
                          .fromTo(
                            t.querySelector('.circles-dec'),
                            { rotation: -45 },
                            {
                              rotation: 325,
                              duration: 1,
                              ease: 'none',
                              immediateRender: !1
                            },
                            0
                          ),
                        i
                      );
                    },
                    $e = (t) => {
                      const i = e.timeline();
                      return (
                        i
                          .fromTo(
                            t,
                            { scale: R, opacity: H },
                            {
                              scale: 1,
                              opacity: 1,
                              duration: 0.5,
                              yoyo: !0,
                              repeat: 1,
                              ease: 'power1.in',
                              immediateRender: !1
                            },
                            0
                          )
                          .fromTo(
                            t,
                            {
                              y: 0,
                              yPercent: o ? -k : 0,
                              xPercent: o ? 0 : -Y
                            },
                            {
                              y: 0,
                              yPercent: o ? k : 0,
                              xPercent: o ? 0 : Y,
                              duration: 1,
                              ease: 'none',
                              immediateRender: !1
                            },
                            0
                          )
                          .fromTo(
                            t.querySelector('.circles-dec'),
                            { rotation: -15 },
                            {
                              rotation: 345,
                              duration: 1,
                              ease: 'none',
                              immediateRender: !1
                            },
                            0
                          ),
                        i
                      );
                    },
                    Se = (t) => {
                      const i = e.timeline();
                      return (
                        i.fromTo(
                          t,
                          { y: 0, yPercent: k * 2, z: 0 },
                          {
                            y: 0,
                            z: 0,
                            yPercent: -k * 2,
                            duration: 2,
                            ease: 'none',
                            immediateRender: !1
                          },
                          0
                        ),
                        i
                      );
                    },
                    Te = (t) => {
                      const i = e.timeline();
                      return (
                        i.fromTo(
                          t,
                          { y: 0, yPercent: -k * 2, z: 0 },
                          {
                            y: 0,
                            z: 0,
                            yPercent: k * 2,
                            duration: 2,
                            ease: 'none',
                            immediateRender: !1
                          },
                          0
                        ),
                        i
                      );
                    },
                    V = D(we, F, je),
                    Ne = D(ke, F, $e),
                    Ie = D(Le, F, Se),
                    Ee = D(Pe, F, Te),
                    U = { offset: 0 },
                    K = e.utils.wrap(0, V.duration()),
                    E = e.to(U, {
                      offset: 0,
                      onUpdate() {
                        V.time(K(U.offset)),
                          Ne.time(K(U.offset)),
                          Ie.time(K(U.offset)),
                          Ee.time(K(U.offset));
                      },
                      duration: 1,
                      ease: 'power3',
                      paused: !0
                    }),
                    $ = g.create({
                      start: 0,
                      onUpdate(t) {
                        if (!n.value) return;
                        const i = t.scroll();
                        i > t.end - 1
                          ? Z(1, 2)
                          : i < 1 && t.direction < 0
                          ? Z(-1, t.end - 2)
                          : ((E.vars.offset = (x + t.progress) * V.duration()),
                            E.invalidate().restart());
                      },
                      end: '+=10000',
                      pin: '.gallery'
                    }),
                    Ae = (t) =>
                      e.utils.clamp(
                        1,
                        $.end - 1,
                        e.utils.wrap(0, 1, t) * $.end
                      ),
                    Z = (t, i) => {
                      (x += t), $.scroll(i), $.update();
                    };
                  g.normalizeScroll(!0), $.disable();
                  const Ce = s.value.querySelectorAll(
                      '.item-or:not(.item-cloned)'
                    ),
                    ze = u.value.querySelectorAll('.item-or:not(.item-cloned)'),
                    Oe = e.utils.toArray([Ce, ze]).sort((t, i) => {
                      const v = t.getAttribute('data-flip-id'),
                        A = i.getAttribute('data-flip-id');
                      return v.localeCompare(A);
                    });
                  fe().value % 2 === 0
                    ? e.set(s.value, { zIndex: 1 })
                    : e.set(u.value, { zIndex: 1 }),
                    e.set(Oe[fe().value], { zIndex: 100 }),
                    g.addEventListener('scrollEnd', () => G(E.vars.offset)),
                    n.value.btnNext.addEventListener('click', () =>
                      G(E.vars.offset + F)
                    ),
                    n.value.btnPrev.addEventListener('click', () =>
                      G(E.vars.offset - F)
                    );
                  function G(t) {
                    if (!b.value) return;
                    const i = _e(t),
                      v = (i - V.duration() * x) / V.duration(),
                      A = Ae(v);
                    if (v >= 1 || v < 0) return Z(Math.floor(v), A);
                    $.scroll(A);
                  }
                  f &&
                    h.create('.drag-proxy', {
                      type: o ? 'y' : 'x',
                      trigger: '.gallery',
                      onPress() {
                        this.startOffset = E.vars.offset;
                      },
                      onDrag() {
                        (E.vars.offset = o
                          ? this.startOffset + (this.startY - this.y) * 0.001
                          : this.startOffset + (this.startX - this.x) * 0.001),
                          E.invalidate().restart();
                      },
                      onDragEnd() {
                        G(E.vars.offset);
                      }
                    }),
                    O().value ||
                      ($.enable(),
                      $.scroll(1),
                      setTimeout(() => {
                        B = !0;
                      }, 1e3)),
                    b.value.querySelectorAll('[data-flip-id]').forEach((t) => {
                      const i = t.querySelector('.project-item'),
                        v = t.getAttribute('data-flip-id'),
                        A = !o;
                      (O().value && O().value[v] && g.isInViewport(t, 0, A)) ||
                      (O().value &&
                        O().value[v] &&
                        v === '4' &&
                        !t.classList.contains('item-cloned'))
                        ? S.from(O().value[v], {
                            targets: i,
                            duration: 1.4,
                            ease: 'power4.inOut',
                            absolute: !0,
                            delay: 0.01 * (7 - v),
                            scale: !0,
                            onStart: () => {
                              v === '1' &&
                                setTimeout(() => {
                                  document.querySelector('.cloned') &&
                                    document.querySelector('.cloned').remove();
                                }, 200);
                            },
                            onComplete: () => {
                              $.isActive ||
                                ($.enable(),
                                $.scroll(1),
                                setTimeout(() => {
                                  B = !0;
                                }, 1e3));
                            }
                          }).fromTo(
                            t,
                            {
                              '--opacity': 0,
                              '--translateX': o ? 0 : -100,
                              '--translateY': o ? -200 : 0
                            },
                            {
                              '--opacity': 1,
                              '--translateX': 0,
                              '--translateY': 0,
                              duration: 0.7,
                              ease: 'power4.out'
                            },
                            0.7
                          )
                        : e.set(t, {
                            '--opacity': 1,
                            '--translateY': 0,
                            '--translateX': 0
                          });
                    });
                }
              );
            }
          }
        ),
        oe(() => {
          window.addEventListener('keydown', d);
        }),
        ye(() => {
          window.removeEventListener('keydown', d), M.revert();
        }),
        (p, P) => {
          const T = rt,
            o = ft;
          return (
            j(),
            N('div', vt, [
              r(
                'div',
                { ref_key: 'projectsList', ref: b, class: 'gallery' },
                [
                  r(
                    'div',
                    {
                      ref_key: 'listOne',
                      ref: s,
                      class:
                        'absolute left-1/2 top-1/2 transform -translate-x-[calc(50%+3.5rem)] -translate-y-[calc(50%+16.5rem)] ds:-translate-x-[calc(50%+17rem)] ds:-translate-y-[calc(50%+7rem)] w-[28rem] h-[14rem] ds:w-[28rem] ds:h-[56rem]'
                    },
                    [
                      (j(!0),
                      N(
                        Q,
                        null,
                        de(
                          a.data.projects,
                          (f, x) => (
                            j(),
                            N(
                              Q,
                              { key: x },
                              [
                                f.list.list === 'first'
                                  ? (j(),
                                    ue(
                                      T,
                                      {
                                        key: 0,
                                        tabindex: '-1',
                                        'data-flip-id': f.id,
                                        'data-index': x,
                                        item: f,
                                        data: a.data,
                                        class:
                                          'item item-or absolute top-0 left-0'
                                      },
                                      null,
                                      8,
                                      [
                                        'data-flip-id',
                                        'data-index',
                                        'item',
                                        'data'
                                      ]
                                    ))
                                  : me('', !0)
                              ],
                              64
                            )
                          )
                        ),
                        128
                      ))
                    ],
                    512
                  ),
                  r(
                    'div',
                    {
                      ref_key: 'listTwo',
                      ref: u,
                      class:
                        'absolute left-1/2 top-1/2 transform -translate-x-[calc(50%-3.5rem)] -translate-y-[calc(50%-7.5rem)] ds:-translate-x-[calc(50%-17rem)] ds:-translate-y-[calc(50%-7rem)] w-[28rem] h-[14rem] ds:w-[28rem] ds:h-[56rem]'
                    },
                    [
                      (j(!0),
                      N(
                        Q,
                        null,
                        de(
                          a.data.projects,
                          (f, x) => (
                            j(),
                            N(
                              Q,
                              { key: x },
                              [
                                f.list.list === 'second'
                                  ? (j(),
                                    ue(
                                      T,
                                      {
                                        key: x,
                                        tabindex: '-1',
                                        'data-index': x,
                                        'data-flip-id': f.id,
                                        item: f,
                                        data: a.data,
                                        class:
                                          'item item-or absolute top-0 left-0'
                                      },
                                      null,
                                      8,
                                      [
                                        'data-index',
                                        'data-flip-id',
                                        'item',
                                        'data'
                                      ]
                                    ))
                                  : me('', !0)
                              ],
                              64
                            )
                          )
                        ),
                        128
                      ))
                    ],
                    512
                  )
                ],
                512
              ),
              W(
                o,
                {
                  ref_key: 'projectsNav',
                  ref: n,
                  total: a.data.projects.length
                },
                null,
                8,
                ['total']
              ),
              ht
            ])
          );
        }
      );
    }
  },
  bt = ae(yt, [['__scopeId', 'data-v-eb81676b']]),
  gt = {
    class:
      'flex items-center justify-between px-20 ds:px-80 fixed left-0 top-1/2 transform -translate-y-[calc(50%+4rem)] ds:-translate-y-1/2 w-full'
  },
  xt = { class: 'primary relative ds:mb-[13rem]' },
  _t = {
    class:
      'primary font-saf-r text-md2 ds:text-lg2 leading-none ds:leading-[0.8] relative ds:mb-[12rem]'
  },
  wt = {
    __name: 'Meta',
    setup(a, { expose: C }) {
      const L = l(null),
        e = l(null),
        g = l(null),
        h = l(null),
        S = l(null),
        _ = l(null),
        y = l(null);
      return (
        C({
          selectedLabel: L,
          projectsLabel: e,
          numberLabel: g,
          firstYear: h,
          lastYear: S,
          description: _,
          sepatatorYear: y
        }),
        (z, I) => (
          j(),
          N('div', gt, [
            r('div', xt, [
              r(
                'span',
                {
                  ref_key: 'selectedLabel',
                  ref: L,
                  class: 'block text-md2 ds:text-lg2 leading-none'
                },
                'Featured',
                512
              ),
              r(
                'span',
                {
                  ref_key: 'projectsLabel',
                  ref: e,
                  class:
                    'block text-md2 ds:text-lg2 !leading-[1.4] -mt-5 ds:-mt-10 font-saf-ri'
                },
                'projects',
                512
              ),
              r(
                'span',
                {
                  ref_key: 'numberLabel',
                  ref: g,
                  class:
                    'secondary block number text-[1rem] max-ds:tracking-tighter ds:text-xs absolute top-[0.1rem] left-[calc(100%+1rem)]'
                },
                '(08)',
                512
              )
            ]),
            r('div', _t, [
              r(
                'span',
                { ref_key: 'firstYear', ref: h, class: 'block' },
                '2020',
                512
              ),
              r(
                'span',
                {
                  ref_key: 'sepatatorYear',
                  ref: y,
                  class:
                    'block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] bg-border scale-[var(--scaleDivider)] rotate-45 h-[125%] ds:w-[1px]'
                },
                null,
                512
              ),
              r(
                'span',
                {
                  ref_key: 'lastYear',
                  ref: S,
                  class: 'block pl-[6rem] ds:pl-[8.2rem] ds:mt-20'
                },
                '2023',
                512
              )
            ])
          ])
        )
      );
    }
  },
  kt = r('span', { class: 'block' }, 'A featured selection.', -1),
  Lt = r('span', { class: 'block' }, 'The latest work', -1),
  Pt = r('span', { class: 'block' }, 'of the last 4 years', -1),
  jt = [kt, Lt, Pt],
  Et = {
    __name: 'index',
    setup(a) {
      const { transitionState: C } = be(),
        L = Ye(),
        { $gsap: e } = le();
      Re({
        title: 'Projects | Federico Pian - Creative Developer',
        meta: [
          {
            name: 'description',
            content:
              'Federico Pian is a creative developer and co-founder at Overpx Studio'
          }
        ]
      });
      let g = !1;
      const h = l(null),
        S = l(null),
        _ = l(null),
        y = l(null),
        z = (n, s, u, c) => {
          g = !0;
          const w = e.timeline({
              defaults: { duration: s, ease: 'power3.out' }
            }),
            d = y.value.projectsNav;
          u
            ? (e.set(d.circle, { '--dashOffset': 0 }),
              w.to(d.circle, { '--dashOffsetBorder': 880, duration: s }, 0))
            : (e.set(d.circle, { '--dashOffsetBorder': 880 }),
              w.to(d.circle, { '--dashOffset': 0, duration: s }, s / 2)),
            (u || !O().value) &&
              (e.set(y.value.listOne, { x: c ? '-17rem' : '-3.5rem' }),
              e.set(y.value.listTwo, { x: c ? '17rem' : '3.5rem' }),
              w
                .fromTo(
                  y.value.listOne,
                  { opacity: 0, yPercent: c ? 50 : 0, xPercent: c ? -50 : 50 },
                  { opacity: 1, yPercent: 0, xPercent: -50, duration: 2 },
                  0.2
                )
                .fromTo(
                  y.value.listTwo,
                  {
                    opacity: 0,
                    yPercent: c ? -50 : 0,
                    xPercent: c ? -50 : -100
                  },
                  { opacity: 1, yPercent: 0, xPercent: -50, duration: 2 },
                  0.2
                )),
            w
              .clipText(
                [
                  h.value.selectedLabel,
                  h.value.projectsLabel,
                  h.value.numberLabel
                ],
                { stagger: 0.01, duration: 1 },
                0.2
              )
              .clipText(
                [h.value.firstYear, h.value.lastYear],
                { stagger: 0.1 },
                0.4
              )
              .fromTo(
                h.value.sepatatorYear,
                { '--scaleDivider': 0 },
                { '--scaleDivider': 1, ease: 'power3.out', duration: 0.8 },
                0.2
              )
              .clipText(
                S.value.querySelectorAll('span'),
                { yPercent: 200, duration: 1, stagger: 0.05 },
                0.6
              )
              .fromTo(
                d.divider,
                { '--scaleDivider': 0 },
                { '--scaleDivider': 1, duration: s },
                s / 2
              )
              .fromTo(
                d.btnPrev,
                { xPercent: -50, opacity: 0 },
                { xPercent: 0, opacity: 1, duration: s },
                s / 2
              )
              .from(
                d.btnNext,
                {
                  xPercent: 50,
                  opacity: 0,
                  duration: s,
                  willChange: 'transform'
                },
                s / 2
              )
              .from(
                d.projectLabel,
                {
                  yPercent: -50,
                  opacity: 0,
                  duration: s,
                  willChange: 'transform'
                },
                s / 2
              )
              .from(
                d.projectNumber,
                {
                  yPercent: 50,
                  opacity: 0,
                  duration: s,
                  willChange: 'transform'
                },
                s / 2
              )
              .fromTo(
                [d.zeroNumb, d.count],
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
              );
        },
        I = e.matchMedia(),
        b = 1024;
      return (
        he(
          () => [L.isLoaded, C.transitionComplete],
          ([n, s], [u, c]) => {
            n !== u &&
              (e.to(document.documentElement, {
                '--opacity': 1,
                duration: 0.5,
                ease: 'power2.inOut'
              }),
              I.add(
                {
                  isDesktop: `(min-width: ${b}px)`,
                  isMobile: `(max-width: ${b - 1}px)`
                },
                (w) => {
                  const { isDesktop: d } = w.conditions;
                  _.value &&
                    (e.set(_.value, { opacity: 1 }), z('power3.out', 1, !0, d));
                }
              )),
              s !== c &&
                I.add(
                  {
                    isDesktop: `(min-width: ${b}px)`,
                    isMobile: `(max-width: ${b - 1}px)`
                  },
                  (w) => {
                    const { isDesktop: d } = w.conditions;
                    _.value &&
                      (g ||
                        (e.set(_.value, { opacity: 1 }),
                        z('power3.out', 1, !1, d)));
                  }
                );
          }
        ),
        oe(() => {
          document.addEventListener(
            'touchmove',
            function (n) {
              n.preventDefault();
            },
            { passive: !1 }
          );
        }),
        ye(() => {
          I.revert(),
            document.removeEventListener('touchmove', function (n) {
              n.preventDefault();
            });
        }),
        (n, s) => {
          const u = bt,
            c = wt;
          return (
            j(),
            N(
              'div',
              {
                ref_key: 'projectsPage',
                ref: _,
                class: 'absolute top-0 left-0 w-full h-full opacity-0'
              },
              [
                W(
                  u,
                  { ref_key: 'projectsFlip', ref: y, data: He(Ve) },
                  null,
                  8,
                  ['data']
                ),
                W(c, { ref_key: 'projectsMeta', ref: h }, null, 512),
                r(
                  'p',
                  {
                    ref_key: 'description',
                    ref: S,
                    class:
                      'secondary text-xs leading-6 ds:leading-[1.1] ds:text-sm uppercase fixed bottom-20 right-20 ds:right-80 ds:bottom-60'
                  },
                  jt,
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
export { Et as default };
