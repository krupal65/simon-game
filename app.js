let gameSeq=[];
let userSeq=[];

let btns = ['pink','green','orange','blue'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

// Only to start the game by pressing any key
document.addEventListener('keypress',function(){
    if (started == false){
        console.log("started");
        started = true;
        levelUp();
    }
});

// update h2
function levelUp(){
    userSeq = []; // major change
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randColor = btns[random];
    let randBtn = document.querySelector(`.${randColor}`)

    // add random color generated to gameSeq
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

// randomly flash any button
function gameFlash(btn){
    btn.classList.add('flash');    
    setTimeout(function(){
        btn.classList.remove('flash');
    },100);
}
function userFlash(btn){
    btn.classList.add('userFlash');    
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },100);
}

function compare(idx){
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML = `Game Over! Press any key to start.<br> <b>Score: ${level}</b>`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },100);
        reset();
    }
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
function btnPress(){
    // use this: to know which button was pressed
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    compare(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click',btnPress);
}
