export class Person {
  protected children: number; //"protected" = só acessivel dentre da classe/filhas
  constructor(children: number) {
    this.children = children;
  }
  protected howManyChildren(): void {
    console.log(`This person has ${this.children} children.`);
  }
}
