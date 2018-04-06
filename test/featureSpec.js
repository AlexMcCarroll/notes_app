'use strict';
(function(exports) {

  let featureTests =
  [
    {
      describe: '#showing notes',
      it: 'displays notes in the body',
      test: () => {
        console.log(document.body.innerHTML)
        return document.body.innerHTML.includes('Chiaki had a dream about Noelle')
      }
    }
  ]

  exports.featureTests = featureTests
})(this)
