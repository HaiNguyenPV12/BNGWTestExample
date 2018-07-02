// JavaScript source code
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < document.gameform.btn[i].disabled; i++) {
    document.gameform.btn[i].disabled = true;
}

function StartGame() {
    for (var i = 0; i < document.gameform.btn; i++) {
        document.btn[i].disabled = false;
    }
    var leftnum = getRndInteger(1, 10);
    var rightnum = getRndInteger(1, 10);
    var x = "";
    var y = "";
    for (var i = 0; i < leftnum; i++) {
        x += "o ";
    }
    for (var i = 0; i < rightnum; i++) {
        y += "o ";
    }
    document.gameform.txtleft.value = x;
    document.gameform.txtright.value = y;

    for (var i = 0; i < document.gameform.btn.length; i++) {
        document.gameform.btn[i].disabled = false;
    }
}