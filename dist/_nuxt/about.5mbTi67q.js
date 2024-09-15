import {
  _ as j,
  r as a,
  o as r,
  c as l,
  a as e,
  t as s,
  p as F,
  f as q,
  d as C,
  F as k,
  q as v,
  s as S,
  v as I,
  b as y,
  u as B,
  g as L,
  h as z,
  i as E,
  j as N,
  k as V,
  l as R,
  x as w,
  m as W,
  n as K
} from './entry.BxA1UaYp.js';
import { _ as Q } from './Cta.BvZR80B0.js';
import { _ as G } from './NuxtPicture.vue.qRJyAh4F.js';
const D = (t) => (F('data-v-2c86bf9c'), (t = t()), q(), t),
  J = D(() => e('span', { class: 'font-saf-r block' }, 'About', -1)),
  U = D(() => e('span', { class: 'font-saf-ri block' }, 'Ishaan', -1)),
  X = [J, U],
  Y = { class: 'block' },
  Z = { class: 'block' },
  ee = { class: 'block' },
  te = {
    __name: 'HeroNew',
    props: { data: { type: Object, default: () => {} } },
    setup(t, { expose: d }) {
      const o = a(''),
        c = a('');
      return (
        d({ title: o, description: c }),
        (f, m) => (
          r(),
          l('div', null, [
            e(
              'h2',
              {
                ref_key: 'title',
                ref: o,
                class:
                  'primary text-lg ds:text-xxl whitespace-nowrap !leading-[0.8]'
              },
              X,
              512
            ),
            e(
              'div',
              {
                ref_key: 'description',
                ref: c,
                class:
                  'about-description | secondary font-saf-r text-xs ds:text-md2 mt-20 ds:mt-40 !leading-[1.2]'
              },
              [
                e('span', Y, s(t.data.hero.description.one), 1),
                e('span', Z, s(t.data.hero.description.two), 1),
                e('span', ee, s(t.data.hero.description.three), 1)
              ],
              512
            )
          ])
        )
      );
    }
  },
  se = j(te, [['__scopeId', 'data-v-2c86bf9c']]),
  ae = { class: 'ds:flex items-start' },
  oe = { class: 'primary block max-ds:uppercase' },
  re = { class: 'max-ds:hidden' },
  le = { class: 'primary block max-ds:hidden' },
  ne = { class: 'max-ds:pl-[13rem] text-xxs ds:text-xs max-ds:max-w-[30rem]' },
  ie = {
    class:
      'primary ds:font-saf-m mb-[0.2rem] ds:mb-5 max-ds:text-[var(--color-secondary)]'
  },
  ce = { class: 'ds:hidden' },
  de = { key: 0, class: 'ds:hidden mx-[0.2rem]' },
  me = { class: 'max-ds:hidden' },
  ue = {
    __name: 'Awards',
    props: { data: { type: Object, default: () => {} } },
    setup(t, { expose: d }) {
      const o = a(''),
        c = a([]);
      return (
        d({ title: o, listAwards: c }),
        (f, m) => (
          r(),
          l('div', ae, [
            e(
              'h3',
              {
                ref_key: 'title',
                ref: o,
                class:
                  'primary text-xs ds:text-md font-saf-m ds:block ds:pb-10 ds:mr-40'
              },
              [
                e('div', oe, [
                  C(s(t.data.awards.title.one) + ' ', 1),
                  e('span', re, s(t.data.awards.title.and), 1)
                ]),
                e('div', le, s(t.data.awards.title.two), 1)
              ],
              512
            ),
            e('div', ne, [
              (r(!0),
              l(
                k,
                null,
                v(
                  t.data.awards.list,
                  (i, x) => (
                    r(),
                    l(
                      'div',
                      {
                        key: x,
                        ref_for: !0,
                        ref_key: 'listAwards',
                        ref: c,
                        class: 'max-ds:inline-flex ds:mb-20 uppercase'
                      },
                      [
                        e('h4', ie, [
                          C(s(i.title), 1),
                          e('span', ce, '(' + s(i.total) + ')', 1),
                          x < t.data.awards.list.length - 1
                            ? (r(), l('span', de, '/'))
                            : S('', !0)
                        ]),
                        e('ul', me, [
                          (r(!0),
                          l(
                            k,
                            null,
                            v(
                              i.items,
                              (u, b) => (
                                r(),
                                l(
                                  'li',
                                  { key: b, class: 'secondary leading-[1.2]' },
                                  s(u),
                                  1
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      ]
                    )
                  )
                ),
                128
              ))
            ])
          ])
        )
      );
    }
  },
  pe = { class: 'ds:flex items-start' },
  fe = { class: 'block' },
  xe = { class: 'block' },
  be = { class: 'uppercase ds:w-[28.4rem]' },
  _e = { class: 'flex flex-wrap max-ds:pl-[13rem]' },
  he = {
    key: 0,
    class:
      'mx-[0.4rem] text-[var(--color-border)] duration-300 transition-[color] ease-out'
  },
  ye = { class: 'text-xs mt-20 uppercase ds:w-[28.4rem]' },
  we = { class: 'flex flex-wrap max-ds:pl-[13rem]' },
  ge = {
    key: 0,
    class:
      'mx-[0.4rem] text-[var(--color-border)] duration-300 transition-[color] ease-out'
  },
  ke = {
    __name: 'Clients',
    props: { data: { type: Object, default: () => {} } },
    setup(t, { expose: d }) {
      const o = a(''),
        c = a(''),
        f = a([]),
        m = a(''),
        i = a([]);
      return (
        d({
          title: o,
          titleClients: c,
          listClients: f,
          titleCollabs: m,
          listCollabs: i
        }),
        (x, u) => (
          r(),
          l('div', pe, [
            e(
              'h3',
              {
                ref_key: 'title',
                ref: o,
                class:
                  'primary text-md font-saf-m block ds:pb-10 max-ds:hidden ds:mr-40'
              },
              [
                e('span', fe, s(t.data.clients.title.one), 1),
                e('span', xe, s(t.data.clients.title.two), 1)
              ],
              512
            ),
            e('div', null, [
              e('div', be, [
                e(
                  'h4',
                  {
                    ref_key: 'titleClients',
                    ref: c,
                    class: 'primary text-xs font-saf-m ds:mb-5'
                  },
                  s(t.data.clients.list[0].title),
                  513
                ),
                e('div', _e, [
                  (r(!0),
                  l(
                    k,
                    null,
                    v(
                      t.data.clients.list[0].items,
                      (b, p) => (
                        r(),
                        l(
                          'span',
                          {
                            ref_for: !0,
                            ref_key: 'listClients',
                            ref: f,
                            key: p,
                            class:
                              'secondary text-xxs ds:text-xs block !leading-[1.2]'
                          },
                          [
                            C(s(b), 1),
                            p < t.data.clients.list[0].items.length - 1
                              ? (r(), l('span', he, '/'))
                              : S('', !0)
                          ]
                        )
                      )
                    ),
                    128
                  ))
                ])
              ]),
              e('div', ye, [
                e(
                  'h4',
                  {
                    ref_key: 'titleCollabs',
                    ref: m,
                    class: 'primary font-saf-m ds:mb-5'
                  },
                  s(t.data.clients.list[1].title),
                  513
                ),
                e('div', we, [
                  (r(!0),
                  l(
                    k,
                    null,
                    v(
                      t.data.clients.list[1].items,
                      (b, p) => (
                        r(),
                        l(
                          'span',
                          {
                            ref_for: !0,
                            ref_key: 'listCollabs',
                            ref: i,
                            key: p,
                            class:
                              'secondary text-xxs ds:text-xs block !leading-[1.2]'
                          },
                          [
                            C(s(b), 1),
                            p < t.data.clients.list[1].items.length - 1
                              ? (r(), l('span', ge, '/'))
                              : S('', !0)
                          ]
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ])
          ])
        )
      );
    }
  },
  ve = {
    __name: 'Contacts',
    props: { data: { type: Object, default: () => {} } },
    setup(t, { expose: d }) {
      const o = a([]);
      return (
        d({ contactItem: o }),
        (c, f) => {
          const m = Q;
          return (
            r(),
            l('div', null, [
              (r(!0),
              l(
                k,
                null,
                v(
                  t.data.contacts,
                  (i, x) => (
                    r(),
                    I(
                      m,
                      {
                        key: x,
                        ref_for: !0,
                        ref_key: 'contactItem',
                        ref: o,
                        link: i.link,
                        label: i.name,
                        target: '_blank',
                        class: 'max-ds:mr-10 mt-10',
                        'is-small': ''
                      },
                      null,
                      8,
                      ['link', 'label']
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
  $e = { class: 'about-bubbles' },
  Ce = {
    class: 'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
  },
  Ae = ['innerHTML'],
  Te = {
    class: 'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm uppercase'
  },
  Se = {
    class: 'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm uppercase'
  },
  He = ['innerHTML'],
  Me = {
    class: 'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
  },
  Pe = {
    class: 'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm uppercase'
  },
  je = ['innerHTML'],
  De = {
    class:
      'secondary text-[1rem] primary max-ds:tracking-tighter ds:text-sm uppercase'
  },
  Oe = {
    __name: 'Bubbles',
    props: { data: { type: Object, default: () => {} } },
    setup(t, { expose: d }) {
      const o = a(''),
        c = a(''),
        f = a(''),
        m = a('');
      return (
        d({ itemOne: o, itemTwo: c, itemThree: f, itemImage: m }),
        (i, x) => {
          const u = G;
          return (
            r(),
            l('div', $e, [
              e(
                'div',
                {
                  ref_key: 'itemOne',
                  ref: o,
                  'data-item-content': '',
                  class:
                    'opacity-[var(--opacity)] text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30'
                },
                [
                  e('span', Ce, s(t.data.bubbles[0].top), 1),
                  e(
                    'p',
                    {
                      class:
                        'primary font-saf-m text-[2.2rem] max-ds:tracking-tighter ds:text-lg uppercase',
                      innerHTML: t.data.bubbles[0].year
                    },
                    null,
                    8,
                    Ae
                  ),
                  e('span', Te, s(t.data.bubbles[0].bottom), 1)
                ],
                512
              ),
              e(
                'div',
                {
                  ref_key: 'itemTwo',
                  ref: c,
                  'data-item-content': '',
                  class:
                    'opacity-[var(--opacity)] text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30 ds:ml-[1.6rem] ds:mb-[14rem]'
                },
                [
                  e('span', Se, s(t.data.bubbles[1].top), 1),
                  e(
                    'p',
                    {
                      class:
                        'primary font-saf-m text-[2.2rem] max-ds:tracking-tighter ds:text-lg',
                      innerHTML: t.data.bubbles[1].year
                    },
                    null,
                    8,
                    He
                  ),
                  e('span', Me, s(t.data.bubbles[1].bottom), 1)
                ],
                512
              ),
              e(
                'div',
                {
                  ref_key: 'itemThree',
                  ref: f,
                  'data-item-content': '',
                  class:
                    'opacity-[var(--opacity)] text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30 ds:ml-[1.6rem]'
                },
                [
                  e('span', Pe, s(t.data.bubbles[2].top), 1),
                  e(
                    'p',
                    {
                      class:
                        'primary font-saf-m text-[2.2rem] max-ds:tracking-tighter ds:text-lg',
                      innerHTML: t.data.bubbles[2].year
                    },
                    null,
                    8,
                    je
                  ),
                  e('span', De, s(t.data.bubbles[2].bottom), 1)
                ],
                512
              ),
              y(
                u,
                {
                  ref_key: 'itemImage',
                  ref: m,
                  src: '/assets/images/fede.jpg',
                  class:
                    'image relative z-[1] rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] ds:ml-[1.6rem]',
                  sizes: 'mobile:50vw',
                  loading: 'lazy',
                  quality: 100,
                  'img-attrs': {
                    class:
                      'rounded-full object-cover w-auto h-full to-load flex-shrink-0 aspect-[1/1]'
                  }
                },
                null,
                512
              )
            ])
          );
        }
      );
    }
  },
  Fe = j(Oe, [['__scopeId', 'data-v-9bab6d6b']]),
  qe = {
    title: {
      one: 'Creative Developer',
      two: 'Co-founder at Overpx',
      three: 'FWA Judge'
    },
    description: {
      one: "I'm Ishaan Gupta, a student and",
      two: 'a creative developer who is,',
      three: 'looking to innvotate ne things.'
    }
  },
  Ie = {
    title: { one: 'Education', and: '&', two: 'Experience' },
    list: [
      {
        title: 'Apeejay School, Noida',
        total: "2026",
        items: [
          'Pursuing in-depth studies in Grade 11',
        ]
      },
      { title: 'CODE Club', total: 2, items: ['Member (2023)','Secretary (2024)'] },
      { title: 'Falcon MUN #5.0', total: 4, items: ['Member of IT Team (2023)'] },
      {
        title: 'dda',
        total: 4,
        items: [
          'DDA of the week (2)',
          'DDA of the month (1)',
          'DDA of the year (1)'
        ]
      }
    ]
  },
  Be = {
    title: { one: 'Skills &', two: 'Collabs' },
    list: [
      {
        title: 'Skills',
        items: [
          'Video Editing',
          'Photography',
          'Graphic Design',
          'Python',
          'JavaScript',
          'GSAP',
          '3D',
          'Blender'
        ]
      },
      {
        title: 'Collabs',
        items: [
          'AQuest',
          'AKQA',
          'Ribelli',
          'The Rocks',
          'Things',
          'Thinking Hat'
        ]
      }
    ]
  },
  Le = [
    { name: 'email', link: 'mailto:hello@federicopian.com' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/federicopian/' },
    { name: 'twitter / x', link: 'https://twitter.com/fedeweb' },
    { name: 'instagram', link: 'https://www.instagram.com/ishaan_1610/' }
  ],
  ze = [
    { year: 2011, top: 'Creative', bottom: 'Developer' },
    { year: 2016, top: 'co-founded', bottom: 'overpx' },
    { year: 2023, top: 'fwa', bottom: 'judge' }
  ],
  g = { hero: qe, awards: Ie, clients: Be, contacts: Le, bubbles: ze },
  Ee = {
    class:
      'fixed top-0 left-0 w-full h-full opacity-[var(--opacity)] overflow-hidden'
  },
  Ne = { class: 'px-20 ds:px-80 site-grid mt-80 ds:mt-[14rem]' },
  Ve = e('span', { class: 'block' }, 'All rights reserved', -1),
  Re = e('span', { class: 'block' }, '©2024 Ishaan Gupta', -1),
  We = [Ve, Re],
  Je = {
    __name: 'about',
    setup(t) {
      const { transitionState: d } = K(),
        { $gsap: o } = W();
      B({
        title: 'About | Ishaan Gupta - Student',
        meta: [
          {
            name: 'description',
            content:
              'Federico Pian is a creative developer and co-founder at Overpx Studio'
          }
        ]
      });
      const c = L(),
        f = z(),
        m = ($) => {
          const n = o.timeline({
            defaults: { duration: 0.8, ease: 'power3.out' }
          });
          n.clipTitle(
            i.value.title.querySelector('span:first-child'),
            { duration: 1.2 },
            0.2
          ),
            n.clipTitle(
              i.value.title.querySelector('span:last-child'),
              { duration: 1.2 },
              0.3
            ),
            n.clipText(
              i.value.description.querySelectorAll('span'),
              { stagger: 0.05, duration: 0.8 },
              0.4
            ),
            n.clipText(
              x.value.title.querySelectorAll('div'),
              { stagger: 0.1 },
              0.4
            ),
            x.value.listAwards.forEach((_, h) => {
              n.clipText(
                [_.querySelector('h4'), _.querySelectorAll('li')],
                { stagger: 0.05 },
                0.6 + h * 0.1
              );
            }),
            b.value.contactItem.forEach((_, h) => {
              n.from(_.$el, { y: 20, opacity: 0 }, 0.8 + h * 0.1);
            }),
            n.clipText(
              u.value.title.querySelectorAll('span'),
              { stagger: 0.1 },
              1
            ),
            n.clipText(
              [u.value.titleClients, u.value.listClients],
              { stagger: 0.01 },
              1.2
            ),
            n.clipText(
              [u.value.titleCollabs, u.value.listCollabs],
              { stagger: 0.01 },
              1.2
            ),
            c.setColor([215, 227, 247], [120, 160, 220], [238, 238, 238]),
            $ &&
              (n.from(
                p.value.itemImage.$el,
                { duration: 1, scale: 0.9, opacity: 0 },
                0.2
              ),
              n.from(
                p.value.itemOne,
                {
                  xPercent: 300,
                  x: '3.2rem',
                  yPercent: 0,
                  scale: 0.8,
                  opacity: 0,
                  ease: 'expo.out',
                  duration: 2,
                  willChange: 'transform'
                },
                0.4
              ),
              n.from(
                p.value.itemTwo,
                {
                  xPercent: 200,
                  x: '1.6rem',
                  yPercent: 50,
                  scale: 0.8,
                  opacity: 0,
                  ease: 'expo.out',
                  duration: 2,
                  willChange: 'transform'
                },
                0.6
              ),
              n.from(
                p.value.itemThree,
                {
                  xPercent: 100,
                  x: '-1.6rem',
                  yPercent: 0,
                  scale: 0.8,
                  opacity: 0,
                  ease: 'expo.out',
                  duration: 2,
                  willChange: 'transform'
                },
                0.8
              ),
              n.clipText(
                H.value.querySelectorAll('span'),
                { yPercent: 200, duration: 1, stagger: 0.05 },
                0.6
              ));
        },
        i = a(null),
        x = a(null),
        u = a(null),
        b = a(null),
        p = a(null),
        H = a(null),
        M = o.matchMedia(),
        P = 1024;
      return (
        E(
          () => [f.isLoaded, d.transitionComplete],
          ([$, n], [_, h]) => {
            if (
              ($ !== _ &&
                o.to(document.documentElement, {
                  '--opacity': 1,
                  duration: 0.5,
                  ease: 'power2.inOut'
                }),
              n !== h)
            ) {
              if (!i.value) return;
              M.add(
                {
                  isDesktop: `(min-width: ${P}px)`,
                  isMobile: `(max-width: ${P - 1}px)`
                },
                (A) => {
                  const { isDesktop: T } = A.conditions;
                  o.set(document.documentElement, {
                    '--color-primary': 'rgb(23, 25, 26)',
                    '--color-secondary': 'rgb(80, 80, 80)',
                    '--color-border': 'rgba(0,0,0,0.2)'
                  }),
                    m(T);
                }
              );
            }
          }
        ),
        N(() => {
          V().value = !1;
        }),
        R(() => {
          M.revert();
        }),
        ($, n) => {
          const _ = se,
            h = ue,
            A = ke,
            T = ve,
            O = Fe;
          return (
            r(),
            l('div', Ee, [
              e('div', Ne, [
                y(
                  _,
                  {
                    ref_key: 'aboutHero',
                    ref: i,
                    data: w(g),
                    class: 'ds:col-start-1 ds:col-end-6'
                  },
                  null,
                  8,
                  ['data']
                ),
                y(
                  h,
                  {
                    ref_key: 'aboutAwards',
                    ref: x,
                    data: w(g),
                    class:
                      'mt-30 ds:mt-0 ds:col-start-6 ds:col-end-9 ds:whitespace-nowrap'
                  },
                  null,
                  8,
                  ['data']
                ),
                y(
                  A,
                  {
                    ref_key: 'aboutClients',
                    ref: u,
                    data: w(g),
                    class:
                      'mt-30 ds:mt-0 ds:col-start-10 ds:col-end-13 max-ds:mt-20'
                  },
                  null,
                  8,
                  ['data']
                )
              ]),
              y(
                T,
                {
                  ref_key: 'aboutContacts',
                  ref: b,
                  data: w(g),
                  class:
                    'max-ds:px-20 absolute bottom-80 ds:left-80 ds:bottom-40 ds:w-[15rem] z-[1]'
                },
                null,
                8,
                ['data']
              ),
              y(
                O,
                {
                  ref_key: 'aboutBubbles',
                  ref: p,
                  data: w(g),
                  class:
                    'absolute ds:bottom-40 flex items-end justify-center left-0 w-full max-ds:hidden z-[0]'
                },
                null,
                8,
                ['data']
              ),
              e(
                'p',
                {
                  ref_key: 'copyright',
                  ref: H,
                  class:
                    'secondary text-xxs ds:text-xs uppercase fixed bottom-20 max-ds:left-20 ds:right-80 ds:bottom-60'
                },
                We,
                512
              )
            ])
          );
        }
      );
    }
  };
export { Je as default };
