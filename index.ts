// The `class` declaration gets a bunch of extra code generated to make it ES5
// compatible.
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Similarly, the generator function gets a *bunch* of extra code generated,
// both inline and also in the "runtime" it ships: see the very first section of
// code in the generated `.js` file.
export function* lookMaAGenerator() {
  yield 5;
}

// Notice that the `Promise` gets compiled as is to the output.
export const aPromise = Promise.resolve("waffles");
