var turn = 0;
var end = 0;
let array = ["","","","","","","","",""];

function Click_x0(){
    if ( end === 99 ) {
        return false;
    }
    blank0.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank0.removeEventListener('click',Click_x0);
    array[0] = 'x';
    checkResult();
    comTurn();
}

function Click_x1(){
    if ( end === 99 ) {
        return false;
    }
    blank1.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank1.removeEventListener('click',Click_x1);
    array[1] = 'x';
    checkResult();
    comTurn();
}

function Click_x2(){
    if ( end === 99 ) {
        return false;
    }
    blank2.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank2.removeEventListener('click',Click_x2);
    array[2] = 'x';
    checkResult();
    comTurn();
}

function Click_x3(){
    if ( end === 99 ) {
        return false;
    }
    blank3.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank3.removeEventListener('click',Click_x3);
    array[3] = 'x';
    checkResult();
    comTurn();
}

function Click_x4(){
    if ( end === 99 ) {
        return false;
    }
    blank4.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank4.removeEventListener('click',Click_x4);
    array[4] = 'x';
    checkResult();
    comTurn();
}

function Click_x5(){
    if ( end === 99 ) {
        return false;
    }
    blank5.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank5.removeEventListener('click',Click_x5);
    array[5] = 'x';
    checkResult();
    comTurn();
}

function Click_x6(){
    if ( end === 99 ) {
        return false;
    }
    blank6.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank6.removeEventListener('click',Click_x6);
    array[6] = 'x';
    checkResult();
    comTurn();
}

function Click_x7(){
    if ( end === 99 ) {
        return false;
    }
    blank7.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank7.removeEventListener('click',Click_x7);
    array[7] = 'x';
    checkResult();
    comTurn();
}

function Click_x8(){
    if ( end === 99 ) {
        return false;
    }
    blank8.src = 'https://i.dlpng.com/static/png/7195325_preview.png';
    blank8.removeEventListener('click',Click_x8);
    array[8] = 'x';
    checkResult();
    comTurn();
}


const blank0 = document.getElementById('0');
blank0.addEventListener('click',Click_x0);
const blank1 = document.getElementById('1');
blank1.addEventListener('click',Click_x1);
const blank2 = document.getElementById('2');
blank2.addEventListener('click',Click_x2);
const blank3 = document.getElementById('3');
blank3.addEventListener('click',Click_x3);
const blank4 = document.getElementById('4');
blank4.addEventListener('click',Click_x4);
const blank5 = document.getElementById('5');
blank5.addEventListener('click',Click_x5);
const blank6 = document.getElementById('6');
blank6.addEventListener('click',Click_x6);
const blank7 = document.getElementById('7');
blank7.addEventListener('click',Click_x7);
const blank8 = document.getElementById('8');
blank8.addEventListener('click',Click_x8);

function comTurn(){
    var move = 0;
    do {
        move = Math.floor(Math.random()*9);
        if (turn === 4) {
            return;
        }
    } while ( array[move] != "")
    turn++;
    array[move] = 'o';
    const img_O = document.getElementById(move);
    img_O.src = 'https://cdn.clipartsfree.net/vector/medium/clipart-0123_Clip_Art.png';

    if(move === 0){
        img_O.removeEventListener('click',Click_x0);
    }
    else if(move === 1){
        img_O.removeEventListener('click',Click_x1);
    }
    else if(move === 2){
        img_O.removeEventListener('click',Click_x2);
    }
    else if(move === 3){
        img_O.removeEventListener('click',Click_x3);
    }
    else if(move === 4){
        img_O.removeEventListener('click',Click_x4);
    }
    else if(move === 5){
        img_O.removeEventListener('click',Click_x5);
    }
    else if(move === 6){
        img_O.removeEventListener('click',Click_x6);
    }
    else if(move === 7){
        img_O.removeEventListener('click',Click_x7);
    }
    else {
        img_O.removeEventListener('click',Click_x8);
    }
    checkResult();
}

function checkResult(){
    // player win
    if(array[0] === 'x' && array[1] === 'x' && array[2] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[3] === 'x' && array[4] === 'x' && array[5] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[6] === 'x' && array[7] === 'x' && array[8] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[0] === 'x' && array[3] === 'x' && array[6] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[1] === 'x' && array[4] === 'x' && array[7] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[2] === 'x' && array[5] === 'x' && array[8] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[0] === 'x' && array[4] === 'x' && array[8] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    else if(array[2] === 'x' && array[4] === 'x' && array[6] === 'x'){
        document.getElementById('result').innerHTML = 'Player is Winner!';
        end = 99;
    }
    
    // com win
    if(array[0] === 'o' && array[1] === 'o' && array[2] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[3] === 'o' && array[4] === 'o' && array[5] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[6] === 'o' && array[7] === 'o' && array[8] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[0] === 'o' && array[3] === 'o' && array[6] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[1] === 'o' && array[4] === 'o' && array[7] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[2] === 'o' && array[5] === 'o' && array[8] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[0] === 'o' && array[4] === 'o' && array[8] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }
    else if(array[2] === 'o' && array[4] === 'o' && array[6] === 'o'){
        document.getElementById('result').innerHTML = 'Computer is Winner!';
        end = 99;
    }    
}