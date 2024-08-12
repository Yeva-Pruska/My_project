const score0Element = document.querySelector('#score--0')
const score1Element = document.querySelector('#score--1')
const current0Element = document.querySelector('#current--0')
const current1Element = document.querySelector('#current--1')
const diceElement = document.querySelector ('.dice')
const btnNew = document.querySelector ('.btn--new')
const btnRoll = document.querySelector ('.btn--roll')
const btnHold = document.querySelector ('btn--hold')
const player0Element = document.querySelector ('.player--0')
const player1Element = document.querySelector ('.player--1')


const switchActivePlayer = function(){
    curentScore = 0; 
    document.getElementById( `curent--${activePlayer}`).textContent = curentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active')
    player1Element.classList.toggle('player--active')
} 

let totalScores,curentScore,activePlayer,isPlayeng;

const initGame = function() {
    totalScores = [0,0]
    curentScore = 0; 
    activePlayer = 0;
    isPlaying = true; 

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0Element.classList.remove(`player--winer`)
    player1Element.classList.remove(`player--winer`)
    player0Element.classList.remove(`player--active`)
    player1Element.classList.remove(`player--active`)
    player0Element.classList.add(`player--active`)
    player0Element.classList.add(`hidden`)
}
initGame()

btnRoll.addEventListener('click', function (){
    if(isPlaying){
        const diceNumder = Math.trunc(Math.random()*6)+1;
        console.log(diceNumber);

        diceElement.classList.remove('hiden')
        diceElement.scr =`images/dice${diceNumber}.png`

        if(diceNumber!==1){
            curentScore+diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = curentScore

        } else {
            switchActivePlayer()
        }

    }
})












