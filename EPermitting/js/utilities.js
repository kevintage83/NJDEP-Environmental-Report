
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
var myFileNum = document.wholeForm.fileNumField;
var myFileNumError = document.getElementById("formError");

myFileNum.onchange = function checkFileNum() {
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
document.wholeForm.fileNumField.onfocus = function() {
  document.getElementById('myFileHint').innerHTML = "(e.g., 1234-56-7890.12)";
}

//Removes user-input guidance for Application File Number format
document.wholeForm.fileNumField.onblur = function() {
  document.getElementById('myFileHint').innerHTML = "";
}


//Adds user-input guidance for project site Block Number format
document.wholeForm.blockNumField.onfocus = function() {
  document.getElementById('myBlockHint').innerHTML = "(Enter Block(s) number(s), separated by commas, or select N/A)";
}

//Removes user-input guidance for project site Block Number format
document.wholeForm.blockNumField.onblur = function() {
  document.getElementById('myBlockHint').innerHTML = "";
}


//Adds user-input guidance for project site Lot Number format
document.wholeForm.lotNumField.onfocus = function() {
  document.getElementById('myLotHint').innerHTML = "(Enter Block(s) number(s), separated by commas, or select N/A)";
}

//Removes user-input guidance for project site Lot Number format
document.wholeForm.lotNumField.onblur = function() {
  document.getElementById('myLotHint').innerHTML = "";
}


//Adds user-input guidance for Watershed Management field
document.wholeForm.watershedManagement.onfocus = function() {
  document.getElementById('myWtrshdMgtHint').innerHTML = "(Enter name of watershed management, or select N/A)";
}

//Removes user-input guidance for Watershed Management field
document.wholeForm.watershedManagement.onblur = function() {
  document.getElementById('myWtrshdMgtHint').innerHTML = "";
}


//Adds user-input guidance for Watershed field
document.wholeForm.watershedField.onfocus = function() {
  document.getElementById('myWtrshdHint').innerHTML = "(Enter name of watershed, or select N/A)";
}

//Removes user-input guidance for Watershed field
document.wholeForm.watershedField.onblur = function() {
  document.getElementById('myWtrshdHint').innerHTML = "";
}


//Adds user-input guidance for Sub-watershed field
document.wholeForm.subWatershedField.onfocus = function() {
  document.getElementById('mySubWtrshdHint').innerHTML = "(Enter name of sub-watershed, or select N/A)";
}

//Removes user-input guidance for Sub-watershed field
document.wholeForm.subWatershedField.onblur = function() {
  document.getElementById('mySubWtrshdHint').innerHTML = "";
}


//Adds user-input guidance for Waterway field
document.wholeForm.waterwayField.onfocus = function() {
  document.getElementById('myWaterwayHint').innerHTML = "(Enter name of waterway, or select N/A)";
}

//Removes user-input guidance for Waterway field
document.wholeForm.waterwayField.onblur = function() {
  document.getElementById('myWaterwayHint').innerHTML = "";
}


//Adds user-input guidance for Resource Value Classification field
document.wholeForm.rVCField.onfocus = function() {
  document.getElementById('myRVCNAHint').innerHTML = "(Enter the resource value classification, or select N/A)";
}

//Removes user-input guidance for Resource Value Classification field
document.wholeForm.rVCField.onblur = function() {
  document.getElementById('myRVCNAHint').innerHTML = "";
}


//Adds user-input guidance for Tidelands Claim # field
document.wholeForm.claimNum.onfocus = function() {
  document.getElementById('myTidalClaimHint').innerHTML = "(Enter the tidal claim number, or select N/A)";
}

//Removes user-input guidance for Tidelands Claim # field
document.wholeForm.claimNum.onblur = function() {
  document.getElementById('myTidalClaimHint').innerHTML = "";
}


function clearAndShow(){
  var message = document.getElementById("nameField").innerHTML = document.getElementById("display_message").value;
}




