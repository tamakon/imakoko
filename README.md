# イマココ

待ち合わせの場所を伝え合うサービス、イマココのプロジェクトです。

## Build Setup

``` bash
# change env file
$ cd ./ # for project root directory
$ cp .env.sample .env
$ vi .env
```

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

## firebase Setup

```bash
# install firebase
$ npm run -g firebase-tools
$ firebase login # use project google account
$ firebase use --add
```

```bash
# change env file
$ cd ./functions
$ cp .env.sample .env
```

### start for local app
```bash
$ npm run firebase-serve # local service
```

### deploy
```
$ npm run firebase-deploy
```