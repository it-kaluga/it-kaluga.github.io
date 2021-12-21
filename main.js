/* jshint esversion: 6 */
let area = document.querySelector('.area');
let num = 0;
area.onclick = function(event){
    console.log(event);
    if(event.target.className == 'box'){
        
        if(num % 2 == 0){
            event.target.innerHTML = 'X';
        console.log('X');
        }else {event.target.innerHTML = '0';
        console.log('0');
    }
    }
    num++;
    checkWinner();
};
function checkWinner(){
    let allblock = document.querySelectorAll('.box');
    //console.log(allblock[0].innerHTML);
    if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X') alert('Победили крестики');
    if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X') alert('Победили крестики');
    if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') alert('Победили крестики');
    if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') alert('Победили крестики');
    if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') alert('Победили крестики');
    if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') alert('Победили крестики');
    if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') alert('Победили крестики');
    if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') alert('Победили крестики');
    //нолики
    if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') alert('Победили нолики');
    if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') alert('Победили нолики');
    if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили нолики');
    if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') alert('Победили нолики');
    if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') alert('Победили нолики');
    if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили нолики');
    if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили нолики');
    if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') alert('Победили нолики');
}
