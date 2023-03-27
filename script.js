"use strict"

const player = document.querySelector('.player');
const playerTxt = document.getElementById(`playerEl`)
const computer = document.querySelector('.computer');
const computerTxt = document.getElementById(`computerEl`);
const select = document.getElementById('rockPaper');
const imagePleyer = document.getElementById('imageP');
const imageComputer = document.getElementById('imageC');
const again=document.getElementById('again');
const color = document.getElementById('color');




let scoreP = 0;
let scoreC = 0;
let playing = true;
function scorePlayer() {
    playerTxt.textContent = `Player ${scoreP}`
}

function scorePc() {
    computerTxt.textContent = `PC ${scoreC}`
}


scorePlayer()
scorePc()

again.addEventListener('click',function(){
    location.reload()
})
color.addEventListener('change',function(){
   document.body.style.backgroundColor=this.value;
   
});
document.addEventListener('keydown',function(e){
    console.log(e.key)
    if(e.key==='c'){
        document.body.style.backgroundColor='rgb(21, 85, 106)'
    }
    else if(e.key==='Escape'){
        location.reload();
    }
  
})
select.addEventListener('change', function () {
    if (playing) {
        const rock = `rock.jpg`;
        const paper = `design-space-paper-textured-background_53876-42312.webp`;
        const scissors = `scissors.jpg`;


        const rockPaperScissors = [
            rock,
            paper,
            scissors,
        ];

        const randomMethod = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
        function computerGenerator() {

            if (randomMethod === rock) {
                imageComputer.src = `rock.jpg`;
            }

            else if (randomMethod === paper) {
                imageComputer.src = `design.webp`;
            }
            else if (randomMethod === scissors) {
                imageComputer.src = `scissors.jpg`;
            }
        }





        if (this.value === 'rock') {
            imagePleyer.src = `rock.jpg`
            computerGenerator()
            if (randomMethod === rock) {
                scoreC;
                scorePc();
                scoreP;
                scorePlayer()
            }
            else if (randomMethod === paper) {
                scoreC++;
                scorePc();
                scoreP;
                scorePlayer()

            }
            else if (randomMethod === scissors) {
                scoreC;
                scorePc();
                scoreP++;
                scorePlayer();
            }

        }
        else if (this.value === 'select') {

            imagePleyer.src = `select.jpg`;
            imageComputer.src = `Human.jpg`;
            scoreC;
            scorePc();
            scoreP;
            scorePlayer();
        }
        else if (this.value === 'scissors') {

            imagePleyer.src = `scissors.jpg`;
            computerGenerator();
            if (randomMethod === rock) {
                scoreC++;
                scorePc();
                scoreP;
                scorePlayer();
            }
            else if (randomMethod === paper) {
                scoreC;
                scorePc();
                scoreP++;
                scorePlayer();
            }
            else if (randomMethod === scissors) {
                scoreC;
                scorePc();
                scoreP;
                scorePlayer();
            }

        }
        else if (this.value === 'paper') {
            imagePleyer.src = `design.webp`;
            computerGenerator();
            if (randomMethod === rock) {
                scoreP++;
                scorePlayer();
                scoreC;
                scorePc();
            }
            else if (randomMethod === paper) {
                scoreP;
                scorePlayer();
                scoreC;
                scorePc();
            }
            else if (randomMethod === scissors) {
                scoreP;
                scorePlayer();
                scoreC++;
                scorePc();
            }
        }
    }
    if (scoreP === 10 || scoreC === 10) {
        playing = false;
        if (scoreP === 10) {
            playerTxt.textContent = `WINNER`
            document.body.style.backgroundColor='rgb(0, 0, 102)';
            
        }
        else {
            playerTxt.textContent = `LOSSER`
           
        }
        if (scoreC === 10) {
            computerTxt.textContent = `WINNER`
            document.body.style.backgroundColor='rgb(61, 30, 30)'
        }
        else {
            computerTxt.textContent = `LOSSER`
        }
    }
})

