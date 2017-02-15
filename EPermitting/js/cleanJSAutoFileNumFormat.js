var zChar = new Array(' ', '-', '.');
var maxfileNumlength = 15;
var fileNumvalue1;
var fileNumvalue2;
var cursorposition;

function ParseForNumber1(object) {
  fileNumvalue1 = ParseChar(object.value, zChar);
}

function ParseForNumber2(object) {
  fileNumvalue2 = ParseChar(object.value, zChar);
}

function backspacerUP(object, e) {
  if (e) {
    e = e
  } else {
    e = window.event
  }
  if (e.which) {
    var keycode = e.which
  } else {
    var keycode = e.keyCode
  }

  ParseForNumber1(object)

  if (keycode >= 48) {
    ValidateFileNum(object)
  }
}

function backspacerDOWN(object, e) {
  if (e) {
    e = e
  } else {
    e = window.event
  }
  if (e.which) {
    var keycode = e.which
  } else {
    var keycode = e.keyCode
  }
  ParseForNumber2(object)
}

function GetCursorPosition() {

  var t1 = fileNumvalue1;
  var t2 = fileNumvalue2;
  var bool = false
  for (i = 0; i < t1.length; i++) {
    if (t1.substring(i, 1) != t2.substring(i, 1)) {
      if (!bool) {
        cursorposition = i
        bool = true
      }
    }
  }
}

function ValidateFileNum(object) {

  var p = fileNumvalue1

  p = p.replace(/[^\d]*/gi, "")

  if (p.length < 4) {
    object.value = p
  } else if (p.length == 4) {
    pp = p;
    d4 = p.indexOf(' ')
    d5 = p.indexOf('-')
    if (d4 == -1) {
      pp = pp;
    }
    if (d5 == -1) {
      pp = pp + "-";
    }
    object.value = pp;


  } else if (p.length > 4 && p.length < 7) {
    pp = p;
    l30 = p.length;
    p30 = p.substring(0, 4);
    p30 = p30 + "-";

    p31 = p.substring(4, 6);
    p31 = p31 + "-";
    pp = p30 + p31;

    object.value = pp;



  } else if (p.length > 7 && p.length < 12) {
    pp = p;
    l30 = p.length;
    p30 = p.substring(0, 4);
    p30 = p30 + "-";

    p30b = p.substring(4, 6);
    p30b = p30b + "-";

    p30c = p.substring(6, 10);
    p30c = p30c + ".";

    p31 = p.substring(10, l30);
    p31 = p31;

    pp = p30 + p30b + p30c + p31;

    object.value = pp;





  } else if (p.length > 12 && p.length < 16) {
    p = p;
    l30 = p.length;
    p30 = p.substring(0, 4);
    p30 = p30 + "-";

    p31 = p.substring(4, 6);
    p31 = p31 + "-";

    p31b = p.substring(6, 10);
    p31b = p31b + ".";

    p31c = p.substring(10, 16);
    p31c = p31c;

    pp = p30 + p31 + p31b + p31c;

    l40 = pp.length;
    p40 = pp.substring(0, 16);
    p40 = p40;

    p41 = pp.substring(16, l40);
    ppp = p40 + p41;

    object.value = ppp.substring(0, maxfileNumlength);
  }

  GetCursorPosition()

  if (cursorposition >= 0) {
    if (cursorposition == 0) {
      cursorposition = 2
    } else if (cursorposition <= 2) {
      cursorposition = cursorposition + 1
    } else if (cursorposition <= 5) {
      cursorposition = cursorposition + 2
    } else if (cursorposition == 6) {
      cursorposition = cursorposition + 2
    } else if (cursorposition == 7) {
      cursorposition = cursorposition + 4
      e1 = object.value.indexOf(' ')
      e2 = object.value.indexOf('-')
      if (e1 > -1 && e2 > -1) {
        if (e2 - e1 == 4) {
          cursorposition = cursorposition - 1
        }
      }
    } else if (cursorposition < 11) {
      cursorposition = cursorposition + 3
    } else if (cursorposition == 11) {
      cursorposition = cursorposition + 1
    } else if (cursorposition >= 12) {
      cursorposition = cursorposition
    }

    /*var txtRange = object.createTextRange();
    txtRange.moveStart("character", cursorposition);
    txtRange.moveEnd("character", cursorposition - object.value.length);
    txtRange.select();
    */
  }

}

function ParseChar(sStr, sChar) {
  if (sChar.length == null) {
    zChar = new Array(sChar);
  } else zChar = sChar;

  for (i = 0; i < zChar.length; i++) {
    sNewStr = "";

    var iStart = 0;
    var iEnd = sStr.indexOf(sChar[i]);

    while (iEnd != -1) {
      sNewStr += sStr.substring(iStart, iEnd);
      iStart = iEnd + 1;
      iEnd = sStr.indexOf(sChar[i], iStart);
    }
    sNewStr += sStr.substring(sStr.lastIndexOf(sChar[i]) + 1, sStr.length);

    sStr = sNewStr;
  }

  return sNewStr;
}
