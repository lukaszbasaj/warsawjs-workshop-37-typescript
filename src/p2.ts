import isLetter from 'is-letter';

function p2(a: Array<string> | null): string {

    //[1,2,10] => ['(1) (2) (10)']

    if (a) {
        return a.filter(isLetter).map((x: any) => `(${x})`).join(' ');
    }

    return '';
}

console.log( p2(null) );

console.log( p2(['abc', 'x', 'def', 'y', 'Z']) );