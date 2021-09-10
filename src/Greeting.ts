export class Greeting {
  constructor(name: string) {
    console.log(this.sayHi(name));
  }

  sayHi(name: string): string {
    return `Hi ${name}`;
  }
}
