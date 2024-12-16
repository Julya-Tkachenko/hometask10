'Use strict'

// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

// валідація: програма має писати помилку на такі дані від юзера:

// null
// '      '
// '   12dsdf   '
// '    12.12  '

const userNumber = prompt('Enter an integer');

if (!userNumber?.trim() || isNaN(userNumber) || !Number.isInteger(+userNumber)) {
    alert ('Error: invalid number');
} else {
    const num = Number(userNumber);
    if (num >= 1) {
        const arr = [];
        for ( let i = 1; i <= 100; i++) {
            if ( (i * i) <= num) {
                arr.push(i);
            }   
        } 
        const strFromArr = arr.join(" ");
        alert(`All integers: ${strFromArr}`);
    } else {
        alert('Error: invalid number');
    }   
}