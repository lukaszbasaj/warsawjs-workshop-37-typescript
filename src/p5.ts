import isNotLetter from 'is-not-letter';

const x = 'abc';

function plus5(a: number) {
    return a + 5;
}

console.log(`${x}: ${ isNotLetter(x).toString()} `);
// console.log( plus5(isNotLetter(x)));

// console.log(`${isNotLetter(x) + 10 }`);

const y = isNotLetter(x);