# Tweego Development
Develop [Twine](https://twinery.org/) games without Twine,
using [Tweego](https://www.motoslave.net/tweego/).

Adapted from [this project](https://github.com/ObstacleCorpse/TweeGo-SugarCube-2-Boilerplate).

Check the [Tweego docs](https://www.motoslave.net/tweego/docs/) for info on Tweego.

## Setup

- Make sure you have [Node.js](https://nodejs.org) 6+ installed.
- Run `npm install` in the project directory.

## Usage

- Create all your Twine files (in Twee notation) in the `src` directory,
  along with any HTML, CSS, Javascript, image or font files you need.
- Run `npm run build` to generate your game page in the `dist` directory.
- Run `npm run watch` to monitor changes to your `src` folder and
  automatically rebuild your game when you make changes.

### Optional features

- If you put JS files into the `js` directory instead of `src`, they will be compiled using Babel.
- If you put SCSS files into the `scss` directory, they will be compiled to CSS using Sass.
