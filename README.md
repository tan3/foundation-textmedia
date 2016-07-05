# Text & Media for Foundation for Sites

## Requirements

* [Bower](https://bower.io)

## Installation

```bash
bower install foundation-textmedia
```

## Usage

Import [foundation-textmedia.sass](sass/foundation-textmedia.sass) to your [Sass](http://sass-lang.com) preprocessing chain after the import of [Foundation for Sites](http://foundation.zurb.com/sites/docs/).

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

_Media position:_<br>
The media item(s) can be placed at different positions around the text.

* __Above__ [`media--above`] - See [demo#above-left](http://tan3.github.io/foundation-textmedia/#above-left)
* __Below__ [`media--below`] - See [demo#below-left](http://tan3.github.io/foundation-textmedia/#below-left)
* __Beside__ [`media--beside`] - See [demo#beside-left](http://tan3.github.io/foundation-textmedia/#beside-left)
* __Inline__ [`media--inline`] - See [demo#inline-left](http://tan3.github.io/foundation-textmedia/#inline-left)


_Media alignment:_<br>
Additional to the position option you can align the media.

* __Left__ (_Default_) - See [demo#above-left](http://tan3.github.io/foundation-textmedia/#above-left)
* __Center__ [`media--center`] (_only for positions:_ Above, Below) - See [demo#above-center](http://tan3.github.io/foundation-textmedia/#above-center)
* __Right__ [`media--right`] - See [demo#above-right](http://tan3.github.io/foundation-textmedia/#above-right)


_Media grid:_<br>
Add multiple media columns to the textmedia element. Define the grid for the media items
with the `data-media-columns` attribute on the `media__item` element.

See [demo#multiple-columns](http://tan3.github.io/foundation-textmedia/#multiple-columns)

_Media grid override:_<br>
Override the grid for an media item with the `data-media-columns-override` attribute on
the `media__column` element.

See [demo#override](http://tan3.github.io/foundation-textmedia/#override)

_Video:_<br>
Embed a [Vimeo](https://vimeo.com) or [YouTube](https://youtube.com) video with the
`media__video` element. Use the variant `media__video--widescreen` for a video with
a widescreen format.

See [demo#video](http://tan3.github.io/foundation-textmedia/#video)

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
