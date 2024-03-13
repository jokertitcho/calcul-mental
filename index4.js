const numbers = document.querySelectorAll(".number");
const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result")
const refresh = document.querySelector(".refresh")
result.textContent = "..."
let randomNumbers = [];
let correctResult = 0;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", onBtnclick)
}

init()
function onBtnclick(e){
    if(e.currentTarget.textContent == correctResult){
        result.textContent = "bravo  "
        refresh.style.display= "block"
    }else{
        result.textContent = "vous vous etes trompé"
        refresh.style.display= "none"
    }
    console.log(e.currentTarget)  
}

function getRandomBetweenNum(min, max){
    return (Math.random()* (max - min)) + min
}
refresh.addEventListener("click", init)

function init (){
    result.textContent = "..."
    refresh.style.display= "none"
    correctResult = 0
    for (let i = 0; i < numbers.length; i++) {
        let numbRand =  Math.round(Math.random()*20)
        
        /* randomNumbers.push(numbRand) */
       numbers[i].textContent = numbRand
    
       correctResult += numbRand 
    }
    let randomMargin = getRandomBetweenNum(1, 2);
    for (let i = 0; i < btn.length; i++) {
       
       if(Math.random < 0.5){
           btn[i].textContent = Math.round(correctResult + randomMargin);
       }else{
           btn[i].textContent = Math.round(correctResult - randomMargin);
       }
       randomMargin = getRandomBetweenNum(randomMargin + 1, randomMargin +2)
    }
    
    let randomPosition = Math.round(Math.random()* (btn.length - 1))
    btn[randomPosition].textContent = correctResult
    

}
