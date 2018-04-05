function importHTMLbody(file) {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      console.log('ready state:' + this.readyState)
      console.log('status:' + this.status)

      var body_tag = document.getElementById('imported_html_body')
      body_tag.innerHTML = this.responseText.split('<body>').pop().split('</body>')[0];

    }
  };


  xhttp.open("GET", file, true);
  xhttp.send();
}

importHTMLbody('index.html')
