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




var applicantName; //first name
var blockNum; //last name
function getApplicantName() {  
    return document.getElementById("nameField").value;
}
function getBlockNum()    {
    return document.getElementById("blockNumField").value;
}

function display()  {
    applicantName = getApplicantName();
    blockNum = getBlockNum();
    window.alert(applicantName + " " + blockNum);
    document.getElementById("theWholeForm").submit();
    
}