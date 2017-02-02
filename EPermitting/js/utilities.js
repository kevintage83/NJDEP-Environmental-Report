
function addEvent(el, event, callback) {
  if ('addEventListener' in el) {
    el.addEventListener(event, callback, false);
  } else {
    el['e' + event + callback] = callback;
    el[event + callback] = function() {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}

//Adds user-input controls for File number format
var myFileNum = document.fileNumField.fileNumField;
var myFileNumError = document.getElementById("formError");

myFileNum.onchange = function() {
  var myFilePattern = new RegExp("\\d{4}[\\-]\\d{2}[\\-]\\d{4}[\\.]\\d{1}", "i");
  var isValid = this.value.search(myFilePattern) >= 0;
//Checks to see if the File number entered is in the proper format
if (!(isValid)) {
  myFileNumError.innerHTML = "Input does not match expected pattern. xxxx-xx-xxxx.x";
} else if (isValid) {
  myFileNumError.innerHTML = "";
}

}


//Adds user-input guidance for Applicant Name format
document.wholeForm.nameField.onfocus = function() {
  document.getElementById('myNameHint').innerHTML = "(Enter first name, then last)";
}

//Removes user-input guidance for Applicant Name format
document.wholeForm.nameField.onblur = function() {
  document.getElementById('myNameHint').innerHTML = "";
}

//Adds user-input guidance for Application File Number format
document.fileNumField.fileNumField.onfocus = function() {
  document.getElementById('myFileHint').innerHTML = "(e.g., 1234-56-7890.12)";
}

//Removes user-input guidance for Application File Number format
document.fileNumField.fileNumField.onblur = function() {
  document.getElementById('myFileHint').innerHTML = "";
}


//Adds user-input guidance for project site Block Number format
document.blockNum.blockNumField.onfocus = function() {
  document.getElementById('myBlockHint').innerHTML = "(Enter Block(s) number(s), separated by commas, or select N/A)";
}

//Removes user-input guidance for project site Block Number format
document.blockNum.blockNumField.onblur = function() {
  document.getElementById('myBlockHint').innerHTML = "";
}

//Adds user-input guidance for project site Lot Number format
document.lotNum.lotNumField.onfocus = function() {
  document.getElementById('myLotHint').innerHTML = "(Enter Block(s) number(s), separated by commas, or select N/A)";
}

//Removes user-input guidance for project site Lot Number format
document.lotNum.lotNumField.onblur = function() {
  document.getElementById('myLotHint').innerHTML = "";
}


//Adds user-input guidance for Watershed Management field
document.wtrshdMgtField.watershedManagement.onfocus = function() {
  document.getElementById('myWtrshdMgtHint').innerHTML = "(Enter name of watershed management, or select N/A)";
}

//Removes user-input guidance for Watershed Management field
document.wtrshdMgtField.watershedManagement.onblur = function() {
  document.getElementById('myWtrshdMgtHint').innerHTML = "";
}
