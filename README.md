[![Build Status](https://travis-ci.org/stefanaerts/PWASHELL.svg?branch=master)](https://travis-ci.org/stefanaerts/v3_ethnic)

<!--[![Coverage Status](https://coveralls.io/repos/github/stefanaerts/PWASHELL/badge.svg?branch=master)](https://coveralls.io/github/stefanaerts/PWASHELL?branch=master)]-->


# PWASHELL

- initial angular4 project with aot compilation.
- service worker added
- lighthouse tested,changed index.html accordingly
- progressive webapp skeleton
- manifest.json added
- lite server added to test local 
- workflow 1)ng build --prod --aot 2) npm run precache 3) npm run lite 4)open chrome devtools and refresh network tab,then you will see service worker cached


#run tests local + generate code coverage report
npm run ltest to see result in browser


#show code coverage report
run local -> $(npm bin)/lcov-summary ./coverage/lcov.info
run local -> npm run showcoverage

#travis
an account is made and PWASHELL app is enabled between github and travis

after checkin in github travis runs automatically
a batch for build status is added to readme.md
a batch for coverage status is added to readme.md

#coveralls
an account is made and PWASHELL app is enabled between github and coveralls


