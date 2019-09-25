let counter;


const makeShot = function (){
    const myEmoti = ['⚽', '⚾','🥎','🏀','🏐','🏈','🏉','🎱','💣','☢️']; 

    document.getElementById('shotcounter').innerText = 'liczba strzałów: ' + (counter++);
     
    const myBox = document.getElementById('mbox');
    myBox.classList.add('rubberBand');
    myBox.addEventListener("animationend", removeRubber);

    const myContent = document.getElementById('bcontent');
    const newBox = document.createElement('span');
    myContent.appendChild(newBox);
    const newElement = document.createTextNode(myEmoti[Math.round(Math.random()*(myEmoti.length-1))]);
    newBox.appendChild(newElement);
    newBox.classList.add('box2', 'box2-animation' ); //, 'box2-animation' bounceInDown
    newBox.setAttribute("id","box4");
    newBox.addEventListener("animationend", function(){document.getElementById('box4').remove();});
}

const shot = function () {
    let i=30;
    counter=1;

    document.getElementById('shotcounter').innerText = 'liczba strzałów: ';
    
    const myButton = document.getElementById('rbutton');
    myButton.addEventListener('click', makeShot);
    const startBtn = document.getElementById('startbtn');
    startBtn.removeEventListener('click', shot);

    runTimer = setInterval (function(){
            document.getElementById('startbtn').innerText = 'Masz 30 sek. na strzał pozostało: ' + i + ' sekund';
            i--;
        },1000);
    setTimeout(removeStart, 30000);
}

const breakeJump = function (){
    document.getElementById('box4').remove();
}

const removeRubber = function (){
    const mBox = document.getElementById('mbox');
    mBox.classList.remove('rubberBand');
}

const removeStart = function(){
    const myButton = document.getElementById('rbutton');
    myButton.removeEventListener('click', makeShot);
    clearInterval(runTimer);
    const startBtn = document.getElementById('startbtn');
    startBtn.addEventListener('click', shot);
    startBtn.innerText = "Naciśnij aby rozpocząć strzelanie";  
}

const startGame = function (){
    const startBtn = document.getElementById('startbtn');
    startBtn.addEventListener('click', shot);
}

startGame();

