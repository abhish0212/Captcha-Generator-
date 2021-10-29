function captchaGenerator(){
    let alpha = new Array('1','2','3','4','5','6','7','8','9','0','A' ,'B' ,'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N' ,'O' ,'P' ,'Q' ,'R' ,'S' ,'T' ,'U' ,'V' ,'W' ,'X','Y' ,'Z');
//                         0   1   2  

    let a = alpha[Math.floor(Math.random() * alpha.length)];
    let b = alpha[Math.floor(Math.random() * alpha.length)];
    let c = alpha[Math.floor(Math.random() * alpha.length)];
    let d = alpha[Math.floor(Math.random() * alpha.length)];
    let e = alpha[Math.floor(Math.random() * alpha.length)];
    let f = alpha[Math.floor(Math.random() * alpha.length)];
    
    let results = a +" "+ b +" "+ c +" "+ d +" "+ e  +" "+ f;

    document.getElementById('createCaptcha').value = results;

}


//isvalid

function isValid(){
    let one = removeSpaces(document.getElementById('createCaptcha').value);
    let two = removeSpaces(document.getElementById('inputCaptcha').value);

    if(one == two){
        return true;
    }else{
        return false;
    }
}
function removeSpaces(s){
    return s.split(" ").join('');
    //       b,E,E,B,C - 'bEEBC'
}