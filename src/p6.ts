function f(x: string): number {
    return x.length;
}

function z(x: number): void {

}

function g(h: Function) {
    console.log( h('abc'));
}

g(f);
