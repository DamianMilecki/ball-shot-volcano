    
const makeShot = function (){
    const myContent =document.getElementById('bcontent'); 
    const myEmoti = ['⚽', '⚾','🥎','🏀','🏐','🏈','🏉']; 
    const myBox = document.getElementById('mbox');
    const newBox = document.createElement('span');
   
    // myButton.classList.add('active');
    // myButton.addEventListener('mouseout', removeActive)
    myBox.classList.add('rubberBand');

    myBox.addEventListener("animationend", removeRubber); 
   
    myContent.appendChild(newBox);
    const newElement = document.createTextNode(myEmoti[Math.round(Math.random()*(myEmoti.length-1))]);
    newBox.appendChild(newElement);
    newBox.style.visibility = "hidden";
    
    newBox.classList.add('box2', 'box2-animation' ); //, 'box2-animation' bounceInDown
    newBox.setAttribute("id","box4");
    
    newBox.addEventListener("animationend", breakeJump);    
}

const shot = function () {
   const myButton = document.getElementById('rbutton');
   myButton.addEventListener("click", makeShot);
}

const breakeJump = function (){
    document.getElementById('box4').remove();
}

const removeRubber = function (){
    const mBox = document.getElementById('mbox');
    mBox.classList.remove('rubberBand');
    document.getElementById('box4').style.visibility = 'visible';
}

const removeActive = function() {
    const myButton = document.getElementById('rbutton');
    myButton.classList.remove('active');
}

shot();

