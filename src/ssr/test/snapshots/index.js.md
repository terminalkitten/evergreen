# Snapshot report for `src/ssr/test/index.js`

The actual snapshot is saved in `index.js.snap`.

Generated by [AVA](https://ava.li).

## extractStyles method returns css and scriptContents for a Box

> Snapshot 1

    {
      css: `␊
      .📦h_11px {␊
        height: 11px;␊
      }␊
      .📦box-szg_border-box {␊
        box-sizing: border-box;␊
      } @-webkit-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-moz-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-o-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-webkit-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@-moz-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@-o-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}`,
      evergreenHydrateScript: <script
        dangerouslySetInnerHTML={
          {
            __html: '{"uiBoxCache":[["height11","📦h_11px"],["boxSizingborder-box","📦box-szg_border-box"]],"glamorIds":["ng405l","fv6wzy"]}',
          }
        }
        id="evergreen-hydrate"
        type="application/json"
      />,
      manualHydrateCache: {
        glamorIds: [
          'ng405l',
          'fv6wzy',
        ],
        uiBoxCache: [
          [
            'height11',
            '📦h_11px',
          ],
          [
            'boxSizingborder-box',
            '📦box-szg_border-box',
          ],
        ],
      },
    }

## extractStyles method returns css and scriptContents for a Button

> Snapshot 1

    {
      css: ' @-webkit-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-moz-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-o-keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@keyframes loading_ng405l{0%{transform:rotate(0);-webkit-transform:rotate(0);}100%{transform:rotate(360deg);-webkit-transform:rotate(360deg);}}@-webkit-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@-moz-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@-o-keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}@keyframes loading-circle_fv6wzy{0%{stroke-dashoffset:600;}100%{stroke-dashoffset:0;}}',
      evergreenHydrateScript: <script
        dangerouslySetInnerHTML={
          {
            __html: '{"uiBoxCache":[],"glamorIds":["ng405l","fv6wzy"]}',
          }
        }
        id="evergreen-hydrate"
        type="application/json"
      />,
      manualHydrateCache: {
        glamorIds: [
          'ng405l',
          'fv6wzy',
        ],
        uiBoxCache: [],
      },
    }

## extractStyles should hydrate

> Snapshot 1

    {
      glamorIds: [
        'ng405l',
        'fv6wzy',
      ],
      uiBoxCache: [
        [
          'height16',
          '📦h_16px',
        ],
        [
          'boxSizingborder-box',
          '📦box-szg_border-box',
        ],
      ],
    }

## extractStyles should return a scriptProps

> Snapshot 1

    ShallowWrapper [
      undefined,
      ---
      length: 1,
      ---
      <script />,
    ]
