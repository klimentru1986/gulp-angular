# Gulp-Angular

## Описание

Сборщик Gulp под проекты на Angular с примерами

## Установка

```sh
$ git clone https://github.com/klimentru1986/gulp-angular
$ npm install
$ bower install
$ gulp build
$ gulp
```

## Установка библиотек через Bower

После установки библиотеки необходимо внести необходимые файлы в gulp/paths.bower.js

## Gulp Tasks

 **Версия для разработчика**

```sh
$ gulp build
```

**Минифицированная версия**

```sh
$ gulp build --env dist
```

**Watcher**

```sh
$ gulp watch
```

**Локальный сервер**

```sh
$ gulp
```

**Очистка dev**

```sh
$ gulp clean
```

**Очистка dist**

```sh
$ gulp clean --env dist
```

