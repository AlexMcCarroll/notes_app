(function(exports) {
  function gertrude(arrayOfTestObj) {
  let element = document.getElementById('imported_html_body')
  let string = ''
  for (let i = 0;i < arrayOfTestObj.length;i++) {
    string += _testToHTML(arrayOfTestObj[i])
  }
}

function _testToHTML(testObj) {
  let resultColour = testObj.test() ? 'green' : 'red'
  return `<p style="color:${resultColour}">${testObj.describe}:<br>${testObj.it}</p>`
}

exports.gertrude = gertrude
})(this)
