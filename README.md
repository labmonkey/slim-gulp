# slim-gulp

Gulp project starter `gulpfile.js`. Simple and smart. If you ever wanted to search whole internet and gulp projects for recommended gulp plugins just to have a gulpfile that does it's thing then slim-gulp is the result.

There are a lot of gulp starter projects but I've noticed that many of them tend to be overcomplicated. I needed something that works out of the box and can be simply copy pasted into new project.

Slim-gulp is doing 70% of the things that other gulpfiles do but it sticks to the essentials. It's up to date and worry free. It has almost no configuration and has simple structure.

### For whom is it for
It's for developers who want to stick to the main gulp goodness out of the box. If you need something that just combines and minifies js, css and images then slim-gulp is for you.

### What it lacks
Local server, any static html related plugins, dev and production environment separation, github pages deployment. In short these are all pure frontend developer stuff.

### Configuration
Eveything visible in `./gulpfile.js/config.json` can be overriden by `./gulp.json` file. Actually the only setting you will propably want to change is src and dist path or browser-sync url. At least that was the whole idea of simplicity here.

Simply create `./gulp.json` right next to `./package.json` with content similar to:
```json
{
  "server" : true,
  "path": {
    "from": "./src",
    "to": "./dist"
  }
}
```
You set set `server` as:
- `false` - it will disable browser-sync
- `true` - it will run local server with static files
- `any url string` - for ex. "http://mywebsite.com". It will run in proxy mode targeting provided website.

### Main tasks
+ **`gulp`** - builds `skeleton` in `/src` folder if it doesn't exist, `cleans` the `/dist` folder and runs `gulp build`.
+ **`gulp build`** - runs as sequence [`'styles'`, `'scripts'`, `'fonts'`] and then [`'images'`, `'svg'`]
+ **`gulp watch`** - watches all folders [/styles, /scripts, /images, /svg, /fonts] in `/src`

### Subtasks
+ `browser-sync` - runs [browser-sync](https://www.npmjs.com/package/browser-sync) local server with static files or via proxy. Can be configured as stated in 'Configuration' section.
+ `clean` - cleans the `/dist` folder from all files.
+ `fonts` - simply copies fonts from `/src` folder to`/dist`. No additional steps.
+ `images` - minifies ([pngquant](https://www.npmjs.com/package/imagemin-pngquant)) and copies only modified images from `/src` folder to `/dist`.
+ `scripts`
    + `scripts:app` - combines and minifies ([uglify](https://www.npmjs.com/package/gulp-uglify)) all files in `src/js` folder into one `app.min.js` file.
    + `scripts:bower` - automatically finds bower js files ([main-bower-files](https://www.npmjs.com/package/gulp-main-bower-files)), combines them and minifies into one `libs.min.js` file.
+ `skeleton` - if the `src` folder doesn't exist creates it and default file/directory structure. Useful when creating new project.
+ `styles` - combines and minifies all `.scss` files. It's using [sass](https://www.npmjs.com/package/gulp-sass),  [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer), [shorthand](https://www.npmjs.com/package/gulp-shorthand) and [clean css](https://www.npmjs.com/package/gulp-clean-css).
+ `svg`
    + `svg:minify` - minifies all svg's  ([imagemin + svgo](https://www.npmjs.com/package/imagemin-svgo)).
    + `svg:png` - converts all svg's to png's ([svg2png](https://www.npmjs.com/package/gulp-svg2png)) in `img/fallback` folder so they can be used in browsers without svg support.
