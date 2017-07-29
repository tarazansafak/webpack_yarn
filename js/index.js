alert(require('./m1.js'));

// import the heavy modules dynamically, webpack will import them when needed.
require(['./m2.js'], function (m2) {
  document.body.appendChild(m2[0])
})