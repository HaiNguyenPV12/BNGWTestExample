// JavaScript source code
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //This JavaScript function always returns a random number between min and max (both included)
}

var leftnum;
var rightnum;
var correctans = 0;
var incorrectans = 0;

function StartGame() {
    leftnum = getRndInteger(1, 10);
    rightnum = getRndInteger(1, 10);
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
        document.gameform.btn[i].removeAttribute("disabled");
    }
}
function disablebuttons() {
    for (var i = 0; i < document.gameform.btn.length; i++) {
        document.gameform.btn[i].setAttribute("disabled", "disabled");
    }
}

function compare(id) {
    switch (id) {
        case "a>b":
            if (leftnum > rightnum) {
                correctans = correctans + 1;
                results();
            }
            else {
                incorrectans = incorrectans + 1;
                results();
            }
            disablebuttons();
            break;
        case "a=b":
            if (leftnum == rightnum) {
                correctans = correctans + 1;
                results();
            }
            else {
                incorrectans = incorrectans + 1;
                results();
            }
            disablebuttons();
            break;
        case "a<b":
            if (leftnum < rightnum) {
                correctans = correctans + 1;
                results();
            }
            else {
                incorrectans = incorrectans + 1;
                results();
            }
            disablebuttons();
            break;

        default:
            break;
    }
}

function results() {
    var percentans = (correctans * 100) / (incorrectans + correctans);
    document.gameform.canswers.value = correctans;
    document.gameform.icanswers.value = incorrectans;
    document.gameform.panswers.value = percentans.toFixed(1);
}