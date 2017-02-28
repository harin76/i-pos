# i-pos

> Vue.js 2.0 based PoS app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Setting up the Vuex store
``` bash
npm i -S vuex

mkdir src/store

touch src/store/index.js
```

### let us set some vuex modules

```
mkdir src/store
touch src/store/index.js

mkdir src/store/auth
touch src/store/auth/index.js
touch src/store/auth/actions.js
touch src/store/auth/mutations.js
touch src/store/auth/state.js
touch src/store/auth/getters.js
```

## Add bulma
```
 npm i -S bulma
 npm i -D sass-loader
 npm i -D node-sass
```

```
 in main.js
 import 'bulma'
```
