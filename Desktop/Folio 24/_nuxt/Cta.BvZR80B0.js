import {
  _ as r,
  C as c,
  r as d,
  j as i,
  H as u,
  o as p,
  v as _,
  w as x,
  a as e,
  A as s,
  t as h,
  e as m,
  p as f,
  f as v
} from './entry.BxA1UaYp.js';
const o = (t) => (f('data-v-21a5ab71'), (t = t()), v(), t),
  g = { class: 'overflow-hidden relative' },
  b = ['data-text'],
  k = o(() =>
    e(
      'svg',
      {
        width: '18',
        height: '17',
        viewBox: '0 0 18 17',
        fill: 'none',
        class: 'icon-svg | w-[1.8rem] h-auto'
      },
      [
        e('path', {
          d: 'M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426',
          class: 'stroke-current'
        }),
        e('path', {
          d: 'M13.3857 4.39875L4.90039 12.884',
          class: 'stroke-current'
        })
      ],
      -1
    )
  ),
  w = o(() =>
    e(
      'svg',
      {
        width: '18',
        height: '17',
        viewBox: '0 0 18 17',
        fill: 'none',
        class: 'icon-svg | absolute w-[1.8rem] h-auto'
      },
      [
        e('path', {
          d: 'M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426',
          class: 'stroke-current'
        }),
        e('path', {
          d: 'M13.3857 4.39875L4.90039 12.884',
          class: 'stroke-current'
        })
      ],
      -1
    )
  ),
  y = [k, w],
  S = {
    __name: 'Cta',
    props: {
      target: { type: String, default: '_blank' },
      label: { type: String, default: 'Visit' },
      link: { type: String, default: '/' },
      isSmall: { type: Boolean, default: !1 }
    },
    setup(t) {
      const { setupSoundInteraction: n } = c(),
        a = d(null);
      return (
        i(() => {
          n(a.value.$el, 'mouseenter', u);
        }),
        (L, B) => {
          const l = m;
          return (
            p(),
            _(
              l,
              {
                ref_key: 'cta',
                ref: a,
                to: t.link,
                target: t.target,
                class: s([
                  t.isSmall ? 'px-10 py-5' : 'px-10 py-5 ds:px-15 ds:py-10',
                  'cta | primary inline-flex justify-between items-center rounded-2xl ds:rounded-3xl border border-current | not-hover'
                ])
              },
              {
                default: x(() => [
                  e('div', g, [
                    e(
                      'span',
                      {
                        'data-text': t.label,
                        class: s([
                          t.isSmall
                            ? 'text-xxs ds:text-xs mr-20 ds:mr-10'
                            : 'text-xs ds:text-sm mr-20 ds:mr-30',
                          'label block uppercase'
                        ])
                      },
                      h(t.label),
                      11,
                      b
                    )
                  ]),
                  e(
                    'span',
                    {
                      class: s([
                        'icon relative overflow-hidden',
                        t.target === '_self' && 'rotate-45'
                      ])
                    },
                    y,
                    2
                  )
                ]),
                _: 1
              },
              8,
              ['to', 'target', 'class']
            )
          );
        }
      );
    }
  },
  M = r(S, [['__scopeId', 'data-v-21a5ab71']]);
export { M as _ };
