[![Build Status](https://travis-ci.org/stefanaerts/PWASHELL.svg?branch=master)](https://travis-ci.org/stefanaerts/PWASHELL)

[![Coverage Status](https://coveralls.io/repos/github/stefanaerts/PWASHELL/badge.svg?branch=master)](https://coveralls.io/github/stefanaerts/PWASHELL?branch=master)]


# PWASHELL

- initial angular4 project with aot compilation.
- service worker added
- lighthouse tested,changed index.html accordingly
- progressive webapp skeleton
- manifest.json added
- lite server added to test local 
- workflow 

           1) ng build --prod(--aot default)

           2) npm run precache 

           3) npm run lite 

           4) open chrome devtools and refresh network tab,then you will see service worker cached


##run tests local + generate code coverage report

`npm run ltest` to see result of tests in browser


##show code coverage report local

`$(npm bin)/lcov-summary ./coverage/lcov.info`
 
 ##or

 `npm run showcoverage`

##travis

PWASHELL app is enabled between github and travis.
after checkin in github travis runs automatically.
- A batch for build status is added to readme.md
- A batch for coverage status is added to readme.md

##coveralls

PWASHELL app is enabled between github and coveralls

##sprites

Create a sprite file in src/assets/icons based on icons under
./uncompressed/icons 
1) npm run svgo // input ./uncompressed/icons"
2) npm run run postsvgo // output src/assets/icons/symbol/svg/sprite.symbol.svg
3) include the file content sprite.symbol.svg in index.html and use references in your app

