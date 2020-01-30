// 1
const a = 2;
const b = a * 3;
const c = a + b;
alert(`${a}, ${b}, ${c}`);
// 2
const firstName = prompt("Enter first name", "Jon");
const lastName = prompt("Enter last name", "Doe");
alert(`What is up ${firstName} ${lastName}`);
// 3
const x = prompt("numb1");
const y = prompt("numb2");
alert(`Разность: ${x - y}`);
alert(`Сумма: ${(+x) + (+y)}`);
alert(`Произведение: ${x * y}`);
alert(`Частное: ${x / y}`);
// 4
function sallary() {
    let hours = prompt("hours", "8");
    let days = prompt("days", "20");
    let rate = prompt("rate", "10");
    parseInt(hours && days && rate, 10) ? (
            alert(`Ваша ЗП ${hours * days * rate} $ в месяц`)
    ): (
            alert('Нужно вести цифры, а не буквы, попробуйте еще раз'), sallary()
    );
}
sallary();

// 5
function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
}
oddOrEven();
//6
function isNumeric(num){
    return !isNaN(num)
}
isNumeric();
//7
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function findBiggerValue() {
    let randomValue = randomNumber(0, 100);
    randomValue = Math.floor(randomValue * 100);
    let value = prompt("Введите цифру", "5");
    if ( randomValue > value ) {
        alert( `${randomValue} больше ${value}` );
    } else {
        alert( `${randomValue} меньше ${value}` );
    }
}
findBiggerValue();
// 8
let str = prompt("Введите --- Мне нравится изучать Front-end", "Мне нравится изучать Front-end");
let myPrefers = prompt("Ваши предпочтения", "Front-end");
str.toLowerCase().includes(myPrefers.toLowerCase(), 0) ?
    alert(`${myPrefers} найдено`) :
    alert(`${myPrefers} не найдено`);

let starPos = str.indexOf('Мне нравится изучать');
let endPos = 'Мне нравится изучать'.length;
const slice = str.slice(starPos, endPos);
let result = `${slice} ${myPrefers}`;
alert(result);