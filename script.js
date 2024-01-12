var matchedBlocks = new Array();
var Main = document.createElement("main");
var startBtn = document.getElementById("startBtn");
var mark = true;
var playWithAIBtn = document.createElement("button");

function startGame() {
    Main.id = "main";
    document.body.style = "background-color:black;"
    Main.style = "border:solid yellow";
    playWithAIBtn.className = "AIbtn";
    playWithAIBtn.innerHTML = " Play with AI";
    playWithAIBtn.setAttribute("onclick", "playWithAI()");
    startBtn.remove();
    document.body.appendChild(Main);
    document.body.appendChild(playWithAIBtn);

    for (let i = 0; i < 9; i++) {
        var div = document.createElement("div");
        Main.appendChild(div);
        div.setAttribute("onclick", "getMark(this)");
        div.className = "blocks";
        div.style = "border:solid yellow";
        matchedBlocks.push(div);
    }
}

function getMark(selBlock) {
    if (mark == true) {
        selBlock.innerHTML = "X";
        selBlock.setAttribute("onclick", "");
        mark = false;
    } else {
        selBlock.innerHTML = "O";
        selBlock.setAttribute("onclick", "");
        mark = true;
    }
    checkMatch();
}

function checkMatch() {
    // Horizontal Check
    if (
        matchedBlocks[0].innerHTML != "" &&
        matchedBlocks[0].innerHTML == matchedBlocks[1].innerHTML &&
        matchedBlocks[1].innerHTML == matchedBlocks[2].innerHTML
    ) {
        resultMsgBar(matchedBlocks[0]);
        pauseGame();
    }
    if (
        matchedBlocks[3].innerHTML != "" &&
        matchedBlocks[3].innerHTML == matchedBlocks[4].innerHTML &&
        matchedBlocks[4].innerHTML == matchedBlocks[5].innerHTML
    ) {
        resultMsgBar(matchedBlocks[3]);
        pauseGame();
    }
    if (
        matchedBlocks[6].innerHTML != "" &&
        matchedBlocks[6].innerHTML == matchedBlocks[7].innerHTML &&
        matchedBlocks[7].innerHTML == matchedBlocks[8].innerHTML
    ) {
        resultMsgBar(matchedBlocks[6]);
        pauseGame();
    }

    // Vertical Check
    if (
        matchedBlocks[0].innerHTML != "" &&
        matchedBlocks[0].innerHTML == matchedBlocks[3].innerHTML &&
        matchedBlocks[3].innerHTML == matchedBlocks[6].innerHTML
    ) {
        resultMsgBar(matchedBlocks[0]);
        pauseGame();
    }
    if (
        matchedBlocks[1].innerHTML != "" &&
        matchedBlocks[1].innerHTML == matchedBlocks[4].innerHTML &&
        matchedBlocks[4].innerHTML == matchedBlocks[7].innerHTML
    ) {
        resultMsgBar(matchedBlocks[1]);
        pauseGame();
    }
    if (
        matchedBlocks[2].innerHTML != "" &&
        matchedBlocks[2].innerHTML == matchedBlocks[5].innerHTML &&
        matchedBlocks[5].innerHTML == matchedBlocks[8].innerHTML
    ) {
        resultMsgBar(matchedBlocks[2]);
        pauseGame();
    }

    // Diagonal Check
    if (
        matchedBlocks[0].innerHTML != "" &&
        matchedBlocks[0].innerHTML == matchedBlocks[4].innerHTML &&
        matchedBlocks[4].innerHTML == matchedBlocks[8].innerHTML
    ) {
        resultMsgBar(matchedBlocks[0]);
        pauseGame();
    }
    if (
        matchedBlocks[2].innerHTML != "" &&
        matchedBlocks[2].innerHTML == matchedBlocks[4].innerHTML &&
        matchedBlocks[4].innerHTML == matchedBlocks[6].innerHTML
    ) {
        resultMsgBar(matchedBlocks[2]);
        pauseGame();
    }

    if (checkTie() != false) {
        TieMsgBar();
    }
}

function pauseGame() {
    for (let p = 0; p < matchedBlocks.length; p++) {
        matchedBlocks[p].onclick = "";
        checkTie = null;
    }
}

function checkTie() {
    for (const block of matchedBlocks) {
        if (block.innerHTML == "") {
            return false;
        }
    }
}

function resultMsgBar(winner) {
    var resMsgBar = document.createElement("div");
    var resMsg = document.createElement("h2");
    var btn = document.createElement("button");

    document.body.appendChild(resMsgBar);
    resMsgBar.appendChild(resMsg);
    resMsgBar.appendChild(btn);

    resMsgBar.className = "resMsgBar";
    resMsg.className = "resMsg";
    btn.className = "btn";

    resMsg.innerText = `Player ${winner.innerHTML} Won the Game`;
    btn.innerText = "OK";

    document.body.style = "";
    Main.style = "z-index:-1;background-color:black;opacity:0.1";
    document.body.style = "background-color:black;"

    btn.addEventListener("click", function () {
        resMsgBar.remove();
        Main.style = "z-index:1;background-color:transparent;opacity:1";
        var playAgainMsg = document.createElement("h3");
        document.body.appendChild(playAgainMsg);
        playAgainMsg.className = "playAgainMsg";
        playAgainMsg.innerHTML = "Click to Play again!";
        playAgainMsg.setAttribute("onclick","window.location.reload()");
    })
}
function TieMsgBar() {
    var TieMsgBar = document.createElement("div");
    var TieMsg = document.createElement("h2");
    var btn = document.createElement("button");

    document.body.appendChild(TieMsgBar);
    TieMsgBar.appendChild(TieMsg);
    TieMsgBar.appendChild(btn);

    TieMsgBar.className = "resMsgBar";
    TieMsg.className = "resMsg";
    btn.className = "btn";

    TieMsgBar.style = "background-color:red;row-gap:3vh";

    TieMsg.innerText = "It's just Tie!";
    btn.innerText = "OK";

    document.body.style = "";
    Main.style = "z-index:-1;background-color:black;opacity:0.1";
    document.body.style = "background-color:black;"

    btn.addEventListener("click", function () {
        TieMsgBar.remove();
        Main.style = "z-index:1;background-color:transparent;opacity:1";
        var playAgainMsg = document.createElement("h3");
        document.body.appendChild(playAgainMsg);
        playAgainMsg.className = "playAgainMsg";
        playAgainMsg.innerHTML = "Click to Play again!";
        playAgainMsg.setAttribute("onclick","window.location.reload()");
    })
}



// Working :
function playWithAI() {
    alert("Sorry! This Game Mode is not ready...");
    // mark = true;
    // alert("Now! You are Playing with AI...");
    // for (var i = 0; i < 9; i++) {
    //     Main.children[i].setAttribute("onclick", `makeMarkwithAI(${i})`);
    //     Main.children[i].innerHTML = "";
    // }
}

// function makeMarkwithAI(i) {
//     var selblock = Main.children[i];
//     if (mark == true && selblock.innerHTML == "") {
//         selblock.innerHTML = "X";
//         mark = false;
//     }
//     if (mark == false) {
//         moveByAI();
//     }
// }
// function moveByAI() {
//     var randomNo = Math.round(Math.random() * 8);
//     setTimeout(function () {
//         while (randomNo <= 8) {
//             if (Main.children[randomNo].innerHTML == "") {
//                 Main.children[randomNo].innerHTML = "O";
//                 break;
//             }
//             else {
//                 randomNo++;
//                 if (randomNo > 8) {
//                     randomNo = 0;
//                 }
//             }
//         }
//     }, 1000);
//     mark = true;
//     checkMatch();
// }