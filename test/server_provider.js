function importHTMLbody(file) {

  return new Promise(function(resolve,reject) {


    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {


        var body_tag = document.getElementById('imported_html_body')
        body_tag.innerHTML = this.responseText.split('<body>').pop().split('</body>')[0];

        resolve()
        console.log(document.body.innerHTML)
      }


    };


    xhttp.open("GET", file, true);
    xhttp.send();



  })


}
