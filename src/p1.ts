function p1(a: Array<number>) {

    //[1,2,10] => ['(1) (2) (10)']

    return a.map((x: any) => `(${x})`).join(' ');
}

console.log( p1([1,20,10]) );
console.log( p1([1]) );

console.log( p1(null) );