import { Person } from "./person";
class Father extends Person {
  falar(): void {
    console.log("This is the father.");
    this.howManyChildren;
  }
}
const pai:Father = new Father(4);
pai.falar();
