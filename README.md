# 🌲 Evergreen [![Build Status](https://circleci.com/gh/segmentio/evergreen/tree/master.svg?style=svg)](https://circleci.com/gh/segmentio/evergreen/tree/master)

> React UI Kit by [Segment](https://segment.com/)

* React 16
* [View Live Storybook](https://segmentio.github.io/evergreen/)
* Presentational React components
* Powerful component API with [ui-box](https://github.com/segmentio/ui-box)
* Dedicated UI Development Environment with [React storybook](https://storybook.js.org/)
* Easy adoption because of CSS-in-JS
* Easy Server Side Rendering (SSR) and automatic hydration
* Interested in Evergreen? [Come work for Segment!](https://segment.com/jobs/)

## Core values of 🌲 Evergreen

**Evergreen is built on the belief that you can never predict all future requirements,
only prepare for it.** Instead of creating fixed configurations that work today, Evergreen promotes building systems that anticipate new and changing design requirements.

**Evergreen is built on the belief that things should work out of the box with smart defaults, but also offer full control when needed.** For example, Evergreen uses CSS-in-JS and builds on top of the Box component in [ui-box](https://github.com/segmentio/ui-box).

**Evergreen is built on the belief that using Evergreen and contributing to Evergreen should be a pleasant experience.** We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions.

## Install and use components 🔓

🌲 Evergreen is made up of multiple components and tools which you can import one by one. All you need to do is install the `evergreen-ui` package:

```sh
$ yarn add evergreen-ui
# or
$ npm install --save evergreen-ui
```

A working version, assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app), might look like this:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-ui'

ReactDOM.render(
  <Button>I am using 🌲 Evergreen!</Button>,
  document.getElementById('root')
)
```

## Contributing to Evergreen 👀

### Step 1. Configuring your editor ⚙

If you are using Atom, make sure to install the [`prettier-atom`](https://atom.io/packages/prettier-atom), [`linter`](https://github.com/AtomLinter/linter) and [`linter-xo`](https://github.com/sindresorhus/atom-linter-xo) packages.

All the configuration for prettier and xo is in the `package.json`.
You shouldn't have to configure things separately, please file a issue if there's a problem.

### Step 2. Get storybook up and running 📖

To actually start seeing the components you have to run React Storybook:

```
$ yarn dev
```

### Step 3. Learn more in the Contributing guide 🎓

Please take a look at the [contributing guide](.github/CONTRIBUTING.md) and [roadmap](ROADMAP.md) to better understand what to work on.

## Scripts explained 🤓

Inside the `package.json` there are a bunch of scripts that this repo uses
to run the project in development and to build the project.

Below you can read a description of each script.

### `yarn dev`

Starts the development React Storybook.

### `yarn test`

Lints the JavaScript files using XO and then runs the unit tests using AVA.

### `yarn build`

Builds all of the JavaScript files using Babel.

### `yarn clean`

Removes all untracked files (`git clean -Xdf`).

### `yarn release`

Releases new version of Evergreen (requires `np` to be installed globally).

### `yarn create-package`

This command scaffolds a package with no specific boilerplate. It's useful for creating utilities.

For the following command:

```
yarn create-package utils
```

The following file tree will be generated:

```
/src/utils
├── /src/
└── index.js
```

### `yarn create-package:components`

This command scaffolds a package with React component(s) boilerplate.
You can pass one or more components to this command.

For the following command:

```
yarn create-package:components typography Text Heading
```

The following file tree will be generated:

```
/src/typography
├── /src/
|   │── Text.js
|   └── Heading.js
├── /stories/
│   └── index.stories.js
└── index.js
```

## Server Side Rendering

Evergreen bundles 2 CSS-in-JS solutions, from glamor and ui-box. To make it super
easy to do server side rendering and hydration, Evergreen exposes it's own function
that will do SSR for both at once.

### Next.js SSR example

Install a new [Next.js](https://github.com/zeit/next.js) with [create-next-app](https://github.com/segmentio/create-next-app).
Create a `_document.js` inside of the `./pages` folder with the following content:

```javascript
// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { extractStyles } from 'evergreen-ui'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    // `css` is a string with css from both glamor and ui-box
    // no need to do glamor manually if you are using it elsewhere in your app
    //
    // `evergreenHydrateScript` is a script you should render on the server.
    // it will contain a stringified JSON of the cache of both glamor and ui-box.
    // Evergreen will look for that script on the client and automatically hydrate
    // both glamor and ui-box
    const { css, evergreenHydrateScript } = extractStyles()
    return {
      ...page,
      css,
      evergreenHydrateScript
    }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids, cache } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          {this.props.evergreenHydrateScript}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```

## Contributors 🎉

We will add you to the list if you make any contribution!

* Jeroen Ransijn
* Roland Warmerdam

This project is maintained by [Segment](https://segment.com/)

Please take a look at the [contributing guide](.github/CONTRIBUTING.md) and [roadmap](ROADMAP.md) to better understand what to work on.

## Respect earns Respect 👏

Please respect our [Code of Conduct](.github/CODE_OF_CONDUCT.md), in short:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

## License

Evergreen is released under the MIT license.

Copyright © 2017 Segment.io, Inc.
