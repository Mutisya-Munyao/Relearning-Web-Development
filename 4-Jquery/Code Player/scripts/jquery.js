$('button').click(function () {
    $(this).toggleClass('clicked');
  });
  
  setTimeout(function () {
    $('#htmlButton').click()
  }, 0);
  setTimeout(function () {
    $('#outputButton').click()
  }, 0);
  
  $('#htmlButton').click(function () {
    $('#htmlTextarea').toggle();
  });
  
  $('#cssButton').click(function () {
    $('#cssTextarea').toggle();
  });
  
  $('#javascriptButton').click(function () {
    $('#javascriptTextarea').toggle();
  });
  
  $('#outputButton').click(function () {
    $('#output').toggle();
  });