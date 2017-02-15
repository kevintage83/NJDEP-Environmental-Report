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
function getBlockNum() {
    return document.getElementById("blockNumField").value;
}
/*function getLotNum() {
//    return document.getElementById("lotNumField").value;
//}
//function getWtrshdMgt() {
//    return document.getElementById("watershedMgtField").value;
}*/
function getWtrshd() {
    return document.getElementById("watershedField").value;
}
function getSubWtrshd() {
    return document.getElementById("subWatershedField").value;
}
function getWtrwy() {
    return document.getElementById("waterwayField").value;
}

function display()  {
    applicantName = getApplicantName();
    blockNum = getBlockNum();
    lotNum = document.getElementById("lotNumField").value;
    getWtrshdMgt = document.getElementById("watershedMgtField").value;
    getWtrshd = getWtrshd();
    getSubWtrshd = getSubWtrshd();
    getWtrwy = getWtrwy();
    getWtrClass = document.getElementById("troutProd").value;
    window.alert(applicantName + " " + blockNum + " " + lotNum + " " + getWtrshdMgt + " " + getWtrshd + " " + getSubWtrshd + " " + getWtrwy + " " + getWtrClass);
    document.getElementById("wholeForm").submit();
    
}


function openDEPHome() {
    window.open("http://www.nj.gov/dep/");
}


function openCZM() {
    window.open("http://www.nj.gov/dep/rules/rules/njac7_7.pdf");
}


function openFWW() {
    window.open("http://www.nj.gov/dep/rules/rules/njac7_7a.pdf");
}


function openSWM() {
    window.open("http://www.nj.gov/dep/rules/rules/njac7_8.pdf");
}


function openSWQ() {
    window.open("http://www.nj.gov/dep/rules/rules/njac7_9b.pdf");
}


function openFHA() {
    window.open("http://www.nj.gov/dep/rules/rules/njac7_13.pdf");
}


function openWPCA() {
    window.open("http://www.nj.gov/dep/rules/rules/njac7_14.pdf");
}

