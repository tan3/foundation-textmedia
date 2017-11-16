# Text & Media for Foundation for Sites

## Requirements

* [Bower](https://bower.io)

## Installation

```bash
bower install foundation-textmedia
```

## Usage

Import [foundation-textmedia.sass](sass/foundation-textmedia.sass) to your [Sass](http://sass-lang.com) preprocessing chain after the import of [Foundation for Sites Version 6.4.x](http://foundation.zurb.com/sites/docs/).

Example from [`demo.sass`](sass/demo.sass):

```sass
@import foundation
@import foundation-textmedia
```

If you want to use the compiled css files for your project (including Foundation) use a copy of
[`demo.css`](demo/css/demo.css) or [`demo.min.css`](demo/css/demo.min.css).

#### Settings

You can set or override the default textmedia settings defined in [foundation-textmedia.sass](sass/foundation-textmedia.sass).
For details see the comments in that file.

#### Demo

http://tan3.github.io/foundation-textmedia

#### Options

__Media position:__<br>
The media item(s) can be placed at different positions around the text.

* Above [`media--above`]
* Below [`media--below`]
* Beside [`media--beside`]
* Intext [`media--intext`]


__Media alignment:__<br>
Additional to the position option you can align the media.

* Left (_Default_)
* Center [`media--center`] (_only for positions:_ Above, Below)
* Right [`media--right`]


__Media columns:__<br>
Add multiple media columns to the textmedia element. Define the columns for the media items
with the `data-media-columns` attribute on the `media__item` element.

__Media columns override:__<br>
Override the columns for an media item with the `data-media-columns-override` attribute on
the `media__column` element.

__Video:__<br>
Embed a [Vimeo](https://vimeo.com) or [YouTube](https://youtube.com) video with the
`media__video` element. Use the variant `media__video--widescreen` for a video with
a widescreen format.

#### fancyBox license

In the demo _fancyBox_ is used to show media items in a lightbox.
Do not forget to purchase a [fancyBox license](http://fancyapps.com/fancybox/#license) for the use on commercial websites.

## Development

#### Requirements

* [Bower](https://bower.io)
* [npm](https://www.npmjs.com)
* [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

#### Initialize project

```bash
bower install
npm install
```

#### Gulp tasks

Start Browsersync and watch `.sass` and `.html` file changes.

```bash
gulp
```

Copy assets from bower components and update the stylesheet file for the demo site.

```bash
gulp build
```
