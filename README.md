# Jekyll + Reveal.js Starter

Serve [Reveal.js](http://lab.hakim.se/reveal-js/#/) presentations via [Jekyll](https://jekyllrb.com/)

## Installation

Run `yarn install`, then `yarn run presentation`. Jekyll will serve the demo presentation at `localhost:4000`.

## Writing your presentation

All the source files for the presentation reside in `src/`. Jekyll looks here to create the presentation in `presentation/`, everything but the `assets/` folder will be copied across unless `_config.yml` is changed to do so. You should just be able to put your slides in `slides/` and all assets (ie your presentation's theme and images) in `assets/`, put your images in `images/`.
