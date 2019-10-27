function f(x: string): number {
    return x.length;
}

function z(x: string): void {

}

function g(h: (a: string) => number) {
    console.log( h('abc'));
}

g(f);
