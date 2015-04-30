modal
===

A project to get familiar with the gulp automation framework. Substantial portions of gulp task code pulled from [gulp-starter](https://github.com/greypants/gulp-starter).

Prerequisites
---
- [nodejs](https://nodejs.org/) 0.10.30+

- [gulp](http://gulpjs.com/)
    * Install with npm
```
npm install -g gulp
```
- [karma](http://karma-runner.github.io/0.12/index.html)
    * Install with npm
```
npm install -g karma
```

Usage
---

1. Install the project dependencies.

   ```
   npm install
   ```
2. Run gulp task **default** or **production**.

   ```
   # Default task -- it will also watch for changes
   gulp
   ```

   ```
   # Production task -- it will run browser tests before deploying
   gulp production
   ```
3. Serve contents of 'dist' directory.

Notes
---
This project acquired a LOT of dependencies as I explored and added additional tasks. No effort whatsoever has been made to clean that up.
