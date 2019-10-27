import isLetter from 'is-letter';
import { StrictOmit, MarkRequired } from 'ts-essentials';


type A = Array<string> | null
type B = {
    a: A,
    x: number,
};

type C = {
    a: A,
    x?: number
};

type CR = MarkRequired<C, 'x'>

const cr: CR = { a: [], x: 1 }

type D = StrictOmit<B, 'x'>;

const d: D = {
    a: ['abc','x','def','y','Z'],
}

const b: B = {
    a: ['abc','x','def','y','Z'],
    x: 2,
}

const c: C = {
    a: ['abc','x','def','y','Z'],
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

