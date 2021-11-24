function compile() {
  var html = document.getElementById("htmlTextarea");
  var css = document.getElementById("cssTextarea");
  var js = document.getElementById("javascriptTextarea");
  var code = document.getElementById("output").contentWindow.document;

  document.body.onkeyup = function () {
    code.open();
    code.writeln(
      html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>"
    );
    code.close();
  };
}

compile();