# frontend-nanodegree-mobile-portfolio

## To Run:

  Open index.html in any modern browser (later than IE9, etc).
Alternately, use a SimpleHTTPServer (if you have python installed) to host the page on your local machine (start it within the parent directory for all the site's files).

  Additionally, to produce a serviceable URL, run
an ngrok tunnel to enable a proxy url that can be fed into pagespeed insights
and similar services.

## Applied Optimizations:

### In index.html

#### Images:
  Compressed pizzeria and profile images to below 5 KiB each.

#### Scripts:
  Made analytics and primary (minified) script asynchronous, since the former doesn't apply to the CRP and the latter mostly applies to the Below-the-Fold content.

#### CSS:
  Inlined CSS rules for the html, body, header, footer, and container tags, since those are used for the most content, and moved the importation of the remaining rules to after the body. This way, first render can happen sooner, and only minor visual discontinuities will occur when the browser does finally load the file with the remaining rules and re-renders.  

#### Minification:
  Grunt's commonjs template along with htmlmin were used to minify and combine JS, and minimize CSS and HTML to some extent. Greater minification could likely be achieved on the html files by adding more of htmlmin's options into its gruntfile JSON object, but most of PageSpeed Insight's original objections have been satisfied in this regard. 

### In views/js/main.js

#### Generating Pizzas:
  Move the static arrays for getAdj and getNoun outside the functions so they don't have so many calculations or storage/retrieval operations to do each time they run, thus making these functions more performant, dramatically increasing initial pizza render time!

#### Resizing Pizzas:
  For changePizzaSizes, query selection of all randomPizzaContainers need only happen once per call, not for each iteration of the for loop. The delta x calculation and newwidth assignment likewise need happen only once per function call, since these are the same for every pizza. The for loop only needs to assign each pizza its new width.

#### Animating Background Pizzas:
  In updatePositions, move the sinusoid calculation outside of the for loop that iterates through each mover, it now lives in a 5-valued for loop that populates an array of phase values. This way, the sinusoid calc is done only five times per call to updatePositions (it only has five unique outcomes for a particular frame anyway, because only the modulo 5 result changes within a particular frame). Previously, the sinusoid calculation was done for every mover in every frame. The result is a dramatic drop in time required to generate frames, and over 120fps performance is now possible (~1ms resize time now vs >~20ms previously).





## License
Copyright (c) 2015 Brian Coe  
Licensed under the MIT license.
