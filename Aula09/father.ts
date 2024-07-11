import { Person } from "./person";
class Father extends Person {
  falar(): void {
    this.howManyChildren()
    console.log("This is the father.")
  }
}
const pai:Person = new Person(4);
//pai.howManyChildren();

const novoPai:Father = new Father(3)
novoPai.falar()
