const resultEl = document.getElementById('result')
const lengthtEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const clipboardEl = document.getElementById('clipboard')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generatorEl = document.getElementById('generator')

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
//console.log(getRandomLower());
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//console.log(getRandomUpper());
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
//console.log(getRandomNumber());
function getRandomSymbol(){
       //return String.fromCharCode(Math.floor(Math.random()*15+33));
       const symbols = '!@#§&%/()[]{}=\?+-<>.,;:$*~'
       const i=Math.floor(Math.random()*symbols.length) ;
       return symbols[i];
}
//console.log(getRandomSymbol());

const randomFunction={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}

generatorEl.addEventListener('click',()=>{
    const length = +lengthtEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    //console.log(length,hasUpper, hasLower,hasNumber,hasSymbol);
    resultEl.innerText = generatePassword(length,hasUpper,hasLower,hasNumber,hasSymbol);
})

function generatePassword(length,upper,lower,number,symbol){
    let generatePassword = ''
    const typesCount = upper+lower+number+symbol
    const typesArr = [{upper},{lower},{number},{symbol}].filter(item =>Object.values(item)[0])


    if(typesCount===0){
        return '';
    }

    //i=0 length=20 , 4
    for(let i=0;i<length;i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatePassword += randomFunction[funcName]()

        })
    }
    const finalPassword = generatePassword.slice(0,length)
    return finalPassword;
}

