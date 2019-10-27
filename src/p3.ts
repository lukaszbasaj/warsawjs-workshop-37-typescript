import isLetter from 'is-letter';

type A = Array<string> | null
type B = {
    a: A,
    x: number,
};

const b: B = {
    a: ['abc','x','def','y','Z'],
    x: 2,
}

function p3(b: B): string {

    //[1,2,10] => ['(1) (2) (10)']

    if (b.a) {
        return b.a.filter(isLetter)
        .map((x: any) => `(${x})`)
        .slice(0, b.x)
        .join(' ');
    }

    return '';
}

console.log(p3(b));

console.log( p3({ a:null, x:1 }) );

