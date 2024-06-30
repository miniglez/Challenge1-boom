const restartBtn = document.getElementById("restart");
const countdownHTML = document.getElementById("countdown");
const result = document.getElementById("result")
let numberCount = 5;


const countdown = new Promise ((resolve) => {
    countdownHTML.textContent = numberCount;
    console.log(numberCount)
    numberCount --;
    resolve("Resuelto temporizador");
    
})

const resolveGame = new Promise ((resolve) => {
    setTimeout(() => {
        const userNumber = parseInt(document.getElementById("userInput").value);
        const randNumber = parseInt(Math.floor(Math.random() * (3 - 1) + 1));
        if (userNumber === randNumber){
            result.textContent = "Has salvado al mundo";
        }
        else{
            result.textContent = `El numero era ${randNumber}, hemos muerto todos, eres muy malo`;
        }
    },5000)
    resolve("Resuelto Juego");
})

const startGame = () => {
    countdown
        .then(() => {
            if (numberCount > 0){
                setTimeout(() => {
                    return countdown;
                },1000);
            }
            else{
                console.log("Entra para resolver el resultado")
                return resolveGame
            }
        })
}

startGame()

restartBtn.addEventListener("click", () => {
    numberCount =
   startGame()
})