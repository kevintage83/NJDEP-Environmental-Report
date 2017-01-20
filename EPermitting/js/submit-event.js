(function(){
  var form = document.getElementById('wholeForm');

  addEvent(form, 'submit', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var username = elements.nameField.value;
    var msg = 'Welcome ' + username;
    document.getElementById('nameField').textContent = msg;
  });
}());