function p1(a: Array<number> | null) {

    //[1,2,10] => ['(1) (2) (10)']

    if (a) {
        return a.map((x: any) => `(${x})`).join(' ');
    }

    a;
}

console.log(p1([1, 20, 10]));
console.log(p1([1]));

console.log(p1(null));