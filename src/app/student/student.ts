export class Student {
  constructor(
    public age: number,
    public name: string,
    public id: string = ""
  ){ 
    this.id = String(new Date().getTime() + age);
  }
}